> [!Problem] 
> $$
\int_0^\pi \sin\theta d\theta\int^\infty_0dr \frac{r^4\sin^2\theta}{((r^2+d^2/4)^2-r^2d^2\cos^2\theta)^{\frac{3}{2}}}
$$
# 积分求解详细过程

计算积分

$$
I = \int_{0}^{\pi} \sin\theta\,\mathrm{d}\theta \int_{0}^{\infty} \frac{r^{4}\sin^{2}\theta}{\big[(r^{2}+d^{2}/4)^{2} - r^{2}d^{2}\cos^{2}\theta\big]^{3/2}}\,\mathrm{d}r,
\qquad (d>0).
$$

---

## 1. 化简记号

令  

$$
a = \frac{d}{2}\quad\Longrightarrow\quad d=2a,\quad \frac{d^{2}}{4}=a^{2},\quad d^{2}=4a^{2}.
$$

分母变为  

$$
(r^{2}+a^{2})^{2} - 4a^{2}r^{2}\cos^{2}\theta.
$$

原积分写成  

$$
I = \int_{0}^{\pi} \sin^{3}\theta\,\mathrm{d}\theta \int_{0}^{\infty} \frac{r^{4}}{\big[(r^{2}+a^{2})^{2} - 4a^{2}r^{2}\cos^{2}\theta\big]^{3/2}}\,\mathrm{d}r.
\qquad (1)
$$

---

## 2. 对 $r$ 作三角代换

令  

$$
r = a\tan\frac{\varphi}{2},\qquad \varphi\in(0,\pi).
$$

则  

$$
\mathrm{d}r = \frac{a}{2}\sec^{2}\frac{\varphi}{2}\,\mathrm{d}\varphi,\qquad
r^{2}+a^{2}=a^{2}\sec^{2}\frac{\varphi}{2}.
$$

计算分母的 $3/2$ 次方部分：

$$
\begin{aligned}
(r^{2}+a^{2})^{2} - 4a^{2}r^{2}\cos^{2}\theta
&= a^{4}\sec^{4}\frac{\varphi}{2} - 4a^{4}\tan^{2}\frac{\varphi}{2}\cos^{2}\theta \\
&= a^{4}\big[\sec^{4}\frac{\varphi}{2} - 4\tan^{2}\frac{\varphi}{2}\cos^{2}\theta\big].
\end{aligned}
$$

分子部分：

$$
r^{4}\,\mathrm{d}r = a^{4}\tan^{4}\frac{\varphi}{2}\cdot\frac{a}{2}\sec^{2}\frac{\varphi}{2}\,\mathrm{d}\varphi
= \frac{a^{5}}{2}\tan^{4}\frac{\varphi}{2}\sec^{2}\frac{\varphi}{2}\,\mathrm{d}\varphi.
$$

代入 $(1)$ 中的内层积分，得

$$
I = \frac{1}{2a}\int_{0}^{\pi}\sin^{3}\theta\,\mathrm{d}\theta
\int_{0}^{\pi} \frac{\tan^{4}\frac{\varphi}{2}\sec^{2}\frac{\varphi}{2}}
{\big[\sec^{4}\frac{\varphi}{2} - 4\tan^{2}\frac{\varphi}{2}\cos^{2}\theta\big]^{3/2}}\,\mathrm{d}\varphi.
\qquad (2)
$$

---

## 3. 用半角公式化简被积函数

记  

$$
t = \tan\frac{\varphi}{2},\qquad
\tan^{4}\frac{\varphi}{2}\sec^{2}\frac{\varphi}{2}=t^{4}(1+t^{2}).
$$

分母方括号用 $t$ 表示：

$$
(1+t^{2})^{2} - 4t^{2}\cos^{2}\theta = t^{4} - 2t^{2}\cos 2\theta + 1.
$$

用 $\varphi$ 改写：

$$
t^{2} = \frac{1-\cos\varphi}{1+\cos\varphi},\quad
1+t^{2} = \frac{2}{1+\cos\varphi}.
$$

于是  

$$
t^{4}(1+t^{2}) = \frac{(1-\cos\varphi)^{2}}{(1+\cos\varphi)^{2}}\cdot\frac{2}{1+\cos\varphi}
= \frac{2(1-\cos\varphi)^{2}}{(1+\cos\varphi)^{3}}.
$$

