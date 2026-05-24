# Problem 2 (Heat capacity of saturated vapor★★★)
Suggested group size: 2 students.
A vapor of substance A is kept in equilibrium with its condensed phase along the coexistence curve $P = P_{\text{sat}}(T)$. Let $s(T,P)$ be the entropy per particle of the vapor phase, and define the heat capacity per particle of the saturated vapor by
$h = T \frac{ds}{dT},$
where the derivative is taken along the coexistence curve.
(a) Show that
$h = c_P - T \left( \frac{\partial v}{\partial T} \right)_P \frac{dP_{\text{sat}}}{dT}.$
Here
$c_P = T \left( \frac{\partial s}{\partial T} \right)_P.$

(Hint: use the definition of $c_P$ and a suitable Maxwell relation.)
(b) Assume that the vapor is an ideal gas. Using the result of the preceding problem, show that
$h = c_P - \frac{q}{T}.$
(c) Recall that the entropy per particle of an ideal gas vapor is
$\frac{S(E,V,N)}{N} = \log\left( v e^{5/2} \right) - \log \lambda(T)^3,$
where $v = V/N$ is the volume per particle, and $\lambda(T)$ is the thermal wavelength. We may understand the first term as the entropy coming from real-space configurations, and the second term as the entropy coming from the momentum part of phase space.
As T and P vary along the coexistence curve, discuss how each part of the vapor entropy changes. Explain physically why h can become negative at sufficiently low temperature.
(d) Still assuming that the vapor is an ideal gas, determine the derivative $dv/dT$ along the coexistence curve. Show that
$\frac{dv}{dT} = \frac{1}{P_{\text{sat}}} \left( 1 - \frac{q}{T} \right).$
Explain why the vapor volume can decrease as T increases along the coexistence curve.

## 解答
这是一道非常经典的统计物理与热力学综合题，深入探讨了气液共存曲线上（饱和蒸气）的热力学性质，特别是令人反直觉的“负热容”现象。

题目中默认使用了自然单位制（即玻尔兹曼常数 $k_B = 1$），此时温度 $T$ 与能量同量纲，理想气体状态方程为 $Pv = T$（其中 $v = V/N$ 为单粒子体积）。

以下是详细完整的解答：

---

### (a) 证明 $h = c_P - T \left( \frac{\partial v}{\partial T} \right)_P \frac{dP_{\text{sat}}}{dT}$

**解答：**
饱和蒸气的单粒子熵 $s$ 可以看作是温度 $T$ 和压力 $P$ 的函数，即 $s = s(T, P)$。
当系统沿着气液共存曲线 $P = P_{\text{sat}}(T)$ 演化时，温度和压力并非独立，而是相互绑定的。因此，沿着共存曲线对温度求全导数（利用链式法则）得到：
$$ \frac{ds}{dT} = \left( \frac{\partial s}{\partial T} \right)_P + \left( \frac{\partial s}{\partial P} \right)_T \frac{dP_{\text{sat}}}{dT} $$

在等式两边同乘温度 $T$：
$$ T \frac{ds}{dT} = T \left( \frac{\partial s}{\partial T} \right)_P + T \left( \frac{\partial s}{\partial P} \right)_T \frac{dP_{\text{sat}}}{dT} $$

根据题目定义，沿着共存曲线的比热容为 $h = T \frac{ds}{dT}$；而定压比热容定义为 $c_P = T \left( \frac{\partial s}{\partial T} \right)_P$。将这两项代入上式：
$$ h = c_P + T \left( \frac{\partial s}{\partial P} \right)_T \frac{dP_{\text{sat}}}{dT} $$

接下来需要处理 $\left( \frac{\partial s}{\partial P} \right)_T$。根据单粒子吉布斯自由能的基本热力学微分方程 $dg = -s dT + v dP$，我们可以得到相应的 **麦克斯韦关系式 (Maxwell relation)**：
$$ \left( \frac{\partial s}{\partial P} \right)_T = -\left( \frac{\partial v}{\partial T} \right)_P $$

将麦克斯韦关系式代入，即可得到要证的结论：
$$ h = c_P - T \left( \frac{\partial v}{\partial T} \right)_P \frac{dP_{\text{sat}}}{dT} $$

---

### (b) 对于理想气体，证明 $h = c_P - \frac{q}{T}$

**解答：**
这里需要用到两个知识点：理想气体的性质，以及克劳修斯-克拉珀龙方程 (Clausius-Clapeyron equation)。

1. **理想气体偏导数：**
   单粒子理想气体状态方程为 $v = \frac{T}{P}$。
   在恒压下对 $T$ 求偏导：
   $$ \left( \frac{\partial v}{\partial T} \right)_P = \frac{1}{P} = \frac{v}{T} $$
   所以 (a) 中公式里的 $T \left( \frac{\partial v}{\partial T} \right)_P$ 这一项可以化简为：
   $$ T \left( \frac{\partial v}{\partial T} \right)_P = T \cdot \frac{v}{T} = v $$

2. **克拉珀龙方程：**
   沿着共存曲线，压力与温度的关系由克拉珀龙方程给出：
   $$ \frac{dP_{\text{sat}}}{dT} = \frac{q}{T (v_{\text{vapor}} - v_{\text{liquid}})} $$
   其中 $q$ 是每个粒子的潜热。在远离临界点的普通条件下，气体的比体积远远大于液体的比体积（$v_{\text{vapor}} \gg v_{\text{liquid}}$），因此 $v_{\text{vapor}} - v_{\text{liquid}} \approx v$。
   克拉珀龙方程可近似为：
   $$ \frac{dP_{\text{sat}}}{dT} \approx \frac{q}{T v} $$

