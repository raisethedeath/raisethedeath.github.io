# Problem 4.4 (Entropy of a Black Hole: A Taste of Non-extensive Thermodynamics ★★★★★)

_recitation#4_

In this problem, we contrast the extensive and additive structure of ordinary thermodynamic systems with the non-extensive, non-additive entropy of black holes.

A black hole is in some sense an extreme example of an isolated object: classically, the region inside the event horizon cannot communicate with the exterior. Nevertheless, the black hole can still be characterized from outside by its mass, horizon area, and, quantum mechanically, by its Hawking radiation.

Throughout this problem we set $k_B = 1$, so entropy is dimensionless and temperature has units of energy.

In classical statistical mechanics, the entropy is defined as

$S(U,V,N) = \log \Omega(U,V,N),$

where $\Omega$ is the number of accessible microstates. For ordinary matter, $U,V,N$ are independent variables, and S is extensive.

A Schwarzschild black hole of mass M has an event horizon at radius

$R_s = \frac{2GM}{c^2},$

and horizon area

$A = 4\pi R_s^2 = \frac{16\pi G^2 M^2}{c^4}.$

For the purpose of this problem, we define the geometric volume enclosed by the horizon as

$V = \frac{4\pi}{3} R_s^3.$

This V is only a geometric volume associated with the horizon radius. For a Schwarzschild black hole, it is not an independent thermodynamic variable.

The Bekenstein-Hawking entropy is given by

$S_{\text{BH}} = \frac{c^3}{4G\hbar} A, \tag{4.7.3}$

where $\hbar$ is the reduced Planck constant.

(a) Using $E = Mc^2$, express the number of accessible microstates $\Omega(E)$ as a function of the total energy E.

(b) Verify the scaling relations

$S \sim A \sim R_s^2 \sim V^{2/3} \sim M^2 \sim E^2. \tag{4.7.4}$

Explain why this implies that the entropy is not extensive, i.e. not homogeneous of degree one in the usual thermodynamic variables. What does this suggest about the possibility of an ordinary thermodynamic limit?

(c) Ignoring energy loss to gravitational radiation, suppose two identical black holes of mass M merge into a single black hole of mass 2M. Determine how $R_s, A, V, E$, and S change. What do you infer about the additivity of entropy and the irreversibility of the merging process?

(d) Hawking showed that a black hole radiates thermally with temperature

$T_H = \frac{\hbar c^3}{8\pi G M}. \tag{4.7.5}$

Show that this is consistent with the thermodynamic definition

$T = \left( \frac{\partial S}{\partial E} \right)^{-1}.$

(e) Express the temperature as a function of energy and compute the heat capacity. What is unusual about the result? How does the temperature change as the black hole loses energy?

(f) Approximating Hawking radiation as blackbody emission, the radiated power is

$P = \sigma A T^4, \quad \sigma = \frac{\pi^2}{60 \hbar^3 c^2}.$

Using $dE/dt = -P$, determine how the temperature evolves with time. Does the black hole have a finite lifetime? Estimate the lifetime of a black hole with the mass of the Sun and compare it with the age of the universe.


## 解答

以下是针对**问题 4.4（黑洞熵：非外延热力学的一瞥）**的完整中文解答：

---

### **(a) 微观状态数 $\Omega(E)$ 作为总能量 $E$ 的函数**

根据经典统计力学，在玻尔兹曼单位制下（$k_B = 1$），熵的定义为：
$$S = \log \Omega$$
因此，可达微观状态数 $\Omega$ 可以表示为熵的指数函数：
$$\Omega(E) = e^{S(E)}$$

黑洞的贝肯斯坦-霍金（Bekenstein-Hawking）熵（公式 4.7.3）为：
$$S_{\text{BH}} = \frac{c^3}{4G\hbar} A$$

视界表面积 $A$ 为：
$$A = \frac{16\pi G^2 M^2}{c^4}$$

利用爱因斯坦质能方程 $E = Mc^2$，有 $M = \frac{E}{c^2}$，将其代入 $A$ 的表达式：
$$A = \frac{16\pi G^2 E^2}{c^8}$$

