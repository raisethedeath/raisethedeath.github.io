---
description: Guide for building computational physics simulation projects with Monte Carlo methods, finite-size scaling, and publication-quality output. Use when starting or refactoring numerical simulation projects, especially in statistical mechanics, condensed matter physics, or lattice models.
when_to_use: |-
  User mentions: computational physics, Monte Carlo simulation, Ising model, lattice model, statistical mechanics, finite-size scaling, Metropolis algorithm, phase transition, critical phenomena, or asks to create a numerical physics simulation project.
  Also use when user asks about APS-format LaTeX articles, publication-quality figures, C++/Python hybrid workflows, or parallelizing simulation sweeps.
---

# Computational Physics Project Patterns

Apply these patterns when building computational physics simulation projects. They come from a completed 2D Ising model Monte Carlo study and are reusable across lattice models, molecular dynamics, and other numerical statistical mechanics projects.

## Architecture

### Module design

```
project/
├── simulation.conf          # All parameters in one INI file
├── config_loader.py         # Parse config → typed dataclass
├── model.py                 # Core physics: lattice, Hamiltonian, MC step
├── monte_carlo.py           # Simulation engine: thermalize → measure → bin
├── observables.py           # Physical quantities with error estimation
├── analysis.py              # Finite-size scaling, Tc extraction, fitting
├── visualization.py         # All plots, non-interactive backend
├── main.py                  # Entry point: config → simulate → analyze → plot
├── article/
│   ├── main.tex             # APS-format LaTeX article (English)
│   ├── main.bib             # Bibliography
│   └── figures/             # Figures copied here for LaTeX import
├── figures/
│   ├── pdf/                 # Vector PDFs for LaTeX inclusion
│   └── png/                 # Raster PNGs for quick preview / Markdown
├── data/                    # Serialized simulation results (NumPy .npz)
└── README.md
```

**Data flow:** `simulation.conf` → `SimConfig` dataclass → `Simulation.run()` → binned time series → `observables` (jackknife) → `analysis` + `visualization` → figures + LaTeX article.

**Module dependency chain:** `main` imports everything. `monte_carlo` imports `model`. `observables`, `analysis`, `visualization` are pure leaf modules with no internal project dependencies.

### Scalability rules

- All parameters in a config file (INI, YAML, or TOML), parsed into a dataclass. Never hardcode L, T, sweep counts, or file paths.
- Use a `T_array` property that generates `np.linspace(T_min, T_max, n_points)` — temperature grid changes only in config.
- Observable functions take `(binned_data, T, N)` and return `(value, error)` tuples — a uniform signature that makes analysis code generic.
- Initial config rules (aligned vs. random) may be hardcoded by physics (e.g., `T < 2.5` threshold for Ising), but document this in the config file and CLAUDE.md.

## Multi-language: C++ for compute, Python for orchestration

For computationally intensive problems (large L, long sweeps, replica exchange, Wang-Landau), write the simulation core in C++ and call it from Python.

### Pattern: pybind11

```
project/
├── src/
│   ├── ising.cpp            # C++ core: lattice, Metropolis, measurements
│   ├── bindings.cpp         # pybind11 module definition
│   └── Makefile
├── config_loader.py         # Python config → passes parameters to C++
├── mc_runner.py             # Python driver: multiprocessing over (L, T)
├── observables.py           # Python: jackknife on C++ output arrays
├── analysis.py
└── visualization.py
```

**C++ side:**
- Lattice as `std::vector<int8_t>` with manual PBC indexing (faster than `np.roll`).
- RNG: `std::mt19937` seeded per sweep from Python-supplied integer seeds.
- Accept rate, energy, magnetization time series returned as `py::array_t<double>`.

**Python side:**
- `multiprocessing.Pool` over `(L, T)` pairs — each worker imports the C++ module and runs one simulation.
- Single `np.random.Generator` generates integer seeds for every (L, T, sweep) combination before parallel dispatch — ensures reproducibility.
- Jackknife error estimation, scaling analysis, and plotting all stay in Python (NumPy/SciPy/Matplotlib).

See [references/hybrid-cpp-python.md](references/hybrid-cpp-python.md) for detailed integration patterns.

## Parallel processing

Monte Carlo sweeps over different (L, T) values are embarrassingly parallel. Use `multiprocessing.Pool` or `concurrent.futures.ProcessPoolExecutor`.

