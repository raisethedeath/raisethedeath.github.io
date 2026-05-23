# Problem 3 (Thermodynamics of rubber band★★★)
A rubber band is described by its internal energy U, entropy S, and length L. Its thermodynamic first law is$dU = T dS + \mathcal{F} dL,$ where $\mathcal{F}$ is the tensile force. Suppose that the rubber band has constant heat capacity at fixed length,
$C_L = \left( \frac{\partial U}{\partial T} \right)_L = C, \quad \text{independent of } T, L,$ and obeys the force law $\mathcal{F} = a T L, \quad a > 0.$ 
(a) Define the Helmholtz free energy $A(T, L) = U - TS.$
Show that its differential and the force law to establish a first order differential equation for $A(T, L)$.
(b) Solving this differential equation to show that
$A(T, L) = A_0(T) + \frac{1}{2} a T L^2,$
where $A_0(T)$ is independent of L.
(c) Using partial derivatives of $A(T, L)$ to compute the entropy and internal energy, both as a function of $T, L$. Show that the internal energy is independent of L.
(d) Using the heat capacity condition, show that, by choosing the proper reference energy, the internal energy is
$U = C T.$
(e) Using results of parts (c) and (d) to set up a differential equation for $A_0(T)$, and solve it, show that
$A_0(T) = -C T \log(\gamma T), \tag{4}$
where $\gamma$ is an unknown constant. At this stage, you have the full expression for $A(T, L)$.
(f) Now using the preceding result to derive the entropy representation of the fundamental thermodynamic relation:
$S(U, L) = C \log U - \frac{1}{2} a L^2 + \gamma'.$
Determine $\gamma'$ in terms of $\gamma$ and C.
(g) Invert this relation to obtain the energy representation
$U(S, L) = U_0 \exp\left[ \frac{S + \frac{1}{2} a L^2}{C} \right].$
Determine the constant $U_0$ in terms of $\gamma$ and C.
(h) Using the preceding result of $U(S, L)$ to verify directly the constant heat capacity and the linear force law which are supplied in the problem. These results confirm that your result of $U(S, L)$ is correct.
(i) Now we have two thermodynamic potentials: $U(S, L)$ and $A(T, L)$. Using Legendre transform to obtain the potential $\Psi(T, \mathcal{F})$, whose natural variables are $T, \mathcal{F}$. Derive its differential.
(j) Suppose the rubber band is stretched rapidly, so that heat exchange with the environment can be neglected. (You must do work to stretch the rubber band!) Then the process is adiabatic, with the system entropy conserved. Using previous results, show that increasing L at fixed S increases U, and hence increases T. Therefore the rubber band becomes warmer upon rapid stretching.
(k) Hold a stretched rubber band still until it equilibrates with its environment at temperature T. Now release it and let it retract rapidly. Since you do not need to do work on the rubber band, and since heat exchange with the environment can be neglected during the rapid retraction, the internal energy of the rubber band may be treated as conserved.
Assuming that the rubber band remains close enough to internal equilibrium during the retraction so that the fundamental relation $S(U, L)$ can still be used, determine how the entropy and temperature of the rubber band change during the retraction.
(l) The expression for the Helmholtz free energy may be decomposed as
$A(T, L) = A_{\text{th}}(T) + A_{\text{conf}}(T, L),$
$A_{\text{th}}(T) = -C T \log(\gamma T), \quad A_{\text{conf}}(T, L) = \frac{1}{2} a T L^2.$
Compute the entropy and internal energy for each part. Show that
$U_{\text{th}} = C T, \quad S_{\text{th}} = C \log(\gamma T) + C,$
$S_{\text{conf}} = -\frac{1}{2} a L^2, \quad U_{\text{conf}} = 0.$
(m) Consider n number of classical harmonic oscillators. Compute its canonical partition function and canonical free energy. Show that it has the form of $A_{\text{th}}(T)$, if we choose $n = C$.
(n) Consider a Gaussian polymer chain. The pdf of its extension L is
$p(L) \sim e^{-a L^2 / 2},$
where a is independent of temperature. Show that its conformational entropy is given by $S_{\text{conf}}$ up to a T-independent constant. Assuming that the energy of the polymer is independent of its conformation, then its free energy is given by $A_{\text{conf}}(T, L)$, up to a term linear in T.
Therefore our model of rubber band may be understood as a combination of a bunch of harmonic oscillators and an athermal polymer chain.

