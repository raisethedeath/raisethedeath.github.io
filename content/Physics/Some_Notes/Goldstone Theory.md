## Goldstone 定理的严格证明

Goldstone 定理是量子场论中关于连续对称性自发破缺的基本定理。它断言：

> **若一个 Lorentz 不变的量子场论具有连续全局对称群 $G$，且真空自发破缺到子群 $H$，则对每一个破缺生成元，理论谱中必存在一个零质量（无质量）的玻色子，称为 Goldstone 玻色子。其数目等于商空间 $\dim(G/H)$。**

下面给出一个基于 Noether 流、Källén–Lehmann 谱表示和守恒律的严格证明。该证明在公理场论框架下成立。

---

### 1. 基本假设与符号

考虑 $d$ 维时空（通常取 $d=4$），理论具有连续全局对称群 $G$，其生成元为 $T^a$。对应的守恒 Noether 流为

$$
j_\mu^a(x),\qquad \partial^\mu j_\mu^a(x)=0 .
$$

设 $\Phi(x)$ 是一个局域算符（例如基本标量场，也可以是复合算符），在对称变换下按某表示变换：

$$
[Q^a,\Phi(x)] = i T^a \Phi(x),
$$

其中

$$
Q^a = \int d^{d-1}x\; j_0^a(t,\mathbf{x})
$$

是形式上的守恒荷。

对称性自发破缺意味着：真空 $|0\rangle$ 不是 $G$ 不变的，但存在子群 $H\subset G$ 使真空不变。等价地，存在某个破缺生成元 $T^a$，使得

$$
\langle 0|[Q^a,\Phi(0)]|0\rangle \neq 0 .
$$

通常，若 $\langle\Phi\rangle = v\neq 0$，则上式等于 $i T^a v \neq 0$。

---

### 2. 谱表示

定义对易子的真空期望值

$$
G_\mu^a(x) \equiv \langle 0|[j_\mu^a(x),\Phi(0)]|0\rangle .
$$

由于真空是 Lorentz 不变的，且 $j_\mu^a$ 是矢量流，$\Phi$ 是标量算符，因此 $G_\mu^a(x)$ 必须具有如下 Källén–Lehmann 谱表示：

$$
G_\mu^a(x)
=
\partial_\mu \int_0^\infty d\mu^2\; \rho^a(\mu^2)\; \Delta(x;\mu^2),
\tag{1}
$$

其中

$$
\Delta(x;\mu^2)
=
\int \frac{d^d q}{(2\pi)^{d-1}}\; \epsilon(q_0)\,\delta(q^2-\mu^2)\, e^{-iq\cdot x}
$$

是质量为 $\mu$ 的自由标量场的 Pauli–Jordan 对易子，满足

$$
(\Box + \mu^2)\Delta(x;\mu^2)=0 .
$$

$\rho^a(\mu^2)$ 是谱密度，物理上非负。

---

### 3. 流守恒的约束

对 (1) 式取散度：

$$
\partial^\mu G_\mu^a(x)
=
\partial^\mu\partial_\mu \int_0^\infty d\mu^2\; \rho^a(\mu^2)\; \Delta(x;\mu^2)
=
-\int_0^\infty d\mu^2\; \mu^2\,\rho^a(\mu^2)\; \Delta(x;\mu^2).
$$

但由 Noether 流守恒，$\partial^\mu j_\mu^a=0$，故左边为零：

$$
0 = \partial^\mu G_\mu^a(x)
=
-\int_0^\infty d\mu^2\; \mu^2\,\rho^a(\mu^2)\; \Delta(x;\mu^2).
$$

由于不同质量 $\mu^2$ 的 $\Delta(x;\mu^2)$ 是线性独立的分布，上式若对一切 $x$ 成立，则必须有

$$
\mu^2 \rho^a(\mu^2)=0
\qquad \text{作为分布。}
$$

因此谱密度只能支撑在 $\mu^2=0$ 处：

