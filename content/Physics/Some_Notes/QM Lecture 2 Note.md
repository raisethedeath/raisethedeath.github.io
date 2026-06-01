# 第二章 动力学与绘景

## §2.1 哈密顿量与薛定谔方程

量子态的时间演化由幺正演化算符 $\hat{U}(t, t_0)$ 描述：

$$
|\psi(t)\rangle = \hat{U}(t, t_0) |\psi(t_0)\rangle.
$$

对时间求导，并利用 $\hat{U}^\dagger \hat{U} = \hat{I}$，可得：

$$
\partial_t |\psi(t)\rangle = \partial_t \hat{U}(t, t_0) |\psi(t_0)\rangle = \bigl( \partial_t \hat{U}(t, t_0) \hat{U}^\dagger(t, t_0) \bigr) |\psi(t)\rangle.
$$

定义算符 $\hat{A}(t, t_0) \equiv \partial_t \hat{U}(t, t_0) \hat{U}^\dagger(t, t_0)$，则上述方程变为：

$$
\partial_t |\psi(t)\rangle = \hat{A}(t, t_0) |\psi(t)\rangle.
$$

**性质**：$\hat{A}(t, t_0)$ 是反厄米的，即 $\hat{A}^\dagger = -\hat{A}$。这是因为：

$$
\hat{A} = \partial_t \hat{U} \hat{U}^\dagger, \quad \hat{A}^\dagger = \hat{U} \partial_t \hat{U}^\dagger = -\partial_t \hat{U} \hat{U}^\dagger = -\hat{A}.
$$

进一步定义厄米算符（哈密顿算符）：

$$
\hat{H}(t) \equiv i \hbar \hat{A}(t, t_0) = i \hbar \partial_t \hat{U}(t, t_0) \hat{U}^\dagger(t, t_0).
$$

可以证明：
1. $\hat{H}(t)$ 是厄米的。
2. 实际上 $\hat{H}(t)$ 仅依赖于 $t$，与 $t_0$ 无关，因此可写为 $\hat{H}(t)$。

---

## §2.2 薛定谔方程的标准形式

将 $\hat{A} = -i\hat{H}/\hbar$ 代入态矢演化方程，得到薛定谔方程：

$$
i\hbar \partial_t |\psi(t)\rangle = \hat{H}(t) |\psi(t)\rangle.
$$

演化算符满足相同的方程：

$$
i\hbar \partial_t \hat{U}(t, t_0) = \hat{H}(t) \hat{U}(t, t_0), \quad \hat{U}(t_0, t_0) = \hat{I}.
$$

其共轭形式为：

$$
-i\hbar \partial_t \hat{U}^\dagger(t, t_0) = \hat{U}^\dagger(t, t_0) \hat{H}(t).
$$

---

## §2.3 位置表象中的哈密顿量

在位置表象中，波函数 $\psi(x,t) = \langle x | \psi(t) \rangle$。哈密顿量在位置表象下的矩阵元为：

$$
\langle x | \hat{H} | x' \rangle = \left[ -\frac{\hbar^2}{2m} \frac{d^2}{dx^2} + V(x,t) \right] \delta(x - x').
$$

因此，薛定谔方程在位置表象中成为偏微分方程：

$$
i\hbar \frac{\partial}{\partial t} \psi(x,t) = \left[ -\frac{\hbar^2}{2m} \frac{\partial^2}{\partial x^2} + V(x,t) \right] \psi(x,t).
$$

---

## §2.4 动量表象

在动量表象中，态由 $\phi(p,t) = \langle p | \psi(t) \rangle$ 描述。哈密顿量的动能部分是对角的：

$$
\langle p | \frac{\hat{p}^2}{2m} | p' \rangle = \frac{p^2}{2m} \delta(p - p').
$$

势能部分需通过坐标表象转换。利用 $\langle p | x \rangle = \frac{1}{\sqrt{2\pi\hbar}} e^{-ipx/\hbar}$，可得：