分母：

$$
\begin{aligned}
t^{4} - 2t^{2}\cos 2\theta + 1
&= \frac{(1-\cos\varphi)^{2} - 2\cos 2\theta(1-\cos\varphi)(1+\cos\varphi) + (1+\cos\varphi)^{2}}{(1+\cos\varphi)^{2}} \\
&= \frac{2(1+\cos^{2}\varphi) - 2\cos 2\theta\sin^{2}\varphi}{(1+\cos\varphi)^{2}} \\
&= \frac{4(1 - \sin^{2}\varphi\cos^{2}\theta)}{(1+\cos\varphi)^{2}}.
\end{aligned}
$$

故分母的 $3/2$ 次方为

$$
\left(\frac{4(1 - \sin^{2}\varphi\cos^{2}\theta)}{(1+\cos\varphi)^{2}}\right)^{3/2}
= \frac{8(1 - \sin^{2}\varphi\cos^{2}\theta)^{3/2}}{(1+\cos\varphi)^{3}}.
$$

代入被积函数，$(1+\cos\varphi)^{3}$ 与分子的 $(1+\cos\varphi)^{-3}$ 相消，得到

$$
\frac{\tan^{4}\frac{\varphi}{2}\sec^{2}\frac{\varphi}{2}}
{\big[\sec^{4}\frac{\varphi}{2} - 4\tan^{2}\frac{\varphi}{2}\cos^{2}\theta\big]^{3/2}}
= \frac{(1-\cos\varphi)^{2}}{4(1 - \sin^{2}\varphi\cos^{2}\theta)^{3/2}}.
$$

将其代回 $(2)$，并利用 $a = d/2$，有

$$
I = \frac{1}{4d}\int_{0}^{\pi}\int_{0}^{\pi}
\frac{\sin^{3}\theta\,(1-\cos\varphi)^{2}}{(1 - \sin^{2}\varphi\cos^{2}\theta)^{3/2}}\,\mathrm{d}\varphi\,\mathrm{d}\theta.
\qquad (3)
$$

---

## 4. 交换积分次序，先对 $\theta$ 积分

$$
I = \frac{1}{4d}\int_{0}^{\pi} (1-\cos\varphi)^{2}\,\mathrm{d}\varphi
\int_{0}^{\pi} \frac{\sin^{3}\theta}{(1 - \sin^{2}\varphi\cos^{2}\theta)^{3/2}}\,\mathrm{d}\theta.
$$

记 $k = \sin\varphi\ (\ge0)$，内层积分为

$$
K(\varphi) = \int_{0}^{\pi} \frac{\sin^{3}\theta}{(1 - k^{2}\cos^{2}\theta)^{3/2}}\,\mathrm{d}\theta.
$$

利用对称性：

$$
K(\varphi) = 2\int_{0}^{\pi/2} \frac{\sin^{3}\theta}{(1 - k^{2}\cos^{2}\theta)^{3/2}}\,\mathrm{d}\theta.
$$

令 $x = \cos\theta$，则 $\mathrm{d}x = -\sin\theta\,\mathrm{d}\theta$，$\sin^{2}\theta = 1-x^{2}$，

$$
K(\varphi) = 2\int_{0}^{1} \frac{1-x^{2}}{(1 - k^{2}x^{2})^{3/2}}\,\mathrm{d}x.
\qquad (4)
$$

---

## 5. 计算 $K(\varphi)$

作代换 $kx = \sin t$，$\mathrm{d}x = \frac{1}{k}\cos t\,\mathrm{d}t$，积分限 $x:0\to1$ 对应 $t:0\to\arcsin k$。

$$
\begin{aligned}
\int_{0}^{1} \frac{1-x^{2}}{(1 - k^{2}x^{2})^{3/2}}\,\mathrm{d}x
&= \int_{0}^{\arcsin k} \frac{1 - \frac{\sin^{2}t}{k^{2}}}{\cos^{3}t}\,\frac{\cos t}{k}\,\mathrm{d}t \\
&= \frac{1}{k^{3}}\int_{0}^{\arcsin k} \frac{k^{2} - \sin^{2}t}{\cos^{2}t}\,\mathrm{d}t.
\end{aligned}
$$

