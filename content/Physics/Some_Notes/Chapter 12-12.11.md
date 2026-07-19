# (12.11) RG and the central limit theorem: long.
In this exercise, we will develop a renormalization group in *function space* to derive the central limit theorem [42]. We will be using maps (like our renormalization transformation $T$) that take a function $\rho$ of $x$ into another function of $x$; we will write $T[\rho]$ as the new function, and $T[\rho](x)$ as the function evaluated at $x$. We will also make use of the Fourier transform (eqn A.6)

$$
\mathcal{F}[\rho](k) = \int_{-\infty}^{\infty} e^{-ikx} \rho(x) \, dx; \tag{12.41}
$$

$\mathcal{F}$ maps functions of $x$ into functions of $k$. When convenient, we will also use the tilde notation: $\tilde{\rho} = \mathcal{F}[\rho]$, so for example (eqn A.7)

$$
\rho(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} e^{ikx} \tilde{\rho}(k) \, dk. \tag{12.42}
$$

The central limit theorem states that the sum of many independent random variables tends to a Gaussian whatever the original distribution might have looked like (just as they do for random walks, Chapter 2). That is, ==the Gaussian distribution is the fixed point function for large random sums==. When summing many random numbers, the details of the distributions of the individual random variables becomes unimportant; simple behavior emerges. We will study this using the renormalization group, giving an example where we can explicitly implement the coarse-graining transformation. Here our system space is the space of probability distributions $\rho(x)$. There are four steps in the procedure:

1. **Coarse-grain.** Reduce the number of the degrees of freedom by some fraction. Here, we will add pairs of random variables (reducing the number by half); the probability distribution for sums of $N$ independent random variables of distribution $f$ is the same as the distribution for sums of $N/2$ random variables of distribution $f \ast f$, where $\ast$ denotes convolution.

2. **Argue that if $\rho(x)$ is the probability that a random variable has value $x$, then the probability distribution of the sum of two random variables drawn from this distribution is the convolution.**

$$
C[\rho](x) = (\rho \ast \rho)(x) = \int_{-\infty}^{\infty} \rho(x - y) \rho(y) \, dy. \tag{12.43}
$$

Remember (eqn A.23) the Fourier transform of the convolution is the product of the Fourier transforms, so

$$
\mathcal{F}[C[\rho]](k) = (\tilde{\rho}(k))^2. \tag{12.44}
$$

2. **Rescale.** The behavior at larger lengths will typically be similar to that of smaller lengths, but some of the constants will shift (or renormalize). Here the mean and width of the distributions will increase as we coarse-grain. We confine our main attention to distributions of zero mean. Remember that the width (standard deviation) of the sum of two random variables drawn from $\rho$ will be $\sqrt{2}$ times the width of one variable drawn from $\rho$, and that the overall height will have to shrink by $\sqrt{2}$ to stay normalized. We define a rescaling operator $S_{\sqrt{2}}$ which reverses this spreading of the probability distribution:

$$
S_{\sqrt{2}}[\rho](x) = \sqrt{2} \rho(\sqrt{2}x). \tag{12.45}
$$

(b) Show that if $\rho$ is normalized (integrates to one), so is $S_{\sqrt{2}}[\rho]$. Show that the Fourier transform is

$$
\mathcal{F}[S_{\sqrt{2}}[\rho]](k) = \tilde{\rho}(k/\sqrt{2}). \tag{12.46}
$$

Our renormalization-group transformation is the composition of these two operations,

$$
T[\rho](x) = S_{\sqrt{2}}[C[\rho]](x) = \sqrt{2} \int_{-\infty}^{\infty} \rho(\sqrt{2}x - y) \rho(y) \, dy.
$$

Adding two Gaussian random variables (convolving their distributions) and rescaling the width back should give the original Gaussian distribution; the Gaussian should be a fixed point.

(c) Show that the Gaussian distribution

$$
\rho^*(x) = \frac{1}{\sqrt{2\pi} \sigma} \exp(-x^2/2\sigma^2) \tag{12.48}
$$

