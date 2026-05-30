---
description: Guide for building computational physics research projects — Monte Carlo, molecular dynamics, quantum simulation, continuum PDE solvers, and optimization methods. Covers architecture, parallel processing, C++/Fortran/GPU acceleration, APS/Elsevier LaTeX articles, and publication-quality figures.
when_to_use: |
  User mentions: computational physics, numerical simulation, Monte Carlo, molecular dynamics, quantum computing, quantum simulation, density matrix, tensor networks, DMRG, exact diagonalization, DFT, density functional theory, Hartree-Fock, coupled cluster, VQE, quantum monte carlo, path integral, Ising model, Heisenberg model, Hubbard model, lattice gauge theory, spin systems, phase transition, critical phenomena, finite-size scaling, statistical mechanics, condensed matter, soft matter, biophysics, computational fluid dynamics, finite difference, finite element, PDE solver, Poisson equation, diffusion equation, wave equation, Schrödinger equation, Newton's equations, Verlet algorithm, velocity Verlet, Langevin dynamics, Brownian dynamics, Nose-Hoover thermostat, replica exchange, parallel tempering, umbrella sampling, metadynamics, force fields, Lennard-Jones, Ewald summation, or asks to create a numerical physics simulation project.
  Also use when user asks about APS/Elsevier LaTeX articles, publication-quality figures, C++/Fortran/GPU hybrid workflows, or parallelizing physics simulations.
---

# Computational Physics Project Patterns

Apply these patterns when building computational physics research projects. The architectural principles are universal across Monte Carlo (MC), Molecular Dynamics (MD), quantum simulation, continuum PDE solvers, and optimization methods.

## Simulation paradigm selection

Choose the appropriate computational approach based on the physics:

| Paradigm                | Method                                                   | Typical application                                                                       |
| ----------------------- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| **Monte Carlo**         | Metropolis, Wolff cluster, Wang-Landau, replica exchange | Spin systems, lattice gauge theory, polymer statistics, percolation                       |
| **Molecular Dynamics**  | Velocity Verlet + thermostat (Nosé-Hoover, Langevin)     | Soft matter, biomolecules, fluid transport, heat conduction                               |
| **Quantum exact**       | Exact diagonalization, Lanczos, DMRG                     | Small quantum many-body systems (Hubbard, Heisenberg chains)                              |
| **Quantum approximate** | Tensor networks (MPS, PEPS), VQE, QMC, coupled cluster   | Large quantum systems, quantum chemistry                                                  |
| **Continuum PDE**       | Finite difference, finite element, spectral methods      | CFD, electromagnetism, elasticity, reaction-diffusion, quantum mechanics (imaginary time) |
| **Optimization**        | Simulated annealing, basin hopping, genetic algorithms   | Structure prediction, parameter fitting, landscape exploration                            |

Each paradigm has its own simulation engine, but all share the same project architecture: config → model → engine → observables → analysis → visualization → article.

## Universal architecture

### Module design (paradigm-agnostic)

```
project/
├── simulation.conf          # All parameters in one INI file
├── config_loader.py         # Parse config → typed dataclass
├── system.py                # Physical system: lattice, particles, basis states, mesh
├── engine.py                # Simulation engine: MC sweeps, MD integrator, solver
├── observables.py           # Physical quantities with error estimation
├── analysis.py              # Post-processing: fitting, scaling, free energy
├── visualization.py         # All plots (PDF + PNG), non-interactive backend
├── main.py                  # Entry point: config → simulate → analyze → plot
├── article/
│   ├── main.tex             # APS/Elsevier-format LaTeX article (English)
│   ├── main.bib             # Bibliography
│   └── figures/             # Symlink or copy of figures/pdf/
├── figures/
│   ├── pdf/                 # Vector PDFs for LaTeX inclusion
│   └── png/                 # Raster PNGs for quick preview / Markdown / slides
├── data/                    # Serialized simulation results (.npz or .h5)
├── technical_documentation.md
├── CLAUDE.md
└── README.md
```

**Data flow:** `simulation.conf` → `SimConfig` dataclass → `engine.run()` → trajectory / time series → `observables` (jackknife or block averaging) → `analysis` + `visualization` → figures + LaTeX article.

**Module dependency chain:** `main` imports all; `engine` imports `system`; `observables`, `analysis`, `visualization` are pure leaf modules with no internal project dependencies.

