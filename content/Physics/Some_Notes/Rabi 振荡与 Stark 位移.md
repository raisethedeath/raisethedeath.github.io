# Rabi 振荡与 Stark 位移 详细解析

Rabi 振荡和 Stark 位移是**原子物理、量子光学与量子信息科学中最基础、最核心的两个效应**，二者均源于外电磁场与原子（或量子二能级系统）的电偶极相互作用，但分别对应相互作用的**动力学相干演化**与**静态能级修正**两个不同极限，共同构成了量子态调控的物理基础。

---

## 一、Rabi 振荡（拉比振荡）

Rabi 振荡是**二能级量子系统在周期性外场驱动下，粒子数在两个能级之间发生周期性、相干性转移的现象**，由以色列物理学家伊西多・拉比（Isidor Rabi）于 1937 年提出，他也因此获得 1944 年诺贝尔物理学奖。

### 1. 物理本质与核心前提

#### 物理本质

外电磁场与原子的电偶极矩发生共振耦合，使两个能级之间产生==相干的量子跃迁==，粒子数在基态和激发态之间来回振荡，这是量子相干性最直接、最经典的体现。

#### 核心前提

1. **二能级近似**：系统可被简化为仅包含两个离散能级$|g\rangle$（基态，能量$E_g$）和$|e\rangle$（激发态，能量$E_e$），能级差$\hbar\omega_0=E_e-E_g$；
2. **偶极近似**：外场的波长$\lambda$远大于原子的尺度$a_0$（玻尔半径），因此原子所在位置的电场可近似为均匀电场；
3. **相干性**：系统的退相干时间远大于振荡周期，量子相干性得以保持。

### 2. 严格数学推导

#### （1）哈密顿量构建

无外场时，二能级系统的哈密顿量为：

$H_0 = E_g|g\rangle\langle g| + E_e|e\rangle\langle e| = \frac{\hbar\omega_0}{2}\sigma_z$

其中$\sigma_z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$为泡利 z 矩阵。

施加沿 x 方向的线偏振周期性外电场$E(t)=E_0\cos(\omega t)$，电偶极相互作用哈密顿量为：

$H_I = -\boldsymbol{d}\cdot\boldsymbol{E}(t) = -d_{eg}E_0\cos(\omega t)(|e\rangle\langle g|+|g\rangle\langle e|) = \hbar\Omega_0\cos(\omega t)\sigma_x$

其中$d_{eg}=\langle e|d|g\rangle$为电偶极跃迁矩阵元，$\Omega_0=\frac{d_{eg}E_0}{\hbar}$为**裸 Rabi 频率**，$\sigma_x=\begin{pmatrix}0&1\\1&0\end{pmatrix}$为泡利 x 矩阵。

总哈密顿量为：

$H(t) = H_0 + H_I = \frac{\hbar\omega_0}{2}\sigma_z + \hbar\Omega_0\cos(\omega t)\sigma_x$

#### （2）旋转波近似（RWA）

将$\cos(\omega t)=\frac{1}{2}(e^{i\omega t}+e^{-i\omega t})$代入哈密顿量，得到：

$H(t) = \frac{\hbar\omega_0}{2}\sigma_z + \frac{\hbar\Omega_0}{2}(e^{i\omega t}+e^{-i\omega t})\sigma_x$

为了消除含时项，我们切换到以频率$\omega$绕 z 轴旋转的相互作用绘景，幺正变换算符为$U(t)=e^{i\frac{\omega}{2}\sigma_z t}$。变换后的哈密顿量为：

$H_I(t) = U^\dagger(t)H(t)U(t) - i\hbar U^\dagger(t)\frac{dU(t)}{dt} = \frac{\hbar\Delta}{2}\sigma_z + \frac{\hbar\Omega_0}{2}(e^{i2\omega t}\sigma_+ + e^{-i2\omega t}\sigma_- + \sigma_+ + \sigma_-)$

其中$\Delta=\omega_0-\omega$为**失谐量**，$\sigma_+=|e\rangle\langle g|$、$\sigma_-=|g\rangle\langle e|$为升降算符。

