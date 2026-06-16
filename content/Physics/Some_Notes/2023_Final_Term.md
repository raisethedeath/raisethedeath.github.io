# 电动力学期末考试

（总分120分，超过满分100分，按100分计算总分）

1. 判断题（18分）

[1]. 带电粒子如果没有加速度，就不可能辐射；

[2]. 宇航员升空时看到的天空由白变黑，原因是如同太阳落山时，太阳入射角逐渐变大；

[3]. 康普顿散射实验揭示了光的波动性；

[4]. 自然光以布儒斯特角入射的透射光是 $100\%$ 线偏振的；

[5]. 粒子的静质量是洛伦兹不变量；

[6]. 如果A事件与B事件是类时的，B事件与C事件是类时的，那么A事件与C事件也是类时的。

2. 尺寸为 $0.6\mathrm{cm}\times 0.8\mathrm{cm}$ 的矩形波导中，如果驱动频率是 $3\times 10^{10}\mathrm{Hz}$ ，什么模式的波将传播？(12分)

3. 粒子加速器中，粒子运动的半径不变，但速度增加，因此要求粒子加速器的磁场不断增加。粒子轨道上的磁场为B，假设粒子轨道包围的磁场均匀都为B，以此算出的磁通量记为 $\Phi_0$ 。请证明粒子轨道实际包围的磁通量 $\Phi = 2\Phi_0$ (15分)

4. 在氢原子的玻尔理论中，电子在基态作圆周运动，它被质子通过库仑作用束缚在轨道上。根据经典的电磁理论，电子会辐射，所以会以螺旋线运动到原子核。在 $\nu < < c$ 情况下，计算玻尔原子的寿命。（20分）

5. $\mu$ 子的衰变规律为 $\frac{N}{N_0} = e^{-\frac{t}{\tau}}$ ，其固有寿命为2.2微秒。现在有一束 $\mu$ 子以 $2.8\times 10^{5}\mathrm{km / s}$ 的速度从 $2.8\mathrm{km}$ 的高度射下，考虑相对论效应，计算到达地面的 $\mu$ 子占比；如果不考虑相对论，同样计算到达地面的 $\mu$ 子占比。（15分）

6. 粒子质量为m，在均匀电场E中，有初始速度v，速度方向与电场方向垂直。
(1) 计算粒子的位置、速度随时间变化的关系式。(2) 消去时间，计算出粒子的轨迹，请描述一下粒子在“短”时间与“长”时间下的轨迹。（这里“短”时间是指什么？“长”时间又指什么？）（20分）

7. 粒子具有加速度 $\vec{a}$ ，在瞬时静止系S中四维加速度矢量为 $\vec{a}$ ，请证明 $(\vec{a})^{\prime \prime}$ 是不变量，写出 $\vec{a}$ 与a的关系式，并以此推出相对论的李纳辐射公式。（20分）

## Solution
这是一份涉及经典电动力学、狭义相对论、光学和量子物理基础的综合物理试卷解答。以下是每道题的详细解答过程：

---

### 1. 判断题（18分，每题3分）

**[1]. 答案：正确（T）**
**理由：** 根据经典电动力学（拉莫尔公式 $P \propto a^2$），带电粒子必须要有加速度才会产生电磁辐射。静止或匀速直线运动的电荷只产生恒定电场或稳恒磁场，不会辐射电磁波。（注：切伦科夫辐射等介质中超光速效应不属于真空一般讨论范畴，此题通常考查基本原理）。

**[2]. 答案：错误（F）**
**理由：** 宇航员升空时天空变黑的原因是随着海拔升高，大气层变得极其稀薄，**瑞利散射**减弱直至消失，没有大气散射太阳光，天空就会呈现宇宙的底色（黑色）。这与太阳落山时（大气路径变长导致短波长蓝光被散射殆尽，剩下红光）的机制截然不同，与“入射角变大”无关。

**[3]. 答案：错误（F）**
**理由：** 康普顿散射实验中，X射线光子与电子发生弹性碰撞，光子表现出动量（$p=h/\lambda$），该实验强有力地证实了光的**粒子性**（光子模型），而不是波动性。