3. **代入化简：**
   将上述两个结果代入 (a) 的结论中：
   $$ h = c_P - v \cdot \left( \frac{q}{Tv} \right) = c_P - \frac{q}{T} $$
   得证。

---

### (c) 分析饱和蒸气熵的各部分随 $T, P$ 的变化，及 $h$ 出现负值的物理原因

**解答：**
理想气体的熵表示为：
$$ s = \underbrace{\log(v) + \frac{5}{2}}_{\text{构型（空间）熵 } s_{\text{conf}}} - \underbrace{3 \log \lambda(T)}_{\text{动量熵 } s_{\text{mom}}} $$
其中热波长 $\lambda(T) \propto T^{-1/2}$。

**熵的变化分析：**
沿着共存曲线，当温度 $T$ 升高时：
1. **动量部分 ($s_{\text{mom}}$)：** 因为 $\lambda(T) \propto T^{-1/2}$，随着 $T$ 升高，热波长减小（分子热运动的动量展宽变大），故 $-3 \log \lambda(T) \propto \frac{3}{2} \log T$ 这一项是**增加**的。这反映了温度升高导致动量空间的微观状态数增加。
2. **构型部分 ($s_{\text{conf}}$)：** 沿着共存曲线，饱和蒸气压 $P_{\text{sat}}$ 随 $T$ 呈指数级急剧上升（由 $P \sim e^{-q/T}$ 可知）。因为 $v = T/P$，指数级增长的压力 $P$ 压倒了线性的温度 $T$，导致比体积 $v$ 随温度升高而**急剧减小**。因此，构型熵 $s_{\text{conf}} \sim \log v$ 是**减少**的。这反映了气体被剧烈压缩，实空间可及体积变小。

**为什么 $h$ 会出现负值？**
从数学上看，在足够低的温度下，潜热 $q$ 通常是一个远大于热能 $T$ 的常数。当 $T$ 很小时，$\frac{q}{T} \gg c_P$。根据 (b) 的公式 $h = c_P - \frac{q}{T}$，此时 $h$ 必然成为负值。

**物理原因：**
$h < 0$（负热容）意味着**沿着共存曲线对饱和蒸气加热（提高温度 $dT > 0$）时，系统总熵反而是下降的（系统必须向外放热）**。
这是因为，为了让蒸气在升温后依然保持“饱和”状态（不变成过热蒸气），必须顺着共存曲线对其施加极大的外界压力以急剧压缩它的体积。这个压缩过程对气体做了大量的机械功，导致气体内部温度飙升，超过了预期的升温目标。为了保持温度仅仅沿着共存曲线的要求缓慢上升，系统必须**向外散发热量**。==体积剧烈压缩导致的空间熵的损失，远远超过了升温带来的动量熵的增加，从而导致总熵减少。==

---

### (d) 求导数 $\frac{dv}{dT}$ 并解释比体积随温度下降的原因

**解答：**
已知理想气体单粒子体积为 $v = \frac{T}{P_{\text{sat}}}$。
沿着共存曲线对 $T$ 求导（应用除法法则）：
$$ \frac{dv}{dT} = \frac{d}{dT} \left( \frac{T}{P_{\text{sat}}} \right) = \frac{1 \cdot P_{\text{sat}} - T \frac{dP_{\text{sat}}}{dT}}{P_{\text{sat}}^2} $$
将其拆分为两项：
$$ \frac{dv}{dT} = \frac{1}{P_{\text{sat}}} - \frac{T}{P_{\text{sat}}^2} \frac{dP_{\text{sat}}}{dT} $$
由 (b) 中的克拉珀龙近似等式，我们知道 $\frac{dP_{\text{sat}}}{dT} = \frac{q}{Tv} = \frac{q P_{\text{sat}}}{T^2}$。将其代入上式第二项：
$$ \frac{dv}{dT} = \frac{1}{P_{\text{sat}}} - \frac{T}{P_{\text{sat}}^2} \left( \frac{q P_{\text{sat}}}{T^2} \right) = \frac{1}{P_{\text{sat}}} - \frac{q}{P_{\text{sat}} T} $$
提取公因式 $\frac{1}{P_{\text{sat}}}$：
$$ \frac{dv}{dT} = \frac{1}{P_{\text{sat}}} \left( 1 - \frac{q}{T} \right) $$
得证。

**为什么沿共存曲线 $T$ 升高时蒸气体积 $v$ 会减小？**
从上面的公式很容易看出原因：在通常的气液共存区域（远离临界点），分子的汽化潜热 $q$ 远大于单粒子的热涨落能量 $T$（即 $\frac{q}{T} \gg 1$）。
这意味着公式中括号内的项 $\left( 1 - \frac{q}{T} \right) < 0$，从而使得导数 $\frac{dv}{dT} < 0$。

**物理图像解释：**
比体积 $v = T/P$ 受两个竞争因素的影响：
1. **热膨胀效应（分子式中的 $T$）：** 温度升高本身倾向于让气体体积膨胀。
2. **压力压缩效应（分母中的 $P$）：** 随着温度升高，液体蒸发加剧，共存的饱和蒸气压呈非线性的指数级暴涨。

由于汽化潜热极大（$\frac{q}{T} > 1$），压力的指数暴涨效应（压缩）完全“压倒”了温度升高的线性膨胀效应。因此，气体的密度越来越大，比体积 $v$ 只能随着温度的升高而收缩。这也是为何在 (c) 中构型熵会大幅度下降的根本原因。