is indeed a fixed point in function space under the operation $T$. You can do this either by direct integration, or by using the known properties of the Gaussian under convolution.

(d) Use eqns 12.44 and 12.46 to show that

$$
\mathcal{F}[T[\rho]](k) = \tilde{T}[\tilde{\rho}](k) = \tilde{\rho}(k/\sqrt{2})^2. \tag{12.49}
$$

Calculate the Fourier transform of the fixed point $\tilde{\rho}^*(k)$ (or see Exercise A.4). Using eqn 12.49, show that $\tilde{\rho}^*(k)$ is a fixed point in Fourier space under our coarse-graining operator $\tilde{T}$.

These properties of $T$ and $\rho^*$ should allow you to do most of the rest of the exercise without any messy integrals.

The central limit theorem tells us that sums of random variables have probability distributions that approach Gaussians. In our renormalization-group framework, to prove this we might try to show that our Gaussian fixed point is **attracting**: that all nearby probability distributions flow under iterations of $T$ to $\rho^*$.

(3) **Linearize about the fixed point.** Consider a function near the fixed point: $\rho(x) = \rho^*(x) + \epsilon f(x)$. In Fourier space, $\tilde{\rho}(k) = \tilde{\rho}^*(k) + \epsilon \tilde{f}(k)$. We want to find the eigenvalues $\lambda_n$ and eigenfunctions $f_n$ of the derivative of the mapping $T$. That is, they must satisfy

$$
T[\rho^* + \epsilon f_n] = \rho^* + \lambda_n \epsilon f_n + O(\epsilon^2), \tag{12.50}
$$

$$
\tilde{T}[\tilde{\rho}^* + \epsilon \tilde{f}_n] = \tilde{\rho}^* + \lambda_n \epsilon \tilde{f}_n + O(\epsilon^2).
$$

(e) **Show using eqns 12.49 and 12.50 that the transforms of the eigenfunctions satisfy**

$$
\tilde{f}_n(k) = \frac{2}{\lambda_n} \tilde{\rho}^*(k/\sqrt{2}) \tilde{f}_n(k/\sqrt{2}). \tag{12.51}
$$

(4) **Find the eigenvalues and calculate the universal critical exponents.**

(f) **Show that**

$$
\tilde{f}_n(k) = (ik)^n \tilde{\rho}^*(k) \tag{12.52}
$$

is the Fourier transform of an eigenfunction (i.e. that it satisfies eqn 12.51.) What is the eigenvalue $\lambda_n$?

Our fixed point actually does not attract all distributions near it. The directions with eigenvalues greater than one are called **relevant**; they are dangerous, corresponding to deviations from our fixed point that grow under coarse-graining. The directions with eigenvalues equal to one are called **marginal**; they do not get smaller (to linear order) and are thus also potentially dangerous. When you find relevant and marginal operators, you always need to understand each of them on physical grounds.

(g) **The eigenfunction $f_0(x)$ with the biggest eigenvalue corresponds to an unphysical perturbation; why?** (Hint: Probability distributions must be normalized to one.) The next two eigenfunctions $f_1$ and $f_2$ have important physical interpretations. Show that $\rho^* + \epsilon f_1$ is equivalent to a shift in the mean of $\rho$, and $\rho^* + \epsilon f_2$ is a shift in the standard deviation $\sigma$ of $\rho^*$, to linear order in the shifts.

In this case, the relevant perturbations do not take us to qualitatively new phases—just to other Gaussians with different means and variances. All other eigenfunctions should have eigenvalues $\lambda_n$ less than one. This means that a perturbation in that direction will shrink under the renormalization-group transformation:

$$
T^N(\rho^* + \epsilon f_n) - \rho^* \sim \lambda_n^N \epsilon f_n. \tag{12.53}
$$

**Corrections to scaling and coin flips.** Does anything really new come from all this analysis? One nice thing that comes out is the **leading corrections to scaling.** The fixed point of the renormalization group explains the Gaussian shape of the distribution of $N$ coin flips in the limit $N \to \infty$, but the linearization about the fixed point gives a systematic understanding of the corrections to the Gaussian distribution for large but not infinite $N$.

