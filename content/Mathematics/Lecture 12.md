# 拓扑学基础 12

李友林

---

## 1. $\pi_1(S^1)$ 的计算

设 $p: \mathbb{R} \to S^1$ 为万有覆盖 $p(t) = e^{2\pi i t}$。定义映射

$$
\Phi: \pi_1(S^1, 1) \to \mathbb{Z}, \quad [a] \mapsto \tilde{a}(1)
$$

其中 $\tilde{a}$ 是 $a$ 的以 $0$ 为起点的提升。

**(1) $\Phi$ 是同态**  
设 $[a],[b] \in \pi_1(S^1)$，记 $m = \tilde{a}(1)$，$n = \tilde{b}(1)$。令 $\tilde{b}'(t) = \tilde{b}(t) + m$，则 $p \circ \tilde{b}' = b$。于是 $\tilde{a} \cdot \tilde{b}'$ 是 $a \cdot b$ 的提升，且

$$
\Phi([a][b]) = \tilde{a} \cdot \tilde{b}'(1) = m + n = \Phi([a]) + \Phi([b]).
$$

**(2) $\Phi$ 是满射**  
对任意 $n \in \mathbb{Z}$，定义 $\tilde{a}(s) = n s$，$a(s) = e^{2\pi i n s}$，则 $\Phi([a]) = n$。

**(3) $\Phi$ 是单射**  
若 $\Phi([a]) = 0$，则 $\tilde{a}(1)=0$，故 $\tilde{a}$ 是 $\mathbb{R}$ 中基于 $0$ 的回路。$\mathbb{R}$ 可缩，所以 $\tilde{a} \simeq C_0$，复合 $p$ 得 $a \simeq C_1$，即 $[a]=0$。

因此 $\pi_1(S^1) \cong \mathbb{Z}$。□

---

## 2. 乘积空间的基本群

**定理**：设 $X,Y$ 为空间，$x_0\in X, y_0\in Y$，则

$$
\pi_1(X\times Y, (x_0,y_0)) \cong \pi_1(X,x_0) \times \pi_1(Y,y_0).
$$

**证明**：设 $p_1: X\times Y \to X$，$p_2: X\times Y \to Y$ 为投影，诱导同态

$$
(p_1)_*: \pi_1(X\times Y) \to \pi_1(X), \quad (p_2)_*: \pi_1(X\times Y) \to \pi_1(Y).
$$

定义

$$
\Phi: \pi_1(X\times Y) \to \pi_1(X)\times\pi_1(Y), \quad [a] \mapsto \big((p_1)_*[a], (p_2)_*[a]\big).
$$

- **满射**：对任意 $([b],[c])$，令 $a(s) = (b(s), c(s))$，则 $\Phi([a]) = ([b],[c])$。
- **单射**：若 $\Phi([a]) = ([c_{x_0}], [c_{y_0}])$，则 $p_1\circ a \simeq c_{x_0}$，$p_2\circ a \simeq c_{y_0}$。通过同伦 $H_1, H_2$ 构造 $H(s,t) = (H_1(s,t), H_2(s,t))$，得到 $a \simeq C_{(x_0,y_0)}$。□

**例子**：$\pi_1(S^1\times S^1) \cong \mathbb{Z}\times\mathbb{Z}$。

---

## 3. 同伦等价

**命题**：同伦等价是拓扑空间之间的等价关系（自反、对称、传递）。

**定义**：若空间 $X$ 同伦等价于单点空间，则称 $X$ 为**可缩**的。

---

## 4. 同伦等价空间的基本群

设 $h,k: X_0 \to X_1$ 为同伦映射，$H: X_0\times[0,1]\to X_1$ 实现 $h \simeq k$。取路径 $\omega(t)=H(x_0,t)$ 从 $h(x_0)$ 到 $k(x_0)$，记 $[\omega] = \omega_*$。则

$$
k_* = \omega_* \circ h_*: \pi_1(X_0,x_0) \to \pi_1(X_1, k(x_0)).
$$

即对任意 $[a]\in\pi_1(X_0,x_0)$，有 $\omega \cdot (k\circ a) \simeq (h\circ a) \cdot \omega$。

**推论**：若 $h\simeq k$，且 $h_*$ 是单（满、同构），则 $k_*$ 也是。

**定理**：若 $X\simeq Y$（同伦等价），则 $\pi_1(X) \cong \pi_1(Y)$。

---

## 5. 形变收缩

**定义**：设 $A\subset X$，映射 $r: X\to A$ 满足 $r|_A = \text{id}_A$，则称 $r$ 为**收缩**，$A$ 为 $X$ 的**收缩核**。若还存在同伦 $H: X\times[0,1]\to X$ 满足

- $H(x,0)=x$，
- $H(x,1)=r(x)$，
- $H(a,t)=a$ 对所有 $a\in A, t\in[0,1]$,

则称 $A$ 为 $X$ 的**形变收缩核**，$H$ 实现形变收缩。

**例子**：
- $X\times[0,1]$ 形变收缩到 $X\times\{0\}$：$H((x,s),t) = (x, (1-t)s)$。
- $\mathbb{E}^n\setminus\{p_0\}$ 形变收缩到 $S^{n-1}$：$H(x,t) = (1-t)x + t\frac{x}{\|x\|}$。

---

## 6. 商空间的形变收缩

**定理**：设 $f: X\to Y$ 为商映射，$A\subset X$ 是形变收缩核，$B = f(A)$。若形变收缩 $H: X\times[0,1]\to X$ 满足“若 $f(x)=f(x')$ 则 $f(H(x,t)) = f(H(x',t))$”，则 $B$ 是 $Y$ 的形变收缩核。

**证明**：定义 $H_1: Y\times[0,1]\to Y$ 为 $H_1(y,t) = f(H(x,t))$，其中 $x\in f^{-1}(y)$。由条件知良定义，且 $H_1$ 连续，并满足形变收缩的条件。□

**应用**：锥体 $CX = (X\times[0,1])/(X\times\{1\})$ 是可缩的。因为 $X\times[0,1]$ 形变收缩到 $X\times\{1\}$，商映射将 $X\times\{1\}$ 映为一点，从而 $CX$ 形变收缩到该点。

---

## 注记

- 若 $\pi_1(X) \not\cong \pi_1(Y)$，则 $X$ 与 $Y$ 不同伦等价。
- 庞加莱猜想（三维情形）：单连通闭三维流形同胚于三维球面。