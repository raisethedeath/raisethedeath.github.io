# 拓扑学基础 3

李友林

## 1. Hausdorff 空间（续）

- 子空间和乘积保持 Hausdorff 性。
- 证明：若 $X,Y$ Hausdorff，则 $X\times Y$ Hausdorff。

## 2. 内部、闭包、边界（回顾）

- $A^\circ$ 是包含在 $A$ 中的最大开集。
- $\overline{A}$ 是包含 $A$ 的最小闭集。
- 边界 $\partial A = \overline{A}\setminus A^\circ$。
- 性质：
  $$
  (X\setminus A)^\circ = X\setminus\overline{A},\quad \overline{X\setminus A} = X\setminus A^\circ.
  $$
  $$
  \overline{A\cap B} \subset \overline{A}\cap\overline{B},\quad \overline{A\cup B} = \overline{A}\cup\overline{B}.
  $$
- 极限点：$x$ 是 $A$ 的极限点如果每邻域包含 $A$ 中异于 $x$ 的点。$A'$ 是极限点集，则 $\overline{A}=A\cup A'$。

## 3. 连续映射（续）

- 常值映射、包含映射、投影连续。
- 复合连续。
- 乘积映射 $f(x)=(f_1(x),f_2(x))$ 连续 $\iff$ 每个分量连续。
- **Pasting Lemma**：若 $X=A\cup B$，$A,B$ 均闭（或均开），$f|_A$ 和 $f|_B$ 连续且一致，则 $f$ 连续。

## 4. 同胚（续）

- 同胚的双射连续且开（或闭）。
- 例子：开区间同胚于 $\mathbb{R}$，开圆盘同胚于 $\mathbb{R}^n$。
- 球面 $S^n\setminus\{pt\} \cong \mathbb{R}^n$。
- 同胚保持 Hausdorff 性、紧性、连通性等。

## 5. 嵌入（续）

- 嵌入是单射连续且开（或闭）到像。
- 例：$S^1$ 可嵌入 $\mathbb{R}^2$，也可作为纽结嵌入 $\mathbb{R}^3$。

## 6. 度量空间（续）

- 离散度量诱导离散拓扑。
- 度量空间是 Hausdorff、第一可数、正规。
- **Urysohn 度量化定理**：正则且第二可数的空间可度量。

## 7. 正则与正规（续）

- **正规性**：任意两个不相交闭集可被开集分离。
- 度量空间正规。
- 证明：取 $f(x) = \frac{d(x,A)}{d(x,A)+d(x,B)}$，然后 $f^{-1}(-\infty,1/2)$ 和 $f^{-1}(1/2,\infty)$ 分离。

## 8. 可数性公理（续）

- **第一可数**：度量空间满足。
- **第二可数**：$\mathbb{E}^n$ 满足，$\mathbb{R}_{\text{离散}}$ 不满足。
- 第二可数空间子空间和可数乘积保持第二可数。