化简被积函数：

$$
\frac{k^{2} - \sin^{2}t}{\cos^{2}t}
= k^{2}\sec^{2}t - \tan^{2}t
= (k^{2}-1)\sec^{2}t + 1.
$$

积分得

$$
\int_{0}^{\arcsin k} \big[(k^{2}-1)\sec^{2}t + 1\big]\,\mathrm{d}t
= (k^{2}-1)\tan t + t \,\Big|_{0}^{\arcsin k}.
$$

在 $t = \arcsin k$ 处，$\sin t = k$，$\cos t = \sqrt{1-k^{2}}$，$\tan t = k/\sqrt{1-k^{2}}$。因此

$$
(k^{2}-1)\frac{k}{\sqrt{1-k^{2}}} + \arcsin k
= -k\sqrt{1-k^{2}} + \arcsin k.
$$

从而

$$
\int_{0}^{1} \frac{1-x^{2}}{(1 - k^{2}x^{2})^{3/2}}\,\mathrm{d}x
= \frac{\arcsin k}{k^{3}} - \frac{\sqrt{1-k^{2}}}{k^{2}}.
$$

代回 $(4)$ 得

$$
K(\varphi) = \frac{2\arcsin k}{k^{3}} - \frac{2\sqrt{1-k^{2}}}{k^{2}},\qquad k = \sin\varphi.
\qquad (5)
$$

由于 $\varphi\in[0,\pi]$，需要分段写出显式：
* 当 $\varphi\in[0,\pi/2]$：$\arcsin(\sin\varphi)=\varphi$，$\sqrt{1-\sin^{2}\varphi}=\cos\varphi$，
  $$
  K(\varphi) = \frac{2\varphi}{\sin^{3}\varphi} - \frac{2\cos\varphi}{\sin^{2}\varphi}.
  $$
* 当 $\varphi\in[\pi/2,\pi]$：$\arcsin(\sin\varphi)=\pi-\varphi$，$\sqrt{1-\sin^{2}\varphi}=-\cos\varphi$，
  $$
  K(\varphi) = \frac{2(\pi-\varphi)}{\sin^{3}\varphi} + \frac{2\cos\varphi}{\sin^{2}\varphi}.
  $$

---

## 6. 利用对称性合并积分

现在

$$
I = \frac{1}{4d}\left[\int_{0}^{\pi/2} (1-\cos\varphi)^{2}K(\varphi)\,\mathrm{d}\varphi
+ \int_{\pi/2}^{\pi} (1-\cos\varphi)^{2}K(\varphi)\,\mathrm{d}\varphi\right].
$$

对第二个积分作代换 $\varphi = \pi - \phi$，$\mathrm{d}\varphi = -\mathrm{d}\phi$，并利用 $\sin(\pi-\phi)=\sin\phi$，$\cos(\pi-\phi)=-\cos\phi$，及

$$
K(\pi-\phi) = \frac{2\phi}{\sin^{3}\phi} - \frac{2\cos\phi}{\sin^{2}\phi} = K(\phi),\quad \phi\in[0,\pi/2].
$$

于是

$$
\int_{\pi/2}^{\pi} (1-\cos\varphi)^{2}K(\varphi)\,\mathrm{d}\varphi
= \int_{0}^{\pi/2} (1+\cos\phi)^{2}K(\phi)\,\mathrm{d}\phi.
$$

相加得

$$
\int_{0}^{\pi} (1-\cos\varphi)^{2}K(\varphi)\,\mathrm{d}\varphi
= \int_{0}^{\pi/2} \big[(1-\cos\varphi)^{2} + (1+\cos\varphi)^{2}\big] K(\varphi)\,\mathrm{d}\varphi.
$$

计算系数：

$$
(1-\cos\varphi)^{2}+(1+\cos\varphi)^{2} = 2 + 2\cos^{2}\varphi = 2(1+\cos^{2}\varphi).
$$

因此

$$
I = \frac{1}{4d}\int_{0}^{\pi/2} 2(1+\cos^{2}\varphi) K(\varphi)\,\mathrm{d}\varphi
= \frac{1}{2d}\int_{0}^{\pi/2} (1+\cos^{2}\varphi) K(\varphi)\,\mathrm{d}\varphi.
$$