### Paradigm-specific module naming

For clarity in larger projects, use paradigm-specific names:

| Generic | MC | MD | Quantum | Continuum |
|---------|-----|-----|---------|-----------|
| `system.py` | `lattice.py` | `system.py` | `basis.py`, `operator.py` | `mesh.py` |
| `engine.py` | `monte_carlo.py` | `integrator.py` | `solver.py` | `solver.py` |
| — | — | `force_field.py`, `thermostat.py` | `hamiltonian.py` | `boundary.py` |

### Scalability rules

- All parameters in a config file (INI, YAML, or TOML), parsed into a typed dataclass. Never hardcode system size, temperature, time step, or file paths.
- Use computed properties for derived parameter arrays: `T_array = np.linspace(T_min, T_max, n_points)` or `time_points = np.arange(0, t_total, dt)`.
- Observable functions take `(trajectory_data, *params)` and return `(value, error)` tuples — a uniform signature making analysis code generic across paradigms.
- Document any physics-based hardcoded thresholds (e.g., initial condition regimes) in the config file and CLAUDE.md.

## Multi-language: compiled code for compute, Python for orchestration

For computationally intensive inner loops, write the simulation engine in a compiled language and call it from Python.

### When to use compiled languages

Profile first, then port the bottleneck. Candidates:
- Monte Carlo inner sweep at L ≥ 64 with 10^7+ attempted flips
- MD force computation with 10^4+ particles and long-range electrostatics
- Matrix-vector products in Lanczos/DMRG iterations
- Stencil operations in finite-difference PDE solvers
- Tensor contractions in tensor network algorithms

### Language selection

