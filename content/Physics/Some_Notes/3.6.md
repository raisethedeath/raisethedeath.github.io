# Problem 3.6 (Canonical ensemble with finite bath ★★★★)

## Recitation #3
Consider two subsystems, labeled 1 and 2, separated by a diathermal wall so that they may exchange energy but not particles or volumes. Recall that the distribution of the energy of subsystem 1 is given by (3.53):
$p(E_1) \propto e^{S_{\text{tot}}(E_1)} = e^{S_1(E_1)+S_2(E_{\text{tot}}-E_1)}. \tag{3.156}$
(a) Let $E_1^*$ be the equilibrium energy, defined by the condition $T_1 = T_2$. Expand the total entropy $S_{\text{tot}}(E_1)$ to second order around $E_1^*$, and show that $p(E_1)$ is approximately Gaussian:
$p(E_1) \propto \exp\left[ -\frac{1}{2T^2} \left( \frac{1}{C_1} + \frac{1}{C_2} \right) (E_1 - E_1^*)^2 \right],$
where $C_1, C_2$ are the heat capacities of the two subsystems evaluated at equilibrium. Explain why higher-order terms can be neglected for large subsystems.
(b) Show that the variance of $E_1$ and $E_2$ is
$\sigma_{E_1}^2 = \sigma_{E_2}^2 = \frac{T^2 C_1 C_2}{C_1 + C_2}.$
Show that in the limit $C_2 \gg C_1$, the variance becomes independent of $C_2$. Also show that your result reduces to the energy variance predicted by the canonical ensemble.
(c) Recalling Eq. (3.75), the probability density of the microstate x of subsystem 1 is
$p(x) \propto e^{S_2(E_{\text{tot}}-H_1(x))} = e^{S_2(E_{\text{tot}}-E_1^*-(H_1(x)-E_1^*))}.$
Expand $\log p(x)$ to second order in $H_1(x) - E_1^*$, and show that
$p(x) \propto \exp\left[ -\beta H_1(x) - \frac{(H_1(x)-E_1^*)^2}{2T^2 C_2} \right], \tag{3.157}$
where $\beta = 1/T$ and $C_2$ are evaluated at equilibrium. This gives the Gaussian approximation to the canonical ensemble with a finite bath.
(d) Using the equilibrium condition
$\beta = \frac{1}{T} = \left( \frac{dS_1}{dE_1} \right)_{E_1^*} = \left( \frac{dS_2}{dE_2} \right)_{E_{\text{tot}}-E_1^*}, \tag{3.158}$
show that, if the function $S_1(E_1)$ is known and $C_1 > 0$ (so that $S_1'(E_1)$ is monotone), then $E_1^*$ is fully determined by $\beta$. Hence, once $S_1(E_1)$ is specified, the finite-bath distribution in the Gaussian approximation is characterized by two independent bath parameters: the inverse temperature $\beta$ and the heat capacity $C_2$, both evaluated at equilibrium.

## 解答
这是一道深入探讨从微正则系综向正则系综过渡，以及有限大热库（Finite bath）修正的经典统计物理习题。题目默认使用了自然单位制 $k_B = 1$，即温度 $T$ 与能量同量纲，熵 $S$ 无量纲且 $\beta = 1/T$。

以下是对该习题详细、完整的解答：

---

### (a) 证明 $p(E_1)$ 近似为高斯分布并解释忽略高阶项的原因

**解答：**
系统的总概率分布满足 $p(E_1) \propto e^{S_{\text{tot}}(E_1)}$，其中总熵为：
$$S_{\text{tot}}(E_1) = S_1(E_1) + S_2(E_{\text{tot}} - E_1)$$

1. **寻找平衡点（一阶导数）：**
   平衡能量 $E_1^*$ 对应于总熵取得最大值的点。对 $E_1$ 求导并令其为0：
   $$ \left. \frac{dS_{\text{tot}}}{dE_1} \right|_{E_1^*} = \left. \frac{dS_1}{dE_1} \right|_{E_1^*} - \left. \frac{dS_2}{dE_2} \right|_{E_2^*} = 0 $$
   根据热力学关系 $\frac{dS}{dE} = \frac{1}{T}$，上式即给出了平衡条件：$\frac{1}{T_1} - \frac{1}{T_2} = 0 \implies T_1 = T_2 \equiv T$。
   此时 $E_2^* = E_{\text{tot}} - E_1^*$。

2. **计算二阶导数：**
   我们需要计算 $\frac{d^2 S_{\text{tot}}}{dE_1^2}$ 在 $E_1^*$ 处的值。
   $$ \frac{d^2 S_{\text{tot}}}{dE_1^2} = \frac{d}{dE_1} \left( \frac{1}{T_1(E_1)} \right) - \frac{d}{dE_1} \left( \frac{1}{T_2(E_{\text{tot}} - E_1)} \right) $$
   利用链式法则和热容的定义 $C = \frac{dE}{dT} \implies \frac{dT}{dE} = \frac{1}{C}$：
   $$ \frac{d}{dE_1} \left( \frac{1}{T_1} \right) = -\frac{1}{T_1^2} \frac{dT_1}{dE_1} = -\frac{1}{T_1^2 C_1} $$
   对于子系统2，注意 $\frac{dE_2}{dE_1} = -1$：
   $$ \frac{d}{dE_1} \left( \frac{1}{T_2(E_2)} \right) = \frac{d}{dE_2} \left( \frac{1}{T_2} \right) \cdot \frac{dE_2}{dE_1} = \left( -\frac{1}{T_2^2 C_2} \right) \cdot (-1) = \frac{1}{T_2^2 C_2} $$
   代入平衡条件 $T_1 = T_2 = T$，得到：
   $$ \left. \frac{d^2 S_{\text{tot}}}{dE_1^2} \right|_{E_1^*} = -\frac{1}{T^2 C_1} - \frac{1}{T^2 C_2} = -\frac{1}{T^2} \left( \frac{1}{C_1} + \frac{1}{C_2} \right) $$

3. **泰勒展开：**
   在 $E_1^*$ 附近对 $S_{\text{tot}}(E_1)$ 进行二阶泰勒展开：
   $$ S_{\text{tot}}(E_1) \approx S_{\text{tot}}(E_1^*) + 0 + \frac{1}{2} \left[ -\frac{1}{T^2} \left( \frac{1}{C_1} + \frac{1}{C_2} \right) \right] (E_1 - E_1^*)^2 $$
   将此展开式代入概率公式，舍去常数因子 $e^{S_{\text{tot}}(E_1^*)}$（可并入归一化常数），即得：
   $$ p(E_1) \propto \exp\left[ -\frac{1}{2T^2} \left( \frac{1}{C_1} + \frac{1}{C_2} \right) (E_1 - E_1^*)^2 \right] $$

**为什么可以忽略高阶项：**
对于宏观大系统，能量 $E$ 和热容 $C$ 都是广延量，与粒子数 $N$ 成正比（$E \sim N, C \sim N$）。
在指数上，二阶项（高斯项）的量级为 $\frac{1}{N} (\Delta E)^2$。由于典型的能量涨落 $\Delta E \sim \sqrt{N}$，因此二阶项的量级是 $\mathcal{O}(N^0)$，即量级为1，它是决定分布宽度的核心项。
三阶项的展开系数正比于 $\frac{d^3 S}{dE^3} \sim \frac{1}{N^2}$，其对指数的贡献为 $\frac{1}{N^2}(\Delta E)^3 \sim \frac{N^{3/2}}{N^2} \sim \frac{1}{\sqrt{N}}$。
在热力学极限（$N \to \infty$）下，三阶及更高阶项均趋于0。==因此对于大系统，高斯近似是极其精确的。==

---

### (b) 能量方差及其热库极限与正则系综的比对

**解答：**
标准高斯分布的概率密度函数形式为 $p(x) \propto \exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)$。
将 (a) 中得到的结果与标准形式对比，可以得到 $E_1$ 的方差 $\sigma_{E_1}^2$：
$$ \frac{1}{2\sigma_{E_1}^2} = \frac{1}{2T^2} \left( \frac{1}{C_1} + \frac{1}{C_2} \right) = \frac{C_1 + C_2}{2T^2 C_1 C_2} $$
$$ \implies \sigma_{E_1}^2 = \frac{T^2 C_1 C_2}{C_1 + C_2} $$
因为总能量 $E_{\text{tot}} = E_1 + E_2$ 是守恒的，所以有 $\Delta E_1 = -\Delta E_2$。对等式两边取方差，立刻得到：
$$ \sigma_{E_2}^2 = \sigma_{E_1}^2 = \frac{T^2 C_1 C_2}{C_1 + C_2} $$

