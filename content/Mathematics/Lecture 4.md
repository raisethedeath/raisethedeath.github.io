# 拓扑学基础 4

李友林

## 1. 同胚（Homeomorphism）

- 定义：双射 $f:X\to Y$ 使得 $f$ 和 $f^{-1}$ 连续。
- 同胚保持开集、闭集、Hausdorff 性等。
- 例子：$(0,1)\cong \mathbb{R}$，$\mathbb{D}^n \cong \mathbb{E}^n$，$S^n\setminus\{N\}\cong \mathbb{R}^n$。

## 2. 嵌入（Embedding）

- 定义：连续单射 $f:X\to Y$ 且 $f$ 到像的同胚。
- 例子：$S^1\hookrightarrow \mathbb{R}^2$，纽结。

## 3. 度量空间（Metric Spaces）

- 定义：度量 $d$ 满足正定、对称、三角不等式。
- 度量拓扑：开球生成。
- 例子：Euclidean 度量，离散度量。
- 可度量性：存在度量诱导给定拓扑。
- 度量空间是 Hausdorff、第一可数、正规。

## 4. 正则与正规（Regular and Normal）

- 正则：单点闭，点与不相交闭集可分离。
- 正规：单点闭，不相交闭集可分离。
- 正规 $\Rightarrow$ 正则 $\Rightarrow$ Hausdorff。
- 度量空间正规。

## 5. 可数性公理（Countability Axioms）

- 第一可数：每点有可数邻域基。度量空间满足。
- 第二可数：拓扑有可数基。$\mathbb{E}^n$ 满足。
- 第二可数 $\Rightarrow$ 第一可数，反之不真（如离散 $\mathbb{R}$）。
- 第二可数空间的子空间、可数乘积保持第二可数。

## 6. Urysohn 度量化定理

**定理**：正则且第二可数的空间是可度量的。

## 7. Tietze 扩张定理

**定理**：若 $X$ 正规，$A\subset X$ 闭，$f:A\to \mathbb{R}^1$ 连续，则存在连续扩张 $F:X\to \mathbb{R}^1$ 使得 $F|_A = f$。

## 8. 紧致性（Compactness）

**定义**：空间 $X$ 称为**紧致**，如果每个开覆盖有有限子覆盖。

**例子**：
- 有限集（任何拓扑）紧致。
- $\mathbb{R}$ 不紧致（覆盖 $(-n,n)$ 无有限子覆盖）。
- 有限补拓扑 $\mathbb{R}_{fc}$ 紧致。
- **Heine-Borel 定理**：$\mathbb{E}^n$ 中 $A$ 紧致 $\iff A$ 有界闭集。

**性质**：
- 紧致空间在连续映射下的像是紧致的。
- 紧致空间的闭子集紧致。
- Hausdorff 空间中紧致子集是闭的。
- 紧致 Hausdorff 空间中，连续双射是同胚。
- 乘积空间 $X\times Y$ 紧致 $\iff X,Y$ 都紧致（Tychonoff 定理有限情形）。

**Lebesgue 引理**：紧致度量空间的开覆盖存在 Lebesgue 常数 $\varepsilon>0$，使得每个半径 $\varepsilon$ 的开球包含于某个覆盖元素。