# Problem 3 (Exact results for the two-dimensional Ising model).

Consider the two-dimensional Ising model on a square lattice at zero external field,

$$
H = -J \sum_{\langle ij \rangle} \sigma_i \sigma_j, \quad \sigma_i = \pm 1. \tag{22}
$$

Let

$$
K = \beta J.
$$

Onsager’s exact solution gives the free energy per spin in the form

$$
-\beta f = \frac{1}{2} \log (2 \sinh 2K) + \frac{1}{2\pi} \int_0^\pi \log \left[ \cosh 2K \coth 2K + \sqrt{\cosh^2 2K \coth^2 2K - 1} \right] d\theta. \tag{23}
$$

Equivalently, the singular part of its temperature derivatives is controlled by the parameter

$$
\kappa = \frac{2 \sinh(2K)}{\cosh^2(2K)} \tag{24}
$$

and by elliptic-integral factors containing

$$
\int_0^\pi \frac{d\theta}{\sqrt{1 - \kappa^2 \sin^2 \theta}}. \tag{25}
$$

---

(a) Onsager’s solution shows that the critical temperature is reached when

$$
\kappa = 1.
$$

Show that this condition is equivalent to

$$
\sinh(2\beta_c J) = 1.
$$

Then derive

$$
T_c = \frac{2J}{\log(1 + \sqrt{2})}.
$$

(b) The possible singularity of the elliptic integral comes from the neighborhood of $\theta = \pi/2$. Let

$$
q = \theta - \frac{\pi}{2}.
$$

Show that, for small $q$,

$$
1 - \kappa^2 \sin^2 \theta \simeq (1 - \kappa^2) + \kappa^2 q^2.
$$

(c) Use the result of the previous part to show that, near criticality, the singular part contains an integral of the form

$$
\int \frac{dq}{\sqrt{(1 - \kappa^2) + q^2}}.
$$

Conclude that the heat capacity has a logarithmic divergence as $T \to T_c$.

(d) Yang’s exact result for the spontaneous magnetization is

$$
m(T) = \left[ 1 - \sinh^{-4} \left( \frac{2J}{T} \right) \right]^{1/8}, \quad T < T_c.
$$

Show that this formula gives $m(T_c) = 0$, using the critical-temperature condition found above.

(e) Show that

$$
\lim_{T \to 0} m(T) = 1.
$$

Explain the physical meaning of this result.

(f) Let

$$
\tau = \frac{T_c - T}{T_c}.
$$

Expand Yang’s formula near $T_c$, and show that

$$
m(T) \sim \tau^{1/8}, \quad T \to T_c^-
$$

Compare this with the Landau prediction $m \sim \tau^{1/2}$.

## Solution
以下是关于**问题 3（二维伊辛模型的精确解结果）**的完整、详尽且严密的数学推导与物理解答。

---

### **(a) 临界温度 $T_c$ 的推导**

昂萨格（Onsager）的精确解指出，当奇异性参数满足以下条件时，系统达到临界温度：
$$ \kappa = 1 $$
其中 $\kappa$ 定义为：
$$ \kappa = \frac{2 \sinh(2K)}{\cosh^2(2K)} \tag{3.1} $$

1. **证明 $\kappa = 1 \iff \sinh(2\beta_c J) = 1$**：
   设 $x = \sinh(2K_c)$，其中 $K_c = \beta_c J$。根据双曲函数恒等式 $\cosh^2(2K) = 1 + \sinh^2(2K)$，我们可以将分母写为：
   $$ \cosh^2(2K_c) = 1 + x^2 $$
   将此代入 $\kappa = 1$ 的条件中：
   $$ \frac{2x}{1 + x^2} = 1 \implies 1 + x^2 = 2x \implies x^2 - 2x + 1 = 0 \implies (x - 1)^2 = 0 $$
   解得唯一的物理解：
   $$ x = 1 \implies \sinh(2\beta_c J) = 1 \tag{3.2} $$
   得证。

