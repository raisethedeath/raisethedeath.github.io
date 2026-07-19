### Run-and-Tumble (RT) 粒子的运动分析 —— 特别聚焦方向随机化速率 $\lambda$

Run-and-tumble 运动是许多周毛菌（如大肠杆菌 *E. coli*）在液体环境中典型的游动模式。细菌通过调节鞭毛马达的转向来实现“直线巡游 (run)”与“原地翻滚 (tumble)”的交替。我们将其抽象为 **RT 粒子**，其核心特征是一个以恒定速率发生的**方向随机化事件**，该速率正是 $\lambda$。

---

#### 1. 运动学描述

设细菌在 $d$ 维空间中运动，位置为 $\mathbf{r}(t)$，其前进方向单位矢量为 $\mathbf{e}(t)$。  
- **Run 阶段**：粒子以恒定速率 $v_0$ 沿 $\mathbf{e}(t)$ 作直线运动  
  $$
  \frac{d\mathbf{r}}{dt} = v_0 \mathbf{e}(t).
  $$
  在理想 RT 模型中，run 期间方向保持不变（$d\mathbf{e}/dt = 0$）。  
- **Tumble 阶段**：粒子突然停止前进，在原地快速旋转，选择一个新方向 $\mathbf{e}'$。tumble 本身的时间极短（约 $0.1$ s，远小于 run 时间 $\sim 1$ s），因此通常被建模为**瞬时事件**。

#### 2. 方向随机化速率 $\lambda$ 的定义

$\lambda$ 是**tumble 事件发生的概率速率**（单位：时间$^{-1}$）。其严格数学含义由运行时间分布刻画：

- **Run 持续时间 $T$** 是一个随机变量。在时间区间 $[t, t+dt)$ 内发生 tumble 的概率仅取决于 $\lambda$，与已经运行了多久无关（无记忆性）。这导致 $T$ 服从指数分布：
  $$
  P(T) = \lambda e^{-\lambda T}, \quad \langle T \rangle = \frac{1}{\lambda}.
  $$
  因此 $\lambda$ 是**单位时间内细菌“决定”随机化其 heading 的几率**。也可以理解为 Poisson 过程的强度：在时间 $\tau$ 内发生 $n$ 次 tumble 的概率为 $\frac{(\lambda \tau)^n}{n!}e^{-\lambda \tau}$。

#### 3. 方向随机化机制与有效随机化速率

Tumble 之后的新方向 $\mathbf{e}'$ 并非总是完全随机。对于 *E. coli*，新方向与旧方向间存在一定相关性，平均转角约 $68^\circ$，其方向余弦平均 $\alpha = \langle \mathbf{e} \cdot \mathbf{e}' \rangle \approx 0.33$。一般可设转角分布具有平均余弦 $\alpha$ ($|\alpha| < 1$)。

##### 方向自相关函数
设 $t=0$ 时刻方向为 $\mathbf{e}_0$。在无 tumble 发生时，方向保持。每次 tumble 以速率 $\lambda$ 发生，并以因子 $\alpha$ 保留部分投影。于是方向自相关函数满足衰减方程：
$$
\frac{d}{dt}\langle \mathbf{e}(t)\cdot \mathbf{e}_0 \rangle = -\lambda(1-\alpha)\langle \mathbf{e}(t)\cdot \mathbf{e}_0 \rangle,
$$
解得
$$
\langle \mathbf{e}(t)\cdot \mathbf{e}_0 \rangle = e^{-\lambda(1-\alpha)t}.
$$
我们称 $\lambda_{\text{eff}} = \lambda(1-\alpha)$ 为**有效方向随机化速率**。  
若 tumble 后方向完全随机（$\alpha=0$，即均匀分布），则 $\lambda_{\text{eff}} = \lambda$。若 tumble 几乎不改变方向（$\alpha \to 1$），则一次 tumble 对方向记忆的抹除作用很弱，有效随机化慢于 $\lambda$。

#### 4. 速度自关联与扩散系数