Usually, the largest eigenvalues are the ones which dominate. In our problem, consider adding a small perturbation to the fixed point $\rho^*$ along the two leading irrelevant directions $f_3$ and $f_4$:

$$
\rho(x) = \rho^*(x) + \epsilon_3 f_3(x) + \epsilon_4 f_4(x). \tag{12.54}
$$

These two eigenfunctions can be inverse-transformed from their $k$-space form (eqn 12.52):

$$
f_3(x) \propto \rho^*(x)\left(\frac{3x}{\sigma} - \frac{x^3}{\sigma^3}\right), \tag{12.55}
$$

$$
f_4(x) \propto \rho^*(x)\left(3 - \frac{6x^2}{\sigma^2} + \frac{x^4}{\sigma^4}\right).
$$

What happens to these perturbations under multiple applications of our renormalization-group transformation $T$? After $\ell$ applications (corresponding to adding together $2^\ell$ of our random variables), the new distribution should be given by

$$
T^\ell(\rho)(x) \sim \rho^*(x) + \lambda_3^\ell \epsilon_3 f_3(x) + \lambda_4^\ell \epsilon_4 f_4(x). \tag{12.56}
$$

Since $1 > \lambda_3 > \lambda_4$, the leading correction should be dominated by the perturbation with the largest eigenvalue.

(h) **Plot the difference between the binomial distribution giving the probability of $m$ heads in $N$ coin flips, and a Gaussian of the same mean and width, for $N = 10$ and $N = 20$.** (The Gaussian has mean of $N/2$ and standard deviation $\sqrt{N}/2$, as you can extrapolate from the case $N = 1$.) **Does it approach one of the eigenfunctions $f_3$ or $f_4$ (eqns 12.55)?**

(i) **Why did a perturbation along $f_3(x)$ not dominate the asymptotics? What symmetry forced $\epsilon_3 = 0$? Should flips of a biased coin break this symmetry?**

Using the renormalization group to demonstrate the central limit theorem might not be the most efficient route to the theorem, but it provides quantitative insights into how and why the probability distributions approach the asymptotic Gaussian form.
## Solution
我们逐项解答这个关于重整化群与中心极限定理的习题。整个问题在函数空间上构造粗粒化变换，利用傅里叶变换求得高斯不动点及其本征扰动，进而揭示中心极限定理的收敛性和修正项。

---

### (b) 归一化与傅里叶变换
已知缩放算子  
$$
S_{\sqrt{2}}[\rho](x)=\sqrt{2}\,\rho(\sqrt{2}x).
$$  
**归一化：**  
$$
\int_{-\infty}^\infty S_{\sqrt{2}}[\rho](x)\,dx
= \int_{-\infty}^\infty \sqrt{2}\,\rho(\sqrt{2}x)\,dx
\overset{y=\sqrt{2}x}{=} \int_{-\infty}^\infty \sqrt{2}\,\rho(y)\,\frac{dy}{\sqrt{2}}
= \int_{-\infty}^\infty \rho(y)\,dy = 1.
$$  
**傅里叶变换：**  
$$
\mathcal{F}[S_{\sqrt{2}}[\rho]](k)
= \int_{-\infty}^\infty e^{-ikx}\sqrt{2}\,\rho(\sqrt{2}x)\,dx
= \int_{-\infty}^\infty e^{-ik(y/\sqrt{2})}\sqrt{2}\,\rho(y)\,\frac{dy}{\sqrt{2}}
= \int_{-\infty}^\infty e^{-i(k/\sqrt{2})y}\rho(y)\,dy
= \tilde{\rho}\!\left(\frac{k}{\sqrt{2}}\right).
$$  
证毕。

---

