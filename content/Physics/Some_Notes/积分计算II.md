$$
\oint_{|z|=1}dz\ln(-z)
$$
$$
\nabla^2\phi=\kappa^2\phi
$$
$$
\int \frac{tdt}{\sqrt{A+Bt}}
$$
$$
N=\int d\tau'r'\times(j\times B)
$$


这是一个非常经典的积分，通常出现在电动力学或静磁学中（比如计算无限长圆柱面电流、旋转带电圆筒或线圈的磁场）。

整个表达式中，外层的 $s$ 积分是相对简单的，真正的核心难点在于**内层的对 $\phi$ 的积分**。我们将内层积分提取出来并记为 $I(s, a)$：
$$ I(s, a) = \int_0^{2\pi} \frac{s - a \cos\phi}{s^2 + a^2 - 2sa \cos\phi} d\phi $$

这个积分的结果会因为 $s > a$ 还是 $s < a$ 而产生本质的不同。下面我们如你所求，分别用**留数定理、万能代换、参数求导、级数展开**这四种方法来攻克这个内层积分。

### 方法一：留数定理 (Residue Theorem)

引入复变量 $z = e^{i\phi}$。当 $\phi$ 从 $0$ 变到 $2\pi$ 时，$z$ 沿着复平面上的单位圆 $|z|=1$ 逆时针绕行一周。
根据欧拉公式，有 $\cos\phi = \frac{z + z^{-1}}{2}$，且 $d\phi = \frac{dz}{iz}$。将这些代入原积分：
$$ I = \oint_{|z|=1} \frac{s - \frac{a}{2}(z + z^{-1})}{s^2 + a^2 - sa(z + z^{-1})} \frac{dz}{iz} $$
对被积函数的分子分母同乘 $2z$，整理可得：
$$ I = \oint_{|z|=1} \frac{2sz - az^2 - a}{2z(s^2z + a^2z - saz^2 - sa)} \frac{dz}{i} = \oint_{|z|=1} \frac{az^2 - 2sz + a}{2isa z (z^2 - \frac{s^2+a^2}{sa}z + 1)} dz $$
将分母中的二次多项式因式分解：$z^2 - \frac{s^2+a^2}{sa}z + 1 = (z - \frac{s}{a})(z - \frac{a}{s})$。
因此被积函数 $f(z)$ 为：
$$ f(z) = \frac{az^2 - 2sz + a}{2isaz (z - \frac{s}{a})(z - \frac{a}{s})} $$
系统共有三个极点：$z_0 = 0$, $z_1 = \frac{s}{a}$, $z_2 = \frac{a}{s}$。

**情况 1：$s > a$ (圆外)**
极点 $z_0=0$ 和 $z_2 = a/s$ 在单位圆 $|z|=1$ 内（因为 $a/s < 1$），$z_1 = s/a$ 在圆外。
根据留数定理：$I = 2\pi i[ \text{Res}(f, 0) + \text{Res}(f, a/s) ]$
*   在 $z=0$ 处的留数：$\lim_{z\to 0} z f(z) = \frac{a}{2isa (-s/a)(-a/s)} = \frac{1}{2is}$
*   在 $z=a/s$ 处的留数：$\lim_{z\to a/s} (z-a/s) f(z) = \frac{a(a/s)^2 - 2s(a/s) + a}{2isa (a/s)(a/s - s/a)} = \frac{a^3/s^2 - a}{2ia^2(a^2-s^2)/(as)} = \frac{a(a^2-s^2)/s^2}{2ia(a^2-s^2)/s} = \frac{1}{2is}$
*   因此 $I = 2\pi i \left( \frac{1}{2is} + \frac{1}{2is} \right) = \frac{2\pi}{s}$

**情况 2：$s < a$ (圆内)**
极点 $z_0=0$ 和 $z_1 = s/a$ 在单位圆 $|z|=1$ 内。
*   在 $z=0$ 处的留数依然是 $\frac{1}{2is}$
*   在 $z=s/a$ 处的留数：$\lim_{z\to s/a} (z-s/a) f(z) = \frac{a(s/a)^2 - 2s(s/a) + a}{2isa (s/a)(s/a - a/s)} = \frac{s^2/a - a}{2is^2(s^2-a^2)/(as)} = \frac{-(a^2-s^2)/a}{2is(s^2-a^2)/a} = -\frac{1}{2is}$
*   因此 $I = 2\pi i \left( \frac{1}{2is} - \frac{1}{2is} \right) = 0$

---

