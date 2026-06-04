# Problem 1 (Phase separation in a binary mixture).

Consider two liquids $A$ and $B$ at the same temperature $T$ and with the same volume per particle $v$. Before mixing, the two liquids are separated. Their Helmholtz free energy is

$$
F_{\text{sep}} = N_A f_A(v, T) + N_B f_B(v, T).
$$

For a symmetric mixture, we have

$$
f_A(v, T) = f_B(v, T) = f(v, T),
$$
$$
F_{\text{sep}} = (N_A + N_B) f(v, T) = N f(v, T).
$$

We assume that mixing changes the composition but not the total volume. Thus the volume per particle $v$ remains fixed, and the free energy of the mixed state is

$$
F(N_A, N_B, T) = F_{\text{sep}} + N \Delta f_{\text{mix}}(x, T),
$$

where

$$
N = N_A + N_B, \quad x = \frac{N_A}{N}, \quad 1 - x = \frac{N_B}{N}.
$$

From the previous chapter, the mixing free energy per particle is

$$
\Delta f_{\text{mix}}(x, T) = T \left[ x \log x + (1 - x) \log(1 - x) \right] + \chi x (1 - x),
$$

with $\chi > 0$, so that unlike neighbors are energetically unfavorable.

Now put the mixture in contact with reservoirs fixing the chemical potentials $\mu_A$ and $\mu_B$. The appropriate availability is

$$
\hat{G} = F(N_A, N_B, T) - \mu_A N_A - \mu_B N_B.
$$

At equilibrium, the stable composition minimizes $\hat{G}$.

---

(a) For a liquid, density fluctuations are usually much smaller than composition fluctuations. We can therefore neglect fluctuations of the total particle number and treat $N$ as fixed. Show that the availability per particle reduces to

$$
\hat{g}(x; T, \mu) = \Delta f_{\text{mix}}(x, T) - \mu x,
$$

up to an additive constant independent of $x$, where

$$
\mu = \mu_A - \mu_B,
$$

is the difference between chemical potentials of two species.

(b) Show that an equilibrium composition $x^*$, which minimizes $\hat{g}(x; T, \mu)$, must satisfy the stationarity condition

$$
\mu = \frac{\partial \Delta f_{\text{mix}}(x^*, T)}{\partial x} \equiv \mu(x, T),
$$

and the local stability condition

$$
\frac{\partial^2 \Delta f_{\text{mix}}(x^*, T)}{\partial x^2} > 0.
$$

Derive explicit forms of these conditions using Eq. (1). Explain the physical meaning of the stationarity condition.

(c) The spinodal curve (in the $T - x$ plane) is defined as the boundary curve of instability. Show that it is given by

$$
T = T_{\text{sp}}(x) = 2 \chi x(1 - x).
$$

The critical point is defined as the point on the spinodal with maximum temperature. Determine the critical point $(x_c, T_c)$.

(d) For $T < T_c$, express the two spinodal branches $x_{\text{sp}}^{(1)}(T)$ and $x_{\text{sp}}^{(2)}(T)$ as functions of $T$. Draw the spinodal curve in the $T - x$ plane. Indicate the region inside the spinodal curve, where the homogeneous mixture is locally unstable, and the regions outside the spinodal curve, where the homogeneous mixture is locally stable.

Interpret the locally stable region with small $x$ as the $B$-rich homogeneous phase, and the locally stable region with large $x$ as the $A$-rich homogeneous phase.

(e) For a fixed temperature $T < T_c$, sketch

$$
\Delta f_{\text{mix}}(x, T) \quad \text{and} \quad \mu(x, T) \equiv \frac{\partial \Delta f_{\text{mix}}(x, T)}{\partial x}
$$

as functions of $x$. On the plot of $\Delta f_{\text{mix}}(x, T)$, draw the double-tangent line and denote its two tangent points by

$$
x_{\text{b}}^{(1)}(T), \quad x_{\text{b}}^{(2)}(T).
$$