代入 $\varphi\in[0,\pi/2]$ 时的 $K(\varphi)$：

$$
I = \frac{1}{2d}\int_{0}^{\pi/2} (1+\cos^{2}\varphi)
\left( \frac{2\varphi}{\sin^{3}\varphi} - \frac{2\cos\varphi}{\sin^{2}\varphi} \right)\mathrm{d}\varphi
= \frac{1}{d}\int_{0}^{\pi/2} (1+\cos^{2}\varphi)
\left( \frac{\varphi}{\sin^{3}\varphi} - \frac{\cos\varphi}{\sin^{2}\varphi} \right)\mathrm{d}\varphi.
\qquad (6)
$$

---

## 7. 分部积分

注意到

$$
\frac{\mathrm{d}}{\mathrm{d}\varphi}\!\left(\frac{\cos\varphi}{\sin^{2}\varphi}\right)
= -\frac{\sin^{3}\varphi + 2\sin\varphi\cos^{2}\varphi}{\sin^{4}\varphi}
= -\frac{1+\cos^{2}\varphi}{\sin^{3}\varphi}.
$$

因此

$$
\frac{1+\cos^{2}\varphi}{\sin^{3}\varphi}
= -\frac{\mathrm{d}}{\mathrm{d}\varphi}\!\left(\frac{\cos\varphi}{\sin^{2}\varphi}\right).
$$

将 $(6)$ 拆成两项：

$$
I = \frac{1}{d}\left[ \int_{0}^{\pi/2} (1+\cos^{2}\varphi)\frac{\varphi}{\sin^{3}\varphi}\,\mathrm{d}\varphi
- \int_{0}^{\pi/2} (1+\cos^{2}\varphi)\frac{\cos\varphi}{\sin^{2}\varphi}\,\mathrm{d}\varphi \right].
$$

第一项用分部积分（取 $u=\varphi$，$\mathrm{d}v = \frac{1+\cos^{2}\varphi}{\sin^{3}\varphi}\mathrm{d}\varphi = -\mathrm{d}\big(\frac{\cos\varphi}{\sin^{2}\varphi}\big)$）：

$$
\begin{aligned}
\int_{0}^{\pi/2} (1+\cos^{2}\varphi)\frac{\varphi}{\sin^{3}\varphi}\,\mathrm{d}\varphi
&= \lim_{\varepsilon\to0^{+}}\int_{\varepsilon}^{\pi/2} \varphi \left[ -\frac{\mathrm{d}}{\mathrm{d}\varphi}\!\left(\frac{\cos\varphi}{\sin^{2}\varphi}\right) \right]\mathrm{d}\varphi \\
&= \lim_{\varepsilon\to0^{+}} \left[ -\varphi\frac{\cos\varphi}{\sin^{2}\varphi} \right]_{\varepsilon}^{\pi/2}
+ \lim_{\varepsilon\to0^{+}}\int_{\varepsilon}^{\pi/2} \frac{\cos\varphi}{\sin^{2}\varphi}\,\mathrm{d}\varphi.
\end{aligned}
$$

边界项在 $\pi/2$ 处为零，故

$$
= \lim_{\varepsilon\to0^{+}} \left( \varepsilon\frac{\cos\varepsilon}{\sin^{2}\varepsilon} \right)
+ \int_{0}^{\pi/2} \frac{\cos\varphi}{\sin^{2}\varphi}\,\mathrm{d}\varphi.
$$

于是整个方括号变为

$$
\lim_{\varepsilon\to0^{+}} \left( \varepsilon\frac{\cos\varepsilon}{\sin^{2}\varepsilon} \right)
+ \int_{0}^{\pi/2} \frac{\cos\varphi}{\sin^{2}\varphi}\,\mathrm{d}\varphi
- \int_{0}^{\pi/2} (1+\cos^{2}\varphi)\frac{\cos\varphi}{\sin^{2}\varphi}\,\mathrm{d}\varphi.
$$

合并后两个积分：