速度 $\mathbf{v}(t) = v_0 \mathbf{e}(t)$，其自相关函数为
$$
\langle \mathbf{v}(t) \cdot \mathbf{v}(0) \rangle = v_0^2 \langle \mathbf{e}(t)\cdot \mathbf{e}_0 \rangle = v_0^2 e^{-\lambda_{\text{eff}} t}.
$$
利用 Green-Kubo 关系，扩散系数
$$
D = \frac{1}{d} \int_0^\infty \langle \mathbf{v}(t) \cdot \mathbf{v}(0) \rangle dt = \frac{v_0^2}{d} \int_0^\infty e^{-\lambda_{\text{eff}} t} dt = \frac{v_0^2}{d\,\lambda_{\text{eff}}}.
$$
代入有效速率：
$$
D = \frac{v_0^2}{d\,\lambda(1-\alpha)}.
$$
- 对于三维完全随机 tumble（$\alpha=0$）：$D = \dfrac{v_0^2}{3\lambda}$。  
- 对于二维：$D = \dfrac{v_0^2}{2\lambda}$。  
这清晰地表明：**$\lambda$ 越大，细菌方向记忆丧失越快，扩散越慢**。

##### 均方位移 (MSD)
直接从速度相关积分可得经典的 Ornstein-Uhlenbeck 形式的 MSD：
$$
\langle [\mathbf{r}(t) - \mathbf{r}(0)]^2 \rangle = 2d D \left[ t - \frac{1}{\lambda_{\text{eff}}}\left(1 - e^{-\lambda_{\text{eff}} t}\right) \right].
$$
- 短时 $t \ll \lambda_{\text{eff}}^{-1}$：方向几乎不变，弹道运动 $\langle \Delta r^2 \rangle \approx v_0^2 t^2$。  
- 长时 $t \gg \lambda_{\text{eff}}^{-1}$：正常扩散 $\langle \Delta r^2 \rangle \approx 2d D t$。  
转变时间尺度由 $\lambda_{\text{eff}}^{-1}$ 决定，即 $\lambda$ 直接控制了从弹道到扩散的过渡。

#### 5. 考虑连续旋转扩散的拓展模型

真实细菌在 run 阶段还受到布朗旋转扩散（旋转扩散系数 $D_r$）影响，方向会缓慢漂移。此时即使在两次 tumble 之间，方向自相关也会衰减。方向相关函数变为
$$
\langle \mathbf{e}(t)\cdot \mathbf{e}_0 \rangle = \exp\!\big[-\lambda(1-\alpha)t - (d-1)D_r t\big],
$$
此时总有效随机化速率为 $\lambda(1-\alpha) + (d-1)D_r$。  
但如果问题专门指 **“the rate $\lambda$ for the bacteria to randomize its heading”**，通常指的就是 tumble 事件本身的固有速率，即 Poisson 过程的参数 $\lambda$，而非包含 $D_r$ 的总和。

#### 6. 从实验轨迹中测定 $\lambda$

实验中，通过跟踪单个细菌的二维或三维轨迹，可进行方向变化的时序分析：
1. **识别 tumble 事件**：利用速度大小变化或角速度阈值。Run 阶段速度恒定且方向平滑；tumble 对应速度骤降且角度突变。
2. **提取运行时间**：统计连续 run 的时长，绘制直方图，拟合指数分布得到速率常数 $\lambda$。
3. **方向相关函数拟合**：直接计算 $\langle \cos \theta(\tau) \rangle$ 或 $\langle \mathbf{e}(t+\tau)\cdot \mathbf{e}(t) \rangle$，按 $\exp(-\lambda_{\text{eff}}\tau)$ 拟合，结合平均转角估计 $\alpha$，可反推出 $\lambda = \lambda_{\text{eff}}/(1-\alpha)$。

*E. coli* 的典型值：$\lambda \approx 1\ \text{s}^{-1}$（run 约 1 秒），$v_0 \approx 20-30\ \mu\text{m/s}$，$\alpha \approx 0.33$，得到有效扩散系数约 $200-400\ \mu\text{m}^2/\text{s}$。

#### 7. 总结

在 Run-and-Tumble 运动中，$\lambda$ 是**决定细菌方向记忆丧失速率的最基本内禀参数**。它刻画了 Poisson 型 tumble 事件的发生频率；每一次 tumble 都部分或完全随机化前进方向。$\lambda$ 与平均转角余弦 $\alpha$ 共同定义了有效随机化速率 $\lambda_{\text{eff}} = \lambda(1-\alpha)$，从而直接决定了速度自相关时间和宏观扩散系数。因此，$\lambda$ 不仅是 RT 粒子随机行走的“开关”频率，也是定量联结微观运动模式与宏观输运性质的关键桥梁。