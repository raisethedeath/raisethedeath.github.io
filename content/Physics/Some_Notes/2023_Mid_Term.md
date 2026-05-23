这是一份涉及电磁学多个核心考点的经典习题。以下是全部 8 道题目的详细解答：

### 1. 含有点电荷的三种介质空间
**【分析与解答】**
这是一个具有球对称结构变体的空间问题。点电荷 $Q$ 位于中心，空间被划分为三个角区域（可以理解为沿方位角划分的三个扇形楔体空间），平面角分别为 $\alpha_1, \alpha_2, \alpha_3$（满足 $\alpha_1+\alpha_2+\alpha_3=4\pi$ 对应的立体角空间，若按题目“平面角”通常指在极轴投影下的夹角，满足 $\alpha_1+\alpha_2+\alpha_3=2\pi$，对应的立体角份额为 $2\alpha_i$）。
因为交界面均为径向平面，根据边界条件，界面上切向电场连续（$E_t$ 连续），而法向电位移连续（$D_n$ 连续）。假设电场呈严格的径向对称，即 $\vec{E} = E(r)\hat{r}$，则电场完全平行于界面，满足切向连续且法向无跃变的要求，此假设成立。

应用高斯定理，作一个半径为 $r$ 的球面：
$$ \oint \vec{D} \cdot d\vec{S} = \sum_{i=1}^3 D_i S_i = Q $$
其中，第 $i$ 种介质中的电位移 $\vec{D}_i = \varepsilon_i \vec{E}$，该介质在球面上的面积为 $S_i = \frac{\alpha_i}{2\pi} \times 4\pi r^2 = 2\alpha_i r^2$。
$$ \sum_{i=1}^3 \varepsilon_i E(r) (2\alpha_i r^2) = Q \implies E(r) = \frac{Q}{2 r^2 (\varepsilon_1\alpha_1 + \varepsilon_2\alpha_2 + \varepsilon_3\alpha_3)} $$
**电场强度**为：
$$ \vec{E} = \frac{Q}{2 (\varepsilon_1\alpha_1 + \varepsilon_2\alpha_2 + \varepsilon_3\alpha_3) r^2} \hat{r} $$

**极化电荷**：
介质 $i$ 的极化强度为 $\vec{P}_i = (\varepsilon_i - \varepsilon_0)\vec{E}$。
1. **体极化电荷密度**：$\rho_{pi} = -\nabla \cdot \vec{P}_i = 0$（因为 $\vec{P}_i \propto 1/r^2$）。
2. **界面面极化电荷**：由于 $\vec{P}_i$ 是径向的，与介质交界面（法向量为方位角方向）平行，故 $\sigma_p = \vec{P} \cdot \hat{n} = 0$。
3. **点电荷处的极化电荷**（等效点电荷）：
   $$ q_{pi} = \lim_{r \to 0} (- \vec{P}_i \cdot S_i \hat{r}) = - \frac{(\varepsilon_i - \varepsilon_0)\alpha_i Q}{\varepsilon_1\alpha_1 + \varepsilon_2\alpha_2 + \varepsilon_3\alpha_3} $$
   三个区域在原点产生的总极化电荷为 $q_p = \sum q_{pi} = -Q + \frac{2\pi\varepsilon_0 Q}{\varepsilon_1\alpha_1 + \varepsilon_2\alpha_2 + \varepsilon_3\alpha_3}$。

---

### 2. 共轴圆形电流线圈的相互作用
**【分析与解答】**
已知 $r_1 \ll r_2$ 且 $d \gg r_1$，因此可将线圈 1 视为**磁偶极子**。
线圈 1 的磁偶极矩大小为 $m_1 = I_1 \cdot \pi r_1^2$。
大线圈 2 在其轴线上距离圆心 $d$ 处产生的磁场为：
$$ B_2 = \frac{\mu_0 I_2 r_2^2}{2(r_2^2 + d^2)^{3/2}} $$
由于两线圈电流方向相反，磁偶极矩 $\vec{m}_1$ 的方向与 $\vec{B}_2$ 的方向相反（反平行）。

**相互作用能**（以机械势能 $U$ 计算）：
$$ U = -\vec{m}_1 \cdot \vec{B}_2 = m_1 B_2 = \frac{\mu_0 \pi I_1 I_2 r_1^2 r_2^2}{2(r_2^2 + d^2)^{3/2}} $$