$$
\frac{\cos\varphi}{\sin^{2}\varphi} - \frac{(1+\cos^{2}\varphi)\cos\varphi}{\sin^{2}\varphi}
= -\frac{\cos^{3}\varphi}{\sin^{2}\varphi}.
$$

所以

$$
I = \frac{1}{d} \lim_{\varepsilon\to0^{+}} \left[ \varepsilon\frac{\cos\varepsilon}{\sin^{2}\varepsilon}
- \int_{\varepsilon}^{\pi/2} \frac{\cos^{3}\varphi}{\sin^{2}\varphi}\,\mathrm{d}\varphi \right].
\qquad (7)
$$

计算 $\int_{\varepsilon}^{\pi/2} \frac{\cos^{3}\varphi}{\sin^{2}\varphi}\,\mathrm{d}\varphi$：
令 $u = \sin\varphi$，$\mathrm{d}u = \cos\varphi\,\mathrm{d}\varphi$，$\cos^{2}\varphi = 1-u^{2}$，积分限 $u:\sin\varepsilon \to 1$。

$$
\begin{aligned}
\int_{\varepsilon}^{\pi/2} \frac{\cos^{3}\varphi}{\sin^{2}\varphi}\,\mathrm{d}\varphi
&= \int_{\sin\varepsilon}^{1} \frac{1-u^{2}}{u^{2}}\,\mathrm{d}u
= \int_{\sin\varepsilon}^{1} (u^{-2} - 1)\,\mathrm{d}u \\
&= \left[ -\frac{1}{u} - u \right]_{\sin\varepsilon}^{1}
= -2 + \frac{1}{\sin\varepsilon} + \sin\varepsilon.
\end{aligned}
$$

代回 $(7)$：

$$
\begin{aligned}
I &= \frac{1}{d} \lim_{\varepsilon\to0^{+}} \left[ \varepsilon\frac{\cos\varepsilon}{\sin^{2}\varepsilon} + 2 - \frac{1}{\sin\varepsilon} - \sin\varepsilon \right].
\end{aligned}
$$

当 $\varepsilon\to0^{+}$ 时，将各量作泰勒展开：

$$
\sin\varepsilon = \varepsilon - \frac{\varepsilon^{3}}{6} + O(\varepsilon^{5}),\quad
\cos\varepsilon = 1 - \frac{\varepsilon^{2}}{2} + O(\varepsilon^{4}).
$$

计算组合：

$$
\varepsilon\frac{\cos\varepsilon}{\sin^{2}\varepsilon}
= \frac{\varepsilon(1 - \varepsilon^{2}/2 + \cdots)}{(\varepsilon - \varepsilon^{3}/6 + \cdots)^{2}}
= \frac{1}{\varepsilon} - \frac{1}{6}\varepsilon + O(\varepsilon^{3}),
$$

$$
\frac{1}{\sin\varepsilon} + \sin\varepsilon
= \frac{1}{\varepsilon} + \frac{7}{6}\varepsilon + O(\varepsilon^{3}).
$$

因此

$$
\varepsilon\frac{\cos\varepsilon}{\sin^{2}\varepsilon} - \frac{1}{\sin\varepsilon} - \sin\varepsilon
= \left(\frac{1}{\varepsilon} - \frac{\varepsilon}{6}\right) - \left(\frac{1}{\varepsilon} + \frac{7\varepsilon}{6}\right) + O(\varepsilon^{3})
= -\frac{4}{3}\varepsilon + O(\varepsilon^{3}) \xrightarrow{\varepsilon\to0} 0.
$$

于是极限中的整个方括号趋于 $2$。

---

## 8. 最终结果

$$
I = \frac{1}{d}\times 2 = \frac{2}{d}.
$$

$$
\boxed{\displaystyle \int_{0}^{\pi}\sin\theta\,\mathrm{d}\theta \int_{0}^{\infty} \frac{r^{4}\sin^{2}\theta}{\big[(r^{2}+d^{2}/4)^{2} - r^{2}d^{2}\cos^{2}\theta\big]^{3/2}}\,\mathrm{d}r = \frac{2}{d},\qquad d>0.}
$$




这个积分由于分母存在 $3/2$ 次方，直接在实空间使用留数定理会面临极度复杂的**多值函数分支割线（Branch cuts）**问题。

