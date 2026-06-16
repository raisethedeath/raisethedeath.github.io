在断裂力学中，裂纹尖端张开位移（Crack Tip Opening Displacement, CTOD）呈现**抛物线（Parabolic）特征**是线弹性断裂力学（LEFM）的一个经典且极其重要的理论结果。

为了严格回答这个问题，我们需要抛开现象，直接从**连续介质力学与弹性理论的基本方程**出发，通过求解**威廉姆斯展开（Williams Expansion）**，一步步推导裂纹尖端的位移场，最终在数学上证明其抛物线几何特征，并结合您提供的那篇PRL论文分析其物理意义。

---

### 一、 弹性理论基本方程与Airy应力函数

假设材料是各向同性、线弹性的，且处于二维状态（平面应力或平面应变）。在没有体积力的情况下，弹性力学的核心在于满足两个方程：
1. **平衡方程**（Equilibrium Equations）
2. **协调方程**（Compatibility Equation）

为了自动满足平衡方程，引入**艾里应力函数（Airy Stress Function）$\Phi(x,y)$**。应力分量可以表示为：
$$ \sigma_{xx} = \frac{\partial^2 \Phi}{\partial y^2}, \quad \sigma_{yy} = \frac{\partial^2 \Phi}{\partial x^2}, \quad \tau_{xy} = -\frac{\partial^2 \Phi}{\partial x \partial y} $$

将应力代入各向同性线弹性体的本构方程（胡克定律），并代入几何协调方程，可得出Airy应力函数必须满足**双调和方程（Biharmonic Equation）**：
$$ \nabla^4 \Phi = \left( \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} \right)^2 \Phi = 0 $$

---

### 二、 极坐标下的威廉姆斯展开（Williams Expansion）

由于裂纹是一个具有尖端的半无限长几何体，使用极坐标 $(r, \theta)$ 求解比直角坐标系方便得多。我们将原点设在裂纹尖端，裂纹面位于 $\theta = \pm \pi$。

极坐标下的拉普拉斯算子为 $\nabla^2 = \frac{\partial^2}{\partial r^2} + \frac{1}{r}\frac{\partial}{\partial r} + \frac{1}{r^2}\frac{\partial^2}{\partial \theta^2}$。

1957年，M.L. Williams 提出了一种分离变量的特征函数展开法来求解裂纹尖端问题。假设Airy应力函数具有以下形式：
$$ \Phi(r, \theta) = r^{\lambda+1} f(\theta) $$
其中 $\lambda$ 是待定的特征值（Eigenvalue）。

将此假设代入极坐标下的双调和方程 $\nabla^4 \Phi = 0$，可以得到一个关于 $f(\theta)$ 的常微分方程。求解该微分方程，得到 $f(\theta)$ 的通解：
$$ f(\theta) = A \sin(\lambda+1)\theta + B \cos(\lambda+1)\theta + C \sin(\lambda-1)\theta + D \cos(\lambda-1)\theta $$
其中 $A, B, C, D$ 是待定系数。

---

### 三、 引入裂纹边界条件

现在我们需要利用裂纹表面的力学边界条件来确定未知数。
裂纹面（$\theta = +\pi$ 和 $\theta = -\pi$）是自由表面（Traction-free），即裂纹面上没有正应力和剪应力：
$$ \sigma_{\theta\theta}(r, \pm\pi) = 0 $$
$$ \tau_{r\theta}(r, \pm\pi) = 0 $$

根据极坐标下应力与Airy函数的关系：
$$ \sigma_{\theta\theta} = \frac{\partial^2 \Phi}{\partial r^2} = \lambda(\lambda+1) r^{\lambda-1} f(\theta) $$
$$ \tau_{r\theta} = -\frac{\partial}{\partial r}\left(\frac{1}{r}\frac{\partial \Phi}{\partial \theta}\right) = -\lambda r^{\lambda-1} f'(\theta) $$

为了让应力在任意 $r$ 处都为0，必须有：
$$ f(\pm\pi) = 0 \quad \text{和} \quad f'(\pm\pi) = 0 $$

**针对张开型裂纹（Mode I，纯拉伸）：**
Mode I 裂纹的受力和变形关于裂纹面（$\theta = 0$）是对称的。这意味着Airy应力函数 $\Phi$ 必须是 $\theta$ 的偶函数。因此，$f(\theta)$ 中包含正弦（奇函数）的项系数必须为0，即 $A = 0, C = 0$。

