$$
\int_0^\pi \sin\theta d\theta\int^\infty_0dr \frac{r^4\sin^2\theta}{((r^2+d^2/4)^2-r^2d^2\cos^2\theta)^{\frac{3}{2}}}
$$
$$
\sigma=-\frac{\epsilon_0V_0}{2iR\pi}\ln(\frac{1-Re^{i\phi}}{1+Re^{i\phi}})
$$


使用麦克斯韦应力张量（Maxwell stress tensor）推导洛伦兹力公式，本质上是从**场物理学（经典场论）的动量守恒定律**出发，通过场的局域动量变化来推导出电磁场对物质的受力。

在经典电磁学中，通常是先有洛伦兹力经验公式，再推导出应力张量。但我们完全可以反过来，假设电磁场自身具有动量，且满足总动量守恒律，结合麦克斯韦方程组，从而**纯理论地推导**出电磁力（洛伦兹力）的表达式。
以下是完整的推导步骤：
### 1. 理论前提与定义

在电磁场中，总动量（物质的机械动量 + 场的动量）是守恒的。其局域微分形式的动量守恒方程可以写为：
$$ \mathbf{f} + \frac{\partial \mathbf{g}}{\partial t} = \nabla \cdot \overleftrightarrow{\mathbf{T}} $$
其中：
*   $\mathbf{f}$ 是电磁场对物质作用的**体积力密度**（机械动量的时间变化率）。
*   $\mathbf{g} = \epsilon_0 (\mathbf{E} \times \mathbf{B})$ 是**电磁场动量密度**。
*   $\overleftrightarrow{\mathbf{T}}$ 是**麦克斯韦应力张量**，代表动量流密度，其分量定义为：
    $$ T_{ij} = \epsilon_0 \left( E_i E_j - \frac{1}{2}\delta_{ij}E^2 \right) + \frac{1}{\mu_0} \left( B_i B_j - \frac{1}{2}\delta_{ij}B^2 \right) $$
*(注：$\delta_{ij}$ 为克罗内克δ函数，张量的散度相当于对每个分量求偏导并求和)。*

### 2. 计算麦克斯韦应力张量的散度

为了解出体积力密度 $\mathbf{f}$，我们直接计算张量 $\overleftrightarrow{\mathbf{T}}$ 的散度 $\nabla \cdot \overleftrightarrow{\mathbf{T}}$。
将其写为矢量形式：
$$ \nabla \cdot \overleftrightarrow{\mathbf{T}} = \epsilon_0 \left[ (\nabla \cdot \mathbf{E})\mathbf{E} + (\mathbf{E} \cdot \nabla)\mathbf{E} - \frac{1}{2}\nabla(E^2) \right] + \frac{1}{\mu_0} \left[ (\nabla \cdot \mathbf{B})\mathbf{B} + (\mathbf{B} \cdot \nabla)\mathbf{B} - \frac{1}{2}\nabla(B^2) \right] $$

这里我们需要用到一个非常重要的**矢量恒等式**：
$$ \mathbf{A} \times (\nabla \times \mathbf{A}) = \frac{1}{2}\nabla(A^2) - (\mathbf{A} \cdot \nabla)\mathbf{A} $$
将其移项可得：
$$ (\mathbf{A} \cdot \nabla)\mathbf{A} - \frac{1}{2}\nabla(A^2) = -\mathbf{A} \times (\nabla \times \mathbf{A}) $$

将该恒等式分别代入到电场和磁场的部分中，散度表达式可以化简为：
$$ \nabla \cdot \overleftrightarrow{\mathbf{T}} = \epsilon_0 \left[ (\nabla \cdot \mathbf{E})\mathbf{E} - \mathbf{E} \times (\nabla \times \mathbf{E}) \right] + \frac{1}{\mu_0} \left[ (\nabla \cdot \mathbf{B})\mathbf{B} - \mathbf{B} \times (\nabla \times \mathbf{B}) \right] $$

### 3. 代入麦克斯韦方程组

接下来，用麦克斯韦方程组来替换掉上面的散度和旋度项：
1. 高斯定律：$\nabla \cdot \mathbf{E} = \frac{\rho}{\epsilon_0}$
2. 磁高斯定律：$\nabla \cdot \mathbf{B} = 0$
3. 法拉第定律：$\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$
4. 安培-麦克斯韦定律：$\nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0 \epsilon_0 \frac{\partial \mathbf{E}}{\partial t}$

代入上面的张量散度表达式中：
$$ \nabla \cdot \overleftrightarrow{\mathbf{T}} = \epsilon_0 \left[ \frac{\rho}{\epsilon_0}\mathbf{E} - \mathbf{E} \times \left(-\frac{\partial \mathbf{B}}{\partial t}\right) \right] + \frac{1}{\mu_0} \left[ 0\cdot \mathbf{B} - \mathbf{B} \times \left( \mu_0 \mathbf{J} + \mu_0 \epsilon_0 \frac{\partial \mathbf{E}}{\partial t} \right) \right] $$