## 习题解答
非常理解您的要求。为了避免任何遗漏和定性讨论带来的模糊性，下面我将为您提供**橡皮筋热力学与统计力学综合问题**的**最高精度、全步骤纯数学推导**的详细解答。每一步均严格基于偏微分方程、热力学基本定律和配分函数积分，绝不跳步。

---

### **(a) 建立 $A(T, L)$ 的一阶偏微分方程**
**定义**：亥姆霍兹自由能 $A(T, L) \equiv U - TS$。
对其两边取全微分，利用乘积法则：
$$dA = dU - T dS - S dT$$
**代入热力学第一定律**：已知 $dU = T dS + \mathcal{F} dL$，代入上式得：
$$dA = (T dS + \mathcal{F} dL) - T dS - S dT = -S dT + \mathcal{F} dL \tag{a1}$$
根据全微分 $dA(T,L) = \left( \frac{\partial A}{\partial T} \right)_L dT + \left( \frac{\partial A}{\partial L} \right)_T dL$ 的系数比对，可以直接提取出：
$$\left( \frac{\partial A}{\partial L} \right)_T = \mathcal{F}$$
**代入状态方程**：已知胡克定律扩展形式 $\mathcal{F} = a T L$，代入即可建立所需的一阶偏微分方程：
$$\left( \frac{\partial A}{\partial L} \right)_T = a T L \tag{a2}$$

---

### **(b) 解偏微分方程求 $A(T, L)$**
对式 (a2) 在恒温（即把 $T$ 视作常数）条件下关于 $L$ 进行积分：
$$A(T, L) = \int a T L \, dL = a T \left( \frac{1}{2} L^2 \right) + A_0(T)$$
$$A(T, L) = \frac{1}{2} a T L^2 + A_0(T) \tag{b1}$$
其中 $A_0(T)$ 是关于 $L$ 积分的常数项，它只能是 $T$ 的函数，与 $L$ 严格无关。

---

