# Problem 4.15 (Quadratic thermodynamics and stability★★★)
_recitation#4_
The differential of the chemical potential is
$d\mu = -s dT + v dP,$
where s and v are the entropy and volume per particle.
Near a reference state $(T_0, P_0)$, define
$\tau = T - T_0, \quad \pi = P - P_0.$
Suppose that the chemical potential has the Taylor expansion
$\mu(T,P) = \mu_0 + a\tau + b\pi + \frac{1}{2}A\tau^2 + B\tau\pi + \frac{1}{2}C\pi^2 + \cdots. \tag{1}$
(a) Show that the quadratic expansion of $\mu$ can be rewritten in terms of thermodynamic quantities:
$\mu(T,P) = \mu_0 - s_0 \tau + v_0 \pi - \frac{c_{P0}}{2T_0}\tau^2 + v_0\alpha_0 \tau\pi - \frac{v_0\kappa_{T0}}{2}\pi^2 + \cdots, \tag{2}$
where all quantities are evaluated at the reference point $(T_0, P_0)$. Here
$s_0 = s(T_0,P_0), \quad v_0 = v(T_0,P_0),$
and
$c_{P0} = T_0 \left( \frac{\partial s}{\partial T} \right)_{P,0}, \quad \alpha_0 = \frac{1}{v_0} \left( \frac{\partial v}{\partial T} \right)_{P,0}, \quad \kappa_{T0} = -\frac{1}{v_0} \left( \frac{\partial v}{\partial P} \right)_{T,0}.$
You must specify the thermodynamic meanings of these parameters, not just relabel the coefficients.
(b) Compute $s(T,P)$ and $v(T,P)$ to first order in $\tau$ and $\pi$.
(c) Using Eq. (2), show that the differentials of s and v, to linear order around the reference state, are
$\begin{aligned} ds &= \frac{c_{P0}}{T_0} dT - v_0\alpha_0 dP, \\ dv &= v_0\alpha_0 dT - v_0\kappa_{T0} dP. \end{aligned}$
(d) Using the results of part (c), compute $c_{V0}$ and verify
$c_{P0} - c_{V0} = \frac{T_0 v_0 \alpha_0^2}{\kappa_{T0}}. \tag{3}$
(e) Using the results of part (c), compute $\kappa_{S0}$ and verify
$\kappa_{T0} - \kappa_{S0} = \frac{T_0 v_0 \alpha_0^2}{c_{P0}}. \tag{4}$
(f) Recall that stability requires $\mu(T,P)$ to be concave. Show that the Hessian of $\mu(T,P)$ is negative definite. By inspecting either diagonal element first, show that this condition is equivalent to either
$c_{P0} > 0, \quad \kappa_{S0} > 0,$
or
$c_{V0} > 0, \quad \kappa_{T0} > 0.$
These results illustrate that, near equilibrium, much of thermodynamics is encoded in the quadratic Taylor expansion of a thermodynamic potential.

## Solution



以下是对本习题的完整中文解答：

### **(a) 证明 $\mu$ 的二次展开可以写为热力学参数形式**
已知化学势的全微分形式为 $d\mu = -s dT + v dP$，从中可以读出化学势的一阶偏导数为：
$$ \left( \frac{\partial \mu}{\partial T} \right)_P = -s, \quad \left( \frac{\partial \mu}{\partial P} \right)_T = v $$
在参考态 $(T_0, P_0)$ 处，一阶项的系数分别为：
$$ a = \left( \frac{\partial \mu}{\partial T} \right)_{P,0} = -s(T_0, P_0) = -s_0 $$
$$ b = \left( \frac{\partial \mu}{\partial P} \right)_{T,0} = v(T_0, P_0) = v_0 $$
其中 $s_0$ 为**单粒子熵**，$v_0$ 为**单粒子体积**。

接下来求解二阶偏导数（即泰勒展开式中的 $A, B, C$）：
1. **对于 $A$**：
$$ A = \left( \frac{\partial^2 \mu}{\partial T^2} \right)_{P,0} = -\left( \frac{\partial s}{\partial T} \right)_{P,0} $$
由等压热容的定义 $c_P = T \left( \frac{\partial s}{\partial T} \right)_P$，可得 $\left( \frac{\partial s}{\partial T} \right)_{P,0} = \frac{c_{P0}}{T_0}$。因此 $A = -\frac{c_{P0}}{T_0}$。
这里的 $c_{P0}$ 为参考点处的**单粒子等压热容**。