On the plot of $\mu(x, T)$, indicate that the two binodal compositions satisfy

$$
\mu(x_{\text{b}}^{(1)}, T) = \mu(x_{\text{b}}^{(2)}, T) = 0.
$$

Use the symmetry

$$
\Delta f_{\text{mix}}(x, T) = \Delta f_{\text{mix}}(1 - x, T)
$$

to show that

$$
x_{\text{b}}^{(2)}(T) = 1 - x_{\text{b}}^{(1)}(T),
$$

and that the double-tangent line is horizontal. Hence derive the binodal equation

$$
T \log \frac{x}{1 - x} + \chi(1 - 2x) = 0, \quad 0 < x < \frac{1}{2}.
$$

Plot the two binodal branches in the $T - x$ plane, together with the spinodal lines found earlier. Finally, using

$$
\hat{g}(x; T, \mu) = \Delta f_{\text{mix}}(x, T) - \mu x,
$$

verify that on the binodal branches,

$$
\hat{g}(x_{\text{b}}^{(1)}; T, 0) = \hat{g}(x_{\text{b}}^{(2)}; T, 0).
$$

Conclude that the two locally stable minima of the availability have equal depth at coexistence.

Now suppose the total composition is fixed at

$$
\bar{x} = \frac{1}{3}.
$$

Define the reduced temperature

$$
t = \frac{T_c - T}{T_c}, \quad T_c = \frac{\chi}{2}.
$$

As the temperature is lowered, phase separation begins when the left binodal composition first reaches $\bar{x} = 1/3$. Show that

$$
t_{\text{sep}} = 1 - \frac{2}{3 \log 2}.
$$

For $t > t_{\text{sep}}$, determine the two binodal compositions numerically from

$$
\frac{1 - t}{2} \log \frac{x}{1 - x} + 1 - 2x = 0.
$$

Denote the two solutions by

$$
x_{\text{b}}^{(1)}(t) < \frac{1}{2}, \quad x_{\text{b}}^{(2)}(t) > \frac{1}{2}.
$$

Use symmetry to verify that

$$
x_{\text{b}}^{(2)}(t) = 1 - x_{\text{b}}^{(1)}(t).
$$

Finally, use the lever rule

$$
\frac{1}{3} = \phi_1 x_{\text{b}}^{(1)}(t) + \phi_2 x_{\text{b}}^{(2)}(t), \quad \phi_1 + \phi_2 = 1,
$$

to determine the phase fractions

$$
\phi_1(t), \quad \phi_2(t),
$$

and plot them as functions of $t$.

## Solution
以下是关于**问题 1（二元混合物的相分离）**的详细且完整的数学推导与物理解答。

---

### **(a) 有效性（Availability）的简化**

根据题意，混合状态下的亥姆霍兹自由能为：
$$ F(N_A, N_B, T) = F_{\text{sep}} + N \Delta f_{\text{mix}}(x, T) $$
由于 $F_{\text{sep}} = N f(v, T)$，我们可以将总自由能写为：
$$ F(N_A, N_B, T) = N f(v, T) + N \Delta f_{\text{mix}}(x, T) $$
二元混合物的有效性（Availability）定义为：
$$ \hat{G} = F(N_A, N_B, T) - \mu_A N_A - \mu_B N_B $$
利用 $N_A = x N$ 和 $N_B = (1 - x) N$，将其代入：
$$ \hat{G} = N f(v, T) + N \Delta f_{\text{mix}}(x, T) - \mu_A (x N) - \mu_B (1 - x) N $$
两边同除以总粒子数 $N$（由于密度涨落可忽略，我们将 $N$ 视为常数），得到每个粒子的平均有效性 $\hat{g} = \hat{G}/N$：
$$ \hat{g}(x; T, \mu) = f(v, T) + \Delta f_{\text{mix}}(x, T) - \mu_A x - \mu_B (1 - x) $$
重新整理各项：
$$ \hat{g}(x; T, \mu) = \Delta f_{\text{mix}}(x, T) - (\mu_A - \mu_B) x + [f(v, T) - \mu_B] $$
由于温度 $T$、比容 $v$ 以及储器的化学势 $\mu_A, \mu_B$ 都是由外界固定的常数，因此 $[f(v, T) - \mu_B]$ 是一个与组分 $x$ 无关的相加常数。