2. **导出 $T_c$ 的显式表达式**：
   根据双曲正弦函数的定义，式 (3.2) 可以写作：
   $$ \frac{e^{2\beta_c J} - e^{-2\beta_c J}}{2} = 1 \implies e^{2\beta_c J} - e^{-2\beta_c J} = 2 $$
   令 $y = e^{2\beta_c J}$。由于 $\beta_c J > 0$，因此必须有 $y > 1$。方程变为：
   $$ y - \frac{1}{y} = 2 \implies y^2 - 2y - 1 = 0 \tag{3.3} $$
   利用求根公式解此二次方程：
   $$ y = \frac{2 \pm \sqrt{4 - 4(1)(-1)}}{2} = \frac{2 \pm \sqrt{8}}{2} = 1 \pm \sqrt{2} \tag{3.4} $$
   由于要求 $y > 1$，我们舍去负根，选取正根：
   $$ y = e^{2\beta_c J} = 1 + \sqrt{2} \tag{3.5} $$
   两边取自然对数：
   $$ 2\beta_c J = \log(1 + \sqrt{2}) \tag{3.6} $$
   代入 $\beta_c = \frac{1}{T_c}$：
   $$ \frac{2J}{T_c} = \log(1 + \sqrt{2}) \implies T_c = \frac{2J}{\log(1 + \sqrt{2})} \tag{3.7} $$
   得证。

---

### **(b) 临界积分项的小 $q$ 展开**

定义变量 $q = \theta - \frac{\pi}{2}$，从而有 $\theta = \frac{\pi}{2} + q$。

当 $q$ 很小时，我们对 $\sin^2\theta$ 进行泰勒展开：
$$ \sin\theta = \sin\left(\frac{\pi}{2} + q\right) = \cos q $$
利用余弦函数的小角近似 $\cos q \approx 1 - \frac{q^2}{2}$：
$$ \sin^2\theta = \cos^2 q \approx \left( 1 - \frac{q^2}{2} \right)^2 \approx 1 - q^2 + O(q^4) \tag{3.8} $$
将此展开式代入被积项的分母：
$$ 1 - \kappa^2 \sin^2\theta \approx 1 - \kappa^2 (1 - q^2) = (1 - \kappa^2) + \kappa^2 q^2 \tag{3.9} $$
得证。

---

### **(c) 证明比热具有对数发散**

1. **导出临界附近的积分形式**：
   在临界温度附近（即 $T \to T_c$ 时，$\kappa \to 1$），椭圆积分（式 25）的主要奇异性贡献来自于分母趋于零的邻域，即 $\theta \approx \pi/2$ （即 $q \approx 0$）的邻域。
   使用式 (3.9) 的展开结果，该椭圆积分的奇异部分可以近似为：
   $$ \int_0^\pi \frac{d\theta}{\sqrt{1 - \kappa^2 \sin^2\theta}} \approx \int_{-\Lambda}^{\Lambda} \frac{dq}{\sqrt{(1 - \kappa^2) + \kappa^2 q^2}} \tag{3.10} $$
   其中 $\Lambda$ 是一个截断常数。由于在临界附近 $\kappa \approx 1$，我们可以将分母根号中自变量 $q^2$ 的系数近似为 $\kappa^2 \approx 1$，从而该积分的奇异部分包含如下形式：
   $$ I_{\text{sing}} \propto \int \frac{dq}{\sqrt{(1 - \kappa^2) + q^2}} \tag{3.11} $$

