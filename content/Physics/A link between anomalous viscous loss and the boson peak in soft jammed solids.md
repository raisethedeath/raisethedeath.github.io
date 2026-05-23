这是一篇发表于物理学顶级期刊《Nature Physics》（2025年2月刊）的突破性研究论文，题为 **“A link between anomalous viscous loss and the boson peak in soft jammed solids”（软拥堵固体中反常粘性损耗与玻色峰之间的联系）**。

该研究由东京大学的 Yusuke Hara 和 Atsushi Ikeda（池田温志）以及九州大学的 Daisuke Mizuno（水野大介）等人合作完成。他们结合了**高带宽光镊微观流变学实验**与**基于第一性原理的线性响应理论计算**，成功破解了软颗粒物质（如乳液、泡沫、细胞质等）中长期存在的**“反常粘性损耗”**之谜，将其与非晶态固体中普遍存在的**“玻色峰”（Boson Peak）**直接联系起来。

以下是对这篇论文的深度详尽解析，包括背景物理问题、数学公式推导、实验方法及核心物理结论。

---

### 一、 物理背景与核心问题

#### 1. 软拥堵固体（Soft Jammed Solids）及其流变学异常
乳液（Emulsions）、泡沫（Foams）和微凝胶（Microgels）等材料在宏观上表现为固体（如沙拉酱、剃须膏，能保持形状），但在微观上是由高度密集的软颗粒无序堆积而成的，这一状态被称为**拥堵状态（Jammed State）**。

在物理学中，经典的线性粘弹性理论（如 Maxwell 模型或 Kelvin-Voigt 模型）预测，在极低频率（慢剪切）下，固体的响应应该满足：
*   **储能模量（剪切弹性）**：$G'(\omega) \propto \omega^0$（不随频率变化，表现为弹性平台）。
*   **损耗模量（粘性耗散）**：$G''(\omega) \propto \omega^1$（与频率成正比，即标准的牛顿粘性耗散）。

然而，实验表明，几乎所有的软拥堵固体在低频下都表现出**反常粘性损耗（Anomalous Viscous Loss）**：
*   储能模量表现为弹性平台：$G'(\omega) \propto \omega^0$
*   损耗模量却满足反常幂律：$G''(\omega) \propto \sqrt{\omega}$

这意味着，即使在极慢的形变下，这类系统内部也存在着极其剧烈的、非经典的能量色散行为。过去，这种 $\sqrt{\omega}$ 的损耗只能用唯象模型（如软玻璃流变学 SGR 模型）来定性描述，缺乏微观哈密顿量的严格物理推导。

#### 2. 玻色峰（Boson Peak）与 marginal stability
在无序固体（玻璃态物质）中，由于结构的无序性，低频下的振动模式数量（振动状态密度，vDOS，记为 $D(\omega)$）会显著高出经典晶体德拜理论（Debye Theory，预测 $D(\omega) \propto \omega^2$）的预测。这种在特定低频区出现的超额振动模式，在拉曼散射等实验中表现为一个峰，被称为**“玻色峰”**。

在软球拥堵模型中，由于系统处于**边缘稳定状态（marginal stability）**，这个玻色峰会向极低频移动，并展现出独特的**非德拜标度律（non-Debye scaling）**：
$$D(\omega) \propto \left(\frac{\omega}{\omega_*}\right)^2$$
且其指数 $2$ 与空间维度无关。

**本文的核心物理思想：** 正是这个由边缘稳定性引起的玻色峰（非德拜振动模式），导致了宏观上观察到的反常粘性损耗（$G'' \propto \sqrt{\omega}$）。

---

### 二、 实验方法：主动与被动微观流变学

传统的宏观流变仪（Macrorheology）受限于机械惯性，很难测到极高频或极低频下的干净信号。本文采用了**高带宽激光粒子追踪技术（High-bandwidth laser particle-tracking）**。

1.  **样品制备**：高浓度油包水乳液（Packing fraction $\phi = 0.60 \sim 0.67$）。
2.  **探针观测**：在乳液中掺入半径 $a = 1\,\mu\text{m}$ 的三聚氰胺微球作为探针。利用紧聚焦激光和象限光电二极管（QPD），在微秒尺度上追踪探针的自发热运动（无规涨落 $u(t)$）。
3.  **公式转化**：
    利用**涨落耗散定理（FDT）**，将时域的均方位移 $M(t)$ 或频域的光谱密度 $\langle |u(\omega)|^2 \rangle$ 转化为探针的复响应函数 $\alpha^*(\omega)$：
    $$\alpha''(\omega) = \frac{\omega \langle |u(\omega)|^2 \rangle}{2k_BT}$$
    然后，通过广义斯托克斯公式（generalized Stokes formula）得到介质的复剪切模量 $G^*(\omega)$：
    $$G^*(\omega) = G'(\omega) + iG''(\omega) = \frac{1}{6\pi a \alpha^*(\omega)}$$
    由此，实验测得了==跨越 4 个数量级频率的超宽谱粘弹性==（图2），清晰地证实了在低频区存在 $G' \propto \omega^0, G'' \propto \sqrt{\omega}$ 的反常粘性损耗。