定义化学势之差为 $\mu = \mu_A - \mu_B$，在忽略常数项后，每个粒子的有效性化简为：
$$ \hat{g}(x; T, \mu) = \Delta f_{\text{mix}}(x, T) - \mu x $$
得证。

---

### **(b) 驻值条件与局部稳定性条件**

系统在平衡态下的稳定组分 $x^*$ 应当使平均有效性 $\hat{g}(x; T, \mu)$ 达到极小值。

1. **一阶导数为零（驻值条件 / Stationarity Condition）**：
   $$ \frac{\partial \hat{g}}{\partial x} \bigg|_{x^*} = 0 \implies \frac{\partial \Delta f_{\text{mix}}(x^*, T)}{\partial x} - \mu = 0 $$
   定义化学势函数为 $\mu(x, T) \equiv \frac{\partial \Delta f_{\text{mix}}(x, T)}{\partial x}$，则有：
   $$ \mu = \mu(x^*, T) $$

2. **二阶导数大于零（局部稳定性条件 / Local Stability Condition）**：
   $$ \frac{\partial^2 \hat{g}}{\partial x^2} \bigg|_{x^*} > 0 \implies \frac{\partial^2 \Delta f_{\text{mix}}(x^*, T)}{\partial x^2} > 0 $$

#### **利用公式 (1) 导出具体形式**：
已知混合自由能为：
$$ \Delta f_{\text{mix}}(x, T) = T \left[ x \log x + (1 - x) \log(1 - x) \right] + \chi x (1 - x) $$
- **一阶导数（化学势之差）**：
  $$ \mu(x, T) = T \left[ \log x + 1 - \log(1 - x) - 1 \right] + \chi (1 - 2x) = T \log \frac{x}{1 - x} + \chi (1 - 2x) $$
  因此，**具体驻值条件**为：
  $$ \mu = T \log \frac{x^*}{1 - x^*} + \chi (1 - 2x^*) $$

- **二阶导数**：
  $$ \frac{\partial^2 \Delta f_{\text{mix}}}{\partial x^2} = T \left( \frac{1}{x} + \frac{1}{1 - x} \right) - 2\chi = \frac{T}{x(1 - x)} - 2\chi $$
  因此，**具体局部稳定性条件**为：
  $$ \frac{T}{x^*(1 - x^*)} - 2\chi > 0 \implies T > 2 \chi x^*(1 - x^*) $$

#### **驻值条件的物理意义**：
在混合物中，组分 $A$ 和 $B$ 的化学势分别表示为 $\mu_A^{\text{mix}} = \left(\frac{\partial F}{\partial N_A}\right)_{T,V,N_B}$ 和 $\mu_B^{\text{mix}} = \left(\frac{\partial F}{\partial N_B}\right)_{T,V,N_A}$。可以证明其差值为：
$$ \mu_A^{\text{mix}} - \mu_B^{\text{mix}} = \frac{\partial \Delta f_{\text{mix}}}{\partial x} $$
而驻值条件 $\mu = \mu(x^*, T)$ 等价于：
$$ \mu_A - \mu_B = \mu_A^{\text{mix}} - \mu_B^{\text{mix}} $$
这表明**混合物与储器之间达到了物质交换平衡**。在平衡时，从储器中拿走一个 $B$ 分子并替换为一个 $A$ 分子，与混合物中发生相同的替换，其净自由能变（有效性变化）为零。

---

### **(c) 旋光线（Spinodal Curve）与临界点（Critical Point）**