2. **证明对数发散**：
   引入常数 $a^2 = 1 - \kappa^2$。积分 (3.11) 具有以下标准形式：
   $$ \int \frac{dq}{\sqrt{a^2 + q^2}} = \log\left( q + \sqrt{a^2 + q^2} \right) \tag{3.12} $$
   在对称截断 $[-\Lambda, \Lambda]$ 内求值：
   $$ \int_{-\Lambda}^{\Lambda} \frac{dq}{\sqrt{a^2 + q^2}} = \log\left( \Lambda + \sqrt{a^2 + \Lambda^2} \right) - \log\left( -\Lambda + \sqrt{a^2 + \Lambda^2} \right) \tag{3.13} $$
   当系统极度接近临界点时，$a \to 0$。我们对式 (3.13) 取 $a \ll \Lambda$ 极限：
   - 第一项：$\log\left( \Lambda + \sqrt{a^2 + \Lambda^2} \right) \approx \log(2\Lambda) = \text{常数}$
   - 第二项：由于 $\sqrt{a^2 + \Lambda^2} \approx \Lambda \left( 1 + \frac{a^2}{2\Lambda^2} \right) = \Lambda + \frac{a^2}{2\Lambda}$，因此：
     $$ -\Lambda + \sqrt{a^2 + \Lambda^2} \approx \frac{a^2}{2\Lambda} $$
     其对数为 $\log\left( \frac{a^2}{2\Lambda} \right) = 2\log|a| - \log(2\Lambda)$。
   将这两项代回积分：
   $$ \int_{-\Lambda}^{\Lambda} \frac{dq}{\sqrt{a^2 + q^2}} \approx -2\log|a| + \text{常数} \tag{3.14} $$

3. **与温度变化联系**：
   我们需要求出 $a^2 = 1 - \kappa^2$ 关于 $T - T_c$ 的依赖关系。
   已知 $\kappa(s) = \frac{2s}{1+s^2}$，其中 $s = \sinh(2K)$。在临界点 $s_c = 1$。
   我们对 $\kappa(s)$ 在 $s=1$ 处作泰勒展开。令 $s = 1 + \delta s$：
   $$ \kappa(s) = \frac{2(1 + \delta s)}{1 + (1 + \delta s)^2} = \frac{2 + 2\delta s}{2 + 2\delta s + \delta s^2} = 1 - \frac{\delta s^2}{2(2 + 2\delta s + \delta s^2)} \approx 1 - \frac{\delta s^2}{4} \tag{3.15} $$
   由于 $\delta s = \sinh(2K) - \sinh(2K_c) \propto (T - T_c)$，我们可以得出：
   $$ 1 - \kappa \approx \frac{\delta s^2}{4} \propto (T - T_c)^2 \tag{3.16} $$
   因而：
   $$ a^2 = 1 - \kappa^2 = (1 - \kappa)(1 + \kappa) \approx 2(1 - \kappa) \propto (T - T_c)^2 \tag{3.17} $$
   所以 $|a| \propto |T - T_c|$。
   代入式 (3.14) 可知，该积分的奇异贡献为：
   $$ I_{\text{sing}} \propto -\log|a| \propto -\log|T - T_c| \tag{3.18} $$
   
   在昂萨格精确解中，比热（即自由能对温度的二阶导数）正比于第一类完全椭圆积分 $K(\kappa)$，而该积分的渐近奇异性正是由 $I_{\text{sing}}$ 控制。因此证明了：**在 $T \to T_c$ 时，二维伊辛模型的比热具有对数发散性质**：
   $$ C_V \propto -\log|T - T_c| \tag{3.19} $$

---

### **(d) 验证在 $T = T_c$ 时自发磁化强度为 0**

杨振宁（Yang）给出的自发磁化强度精确公式为：
$$ m(T) = \left[ 1 - \sinh^{-4} \left( \frac{2J}{T} \right) \right]^{1/8}, \quad T < T_c \tag{3.20} $$

在临界温度下，有 $\frac{2J}{T_c} = 2\beta_c J$。
根据 (a) 中得到的临界条件（式 3.2）：
$$ \sinh\left( \frac{2J}{T_c} \right) = \sinh(2\beta_c J) = 1 \tag{3.21} $$
将此条件直接代入杨氏公式中：
$$ m(T_c) = \left[ 1 - (1)^{-4} \right]^{1/8} = \left[ 1 - 1 \right]^{1/8} = 0 \tag{3.22} $$
得证。

---

### **(e) 证明 $\lim_{T \to 0} m(T) = 1$ 及其物理意义**

