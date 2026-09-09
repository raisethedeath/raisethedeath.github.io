# 旋量的详细分析

旋量（spinor）是物理与数学中一类基本而深刻的数学对象。它最初出现在量子力学对电子自旋的描述中，后来成为量子场论、广义相对论、超对称、弦论乃至纯粹微分几何中的核心概念。

下面从数学构造、表示论、物理意义、方程、分类与应用等多个角度，对旋量进行系统分析。

---

## 1. 什么是旋量？

旋量是 Lorentz 群（或更一般地，旋转群）的**双重覆盖表示**中的矢量。它是比矢量和张量更基本的对象：一个矢量在旋转下按 SO(3) 的表示变换，而旋量按 Spin(3) ≅ SU(2) 的表示变换。SU(2) 是 SO(3) 的双重覆盖，二者存在 2 对 1 的同态：

$$
\varphi: \mathrm{SU}(2) \longrightarrow \mathrm{SO}(3).
$$

因此，一个旋量在空间旋转 $2\pi$ 后并不回到自身，而是改变符号；旋转 $4\pi$ 后才完全恢复。这是旋量最本质的特征。

---

## 2. 数学构造：Clifford 代数与旋量空间

### 2.1 Clifford 代数

设 $V$ 是 $d$ 维闵可夫斯基时空，度规 $\eta_{\mu\nu}=\mathrm{diag}(-1,+1,+1,+1)$。定义 Clifford 代数 $\mathrm{Cl}(1,3)$，其生成元为 $\gamma^\mu$，满足反对易关系：

$$
\{\gamma^\mu,\gamma^\nu\} = 2\eta^{\mu\nu} \mathbf{1}.
$$

这个代数的不可约表示空间就是旋量空间。

### 2.2 旋量表示

给定 Clifford 代数的一个表示，可以构造 Lorentz 群的生成元：

$$
S^{\mu\nu} = \frac{i}{4}[\gamma^\mu,\gamma^\nu].
$$

它们满足 Lorentz 代数的对易关系：

$$
[S^{\mu\nu},S^{\rho\sigma}]
=
i(\eta^{\mu\rho}S^{\nu\sigma}
-\eta^{\nu\rho}S^{\mu\sigma}
+\eta^{\nu\sigma}S^{\mu\rho}
-\eta^{\mu\sigma}S^{\nu\rho}).
$$

Lorentz 群中连续连接到单位元的元素作用在旋量上的有限变换为：

$$
\Lambda_{1/2}
=
\exp\!\left(-\frac{i}{2}\omega_{\mu\nu}S^{\mu\nu}\right),
$$

其中 $\omega_{\mu\nu}$ 是 Lorentz 变换参数。该指数映射给出的是 **Spin(1,3) 群**，它是 Lorentz 群 SO(1,3) 的双重覆盖。

---

## 3. Lorentz 群与 SL(2,C)

四维时空中，Lorentz 代数 $\mathfrak{so}(1,3)$ 同构于复化的两个 SU(2) 代数：

$$
\mathfrak{so}(1,3)\otimes \mathbb C
\cong
\mathfrak{su}(2)_L \oplus \mathfrak{su}(2)_R.
$$

对应的旋量表示有两种基本不可约表示：

- **左手旋量**：$(\tfrac12,0)$，记为 $\chi_a$，$a=1,2$；
- **右手旋量**：$(0,\tfrac12)$，记为 $\xi^{\dot a}$，$\dot a=1,2$。

在有限 Lorentz 变换 $\Lambda \in \mathrm{SO}(1,3)$ 下，它们分别按下式变换：

$$
\chi'_a = M_a{}^b \chi_b,\qquad
\xi'^{\dot a} = (M^\dagger)^{-1}{}^{\dot a}{}_{\dot b}\,\xi^{\dot b},
$$

其中 $M\in \mathrm{SL}(2,\mathbb C)$ 与 Lorentz 变换 $\Lambda$ 的关系由同态

$$
\mathrm{SL}(2,\mathbb C) \longrightarrow \mathrm{SO}^\uparrow(1,3)
$$

给出。具体地，任意四矢量 $x^\mu$ 可写成 $2\times 2$ 厄米矩阵

