# Problem 4.7 (A useful change of variables★★★)
_recitation#4_
Let $Z = Z(X,Y)$, and write
$dZ = A dX + B dY,$
so that
$A = Z_X, \quad B = Z_Y.$
Show that the differential of A can be written as (assuming $Z_{YY} \neq 0$)
$dA = \left( Z_{XX} - \frac{Z_{XY}^2}{Z_{YY}} \right) dX + \frac{Z_{XY}}{Z_{YY}} dB.$
Therefore establish
$\left( \frac{\partial A}{\partial X} \right)_B = Z_{XX} - \frac{Z_{XY}^2}{Z_{YY}}, \quad \left( \frac{\partial A}{\partial B} \right)_X = \frac{Z_{XY}}{Z_{YY}}. \tag{4.7.11}$
Alternatively we also have
$\left( \frac{\partial Z_X}{\partial X} \right)_{Z_Y} = Z_{XX} - \frac{Z_{XY}^2}{Z_{YY}}, \quad \left( \frac{\partial Z_X}{\partial Z_Y} \right)_X = \frac{Z_{XY}}{Z_{YY}}. \tag{4.7.12}$

## Solution
以下是针对**问题 4.7（一个有用的变量代换）**的完整中文解答：

---
### **证明与推导过程**

**1. 求出 $dA$ 和 $dB$ 的全微分**

已知 $Z = Z(X,Y)$，并且有全微分形式：
$$dZ = A dX + B dY$$
从全微分的定义可知，$A$ 和 $B$ 分别是对 $X$ 和 $Y$ 的偏导数：
$$A = \left( \frac{\partial Z}{\partial X} \right)_Y = Z_X$$
$$B = \left( \frac{\partial Z}{\partial Y} \right)_X = Z_Y$$

由于 $A = Z_X(X, Y)$ 和 $B = Z_Y(X, Y)$ 也是关于 $X$ 和 $Y$ 的函数，我们可以分别写出它们的全微分 $dA$ 和 $dB$：
$$dA = \left( \frac{\partial Z_X}{\partial X} \right)_Y dX + \left( \frac{\partial Z_X}{\partial Y} \right)_X dY = Z_{XX} dX + Z_{XY} dY \tag{1}$$
$$dB = \left( \frac{\partial Z_Y}{\partial X} \right)_Y dX + \left( \frac{\partial Z_Y}{\partial Y} \right)_X dY = Z_{YX} dX + Z_{YY} dY \tag{2}$$

根据克莱罗定理（Clairaut's theorem），对于性质良好的函数，混合偏导数相等，即 $Z_{XY} = Z_{YX}$。因此式 (2) 可以写为：
$$dB = Z_{XY} dX + Z_{YY} dY \tag{3}$$

**2. 进行变量代换（将自变量由 $(X,Y)$ 变为 $(X,B)$）**

题目要求我们将 $dA$ 表示为 $dX$ 和 $dB$ 的线性组合。这意味着我们要消去全微分表达式中的 $dY$。
由假设前提 $Z_{YY} \neq 0$，我们可以从式 (3) 中解出 $dY$：
$$Z_{YY} dY = dB - Z_{XY} dX$$
$$dY = \frac{1}{Z_{YY}} dB - \frac{Z_{XY}}{Z_{YY}} dX \tag{4}$$

将解出的 $dY$（式 4）代入 $dA$ 的全微分式（式 1）中：
$$dA = Z_{XX} dX + Z_{XY} \left( \frac{1}{Z_{YY}} dB - \frac{Z_{XY}}{Z_{YY}} dX \right)$$

将同类项合并，把包含 $dX$ 和 $dB$ 的项分别提取出来：
$$dA = Z_{XX} dX - \frac{Z_{XY}^2}{Z_{YY}} dX + \frac{Z_{XY}}{Z_{YY}} dB$$
$$dA = \left( Z_{XX} - \frac{Z_{XY}^2}{Z_{YY}} \right) dX + \frac{Z_{XY}}{Z_{YY}} dB \tag{5}$$
至此，我们完成了题目要求的第一步证明。

**3. 确立偏导数关系式 (4.7.11) 和 (4.7.12)**

由于我们将 $A$ 看作是关于新独立变量 $X$ 和 $B$ 的函数，即 $A = A(X, B)$，它的全微分根据定义应当是：
$$dA = \left( \frac{\partial A}{\partial X} \right)_B dX + \left( \frac{\partial A}{\partial B} \right)_X dB \tag{6}$$

对比式 (5) 和式 (6) 中 $dX$ 和 $dB$ 前面的系数，我们可以直接得出：
$$\left( \frac{\partial A}{\partial X} \right)_B = Z_{XX} - \frac{Z_{XY}^2}{Z_{YY}}$$
$$\left( \frac{\partial A}{\partial B} \right)_X = \frac{Z_{XY}}{Z_{YY}}$$
这就建立了题目要求证明的公式 (4.7.11)。

最后，我们将 $A$ 和 $B$ 还原为其原本的记号 $A = Z_X$ 以及 $B = Z_Y$，直接代入式 (4.7.11) 中即可得到另一种表达形式：
$$\left( \frac{\partial Z_X}{\partial X} \right)_{Z_Y} = Z_{XX} - \frac{Z_{XY}^2}{Z_{YY}}$$
$$\left( \frac{\partial Z_X}{\partial Z_Y} \right)_X = \frac{Z_{XY}}{Z_{YY}}$$
这就确立了公式 (4.7.12)。

### **结论**
本题通过简单的全微分操作与变量替换（从原自变量 $(X,Y)$ 转换到 $(X,B)$），巧妙地建立了在约束条件下（如保持偏导数 $B$ 不变）的交叉偏导数表达式。这种勒让德变换（Legendre Transformation）衍生的微积分技巧在热力学中极为常用（例如在自由能、焓之间转换或推导麦克斯韦关系时）。