**[4]. 答案：错误（F）**
**理由：** 当自然光以布儒斯特角入射时，**反射光**是 $100\%$ 的线偏振光（且振动方向垂直于入射面，即 s 偏振）。但是**透射光**是部分偏振光（p 偏振光完全透过，s 偏振光部分透过）。

**[5]. 答案：正确（T）**
**理由：** 粒子的静质量 $m_0$（或称不变质量）是在粒子静止参考系中测量的质量，根据相对论四维动量平方 $p_\mu p^\mu = -m_0^2 c^2$，它是一个标量，在所有洛伦兹惯性系中保持不变。

**[6]. 答案：错误（F）**
**理由：** 类时区分为“绝对未来”和“绝对过去”。如果事件 B 在事件 A 的未来光锥内（类时），而事件 C 在事件 B 的**过去**光锥内（类时），C 完全有可能落在 A 的光锥之外，从而导致 A 与 C 之间是**类空**的。（只有当限定“A到B、B到C都是未来指向的类时”时，传递性才成立）。

---

### 2. 矩形波导模式（12分）

**解答：**
矩形波导的尺寸为 $a = 0.8\,\mathrm{cm} = 0.008\,\mathrm{m}$， $b = 0.6\,\mathrm{cm} = 0.006\,\mathrm{m}$。
驱动电磁波频率 $\nu = 3 \times 10^{10}\,\mathrm{Hz} = 30\,\mathrm{GHz}$。
矩形波导中 $TE_{mn}$ 和 $TM_{mn}$ 模式的截止频率公式为：
$$f_{mn} = \frac{c}{2} \sqrt{\left(\frac{m}{a}\right)^2 + \left(\frac{n}{b}\right)^2}$$
我们计算最低的几个模式的截止频率：
1. **$TE_{10}$ 模（主模）：**
   $$f_{10} = \frac{c}{2a} = \frac{3 \times 10^8}{2 \times 0.008} = 1.875 \times 10^{10}\,\mathrm{Hz} = 18.75\,\mathrm{GHz}$$
2. **$TE_{01}$ 模：**
   $$f_{01} = \frac{c}{2b} = \frac{3 \times 10^8}{2 \times 0.006} = 2.5 \times 10^{10}\,\mathrm{Hz} = 25.0\,\mathrm{GHz}$$
3. **$TE_{11}$ 和 $TM_{11}$ 模：**
   $$f_{11} = \frac{c}{2} \sqrt{\frac{1}{0.008^2} + \frac{1}{0.006^2}} = \frac{3 \times 10^8}{2} \sqrt{15625 + 27778} \approx 3.125 \times 10^{10}\,\mathrm{Hz} = 31.25\,\mathrm{GHz}$$
4. **$TE_{20}$ 模：**
   $$f_{20} = \frac{c}{a} = \frac{3 \times 10^8}{0.008} = 3.75 \times 10^{10}\,\mathrm{Hz} = 37.5\,\mathrm{GHz}$$

要使某模式能够在波导中传播，驱动频率必须大于该模式的截止频率（即 $\nu > f_{mn}$）。
因为 $f_{10} < \nu$ 且 $f_{01} < \nu$，而 $f_{11}$ 和 $f_{20}$ 均大于 $\nu$。
**结论：在波导中将有 $TE_{10}$ 模式和 $TE_{01}$ 模式的波传播**（注：矩形波导不存在 $TM_{10}$ 和 $TM_{01}$ 模式）。

---

### 3. 电子感应加速器（Betatron）条件证明（15分）

**证明：**
设粒子的电荷为 $e$，粒子在半径为 $R$ 的固定轨道上作圆周运动。
为了维持圆周运动，洛伦兹力提供向心力（或根据动量变化率），有：
$$p = eBR$$
（其中 $p$ 为粒子动量，$B$ 为轨道处的磁感应强度）。因为轨道半径 $R$ 不变，动量对时间求导得：
$$\frac{dp}{dt} = eR \frac{dB}{dt} \quad \text{--- (式1)}$$

粒子速度增加是因为轨道包围的磁通量 $\Phi$ 发生变化，产生了感生电动势。由法拉第电磁感应定律，感生电动势 $\mathcal{E}$ 为：
$$\mathcal{E} = \oint \vec{E} \cdot d\vec{l} = 2\pi R E = \frac{d\Phi}{dt}$$
感生电场 $E = \frac{1}{2\pi R} \frac{d\Phi}{dt}$。
此电场对粒子施加力，改变其动量（牛顿第二定律/相对论动量定理）：
$$\frac{dp}{dt} = eE = \frac{e}{2\pi R} \frac{d\Phi}{dt} \quad \text{--- (式2)}$$