### 方法二：万能代换 (Weierstrass Substitution)

考虑到余弦函数的对称性，积分可以写为区间 $[0, \pi]$ 积分的两倍：$I = 2 \int_0^\pi \frac{s - a \cos\phi}{s^2 + a^2 - 2sa \cos\phi} d\phi$。
令半角代换 $t = \tan(\phi/2)$，则 $d\phi = \frac{2dt}{1+t^2}$，$\cos\phi = \frac{1-t^2}{1+t^2}$。积分限从 $0 \to \pi$ 变为 $0 \to \infty$。
$$ I = 2 \int_0^\infty \frac{s - a \frac{1-t^2}{1+t^2}}{s^2 + a^2 - 2sa \frac{1-t^2}{1+t^2}} \frac{2}{1+t^2} dt = 4 \int_0^\infty \frac{(s+a)t^2 + (s-a)}{(s+a)^2 t^2 + (s-a)^2} \frac{1}{1+t^2} dt $$
对于分子分母，利用部分分式分解（将 $t^2$ 视为一个整体），待定系数可得：
$$ \frac{(s+a)t^2 + (s-a)}{[(s+a)^2 t^2 + (s-a)^2](1+t^2)} = \frac{\frac{1}{2s}}{1+t^2} + \frac{\frac{s^2-a^2}{2s}}{(s+a)^2 t^2 + (s-a)^2} $$
将其代回积分，拆成两项：
1. 第一项：$I_1 = \frac{4}{2s} \int_0^\infty \frac{dt}{1+t^2} = \frac{2}{s} [\arctan t]_0^\infty = \frac{2}{s} \cdot \frac{\pi}{2} = \frac{\pi}{s}$
2. 第二项：$I_2 = \frac{2(s^2-a^2)}{s} \int_0^\infty \frac{dt}{(s+a)^2 t^2 + (s-a)^2}$
利用标准积分 $\int_0^\infty \frac{dx}{A^2x^2 + B^2} = \frac{\pi}{2AB}$（注意 $A, B$ 必须取正数绝对值），这里 $A = s+a$，$B = |s-a|$。
所以 $I_2 = \frac{2(s^2-a^2)}{s} \cdot \frac{\pi}{2(s+a)|s-a|}$

**情况 1：$s > a$**
$s-a > 0$，所以 $|s-a| = s-a$。
$I_2 = \frac{\pi(s^2-a^2)}{s(s+a)(s-a)} = \frac{\pi(s^2-a^2)}{s(s^2-a^2)} = \frac{\pi}{s}$。
总积分 $I = I_1 + I_2 = \frac{\pi}{s} + \frac{\pi}{s} = \frac{2\pi}{s}$。

**情况 2：$s < a$**
$s-a < 0$，所以 $|s-a| = a-s$。
$I_2 = \frac{\pi(s^2-a^2)}{s(s+a)(a-s)} = \frac{\pi(s^2-a^2)}{s(a^2-s^2)} = -\frac{\pi}{s}$。
总积分 $I = I_1 + I_2 = \frac{\pi}{s} - \frac{\pi}{s} = 0$。

---

### 方法三：参数求导 (Differentiation under the integral sign)

仔细观察被积函数，它和 $\ln(s^2 + a^2 - 2sa \cos\phi)$ 的导数非常相似。
我们构造一个含参积分：
$$ J(s) = \int_0^{2\pi} \ln(s^2 + a^2 - 2sa \cos\phi) d\phi $$
对其关于参数 $s$ 求偏导：
$$ \frac{\partial J}{\partial s} = \int_0^{2\pi} \frac{2s - 2a \cos\phi}{s^2 + a^2 - 2sa \cos\phi} d\phi = 2 \int_0^{2\pi} \frac{s - a \cos\phi}{s^2 + a^2 - 2sa \cos\phi} d\phi = 2 I $$
所以我们的目标积分就是 $I = \frac{1}{2} \frac{\partial J}{\partial s}$。现在只需计算出 $J(s)$。
我们将对数内部进行复数分解：
$s^2 + a^2 - 2sa \cos\phi = |s - a e^{i\phi}|^2$
所以 $J(s) = 2 \int_0^{2\pi} \ln|s - a e^{i\phi}| d\phi = 2 \text{Re} \int_0^{2\pi} \ln(s - a e^{i\phi}) d\phi$。