### (c) 高斯分布是不动点
高斯分布  
$$
\rho^*(x)=\frac{1}{\sqrt{2\pi}\sigma}\exp\!\left(-\frac{x^2}{2\sigma^2}\right).
$$  
先做卷积 $C[\rho^*]=\rho^*\ast\rho^*$。两个独立零均值、方差为 $\sigma^2$ 的高斯变量之和仍为高斯，方差变为 $2\sigma^2$，即  
$$
C[\rho^*](x)=\frac{1}{\sqrt{2\pi(2\sigma^2)}}\exp\!\left(-\frac{x^2}{4\sigma^2}\right).
$$  
再作用缩放算子：  
$$
T[\rho^*](x)=S_{\sqrt{2}}\bigl[C[\rho^*]\bigr](x)=\sqrt{2}\,C[\rho^*](\sqrt{2}x)
=\sqrt{2}\,\frac{1}{\sqrt{4\pi\sigma^2}}\exp\!\left(-\frac{2x^2}{4\sigma^2}\right)
=\frac{1}{\sqrt{2\pi}\sigma}\exp\!\left(-\frac{x^2}{2\sigma^2}\right)=\rho^*(x).
$$  
因此 $T[\rho^*]=\rho^*$，高斯是重整化群变换 $T$ 的不动点。

---

### (d) 傅里叶空间中的变换与不动点
已知 $\mathcal{F}[C[\rho]](k)=[\tilde{\rho}(k)]^2$，以及 $\mathcal{F}\bigl[S_{\sqrt{2}}[\rho]\bigr](k)=\tilde{\rho}(k/\sqrt{2})$，故  
$$
\mathcal{F}[T[\rho]](k)=\mathcal{F}\bigl[S_{\sqrt{2}}[C[\rho]]\bigr](k)
=\mathcal{F}[C[\rho]]\!\left(\frac{k}{\sqrt{2}}\right)
=\left[\tilde{\rho}\!\left(\frac{k}{\sqrt{2}}\right)\right]^2 \equiv \tilde{T}[\tilde{\rho}](k).
$$  
高斯不动点的傅里叶变换为  
$$
\tilde{\rho}^*(k)=\exp\!\left(-\frac{\sigma^2k^2}{2}\right).
$$  
验证不动点：  
$$
\tilde{T}[\tilde{\rho}^*](k)=\left[\tilde{\rho}^*\!\left(\frac{k}{\sqrt{2}}\right)\right]^2
=\Bigl[\exp\!\left(-\frac{\sigma^2k^2}{4}\right)\Bigr]^2
=\exp\!\left(-\frac{\sigma^2k^2}{2}\right)=\tilde{\rho}^*(k).
$$  
所以 $\tilde{\rho}^*$ 是 $\tilde{T}$ 的不动点。

---

### (e) 本征函数的傅里叶变换满足的方程
令 $\tilde{\rho}=\tilde{\rho}^*+\epsilon\tilde{f}_n$，代入 $\tilde{T}$：  
$$
\tilde{T}[\tilde{\rho}^*+\epsilon\tilde{f}_n](k)
=\left[\tilde{\rho}^*\!\left(\frac{k}{\sqrt{2}}\right)+\epsilon\tilde{f}_n\!\left(\frac{k}{\sqrt{2}}\right)\right]^2
=\left[\tilde{\rho}^*\!\left(\frac{k}{\sqrt{2}}\right)\right]^2 + 2\epsilon\,\tilde{\rho}^*\!\left(\frac{k}{\sqrt{2}}\right)\tilde{f}_n\!\left(\frac{k}{\sqrt{2}}\right) + \mathcal{O}(\epsilon^2).
$$  
已知 $\tilde{\rho}^*(k)=\bigl[\tilde{\rho}^*(k/\sqrt{2})\bigr]^2$，且按定义 $\tilde{T}[\tilde{\rho}^*+\epsilon\tilde{f}_n]=\tilde{\rho}^*+\lambda_n\epsilon\tilde{f}_n+\mathcal{O}(\epsilon^2)$。比较 $\epsilon$ 的一次项得  
$$
\lambda_n \tilde{f}_n(k) = 2\tilde{\rho}^*\!\left(\frac{k}{\sqrt{2}}\right)\tilde{f}_n\!\left(\frac{k}{\sqrt{2}}\right),
\qquad\Longrightarrow\qquad
\tilde{f}_n(k) = \frac{2}{\lambda_n}\,\tilde{\rho}^*\!\left(\frac{k}{\sqrt{2}}\right)\tilde{f}_n\!\left(\frac{k}{\sqrt{2}}\right).
$$  
此即式 (12.51)。