将 $A$ 的结果代入 $S_{\text{BH}}$ 的公式，得到熵关于能量 $E$ 的函数：
$$S_{\text{BH}}(E) = \frac{c^3}{4G\hbar} \left( \frac{16\pi G^2 E^2}{c^8} \right) = \frac{4\pi G E^2}{\hbar c^5}$$

因此，可达微观状态数 $\Omega(E)$ 随总能量 $E$ 的变化关系为：
$$\Omega(E) = \exp\left( \frac{4\pi G E^2}{\hbar c^5} \right)$$

---

### **(b) 标度律关系的验证与物理意义**

1. **标度律验证**：
   - 施瓦西半径：$R_s = \frac{2GM}{c^2} \propto M \propto E \implies R_s \sim M \sim E$
   - 几何体积：$V = \frac{4\pi}{3} R_s^3 \propto R_s^3 \implies R_s \sim V^{1/3}$
   - 视界表面积：$A = 4\pi R_s^2 \propto R_s^2 \propto V^{2/3} \propto M^2 \propto E^2 \implies A \sim V^{2/3} \sim M^2 \sim E^2$
   - 贝肯斯坦-霍金熵：$S \propto A \implies S \sim A$

   综合上述比例关系，我们验证了标度律公式 (4.7.4)：
   $$S \sim A \sim R_s^2 \sim V^{2/3} \sim M^2 \sim E^2$$

2. **为什么熵不是外延量（Extensive）**：
   在常规热力学系统中，熵 $S$、能量 $E$、体积 $V$ 都是外延量，即它们是系统尺度（例如体积 $V$）的一 次齐次函数。如果将系统尺寸扩大 $\lambda$ 倍（$V \to \lambda V$），通常要求熵也扩大相同的倍数（$S \to \lambda S$）。
   然而，对于黑洞系统：
   - 熵随体积的标度律为 $S \sim V^{2/3}$。当体积扩大 $\lambda$ 倍时，熵仅扩大 $\lambda^{2/3}$ 倍。这被称为“**次外延（sub-extensive）**”。
   - 熵随能量的标度律为 $S \sim E^2$。若能量增加 $\lambda$ 倍，熵会增加 $\lambda^2$ 倍（超相加）。
   因此，黑洞熵不是关于通常热力学变量（如 $V$ 或 $E$）的一次齐次函数，它不具有外延性，是非外延的。

3. **对普通热力学极限的暗示**：
   常规的热力学极限定义为：在体积 $V \to \infty$ 的同时，粒子数密度 $N/V$ 和能量密度 $E/V$ 保持不变，此时熵密度 $S/V$ 趋于一个有限非零的常数。
   对于黑洞系统，由于具有非外延的标度律，当 $V \to \infty$ 时，其熵密度 $S/V \sim V^{-1/3} \to 0$。这表明**黑洞无法定义常规意义上的热力学极限**。这是**强引力系统（引力为非局域、长程相互作用）的普遍特征**，传统的“系统可分割为独立子系统”的假设在这里失效了。

---

### **(c) 双黑洞合并后的物理量变化与热力学推论**

忽略引力辐射造成的能量损失，两个初始质量均为 $M$ 的相同黑洞合并成一个质量为 $2M$ 的单黑洞：

1. **各物理量的变化**：
   - **能量 ($E$)**：由于能量守恒且无引力辐射，合并后的总能量保持不变。
     $$E_f = E_i = 2Mc^2 \quad (\text{不变})$$
   - **施瓦西半径 ($R_s$)**：
     $$R_{s,f} = \frac{2G(2M)}{c^2} = 2 R_{s,i} \quad (\text{增加为单个小黑洞的 } 2 \text{ 倍})$$
   - **表面积 ($A$)**：
     $$A_f = \frac{16\pi G^2 (2M)^2}{c^4} = 4 A(M) = 2 A_i \quad (\text{增加为初始总表面积的 } 2 \text{ 倍})$$
   - **几何体积 ($V$)**：
     $$V_f = \frac{4\pi}{3} R_{s,f}^3 = 8 V(M) = 4 V_i \quad (\text{增加为初始总几何体积的 } 4 \text{ 倍})$$
   - **熵 ($S$)**：由于 $S \propto A$，
     $$S_f = S(2M) = 4 S(M) = 2 S_i \quad (\text{增加为初始总熵的 } 2 \text{ 倍})$$