**相互作用力**：
力表现为势能的负梯度（两电流反向，表现为斥力）：
$$ F_z = -\frac{\partial U}{\partial d} = - \frac{\partial}{\partial d}\left( \frac{\mu_0 \pi I_1 I_2 r_1^2 r_2^2}{2(r_2^2 + d^2)^{3/2}} \right) = \frac{3\mu_0 \pi I_1 I_2 r_1^2 r_2^2 d}{2(r_2^2 + d^2)^{5/2}} $$
力的符号为正，代表这是一个**排斥力**。

---

### 3. 旋转带电球的磁矩
**【分析与解答】**
**1) 表面带有均匀电荷（总电量 Q）：**
球面电荷面密度 $\sigma = \frac{Q}{4\pi R^2}$。在极角 $\theta$ 处取一宽度为 $R d\theta$ 的圆环，其带电量 $dq = \sigma 2\pi R \sin\theta R d\theta$。
旋转形成等效电流 $dI = \frac{dq}{T} = dq \frac{\omega}{2\pi} = \sigma \omega R^2 \sin\theta d\theta$。
该电流环的磁矩 $dm = dI \cdot \pi (R\sin\theta)^2 = \pi \sigma \omega R^4 \sin^3\theta d\theta$。
积分求总磁矩：
$$ m = \int_0^\pi \pi \sigma \omega R^4 \sin^3\theta d\theta = \pi \sigma \omega R^4 \cdot \frac{4}{3} = \frac{4}{3}\pi \left(\frac{Q}{4\pi R^2}\right) \omega R^4 = \frac{1}{3} Q R^2 \omega $$

**2) 球体带有均匀电荷（总电量 Q）：**
体电荷密度 $\rho = \frac{Q}{\frac{4}{3}\pi R^3}$。将球体看作由无数厚度为 $dr$ 的带电薄球壳组成。半径为 $r$ 的薄球壳带电量为 $dq = \rho 4\pi r^2 dr$。
利用表面带电的结果，该球壳的磁矩为 $dm = \frac{1}{3} dq r^2 \omega = \frac{4}{3}\pi \rho \omega r^4 dr$。
积分得总磁矩：
$$ m = \int_0^R \frac{4}{3}\pi \rho \omega r^4 dr = \frac{4}{3}\pi \rho \omega \frac{R^5}{5} = \frac{4\pi}{15} \left(\frac{Q}{\frac{4}{3}\pi R^3}\right) R^5 \omega = \frac{1}{5} Q R^2 \omega $$

---

### 4. 氢气等离子体中的德拜屏蔽
**【分析与解答】**
由题意，离子背景密度 $n_0$ 固定不变。放入正电荷 $Q$ 后产生电势 $\phi(r)$，由于电子温度为 $T_e$，电子密度将服从玻尔兹曼分布：
$$ n_e(r) = n_0 \exp\left(\frac{e\phi(r)}{k_B T_e}\right) $$
在空间 $r$ 处的净电荷密度为：
$$ \rho(r) = e(n_0 - n_e) = e n_0 \left[ 1 - \exp\left(\frac{e\phi}{k_B T_e}\right) \right] $$
在弱电场假设下（$e\phi \ll k_B T_e$），泰勒展开取一级近似：$\rho(r) \approx - \frac{n_0 e^2}{k_B T_e} \phi$。
代入泊松方程 $\nabla^2 \phi = -\frac{\rho}{\varepsilon_0}$，得到：
$$ \nabla^2 \phi = \frac{n_0 e^2}{\varepsilon_0 k_B T_e} \phi = \frac{1}{\lambda_D^2} \phi $$
其中 $\lambda_D = \sqrt{\frac{\varepsilon_0 k_B T_e}{n_0 e^2}}$ 为**德拜长度**。
点电荷条件下的球对称解（汤川势）为：
$$ \phi(r) = \frac{Q}{4\pi \varepsilon_0 r} e^{-r/\lambda_D} $$
感受到的**电场强度**为 $\vec{E} = -\nabla \phi$：
$$ \vec{E}(r) = \frac{Q}{4\pi \varepsilon_0 r^2} e^{-r/\lambda_D} \left( 1 + \frac{r}{\lambda_D} \right) \hat{r} $$

---