此时 $f(\theta)$ 简化为：
$$ f(\theta) = B \cos(\lambda+1)\theta + D \cos(\lambda-1)\theta $$

代入边界条件 $f(\pi) = 0$ 和 $f'(\pi) = 0$：
1. $B \cos(\lambda+1)\pi + D \cos(\lambda-1)\pi = 0$
2. $-B(\lambda+1) \sin(\lambda+1)\pi - D(\lambda-1) \sin(\lambda-1)\pi = 0$

解这个齐次线性方程组，要使其有非零解（$B,D$不全为0），行列式必须为零，化简后得到**特征方程**：
$$ \sin(2\pi\lambda) = 0 $$

解得特征值：
$$ 2\pi\lambda = n\pi \implies \lambda = \frac{n}{2} \quad (n = 1, 2, 3, \dots) $$
*(注：如果 $n \le 0$，算出的位移会趋于无穷大，违背物理现实；如果 $n=2,4...$，算出的应力是非奇异的，不代表裂纹尖端特征。)*

---

### 四、 提取奇异项（位移场公式推导）

最重要的项是 **$n = 1$ 即 $\lambda = 1/2$** 的这一项。此时：
* 应力 $\sigma \propto r^{\lambda-1} = r^{-1/2}$ （著名的裂纹尖端应力奇异性：$1/\sqrt{r}$）。
* 位移 $u \propto r^\lambda = r^{1/2}$。

将 $\lambda = 1/2$ 代回，通过引入**应力强度因子 $K_I$** 作为系数的归一化参数，并结合极坐标几何方程和本构方程积分，可以严格推导出 Mode I 的裂纹尖端位移场公式（LEFM经典公式）：

$$ u_x = \frac{K_I}{2\mu} \sqrt{\frac{r}{2\pi}} \cos\left(\frac{\theta}{2}\right) \left[ \kappa - 1 + 2\sin^2\left(\frac{\theta}{2}\right) \right] $$
$$ u_y = \frac{K_I}{2\mu} \sqrt{\frac{r}{2\pi}} \sin\left(\frac{\theta}{2}\right) \left[ \kappa + 1 - 2\cos^2\left(\frac{\theta}{2}\right) \right] $$

其中：
* $\mu$ 是材料的剪切模量（在PRL这篇论文中 $\mu=20\text{ kPa}$）。
* $\kappa$ 是Kolosov常数（平面应变 $\kappa = 3-4\nu$；平面应力 $\kappa = \frac{3-\nu}{1+\nu}$）。

---

### 五、 数学论证：为什么CTOD是抛物线？

裂纹尖端张开位移（CTOD）是指**裂纹上下表面的张开距离**。
在极坐标中，裂纹面上表面对应 $\theta = +\pi$，下表面对应 $\theta = -\pi$。

将 $\theta = \pm \pi$ 代入上面的垂直位移分量 $u_y$ 方程中。
注意此时：$\sin(\pm\frac{\pi}{2}) = \pm 1$ ，$\cos(\pm\frac{\pi}{2}) = 0$。

$$ u_y(r, \pm\pi) = \pm \frac{K_I}{2\mu} \sqrt{\frac{r}{2\pi}} (\kappa + 1) $$

裂纹的半张开宽度 $y = |u_y|$，而离开裂纹尖端的距离设为 $d = r$。
我们可以将上式写成：
$$ y = C \sqrt{d} \quad \text{（其中常数 } C = \frac{K_I(\kappa + 1)}{2\mu\sqrt{2\pi}} \text{）} $$

两边同时平方：
$$ y^2 = C^2 d $$

**这就是标准的中学解析几何中的抛物线方程（形如 $y^2 = 2px$）。**
因此，从线弹性断裂力学（LEFM）的极坐标展开与边界条件求解中，可以严格在数学上证明：**在线弹性范畴内，受拉伸裂纹的张开形貌（CTOD曲线）是一条绝对完美的抛物线。**

---

### 六、 物理分析：结合PRL论文理解“远场 (Far-field)”

在您提供的这篇PRL论文（《Falling through the cracks...》）中，作者在Main Fig. 3(a) 和 Main Fig. 15 中反复提到了 **“Far-field CTOD reflect the parabolic trend predicted by LEFM” (远场CTOD反映了LEFM预测的抛物线趋势)**。

**为什么必须强调是“远场（Far-field）”？**