### Seeding strategy for reproducibility

1. Create a single top-level `np.random.default_rng(seed)`.
2. Before any parallel work, draw `n_total = n_L * n_T` integer seeds from it: `seeds = rng.integers(0, 2**31, size=n_total)`.
3. Each worker receives one seed for its (L, T) pair.
4. Inside each worker, create a fresh `np.random.default_rng(worker_seed)` for the simulation.

If using Numba JIT (Numba uses its own PCG64 internally), draw per-sweep integer seeds from the Python Generator and pass them into the `@njit` function, which calls `np.random.seed(int_seed)` internally.

### Job granularity

- Coarse: one (L, T) per worker (recommended for L ≤ 128, n_T ~ 30).
- Fine: group sweeps when n_T is very large.
- Use `tqdm.contrib.concurrent.process_map` for progress bars.

## Output organization

### Figures: separate formats in separate directories

```
figures/
├── pdf/                        # Vector graphics for LaTeX inclusion
│   ├── energy_vs_T.pdf
│   ├── binder_cumulant.pdf
│   └── scaling_collapse_m.pdf
└── png/                        # Raster for quick preview, Markdown, slides
    ├── energy_vs_T.png
    └── binder_cumulant.png
```

- `visualization.py` saves both formats in one call: `fig.savefig(f"figures/pdf/{name}.pdf", ...)` and `fig.savefig(f"figures/png/{name}.png", dpi=300, ...)`.
- LaTeX `\includegraphics` points to `figures/pdf/` or a symlinked `article/figures/`.
- Markdown reports use `figures/png/` for GitHub/GitLab rendering.

### Data persistence

- Serialize simulation results as `.npz` (NumPy) or `.h5` (HDF5 for large datasets).
- `main.py --load` reads saved data and regenerates figures + analysis without re-running simulations.
- File naming: `ising_L{size}_T{start}-{end}.npz` or `results_L{size}.npz`.

## Publication-quality figures

### Matplotlib configuration

```python
import matplotlib as mpl
mpl.use("Agg")                          # Non-interactive backend
mpl.rcParams.update({
    "font.family": "serif",
    "font.size": 10,
    "axes.labelsize": 12,
    "axes.linewidth": 0.8,
    "xtick.major.size": 4,
    "xtick.major.width": 0.8,
    "ytick.major.size": 4,
    "ytick.major.width": 0.8,
    "legend.fontsize": 9,
    "figure.dpi": 150,
    "savefig.bbox": "tight",
    "savefig.pad_inches": 0.05,
})
```

### Figure design rules for academic journals

- **No figure title** — the caption in the LaTeX source provides all description. Never call `ax.set_title()`.
- **Legend over title**: use `ax.legend(frameon=False, loc='best')` to identify datasets.
- **Axis labels**: concise, with units in parentheses when applicable. E.g., `Temperature T` not `Temperature T (K)` unless the unit is essential.
- **Tick marks**: inward direction, visible on all four sides for boxed plots.
- **Panel labels**: for multi-panel figures, use `ax.text(0.02, 0.98, '(a)', transform=ax.transAxes, va='top')` — placed inside the panel, top-left.
- **Color**: use perceptually uniform colormaps (`viridis`, `cividis`, `plasma`) for heatmaps; use distinct line styles (solid, dashed, dotted) for line plots so they remain readable when printed in grayscale.
- **Font sizes**: no smaller than 7 pt after journal column width scaling. Test by viewing the PDF at 100% zoom.
- **Save format for LaTeX**: PDF (vector) for line plots; PNG at 300+ dpi only for raster-heavy content (spin configuration imshow, density plots).
- **Consistent dimensions**: use `figsize=(3.35, 2.5)` for single-column (PRE/PRL style) or `figsize=(7.0, 2.5)` for double-column. APS single-column width is ~8.6 cm (3.35 in).

### Spin configuration / heatmap plots

```python
fig, ax = plt.subplots(figsize=(3.2, 3.2))
im = ax.imshow(spins, cmap='binary', interpolation='none', vmin=-1, vmax=1)
# NO colorbar for spin configs (up/down is self-evident)
ax.set_xticks([])
ax.set_yticks([])
```

## LaTeX articles with APS templates

### Template selection