### 5. RLC 电路充电计算
**【分析与解答】**
电路方程为：$L \frac{d^2q}{dt^2} + R \frac{dq}{dt} + \frac{q}{C} = E_0$。
初始条件：$q(0) = 0, i(0) = q'(0) = 0$。
特解为 $q_p = C E_0$。对应齐次方程的特征根为 $r_{1,2} = -\alpha \pm \sqrt{\alpha^2 - \omega_0^2}$，其中 $\alpha = \frac{R}{2L}, \omega_0 = \frac{1}{\sqrt{LC}}$。
*   **1) 欠阻尼 ($R < 2\sqrt{L/C}$)**：$\alpha < \omega_0$。令 $\omega_d = \sqrt{\omega_0^2 - \alpha^2}$。
    $$ q(t) = C E_0 \left[ 1 - e^{-\alpha t} \left( \cos \omega_d t + \frac{\alpha}{\omega_d} \sin \omega_d t \right) \right] $$
*   **2) 临界阻尼 ($R = 2\sqrt{L/C}$)**：$\alpha = \omega_0$，特征根为二重实根 $-\alpha$。
    $$ q(t) = C E_0 \left[ 1 - (1 + \alpha t) e^{-\alpha t} \right] $$
*   **3) 过阻尼 ($R > 2\sqrt{L/C}$)**：$\alpha > \omega_0$。令 $\beta = \sqrt{\alpha^2 - \omega_0^2}$，根为 $r_1=-\alpha+\beta, r_2=-\alpha-\beta$。
    $$ q(t) = C E_0 \left[ 1 - e^{-\alpha t} \left( \cosh \beta t + \frac{\alpha}{\beta} \sinh \beta t \right) \right] $$
*(注：对应的电流 $i(t) = dq/dt$ 在三种情况下亦可由此直接对 $t$ 求导获得)*。

---

### 6. 空心球壳带有不均匀电荷 $\sigma(\theta) = \sigma_0 + k\cos\theta$
**【分析与解答】**
此电荷分布可看作均匀电荷 $\sigma_0$（电单极部分）和偶极电荷 $k\cos\theta$（电偶极部分）的叠加。设球壳半径为 $R$。
由于满足拉普拉斯方程，电势可以按球谐函数展开。
1. **对于 $\sigma_0$ 分量**：
   球内：$V_{0, in} = \frac{\sigma_0 R}{\varepsilon_0}$；球外：$V_{0, out} = \frac{\sigma_0 R^2}{\varepsilon_0 r}$。
2. **对于 $k\cos\theta$ 分量**：
   假设 $V_{1, in} = A r \cos\theta \ (r \le R)$，$V_{1, out} = \frac{B}{r^2} \cos\theta \ (r \ge R)$。
   由 $r=R$ 处电势连续得：$A R = \frac{B}{R^2} \implies B = A R^3$。
   由表面法向电场跃变条件（高斯定理）：$-\frac{\partial V_{1,out}}{\partial r} \Big|_{R} + \frac{\partial V_{1,in}}{\partial r} \Big|_{R} = \frac{k\cos\theta}{\varepsilon_0}$。
   代入得：$\frac{2B}{R^3}\cos\theta + A\cos\theta = \frac{k\cos\theta}{\varepsilon_0} \implies 2A + A = 3A = \frac{k}{\varepsilon_0} \implies A = \frac{k}{3\varepsilon_0}$。
   
总电势为两者叠加：
*   **球内 ($r \le R$)**：$V(r, \theta) = \frac{\sigma_0 R}{\varepsilon_0} + \frac{k}{3\varepsilon_0} r \cos\theta$
*   **球外 ($r \ge R$)**：$V(r, \theta) = \frac{\sigma_0 R^2}{\varepsilon_0 r} + \frac{k R^3}{3\varepsilon_0 r^2} \cos\theta$

---