比较(式1)和(式2)：
$$eR \frac{dB}{dt} = \frac{e}{2\pi R} \frac{d\Phi}{dt}$$
化简得到：
$$\frac{d\Phi}{dt} = 2\pi R^2 \frac{dB}{dt}$$
假设从静止开始加速，初始磁场和磁通均为0，积分得：
$$\Phi = 2\pi R^2 B$$
题目定义假设内部磁场均匀全为 $B$ 时算出的磁通为 $\Phi_0 = \pi R^2 B$。
因此代入可得：
$$\Phi = 2 \Phi_0$$
**证明完毕。这被称为 Betatron 1:2 磁通量条件。**

---

### 4. 玻尔氢原子的经典辐射寿命计算（20分）

**解答：**
电子在质子的库仑力作用下作半径为 $r$ 的圆周运动。
向心加速度由库仑力提供：$a = \frac{1}{4\pi\varepsilon_0} \frac{e^2}{m r^2}$
根据拉莫尔辐射公式，非相对论（$v \ll c$）运动带电粒子的辐射功率为：
$$P = \frac{e^2 a^2}{6\pi\varepsilon_0 c^3}$$
代入加速度 $a$：
$$P = \frac{e^2}{6\pi\varepsilon_0 c^3} \left( \frac{e^2}{4\pi\varepsilon_0 m r^2} \right)^2 = \frac{e^6}{96\pi^3 \varepsilon_0^3 m^2 c^3 r^4}$$

系统的总能量 $E = K + U = \frac{1}{2} m v^2 - \frac{1}{4\pi\varepsilon_0}\frac{e^2}{r}$。由圆周运动 $\frac{mv^2}{r} = \frac{e^2}{4\pi\varepsilon_0 r^2}$ 知 $K = -\frac{1}{2}U$，故总能量为：
$$E = -\frac{e^2}{8\pi\varepsilon_0 r}$$
由于辐射损失能量，系统能量对时间求导：
$$\frac{dE}{dt} = \frac{e^2}{8\pi\varepsilon_0 r^2} \frac{dr}{dt}$$
由能量守恒，辐射功率 $P = -\frac{dE}{dt}$：
$$\frac{e^2}{8\pi\varepsilon_0 r^2} \frac{dr}{dt} = - \frac{e^6}{96\pi^3 \varepsilon_0^3 m^2 c^3 r^4}$$
化简得到半径的衰减速率：
$$\frac{dr}{dt} = - \frac{e^4}{12\pi^2 \varepsilon_0^2 m^2 c^3} \frac{1}{r^2}$$
将其分离变量并积分。设初始半径为玻尔半径 $a_0 = 0.529 \times 10^{-10}\,\mathrm{m}$，最终落入核中 $r=0$，经历时间为 $\tau$：
$$\int_{a_0}^0 r^2 dr = - \frac{e^4}{12\pi^2 \varepsilon_0^2 m^2 c^3} \int_0^\tau dt$$
$$-\frac{a_0^3}{3} = - \frac{e^4}{12\pi^2 \varepsilon_0^2 m^2 c^3} \tau$$
解得寿命 $\tau$ 为：
$$\tau = \frac{4\pi^2 \varepsilon_0^2 m^2 c^3 a_0^3}{e^4}$$
代入常数值（$m \approx 9.11 \times 10^{-31}\,\mathrm{kg}$, $c=3\times 10^8\,\mathrm{m/s}$, $e=1.6\times 10^{-19}\,\mathrm{C}$, $1/(4\pi\varepsilon_0) = 9\times 10^9$ 则 $\varepsilon_0 = 8.85\times 10^{-12}$）：
$$\tau \approx \frac{4 \times \pi^2 \times (8.85 \times 10^{-12})^2 \times (9.11 \times 10^{-31})^2 \times (3 \times 10^8)^3 \times (0.529 \times 10^{-10})^3}{(1.6 \times 10^{-19})^4} \approx 1.56 \times 10^{-11} \,\mathrm{s}$$
**玻尔原子的经典寿命约为 $1.56 \times 10^{-11}$ 秒（即15皮秒左右）。**