2. **对于 $B$**：
$$ B = \frac{\partial^2 \mu}{\partial T \partial P} \bigg|_0 = \left( \frac{\partial v}{\partial T} \right)_{P,0} $$
由体膨胀系数定义 $\alpha = \frac{1}{v} \left( \frac{\partial v}{\partial T} \right)_P$，可得 $\left( \frac{\partial v}{\partial T} \right)_{P,0} = v_0 \alpha_0$。因此 $B = v_0 \alpha_0$。
这里的 $\alpha_0$ 为参考点处的**体膨胀系数**（描述温度改变引起的体积变化）。

3. **对于 $C$**：
$$ C = \left( \frac{\partial^2 \mu}{\partial P^2} \right)_{T,0} = \left( \frac{\partial v}{\partial P} \right)_{T,0} $$
由等温压缩率定义 $\kappa_T = -\frac{1}{v} \left( \frac{\partial v}{\partial P} \right)_T$，可得 $\left( \frac{\partial v}{\partial P} \right)_{T,0} = -v_0 \kappa_{T0}$。因此 $C = -v_0 \kappa_{T0}$。
这里的 $\kappa_{T0}$ 为参考点处的**等温压缩率**。

将 $a,b,A,B,C$ 代入原展开式 (1) 中，即可得到式 (2)：
$$ \mu(T,P) = \mu_0 - s_0 \tau + v_0 \pi - \frac{c_{P0}}{2T_0}\tau^2 + v_0\alpha_0 \tau\pi - \frac{v_0\kappa_{T0}}{2}\pi^2 + \cdots $$

---

### **(b) 计算至一次项（关于 $\tau$ 和 $\pi$）的 $s(T,P)$ 和 $v(T,P)$**
利用关系 $s = -\left( \frac{\partial \mu}{\partial T} \right)_P$ 和 $v = \left( \frac{\partial \mu}{\partial P} \right)_T$，对式 (2) 分别求导，保留至一阶项：
$$ s(T,P) = -\frac{\partial}{\partial \tau} \mu(\tau, \pi) = s_0 + \frac{c_{P0}}{T_0}\tau - v_0\alpha_0\pi $$
$$ v(T,P) = \frac{\partial}{\partial \pi} \mu(\tau, \pi) = v_0 + v_0\alpha_0\tau - v_0\kappa_{T0}\pi $$

---

### **(c) 推导参考态附近的 $ds$ 和 $dv$ 表达式**
由题意，$\tau = T - T_0 \implies d\tau = dT$；$\pi = P - P_0 \implies d\pi = dP$。
将 (b) 中的结果直接取全微分：
$$ ds = d \left( s_0 + \frac{c_{P0}}{T_0}\tau - v_0\alpha_0\pi \right) = \frac{c_{P0}}{T_0}d\tau - v_0\alpha_0 d\pi = \frac{c_{P0}}{T_0} dT - v_0\alpha_0 dP $$
$$ dv = d \left( v_0 + v_0\alpha_0\tau - v_0\kappa_{T0}\pi \right) = v_0\alpha_0 d\tau - v_0\kappa_{T0} d\pi = v_0\alpha_0 dT - v_0\kappa_{T0} dP $$
得证。

---

### **(d) 计算 $c_{V0}$ 并验证方程 (3)**
等容热容 $c_{V0} = T_0 \left( \frac{\partial s}{\partial T} \right)_{V,0}$。
要求在体积不变 ($dv=0$) 时的偏导数，由 (c) 中的 $dv$ 表达式令 $dv = 0$：
$$ 0 = v_0\alpha_0 dT - v_0\kappa_{T0} dP \implies dP = \frac{\alpha_0}{\kappa_{T0}} dT $$
将此 $dP$ 代入 $ds$ 表达式中：
$$ ds = \frac{c_{P0}}{T_0} dT - v_0\alpha_0 \left( \frac{\alpha_0}{\kappa_{T0}} dT \right) = \left( \frac{c_{P0}}{T_0} - \frac{v_0\alpha_0^2}{\kappa_{T0}} \right) dT $$
因此 $\left( \frac{\partial s}{\partial T} \right)_{V,0} = \frac{c_{P0}}{T_0} - \frac{v_0\alpha_0^2}{\kappa_{T0}}$。两边同乘 $T_0$：
$$ c_{V0} = c_{P0} - \frac{T_0 v_0 \alpha_0^2}{\kappa_{T0}} $$
移项即得到关系：
$$ c_{P0} - c_{V0} = \frac{T_0 v_0 \alpha_0^2}{\kappa_{T0}} \tag{3} $$

---