2. **结论与推导**：
   - **熵的不可相加性（Non-additivity）**：
     初始系统的总熵为两个子系统熵之和 $S_i = 2 S(M)$，而合并后的系统总熵为 $S_f = 4 S(M)$。显然：
     $$S(A + B) > S(A) + S(B)$$
     这说明黑洞熵是不具有相加性的（非相加），并且展现出**超相加性（superadditivity）**。
   - **过程的不可逆性（Irreversibility）**：
     在合并过程中，总熵增加了一倍（$S_f = 2 S_i > S_i$）。根据热力学第二定律（在黑洞物理中对应霍金视界表面积不减定理），熵的增加意味着**合并过程是高度不可逆的**。在没有外部输入能量的自发情况下，一个大黑洞无法分裂成两个小黑洞，因为那将导致总熵减半，违反热力学第二定律。

---

### **(d) 霍金辐射温度与热力学定义的相容性**

热力学的温度定义为：
$$T = \left( \frac{\partial S}{\partial E} \right)^{-1}$$

利用 (a) 中求出的黑洞熵作为能量 $E$ 的表达式：
$$S(E) = \frac{4\pi G E^2}{\hbar c^5}$$

对其关于能量 $E$ 求偏导数：
$$\frac{\partial S}{\partial E} = \frac{8\pi G E}{\hbar c^5}$$

利用 $E = Mc^2$ 将其转换为质量 $M$ 的表达式：
$$\frac{\partial S}{\partial E} = \frac{8\pi G (Mc^2)}{\hbar c^5} = \frac{8\pi G M}{\hbar c^3}$$

因此，求倒数得到热力学温度：
$$T = \left( \frac{\partial S}{\partial E} \right)^{-1} = \frac{\hbar c^3}{8\pi G M}$$

这与霍金辐射温度公式 (4.7.5) $T_H = \frac{\hbar c^3}{8\pi G M}$ 完全一致，证明了两者是自洽、相容的。

---

### **(e) 温度作为能量的函数、热容及不寻常特性**

1. **温度关于能量的函数**：
   由于 $M = E/c^2$，将温度表示为能量的函数：
   $$T(E) = \frac{\hbar c^5}{8\pi G E}$$

2. **热容（Heat Capacity）计算**：
   热容 $C$ 定义为：
   $$C = \frac{dE}{dT}$$
   利用 $E = \frac{\hbar c^5}{8\pi G T}$ 对 $T$ 求导：
   $$C = \frac{d}{dT} \left( \frac{\hbar c^5}{8\pi G T} \right) = -\frac{\hbar c^5}{8\pi G T^2}$$
   也可以使用质量 $M$ 或熵 $S$ 的形式表示：
   $$C = -\frac{8\pi G M^2}{\hbar c} = -2 S_{\text{BH}}$$

3. **该结果的不寻常之处**：
   - **热容是负数（$C < 0$）**。
   - 在通常的宏观物质系统中，热容始终为正值（$C > 0$），这确保了热平衡的稳定性。而黑洞的**负热容**意味着它是热力学上不稳定的。
   - **逆温效应**：由于热容为负，黑洞在向外辐射能量（能量 $E$ 减少）时，其温度反而会**升高**；==若黑洞吸收外界能量，其温度反而会**降低**==。

4. **失去能量时温度的变化**：
   当黑洞通过霍金辐射向外排放热量导致能量 $E$ 减少时，其温度 $T \propto 1/E$ 会不断**升高**（黑洞变得越来越热）。这会引发恶性循环：温度越高，辐射功率越强，能量流失越快，温度随之进一步升高，最终导致黑洞在剧烈的爆发中“蒸发”殆尽。

---

### **(f) 霍金辐射的演化及寿命估算**