---

### 5. $\mu$ 子的衰变（考虑/不考虑相对论效应）（15分）

**解答：**
已知参数：速度 $v = 2.8 \times 10^5\,\mathrm{km/s} = 2.8 \times 10^8\,\mathrm{m/s}$。下落高度 $d = 2.8\,\mathrm{km} = 2800\,\mathrm{m}$。
光速 $c = 3 \times 10^8\,\mathrm{m/s}$。
地面参考系中，$\mu$ 子下落所需的时间为：
$$t_{\text{earth}} = \frac{d}{v} = \frac{2800}{2.8 \times 10^8} = 10^{-5}\,\mathrm{s} = 10\,\mathrm{\mu s}$$

**(1) 考虑相对论效应：**
$\mu$ 子的速度与光速之比 $\beta = \frac{v}{c} = \frac{2.8}{3.0} = \frac{14}{15}$。
洛伦兹因子 $\gamma = \frac{1}{\sqrt{1 - \beta^2}} = \frac{1}{\sqrt{1 - (14/15)^2}} = \frac{15}{\sqrt{225 - 196}} = \frac{15}{\sqrt{29}} \approx 2.785$。
根据相对论钟慢效应，$\mu$ 子自身参考系（固有时）流逝的时间 $t'$ 为：
$$t' = \frac{t_{\text{earth}}}{\gamma} = \frac{10\,\mathrm{\mu s}}{2.785} \approx 3.59\,\mathrm{\mu s}$$
利用衰变公式计算到达地面的占比：
$$\frac{N}{N_0} = e^{-\frac{t'}{\tau}} = e^{-\frac{3.59}{2.2}} = e^{-1.632} \approx 0.1955$$
**考虑相对论效应，到达地面的 $\mu$ 子占比约为 $19.6\%$。**

**(2) 不考虑相对论效应：**
此时认为 $\mu$ 子经历的时间就是地面测量到的时间 $t_{\text{earth}} = 10\,\mathrm{\mu s}$。
$$\frac{N}{N_0} = e^{-\frac{t_{\text{earth}}}{\tau}} = e^{-\frac{10}{2.2}} = e^{-4.545} \approx 0.0106$$
**如果不考虑相对论，到达地面的 $\mu$ 子占比仅为 $1.06\%$。**（实际上由于大气层测出的通量远大于此，强有力地证实了相对论的时间膨胀。）

---

### 6. 相对论粒子在均匀电场中的运动（20分）

**解答：**
设电场 $\vec{E}$ 沿 $y$ 轴正方向：$\vec{E} = E\hat{y}$。
粒子初始动量沿 $x$ 轴正方向：$t=0$ 时，$\vec{v}(0) = v_0\hat{x}$，初始动量 $p_0 = \gamma_0 m v_0 = \frac{m v_0}{\sqrt{1-v_0^2/c^2}}$。
根据相对论动量定理 $\frac{d\vec{p}}{dt} = q\vec{E}$，积分得 $t$ 时刻的动量：
$$p_x(t) = p_0 \quad , \quad p_y(t) = qEt$$
粒子的总能量 $E_k$ 为 $E_k^2 = (mc^2)^2 + (\vec{p}c)^2 = (mc^2)^2 + p_0^2 c^2 + (qEt c)^2$。
设初始总能量 $\mathcal{E}_0 = \sqrt{(mc^2)^2 + p_0^2 c^2} = \gamma_0 m c^2$，则：
$$E_k(t) = \sqrt{\mathcal{E}_0^2 + (qEct)^2}$$

**(1) 位置与速度随时间的关系式：**
速度 $\vec{v} = \frac{\vec{p} c^2}{E_k}$：
$$v_x(t) = \frac{p_0 c^2}{\sqrt{\mathcal{E}_0^2 + (qEct)^2}} \quad , \quad v_y(t) = \frac{qEt c^2}{\sqrt{\mathcal{E}_0^2 + (qEct)^2}}$$
将速度对时间积分得到位置坐标（设从原点出发）：
$$x(t) = \int_0^t v_x dt = \int_0^t \frac{p_0 c^2 d\tau}{\sqrt{\mathcal{E}_0^2 + (qEc\tau)^2}} = \frac{p_0 c}{qE} \operatorname{arcsinh}\left( \frac{qEct}{\mathcal{E}_0} \right)$$
$$y(t) = \int_0^t v_y dt = \int_0^t \frac{qEc^2 \tau d\tau}{\sqrt{\mathcal{E}_0^2 + (qEc\tau)^2}} = \frac{\sqrt{\mathcal{E}_0^2 + (qEct)^2} - \mathcal{E}_0}{qE}$$

**(2) 粒子的轨迹方程及长短时间分析：**
从 $x(t)$ 的表达式反解出 $t$：
$$\frac{qEct}{\mathcal{E}_0} = \sinh\left( \frac{qE x}{p_0 c} \right)$$
将其代入 $y(t)$ 的方程：
$$y(x) = \frac{\mathcal{E}_0}{qE} \left( \sqrt{1 + \sinh^2\left(\frac{qE x}{p_0 c}\right)} - 1 \right) = \frac{\mathcal{E}_0}{qE} \left( \cosh\left(\frac{qE x}{p_0 c}\right) - 1 \right)$$
**这是一条悬链线（双曲余弦曲线）。**

**长、短时间的物理意义及轨迹分析：**
此处的时间参量尺度为 $\tau_0 = \frac{\mathcal{E}_0}{qEc}$。
*   **“短”时间（经典极限）：**
    指 $t \ll \tau_0$（或 $x$ 较小）的阶段。此时粒子速度改变不大，相对论效应不显著。
    此时 $\frac{qE x}{p_0 c} \ll 1$，利用泰勒展开 $\cosh(u) \approx 1 + \frac{u^2}{2}$：
    $$y \approx \frac{\mathcal{E}_0}{qE} \frac{1}{2} \left( \frac{qE x}{p_0 c} \right)^2 = \frac{qE \mathcal{E}_0}{2 p_0^2 c^2} x^2$$
    （代入 $p_0$ 和 $\mathcal{E}_0$，此即 $y = \frac{qE}{2 \gamma_0 m v_0^2} x^2$）。
    **描述：** 在“短”时间内，轨迹为一条**抛物线**，这与牛顿力学中恒力作用下的抛物运动一致（只是质量变为了相对论质量 $\gamma_0 m$）。
*   **“长”时间（极端相对论极限）：**
    指 $t \gg \tau_0$ 的阶段。此时粒子在电场方向被极大地加速，动能极高，速度极度逼近光速。
    此时 $\frac{qE x}{p_0 c} \gg 1$，利用 $\cosh(u) \approx \frac{1}{2} e^u$：
    $$y \approx \frac{\mathcal{E}_0}{2qE} \exp\left(\frac{qE x}{p_0 c}\right)$$
    **描述：** 在“长”时间内，轨迹逐渐变为**指数曲线**。粒子在 $x$ 方向的速度 $v_x \to 0$（由于质量膨胀），$y$ 方向速度 $v_y \to c$，粒子几乎平行于电场线飞向无穷远。

---

### 7. 证明四维加速度不变性及推导李纳（Liénard）辐射公式（20分）

**解答：**
**(1) 四维加速度的定义及不变量证明**
四维速度 $U^\mu = (\gamma c, \gamma \vec{v})$。四维加速度定义为对其固有时 $\tau$ 求导：
$$A^\mu = \frac{dU^\mu}{d\tau} = \gamma \frac{d U^\mu}{dt}$$
已知 $\gamma = (1 - \frac{v^2}{c^2})^{-1/2}$，对时间求导得 $\frac{d\gamma}{dt} = \gamma^3 \frac{\vec{v}\cdot\vec{a}}{c^2}$，其中 $\vec{a} = \frac{d\vec{v}}{dt}$ 是实验室系下的普通三维加速度。
代入得四维加速度分量：
$$A^0 = \gamma \frac{d(\gamma c)}{dt} = \gamma^4 \frac{\vec{v}\cdot\vec{a}}{c}$$
$$\vec{A} = \gamma \frac{d(\gamma \vec{v})}{dt} = \gamma^2 \vec{a} + \gamma^4 \frac{\vec{v}\cdot\vec{a}}{c^2} \vec{v}$$
四维标量内积 $A_\mu A^\mu = -(A^0)^2 + |\vec{A}|^2$ 是**洛伦兹不变量**。
在瞬时静止系 $S'$ 中，$\vec{v}=0$，故 $\gamma=1$，$A'^0 = 0$，$\vec{A}' = \vec{a}'$（$\vec{a}'$ 是静止系内的加速度）。
所以 $(A'_\mu A'^\mu) = |\vec{a}'|^2$。
由于不变量性质，$A_\mu A^\mu = A'_\mu A'^\mu$，因此我们证明了四维加速度的平方就等于瞬时静止参考系中加速度的平方 $(a')^2$ 是不变量。

**(2) $\vec{a}'$ 与 $\vec{a}$ 的关系式**
利用在实验室系 $S$ 中 $A_\mu A^\mu$ 的表达式来求 $|\vec{a}'|^2$：
$$(a')^2 = A_\mu A^\mu = \left| \gamma^2 \vec{a} + \gamma^4 \frac{\vec{v}\cdot\vec{a}}{c^2} \vec{v} \right|^2 - \left( \gamma^4 \frac{\vec{v}\cdot\vec{a}}{c} \right)^2$$
展开平方（注意 $\vec{v} \cdot \vec{v} = v^2$）：
$$(a')^2 = \gamma^4 a^2 + 2\gamma^6 \frac{(\vec{v}\cdot\vec{a})^2}{c^2} + \gamma^8 \frac{(\vec{v}\cdot\vec{a})^2 v^2}{c^4} - \gamma^8 \frac{(\vec{v}\cdot\vec{a})^2}{c^2}$$
提取包含内积的后三项公因子 $\frac{(\vec{v}\cdot\vec{a})^2}{c^2}$，系数为：
$$2\gamma^6 + \gamma^8(\frac{v^2}{c^2} - 1) = 2\gamma^6 + \gamma^8(-\frac{1}{\gamma^2}) = \gamma^6$$
所以：
$$(a')^2 = \gamma^4 a^2 + \gamma^6 \frac{(\vec{v}\cdot\vec{a})^2}{c^2} = \gamma^6 \left( \frac{a^2}{\gamma^2} + \frac{(\vec{v}\cdot\vec{a})^2}{c^2} \right)$$
利用 $\frac{1}{\gamma^2} = 1 - \frac{v^2}{c^2}$，并将 $(\vec{v}\cdot\vec{a})$ 写出。通过矢量恒等式 $a^2 v^2 - (\vec{v}\cdot\vec{a})^2 = (\vec{v}\times\vec{a})^2$，化简得：
$$(a')^2 = \gamma^6 \left( a^2 - \frac{a^2 v^2}{c^2} + \frac{(\vec{v}\cdot\vec{a})^2}{c^2} \right) = \gamma^6 \left( a^2 - \frac{(\vec{v}\times\vec{a})^2}{c^2} \right)$$
**此即静止系加速度 $a'$ 与实验室系加速度 $\vec{a}$、速度 $\vec{v}$ 的关系式。**

**(3) 推出李纳辐射公式**
在粒子的瞬时静止系 $S'$ 中，其运动是非相对论的（$v'=0$），因此可以安全地使用经典的拉莫尔辐射公式来计算其辐射功率 $P'$：
$$P' = \frac{q^2 (a')^2}{6\pi\varepsilon_0 c^3}$$
而在相对论中，带电粒子辐射的总功率（对全立体角积分）具有洛伦兹不变性，即实验室系观测到的总辐射功率 $P$ 等于静止系的总辐射功率 $P'$ ($P = P'$，这是因为辐射能量 $dE$ 与时间 $dt$ 在洛伦兹变换中具有相同的时间膨胀因子 $\gamma$，导致 $dE/dt = dE'/dt'$）。
将上面求得的 $(a')^2$ 的关系式代入：
$$P = P' = \frac{q^2}{6\pi\varepsilon_0 c^3} \gamma^6 \left( a^2 - \frac{|\vec{v}\times\vec{a}|^2}{c^2} \right)$$
此式即为任意速度下带电粒子辐射的**李纳公式（Liénard's formula）**。推导完成。