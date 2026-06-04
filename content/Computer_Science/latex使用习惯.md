i撰写英文 LaTeX 文档时，遵循一些好习惯能显著提升代码的可读性、可维护性，以及最终输出文档的专业性。以下整理了一套从项目结构、代码风格到编译管理的实用建议。

---

## 1. 项目组织：告别单一文件

**坏习惯**：所有内容塞在一个 `main.tex` 里，修改时上下翻飞，还容易出错。

**好习惯**：**模块化拆分**。将文档分成逻辑块，主文件只管调度。

```
project/
├── main.tex              # 主文件：引入宏包、封面、章节入口
├── chapters/
│   ├── introduction.tex
│   ├── method.tex
│   └── conclusion.tex
├── figs/                 # 所有图片集中存放
│   ├── flowchart.pdf
│   └── photo.jpg
├── tables/
│   └── results.tex       # 单独存放复杂表格
├── refs.bib              # BibTeX 参考文献库
└── style.sty             # 自定义宏包/样式
```

**做法**：
- 主文件里用 `\input{chapters/introduction.tex}` 或 `\include{}` 引入子文件。
- `\include` 会另起一页，适合章节；`\input` 只是原样插入，适合片段。
- 图片路径用相对路径，统一使用 `figs/` 前缀。

---

## 2. 宏包管理：按需加载，分组注释

- **按类分组**，并简要注释用途，例如：

```latex
% --- Fonts & Encodings ---
\usepackage[T1]{fontenc}      % 西文编码
\usepackage{newtxtext,newtxmath} % Times 风格字体

% --- Math & Theorems ---
\usepackage{amsmath,amssymb}
\usepackage{amsthm}

% --- Figures & Tables ---
\usepackage{graphicx}
\usepackage{booktabs}

% --- Hyperlinks ---
\usepackage{hyperref}
```

- **不要盲目加载**：频繁引用的包才放导言区；试验性功能用 `\usepackage` 的 `draft` 或 `final` 选项控制。
- 使用 `\usepackage[<options>]{<package>}` 时，合理利用选项，例如 `hyperref` 的 `colorlinks=true, citecolor=blue`。

---

## 3. 排版基础：统一字体、行距与页面

- **字体**：推荐用 `mathdesign`、`libertine` 或全 `newtx` 系列，保持正文字体与数学字体和谐。
- **行距**：根据模板要求，用 `setspace` 宏包：
  ```latex
  \usepackage{setspace}
  \onehalfspacing   % 或 \doublespacing
  ```
- **页面尺寸**：用 `geometry` 宏包精确控制：
  ```latex
  \usepackage[a4paper, margin=1in]{geometry}
  ```

---

## 4. 数学公式：专业与可读

- 所有数学符号都放在 `$...$` 或 `\(...\)` 中，即使是一个变量 `$x$`。
- 多行公式使用 `align`、`gather` 环境，而非 `eqnarray`（已被弃用）。
- 函数名用内置命令，如 `\sin`, `\log`；缺少的用 `\DeclareMathOperator{\Var}{Var}` 声明。
- 微分符号用小写 d，并用 `\,` 微调距离：`\int f(x) \, dx`。或者定义 `\newcommand{\d}{\mathrm{d}}` 后直接用 `\int f(x) \d x`。
- 向量和矩阵：粗体使用 `\mathbf{x}` 或 `\bm{x}`（`bm` 宏包），矩阵用 `pmatrix`、`bmatrix` 等。

---

## 5. 表格：追求简洁专业

**金标准**：用 `booktabs` 包，**杜绝竖线，减少横线**。

```latex
\usepackage{booktabs}
...
\begin{table}
  \centering
  \caption{Your caption.}
  \begin{tabular}{@{}llr@{}}
    \toprule
    Method & Parameter & Error \\
    \midrule
    A      & 0.1       & 2.3\% \\
    B      & 0.5       & 1.1\% \\
    \bottomrule
  \end{tabular}
\end{table}
```
- `@{}` 抑制列两边额外空白，让表格与文字左对齐。
- 数字列用 `r`（右对齐），小数位对齐可用 `siunitx` 宏包的 `S` 列。
- 表格宽大问题用 `tabularx` 或 `adjustbox` 处理。