| Language                                                   | Integration                      | Best for                                                 |
| ---------------------------------------------------------- | -------------------------------- | -------------------------------------------------------- |
| **C++** via [pybind11](https://github.com/pybind/pybind11) | `pybind11_add_module()` in CMake | Lattice models, MD force kernels, PDE solvers            |
| **Fortran** via `f2py` or `ctypes`                         | `f2py -c -m module file.f90`     | Legacy physics codes, BLAS/LAPACK-heavy kernels          |
| **CUDA** via [CuPy](https://cupy.dev) or `cupy.RawKernel`  | Just-in-time compiled kernels    | Lattice models, tensor networks, MD with 10^5+ particles |
| **Rust** via [PyO3](https://pyo3.rs) + `maturin`           | `maturin develop`                | New projects prioritizing memory safety                  |

### Python side (universal pattern)

```
            simulation.conf
                  │
          config_loader.py → SimConfig
                  │
          runner.py (Python orchestration)
                  │  multiprocessing.Pool / ProcessPoolExecutor
                  ├── Worker(params_1, seed_8472)  →  compiled_core.run()  → {data}
                  ├── Worker(params_2, seed_9135)  →  compiled_core.run()  → {data}
                  └── Worker(params_N, seed_7621)  →  compiled_core.run()  → {data}
                  │
          observables.py   ← error estimation on compiled output arrays
          analysis.py      ← post-processing and fitting
          visualization.py ← all plotting
```

Key invariant: the Python layer handles configuration, parallel dispatch, I/O, error estimation, and visualization. The compiled layer handles only the inner loop of the simulation algorithm.

See [references/hybrid-cpp-python.md](references/hybrid-cpp-python.md) for detailed C++/pybind11 integration and [references/simulation-paradigms.md](references/simulation-paradigms.md) for domain-specific examples.

## Parallel processing

### Embarrassingly parallel patterns (all paradigms)

Most computational physics workloads decompose naturally:
- **MC**: independent (L, T) or (coupling, T) pairs
- **MD**: independent trajectories from different initial conditions or temperatures
- **Quantum**: independent (U, t) points for phase diagrams, or (L, boundary condition) combinations
- **PDE**: independent parameter sets or initial conditions

Use `multiprocessing.Pool` or `concurrent.futures.ProcessPoolExecutor`.

### Seeding strategy for reproducibility

1. Create a single top-level `np.random.default_rng(seed)`.
2. Before any parallel work, pre-generate integer seeds for all jobs: `seeds = rng.integers(0, 2**31, size=n_jobs)`.
3. Each worker receives one seed and creates its own local RNG.
4. Workers never share RNG state.

If using Numba JIT (Numba uses its own PCG64), draw per-sweep/per-step integer seeds from the Python Generator and pass them into the `@njit` function.

### Job granularity

- Coarse: one simulation job per worker (recommended for n_jobs ≤ 100, each job ≥ 10 s).
- Medium: group parameter scans when n_jobs is large.
- Use `tqdm.contrib.concurrent.process_map` for progress bars.

### Mid-simulation parallelism

When individual simulations are too large for one core:
- **MC**: parallel trial flips with domain decomposition (requires careful PBC handling)
- **MD**: spatial decomposition via MPI (LAMMPS, GROMACS pattern)
- **Quantum**: distributed matrix-vector products (PETSc, SLEPc)
- **PDE**: domain decomposition (MPI + OpenMP, PETSc, AMReX)

For these cases, the compiled core should use MPI internally, with one Python process per MPI communicator.

## Output organization

### Figures: separate formats in separate directories

```
figures/
├── pdf/                        # Vector graphics for LaTeX inclusion
│   ├── energy_vs_T.pdf
│   ├── radial_distribution.pdf
│   └── phase_diagram.pdf
└── png/                        # Raster for quick preview, Markdown, slides
    ├── energy_vs_T.png
    └── radial_distribution.png
```

- `visualization.py` saves both formats in one call: `fig.savefig(f"figures/pdf/{name}.pdf")` and `fig.savefig(f"figures/png/{name}.png", dpi=300)`.
- LaTeX `\includegraphics` points to `figures/pdf/` (or a symlinked `article/figures/`).
- Markdown reports and slides use `figures/png/`.

### Data persistence

- Serialize simulation results as `.npz` (NumPy, for moderate data) or `.h5` (HDF5, for large trajectories or multi-dimensional parameter sweeps).
- `main.py --load` reads saved data and regenerates figures + analysis without re-running simulations.
- File naming: `{system}_{size}_{param}.npz` (e.g., `ising_L64.npz`, `md_nvt_T300.npz`).

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
- **Axis labels**: concise, with units when applicable. E.g., `Temperature T` or `Radial distance r (σ)`.
- **Tick marks**: inward direction, visible on all four sides for boxed plots.
- **Panel labels**: for multi-panel figures, use `ax.text(0.02, 0.98, '(a)', transform=ax.transAxes, va='top')` — placed inside the panel, top-left.
- **Color**: use perceptually uniform colormaps (`viridis`, `cividis`, `plasma`) for heatmaps; use distinct line styles (solid, dashed, dotted) so line plots remain readable in grayscale print.
- **Font sizes**: no smaller than 7 pt after journal column width scaling. Test by viewing the PDF at 100% zoom.
- **Save format for LaTeX**: PDF (vector) for line plots; PNG at 300+ dpi only for raster content (spin config, density field, wavefunction amplitude).
- **Consistent dimensions**:
  - APS single-column: `figsize=(3.35, 2.5)` (~8.6 cm)
  - APS double-column: `figsize=(7.0, 2.5)` (~17.8 cm)
  - Elsevier single-column: `figsize=(3.5, 2.6)` (~9 cm)
  - IOP single-column: `figsize=(3.3, 2.4)` (~8.5 cm)

## LaTeX articles

### Journal template selection

| Publisher | Journal class | Use case |
|-----------|--------------|----------|
| APS (PRE) | `revtex4-2` + `\documentclass[pre,aps,twocolumn]{revtex4-2}` | Statistical physics, computational methods |
| APS (PRL) | `revtex4-2` + `\documentclass[prl,aps,twocolumn]{revtex4-2}` | Short, high-impact results |
| APS (PRB) | `revtex4-2` + `\documentclass[prb,aps,twocolumn]{revtex4-2}` | Condensed matter |
| APS (PRA) | `revtex4-2` + `\documentclass[pra,aps,twocolumn]{revtex4-2}` | Atomic, molecular, optical; quantum information |
| Elsevier | `elsarticle` + `\documentclass[review]{elsarticle}` | General physics, chemical physics |
| IOP | `iopart` + `\documentclass[12pt]{iopart}` | J. Phys. series, general physics |
| AIP | `aip` + `\documentclass{aip}` | J. Chem. Phys., Appl. Phys. Lett. |
| Springer | `svjour3` + `\documentclass[twocolumn]{svjour3}` | Eur. Phys. J., book chapters |

### Key practices

- **English only**: all article text, figure captions, and table content in English. Use international standard terminology.
- **Figure inclusion**: `\includegraphics[width=\columnwidth]{figures/pdf/energy_vs_T.pdf}` — use `\columnwidth` for single-column or `\textwidth` for wide figures.
- **Bibliography**: use a `.bib` file with `\bibliography{main}`. Journal class handles reference formatting.
- **Compilation**: `pdflatex → bibtex → pdflatex × 2` (standard). For Unicode: `xelatex → bibtex → xelatex × 2` (ensure `fontspec` loaded).
- **Tables**: use `booktabs` with `\toprule`, `\midrule`, `\bottomrule`. No vertical rules. Right-align numbers, left-align text.
- **No `ctex` unless Chinese content is required**: for English articles, `ctex` changes fonts and spacing unnecessarily.

### Markdown report as companion

Alongside the LaTeX article, generate a Markdown report (`article/report.md`) for GitHub/GitLab rendering. Same numerical values, relaxed formatting. Serves as a quick-reference version accessible without compilation.

See [references/aps-formatting.md](references/aps-formatting.md) for detailed APS style requirements and [references/simulation-paradigms.md](references/simulation-paradigms.md) for domain-specific LaTeX examples.

## Technical documentation

Write a `technical_documentation.md` at the project root covering:

1. **Project overview and physics background** — one paragraph each
2. **Architecture diagram** — ASCII art data flow
3. **Module descriptions** — one section per .py / .cpp / .f90 file: purpose, inputs, outputs, key algorithms
4. **Configuration reference** — every parameter explained with default values and valid ranges
5. **Usage guide** — conda/venv environment, build commands (CMake for C++, f2py for Fortran), run commands (full simulation, `--load` mode, smoke test)
6. **Output files** — what each generated file contains
7. **Extension guide** — how to add a new observable, a new geometry, or a new simulation algorithm

## RNG architecture

```
Top-level seed (e.g., 42)
    │
    ▼
np.random.default_rng(seed)          ← Python Generator (or std::mt19937 in C++)
    │
    ├──→ int_seed_job_0              ← per-simulation-job seed
    ├──→ int_seed_job_1
    ├──→ ...
    │
    ▼
Worker(params, int_seed):
    local_rng = np.random.default_rng(int_seed)
    for step in range(n_steps):
        step_seed = local_rng.integers(0, 2**31)
        result = _numba_inner_loop(state, params, step_seed)
```

Key invariant: a single top-level seed determines all randomness. Workers never share RNG state. In compiled code, `std::mt19937` (C++) or `random_number` (Fortran) replaces `np.random.Generator`.

## Error estimation

### Jackknife (MC and general time-series data)

1. Divide measurement data into `n_bins` contiguous blocks (typically 10–30).
2. Compute the observable on each bin → `θ_i`.
3. Compute the all-data estimate: `θ_all`.
4. For each jackknife replicate, leave out one bin: `θ_jk = mean of n_bins - 1 bins`.
5. Bias-corrected estimate: `θ̃ = n_bins * θ_all - (n_bins - 1) * mean(θ_jk)`.
6. Standard error: `sqrt((n_bins - 1) * var(θ_jk) / n_bins)`.

### Block averaging (MD transport coefficients, autocorrelated data)

1. Divide the trajectory into blocks of increasing size.
2. Compute the observable for each block size.
3. Plot standard error vs. block size — the plateau value is the true error.
4. Use `statsmodels.tsa.stattools.acf` to check autocorrelation time τ.
5. Ensure block size ≥ 10τ for valid error estimates.

### Bootstrap (non-Gaussian error distributions)

When the observable distribution is non-Gaussian (free energy differences, histogram reweighting), use bootstrap: resample bins with replacement N_bootstrap times, compute observable distribution percentiles.

## Additional resources

- [references/simulation-paradigms.md](references/simulation-paradigms.md) — Detailed patterns for MC, MD, quantum, and continuum methods
- [references/aps-formatting.md](references/aps-formatting.md) — APS figure, table, and bibliography formatting rules
- [references/hybrid-cpp-python.md](references/hybrid-cpp-python.md) — C++/Python integration with pybind11, CMake, and parallel dispatch
- [templates/project-structure.md](templates/project-structure.md) — Complete directory layouts for each paradigm
- [templates/simulation.conf](templates/simulation.conf) — Annotated configuration template with sections for all paradigms