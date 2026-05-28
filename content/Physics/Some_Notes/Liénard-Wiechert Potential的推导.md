下面推导一个作任意运动的点电荷产生的 **Liénard-Wiechert 势**。推导用国际单位制（SI），核心思路是将点电荷源代入推迟势的一般积分公式，再用 δ 函数的性质严格处理推迟关系。

---

### 1. 推迟势的一般形式
在 Lorenz 规范下，推迟势解为
$$
\varphi(\mathbf{r}, t)=\frac{1}{4\pi\varepsilon_0}\int \frac{\rho(\mathbf{r}', t_r)}{R}\,\mathrm{d}^3r'
\qquad
\mathbf{A}(\mathbf{r}, t)=\frac{\mu_0}{4\pi}\int \frac{\mathbf{J}(\mathbf{r}', t_r)}{R}\,\mathrm{d}^3r'
$$
其中
$$
R = |\mathbf{r} - \mathbf{r}'|,\qquad t_r = t - \frac{R}{c}.
$$

---

### 2. 点电荷的源：电荷密度与电流密度
设点电荷电量为 $q$，其位置随时间变化为 $\mathbf{r}_0(t)$，速度 $\mathbf{v}(t)=\mathrm{d}\mathbf{r}_0/\mathrm{d}t$。对应的电荷密度和电流密度为
$$
\rho(\mathbf{r}', t') = q\,\delta^3\bigl(\mathbf{r}' - \mathbf{r}_0(t')\bigr)
$$
$$
\mathbf{J}(\mathbf{r}', t') = q\,\mathbf{v}(t')\,\delta^3\bigl(\mathbf{r}' - \mathbf{r}_0(t')\bigr)
$$
其中 $t'$ 是源点的时间坐标。

---

### 3. 代入推迟势并换序积分
以标量势为例，将 $\rho$ 代入：
#Dirac_Delta_Function
$$
\varphi(\mathbf{r}, t) = \frac{q}{4\pi\varepsilon_0}\int \frac{\delta^3\bigl(\mathbf{r}' - \mathbf{r}_0(t_r)\bigr)}{|\mathbf{r} - \mathbf{r}'|}\,\mathrm{d}^3r'
$$
注意 $t_r = t - |\mathbf{r} - \mathbf{r}'|/c$ 是 $\mathbf{r}'$ 的函数，δ 函数中包含了这个复杂的推迟依赖。直接积分不方便，现引入一个对时间的积分并利用恒等变形：
$$
\delta^3\bigl(\mathbf{r}' - \mathbf{r}_0(t_r)\bigr) = \int_{-\infty}^{\infty} \delta^3\bigl(\mathbf{r}' - \mathbf{r}_0(t')\bigr)\,\delta(t' - t_r)\,\mathrm{d}t'
$$
则
$$
\varphi = \frac{q}{4\pi\varepsilon_0}\int \mathrm{d}t' \int \mathrm{d}^3r' \frac{\delta^3\bigl(\mathbf{r}' - \mathbf{r}_0(t')\bigr)}{R}\,\delta\!\left(t' - t + \frac{R}{c}\right)
$$
先对 $\mathbf{r}'$ 积分，δ 函数直接将 $\mathbf{r}'$ 固定为 $\mathbf{r}_0(t')$，于是 $R = |\mathbf{r} - \mathbf{r}_0(t')|$，记
$$
R(t') = |\mathbf{r} - \mathbf{r}_0(t')|.
$$
积分变为
$$
\varphi = \frac{q}{4\pi\varepsilon_0}\int_{-\infty}^{\infty} \frac{1}{R(t')}\,\delta\!\left(t' - t + \frac{R(t')}{c}\right)\,\mathrm{d}t'
\tag{1}
$$

---

### 4. 处理 δ 函数并解出推迟时间
令
$$
f(t') = t' - t + \frac{R(t')}{c}.
$$
推迟时间 $t_{\text{ret}}$ 由 $f(t_{\text{ret}}) = 0$ 唯一确定，即
$$
t_{\text{ret}} = t - \frac{|\mathbf{r} - \mathbf{r}_0(t_{\text{ret}})|}{c}.
\tag{2}
$$
利用 δ 函数公式
$$
\delta\bigl(f(t')\bigr) = \frac{\delta(t' - t_{\text{ret}})}{\left|\frac{\mathrm{d}f}{\mathrm{d}t'}\right|_{t'=t_{\text{ret}}}}
$$
计算导数：
$$
\frac{\mathrm{d}f}{\mathrm{d}t'} = 1 + \frac{1}{c}\frac{\mathrm{d}R}{\mathrm{d}t'}.
$$
而
$$
\frac{\mathrm{d}R}{\mathrm{d}t'} = \frac{\mathrm{d}}{\mathrm{d}t'}|\mathbf{r} - \mathbf{r}_0(t')| = -\frac{\mathbf{r} - \mathbf{r}_0(t')}{R(t')}\cdot\mathbf{v}(t') = -\hat{\mathbf{R}}\cdot\mathbf{v},
$$
其中
$$
\hat{\mathbf{R}} = \frac{\mathbf{r} - \mathbf{r}_0(t')}{R(t')},\qquad \boldsymbol{\beta} = \frac{\mathbf{v}}{c}.
$$
因此
$$
\frac{\mathrm{d}f}{\mathrm{d}t'} = 1 - \hat{\mathbf{R}}\cdot\boldsymbol{\beta}.
$$
在满足 $v < c$ 的情况下，$1 - \hat{\mathbf{R}}\cdot\boldsymbol{\beta} > 0$，绝对值可以直接去掉。

将 δ 函数代入 (1) 式，得
$$
\varphi(\mathbf{r}, t) = \frac{q}{4\pi\varepsilon_0} \left[ \frac{1}{R(t')(1 - \hat{\mathbf{R}}\cdot\boldsymbol{\beta})} \right]_{t' = t_{\text{ret}}}
$$

---

### 5. Liénard-Wiechert 势的最终形式
同理，对矢量势有：
$$
\mathbf{A}(\mathbf{r}, t) = \frac{\mu_0}{4\pi} \int \frac{q\mathbf{v}(t_r)\delta^3(\mathbf{r}' - \mathbf{r}_0(t_r))}{R}\,\mathrm{d}^3r'
$$
经过完全相同的步骤，得到
$$
\mathbf{A}(\mathbf{r}, t) = \frac{\mu_0 q}{4\pi} \left[ \frac{\mathbf{v}(t')}{R(t')(1 - \hat{\mathbf{R}}\cdot\boldsymbol{\beta})} \right]_{t' = t_{\text{ret}}} = \frac{\boldsymbol{\beta}(t_{\text{ret}})}{c}\,\varphi(\mathbf{r}, t)
$$
利用 $\mu_0\varepsilon_0 = 1/c^2$。

**总结（SI 单位制）**：
$$
\boxed{\varphi(\mathbf{r}, t) = \frac{q}{4\pi\varepsilon_0} \left[ \frac{1}{R(1 - \hat{\mathbf{R}}\cdot\boldsymbol{\beta})} \right]_{\text{ret}}}
$$
$$
\boxed{\mathbf{A}(\mathbf{r}, t) = \frac{\mu_0 q}{4\pi} \left[ \frac{\mathbf{v}}{R(1 - \hat{\mathbf{R}}\cdot\boldsymbol{\beta})} \right]_{\text{ret}} = \frac{\mathbf{v}(t_{\text{ret}})}{c^2}\,\varphi(\mathbf{r}, t)}
$$
下标 “ret” 表示方括号内的所有量 $\mathbf{r}_0, \mathbf{v}, R, \hat{\mathbf{R}}, \boldsymbol{\beta}$ 均在推迟时刻 $t_{\text{ret}}$ 取值，该时刻由 (2) 式唯一确定。

---

推导要点在于用 δ 函数的积分表示解耦空间与时间变量，再通过一维 δ 函数处理得到推迟时刻的导数因子 $(1 - \hat{\mathbf{R}}\cdot\boldsymbol{\beta})^{-1}$，这正是运动点电荷的“多普勒因子”，体现了推迟时刻与观测时间之间的非线性压缩。由此势函数可直接导出运动点电荷的电场与磁场。