| Journal                       | Template                                           | Use case                                   |
| ----------------------------- | -------------------------------------------------- | ------------------------------------------ |
| Physical Review E (PRE)       | `revtex4-2` + `\documentclass[pre,aps]{revtex4-2}` | Statistical physics, computational methods |
| Physical Review Letters (PRL) | `revtex4-2` + `\documentclass[prl,aps]{revtex4-2}` | Short, high-impact results                 |
| Physical Review B (PRB)       | `revtex4-2` + `\documentclass[prb,aps]{revtex4-2}` | Condensed matter                           |

### Key practices

- **English only**: all article text, figure captions, and table content in English. Use international standard terminology.
- **revtex4-2**: APS journals require `revtex4-2`. The template handles two-column layout, author affiliations, and bibliography style automatically.
- **Figure inclusion**: `\includegraphics[width=\columnwidth]{figures/pdf/energy_vs_T.pdf}` — use `\columnwidth` for single-column figures or `\textwidth` for wide figures spanning both columns.
- **Bibliography**: use a `.bib` file with `\bibliography{main}`. APS reference style is handled by revtex.
- **Compilation**: for basic use: `pdflatex → bibtex → pdflatex × 2`. For Unicode (if non-English author names appear): `xelatex → bibtex → xelatex × 2`. Ensure `fontspec` is loaded when using xelatex.
- **Tables**: use `booktabs` with `\toprule`, `\midrule`, `\bottomrule`. No vertical rules. Right-align numbers, left-align text.
- **No `ctex` unless Chinese content is required**: for English articles, use standard LaTeX with `babel` or nothing — `ctex` is only needed for Chinese text.

### Markdown report as companion

Alongside the LaTeX article, generate a Markdown report (`article/report.md`) for GitHub rendering. Use the same numerical values but relaxed formatting. This serves as a quick-reference version accessible without compilation.

See [references/aps-formatting.md](references/aps-formatting.md) for detailed APS style requirements.

## Technical documentation

Write a `technical_documentation.md` at the project root covering:

1. **Project overview and physics background** — one paragraph each
2. **Architecture diagram** — ASCII art data flow
3. **Module descriptions** — one section per .py/.cpp file: purpose, inputs, outputs, key algorithms
4. **Configuration reference** — every parameter explained with default values and valid ranges
5. **Usage guide** — conda environment, build commands (CMake/Make for C++), run commands (full simulation, --load mode, smoke test)
6. **Output files** — what each generated file contains
7. **Extension guide** — how to add a new observable, a new lattice geometry, or a new Monte Carlo algorithm

## RNG architecture

```
Top-level seed (e.g., 42)
    │
    ▼
np.random.default_rng(seed)          ← Python Generator
    │
    ├──→ int_seed_T1_L16              ← per-(L,T) seed
    ├──→ int_seed_T2_L16
    ├──→ ...
    │
    ▼
Worker(L, T, int_seed):
    rng = np.random.default_rng(int_seed)
    for sweep in range(n_total):
        sweep_seed = rng.integers(0, 2**31)
        accept = _numba_sweep(spins, beta, sweep_seed)
```

Key invariant: a single top-level seed determines all randomness. Workers never share RNG state. If using C++, replace `np.random.default_rng` with `std::mt19937` seeded the same way.

## Error estimation

Use **jackknife resampling on binned data** (not on raw time series):

1. Divide measurement sweeps into `n_bins` contiguous blocks (typically 10–30).
2. Compute the observable on each bin → `θ_i` (bin means).
3. Compute the all-data estimate: `θ_all`.
4. For each jackknife replicate, leave out one bin: `θ_jk = mean of remaining n_bins-1 bins`.
5. Bias-corrected estimate: `θ̃ = n_bins * θ_all - (n_bins - 1) * mean(θ_jk)`.
6. Standard error: `sqrt((n_bins - 1) * var(θ_jk) / n_bins)`.

Apply this template in every `observables.py` function.

## Additional resources

- [references/aps-formatting.md](references/aps-formatting.md) — Detailed APS figure, table, and bibliography formatting rules
- [references/hybrid-cpp-python.md](references/hybrid-cpp-python.md) — C++/Python integration with pybind11, CMake, and parallel dispatch
- [templates/project-structure.md](templates/project-structure.md) — Complete directory layout with annotations
- [templates/simulation.conf](templates/simulation.conf) — Annotated INI configuration template