**情况 1：$s > a$**
提出 $s$，得到 $J(s) = 2 \text{Re} \int_0^{2\pi}[\ln s + \ln(1 - \frac{a}{s}e^{i\phi})] d\phi$。
因为 $|\frac{a}{s}| < 1$，由复变函数解析性（或柯西积分定理/调和函数的平均值定理）可知后一项积分为 0。
故 $J(s) = 4\pi \ln s$。
对其求导：$I = \frac{1}{2} \frac{\partial}{\partial s} (4\pi \ln s) = \frac{2\pi}{s}$。

**情况 2：$s < a$**
提出 $a$，得到 $J(s) = 2 \text{Re} \int_0^{2\pi}[\ln a + \ln(\frac{s}{a}e^{-i\phi} - 1)] d\phi$。同理后面解析项在圆上的积分为 0。
故 $J(s) = 4\pi \ln a$（此时 $J(s)$ 不包含变量 $s$）。
对其求导：$I = \frac{1}{2} \frac{\partial}{\partial s} (4\pi \ln a) = 0$。

---

### 方法四：级数展开 (Series Expansion)

这是一个非常巧妙的视角。我们注意到这样一个复变恒等式：取 $\frac{1}{s - a e^{i\phi}}$ 的实部：
$$ \text{Re}\left(\frac{1}{s - a e^{i\phi}}\right) = \text{Re}\left( \frac{s - a e^{-i\phi}}{(s - a e^{i\phi})(s - a e^{-i\phi})} \right) = \frac{s - a \cos\phi}{s^2 + a^2 - 2sa \cos\phi} $$
这个等式右边恰好是我们的被积函数！
所以原积分可以写成：$I = \text{Re} \int_0^{2\pi} \frac{1}{s - a e^{i\phi}} d\phi$。

**情况 1：$s > a$**
我们将分子分母同除以 $s$，并利用几何级数展开（因为 $|\frac{a}{s}e^{i\phi}| < 1$）：
$$ \frac{1}{s - a e^{i\phi}} = \frac{1}{s} \frac{1}{1 - \frac{a}{s}e^{i\phi}} = \frac{1}{s} \sum_{k=0}^{\infty} \left(\frac{a}{s}\right)^k e^{ik\phi} $$
级数均匀收敛，可以逐项积分：
$$ I = \text{Re} \left[ \frac{1}{s} \sum_{k=0}^{\infty} \left(\frac{a}{s}\right)^k \int_0^{2\pi} e^{ik\phi} d\phi \right] $$
由于 $\int_0^{2\pi} e^{ik\phi} d\phi$ 在 $k \neq 0$ 时恒为 $0$，而在 $k=0$ 时等于 $2\pi$。级数中只有 $k=0$ 的常数项留存下来：
$I = \text{Re} \left[ \frac{1}{s} \cdot 1 \cdot 2\pi \right] = \frac{2\pi}{s}$。

**情况 2：$s < a$**
我们将分子分母同除以 $-a e^{i\phi}$ 进行展开（因为 $|\frac{s}{a}e^{-i\phi}| < 1$）：
$$ \frac{1}{s - a e^{i\phi}} = \frac{1}{-a e^{i\phi}(1 - \frac{s}{a}e^{-i\phi})} = -\frac{1}{a} e^{-i\phi} \sum_{k=0}^{\infty} \left(\frac{s}{a}\right)^k e^{-ik\phi} = -\frac{1}{a} \sum_{k=0}^{\infty} \left(\frac{s}{a}\right)^k e^{-i(k+1)\phi} $$
逐项积分：
$$ I = \text{Re} \left[ -\frac{1}{a} \sum_{k=0}^{\infty} \left(\frac{s}{a}\right)^k \int_0^{2\pi} e^{-i(k+1)\phi} d\phi \right] $$
因为 $k \ge 0$，所以 $k+1 \ge 1 \neq 0$。对于所有的项，积分 $\int_0^{2\pi} e^{-i(k+1)\phi} d\phi$ 均恒等于 0。
故该级数的所有项积分后都消失了，$I = 0$。

---

### 总结
无论使用上述四种哪一种方法，对于内层关于 $\phi$ 的积分，结论一致：
$$
\int_0^{2\pi} \frac{s - a \cos\phi}{s^2 + a^2 - 2sa \cos\phi} d\phi = 
\begin{cases} 
\frac{2\pi}{s}, & s > a \\ 
0, & s < a 
\end{cases}
$$
最后，只要将这个结果代回到原图中最外层关于 $s$ 的积分之中（乘上 $s^2$ 及其常数系数）分别进行讨论，即可得到该物理问题的最终解。