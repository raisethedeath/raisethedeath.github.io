# 拓扑学基础 2

李友林

## 1. 基（续）

- **k-拓扑**：$\mathbb{R}$ 的基 $\beta = \{(a,b), (a,b)\setminus K\}$，其中 $K = \{1/n \mid n\in\mathbb{Z}^+\}$。
- **子基**：子基 $\mathcal{S}$ 是覆盖 $X$ 的集族，由 $\mathcal{S}$ 生成的拓扑通过取有限交得到基，再取任意并。

**引理**：$\mathcal{B}$ 是拓扑的基，则 $U$ 是开集当且仅当 $\forall x \in U, \exists B_x \in \mathcal{B}$ 使得 $x \in B_x \subset U$。

**度量拓扑**：$d(x,y) = \sqrt{(x_1-y_1)^2+\cdots+(x_n-y_n)^2}$，球体 $B(x,\varepsilon)$ 构成 $\mathbb{R}^n$ 的基，生成**标准拓扑**（Euclidean 拓扑）。

- 矩形基 $\{(a_1,b_1)\times\cdots\times(a_n,b_n)\}$ 也生成相同的标准拓扑。

## 2. 子空间拓扑（回顾）

- 子空间拓扑 $\mathcal{T}_A = \{U\cap A \mid U \in \mathcal{T}\}$。
- 若 $\mathcal{B}$ 是 $X$ 的基，则 $\{B\cap A \mid B\in\mathcal{B}\}$ 是 $A$ 的基。

## 3. 乘积空间（回顾）

- 乘积拓扑的基：$\{U\times V \mid U \text{ open in } X, V \text{ open in } Y\}$。
- 投影 $\pi_1: X\times Y \to X$，$\pi_2: X\times Y \to Y$ 连续。
- 有限乘积：基为 $\{\mathcal{U}_1\times\cdots\times\mathcal{U}_n \mid \mathcal{U}_i \text{ open in } X_i\}$。

## 4. 闭集（性质）

- **命题**：有限个闭集的并是闭集；任意闭集的交是闭集。
- **闭包** $\overline{A}$：包含 $A$ 的最小闭集。**内部** $A^\circ$：包含于 $A$ 的最大开集。
- **性质**：
  - $A$ 是开集 $\iff A = A^\circ$；$A$ 是闭集 $\iff A = \overline{A}$。
  - $A \subset B \Rightarrow \overline{A} \subset \overline{B}$。
  - $x \in \overline{A}$ 当且仅当每个邻域与 $A$ 相交。
  - $\overline{A} = A \cup A'$，其中 $A'$ 是极限点集。
  - 边界 $\partial A = \overline{A} \setminus A^\circ$。

**稠密集**：$\overline{A}=X$。**可分**：存在可数稠密子集。

**例子**：
- 在 $\mathbb{R}_{fc}$ 中，每个无限子集稠密。
- 在 $\mathbb{R}_{\text{std}}$ 中，$\mathbb{Q}$ 稠密且可分。

**子空间中的闭包**：若 $B \subset A \subset X$，则 $\overline{B}_A = \overline{B} \cap A$。

## 5. 连续映射

**定义**：$f: X \to Y$ 连续 $\iff$ 任意开集 $V\subset Y$ 的原像 $f^{-1}(V)$ 是 $X$ 中的开集。

**等价条件**：
- 闭集的原像是闭集。
- 基元素的原像是开集。

**性质**：
- 恒等映射、常值映射、包含映射连续。
- 投影 $\pi_1,\pi_2$ 连续。
- 复合连续。
- $f: X \to Y_1\times Y_2$，$f(x) = (f_1(x),f_2(x))$ 连续 $\iff f_1,f_2$ 连续。

**粘接引理（Pasting Lemma）**：设 $X = A \cup B$，$A,B$ 均闭（或均开），$f: A\to Y$，$g: B\to Y$ 连续且在 $A\cap B$ 上一致，则 $h: X\to Y$ 连续。

## 6. 同胚（Homeomorphism）

**定义**：双射 $f: X\to Y$ 满足 $f$ 和 $f^{-1}$ 都连续，则称为**同胚**，$X\cong Y$。

**例子**：
- $(0,1) \cong \mathbb{R}$，$f(x) = \frac{x}{1-|x|}$。
- 开圆盘 $\mathbb{D}^n \cong \mathbb{E}^n$。
- 球面挖去一点 $S^n\setminus\{pt\} \cong \mathbb{E}^n$（球极投影）。
- 闭区间 $[0,1]$ 与开区间不同胚。

**性质**：同胚保持 Hausdorff 性、紧性、连通性等。

## 7. 嵌入（Embedding）

**定义**：$f: X\to Y$ 是嵌入，如果 $f$ 是到 $f(X)$ 的同胚。

**例子**：$S^1 \hookrightarrow \mathbb{E}^2$ 是嵌入；纽结嵌入 $S^1 \hookrightarrow \mathbb{E}^3$。

**同位（isotopy）**：连续的一族嵌入 $f_t: X \to \mathbb{E}^3$。

## 8. 度量空间

**定义**：度量 $d: X\times X \to [0,\infty)$ 满足：
  (i) $d(x,y)=0 \iff x=y$;
  (ii) 对称性;
  (iii) 三角不等式。
$(X,d)$ 是**度量空间**。

**度量拓扑**：由开球 $B(x,\varepsilon)$ 作为基生成的拓扑。

**例子**：
- Euclidean 度量，$l_1$ 度量，离散度量（$d(x,y)=0$ if $x=y$ else $1$）。
- 离散度量生成离散拓扑。

**可度量性**：存在一个度量诱导出给定的拓扑。

**性质**：度量空间是 Hausdorff、第一可数、正规的。

## 9. 正则与正规空间

- **正则（regular）**：单点集闭，且点与不包含该点的闭集可以用开集分离。
- **正规（normal）**：单点集闭，且两个不相交闭集可以用开集分离。

**定理**：度量空间是正规的。

**Urysohn 引理**：正规空间中，不相交闭集可用连续函数分离。

## 10. 可数性公理

- **第一可数**：每点有可数邻域基。度量空间是第一可数。
- **第二可数**：拓扑有可数基。$\mathbb{E}^n$ 是第二可数（球心在有理点，半径 $1/k$）。
- 第二可数 $\Rightarrow$ 第一可数。
- 离散 $\mathbb{R}$ 不是第二可数，但可度量。