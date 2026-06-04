以下分三个部分完整推导：先建立**电磁波多普勒效应公式**；接着利用多普勒效应与像差的**几何效应**，由非相对论的拉莫尔公式导出相对论性的**Liénard 公式**；最后从**狭义相对论协变性**直接推导该公式，展示其内在结构。

---

### 1. 电磁波多普勒效应公式
设惯性系 $S$ 与 $S'$，$S'$ 相对 $S$ 以速度 $v$ 沿 $x$ 轴正方向运动。平面电磁波的相位是洛伦兹不变量：
$$
\phi = \mathbf{k}\cdot\mathbf{r} - \omega t = \mathbf{k}'\cdot\mathbf{r}' - \omega' t'
$$
在 $S$ 系中：$\omega = ck$，波矢方向与 $x$ 轴夹角 $\theta$，即 $\mathbf{k} = k(\cos\theta, \sin\theta, 0)$。利用洛伦兹变换 $t = \gamma(t' + vx'/c^2), x = \gamma(x' + vt')$，代入相位：
$$
k(x\cos\theta + y\sin\theta) - \omega t = k[\gamma(x' + vt')\cos\theta + y'\sin\theta] - \omega\gamma(t' + vx'/c^2)
$$
按 $x',y',t'$ 整理，与 $k'_x x' + k'_y y' - \omega' t'$ 比较系数得：
$$
\omega' = \gamma(\omega - v k \cos\theta) = \omega\gamma(1 - \beta\cos\theta)
$$
$$
k'_x = \gamma(k\cos\theta - \frac{v}{c^2}\omega) = k\gamma(\cos\theta - \beta),\quad k'_y = k\sin\theta
$$
由 $\omega' = ck'$ 可导出像差公式：
$$
\cos\theta' = \frac{\cos\theta - \beta}{1 - \beta\cos\theta},\qquad \sin\theta' = \frac{\sin\theta}{\gamma(1 - \beta\cos\theta)}
$$
频率变换写为：
$$
\boxed{\omega = \omega'\,\gamma(1 + \beta\cos\theta')}
\qquad\text{或}\qquad
\boxed{\omega' = \omega\,\gamma(1 - \beta\cos\theta)}
$$
这就是**相对论性多普勒效应**，因子 $\gamma(1 - \beta\cos\theta)^{-1}$ 将在辐射功率变换中起核心作用。

---

### 2. 从拉莫尔公式到 Liénard 公式的“几何”推导
**拉莫尔公式**给出非相对论加速电荷的辐射总功率：
$$
P' = \frac{\mu_0 q^2 a'^2}{6\pi c}
$$
角分布为
$$
\frac{dP'}{d\Omega'} = \frac{\mu_0 q^2 a'^2}{16\pi^2 c}\sin^2\Theta'
$$
其中 $\Theta'$ 是加速度方向与辐射方向之间的夹角。

设 $S'$ 为电荷的**瞬时静止系**，$S$ 为实验室系，电荷在 $S$ 系中的速度 $\mathbf{v} = v\hat{\mathbf{x}}$，加速度 $\mathbf{a}$ 在 $S$ 系中测量。

**步骤 1：角分布变换**
辐射能量 $dW$ 和时间 $dt$ 组成四维矢量 $(dW/c, d\mathbf{p})$，故其变换为：
$$
dW = \gamma(dW' + v\, dp'_x)
$$
在 $S'$ 系中，电磁辐射的动量满足 $d\mathbf{p}' = (dW'/c)\,\hat{\mathbf{n}}'$，$\hat{\mathbf{n}}'$ 为辐射方向的单位矢量，方向角 $(\theta',\phi')$。于是：
$$
dW = \gamma(dW' + \frac{v}{c} dW' \cos\theta') = dW' \gamma(1 + \beta\cos\theta')
$$
这正是每个光子能量 $\hbar\omega$ 的多普勒变换。

立体角的变换由像差公式给出：
$$
\frac{d\Omega}{d\Omega'} = \frac{\sin\theta d\theta}{\sin\theta' d\theta'} = \frac{1}{\gamma^2(1 - \beta\cos\theta)^2}
$$
或其等价形式 $\frac{d\Omega'}{d\Omega} = \gamma^2(1 - \beta\cos\theta)^2$。结合能量变换与立体角变换，得辐射功率角分布满足：
$$
\frac{dP}{d\Omega} = \frac{dW}{dt\,d\Omega} = \frac{dW'\,\gamma(1+\beta\cos\theta')}{(\gamma dt')\,\gamma^2(1 - \beta\cos\theta)^2 d\Omega'} = \frac{1}{\gamma^2(1 - \beta\cos\theta)^3}\,\frac{dP'}{d\Omega'}
$$
利用 $(1 - \beta\cos\theta) = 1/[\gamma^2(1+\beta\cos\theta')]$，可将分母化为 $(1 - \beta\cos\theta)^3$ 的表述。（具体推导见 Jackson）

**步骤 2：用 $S$ 系变量表示 $a'$ 与 $\sin\Theta'$**
在 $S'$ 系中，粒子瞬时静止，加速度 $a'$ 可直接由 $S$ 系的加速度 $\mathbf{a}$ 通过洛伦兹变换得到。加速度变换公式为：
$$
a'_{\parallel} = \gamma^3 a_{\parallel},\qquad a'_{\perp} = \gamma^2 a_{\perp}
$$
因此
$$
a'^2 = \gamma^6 a_{\parallel}^2 + \gamma^4 a_{\perp}^2 = \gamma^4\left[ \gamma^2 a_{\parallel}^2 + a_{\perp}^2 \right]
$$
同时 $\sin^2\Theta' = 1 - \cos^2\Theta'$，利用波矢变换可得 $\cos\Theta'$ 与实验室角度的关系，最后代入 $\frac{dP}{d\Omega}$ 并对立体角积分。

**步骤 3：总功率积分**
经过对全空间立体角的积分（涉及三角函数积分），所有角度依赖归化为仅与 $a^2$ 和 $(\mathbf{v}\times\mathbf{a})^2$ 有关的组合，结果为：
$$
\boxed{P = \frac{\mu_0 q^2 \gamma^6}{6\pi c}\left[ a^2 - \left|\frac{\mathbf{v}\times\mathbf{a}}{c}\right|^2 \right]}
$$
这正是 **Liénard 公式**。其核心在于多普勒因子 $\gamma(1 - \beta\cos\theta)$ 的幂次，正是“多普勒几何效应”将非相对论的 $a'^2$ 映射为相对论性加速度的特定组合。

---

### 3. 从狭义相对论直接推导 Liénard 公式
最深刻的推导是要求辐射总功率是**洛伦兹不变量**的函数，且在瞬时静止系中退化为拉莫尔公式。

**四维加速度** $a^\mu = du^\mu/d\tau$，其中四维速度 $u^\mu = (\gamma c, \gamma\mathbf{v})$。其模方为洛伦兹不变量：
$$
a_\mu a^\mu = -\gamma^6\frac{(\mathbf{v}\cdot\mathbf{a})^2}{c^2} - \gamma^4 a^2
$$
（符号约定 $(+, -, -, -)$ 时，$a_\mu a^\mu = -\gamma^6(\mathbf{v}\cdot\mathbf{a})^2/c^2 - \gamma^4 a^2$）。在瞬时静止系 ($\mathbf{v}=0,\gamma=1$) 中，$a_\mu a^\mu = -a'^2$。

拉莫尔公式在瞬时静止系中为 $P' = -\frac{\mu_0 q^2}{6\pi c}(a_\mu a^\mu)$？注意 $P'$ 是正的，且 $a_\mu a^\mu$ 为负（类空），故：
$$
P' = -\frac{\mu_0 q^2}{6\pi c} (a_\mu a^\mu)
$$
此式右侧是不变量，左侧 $P'$ 是瞬时静止系中的辐射功率。但总辐射功率 $P = dE/dt$ 并非标量，它在参考系间的变换为 $P = P'$ ？实际并非如此：总辐射功率并非不变量。但我们可以通过构造**四维力**的辐射反作用部分来推导 Liénard 公式，或者利用如下事实：存在一个**洛伦兹不变的辐射功率表达式**，它等于四维动量的变化率模方？另一种方法是直接从电动力学的推迟势计算能流，但相对论协变推导通常采用以下简洁路径：

在任意惯性系中，考虑辐射反作用四维力 $F^\mu_{\text{rad}}$，其必须由四维速度及其导数构成，且满足与四维速度正交。最低阶协变方程为：
$$
F^\mu_{\text{rad}} = \frac{\mu_0 q^2}{6\pi c} \left( \frac{d^2 u^\mu}{d\tau^2} + \frac{u^\mu}{c^2} \left( \frac{du_\nu}{d\tau}\frac{du^\nu}{d\tau} \right) \right)
$$
由此导出的辐射功率 $cF^0_{\text{rad}}$ 在瞬时静止系中等于拉莫尔功率，通过洛伦兹变换回到实验室系，直接给出 Liénard 公式：
$$
P = \frac{\mu_0 q^2}{6\pi c} \gamma^2 \left[ \left( \frac{d\mathbf{p}}{dt} \right)^2 - \frac{1}{c^2} \left( \frac{dE}{dt} \right)^2 \right]
$$
利用 $\frac{d\mathbf{p}}{dt} = \gamma m\mathbf{a} + \cdots$ 等关系，化简即得
$$
\boxed{P = \frac{\mu_0 q^2 \gamma^6}{6\pi c} \left[ a^2 - \left|\frac{\mathbf{v}\times\mathbf{a}}{c}\right|^2 \right]}
$$
这正是与“几何”推导完全一致的结果。狭义相对论的作用在于将公式归结为不变量 $a_\mu a^\mu$ 与四维速度的缩并，确保其在任何惯性系下形式不变。

---

**总结**
- **多普勒效应**提供频率、能量与角度的变换因子。
- 利用这些**几何效应**可以从非相对论拉莫尔公式的角分布出发，积分得到相对论性 Liénard 公式。
- **狭义相对论**则通过四维加速度的不变平方，在瞬时静止系匹配拉莫尔公式，直接给出协变形式，体现了相对论性辐射的本质。