**$C_2 \gg C_1$ 的极限情况（子系统2作为无限大热库）：**
我们将上式分子分母同除以 $C_2$：
$$ \sigma_{E_1}^2 = \frac{T^2 C_1}{1 + \frac{C_1}{C_2}} $$
在极限 $C_2 \to \infty$ 时，$\frac{C_1}{C_2} \to 0$，则：
$$ \lim_{C_2 \to \infty} \sigma_{E_1}^2 = T^2 C_1 $$
该结果完全独立于热库的热容 $C_2$。

**与正则系综的比较：**
在标准的正则系综（假定与无限大热库接触）中，能量的涨落方差由涨落耗散定理给出，为 $\langle (\Delta E)^2 \rangle = k_B T^2 C_V$。在当前使用的单位制 $k_B=1$ 下，正是 $T^2 C_1$。这证明了我们在有限大热库情况下推导出的高斯分布，在热库无限大的极限下能完美退化回正则系综的预测结果。

---

### (c) 导出有限大热库下的微观态概率分布 (3.157)

**解答：**
已知子系统1处于微观态 $x$ （其能量为 $H_1(x)$）的概率正比于热库相应的微观态数目，即：
$$ p(x) \propto e^{S_2(E_{\text{tot}} - H_1(x))} $$
我们将热库的能量写为 $E_2 = E_{\text{tot}} - H_1(x)$。
将 $E_2$ 在其平衡值 $E_2^* = E_{\text{tot}} - E_1^*$ 处进行二阶泰勒展开。注意 $E_2 - E_2^* = -(H_1(x) - E_1^*)$：
$$ S_2(E_2) \approx S_2(E_2^*) + \left. \frac{dS_2}{dE_2} \right|_{E_2^*} (E_2 - E_2^*) + \frac{1}{2} \left. \frac{d^2 S_2}{dE_2^2} \right|_{E_2^*} (E_2 - E_2^*)^2 $$
计算导数项：
1. 一阶导：$\left. \frac{dS_2}{dE_2} \right|_{E_2^*} = \frac{1}{T_2^*} = \frac{1}{T} = \beta$。
2. 二阶导：在 (a) 中已求出 $\frac{d^2 S_2}{dE_2^2} = \frac{d}{dE_2}\left(\frac{1}{T_2}\right) = -\frac{1}{T_2^2 C_2} = -\frac{1}{T^2 C_2}$（在平衡处取值）。