1. **推导辐射功率随质量 $M$ 的变化**：
   将 $A = \frac{16\pi G^2 M^2}{c^4}$ 和 $T = \frac{\hbar c^3}{8\pi G M}$ 代入辐射功率公式 $P = \sigma A T^4$：
   $$P = \left( \frac{\pi^2}{60 \hbar^3 c^2} \right) \left( \frac{16\pi G^2 M^2}{c^4} \right) \left( \frac{\hbar c^3}{8\pi G M} \right)^4$$
   $$P = \frac{\pi^2}{60 \hbar^3 c^2} \cdot \frac{16\pi G^2 M^2}{c^4} \cdot \frac{\hbar^4 c^{12}}{4096 \pi^4 G^4 M^4} = \frac{\hbar c^6}{15360 \pi G^2 M^2} \tag{*}$$

2. **温度随时间的变化规律**：
   因为 $E = M c^2$，由于霍金辐射引起的能量损失满足：
   $$\frac{dE}{dt} = c^2 \frac{dM}{dt} = -P = -\frac{\hbar c^6}{15360 \pi G^2 M^2}$$
   整理可得质量随时间变化的微分方程：
   $$M^2 dM = -\frac{\hbar c^4}{15360 \pi G^2} dt$$
   设 $t=0$ 时黑洞的初始质量为 $M_0$，积分可得：
   $$\int_{M_0}^{M(t)} M^2 dM = -\frac{\hbar c^4}{15360 \pi G^2} \int_0^t dt'$$
   $$\frac{M(t)^3 - M_0^3}{3} = -\frac{\hbar c^4}{15360 \pi G^2} t$$
   $$M(t) = M_0 \left( 1 - \frac{t}{\tau} \right)^{1/3}$$
   其中常数 $\tau = \frac{5120 \pi G^2 M_0^3}{\hbar c^4}$。
   由于温度与质量成反比（$T \propto 1/M$），因此温度随时间演化的规律为：
   $$T(t) = T_0 \left( 1 - \frac{t}{\tau} \right)^{-1/3}$$
   （其中 $T_0 = \frac{\hbar c^3}{8\pi G M_0}$ 为初始霍金温度）。

3. **有限寿命的确定**：
   从上式可以看出，当时间 $t \to \tau$ 时，黑洞质量 $M(t) \to 0$，温度 $T(t) \to \infty$。这表明**黑洞确实具有有限的寿命**，其完全蒸发的寿命（Lifetime）为：
   $$\tau = \frac{5120 \pi G^2 M_0^3}{\hbar c^4}$$

4. **太阳质量黑洞寿命的估算与宇宙年龄的比较**：
   - 太阳质量：$M_{\odot} \approx 1.989 \times 10^{30} \text{ kg}$
   - 万有引力常数：$G \approx 6.674 \times 10^{-11} \text{ m}^3\text{kg}^{-1}\text{s}^{-2}$
   - 约化普朗克常数：$\hbar \approx 1.054 \times 10^{-34} \text{ J}\cdot\text{s}$
   - 光速：$c \approx 2.998 \times 10^8 \text{ m/s}$

   代入计算太阳质量黑洞寿命：
   $$\tau \approx \frac{5120 \times 3.14159 \times (6.674 \times 10^{-11})^2 \times (1.989 \times 10^{30})^3}{(1.054 \times 10^{-34}) \times (2.998 \times 10^8)^4} \approx 6.6 \times 10^{74} \text{ 秒}$$
   
   将秒数转换为年（$1 \text{ 年} \approx 3.156 \times 10^7 \text{ 秒}$）：
   $$\tau \approx 2.1 \times 10^{67} \text{ 年} \tag{**}$$

   **与宇宙年龄进行比较**：
   - 当前宇宙的年龄（自大爆炸以来）约为 $t_{\text{univ}} \approx 1.38 \times 10^{10} \text{ 年}$。
   - 太阳质量黑洞的蒸发寿命是宇宙目前年龄的：
     $$\frac{\tau}{t_{\text{univ}}} \approx \frac{2.1 \times 10^{67}}{1.38 \times 10^{10}} \approx 1.5 \times 10^{57} \text{ 倍}$$

   **结论**：太阳质量黑洞通过纯霍金辐射蒸发完需要约 $2 \times 10^{67}$ 年的时间。这个寿命难以想象地漫长，比我们当前宇宙的总寿命还要大 $10^{57}$ 个数量级。这意味着在当下的宇宙演化阶段，恒星级黑洞在热力学尺度上是非常稳定的。