---

### (f) 本征值与本征函数
尝试形如 $\tilde{f}_n(k)=(ik)^n\tilde{\rho}^*(k)$ 的解。代入 (12.51) 的右边：  
$$
\frac{2}{\lambda_n}\,\tilde{\rho}^*\!\left(\frac{k}{\sqrt{2}}\right)
\left(i\frac{k}{\sqrt{2}}\right)^n \tilde{\rho}^*\!\left(\frac{k}{\sqrt{2}}\right)
= \frac{2}{\lambda_n}\left(\frac{1}{\sqrt{2}}\right)^n (ik)^n
\Bigl[\tilde{\rho}^*\!\left(\frac{k}{\sqrt{2}}\right)\Bigr]^2.
$$  
利用 $\bigl[\tilde{\rho}^*(k/\sqrt{2})\bigr]^2=\tilde{\rho}^*(k)$，上式化为  
$$
\frac{2}{\lambda_n} \, 2^{-n/2} (ik)^n \tilde{\rho}^*(k).
$$  
要等于左边的 $(ik)^n\tilde{\rho}^*(k)$，必须有  
$$
\frac{2}{\lambda_n}2^{-n/2}=1 \quad\Longrightarrow\quad \lambda_n = 2^{1-n/2}.
$$  
因此本征函数 $\tilde{f}_n(k)=(ik)^n\tilde{\rho}^*(k)$，对应的本征值为  
$$
\lambda_n = 2^{1-n/2}.
$$  
具体地：$\lambda_0=2,\ \lambda_1=\sqrt{2},\ \lambda_2=1,\ \lambda_3=1/\sqrt{2},\ \lambda_4=1/2,\dots$。

---

### (g) 前几个本征函数的物理意义
- $n=0$：$\tilde{f}_0(k)=\tilde{\rho}^*(k)$，故 $f_0(x)=\rho^*(x)$。扰动 $\epsilon f_0$ 意味着 $\rho\approx(1+\epsilon)\rho^*$，这会改变总概率（积分变成 $1+\epsilon$），破坏归一化。因此这个方向在物理上被禁止，必须舍弃。

- $n=1$：$\lambda_1=\sqrt{2}>1$（相关扰动）。$\tilde{f}_1(k)=ik\tilde{\rho}^*(k)$，逆变换为  
  $$
  f_1(x) = \frac{d}{dx}\rho^*(x).
  $$  
  对于小 $\epsilon$，  
  $$
  \rho^*(x)+\epsilon f_1(x) \approx \rho^*(x+\epsilon),
  $$  
  即整个分布平移了 $-\epsilon$（均值发生移动）。所以 $f_1$ 对应均值的变化。

- $n=2$：$\lambda_2=1$（边缘扰动）。$\tilde{f}_2(k)=(ik)^2\tilde{\rho}^*(k)=-k^2\tilde{\rho}^*(k)$，逆变换为  
  $$
  f_2(x) = \frac{d^2}{dx^2}\rho^*(x)
  = \left(-\frac{1}{\sigma^2}+\frac{x^2}{\sigma^4}\right)\rho^*(x).
  $$  
  考虑标准差从 $\sigma$ 变为 $\sigma+\delta\sigma$：  
  $$
  \rho_{\sigma+\delta\sigma}(x) \approx \rho^*(x) + \delta\sigma\left(-\frac{1}{\sigma}+\frac{x^2}{\sigma^3}\right)\rho^*(x)
  = \rho^*(x) + (\delta\sigma\,\sigma)\, f_2(x).
  $$  
  所以 $\epsilon f_2$ 相当于改变标准差（方差），且因为 $\lambda_2=1$，方差在粗粒化下不衰减也不放大，是边缘方向。