1. **数学证明**：
   当 $T \to 0$ 时，自变量 $\frac{2J}{T} \to \infty$。
   根据双曲正弦函数的定义，当 $x \to \infty$ 时：
   $$ \sinh(x) = \frac{e^x - e^{-x}}{2} \approx \frac{1}{2} e^x \to \infty \tag{3.23} $$
   因此，它的负四次方趋于零：
   $$ \lim_{T \to 0} \sinh^{-4} \left( \frac{2J}{T} \right) = 0 \tag{3.24} $$
   代入杨氏公式求极限：
   $$ \lim_{T \to 0} m(T) = \left[ 1 - 0 \right]^{1/8} = 1 \tag{3.25} $$
   得证。

2. **物理意义**：
   - 在绝对零度 $T = 0$ 处，系统没有任何热涨落（熵效应完全消失）。
   - 系统的状态完全由哈密顿量控制，系统必须处于自旋完全对齐的**基态（铁磁基态）**。
   - 所有的自旋都指向同一个方向（向上或向下），因此平均每个自旋的自发磁化强度达到了最大理论极限值 $1$（即完全的长程铁磁有序）。

---

### **(f) 临界行为展开与 Landau 理论的对比**

定义简正温度为 $\tau = \frac{T_c - T}{T_c}$，从而有 $T = T_c(1 - \tau)$。在临界点附近，$\tau \to 0^+$。

1. **泰勒展开**：
   我们首先将自变量 $x \equiv \frac{2J}{T}$ 关于 $\tau$ 展开：
   $$ x = \frac{2J}{T_c (1 - \tau)} = x_c (1 - \tau)^{-1} \approx x_c (1 + \tau) \tag{3.26} $$
   其中定义 $x_c \equiv \frac{2J}{T_c}$，满足 $\sinh(x_c) = 1$。
   定义辅助函数 $f(x) \equiv 1 - \sinh^{-4}(x)$。我们在 $x_c$ 处对其进行一阶泰勒展开：
   $$ f(x) \approx f(x_c) + f'(x_c)(x - x_c) \tag{3.27} $$
   - 已知 $f(x_c) = 0$。
   - 对 $f(x)$ 求导：
     $$ f'(x) = -(-4) \sinh^{-5}(x) \cosh(x) = 4 \sinh^{-5}(x) \cosh(x) \tag{3.28} $$
     在 $x_c$ 处，由于 $\sinh(x_c) = 1$，且双曲恒等式给出 $\cosh(x_c) = \sqrt{1 + \sinh^2(x_c)} = \sqrt{2}$，代入导数：
     $$ f'(x_c) = 4 (1)^{-5} \sqrt{2} = 4\sqrt{2} \tag{3.29} $$
   代回一阶展开式中，并利用 $x - x_c \approx x_c \tau$（由式 3.26 得出）：
   $$ f(x) \approx 4\sqrt{2} (x - x_c) \approx 4\sqrt{2} x_c \tau \tag{3.30} $$

2. **导出临界指数**：
   将式 (3.30) 代回自发磁化强度公式：
   $$ m(T) = [f(x)]^{1/8} \approx \left( 4\sqrt{2} x_c \tau \right)^{1/8} = \left( 4\sqrt{2} x_c \right)^{1/8} \tau^{1/8} \tag{3.31} $$
   因此，当 $T \to T_c^-$ 时，我们证得：
   $$ m(T) \sim \tau^{1/8} \tag{3.32} $$

3. **与 Landau 理论预测的对比**：
   - **Landau 理论（平均场理论）预测**：磁化强度的临界行为为 $m \sim \tau^{1/2}$，对应的临界指数为 $\beta_{\text{MF}} = 1/2 = 0.5$。
   - **精确解结果**：Onsager-Yang 的精确解给出的临界指数为 $\beta = 1/8 = 0.125$。
   - **物理对比分析**：
     - 精确解的指数 $\beta = 0.125$ 明显小于平均场预测的 $0.5$。这意味着在临界点附近，**真实的自发磁化强度随温度上升而下降的速度比平均场理论预测的要快得多（曲线表现得更陡峭）**。
     - 这一巨大的偏离表明了**热涨落在低维（二维）系统中的关键作用**。平均场（Landau）理论完全忽略了局域的统计涨落，而在二维空间中，强烈的局域涨落极易破坏铁磁有序，导致系统在接近 $T_c$ 时磁性迅速瓦解，表现出更小的临界指数 $\beta$。