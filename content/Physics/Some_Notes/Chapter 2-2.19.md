# (2.19) Run & tumble.

*(Active matter, Biology)* ③

Purcell, in an essay *Life at low Reynolds number* [154], describes the strange physical world at the scale of bacteria. 52

The bacterium *E. coli* swims using roughly five corkscrew‑shaped propellers called *flagella*, which spin at 100 revolutions per second. These propellers mesh nicely into a bundle when they rotate counter‑clockwise, causing the bacterium to *run* forward. But when they rotate clockwise, the bundle flies apart and the bacterium *tumbles*. Assume that during a tumble the bacterium does not change position, and after a tumble it is pointed in a random direction. Pretend the runs are of fixed duration $T \approx 1 \, \text{s}$ and speed $V \approx 20 \, \mu\text{m/s}$, and they alternate with tumbles of duration $\tau \approx 0.1 \, \text{s}$. (Real cells shift from runs to tumbles with a continuous distribution of run times, and do not completely scramble their orientation after a tumble, Exercise 2.22.)

(a) What is the mean‑square distance $\langle \mathbf{r}^2(t) \rangle$ moved by our bacterium after a time $t = N(T + \tau)$, in terms of $V$, $T$, $t$, and $\tau$? What is the formula for the diffusion constant? (Hint: Be careful; your formula for the diffusion constant should depend on the fact that the diffusion is in three dimensions.)

Purcell tells us that the cell does not need to swim to get to new food after it has exhausted the local supply. Instead, it can just wait for food molecules to diffuse to it, with a rate he says is $4\pi aND$ food molecules per second. Here $a$ is the radius of the cell, $N$ is the food concentration at infinity, and $D \approx 10^{-9} \, \text{m}^2/\text{s}$ is the food diffusion constant.

(b) Assume the food is eaten by the bacterium with perfect efficiency at the sphere of radius $a$. Solve the diffusion equation for the density of food molecules, and confirm Purcell’s formula for the rate at which food is eaten. (Hint: You may want to use the Laplacian in spherical coordinates:

$$
\nabla^2 \rho = \frac{1}{r^2} \frac{\partial}{\partial r} \left( r^2 \frac{\partial \rho}{\partial r} \right)
$$

if the function $\rho(r) = \rho(r)$ has spherical symmetry.)

The cell lives in an environment which varies in space. It swims to move toward regions with higher concentrations of food, and lower concentrations of poisons (a behavior called **chemotaxis**). Bacteria are too small to sense the concentration gradient from one side of the cell to the other. The run‑and‑tumble strategy is designed to move them far enough to tell if things are getting better. In particular, the cells run for longer times when things are getting better (but not shorter when things are getting worse).

(c) Model chemotaxis with a one‑dimensional run‑and‑tumble model along a coordinate $x$. The velocity $\pm V$ is chosen with equal probability at each tumble, with the same velocity and tumble time $\tau$ as above. But now the duration $T_+$ of runs in the positive $x$ direction is larger than the duration $T_-$ of runs in the negative direction. Compare the run speed $V$ to the average velocity $\langle dx/dt \rangle$ of the bacterium toward a better life.

> Note that this one‑dimensional biased random walk is also used to analyze the transcription of DNA to RNA [119, SI.C].

## Solution
### (a) 均方位移与扩散常数

细菌的运动由“run”和“tumble”交替组成：
- 每次 **run** 持续 $T$，以恒定速率 $V$ 沿随机方向直线运动；
- 每次 **tumble** 持续 $\tau$，期间原地不动，结束后随机选择新的方向（三维空间各向同性）。

一个完整周期耗时 $T+\tau$。经时间 $t = N(T+\tau)$ 后，恰好完成 $N$ 个周期。

每次 run 的位移向量为 $\mathbf{L}$，其大小为 $VT$，方向在三维球面上均匀分布。对于三维各向同性单位向量，有 $\langle \cos^2\theta \rangle = 1/3$，因此均方位移  
$$
\langle \mathbf{L}^2 \rangle = (VT)^2.
$$  
因为每次 run 的方向完全独立，总位移的平方期望为  
$$
\langle \mathbf{r}^2(t) \rangle = N \langle \mathbf{L}^2 \rangle = \frac{t}{T+\tau} (VT)^2 = \frac{V^2 T^2}{T+\tau}\, t.
$$