当外场频率接近共振频率（$|\Delta|\ll\omega_0$）时，含高频项$e^{\pm i2\omega t}$的项随时间快速振荡，其时间平均为零，对系统演化的贡献可以忽略，这就是**旋转波近似**。近似后的哈密顿量变为不含时的有效哈密顿量：

$H_{\text{eff}} = \frac{\hbar\Delta}{2}\sigma_z + \frac{\hbar\Omega_0}{2}\sigma_x$

#### （3）Rabi 振荡的解

设$t=0$时系统处于基态$|\psi(0)\rangle=|g\rangle=\begin{pmatrix}0\\1\end{pmatrix}$，求解含时薛定谔方程$i\hbar\frac{d|\psi(t)\rangle}{dt}=H_{\text{eff}}|\psi(t)\rangle$，得到任意时刻的波函数：

$|\psi(t)\rangle = \cos\left(\frac{\Omega t}{2}\right)|g\rangle - i\sin\left(\frac{\Omega t}{2}\right)e^{-i\frac{\Delta t}{2}}|e\rangle$

其中$\Omega=\sqrt{\Omega_0^2+\Delta^2}$为**广义 Rabi 频率**。

粒子数随时间的变化为：

$P_e(t) = |\langle e|\psi(t)\rangle|^2 = \frac{\Omega_0^2}{\Omega^2}\sin^2\left(\frac{\Omega t}{2}\right)$

$P_g(t) = 1-P_e(t) = 1-\frac{\Omega_0^2}{\Omega^2}\sin^2\left(\frac{\Omega t}{2}\right)$

### 3. 核心特性与物理图像

#### （1）共振情况（$\Delta=0$）

当外场频率与原子能级差完全共振时，广义 Rabi 频率等于裸 Rabi 频率$\Omega=\Omega_0$，粒子数振荡为：

$P_e(t) = \sin^2\left(\frac{\Omega_0 t}{2}\right)$

- 振荡幅度达到最大值 1，即粒子可以完全从基态转移到激发态；
- 振荡周期$T_R=\frac{2\pi}{\Omega_0}$，与外场强度成反比：外场越强，Rabi 频率越高，振荡越快；
- 当$t=\frac{\pi}{\Omega_0}$时，$P_e=1$，系统完全处于激发态，对应**π 脉冲**；
- 当$t=\frac{\pi}{2\Omega_0}$时，$P_e=0.5$，系统处于基态和激发态的等权重叠加态，对应**π/2 脉冲**。

#### （2）失谐情况（$\Delta\neq0$）

当外场频率偏离共振时：

- 振荡幅度减小，最大值为$\frac{\Omega_0^2}{\Omega_0^2+\Delta^2}<1$，失谐越大，幅度越小；
- 振荡频率增加，$\Omega=\sqrt{\Omega_0^2+\Delta^2}>\Omega_0$；
- 当失谐远大于 Rabi 频率（$|\Delta|\gg\Omega_0$）时，振荡幅度趋近于零，粒子几乎不会发生跃迁，此时系统的主要效应是能级的移动，即**交流 Stark 位移**（见下文）。

### 4. 退相干与阻尼 Rabi 振荡

实际系统中不可避免地存在退相干（自发辐射、环境耦合等），导致 Rabi 振荡的幅度随时间指数衰减，称为**阻尼 Rabi 振荡**：

$P_e(t) = \frac{\Omega_0^2}{\Omega^2}\sin^2\left(\frac{\Omega t}{2}\right)e^{-\gamma t}$

其中$\gamma$为衰减常数，由退相干时间$T_2$决定。当$t\gg T_2$时，振荡完全消失，系统达到热平衡。

### 5. 实验验证与重要应用

- **实验验证**：1938 年拉比的原子束磁共振实验首次观测到 Rabi 振荡，精确测量了原子核的磁矩；
- **量子计算**：单量子比特的所有逻辑门（X 门、H 门等）都可以通过不同宽度和频率的 Rabi 脉冲实现，是量子计算的核心操作；
- **原子钟**：利用 Rabi 振荡的共振特性精确测量原子能级差，实现超高精度的时间频率标准；
- **量子光学**：用于研究原子与光场的相互作用、量子纠缠的产生与操控。

