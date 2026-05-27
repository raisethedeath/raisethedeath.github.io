# 拓扑学基础 1

李友林

## 1. 引言

拓扑学研究图形的几何性质，这些性质仅取决于图形各部分的相对位置，而与长度、大小、角度或形状等概念无关。拓扑学研究在连续变换（如弯曲、收缩、拉伸、扭转，但不允许撕裂和粘合）下不被破坏的性质。这样的变换称为拓扑变换，在拓扑变换下保持不变的性质称为拓扑性质。

## 2. 集合论

- **幂集**：$2^X$ 表示 $X$ 的所有子集。
- 并、交、差：$\bigcup_{\lambda} B_\lambda$，$\bigcap_{\lambda} B_\lambda$，$B_1 \setminus B_2$。
- **笛卡尔积**：$X_1 \times \cdots \times X_n = \{(x_1,\dots,x_n) \mid x_i \in X_i\}$。
- **分配律**、**德摩根律**：
  $$
  A \setminus (\bigcup_\lambda B_\lambda) = \bigcap_\lambda (A \setminus B_\lambda),\quad
  A \setminus (\bigcap_\lambda B_\lambda) = \bigcup_\lambda (A \setminus B_\lambda)
  $$
- **映射**：$f: X \to Y$，像 $f(A) \subset Y$，原像 $f^{-1}(B) \subset X$。
- 若 $f$ 是双射，则存在逆映射 $f^{-1}: Y \to X$。
- **限制**：$f|_A: A \to Y$。
- **恒等映射** $\text{id}_X$，**包含映射** $i: A \hookrightarrow X$，**对角映射** $\Delta: X \to X\times X$。
- **等价关系**：自反、对称、传递。等价类 $[x]$，商集 $X/{\sim}$。

## 3. 拓扑空间

- 连续性的回顾：$f: \mathbb{R} \to \mathbb{R}$ 连续当且仅当任意开区间的原像是开区间之并（即开集）。
- 开集的性质：
  (i) $\emptyset, X$ 是开集；
  (ii) 任意开集的并是开集；
  (iii) 有限个开集的交是开集。

**定义**：设 $X$ 是一个集合，$\mathcal{T} \subset 2^X$ 满足：
  (i) $\emptyset, X \in \mathcal{T}$;
  (ii) 任意并封闭；
  (iii) 有限交封闭。
称 $\mathcal{T}$ 为 $X$ 上的一个**拓扑**，$(X,\mathcal{T})$ 为**拓扑空间**，$\mathcal{T}$ 中的元素称为**开集**。

**例子**：
- 标准拓扑 $\mathbb{R}_{\text{std}}$
- 平凡拓扑 $\{\emptyset, X\}$
- 离散拓扑 $2^X$
- 有限补拓扑 $\mathbb{R}_{fc}$：开集为空集或补集有限的集合。
- 可数补拓扑：开集为空集或补集可数的集合。

**比较拓扑**：若 $\mathcal{T}_1 \subset \mathcal{T}_2$，则 $\mathcal{T}_2$ 比 $\mathcal{T}_1$ 更细（finer），$\mathcal{T}_1$ 更粗（coarser）。

**邻域**：包含点 $x$ 的开集称为 $x$ 的一个邻域。  
**定理**：$A \subset X$ 是开集当且仅当 $\forall x \in A$，存在邻域 $U_x \subset A$。

## 4. 基（Basis）

**定义**：$\mathcal{B} \subset 2^X$ 称为一个**基**，如果：
  (a) $\forall x \in X, \exists B \in \mathcal{B}, x \in B$;
  (b) $\forall B_1,B_2 \in \mathcal{B}, \forall x \in B_1\cap B_2, \exists B_3 \in \mathcal{B}, x \in B_3 \subset B_1\cap B_2$。

由 $\mathcal{B}$ 生成的拓扑 $\mathcal{T}$ 定义为 $\mathcal{B}$ 中元素任意并的集合。

**例子**：
- $\mathbb{R}_{\text{std}}$ 的基：所有开区间 $(a,b)$。
- 下限拓扑 $\mathbb{R}_{\ell}$ 的基：$[a,b)$。
- $k$-拓扑：基包含 $(a,b)$ 和 $(a,b)\setminus\{1/n \mid n\in\mathbb{Z}^+\}$。
- 度量空间：$B(x,\varepsilon) = \{y \mid d(x,y)<\varepsilon\}$ 构成基。

## 5. 子空间拓扑

设 $(X,\mathcal{T})$ 是拓扑空间，$A \subset X$。定义 $\mathcal{T}_A = \{U \cap A \mid U \in \mathcal{T}\}$，则 $\mathcal{T}_A$ 是 $A$ 上的拓扑，称为**子空间拓扑**。  
若 $\mathcal{B}$ 是 $X$ 的基，则 $\{B \cap A \mid B \in \mathcal{B}\}$ 是 $A$ 的基。

**引理**：子空间的子空间等于子空间：若 $B \subset A \subset X$，则 $(\mathcal{T}_A)_B = \mathcal{T}_B$。

## 6. 乘积空间

设 $X,Y$ 是拓扑空间。  
**乘积拓扑**的基：$\{U \times V \mid U \text{ open in } X, V \text{ open in } Y\}$。  
若 $\mathcal{B}_1,\mathcal{B}_2$ 分别是 $X,Y$ 的基，则 $\{B_1\times B_2 \mid B_1 \in \mathcal{B}_1, B_2 \in \mathcal{B}_2\}$ 也是乘积拓扑的基。

**性质**：子空间 $A\times B \subset X\times Y$ 上的子空间拓扑等于乘积拓扑（$A,B$ 分别取子空间拓扑）。

## 7. 闭集

**定义**：$C \subset X$ 称为**闭集**，如果 $X\setminus C$ 是开集。  
**性质**：
- $\emptyset, X$ 是闭集；
- 任意闭集的交是闭集；
- 有限个闭集的并是闭集。

**例子**：在 $\mathbb{R}_{fc}$ 中，闭集为 $\mathbb{R}$ 或有限子集。

**Zariski 拓扑**：在 $\mathbb{C}$ 上，闭集为多项式零点集 $Z(T)$。

**子空间中的闭集**：$C \subset A$ 是 $A$ 中的闭集当且仅当存在 $X$ 中的闭集 $D$ 使得 $C = D \cap A$。

## 8. Hausdorff 空间

**定义**：拓扑空间 $X$ 称为 **Hausdorff**，如果对任意 $x \neq y$，存在不相交的开邻域 $U_x, U_y$。

**性质**：
- Hausdorff 空间中单点集是闭集。
- Hausdorff 空间的子空间是 Hausdorff。
- 两个 Hausdorff 空间的乘积是 Hausdorff。
- 有限补拓扑 $\mathbb{R}_{fc}$ 不是 Hausdorff。