为了**纯粹且严谨地使用“留数定理”**来降维打击这个积分，我们可以借助物理学中的**傅里叶变换（动量空间）**。这种方法将原本带有 $3/2$ 次方根号的空间积分，完美转化为只有极点的有理函数积分，从而使留数定理大放异彩！

以下是堪称艺术的推导过程：

### 第一步：将积分转换为 3D 空间积分

原积分是：
$$ I = \int_0^\pi \sin\theta d\theta \int_0^\infty dr \frac{r^4\sin^2\theta}{((r^2+d^2/4)^2-r^2d^2\cos^2\theta)^{\frac{3}{2}}} $$
我们给它乘上一个 $2\pi$，并注意到球坐标系的体积元是 $d^3r = r^2\sin\theta dr d\theta d\phi$。因为被积函数与 $\phi$ 无关，$\int_0^{2\pi} d\phi = 2\pi$，于是积分可以写为 3D 空间的全空间积分：
$$ 2\pi I = \iiint \frac{r^2 \sin^2\theta}{((r^2+d^2/4)^2-r^2d^2\cos^2\theta)^{\frac{3}{2}}} d^3r $$

定义一个矢量 $\vec{a} = (0, 0, d/2)$。观察分母的内部结构，可以通过余弦定理和绝对值化简为：
$$ (r^2+d^2/4)^2-r^2d^2\cos^2\theta = |\vec{r} - \vec{a}|^2 |\vec{r} + \vec{a}|^2 $$
同时，分子中的 $r^2 \sin^2\theta$ 恰好是圆柱坐标系下的极径平方，即 $\rho^2 = x^2 + y^2$。
所以原积分极其优雅地变成了双中心场的积分：
$$ I = \frac{1}{2\pi} \iiint \frac{x^2 + y^2}{|\vec{r} - \vec{a}|^3 |\vec{r} + \vec{a}|^3} d^3r $$

### 第二步：利用 Parseval 定理转入动量空间

令 $\vec{E}_1(\vec{r}) = \frac{\vec{r} - \vec{a}}{|\vec{r} - \vec{a}|^3}$，$\vec{E}_2(\vec{r}) = \frac{\vec{r} + \vec{a}}{|\vec{r} + \vec{a}|^3}$。
这在物理上相当于两个点电荷产生的电场。注意到：
$$ E_{1x} E_{2x} + E_{1y} E_{2y} = \frac{x^2 + y^2}{|\vec{r} - \vec{a}|^3 |\vec{r} + \vec{a}|^3} $$
这正好是我们的被积函数！

现在使用傅里叶变换。已知单一库仑场的傅里叶变换为 $\mathscr{F}\left[\frac{\vec{r}}{r^3}\right] = -i\vec{k} \frac{4\pi}{k^2}$。利用位移定理：
$$ \tilde{\vec{E}}_1(\vec{k}) = -i\vec{k} \frac{4\pi}{k^2} e^{-i\vec{k}\cdot\vec{a}}, \quad \tilde{\vec{E}}_2(\vec{k}) = -i\vec{k} \frac{4\pi}{k^2} e^{i\vec{k}\cdot\vec{a}} $$
根据 Parseval 定理（能量等价定理）$\int f(\vec{r})g(\vec{r}) d^3r = \int \frac{d^3k}{(2\pi)^3} \tilde{f}(\vec{k}) \cdot \tilde{g}^*(\vec{k})$，将 $x, y$ 分量的乘积代入：
$$ 2\pi I = \int \frac{d^3k}{(2\pi)^3} \left( k_x^2 + k_y^2 \right) \left( \frac{4\pi}{k^2} \right)^2 e^{-i 2\vec{k}\cdot\vec{a}} $$
记 $k_\perp^2 = k_x^2 + k_y^2$，且因为 $2\vec{a} = d \hat{z}$，动量空间积分化简为：
$$ I = \frac{8\pi}{(2\pi)^3} \iiint \frac{k_\perp^2}{(k_\perp^2 + k_z^2)^2} e^{-i k_z d} d^2k_\perp d k_z $$

### 第三步：【核心】使用留数定理计算 $k_z$ 积分