$$
\rho^a(\mu^2)=C^a \delta(\mu^2),
$$

其中 $C^a$ 是常数。于是 (1) 式退化为

$$
G_\mu^a(x)
=
C^a\, \partial_\mu \Delta(x;0).
\tag{2}
$$

这说明：对易子 $\langle 0|[j_\mu^a(x),\Phi(0)]|0\rangle$ 的中间态谱中**只包含零质量态**。如果 $C^a\neq 0$，则理论中必然存在无质量粒子，即 Goldstone 玻色子。

---

### 4. 确定 $C^a$ 非零

现在利用对称性自发破缺的条件来证明 $C^a\neq 0$。

取 (2) 式的零分量并在等时 $t=0$ 对全空间积分：

$$
\langle 0|[Q^a,\Phi(0)]|0\rangle
=
\int d^{d-1}x\; G_0^a(0,\mathbf{x})
=
C^a \int d^{d-1}x\; \partial_0 \Delta(x;0)\big|_{t=0}.
$$

自由无质量标量场的 Pauli–Jordan 对易子满足

$$
\Delta(0,\mathbf{x};0)=0,\qquad
\partial_0 \Delta(x;0)\big|_{t=0}
=
-\delta^{d-1}(\mathbf{x}),
$$

因此

$$
\int d^{d-1}x\; \partial_0 \Delta(x;0)\big|_{t=0}
=
-1.
$$

于是

$$
\langle 0|[Q^a,\Phi(0)]|0\rangle
=
-\,C^a.
$$

而由自发破缺假设，左边不为零，所以

$$
C^a \neq 0 .
$$

这就完成了证明：对每个破缺生成元 $T^a$，谱中存在零质量 Goldstone 模式。

---

### 5. 小结

上述证明的核心逻辑是：

$$
\boxed{
\begin{array}{c}
\text{连续对称性自发破缺}\\
\Downarrow\\
\langle 0|[Q^a,\Phi]|0\rangle\neq 0\\
\Downarrow\\
\text{流守恒 + Lorentz 协变性}\\
\Downarrow\\
\text{谱密度 } \rho^a(\mu^2)=C^a\delta(\mu^2)\\
\Downarrow\\
\text{存在无质量 Goldstone 玻色子}
\end{array}}
$$

---

### 6. 几点重要说明

1. **有限体积问题**  
   上述证明基于无限体积下的真空 $|0\rangle$。在有限体积中，对称性通常不会自发破缺，真空是唯一的，$\langle\Phi\rangle=0$。严格处理需要先取无限体积极限，再讨论破缺真空。

2. **Lorentz 不变性的作用**  
   谱表示中用到真空的 Lorentz 不变性和算符的 Lorentz 变换性质。对于非相对论系统，Lorentz 不变性不再成立，但 Goldstone 定理仍有对应版本：连续对称性自发破缺产生无能隙激发。不过在非相对论情形下，激发色散关系可以是 $\omega\propto k$ 或 $\omega\propto k^2$，且还可能存在非 Lorentz 不变的有效理论描述。

3. **二维时空的例外**  
   在 $1+1$ 维时空中，无质量标量场的红外涨落非常强，可能破坏自发破缺序参量的非零期望值。这是 Coleman 定理的内容：在 $d=2$ 维 Lorentz 不变理论中，连续对称性通常不能自发破缺，因此 Goldstone 定理需要谨慎处理。

4. **声子的例子**  
   对于晶体，平移对称性从连续群 $\mathbb R^d$ 破缺到离散子群 $\mathbb Z^d$。虽然这是非相对论系统，但 Goldstone 机制仍然成立：破缺的 $d$ 个连续平移生成元对应 $d$ 支无能隙的声学声子。有效理论就是弹性理论，其长波色散关系为 $\omega(\mathbf k)=c_s(\hat{\mathbf k})k$。

---

以上便是 Goldstone 定理的标准严格证明。