### 7. 两球系统的电偶极矩
**【分析与解答】**
从题目给出的位置矢量 $\vec{r}_1, \vec{r}_2$ 和图片中的实线暗示来看，这两个金属球**由极细导线连接（等势体）**。且因为 $d = |\vec{r}_1 - \vec{r}_2| \gg R_1, R_2$，可忽略它们之间的互感应，只考虑外场造成的电荷转移和自身极化。
初始不带电的两个球在均匀电场 $\vec{E}_0$ 中要保持电势相等，必有电荷从一球转移至另一球。设转移到球 1 的电荷为 $q$，球 2 为 $-q$。
电势平衡等式（外场电势 $V_{ext} = -\vec{E}_0 \cdot \vec{r}$）：
$$ \frac{q}{4\pi\varepsilon_0 R_1} - \vec{E}_0 \cdot \vec{r}_1 = \frac{-q}{4\pi\varepsilon_0 R_2} - \vec{E}_0 \cdot \vec{r}_2 $$
解得转移电荷：
$$ q = 4\pi\varepsilon_0 \frac{R_1 R_2}{R_1 + R_2} \vec{E}_0 \cdot (\vec{r}_1 - \vec{r}_2) $$
此正负电荷对形成的电偶极矩（转移偶极矩）为 $\vec{p}_{trans} = q \vec{r}_1 + (-q) \vec{r}_2 = q(\vec{r}_1 - \vec{r}_2)$。
此外，外场还分别使两球产生自身的感应极化偶极矩 $\vec{p}_1 = 4\pi\varepsilon_0 R_1^3 \vec{E}_0$ 和 $\vec{p}_2 = 4\pi\varepsilon_0 R_2^3 \vec{E}_0$。
总电偶极矩为：
$$ \vec{p} = 4\pi\varepsilon_0 \left[ (R_1^3 + R_2^3)\vec{E}_0 + \frac{R_1 R_2}{R_1 + R_2} \left(\vec{E}_0 \cdot (\vec{r}_1 - \vec{r}_2)\right) (\vec{r}_1 - \vec{r}_2) \right] $$
*(注：若题目原意是两球完全孤立绝缘未连接，则只需忽略上式中的后项即可，此时仅有 $4\pi\varepsilon_0 (R_1^3 + R_2^3)\vec{E}_0$)*。

---

### 8. 直角接地平板与圆突起的点电荷电势
**【分析与解答】**
*注：OCR中的“直接”为“直角”之误排。* 这是一道典型的**多重镜像法**题目。
建立空间直角坐标系，令两块无限大接地平板分别为 $x=0 (y \ge 0)$ 和 $y=0 (x \ge 0)$，它们构成一个 $90^\circ$ 的直角。原点处的圆突起可看作半径为 $a$ 的 $1/4$ 导体球（$x^2+y^2+z^2 \le a^2$）。
点电荷 $Q$ 位于角平分线上，设其到原点的距离为 $d$，坐标即为 $\vec{r}_0 = (\frac{d}{\sqrt{2}}, \frac{d}{\sqrt{2}}, 0)$。
为了使整个边界（$x=0, y=0$ 以及 $r=a$ 球面）电势均为 $0$，需要放置 7 个镜像电荷（一共 8 个电荷）：
1. 首先满足直角平面 $x=0, y=0$ 的零电势，需要位于同一圆周（半径 $d$）上的 4 个点电荷：
   $+Q$ 位于 $(\frac{d}{\sqrt{2}}, \frac{d}{\sqrt{2}}, 0)$
   $-Q$ 位于 $(-\frac{d}{\sqrt{2}}, \frac{d}{\sqrt{2}}, 0)$
   $+Q$ 位于 $(-\frac{d}{\sqrt{2}}, -\frac{d}{\sqrt{2}}, 0)$
   $-Q$ 位于 $(\frac{d}{\sqrt{2}}, -\frac{d}{\sqrt{2}}, 0)$
2. 接着，为了使球面 $r=a$ 的电势为 0，需要应用球面反演（反演距离 $d' = \frac{a^2}{d}$，镜像电荷电量 $Q' = \pm Q \frac{a}{d}$），为上述 4 个电荷分别放置在球面内的镜像电荷（共有 4 个）：
   $-Q\frac{a}{d}$ 位于 $(\frac{a^2}{d\sqrt{2}}, \frac{a^2}{d\sqrt{2}}, 0)$
   $+Q\frac{a}{d}$ 位于 $(-\frac{a^2}{d\sqrt{2}}, \frac{a^2}{d\sqrt{2}}, 0)$
   $-Q\frac{a}{d}$ 位于 $(-\frac{a^2}{d\sqrt{2}}, -\frac{a^2}{d\sqrt{2}}, 0)$
   $+Q\frac{a}{d}$ 位于 $(\frac{a^2}{d\sqrt{2}}, -\frac{a^2}{d\sqrt{2}}, 0)$

上述 8 个电荷完全对称分布，它们共同作用满足了所有的物理边界条件。因此，空间任意一点 $\vec{r} (x>0, y>0, r>a)$ 的总电势 $V(\vec{r})$ 就是这 8 个独立点电荷产生的电势的代数和（根据库仑定律依次相加即可）：
$$ V(\vec{r}) = \frac{1}{4\pi\varepsilon_0} \sum_{i=1}^{8} \frac{q_i}{|\vec{r} - \vec{r}_i|} $$