三维扩散满足 $\langle \mathbf{r}^2 \rangle = 6 D_b t$，于是细菌的等效扩散常数  
$$
D_b = \frac{V^2 T^2}{6(T+\tau)}.
$$  
代入数量级估算：$V \approx 20\ \mu\text{m/s}$，$T \approx 1\ \text{s}$，$\tau \approx 0.1\ \text{s}$，
$$
D_b \approx \frac{(20\times10^{-6})^2 \times 1^2}{6\times 1.1} \approx 6.1\times 10^{-11}\ \text{m}^2/\text{s}.
$$

---

### (b) 食物分子扩散通量与 Purcell 公式

细菌视作半径为 $a$ 的球体，能完美吸收接触到球面的食物分子。食物分子在周围液体中的扩散系数为 $D$，无穷远处浓度恒为 $N$。系统达到稳态时，浓度分布 $\rho(r)$ 满足球对称扩散方程  
$$
\nabla^2\rho = \frac{1}{r^2}\frac{d}{dr}\!\left(r^2\frac{d\rho}{dr}\right) = 0.
$$  
积分一次得  
$$
r^2\frac{d\rho}{dr} = C \quad\Longrightarrow\quad \frac{d\rho}{dr} = \frac{C}{r^2},
$$  
再积分得通解  
$$
\rho(r) = -\frac{C}{r} + B.
$$  
边界条件：
- $r \to \infty$ 时 $\rho \to N$，得 $B = N$；
- $r = a$ 时完全吸收，$\rho(a) = 0$，得 $0 = -\dfrac{C}{a} + N \;\Longrightarrow\; C = Na$.

因此浓度分布为  
$$
\rho(r) = N\left(1 - \frac{a}{r}\right), \qquad \frac{d\rho}{dr} = \frac{Na}{r^2}.
$$  
在球面 $r=a$ 处，浓度梯度为 $Na/a^2 = N/a$。由 Fick 第一定律，向内扩散通量大小为 $D (N/a)$。穿过整个球面的总分子流率（单位时间到达球面的分子数）为  
$$
I = 4\pi a^2 \times D\frac{N}{a} = 4\pi a N D.
$$  
这就是 Purcell 公式，与题目所给一致。

---

### (c) 一维 run‑and‑tumble 趋化模型

在一维情形中，细菌沿 $x$ 轴运动。每次 tumble 后等概率选择正、负方向，tumble 时长仍为 $\tau$。但在正方向 run 的持续时间记为 $T_+$，负方向记为 $T_-$，且 $T_+ > T_-$ 对应环境趋好方向为 $+x$。

考虑一个完整的“选择—运行”循环。一次循环从刚完成 tumble 并选定新方向开始，持续到下一次 tumble 结束：
- 选到正方向的概率为 $1/2$，此循环位移 $+VT_+$，耗时 $\tau + T_+$；
- 选到负方向的概率为 $1/2$，位移 $-VT_-$，耗时 $\tau + T_-$。

平均循环时间  
$$
\langle T_{\text{cycle}} \rangle = \frac{1}{2}(\tau + T_+) + \frac{1}{2}(\tau + T_-) = \tau + \frac{T_+ + T_-}{2}.
$$  
平均净位移  
$$
\langle \Delta x \rangle = \frac{1}{2}VT_+ - \frac{1}{2}VT_- = \frac{V}{2}(T_+ - T_-).
$$

长时间平均速度（即漂移速度）为  
$$
\left\langle \frac{dx}{dt} \right\rangle = \frac{\langle \Delta x \rangle}{\langle T_{\text{cycle}} \rangle} = \frac{\frac{V}{2}(T_+ - T_-)}{\tau + \frac{T_+ + T_-}{2}} = V \frac{T_+ - T_-}{2\tau + T_+ + T_-}.
$$

因为 $T_+ - T_- > 0$ 且分母大于分子中的差值，故平均迁移速度必然小于 run 本身的速度 $V$。细菌通过调节 $T_+$ 与 $T_-$ 的差异，在不改变 run 速度的情况下实现了向着有利方向的有效漂移——这正是趋化性的简单运动学机制。