1. **近场的失效（非线性与3D效应）：** 
   上面的数学推导有一个根本假设——材料是线弹性且小变形的。然而在实验中（凝胶材料），由于应力奇异性 $1/\sqrt{r} \to \infty$，裂纹尖端极近区域（本文中距离裂纹尖端 $\approx 150 \mu m$ 以内，见Fig. 15a的 Process Zone）会发生极大的变形，甚至是不可压缩Neo-Hookean非线性大变形，以及韧带拉伸导致的局部应力高度集中。**在近场区，假设失效，抛物线规律被打破。**

2. **K-占优区（K-dominant Region）：** 
   虽然近场破坏了LEFM，但根据圣维南原理和断裂力学理论，在一个**中间距离**上（比非线性的过程区大，比样品的宏观几何尺寸小，即 $r_{process\_zone} \ll r \ll a$），会存在一个**K-占优区（K-dominant region）**。
   在这个区域内，裂纹尖端的微观复杂性（如本论文发现的三维台阶和韧带）的影响已经衰减完毕，材料的变形重新回到由 $\lambda=1/2$ 特征项主导的线弹性状态。

3. **实验测量 $G_c$ 的精妙逻辑：**
   论文作者想知道裂纹尖端的“韧带”到底消耗了多少额外的能量（$G_c - G_0$）。由于尖端形变太复杂无法直接算宏观能量释放率，作者巧妙地利用了上述推导结论：在“远场”找一段没有受内聚力区影响的CTOD曲线，因为它必须服从抛物线 $y = C\sqrt{x}$，作者通过**拟合远场位移的抛物线轮廓**求出常数 $C$，进而反推出**全局的应力强度因子 $K_I$** 和宏观断裂能 $G_c = K_I^2 / E$ (或文中定义的等效形式)。

**总结：**
CTOD之所以呈现抛物线，是因为在双调和方程受裂纹自由表面边界条件约束下，其级数解的基频特征值必然为 $\lambda = 1/2$，导致位移与距离的平方根成正比（$u \propto \sqrt{r}$）。在现代断裂力学实验中，科学家正是利用这一宏观远场抛物线特征，绕过极度复杂的裂纹尖端近场三维非线性结构，准确测量材料的宏观断裂韧性。

## From Airy Function To  displacement
非常好的问题！在上一版的回答中，为了快速得出结论，我们确实跨越了断裂力学中两个最深刻、最具有物理与数学之美的环节：**1. 为什么威廉姆斯展开中只有 $n=1$ （即 $\lambda = 1/2$）是决定性的？** 以及 **2. 如何从纯数学的 Airy 应力函数积分出真实的位移场并证明其严格为抛物线？**

这两步不仅是线弹性断裂力学（LEFM）的基石，更揭示了裂纹尖端的物理本质。下面我们将从最基本的连续介质力学出发，补全这部分极其严密的数学推导与物理论述。

---

### 第一部分：提取奇异项——为什么必须且仅仅是 $n=1$ ($\lambda = 1/2$)？

回顾威廉姆斯特征方程的解，我们得到了一系列的特征值：
$$ \lambda = \frac{n}{2} \quad (n \in \mathbb{Z}) $$

我们知道，极坐标下的应力 $\sigma_{ij} \propto r^{\lambda-1}$，而位移 $u_i \propto r^\lambda$。
这是一个无穷级数解，包含 $n = \dots, -2, -1, 0, 1, 2, 3, \dots$。我们需要通过**两个基本的物理公理**来筛选这些数学解。

#### 1. 物理公理一：位移有界（剔除 $n < 0$）
裂纹尖端（$r \to 0$）虽然是奇异点，但材料本身不会凭空撕裂至无穷大。
* 如果 $n < 0$（即 $\lambda < 0$），那么位移 $u \propto r^{-|n|/2}$。当 $r \to 0$ 时，裂纹尖端的位移将趋于无穷大，导致材料发生无限大的重叠（穿透）或断开，这在固体力学中是物理上不可能的。

#### 2. 物理公理二：应变能密度可积（剔除 $n = 0$）
对于受到有限外部载荷的结构，其内部储存的总应变能 $U$ 必须是有限的。
* 应变能密度 $W \propto \sigma \times \varepsilon \propto (r^{\lambda-1}) \times (r^{\lambda-1}) = r^{2\lambda-2}$。
* 裂纹尖端局部的总应变能为积分： $\int_0^R W \cdot 2\pi r dr \propto \int_0^R r^{2\lambda-1} dr$。
* 如果 $n = 0$（即 $\lambda = 0$），则能量积分退化为 $\int_0^R r^{-1} dr = [\ln r]_0^R$，在 $r \to 0$ 时会发散到无穷大！这意味着对材料施加有限的力，却在局部产生了无限大的能量，违背热力学定律。
* 因此，为了保证能量可积（$2\lambda - 1 > -1$），必须要求 **$\lambda > 0$**。