展开并消去常数：
$$ \nabla \cdot \overleftrightarrow{\mathbf{T}} = \rho\mathbf{E} + \epsilon_0 \left( \mathbf{E} \times \frac{\partial \mathbf{B}}{\partial t} \right) - (\mathbf{B} \times \mathbf{J}) - \epsilon_0 \left( \mathbf{B} \times \frac{\partial \mathbf{E}}{\partial t} \right) $$

### 4. 整理得到洛伦兹力密度

利用叉乘的反对称性 $-(\mathbf{B} \times \mathbf{J}) = \mathbf{J} \times \mathbf{B}$ 以及 $-(\mathbf{B} \times \frac{\partial \mathbf{E}}{\partial t}) = \frac{\partial \mathbf{E}}{\partial t} \times \mathbf{B}$，上式变为：
$$ \nabla \cdot \overleftrightarrow{\mathbf{T}} = \rho\mathbf{E} + \mathbf{J} \times \mathbf{B} + \epsilon_0 \left( \mathbf{E} \times \frac{\partial \mathbf{B}}{\partial t} + \frac{\partial \mathbf{E}}{\partial t} \times \mathbf{B} \right) $$

注意到最后两项正好是乘积法则（Leibniz rule）展开的结果：
$$ \epsilon_0 \left( \mathbf{E} \times \frac{\partial \mathbf{B}}{\partial t} + \frac{\partial \mathbf{E}}{\partial t} \times \mathbf{B} \right) = \frac{\partial}{\partial t} (\epsilon_0 \mathbf{E} \times \mathbf{B}) = \frac{\partial \mathbf{g}}{\partial t} $$

因此，方程化简为：
$$ \nabla \cdot \overleftrightarrow{\mathbf{T}} = \rho\mathbf{E} + \mathbf{J} \times \mathbf{B} + \frac{\partial \mathbf{g}}{\partial t} $$

移项并与我们在“第1步”中假设的动量守恒定律对比 ($\mathbf{f} = \nabla \cdot \overleftrightarrow{\mathbf{T}} - \frac{\partial \mathbf{g}}{\partial t}$)，我们直接得出了**电磁场对物质的体积力密度（洛伦兹力密度）**：
$$ \mathbf{f} = \rho\mathbf{E} + \mathbf{J} \times \mathbf{B} $$

### 5. 从力密度推导运动点电荷的力

上述推导得到了连续介质/电荷分布的力密度公式。对于空间中某一点 $\mathbf{r}_0(t)$、以速度 $\mathbf{v}$ 运动、电荷量为 $q$ 的**离散点电荷**，其电荷密度 $\rho$ 和电流密度 $\mathbf{J}$ 可以用狄拉克 $\delta$ 函数表示为：
*   $\rho(\mathbf{r}, t) = q \delta^3(\mathbf{r} - \mathbf{r}_0(t))$
*   $\mathbf{J}(\mathbf{r}, t) = \rho\mathbf{v} = q \mathbf{v} \delta^3(\mathbf{r} - \mathbf{r}_0(t))$

该点电荷受到的总机械力 $\mathbf{F}$ 是对包含该电荷的体积 $V$ 上的力密度进行空间积分：
$$ \mathbf{F} = \int_V \mathbf{f} \, d^3r = \int_V (\rho\mathbf{E} + \mathbf{J} \times \mathbf{B}) \, d^3r $$

代入点电荷的密度表达式：
$$ \mathbf{F} = \int_V \left[ q \delta^3(\mathbf{r} - \mathbf{r}_0)\mathbf{E}(\mathbf{r}) + q \mathbf{v} \delta^3(\mathbf{r} - \mathbf{r}_0) \times \mathbf{B}(\mathbf{r}) \right] d^3r $$

根据 $\delta$ 函数的积分性质，当空间积分经过 $\mathbf{r}_0$ 点时，可以直接提取出场在该点的值：
$$ \mathbf{F} = q\mathbf{E}(\mathbf{r}_0) + q\mathbf{v} \times \mathbf{B}(\mathbf{r}_0) $$
$$ \mathbf{F} = q(\mathbf{E} + \mathbf{v} \times \mathbf{B}) $$

---

### 物理意义总结
通过这个推导可以看出，**洛伦兹力并非凭空产生的基本假设**，而是**电磁场作为一种物质实体**，在与带电粒子交互时，为了严格遵守“总动量守恒”法则所必然产生的结果。电荷受到的力，本质上是其周围表面流入/流出的场动量（应力张量）与该区域内场自身动量随时间衰减的差值。