将动量空间换为柱坐标 $d^2k_\perp = 2\pi k_\perp dk_\perp$：
$$ I = \frac{2}{\pi} \int_0^\infty k_\perp^3 dk_\perp \underbrace{ \int_{-\infty}^\infty \frac{e^{-i k_z d}}{(k_z^2 + k_\perp^2)^2} d k_z }_{M(k_\perp)} $$

现在我们对内部的 $k_z$ 积分 **严格使用留数定理 (Residue Theorem)**！
$$ M(k_\perp) = \int_{-\infty}^\infty \frac{e^{-i z d}}{(z^2 + k_\perp^2)^2} dz $$
构造复平面的闭合回路。因为 $d > 0$，为了使 $e^{-i z d}$ 在无穷远处收敛，我们在**下半平面**闭合回路（或者如果计算 $e^{i z d}$ 并在上半平面闭合，结果是对称且完全相同的，这里为了符号方便，我们算 $e^{i z d}$ 在上半平面的情况，实部积分为正）：

考虑复变函数 $f(z) = \frac{e^{i z d}}{(z^2 + k_\perp^2)^2}$。
它的分母是 $(z - i k_\perp)^2 (z + i k_\perp)^2$，所以在上半平面有一个**二阶极点** $z_0 = i k_\perp$。
计算该极点的留数：
$$ \text{Res}(f, i k_\perp) = \lim_{z \to i k_\perp} \frac{d}{dz} \left[ (z - i k_\perp)^2 f(z) \right] = \lim_{z \to i k_\perp} \frac{d}{dz} \left[ \frac{e^{i z d}}{(z + i k_\perp)^2} \right] $$
使用除法求导法则：
$$ \frac{d}{dz} \left[ \dots \right] = \frac{i d e^{i z d}(z + i k_\perp)^2 - 2(z + i k_\perp)e^{i z d}}{(z + i k_\perp)^4} = e^{i z d} \left( \frac{i d}{(z + i k_\perp)^2} - \frac{2}{(z + i k_\perp)^3} \right) $$
将 $z = i k_\perp$ 代入：
$$ \text{Res} = e^{-k_\perp d} \left( \frac{i d}{(2 i k_\perp)^2} - \frac{2}{(2 i k_\perp)^3} \right) = e^{-k_\perp d} \left( \frac{i d}{-4 k_\perp^2} - \frac{2}{-8 i k_\perp^3} \right) = \frac{-i}{4 k_\perp^3} e^{-k_\perp d} (1 + k_\perp d) $$

根据留数定理，积分等于 $2\pi i$ 乘以留数：
$$ M(k_\perp) = 2\pi i \left[ \frac{-i}{4 k_\perp^3} e^{-k_\perp d} (1 + k_\perp d) \right] = \frac{\pi}{2 k_\perp^3} e^{-k_\perp d} (1 + k_\perp d) $$

### 第四步：计算最终的 $k_\perp$ 积分

将留数定理得到的结果代回到原来的 $k_\perp$ 积分中：
$$ I = \frac{2}{\pi} \int_0^\infty k_\perp^3 \left[ \frac{\pi}{2 k_\perp^3} e^{-k_\perp d} (1 + k_\perp d) \right] d k_\perp $$
此时奇迹发生了，外部的 $k_\perp^3$ 和留数定理计算出的分母 $k_\perp^3$ **完美对消**！
$$ I = \int_0^\infty e^{-k_\perp d} (1 + k_\perp d) d k_\perp $$

进行简单的换元，令 $x = k_\perp d$，则 $d k_\perp = \frac{dx}{d}$：
$$ I = \int_0^\infty e^{-x} (1 + x) \frac{dx}{d} = \frac{1}{d} \left( \int_0^\infty e^{-x} dx + \int_0^\infty x e^{-x} dx \right) $$
这两个是非常基础的伽马积分（结果分别为 $1$ 和 $1$），因此最终结果为：
$$ I = \frac{1}{d} (1 + 1) = \frac{2}{d} $$

### 总结
这就是该积分的**留数定理**标准解法。我们通过 Fourier Transform 巧妙地绕开了 $3/2$ 次方带来的解析延拓灾难（分支割线），把原问题平滑过渡成了复平面内的纯极点留数计算，非常优雅地得到了结果 $\frac{2}{d}$。