**结论：有效的特征值只能是正整数 $n = 1, 2, 3, \dots$**

#### 3. 渐近显性（Asymptotic Dominance）：为什么 $n=1$ 最重要？
现在我们将级数按正整数 $n$ 展开，考察应力场：
$$ \sigma_{ij} = C_1 r^{-1/2} + C_2 r^0 + C_3 r^{1/2} + \dots $$
当观测点无限逼近裂纹尖端（$r \to 0$）时：
* **$n \ge 3$ 的项（高阶项）**：含有 $r^{1/2}$ 等正次幂，当 $r \to 0$ 时它们迅速衰减为 0。
* **$n = 2$ 的项**：$r^0$ 是一个常数。在断裂力学中这被称为 **T-应力（T-stress）**，它平行于裂纹面，不影响裂纹的张开奇异性。
* **$n = 1$ 的项**：含有 $r^{-1/2}$。这是一个**奇异项（Singular term）**，当 $r \to 0$ 时，它趋于无穷大。

**物理法则的终极裁决：**
在极靠近裂纹尖端的区域，奇异项 $r^{-1/2}$ 的数值会在数量级上绝对碾压后面的常数项和高阶项。因此，**裂纹尖端极近区域的应力场和位移场，完全由且仅由 $n=1$ 的项（即 $\lambda=1/2$）所主导（Dominate）**。这就是所谓的“K-占优区”。

---

### 第二部分：从 Airy 函数到抛物线 CTOD 的严格数学积分

现在我们确认了，主导裂纹张开行为的应力函数仅取 $\lambda = 1/2$。根据前置推导（引入裂纹面自由边界条件），Mode I 的 Airy 应力函数形式为：
$$ \Phi = D r^{3/2} \left[ 3\cos\left(\frac{\theta}{2}\right) + \cos\left(\frac{3\theta}{2}\right) \right] $$

为了建立与宏观载荷的联系，我们通过裂纹前方（$\theta=0$）的正应力定义应力强度因子 $K_I$。通过求导并代入边界条件，求得常数 $D = \frac{K_I}{3\sqrt{2\pi}}$。代入后我们得到标准化的 Airy 应力函数：
$$ \Phi = \frac{K_I}{3\sqrt{2\pi}} r^{3/2} \left[ 3\cos\left(\frac{\theta}{2}\right) + \cos\left(\frac{3\theta}{2}\right) \right] $$

#### 第一步：求解奇异应力分量
利用极坐标系下的应力微分公式 $\sigma_r = \frac{1}{r}\frac{\partial \Phi}{\partial r} + \frac{1}{r^2}\frac{\partial^2 \Phi}{\partial \theta^2}$ 等，对上式求二次偏导。为了方便后续积分，利用三角恒等式（如 $\cos\frac{3\theta}{2} = \cos\frac{\theta}{2}(1 - 4\sin^2\frac{\theta}{2})$）进行化简，我们得到极其优雅的应力分量：

$$ \sigma_r = \frac{K_I}{\sqrt{2\pi r}} \cos\left(\frac{\theta}{2}\right) \left[ 1 + \sin^2\left(\frac{\theta}{2}\right) \right] $$
$$ \sigma_\theta = \frac{K_I}{\sqrt{2\pi r}} \cos^3\left(\frac{\theta}{2}\right) $$
*(提示：这就是为什么在教科书中会直接给出应力场的角度分布特征，它们皆来自于此)*

#### 第二步：引入本构方程（Hooke's Law）建立偏微分方程
要找位移，必须通过本构方程。为了同时兼容平面应力和平面应变，引入 Kolosov 常数 $\kappa$（平面应变 $\kappa=3-4\nu$，平面应力 $\kappa=\frac{3-\nu}{1+\nu}$）。应变与应力的关系可写为：
$$ 2\mu \varepsilon_r = \frac{\kappa-1}{4}(\sigma_r + \sigma_\theta) + \frac{1}{2}(\sigma_r - \sigma_\theta) $$