**旋光线**定义为局部稳定与不稳定之间的分界线。此时，系统的二阶导数恰好为零：
$$ \frac{\partial^2 \Delta f_{\text{mix}}}{\partial x^2} = 0 \implies \frac{T}{x(1 - x)} - 2\chi = 0 $$
由此解得旋光线方程：
$$ T_{\text{sp}}(x) = 2 \chi x(1 - x) $$

**临界点 $(x_c, T_c)$** 是旋光线上的最高温度点。由于 $T_{\text{sp}}(x)$ 是关于 $x$ 开口向下的二次曲线，对其求导并令其为零：
$$ \frac{d T_{\text{sp}}(x)}{dx} = 2\chi (1 - 2x) = 0 \implies x_c = \frac{1}{2} $$
将 $x_c = 1/2$ 代入旋光线方程，求得临界温度 $T_c$：
$$ T_c = 2\chi \left(\frac{1}{2}\right)\left(1 - \frac{1}{2}\right) = \frac{\chi}{2} $$
因此，临界点为：
$$ (x_c, T_c) = \left( \frac{1}{2}, \frac{\chi}{2} \right) $$

---

### **(d) 旋光线分支与相区分析**

对于 $T < T_c$，我们求解方程 $T = 2\chi x(1-x)$。将其展开为标准一元二次方程：
$$ 2\chi x^2 - 2\chi x + T = 0 \implies x^2 - x + \frac{T}{2\chi} = 0 $$
利用求根公式：
$$ x_{\text{sp}} = \frac{1 \pm \sqrt{1 - \frac{4T}{2\chi}}}{2} = \frac{1 \pm \sqrt{1 - \frac{2T}{\chi}}}{2} $$
因为 $T_c = \chi / 2 \implies 2/\chi = 1/T_c$，上式可写为：
$$ x_{\text{sp}}^{(1)}(T) = \frac{1 - \sqrt{1 - T/T_c}}{2}, \quad x_{\text{sp}}^{(2)}(T) = \frac{1 + \sqrt{1 - T/T_c}}{2} $$

#### **$T - x$ 界面上的旋光线示意与区域划分**：

```
温度 T 
  ^
  |          Critical Point (1/2, T_c)
 T_c +-----------------*-----------------+
  |                 /  |  \              |
  |                /   |   \             |
  |   Locally     /    |    \   Locally  |
  |   Stable     /   Locally \  Stable   |
  |  (B-rich)   /   Unstable  \ (A-rich) |
  |            /               \         |
  |           /                 \        |
  +----------+---------+---------+-------+--> 组分 x
  0         x_sp1     1/2       x_sp2    1
```

- **旋光线内部区域** ($T < T_{\text{sp}}(x)$ 或 $x_{\text{sp}}^{(1)} < x < x_{\text{sp}}^{(2)}$)：在此区域内，$\frac{\partial^2 \Delta f_{\text{mix}}}{\partial x^2} < 0$，均匀混合物是**局部不稳定（Locally Unstable）**的，系统会自发发生无势垒的**自发相分离（Spinodal Decomposition）**。
- **旋光线外部区域** ($T > T_{\text{sp}}(x)$)：在此区域内，$\frac{\partial^2 \Delta f_{\text{mix}}}{\partial x^2} > 0$，均匀混合物是**局部稳定（Locally Stable）**的（可能是亚稳态或全局稳态）。
  - **左侧低 $x$ 区域** ($x < x_{\text{sp}}^{(1)}$)：由于溶质 $A$ 的比例极低，该局部稳定相可解释为**富 $B$ 均匀相（B-rich phase）**。
  - **右侧高 $x$ 区域** ($x > x_{\text{sp}}^{(2)}$)：由于溶质 $A$ 的比例极高，该局部稳定相可解释为**富 $A$ 均匀相（A-rich phase）**。

---

### **(e) 自由能与化学势曲线及双切线分析**

对于固定的 $T < T_c$，由于在中间区域 $\frac{\partial^2 \Delta f_{\text{mix}}}{\partial x^2} < 0$，$\Delta f_{\text{mix}}(x, T)$ 表现为**双阱（Double-well）**形状。