$$
X = x^\mu \sigma_\mu,
\qquad
\sigma_\mu = (\mathbf 1,\boldsymbol\sigma),
$$

Lorentz 变换等价于

$$
X' = M X M^\dagger,
$$

其中 $M\in \mathrm{SL}(2,\mathbb C)$。由于 $M$ 与 $-M$ 给出同一个 $\Lambda$，所以这是双重覆盖。

---

## 4. 四分量 Dirac 旋量

### 4.1 Dirac 旋量的构成

四维时空中的 Dirac 旋量是左手旋量与右手旋量的直和：

$$
\psi =
\begin{pmatrix}
\chi_a\\
\xi^{\dot a}
\end{pmatrix},
\qquad
\psi \in (\tfrac12,0)\oplus(0,\tfrac12).
$$

它有四个复分量，共 8 个实自由度。

在 Dirac 表示下，$\gamma$ 矩阵取为

$$
\gamma^0 =
\begin{pmatrix}
\mathbf 1 & 0\\
0 & -\mathbf 1
\end{pmatrix},
\qquad
\gamma^i =
\begin{pmatrix}
0 & \sigma^i\\
-\sigma^i & 0
\end{pmatrix},
$$

其中 $\sigma^i$ 是 Pauli 矩阵。

### 4.2 手性表示

在手性（Weyl）表示下，$\gamma^5 = i\gamma^0\gamma^1\gamma^2\gamma^3$ 是对角的：

$$
\gamma^5 =
\begin{pmatrix}
-\mathbf 1 & 0\\
0 & \mathbf 1
\end{pmatrix}.
$$

此时左手投影算符为

$$
P_L = \frac{1-\gamma^5}{2},
\qquad
P_R = \frac{1+\gamma^5}{2},
$$

它们把 Dirac 旋量分解为

$$
\psi_L = P_L \psi =
\begin{pmatrix}
\chi_a\\
0
\end{pmatrix},
\qquad
\psi_R = P_R \psi =
\begin{pmatrix}
0\\
\xi^{\dot a}
\end{pmatrix}.
$$

### 4.3 Dirac 方程

Dirac 旋量满足 Dirac 方程：

$$
(i\gamma^\mu\partial_\mu - m)\psi = 0.
$$

它是 Lorentz 不变的。方程的作用量为

$$
S = \int d^4x\;
\bar\psi(i\gamma^\mu\partial_\mu - m)\psi,
$$

其中 Dirac 共轭定义为

$$
\bar\psi = \psi^\dagger \gamma^0.
$$

在手性表示中，Dirac 方程耦合了左右手分量：

$$
i\sigma^\mu \partial_\mu \xi = m \chi,
\qquad
i\bar\sigma^\mu \partial_\mu \chi = m \xi,
$$

其中 $\sigma^\mu=(1,\boldsymbol\sigma)$，$\bar\sigma^\mu=(1,-\boldsymbol\sigma)$。可以看出，质量项是左右手之间的耦合。

---

## 5. 旋量的重要类型

### 5.1 Weyl 旋量

在无质量极限 $m=0$ 下，Dirac 方程分解为两个独立的方程：

$$
i\bar\sigma^\mu\partial_\mu \chi = 0,
\qquad
i\sigma^\mu\partial_\mu \xi = 0.
$$

$\chi$ 描述左手无质量费米子，$\xi$ 描述右手无质量费米子。Weyl 旋量只有两个复分量，是 Lorentz 群的基本不可约表示。

### 5.2 Majorana 旋量

Majorana 旋量是满足电荷共轭等于自身的 Dirac 旋量：

$$
\psi = \psi^C \equiv C\bar\psi^T,
$$

其中 $C$ 是电荷共轭矩阵。此条件使 Dirac 旋量的独立分量减半，与反粒子等同。在四维闵可夫斯基时空，Majorana 条件只有在某些表示下才存在。它在中微子物理和超对称理论中非常重要。

### 5.3 旋量双线性型

由 Dirac 旋量可以构造具有不同 Lorentz 变换性质的双线性型：