---

## 二、Stark 位移（斯塔克位移）

> [!NOTE] Comparison between Stark effect and Zeemann effect
> Zeemann效应是磁场下能级的分裂，Stark效应则是电场的影响
 
Stark 位移是**原子或分子在外加电场中，能级发生移动和分裂的现象**，由德国物理学家约翰尼斯・斯塔克（Johannes Stark）于 1913 年发现，他也因此获得 1919 年诺贝尔物理学奖。

### 1. 物理本质与分类

#### 物理本质

外电场与原子的电偶极矩相互作用，导致原子的能级结构发生改变。根据能级移动与电场强度的依赖关系，可分为两类：

- **线性 Stark 效应**：能级移动与电场强度成正比，仅出现在具有固有电偶极矩的简并能级体系中；
- **二次 Stark 效应**：能级移动与电场强度的平方成正比，是绝大多数原子和分子的普遍效应。

### 2. 线性 Stark 效应（一阶 Stark 效应）

#### 适用条件

仅适用于**具有简并能级且存在非零电偶极矩阵元**的体系，最典型的例子是氢原子的$n=2$能级。

氢原子的$n=2$能级是四重简并的（$2s_{1/2}$和$2p_{1/2}$、$2p_{3/2}$，不考虑精细结构时简并）。施加外电场后，简并被解除，能级发生分裂，且移动与电场强度成正比。

#### 微扰论推导

外电场E沿 z 方向，微扰哈密顿量为：

$H' = -d_z E = e E z$

对于氢原子$n=2$的四个简并态$|200\rangle$（2s）、$|210\rangle$（2p_z）、$|211\rangle$（2p_x）、$|21-1\rangle$（2p_y），计算微扰矩阵元：

- 由于宇称守恒，对角矩阵元$\langle nlm|z|nlm\rangle=0$；
- 仅$\langle 200|z|210\rangle$和$\langle 210|z|200\rangle$非零，其值为$-3a_0$（$a_0$为玻尔半径）；
- 其他非对角矩阵元均为零。

因此，微扰矩阵在$\{|200\rangle,|210\rangle,|211\rangle,|21-1\rangle\}$基下为：

$H' = \begin{pmatrix}0&-3e a_0 E&0&0\\-3e a_0 E&0&0&0\\0&0&0&0\\0&0&0&0\end{pmatrix}$

对角化该矩阵，得到一阶微扰修正后的能级：

$E_1 = 3e a_0 E, \quad E_2 = -3e a_0 E, \quad E_3=E_4=0$

即原来四重简并的$n=2$能级分裂为三个能级，其中两个能级的移动与电场强度E成正比，这就是线性 Stark 效应。

### 3. 二次 Stark 效应（二阶 Stark 效应）

#### 适用条件

绝大多数原子和分子的基态是非简并的，且没有固有电偶极矩，因此一阶微扰修正为零，能级移动主要来自二阶微扰，与电场强度的平方成正比。

#### 微扰论推导

对于非简并能级$|n\rangle$，二阶微扰修正为：