#### **曲线示意图说明**：

1. **$\Delta f_{\text{mix}}(x, T)$ 曲线**：
   表现为关于 $x = 1/2$ 对称的双峰阱。
   - 在 $x \to 0$ 和 $x \to 1$ 附近向下发散（由于 $-T S_{\text{mix}}$ 在边界上的斜率趋于无穷大）。
   - 在 $x_{\text{sp}}^{(1)}$ 和 $x_{\text{sp}}^{(2)}$ 之间是凹的（向上弯曲）。
   - **双切线（Double-tangent line）** 是同时切于两个阱底附近的直线。由于对称性，该切线必然是**水平的**，切点为 $x_{\text{b}}^{(1)}$ 和 $x_{\text{b}}^{(2)}$。

2. **$\mu(x, T)$ 曲线**：
   由于 $\mu = \frac{\partial \Delta f_{\text{mix}}}{\partial x}$，它是自由能的斜率。表现为“S”形曲线：
   - 在 $x=1/2$ 处斜率为负（因为 $T < T_c$）。
   - 曲线穿过零点三次，分别在 $x_{\text{b}}^{(1)}$、 $1/2$、 $x_{\text{b}}^{(2)}$ 处 $\mu = 0$。

#### **利用对称性证明**：
已知混合自由能具有关于 $1/2$ 的对称性：
$$ \Delta f_{\text{mix}}(x, T) = \Delta f_{\text{mix}}(1 - x, T) \tag{S} $$
对其求偏导可得化学势的反对称关系：
$$ \mu(x, T) = -\mu(1 - x, T) $$
若双切线切于 $x_{\text{b}}^{(1)}$ 和 $x_{\text{b}}^{(2)}$，则切点处的斜率（化学势）相等：
$$ \mu(x_{\text{b}}^{(1)}, T) = \mu(x_{\text{b}}^{(2)}, T) \tag{C1} $$
且切线斜率等于两点连线的斜率：
$$ \mu(x_{\text{b}}^{(1)}, T) = \frac{\Delta f_{\text{mix}}(x_{\text{b}}^{(2)}, T) - \Delta f_{\text{mix}}(x_{\text{b}}^{(1)}, T)}{x_{\text{b}}^{(2)} - x_{\text{b}}^{(1)}} \tag{C2} $$
假设 $x_{\text{b}}^{(2)} = 1 - x_{\text{b}}^{(1)}$。由对称性 (S) 可知：
$$ \Delta f_{\text{mix}}(x_{\text{b}}^{(2)}, T) = \Delta f_{\text{mix}}(1 - x_{\text{b}}^{(1)}, T) = \Delta f_{\text{mix}}(x_{\text{b}}^{(1)}, T) $$
将该结果代入 (C2) 的分子中，分子为 0：
$$ \mu(x_{\text{b}}^{(1)}, T) = 0 $$
再由 (C1) 可知：
$$ \mu(x_{\text{b}}^{(1)}, T) = \mu(x_{\text{b}}^{(2)}, T) = 0 $$
这意味着**双切线是水平的（斜率为 0）**。

#### **导出共存线（Binodal）方程**：
令 $\mu(x, T) = 0$：
$$ T \log \frac{x}{1 - x} + \chi (1 - 2x) = 0 $$
由于 $x_{\text{b}}^{(1)} < 1/2$，这就是共存线的控制方程：
$$ T \log \frac{x}{1 - x} + \chi(1 - 2x) = 0, \quad 0 < x < \frac{1}{2} \tag{Binodal} $$