注意到上述应力场的一个神奇数学性质（体积应力）：
$\sigma_r + \sigma_\theta = \nabla^2 \Phi = \frac{K_I}{\sqrt{2\pi r}} 2 \cos\left(\frac{\theta}{2}\right)$
$\sigma_r - \sigma_\theta = \frac{K_I}{\sqrt{2\pi r}} 2 \sin^2\left(\frac{\theta}{2}\right) \cos\left(\frac{\theta}{2}\right)$

代入本构方程，由于极坐标下径向应变 $\varepsilon_r = \frac{\partial u_r}{\partial r}$，我们得到了关于 $u_r$ 的常微分方程：
$$ 2\mu \frac{\partial u_r}{\partial r} = \frac{K_I}{\sqrt{2\pi r}} \cos\left(\frac{\theta}{2}\right) \left[ \frac{\kappa-1}{2} + \sin^2\left(\frac{\theta}{2}\right) \right] $$

#### 第三步：对偏微分方程进行严格积分
对方程两边关于 $r$ 进行积分。因为 $\int r^{-1/2} dr = 2\sqrt{r}$，积分过程出奇地简单：
$$ 2\mu u_r = K_I \sqrt{\frac{r}{2\pi}} \cos\left(\frac{\theta}{2}\right) \left[ \kappa - 1 + 2\sin^2\left(\frac{\theta}{2}\right) \right] + f(\theta) $$
由于 $f(\theta)$ 代表刚体平移，在此忽略取0。这就是裂纹尖端径向位移 $u_r$ 的严格解。

用同理的步骤，代入环向应变 $\varepsilon_\theta = \frac{u_r}{r} + \frac{1}{r}\frac{\partial u_\theta}{\partial \theta}$ 并对 $\theta$ 积分，我们可以严格解出环向位移 $u_\theta$：
$$ 2\mu u_\theta = -K_I \sqrt{\frac{r}{2\pi}} \sin\left(\frac{\theta}{2}\right) \left[ \kappa + 1 - 2\cos^2\left(\frac{\theta}{2}\right) \right] $$

#### 第四步：坐标系变换与“抛物线”的终极证明
**CTOD 关注的是裂纹上下表面在垂直方向（y轴）的张开量。**
我们将极坐标位移 $(u_r, u_\theta)$ 投影到直角坐标系 $y$ 轴：
$$ u_y(r, \theta) = u_r \sin\theta + u_\theta \cos\theta $$

**代入裂纹表面条件：** 上裂纹面对应 $\theta = \pi$，下裂纹面对应 $\theta = -\pi$。
此时 $\sin(\pm\pi) = 0$ ，导致径向位移投影 $u_r \sin\theta$ 直接消失！
此时 $\cos(\pm\pi) = -1$，于是有：
$$ u_y(r, \pm\pi) = - u_\theta(r, \pm\pi) $$

将 $\theta = \pm \pi$ 代入上面刚求出的 $u_\theta$ 表达式中（注意 $\sin(\pm\frac{\pi}{2}) = \pm 1$ ，$\cos^2(\pm\frac{\pi}{2}) = 0$）：
$$ 2\mu u_y(r, \pm\pi) = - \left( -K_I \sqrt{\frac{r}{2\pi}} (\pm 1) [ \kappa + 1 - 0 ] \right) $$
化简得到裂纹上下表面的形貌方程：
$$ u_y(r, \pm\pi) = \pm \frac{K_I}{2\mu} \sqrt{\frac{r}{2\pi}} (\kappa + 1) $$

定义裂纹背离尖端的坐标为 $x$（等同于此处的 $r$），裂纹张开的纵坐标为 $y = |u_y|$，并把所有常数打包为一个系数 $C = \frac{K_I(\kappa + 1)}{2\mu\sqrt{2\pi}}$，我们最终得到：
$$ y = C \sqrt{x} $$
两边平方：
$$ y^2 = C^2 x $$

### 总结
通过以上推导，我们补全了逻辑闭环：
1. **物理法则的筛选**（有限位移与有限应变能）迫使威廉姆斯级数只能存在正整数阶。
2. **渐近分析**证明，只要无限靠近裂纹尖端，唯一的奇点解（$\lambda = 1/2$）将碾压所有其他形变机制。
3. **基于该奇点解的严格偏微分积分与坐标投影**，不可避免地导出了 $y^2 = C^2 x$。

这就在严密的数学意义上解释了：为什么在《Physical Review Letters》和《Nature Physics》这类前沿文献中，只要测到了远场的连续介质区域，作者们无需做任何非线性力学假设，就能极其自信地利用“抛物线”去倒推裂纹尖端的物理量 $K_I$ 和耗散能量 $G_c$。