$$
\langle p | \hat{V}(t) | p' \rangle = \int dx \, \langle p | x \rangle V(x,t) \langle x | p' \rangle = \frac{1}{2\pi\hbar} \int dx \, e^{-i(p-p')x/\hbar} V(x,t).
$$

因此动量表象中的薛定谔方程为积分方程：

$$
i\hbar \partial_t \phi(p,t) = \frac{p^2}{2m} \phi(p,t) + \int dp' \, \langle p | \hat{V}(t) | p' \rangle \phi(p',t).
$$

---

## §2.5 薛定谔方程的形式解

### 时间平移对称性情形

若哈密顿量不显含时间，$\hat{H}(t) = \hat{H}$，则演化算符具有时间平移不变性：

$$
\hat{U}(t, t_0) = \hat{U}(t - t_0) = \exp\left( -\frac{i}{\hbar} \hat{H} (t - t_0) \right) = \sum_{n=0}^{\infty} \frac{(-i/\hbar)^n (t - t_0)^n}{n!} \hat{H}^n.
$$

### 无时间平移对称性（含时哈密顿量）

当 $[\hat{H}(t_1), \hat{H}(t_2)] \neq 0$ 时，演化算符不能简单写为指数形式。将时间区间 $[t_0, t]$ 分割为 $N$ 个小段 $\Delta t = (t-t_0)/N$，每段内近似认为哈密顿量不变，则：

$$
\hat{U}(t, t_0) = \lim_{\Delta t \to 0} \prod_{k=0}^{N-1} \exp\left( -\frac{i}{\hbar} \hat{H}(t_k) \Delta t \right) = \mathcal{T} \exp\left( -\frac{i}{\hbar} \int_{t_0}^{t} \hat{H}(t') dt' \right),
$$

其中 $\mathcal{T}$ 表示编时算子。将指数展开得到戴森级数：

$$
\hat{U}(t, t_0) = 1 + \left( \frac{1}{i\hbar} \right) \int_{t_0}^{t} dt_1 \hat{H}(t_1) + \left( \frac{1}{i\hbar} \right)^2 \int_{t_0}^{t} dt_1 \int_{t_0}^{t_1} dt_2 \hat{H}(t_1) \hat{H}(t_2) + \cdots.
$$

---

## §2.6 与经典力学的比较（算符期望值的时间演化）

对于任意算符 $\hat{O}$（可能显含时间），其期望值为 $\langle \hat{O} \rangle_t = \langle \psi(t) | \hat{O} | \psi(t) \rangle$。对时间求导：

$$
\frac{d}{dt} \langle \hat{O} \rangle_t = \left\langle \frac{\partial \hat{O}}{\partial t} \right\rangle_t + \frac{1}{i\hbar} \langle [\hat{O}, \hat{H}] \rangle_t.
$$

这一结果与经典力学中物理量 $O$ 的时间演化方程：

$$
\frac{dO}{dt} = \frac{\partial O}{\partial t} + \{ O, H \}_{\text{Poisson}}
$$

形式对应，其中量子对易子 $[\hat{O}, \hat{H}]/(i\hbar)$ 对应经典泊松括号 $\{O, H\}$。这表明量子力学与经典力学在正则对易关系下具有对应原理。

---

## §2.7 海森堡绘景与薛定谔绘景

在薛定谔绘景中，态矢随时间演化，算符通常不显含时间（除非有显式依赖）。在海森堡绘景中，态矢被固定为初始态，而算符携带时间演化。

定义海森堡绘景下的态矢和算符：

$$
|\psi\rangle_H = \hat{U}^\dagger(t, t_0) |\psi(t)\rangle_S = |\psi(t_0)\rangle_S,
$$
$$
\hat{O}_H(t) = \hat{U}^\dagger(t, t_0) \hat{O}_S \hat{U}(t, t_0).
$$

两种绘景下的期望值相等：

$$
{}_S\langle \psi(t) | \hat{O}_S | \psi(t) \rangle_S = {}_H\langle \psi | \hat{O}_H(t) | \psi \rangle_H.
$$

在海森堡绘景中，算符满足海森堡运动方程：

$$
\frac{d}{dt} \hat{O}_H(t) = \frac{\partial \hat{O}_H}{\partial t} + \frac{1}{i\hbar} [\hat{O}_H, \hat{H}_H],
$$

其中 $\hat{H}_H = \hat{U}^\dagger \hat{H}_S \hat{U}$。若 $\hat{H}_S$ 不显含时间且与自身对易，则 $\hat{H}_H = \hat{H}_S$。

**命题**：若某算符 $\hat{A}_S$ 在薛定谔绘景中不显含时间，则它在海森堡绘景中的形式为 $\hat{A}_H(t) = \hat{U}^\dagger(t, t_0) \hat{A}_S \hat{U}(t, t_0)$。当且仅当 $\hat{A}_S$ 与哈密顿量对易时，$\hat{A}_H$ 为守恒量（不随时间变化）。

---