#### **等深度验证**：
在水平双切线（共存）情况下，$\mu = 0$，有效性为：
$$ \hat{g}(x; T, 0) = \Delta f_{\text{mix}}(x, T) $$
在两个共存组分处：
$$ \hat{g}(x_{\text{b}}^{(1)}; T, 0) = \Delta f_{\text{mix}}(x_{\text{b}}^{(1)}, T) $$
$$ \hat{g}(x_{\text{b}}^{(2)}; T, 0) = \Delta f_{\text{mix}}(x_{\text{b}}^{(2)}, T) $$
由于 $\Delta f_{\text{mix}}(x_{\text{b}}^{(1)}, T) = \Delta f_{\text{mix}}(1 - x_{\text{b}}^{(1)}, T) = \Delta f_{\text{mix}}(x_{\text{b}}^{(2)}, T)$，因此：
$$ \hat{g}(x_{\text{b}}^{(1)}; T, 0) = \hat{g}(x_{\text{b}}^{(2)}; T, 0) $$
这说明**在共存状态下，有效性的两个局部极小值具有完全相同的深度**，即两个相具有相同的热力学稳定性（两相共存）。

---

### **数值与相分数（Lever Rule）分析**

现在设定系统整体组分固定为：
$$ \bar{x} = \frac{1}{3} $$
定义简正温度为 $t = \frac{T_c - T}{T_c}$，其中 $T_c = \frac{\chi}{2} \implies \chi = 2 T_c$。

#### **1. 求解相分离转变温度 $t_{\text{sep}}$**：
当温度降低时，一旦左侧共存线组分 $x_{\text{b}}^{(1)}(T)$ 首次缩减到等于整体组分 $\bar{x} = 1/3$，系统便开始发生相分离。
将 $x = 1/3$ 代入共存线方程：
$$ T \log \frac{1/3}{2/3} + \chi \left(1 - \frac{2}{3}\right) = 0 \implies -T \log 2 + \frac{\chi}{3} = 0 $$
利用 $\chi = 2 T_c$：
$$ T \log 2 = \frac{2 T_c}{3} \implies \frac{T}{T_c} = \frac{2}{3 \log 2} $$
因此，相分离开始时的简正温度 $t_{\text{sep}}$ 为：
$$ t_{\text{sep}} = 1 - \frac{T}{T_c} = 1 - \frac{2}{3 \log 2} \approx 1 - 0.9618 = 0.0382 $$

#### **2. 不同简正温度 $t > t_{\text{sep}}$ 下的数值解**：
方程为：
$$ \frac{1 - t}{2} \log \frac{x}{1 - x} + 1 - 2x = 0 $$
变形为显式关于 $t$ 的函数，便于数值计算：
$$ t = 1 - \frac{2(2x - 1)}{\log \frac{x}{1 - x}} $$
通过选定不同的 $x \in (0, 1/3)$，我们可以精确地逆向映射出对应的 $t$ 值，进而得到共存组分。以下是数值计算的结果表格：

| $x_{\text{b}}^{(1)}(t)$ (富B相) | $x_{\text{b}}^{(2)}(t) = 1 - x_{\text{b}}^{(1)}$ (富A相) | 对应计算出的简正温度 $t$ |
| :--- | :--- | :--- |
| **$0.3333$ ($1/3$)** | $0.6667$ | **$t_{\text{sep}} \approx 0.0382$** |
| $0.3000$ | $0.7000$ | $0.0558$ |
| $0.2500$ | $0.7500$ | $0.0897$ |
| $0.2000$ | $0.8000$ | $0.1344$ |
| $0.1500$ | $0.8500$ | $0.1929$ |
| $0.1000$ | $0.9000$ | $0.2718$ |
| $0.0500$ | $0.9500$ | $0.3887$ |
| $0.0200$ | $0.9800$ | $0.5067$ |
| $0.0100$ | $0.9900$ | $0.5735$ |
| $0.0010$ | $0.9990$ | $0.7110$ |