---

### 三、 理论推导：从微观振动（vDOS）到宏观流变学（$G^*$）

这是本篇论文最具学术含量的理论推导部分，建立了微观 Hessian 矩阵、格林函数与复模量之间的解析关系。
#### 1. 过阻尼运动方程与线性化
考虑 $N$ 个软球组成的系统，其过阻尼动力学方程（无热噪声，因为拥堵态下接触力远大于热涨落）为：
$$ \gamma_0 \sum_{j \in \partial i} \left( \frac{d\mathbf{r}_i}{dt} - \frac{d\mathbf{r}_j}{dt} \right) = -\frac{\partial U}{\partial \mathbf{r}_i} + \mathbf{F}_p \delta_{ip} \quad (\text{Eq. 2}) $$
其中 $\gamma_0$ 为接触阻尼系数，$\mathbf{F}_p$ 为施加在探针上的微小正弦力。

在线性响应极限下，粒子的非仿射位移 $|\mathbf{u}\rangle$ 可以写为紧凑的矩阵形式（Eq. 12）：
$$ \gamma_0 \mathbf{C} |\dot{\mathbf{u}}\rangle = -m \boldsymbol{\mathcal{M}} |\mathbf{u}\rangle + |\mathbf{F}\rangle $$
*   $\mathbf{C}$：接触矩阵（Contact Matrix）。
*   $\boldsymbol{\mathcal{M}}$：动力学矩阵（Dynamical Matrix，即势能的 Hessian 矩阵除以质量 $m$）。

