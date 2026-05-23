


这是一道经典的二阶 RC 放电电路瞬态分析题。我们可以通过建立节点微分方程来求解。

### 1. 变量定义与建立方程
设 $t$ 时刻，中间节点的电势（即第一个电容 $V_1$ 上的电压）为 $v_1(t)$，A 点的电势（即第二个电容 $V_2$ 上的电压）为 $v_2(t)$。
电路中所有元件的参考地为底端连线。

在 $t>0$ （开关合上）后，左侧电阻接地，对两个节点分别应用基尔霍夫电流定律（KCL）：

*   **对于节点 1 ($v_1$)**，流出该节点的电流之和为零：
    $$ C \frac{dv_1}{dt} + \frac{v_1 - 0}{R} + \frac{v_1 - v_2}{R} = 0 $$
    化简得：
    $$ RC \frac{dv_1}{dt} + 2v_1 - v_2 = 0 \quad \text{--- (式 1)} $$

*   **对于节点 2 (即 A 点，$v_2$)**，流出该节点的电流之和为零：
    $$ C \frac{dv_2}{dt} + \frac{v_2 - v_1}{R} = 0 $$
    化简得：
    $$ RC \frac{dv_2}{dt} + v_2 - v_1 = 0 \quad \text{--- (式 2)} $$

### 2. 转换为二阶常微分方程
我们的目标是求 $v_2(t)$。由 (式 2) 可以得到 $v_1$ 的表达式：
$$ v_1 = RC \frac{dv_2}{dt} + v_2 $$
将其代入 (式 1) 中消去 $v_1$：
$$ RC \frac{d}{dt} \left( RC \frac{dv_2}{dt} + v_2 \right) + 2 \left( RC \frac{dv_2}{dt} + v_2 \right) - v_2 = 0 $$
展开并合并同类项，得到一个关于 $v_2$ 的二阶常系数线性齐次微分方程：
$$ (RC)^2 \frac{d^2 v_2}{dt^2} + 3RC \frac{dv_2}{dt} + v_2 = 0 $$

### 3. 求解微分方程的通解
写出对应的特征方程（设特征根为 $\lambda$）：
$$ (RC)^2 \lambda^2 + 3RC \lambda + 1 = 0 $$
利用求根公式求得特征根：
$$ \lambda_{1,2} = \frac{-3RC \pm \sqrt{(3RC)^2 - 4(RC)^2(1)}}{2(RC)^2} = \frac{-3 \pm \sqrt{5}}{2RC} $$
因此，$v_2(t)$ 的通解形式为：
$$ v_2(t) = A e^{\lambda_1 t} + B e^{\lambda_2 t} $$
其中 $\lambda_1 = \frac{-3 + \sqrt{5}}{2RC}$，$\lambda_2 = \frac{-3 - \sqrt{5}}{2RC}$，$A$ 和 $B$ 是由初始条件决定的待定常数。

### 4. 代入初始条件求解待定系数
题目指出“电容被预先充电至电势 $V_0$”，这意味着在 $t=0$ 时，电路达到了直流稳态，两电容上的初始电压均为 $V_0$。
即初始条件为：
$$ v_1(0) = V_0 $$
$$ v_2(0) = V_0 $$

**条件一**：将 $t=0$ 代入通解：
$$ v_2(0) = A + B = V_0 \quad \text{--- (式 3)} $$

**条件二**：为了利用 $v_1(0)$，我们考察 $t=0$ 时 $v_2(t)$ 的导数。将初始状态代入之前的 (式 2)：
$$ RC \frac{dv_2}{dt}\Big|_{t=0} = v_1(0) - v_2(0) = V_0 - V_0 = 0 $$
所以初始变化率为 $0$：
$$ v'_2(0) = A \lambda_1 + B \lambda_2 = 0 \quad \text{--- (式 4)} $$

联立 (式 3) 和 (式 4) 求解 $A$ 和 $B$：
由式 4 得 $B = -A \frac{\lambda_1}{\lambda_2}$，代入式 3 得：
$$ A \left( 1 - \frac{\lambda_1}{\lambda_2} \right) = V_0 \implies A = V_0 \frac{\lambda_2}{\lambda_2 - \lambda_1} $$
同理可得：
$$ B = V_0 \frac{-\lambda_1}{\lambda_2 - \lambda_1} $$

分别计算具体数值：
$$ \lambda_2 - \lambda_1 = \frac{-3 - \sqrt{5}}{2RC} - \frac{-3 + \sqrt{5}}{2RC} = -\frac{\sqrt{5}}{RC} $$
$$ A = V_0 \frac{\frac{-3 - \sqrt{5}}{2RC}}{-\frac{\sqrt{5}}{RC}} = V_0 \frac{3 + \sqrt{5}}{2\sqrt{5}} = V_0 \left( \frac{5 + 3\sqrt{5}}{10} \right) $$
$$ B = V_0 \frac{-\frac{-3 + \sqrt{5}}{2RC}}{-\frac{\sqrt{5}}{RC}} = V_0 \frac{-3 + \sqrt{5}}{-2\sqrt{5}} = V_0 \left( \frac{5 - 3\sqrt{5}}{10} \right) $$

### 5. 最终结论
将求得的常数代入通解，即可得到此后 $t$ 时刻 A 点的电势（即 $v_2(t)$）的表达式：

$$ V_A(t) = V_0 \left[ \left( \frac{5 + 3\sqrt{5}}{10} \right) e^{\frac{-3 + \sqrt{5}}{2RC} t} + \left( \frac{5 - 3\sqrt{5}}{10} \right) e^{\frac{-3 - \sqrt{5}}{2RC} t} \right] $$