#### **3. 利用杠杆原理（Lever Rule）确定相分数**：
杠杆原理方程为：
$$ \bar{x} = \phi_1 x_{\text{b}}^{(1)}(t) + \phi_2 x_{\text{b}}^{(2)}(t), \quad \phi_1 + \phi_2 = 1 $$
因为 $\bar{x} = 1/3$ 且 $x_{\text{b}}^{(2)}(t) = 1 - x_{\text{b}}^{(1)}(t)$，代入消去 $\phi_2$：
$$ \frac{1}{3} = \phi_1 x_{\text{b}}^{(1)}(t) + (1 - \phi_1) \left( 1 - x_{\text{b}}^{(1)}(t) \right) $$
$$ \frac{1}{3} = \phi_1 \left( 2x_{\text{b}}^{(1)}(t) - 1 \right) + 1 - x_{\text{b}}^{(1)}(t) $$
$$ \phi_1 \left( 1 - 2x_{\text{b}}^{(1)}(t) \right) = \frac{2}{3} - x_{\text{b}}^{(1)}(t) $$
由此得到富 $B$ 相的相分数 $\phi_1(t)$：
$$ \phi_1(t) = \frac{\frac{2}{3} - x_{\text{b}}^{(1)}(t)}{1 - 2x_{\text{b}}^{(1)}(t)} $$
同理，富 $A$ 相的相分数 $\phi_2(t) = 1 - \phi_1(t)$ 表达式为：
$$ \phi_2(t) = \frac{\frac{1}{3} - x_{\text{b}}^{(1)}(t)}{1 - 2x_{\text{b}}^{(1)}(t)} $$

利用前述数值解表格，我们可以算出在不同简正温度下各相的占比：

- **在相变点** ($t = t_{\text{sep}} \approx 0.0382$，此时 $x_{\text{b}}^{(1)} = 1/3$)：
  $$ \phi_1 = \frac{2/3 - 1/3}{1 - 2/3} = 1.0, \quad \phi_2 = 0.0 $$
  系统全部为均匀相（可以看作全为富 B 相）。
- **当 $t = 0.0897$** ($x_{\text{b}}^{(1)} = 0.25$)：
  $$ \phi_1 = \frac{2/3 - 0.25}{1 - 0.50} = \frac{5}{6} \approx 0.833, \quad \phi_2 = \frac{1}{6} \approx 0.167 $$
- **当 $t = 0.2718$** ($x_{\text{b}}^{(1)} = 0.10$)：
  $$ \phi_1 = \frac{2/3 - 0.10}{1 - 0.20} = \frac{17}{24} \approx 0.708, \quad \phi_2 = \frac{7}{24} \approx 0.292 $$
- **当 $t \to 1$ （温度趋于绝对零度）**，此时 $x_{\text{b}}^{(1)} \to 0$：
  $$ \phi_1 \to \frac{2}{3} \approx 0.667, \quad \phi_2 \to \frac{1}{3} \approx 0.333 $$
  这符合物理直觉：在极低温度下，系统完全分离为纯 $B$ 相 ($x=0$) 和纯 $A$ 相 ($x=1$)，为了维持总体组分 $\bar{x} = 1/3$，纯 $A$ 相的比例必须为 $1/3$。

#### **相分数随简正温度 $t$ 演化的曲线描述**：

根据上述计算，您可以绘制出如下的相分数演化曲线：

- **横轴**：简正温度 $t$（从 $t_{\text{sep}} \approx 0.0382$ 增加到 $1.0$）。
- **纵轴**：相分数 $\phi_1, \phi_2$（范围 $0$ 到 $1$）。
- **变化趋势**：
  - 在 $t < t_{\text{sep}}$ 时，系统不发生相分离，$\phi_1 = 1.0, \phi_2 = 0.0$。
  - 在 $t = t_{\text{sep}}$ 处，$\phi_2$ 从 $0$ 开始急剧平滑上升，$\phi_1$ 从 $1.0$ 开始平滑下降。
  - 随着 $t$ 进一步增加，$\phi_1(t)$ 渐近趋于 $2/3 \approx 0.667$，而 $\phi_2(t)$ 渐近趋于 $1/3 \approx 0.333$。这表明降温过程中，富 $A$ 相的体积（或质量）占比逐渐增大并最终稳定在 $1/3$。