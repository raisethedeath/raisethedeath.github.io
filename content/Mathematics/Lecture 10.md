# 拓扑学基础 10

李友林

## 1. 同伦（Homotopy）

**定义**：设 $f,g:X\to Y$ 连续。若存在连续映射 $H:X\times[0,1]\to Y$ 使得 $H(x,0)=f(x)$，$H(x,1)=g(x)$，则称 $f$ 与 $g$ **同伦**，记作 $f\simeq g$。$H$ 称为**同伦**。

**例子**：
- 若 $Y$ 是凸集（如 $\mathbb{E}^n$），则任意 $f,g$ 同伦（直线同伦）。
- 若对任意 $x$，$f(x)$ 与 $-g(x)$ 不共线，则可归一化得同伦 $H(x,t)=\frac{(1-t)f(x)+tg(x)}{\|(1-t)f(x)+tg(x)\|}$。
- 特别地，当 $Y=S^{2k+1}$ 时，恒等映射与对径映射同伦。

**性质**：同伦是连续映射间的等价关系。

## 2. 相对同伦（Relative Homotopy）

**定义**：若 $A\subset X$，且 $H(a,t)=f(a)=g(a)$ 对所有 $a\in A$ 成立，则称 $f$ 与 $g$ **相对于 $A$ 同伦**，记作 $f\simeq g \text{ rel } A$。

**例子**：若 $f,g$ 在 $A$ 上相同，直线同伦 $H(x,t)=(1-t)f(x)+tg(x)$ 是相对同伦。

## 3. 道路同伦（Path Homotopy）

**定义**：两条道路 $a,b:[0,1]\to X$ 称为**定端同伦**（道路同伦），如果存在同伦 $H$ 使得 $H(s,0)=a(s)$，$H(s,1)=b(s)$，且 $H(0,t)=a(0)=b(0)$，$H(1,t)=a(1)=b(1)$。记作 $a\simeq b$。

**道路乘积**：$a\cdot b$ 定义为
$$
(a\cdot b)(s) = \begin{cases}
a(2s), & 0\le s\le 1/2,\\
b(2s-1), & 1/2\le s\le 1.
\end{cases}
$$

## 4. 基本群（Fundamental Group）

**定义**：固定基点 $x_0\in X$。$\pi_1(X,x_0)$ 是所有基于 $x_0$ 的回路（loop）的道路同伦类构成的集合，乘积定义为 $[a][b] = [a\cdot b]$。

**定理**：$\pi_1(X,x_0)$ 是一个群。
- 单位元：常值道路 $c_{x_0}$。
- 逆元：$[a]^{-1} = [\overline{a}]$，其中 $\overline{a}(s)=a(1-s)$。
- 结合律由重新参数化同伦验证。

**例子**：
- $\pi_1(\mathbb{R}^n,0) \cong \{1\}$（单连通的）。
- $\pi_1(S^1,1) \cong \mathbb{Z}$。

## 5. 诱导同态（Induced Homomorphism）

**定义**：设 $f:X\to Y$ 连续，$f(x_0)=y_0$。定义
$$
f_* : \pi_1(X,x_0) \to \pi_1(Y,y_0),\quad [a] \mapsto [f\circ a].
$$
**性质**：$f_*$ 是群同态，且 $(g\circ f)_* = g_*\circ f_*$，$(\text{id}_X)_* = \text{id}$。

**推论**：若 $f$ 是同胚，则 $f_*$ 是同构。

## 6. 基点变换（Change of Basepoint）

设 $X$ 道路连通，$w$ 是从 $x_0$ 到 $x_1$ 的道路类。定义
$$
w_{\#}: \pi_1(X,x_0) \to \pi_1(X,x_1),\quad [a] \mapsto [w^{-1}\cdot a \cdot w].
$$
**性质**：$w_{\#}$ 是群同构（从而 $\pi_1(X,x_0)\cong \pi_1(X,x_1)$）。若 $X$ 单连通，则 $\pi_1(X)$ 平凡。