---

## 6. 图片：矢量优先，代码独立

- **优先使用矢量图**：`pdf` 格式最好，没有栅格化问题。
- 不要用截图式的 JPG/PNG，除非是照片。
- 插入图片时避免使用绝对路径和缩放混乱，使用 `width=\textwidth` 或相对比例 `0.6\linewidth`：
  ```latex
  \includegraphics[width=0.8\textwidth]{figs/flowchart}
  ```
- 为每个图片提供简短的 `\caption`，并在正文中被 `\ref{fig:xxx}` 引用。

---

## 7. 交叉引用与自动化

- **始终使用 `\label{}` 和 `\ref{}`** 系统。标签命名采用一致的前缀：
  - `sec:intro`, `eq:maxwell`, `fig:overview`, `tab:results`, `alg:gradient`
- 引用时，避免手动写“Section 3”，而是 `Section~\ref{sec:method}`。
- 用 `cleveref` 宏包自动识别类型，只需 `\cref{fig:test}` 即得 “Figure~1”，无需操心 `\ref` 带不带空格。
- 公式、图表编号会自动更新，避免顺序调整时的手工检查。

---

## 8. 参考文献管理

- **使用 BibTeX 或 BibLaTeX**，不要手动写 `\bibitem`。
- 维护一个中心化的 `.bib` 文件，可跨文档复用。
- 条目从 Google Scholar 或 DBLP 直接复制 BibTeX，并检查关键字段（author, title, journal, year）。
- 正文引用使用 `\cite{}`，配合 `natbib` 或 `biblatex` 可灵活切换数字或作者年份格式。
- 编译链：`pdflatex → bibtex → pdflatex ×2`，使用工具如 `latexmk` 自动完成。

---

## 9. 代码与算法排版

- 行内代码：`\texttt{function()}` 或 `\lstinline|print(a)|`。
- 代码块用 `listings` 或 `minted`：
  - `listings`：不需要外部依赖，可定制颜色。
  - `minted`：需要 `pygments`，但语法高亮更漂亮。
- 算法伪代码用 `algorithm2e`、`algorithmicx` 等，保持逻辑清晰。

---

## 10. 编译习惯：自动化与错误处理

- **使用 `latexmk` 自动编译**：
  ```bash
  latexmk -pdf -pvc main.tex   # -pvc 预览持续更新
  ```
  它会自动调用 pdflatex、bibtex 等足够多次，解决交叉引用。
- **不要忽略编译警告**：过满的 `hbox`、未定义的引用会以 `??` 形式出现，应立即检查。
- 加上 `draft` 选项可以快速预览，如 `\documentclass[draft]{article}` 会禁用图片加载，代以框线，加快编译速度。
- 最终提交前，用 `\listoftodos` 或 `\todo` 标记未完成项，并彻底清理。

---

## 11. 版本控制与协作

- **使用 Git 管理 `.tex` 和 `.bib`**，`.gitignore` 忽略编译产物：
  ```
  *.aux
  *.log
  *.out
  *.bbl
  *.blg
  *.synctex.gz
  *.fls
  *.fdb_latexmk
  ```
- 大改动前打 tag，方便回退。
- 多人合作时，按章节拆分文件，减少冲突。
- 用 `latexdiff` 生成修改对照 PDF，方便导师/审稿人查看改动。

---

## 12. 最后的检查列表

- [ ] 没有 “???” 未定义引用。
- [ ] 图表编号连续，交叉引用正确。
- [ ] 页边距、字体、行距符合目标出版物要求。
- [ ] 代码中没有中文标点（英文文档中常误输入）。
- [ ] `hyperref` 生成的 PDF 书签和元数据正确。
- [ ] 从模板开始的项目，已移除所有占位内容。
- [ ] 摘要、关键词等元数据已填写。