| 双线性型 | 变换性质 | 分量数 |
|---|---|---|
| $\bar\psi\psi$ | 标量 | 1 |
| $\bar\psi\gamma^5\psi$ | 赝标量 | 1 |
| $\bar\psi\gamma^\mu\psi$ | 矢量 | 4 |
| $\bar\psi\gamma^\mu\gamma^5\psi$ | 轴矢量 | 4 |
| $\bar\psi\sigma^{\mu\nu}\psi$ | 反对称张量 | 6 |

其中 $\sigma^{\mu\nu}=\frac{i}{2}[\gamma^\mu,\gamma^\nu]$。这些量构成了 16 个独立的复双线性型，张成整个 Clifford 代数空间。

---

## 6. 物理意义：自旋 1/2

旋量的物理意义首先体现在自旋上。一个 Dirac 旋量描述的粒子具有内禀角动量 $\frac{\hbar}{2}$。其原因可以从角动量算符看出。

在空间旋转群 SO(3) 中，旋量表示 $(1/2,0)\oplus(0,1/2)$ 由生成元

$$
S^i = \frac12
\begin{pmatrix}
\sigma^i & 0\\
0 & \sigma^i
\end{pmatrix}
$$

给出。旋转 $\theta$ 角后，旋量变换为

$$
\psi \to e^{-i\theta\, S^i} \psi.
$$

当 $\theta=2\pi$ 时，

$$
e^{-2\pi i S^i} = -1.
$$

因此，旋量波函数在 $2\pi$ 旋转后改变符号，这正是自旋为半奇数的特征。只有旋转 $4\pi$ 才恢复原状。

在量子场论中，旋量场必须满足**反对易关系**（费米子），这是自旋统计定理的要求。

---

## 7. 在弯曲时空中的推广

在弯曲时空中，Lorentz 对称性被提升为局域洛伦兹对称性。此时需要引入局部正交标架（vielbein）$e_\mu^a$，满足

$$
g_{\mu\nu} = e_\mu^a e_\nu^b \eta_{ab}.
$$

旋量在局域洛伦兹变换下变换，必须引入**自旋联络** $\omega_\mu^{ab}$，使得协变导数

$$
D_\mu \psi
=
\left(
\partial_\mu
+
\frac{1}{4}\omega_\mu^{ab}\gamma_{ab}
\right)\psi
$$

在局域洛伦兹和广义坐标变换下协变。相应的 Dirac 作用量为

$$
S = \int d^4x\;\sqrt{-g}\;
\bar\psi(i e_a{}^\mu \gamma^a D_\mu - m)\psi.
$$

这表明旋量在引力中也能自然定义，并且必须通过自旋联络与几何耦合。

---

## 8. 高维推广

在 $d$ 维时空中，旋量是 $\mathrm{Spin}(1,d-1)$ 群的表示。Clifford 代数 $\mathrm{Cl}(1,d-1)$ 的结构随维度呈现周期性。存在 Majorana 条件、Weyl 条件以及 Majorana-Weyl 条件的可能性依赖于维度模 8 的周期性。这些性质在超弦理论中至关重要，例如：

- 在 $d=10$ 维，存在 Majorana-Weyl 旋量；
- 在 $d=11$ 维，存在 Majorana 旋量；
- 在 $d=4$ 维，可定义 Weyl 和 Majorana，但不能同时满足 Majorana-Weyl。

高维旋量是构造超对称理论的基础。

---

## 9. 总结

旋量是 Lorentz 群双重覆盖表示的承载者，数学上根植于 Clifford 代数。其核心特征包括：

- 在 $2\pi$ 旋转下变号，$4\pi$ 旋转恢复；
- 是比矢量更基本的 Lorentz 群不可约表示；
- 在四维时空中存在左手与右手两种基本旋量，Dirac 旋量是二者的直和；
- 无质量极限下分解为 Weyl 旋量，Majorana 条件可进一步减少自由度；
- 在量子场论中描述自旋 $1/2$ 费米子，需满足反对易统计；
- 可自然推广到弯曲时空与高维理论。

旋量在现代物理学中的地位不可替代。它不仅是描述电子、夸克、中微子等基本费米子的数学工具，也深刻揭示了时空对称性与物质基本表示之间的内在联系。