#### 2. 复剪切模量的格林函数解 (Eq. 3)
通过傅里叶变换，求得复响应函数 $\alpha^*(\omega)$。由于系统具有高度无序性，作者利用广义特征值问题 $\boldsymbol{\mathcal{M}}|\mathbf{e}_k\rangle = \tilde{\lambda}_k \mathbf{C}|\mathbf{e}_k\rangle$，以及本征矢在空间上的无规无序性近似（$e_{k, q\mu}e_{k, r\nu} \approx \frac{1}{3N}\delta_{qr}\delta_{\mu\nu}$），成功将响应函数简化为由**特征振动频率分布（vDOS, $D(\omega)$）**表达的单积分形式：
$$ \frac{1}{G^*(\omega)} = \frac{R}{\gamma_0} \int d\omega' \frac{D(\omega')}{\frac{m}{\gamma_0}(\omega')^2 + i\omega} \quad (\text{Eq. 3}) $$
**这是一个极其优美的物理公式：它直接将系统的宏观剪切响应（左边）与系统的微观固有振动模式（右边）联系在了一起。** 其中的分母项将无阻尼下的特征频率 $\omega'$ 转换成了过阻尼下的特征松弛率 $\frac{m}{\gamma_0}(\omega')^2$。

#### 3. 渐近标度分析（公式推导证明 $G'' \propto \sqrt{\omega}$）
为了证明该理论如何导出 $\sqrt{\omega}$ 的标度，我们需要对 **Eq. 3** 进行渐近展开分析。
已知 vDOS $D(\omega)$ 满足两个典型区间（Eq. 4）：
*   **平台区（Plateau）**：在较高频区间 $\omega_* < \omega < \omega_e$ 内，$D(\omega) \propto \omega^0 \approx 1/\omega_e$。
*   **非德拜区（玻色峰）**：在较低频区间 $\omega < \omega_*$ 内，$D(\omega) \propto \omega^2 / (\omega_e \omega_*^2)$。

定义特征松弛频率：$\omega_0 = \frac{m}{\gamma_0}\omega_e^2$，$\omega_c = \frac{m}{\gamma_0}\omega_*^2$。
引入无量纲变量 $x = \sqrt{\frac{m}{\gamma_0 \omega}}\omega'$，代入 **Eq. 3** 得到无量纲格林函数积分（Eq. 21）：
$$ \frac{\gamma_0 \sqrt{\omega_0\omega}}{G^* R} = \int_{\sqrt{\omega_c/\omega}}^{\sqrt{\omega_0/\omega}} \frac{dx}{x^2+i} + \frac{\omega}{\omega_c} \int_0^{\sqrt{\omega_c/\omega}} \frac{x^2 dx}{x^2+i} $$

利用复数积分渐近近似 $\frac{1}{x^2+i} \to x^{-2} - ix^{-4}$（当 $x \gg 1$）和 $\to -i$（当 $x \ll 1$），我们在三个不同频区进行积分：

*   **（1）高频区 ($\omega_c \ll \omega_0 \ll \omega$)**：
    第一项积分占主导。积分后取倒数，得到：
    $$ G^*(\omega) \propto \omega_0 + i\omega $$
    这意味着在极高频下，$G'' \propto \omega$，系统表现为纯粘性流体。

*   **（2）中频区 ($\omega_c \ll \omega \ll \omega_0$)**：
    此时积分由平台区 $D(\omega) \propto \omega^0$ 主导，第一个积分限很大。展开后第一项主导：
    $$ G^*(\omega) \propto \sqrt{\omega_0\omega} + i\sqrt{\omega_0\omega} $$
    这重现了前人熟知的流变学行为：储能和损耗模量均以 $\sqrt{\omega}$ 增长（图1b中频区）。

*   **（3）低频区 ($\omega \ll \omega_c \ll \omega_0$)**（**最核心的物理发现**）：
    此时频率低于特征频率 $\omega_c$，第二个积分（即非德拜玻色峰区 $D(\omega) \propto \omega^2$）开始占主导。
    由于积分中的 $x \ll 1$，我们对积分进行展开，保留实部和虚部的最低阶项，最终取倒数，得到：
    $$ G^*(\omega) \approx \sqrt{\omega_0 \omega_c} + i \sqrt{\omega_0 \omega} $$
    即：
    $$ G'(\omega) \propto \sqrt{\omega_0\omega_c} \propto \omega^0 \quad (\text{弹性平台}) $$
    $$ G''(\omega) \propto \sqrt{\omega_0\omega} \propto \sqrt{\omega} \quad (\text{反常粘性损耗}) $$
    **推导结论：低频下 $G'' \propto \sqrt{\omega}$ 的反常粘性损耗，在数学上严格来源于低频下 vDOS 满足的非德拜标度律（即玻色峰）。非晶态固体的边缘稳定性（marginal stability）正是产生这一特有标度律的物理根源。**

---

### 四、 理论与实验的无参数对比 (Fig. 3 & Fig. 4)

为了验证上述解析公式的正确性，作者将实验数据与数值模拟进行了无参数对比（图3）。

1.  **归一化对比**：将 $G^*$ 和 $\omega$ 分别用系统固有的物性参数进行归一化：
    *   模量单位：表面张力与液滴半径的比值 $\sigma/R$。
    *   频率单位：$\sigma / (R \eta_0)$（其中 $\eta_0$ 为溶剂粘度）。
2.  **拟合精度**：在没有任何可调拟合参数的情况下，模拟得到的复模量（图3中的方块）与乳液实验测量值（图3中的圆圈）在三个不同体积分数（$\phi = 0.64, 0.65, 0.66$）下达到了**惊人完美的重合**。

#### 跨越拥堵转变点 ($\phi < \phi_J$) 的普适标度（图4）
更为神奇的是，虽然该线性响应理论是在 $\phi > \phi_J$（硬塞拥堵态）下推导的，但作者发现，通过缩放因子（Scaling functions，Eq. 7），即使在 **未拥堵态（$\phi < \phi_J$）**，该标度规律依然完美成立。
在未拥堵状态下，热涨落扮演了主导作用，液滴频繁发生热碰撞。作者提出，可以通过引入一个由热碰撞产生的“有效两体势”（其能量尺度约为 $k_BT$），将上述无热理论推广到未拥堵的非线性区域，同样合理解释了实验观测。

---

### 五、 普适性验证：不同相互作用势能模型 (Fig. 5)

为了论证这一发现并非乳液体系的特例，而是非晶拥堵固体的**普适规律（Universality）**，作者对四类经典的软颗粒势能模型进行了三维数值模拟（图5）：
1.  **谐振势（Harmonic Spheres）**：模拟干泡沫。
2.  **赫兹势（Hertzian Spheres）**：模拟无粘性颗粒物质。
3.  **列纳-琼斯势（Lennard-Jones, LJ）**：代表存在吸引力的胶体。
4.  **反比幂律势（Inverse-power-law, IPL）**：代表连续软排斥。

**模拟结果显示：所有这些模型在低频下无一例外地展现出了 $G' \propto \omega^0, G'' \propto \sqrt{\omega}$ 的反常粘性损耗。** 
这强有力地支持了结论：只要系统具有无序性并处于边缘稳定态（产生玻色峰），无论微观粒子间的相互作用势能如何变化，宏观上必定表现出反常粘性损耗。

---

### 六、 总结与科学意义

本论文通过严谨的推导与精密的实验，在凝聚态物理学和流变学之间搭建了一座桥梁。其重大意义在于：

1.  **微观机制的确立**：首次从微观哈密顿量出发，推导出软凝聚态物质中普遍存在的 $\sqrt{\omega}$ 反常粘性损耗。
2.  **连接了两个重要概念**：证明了流变学中的“反常耗散”与固体物理学中的“玻色峰”实际上是同一种微观物理机制（系统结构的边缘稳定性）在不同动力学极限下的体现。
3.  **指导实际应用**：为复杂流体（如化妆品、食品、生物细胞质等）的工程设计和表征提供了严谨的线性响应理论支撑。现在，科学家可以通过简单的低频粘弹性测量，来反推和评估系统微观结构的 marginal stability。