### **(c) 计算熵 $S$ 与内能 $U$，并证明 $U$ 独立于 $L$**
根据式 (a1)，可以得到熵 $S$ 为自由能对温度的偏导数：
$$S = -\left( \frac{\partial A}{\partial T} \right)_L$$
将式 (b1) 代入并对 $T$ 严格求导（注意 $L$ 被视为常数）：
$$S(T, L) = -\frac{\partial}{\partial T} \left( \frac{1}{2} a T L^2 + A_0(T) \right) = -\frac{1}{2} a L^2 - A_0'(T) \tag{c1}$$
利用定义 $U = A + TS$，将式 (b1) 和式 (c1) 代入：
$$U(T, L) = \left( \frac{1}{2} a T L^2 + A_0(T) \right) + T \left( -\frac{1}{2} a L^2 - A_0'(T) \right)$$
展开括号，合并同类项：
$$U(T, L) = \frac{1}{2} a T L^2 + A_0(T) - \frac{1}{2} a T L^2 - T A_0'(T) = A_0(T) - T A_0'(T) \tag{c2}$$
**结论**：包含 $L$ 的项 $\pm \frac{1}{2} a T L^2$ 严格对消，$U(T, L)$ 的表达式中仅包含关于 $T$ 的函数，因此证明了**内能 $U$ 与长度 $L$ 完全无关**。

---

### **(d) 使用热容条件求解内能表达式**
已知恒长热容 $C_L = \left( \frac{\partial U}{\partial T} \right)_L = C$ （常数）。
由于从 (c) 已知 $U$ 仅依赖于 $T$，偏导数退化为常微分：
$$\frac{dU}{dT} = C$$
直接对 $T$ 积分：
$$U(T) = C T + U_{\text{ref}}$$
通过选取系统在 $T \to 0$ 时的理想参考态，**设定零点参考能量 $U_{\text{ref}} = 0$**，从而得出：
$$U = C T \tag{d1}$$

---

### **(e) 建立 $A_0(T)$ 的常微分方程并严格求解**
将式 (d1) 代入式 (c2)，建立关于未知函数 $A_0(T)$ 的一阶线性常微分方程：
$$A_0(T) - T A_0'(T) = C T$$
整理为标准形式（两边同除以 $-T$）：
$$A_0'(T) - \frac{1}{T} A_0(T) = -C \tag{e1}$$
求解该方程：计算积分因子 $\mu(T) = \exp\left( \int -\frac{1}{T} dT \right) = \exp(-\ln T) = \frac{1}{T}$。
将方程 (e1) 两边同乘以积分因子 $\frac{1}{T}$：
$$\frac{1}{T} A_0'(T) - \frac{1}{T^2} A_0(T) = -\frac{C}{T}$$
利用乘积求导法则逆向收起左边：
$$\frac{d}{dT} \left( \frac{A_0(T)}{T} \right) = -\frac{C}{T}$$
对 $T$ 积分：
$$\frac{A_0(T)}{T} = -C \ln T + k$$
令任意积分常数 $k \equiv -C \ln \gamma$ （由于 $k$ 任意，我们可以自由定义常数 $\gamma>0$）：
$$\frac{A_0(T)}{T} = -C \ln T - C \ln \gamma = -C \ln(\gamma T)$$
两边同乘 $T$，得到最终解：
$$A_0(T) = -C T \ln(\gamma T) \tag{4}$$

---

### **(f) 导出熵的基本关系式 $S(U, L)$ 并确定 $\gamma'$**
首先，根据 (e) 的结果求 $A_0(T)$ 的一阶导数：
$$A_0'(T) = \frac{d}{dT}[-C T \ln(\gamma T)] = -C \ln(\gamma T) - C T \cdot \frac{1}{\gamma T} \cdot \gamma = -C \ln(\gamma T) - C$$
将其代回 (c) 中的式 (c1)：
$$S(T, L) = -\frac{1}{2} a L^2 - (-C \ln(\gamma T) - C) = C \ln(\gamma T) + C - \frac{1}{2} a L^2$$
现在要将自变量 $T$ 转换为 $U$。由 (d) 得 $T = U/C$，代入上式：
$$S(U, L) = C \ln\left(\gamma \frac{U}{C}\right) + C - \frac{1}{2} a L^2 = C \left[ \ln U + \ln\left(\frac{\gamma}{C}\right) \right] + C - \frac{1}{2} a L^2$$
$$S(U, L) = C \ln U - \frac{1}{2} a L^2 + C \left[ 1 + \ln\left(\frac{\gamma}{C}\right) \right]$$
题目要求形式为 $S(U, L) = C \ln U - \frac{1}{2} a L^2 + \gamma'$，比对常数项可严格定出：
$$\gamma' = C \left[ 1 + \ln\left(\frac{\gamma}{C}\right) \right] \tag{f1}$$

---

### **(g) 反演基本方程求 $U(S, L)$ 并确定 $U_0$**
将 (f) 中的结果按 $U$ 解出：
$$C \ln U = S + \frac{1}{2} a L^2 - \gamma'$$
两边同除以 $C$：
$$\ln U = \frac{S + \frac{1}{2} a L^2}{C} - \frac{\gamma'}{C}$$
两边取自然指数：
$$U(S, L) = \exp\left( -\frac{\gamma'}{C} \right) \cdot \exp\left[ \frac{S + \frac{1}{2} a L^2}{C} \right]$$
对照目标形式 $U(S, L) = U_0 \exp\left[ \frac{S + \frac{1}{2} a L^2}{C} \right]$，可得：
$$U_0 = \exp\left( -\frac{\gamma'}{C} \right)$$
代入式 (f1) 得到的 $\frac{\gamma'}{C} = 1 + \ln\left(\frac{\gamma}{C}\right)$：
$$U_0 = \exp\left( -1 - \ln\left(\frac{\gamma}{C}\right) \right) = e^{-1} \cdot \exp\left(\ln\left(\frac{C}{\gamma}\right)\right) = \frac{C}{e \gamma} \tag{g1}$$

---

### **(h) 从 $U(S, L)$ 直接验证热容和力定律**
基础微分式 $dU = T dS + \mathcal{F} dL$ 意味着在 $S$ 和 $L$ 的表象下：
$$T = \left( \frac{\partial U}{\partial S} \right)_L, \quad \mathcal{F} = \left( \frac{\partial U}{\partial L} \right)_S$$
利用我们在 (g) 求出的 $U(S, L)$ 进行数学求导验证：
1. **温度 $T$ 与热容验证**：
$$T = \frac{\partial}{\partial S} \left\{ U_0 \exp\left[ \frac{S + aL^2/2}{C} \right] \right\} = U_0 \exp\left[ \frac{S + aL^2/2}{C} \right] \cdot \frac{1}{C} = \frac{U}{C}$$
这立刻给出 $U = C T$。因此 $\left(\frac{\partial U}{\partial T}\right)_L = C$ 严格成立。
2. **弹力 $\mathcal{F}$ 验证**：
$$\mathcal{F} = \frac{\partial}{\partial L} \left\{ U_0 \exp\left[ \frac{S + aL^2/2}{C} \right] \right\} = U_0 \exp\left[ \frac{S + aL^2/2}{C} \right] \cdot \frac{\partial}{\partial L}\left(\frac{a L^2}{2C}\right)$$
$$\mathcal{F} = U \cdot \left(\frac{a L}{C}\right)$$
把前面证实的 $U = C T$ 代入：
$$\mathcal{F} = (CT) \left(\frac{a L}{C}\right) = a T L$$
与给定定律完美一致。

---

### **(i) 勒让德变换求 $\Psi(T, \mathcal{F})$ 及其全微分**
为了将自变量从 $(T, L)$ 变为 $(T, \mathcal{F})$，定义勒让德变换（吉布斯自由能类比）：
$$\Psi \equiv A - \mathcal{F} L$$
对其求全微分，并代入式 (a1) $dA = -S dT + \mathcal{F} dL$：
$$d\Psi = dA - \mathcal{F} dL - L d\mathcal{F} = (-S dT + \mathcal{F} dL) - \mathcal{F} dL - L d\mathcal{F}$$
$$d\Psi = -S dT - L d\mathcal{F} \tag{i1}$$
**(严格推导具体的势函数表达式)**：
已知 $A(T, L) = -C T \ln(\gamma T) + \frac{1}{2} a T L^2$，状态方程 $\mathcal{F} = a T L \implies L = \frac{\mathcal{F}}{aT}$。
代入 $\Psi = A - \mathcal{F}L$：
$$\Psi(T, \mathcal{F}) = \left( -C T \ln(\gamma T) + \frac{1}{2} a T \left( \frac{\mathcal{F}}{aT} \right)^2 \right) - \mathcal{F} \left( \frac{\mathcal{F}}{aT} \right)$$
$$\Psi(T, \mathcal{F}) = -C T \ln(\gamma T) + \frac{\mathcal{F}^2}{2aT} - \frac{\mathcal{F}^2}{aT} = -C T \ln(\gamma T) - \frac{\mathcal{F}^2}{2aT}$$
显然对 $\mathcal{F}$ 偏导 $\left(\frac{\partial \Psi}{\partial \mathcal{F}}\right)_T = -\frac{\mathcal{F}}{aT} = -L$，满足全微分关系。

---

### **(j) 快速拉伸的物理与数学分析**
“快速拉伸并忽略热交换”意味着系统没有吸放热（绝热 $dQ=0$）且题设指明“系统熵守恒”，因此这是一个**等熵过程**（$dS = 0$）。
我们要分析 $T$ 随 $L$ 的变化关系。由于 $U = C T$，求 $T$ 的全微分：
$$C dT = dU = T \underbrace{dS}_{=0} + \mathcal{F} dL \implies C dT = \mathcal{F} dL$$
代入 $\mathcal{F} = a T L$：
$$dT = \frac{a T}{C} L \, dL \tag{j1}$$
在拉伸过程中，$L > 0$ 且拉伸意味着 $dL > 0$。同时已知绝对温度 $T > 0$、常数 $a > 0$ 和热容 $C > 0$。
所以方程右侧所有项均为正数：
$$\frac{dT}{dL} = \frac{a T L}{C} > 0$$
**数学结论**：拉伸时温度随长度的导数严格为正，因此 $L$ 增加必然导致 $T$ 增加。橡皮筋快速拉伸会发热。

---

### **(k) 快速回缩的物理与数学分析**
“无需做功”意味着 $dW = 0$（由于没有外部反抗力，类似于气体的向真空自由膨胀）。
“忽略热交换”意味着 $dQ = 0$。
由热力学第一定律：$dU = dQ + dW = 0 + 0 = 0$。
因此**内能严格守恒**（$dU = 0$）。
1. **温度的变化**：由于 $U = C T$，内能守恒立即推导出 $dT = 0$。**温度在整个回缩过程中严格保持不变**。
2. **熵的变化**：利用求出的熵的状态方程全微分公式：
$$dS = \left( \frac{\partial S}{\partial U} \right)_L dU + \left( \frac{\partial S}{\partial L} \right)_U dL$$
由于 $dU = 0$，上式第一项为0。从公式 $S(U, L) = C \ln U - \frac{1}{2} a L^2 + \gamma'$ 可以精确求出 $\left( \frac{\partial S}{\partial L} \right)_U = -a L$。代入得：
$$dS = -a L \, dL$$
在回缩过程中，长度是缩短的，即 $dL < 0$；而本身 $L > 0, a > 0$。
因此 $-a L \, dL > 0$，意味着 $dS > 0$。
**结论**：在自发快速回缩过程中，温度不变，系统的熵严密且单调地**增加**（反映了孤立系统自发不可逆过程的物理本性）。

---

### **(l) 分解自由能并分别计算各个部分**
定义：$A(T, L) = A_{\text{th}}(T) + A_{\text{conf}}(T, L)$
其中 $A_{\text{th}}(T) = -C T \ln(\gamma T)$, $A_{\text{conf}}(T, L) = \frac{1}{2} a T L^2$。
基于独立偏导性质分别计算：
1. **热学部分 (th)**：
$$S_{\text{th}} = -\frac{\partial A_{\text{th}}}{\partial T} = -\frac{d}{dT}[-C T \ln(\gamma T)] = C \ln(\gamma T) + C \tag{l1}$$
$$U_{\text{th}} = A_{\text{th}} + T S_{\text{th}} = -C T \ln(\gamma T) + T \left[ C \ln(\gamma T) + C \right] = C T \tag{l2}$$
2. **构象部分 (conf)**：
$$S_{\text{conf}} = -\left( \frac{\partial A_{\text{conf}}}{\partial T} \right)_L = -\frac{\partial}{\partial T}\left( \frac{1}{2} a T L^2 \right) = -\frac{1}{2} a L^2 \tag{l3}$$
$$U_{\text{conf}} = A_{\text{conf}} + T S_{\text{conf}} = \frac{1}{2} a T L^2 + T \left( -\frac{1}{2} a L^2 \right) = 0 \tag{l4}$$
严密论证了各组件形式正是题目所给结果。

---

### **(m) 基于经典谐振子的配分函数计算 (微观机制 1)**
考虑 $n$ 个独立的一维经典谐振子系统（质量 $m$，弹簧常数 $k$），系统哈密顿量为：
$$H(p, q) = \sum_{i=1}^n \left( \frac{p_i^2}{2m} + \frac{1}{2} \kappa q_i^2 \right)$$
（令玻尔兹曼常数 $k_B=1$，所以 $\beta = 1/T$）单个谐振子的正则配分函数为整个相空间的严格积分（包含普朗克常数 $h$ 作为相空间单位）：
$$Z_1 = \frac{1}{h} \int_{-\infty}^{\infty} e^{-\frac{p^2}{2mT}} dp \int_{-\infty}^{\infty} e^{-\frac{\kappa q^2}{2T}} dq$$
利用高斯积分公式 $\int e^{-cx^2} dx = \sqrt{\pi/c}$：
$$Z_1 = \frac{1}{h} \sqrt{2\pi m T} \sqrt{\frac{2\pi T}{\kappa}} = \frac{2\pi T}{h} \sqrt{\frac{m}{\kappa}} = \frac{T}{\hbar \omega} \quad (\text{其中 } \omega = \sqrt{\kappa/m})$$
系统总配分函数为 $Z_n = (Z_1)^n = \left( \frac{T}{\hbar \omega} \right)^n$。
正则自由能 $A_{\text{osc}} = -T \ln Z_n$：
$$A_{\text{osc}} = -T \ln\left( \left(\frac{1}{\hbar\omega}\right)^n T^n \right) = -n T \ln\left( \frac{T}{\hbar \omega} \right)$$
与宏观热学部分 $A_{\text{th}}(T) = -C T \ln(\gamma T)$ 进行逐项比对发现：
只要令 **$n = C$**（振子数等于热容常数）且 **$\gamma = 1/(\hbar \omega)$**（常数对应匹配），两者在数学形式和物理意义上严格同构等价。

---

### **(n) 基于高斯高分子链的统计计算 (微观机制 2)**
设一维高斯高分子链的末端距为 $L$。其概率密度分布（PDF）为正态分布的形式：
$$P(L) = \sqrt{\frac{a}{2\pi}} e^{-\frac{a L^2}{2}}$$
从微观态数 $\Omega(L)$ 到概率的联系为 $P(L) = \frac{\Omega(L)}{\Omega_{\text{tot}}}$，所以微观态数为：
$$\Omega(L) = \Omega_{\text{tot}} \sqrt{\frac{a}{2\pi}} e^{-\frac{a L^2}{2}}$$
由玻尔兹曼熵公式推导纯构象熵：
$$S_{\text{conf}} = \ln \Omega(L) = \ln\left( \Omega_{\text{tot}} \sqrt{\frac{a}{2\pi}} \right) - \frac{1}{2} a L^2$$
前一项为仅与整体链结构有关的绝对常数 $S_0$，所以 $S_{\text{conf}} = -\frac{1}{2} a L^2 + S_0$。
这完美重现了 (l) 中得到的 $-\frac{1}{2} a L^2$（相差的常数在偏导后自然消去）。
题目假定高分子内部势能不随 $L$ 伸展改变，即 $U_{\text{conf}} = 0$。则其自由能为：
$$A_{\text{conf}}(T, L) = U_{\text{conf}} - T S_{\text{conf}} = 0 - T\left( -\frac{1}{2} a L^2 + S_0 \right) = \frac{1}{2} a T L^2 - S_0 T$$
该结果与 (l) 中 $A_{\text{conf}} = \frac{1}{2} a T L^2$ 完全一致（仅相差一个 $T$ 的线性组合项，该项等效于参考态基线的平移）。

**系统物理总结**：本题目完整并精确地证明了，宏观橡皮筋的热力学特征完全可以视作两部分的微观物理叠加：一部分提供定热容的“原子晶格振动”（经典谐振子系统），另一部分提供具有熵弹力的“分子链构象改变”（高斯高分子系统）。