---

### (h) 二项分布与高斯分布的差值（$N=10,\,20$）
考虑公平硬币抛掷 $N$ 次，正面次数 $m$ 的概率为  
$$
P_N(m)=\frac{1}{2^N}\binom{N}{m},\qquad m=0,1,\dots,N.
$$  
均值 $\mu=N/2$，标准差 $\sigma=\sqrt{N}/2$。与之对比的高斯概率质量近似为（区间宽度为 1）  
$$
G_N(m)=\frac{1}{\sqrt{2\pi}\sigma}\exp\!\left[-\frac{(m-\mu)^2}{2\sigma^2}\right].
$$  
作差 $\Delta P_N(m)=P_N(m)-G_N(m)$。

以 $N=10$ 和 $N=20$ 计算该差值（此处给出对称半边的代表性数值，完整曲线可据此绘制）：

**$N=10$** ($\mu=5,\ \sigma\approx1.581$)  
- $m=5$: $P=0.24609,\ G\approx0.25231,\ \Delta P\approx-0.00622$  
- $m=6$: $P=0.20508,\ G\approx0.20689,\ \Delta P\approx-0.00181$  
- $m=7$: $P=0.11719,\ G\approx0.11337,\ \Delta P\approx+0.00382$  
- $m=8$: $P=0.04395,\ G\approx0.04165,\ \Delta P\approx+0.00230$  
- $m=9$: $P=0.00977,\ G\approx0.01026,\ \Delta P\approx-0.00049$  

**$N=20$** ($\mu=10,\ \sigma\approx2.236$)  
- $m=10$: $P\approx0.17620,\ G\approx0.17841,\ \Delta P\approx-0.00221$  
- $m=11$: $P\approx0.16018,\ G\approx0.16085,\ \Delta P\approx-0.00067$  
- $m=12$: $P\approx0.12013,\ G\approx0.11959,\ \Delta P\approx+0.00054$  
- $m=13$: $P\approx0.07393,\ G\approx0.07326,\ \Delta P\approx+0.00067$  
- $m=14$: $P\approx0.03696,\ G\approx0.03695,\ \Delta P\approx+0.00001$  
- $m=15$: $P\approx0.01479,\ G\approx0.01533,\ \Delta P\approx-0.00054$  

差值形状为**偶函数**：在均值处为负，两侧先升为正，再在尾部降为负。这与 $f_4(x)$ 的形状一致：  
$$
f_4(x)\propto\rho^*(x)\left(\frac{x^4}{\sigma^4}-\frac{6x^2}{\sigma^2}+3\right),
$$  
该多项式在 $x=0$ 处为正 (3)，而 $\Delta P$ 在中心为负，两者符号看似相反，但本征函数可以乘任意常数（包括负号）。调整符号后，偶对称、中心与尾部同号、中间反号的形态正是四阶厄米多项式调制高斯的特征。因此观察到的差值确实趋近于 $f_4$，而 $f_3$（奇函数）的分量未出现。

---

### (i) 对称性与 $\epsilon_3=0$ 的原因
本征函数 $f_3(x)\propto\rho^*(x)\bigl(\frac{3x}{\sigma}-\frac{x^3}{\sigma^3}\bigr)$ 是**奇函数**。公平硬币得到的二项分布严格对称：$P_N(m)=P_N(N-m)$，即关于均值对称，因此 $P_N(\mu+x)=P_N(\mu-x)$。任何偶函数的成分中不可能含有奇函数扰动，故展开时 $\epsilon_3=0$ 被对称性自动强制。这就是为什么分布趋近高斯的过程中，$f_3$ 并不出现，主导修正的是下一个偶函数 $f_4$（对应峰度修正）。

若硬币**有偏**（正反面概率不相等），则二项分布不再对称，此时偏度非零，$\epsilon_3$ 将不再为零，$f_3$ 扰动会在渐近行为中显现，并因 $\lambda_3>\lambda_4$ 而成为主导修正项。