### **(e) 计算 $\kappa_{S0}$ 并验证方程 (4)**
等熵压缩率 $\kappa_{S0} = -\frac{1}{v_0} \left( \frac{\partial v}{\partial P} \right)_{S,0}$。
要求在熵不变 ($ds=0$) 时的偏导数，由 (c) 中的 $ds$ 表达式令 $ds = 0$：
$$ 0 = \frac{c_{P0}}{T_0} dT - v_0\alpha_0 dP \implies dT = \frac{T_0 v_0 \alpha_0}{c_{P0}} dP $$
将此 $dT$ 代入 $dv$ 表达式中：
$$ dv = v_0\alpha_0 \left( \frac{T_0 v_0 \alpha_0}{c_{P0}} dP \right) - v_0\kappa_{T0} dP = \left( \frac{T_0 v_0^2 \alpha_0^2}{c_{P0}} - v_0\kappa_{T0} \right) dP $$
因此 $\left( \frac{\partial v}{\partial P} \right)_{S,0} = \frac{T_0 v_0^2 \alpha_0^2}{c_{P0}} - v_0\kappa_{T0}$。代入 $\kappa_{S0}$ 的定义：
$$ \kappa_{S0} = -\frac{1}{v_0} \left( \frac{T_0 v_0^2 \alpha_0^2}{c_{P0}} - v_0\kappa_{T0} \right) = \kappa_{T0} - \frac{T_0 v_0 \alpha_0^2}{c_{P0}} $$
移项即得到关系：
$$ \kappa_{T0} - \kappa_{S0} = \frac{T_0 v_0 \alpha_0^2}{c_{P0}} \tag{4} $$

---

### **(f) 证明稳定性等价的两个条件组**
稳定态要求化学势 $\mu(T,P)$ 是个凹函数，即其海森矩阵（Hessian）$H$ 必须是负定的。$H$ 可以写为：
$$ H = \begin{pmatrix} \frac{\partial^2 \mu}{\partial T^2} & \frac{\partial^2 \mu}{\partial T \partial P} \\ \frac{\partial^2 \mu}{\partial P \partial T} & \frac{\partial^2 \mu}{\partial P^2} \end{pmatrix} = \begin{pmatrix} -\frac{c_{P0}}{T_0} & v_0\alpha_0 \\ v_0\alpha_0 & -v_0\kappa_{T0} \end{pmatrix} $$
一个 $2 \times 2$ 实对称矩阵 $\begin{pmatrix} A & B \\ B & C \end{pmatrix}$ 为负定矩阵的充要条件是：它的对角元小于零（$A < 0$ 且 $C < 0$），并且行列式大于零（$AC - B^2 > 0$）。
行列式为：$\det(H) = \frac{c_{P0} v_0 \kappa_{T0}}{T_0} - v_0^2 \alpha_0^2$。

我们可以选择先检查哪个对角元：

**推断一（先检查左上角对角元）：**
1. 必须有 $A = -\frac{c_{P0}}{T_0} < 0$，由于 $T_0 > 0$，这给出 **$c_{P0} > 0$**。
2. 必须有 $\det(H) > 0$，可提公因数化简为：
$$ \frac{c_{P0} v_0}{T_0} \left( \kappa_{T0} - \frac{T_0 v_0 \alpha_0^2}{c_{P0}} \right) > 0 $$
根据 (e) 的结果，括号内正是 $\kappa_{S0}$。结合 $c_{P0}>0, v_0>0, T_0>0$，这直接要求 **$\kappa_{S0} > 0$**。
于是，负定性等价于：$c_{P0} > 0, \quad \kappa_{S0} > 0$。

**推断二（先检查右下角对角元）：**
1. 必须有 $C = -v_0\kappa_{T0} < 0$，由于 $v_0 > 0$，这给出 **$\kappa_{T0} > 0$**。
2. 必须有 $\det(H) > 0$，可换一种方式提公因数化简为：
$$ v_0\kappa_{T0} \left( \frac{c_{P0}}{T_0} - \frac{v_0 \alpha_0^2}{\kappa_{T0}} \right) > 0 $$
根据 (d) 的结果，括号内 正是 $\frac{c_{V0}}{T_0}$。结合 $\kappa_{T0}>0, v_0>0, T_0>0$，这直接要求 **$c_{V0} > 0$**。
于是，负定性也可以等价于：$c_{V0} > 0, \quad \kappa_{T0} > 0$。

这说明，平衡态热力学的大部分稳定性条件都完美地编码在一个热力学势的二阶泰勒展开式中了。