$E_n^{(2)} = \sum_{k\neq n}\frac{|\langle n|H'|k\rangle|^2}{E_n-E_k} = \sum_{k\neq n}\frac{e^2 E^2 |\langle n|z|k\rangle|^2}{E_n-E_k}$

令$\alpha = -2\sum_{k\neq n}\frac{e^2 |\langle n|z|k\rangle|^2}{E_n-E_k}$为原子的**电极化率**，则能级移动可写为：

$\Delta E = -\frac{1}{2}\alpha E^2$

#### 物理意义

外电场诱导原子产生感应电偶极矩$d_{\text{ind}}=\alpha E$，感应偶极矩与外电场的相互作用能为$U=-\frac{1}{2}d_{\text{ind}}E=-\frac{1}{2}\alpha E^2$，这就是二次 Stark 位移的物理本质。

对于基态原子，$E_n<E_k$，因此$\alpha>0$，能级移动$\Delta E<0$，即外电场使原子能级降低。

### 4. 交流 Stark 效应（光位移）

当外场是周期性的交变电场（如激光场）时，原子能级也会发生移动，称为**交流 Stark 效应**或**光位移**，这是目前量子调控中最常用的技术之一。

#### 与 Rabi 振荡的内在联系

交流 Stark 效应与 Rabi 振荡源于同一个电偶极相互作用，是相互作用在**大失谐极限**下的表现。

在 Rabi 振荡的推导中，当失谐$|\Delta|\gg\Omega_0$时，粒子数振荡的幅度$\frac{\Omega_0^2}{\Delta^2}\ll1$，几乎可以忽略。此时，系统的有效哈密顿量可以近似为：

$H_{\text{eff}} \approx \frac{\hbar\Delta}{2}\sigma_z + \frac{\hbar\Omega_0^2}{4\Delta}\sigma_z = \frac{\hbar}{2}\left(\Delta+\frac{\Omega_0^2}{2\Delta}\right)\sigma_z$

这相当于两个能级的能量差发生了移动：

$\Delta\omega = \frac{\Omega_0^2}{2\Delta} = \frac{d_{eg}^2 E_0^2}{2\hbar^2\Delta}$

即基态和激发态的能级分别移动了：

$\Delta E_g = \frac{\hbar\Omega_0^2}{4\Delta}, \quad \Delta E_e = -\frac{\hbar\Omega_0^2}{4\Delta}$

这就是交流 Stark 位移，其大小与光强$I\propto E_0^2$成正比，与失谐$\Delta$成反比。

#### 重要特性

- 红失谐（$\Delta>0$，激光频率低于原子共振频率）：基态能级升高，激发态能级降低；
- 蓝失谐（$\Delta<0$，激光频率高于原子共振频率）：基态能级降低，激发态能级升高；
- 交流 Stark 位移是光晶格、光镊、量子比特频率调控的物理基础。

### 5. 实验验证与重要应用

- **实验验证**：1913 年斯塔克在氢原子光谱中观测到谱线的分裂和移动，证实了 Stark 效应的存在；
- **光谱学**：用于测量原子和分子的极化率、精细结构和超精细结构；
- **原子操控**：利用交流 Stark 效应构建光晶格，囚禁冷原子，实现量子模拟；
- **量子计算**：通过激光场的交流 Stark 效应调控量子比特的频率，实现比特之间的寻址和耦合；
- **光镊技术**：利用光场的梯度力（源于交流 Stark 位移的空间梯度）捕获和操控微小粒子。

---

## 三、Rabi 振荡与 Stark 位移的对比与内在联系

### 1. 核心区别

|特性|Rabi 振荡|Stark 位移|
|---|---|---|
|物理本质|外场驱动下的相干粒子数振荡|外场导致的能级移动和分裂|
|外场类型|周期性交变场（通常是共振或近共振）|静态电场或慢变交变场（通常是大失谐）|
|时间依赖性|含时动力学过程，粒子数随时间周期性变化|静态效应，能级移动不随时间变化|
|与外场强度的关系|Rabi 频率与外场强度成正比|线性 Stark 位移与 E 成正比，二次 / 交流 Stark 位移与 E² 成正比|
|量子相干性|完全依赖于量子相干性，退相干会导致振荡衰减|不依赖于相干性，即使系统退相干，能级移动仍然存在|

### 2. 内在联系

Rabi 振荡和 Stark 位移是**同一电偶极相互作用在不同参数区域的两种表现形式**：

- 当外场与原子共振（$\Delta\approx0$）时，相互作用的主要效应是 Rabi 振荡，能级移动可以忽略；
- 当外场与原子大失谐（$|\Delta|\gg\Omega_0$）时，相互作用的主要效应是 Stark 位移，粒子数振荡可以忽略；
- 当外场处于中间失谐区域时，两种效应同时存在，系统既会发生 Rabi 振荡，能级也会发生移动。

### 3. 联合应用场景

在实际的量子调控中，两种效应经常被联合使用：

- 利用大失谐激光的交流 Stark 效应构建光晶格，囚禁冷原子；
- 利用共振激光的 Rabi 振荡操控光晶格中原子的内部量子态；
- 利用 Stark 位移调节量子比特的频率，避免比特之间的串扰，同时利用 Rabi 振荡实现单比特门操作。