代入展开式中：
$$ S_2(E_{\text{tot}} - H_1(x)) \approx S_2(E_2^*) + \beta [-(H_1(x) - E_1^*)] + \frac{1}{2} \left( -\frac{1}{T^2 C_2} \right) [-(H_1(x) - E_1^*)]^2 $$
$$ = S_2(E_2^*) - \beta (H_1(x) - E_1^*) - \frac{(H_1(x) - E_1^*)^2}{2 T^2 C_2} $$
将展开式代回 $p(x)$ 中：
$$ \ln p(x) = \text{const} + S_2(E_2^*) - \beta (H_1(x) - E_1^*) - \frac{(H_1(x) - E_1^*)^2}{2 T^2 C_2} $$
由于 $S_2(E_2^*)$ 和 $\beta E_1^*$ 都是不依赖于微观态 $x$ 的常数，它们可以统统吸收到归一化常数中。因此对数概率密度的核心部分为：
$$ p(x) \propto \exp\left[ -\beta H_1(x) - \frac{(H_1(x) - E_1^*)^2}{2T^2 C_2} \right] $$
这正是式 (3.157)。等式右侧的第一项是标准的正则系综玻尔兹曼因子，第二项高斯惩罚项则是由于热库有限大小带来的**有限热库修正 (Finite bath correction)**。

---

### (d) $E_1^*$ 的唯一决定性及有限大热库的参数刻画

**解答：**
我们来看平衡条件 (3.158)：
$$ \beta = \left( \frac{dS_1}{dE_1} \right)_{E_1^*} $$
这是一个关于 $E_1^*$ 的方程。为了证明通过给定的 $\beta$ 能够唯一解出 $E_1^*$，我们需要分析函数 $S_1'(E_1) = \frac{dS_1}{dE_1}$ 的单调性。

对 $S_1'(E_1)$ 再次关于 $E_1$ 求导：
$$ \frac{d}{dE_1} \left( \frac{dS_1}{dE_1} \right) = \frac{d}{dE_1} \left( \frac{1}{T_1} \right) = -\frac{1}{T_1^2 C_1} $$
已知子系统的热容 $C_1 > 0$（保证了系统的热力学稳定性），且绝对温度平方 $T_1^2 > 0$。因此：
$$ \frac{d^2 S_1}{dE_1^2} = -\frac{1}{T_1^2 C_1} < 0 $$
这说明函数 $S_1'(E_1)$ 处处具有负导数，是一个**严格单调递减**的函数。
因此，给定任意一个宏观的逆温度 $\beta$（使得方程在定义域内有解），单调性保证了方程 $\beta = S_1'(E_1^*)$ 的根 $E_1^*$ 存在且唯一。这就证明了平衡能量 $E_1^*$ 是由 $\beta$ 完全（唯一）决定的。

**总结结论：**
回顾在 (c) 中得到的高斯近似分布：
$$ p(x) \propto \exp\left[ -\beta H_1(x) - \frac{(H_1(x) - E_1^*(\beta))^2}{2 T^2 C_2} \right] $$
假设子系统的本征性质（即 $S_1(E_1)$ 及其导出的 $H_1(x)$ 等）已知，要写出上述外界强加给子系统1的微观概率分布，我们只需要知道来自外界热库的参数即可。
在分布表达式中：
1. $\beta$ 决定了线性项，同时也唯一决定了 $E_1^*$。
2. 二次项的系数由 $T^2 C_2 = C_2 / \beta^2$ 决定，由于 $\beta$ 已知，只需再引入热库的热容 $C_2$。

因此，**有限热库在二阶（高斯）近似下对目标子系统的作用，仅仅通过两个独立的宏观热力学参数来刻画：平衡时的逆温度 $\beta$ 和 热库热容 $C_2$**。当 $C_2 \to \infty$ 时，第二项消失，分布不再依赖 $C_2$，退化为仅由单个参数 $\beta$ 刻画的理想正则分布。
