下面详细给出 Toner–Tu 理论对 Vicsek 模型的长波有效分析。Toner–Tu 理论不是对 Vicsek 微观规则逐粒子的严格推导，而是根据微观模型所满足的对称性、守恒律以及观察到的有序现象，写出最一般的连续流体力学方程，并用重整化群方法分析其长波涨落。它解释了为什么 Vicsek 模型这类非平衡极性系统可以在二维出现长程极性序，并给出与普通平衡系统不同的各向异性标度行为。

---

## 1. Vicsek 模型回顾

Vicsek 模型是极性活性物质的经典模型。在二维中，$N$ 个自推进粒子具有位置 $\mathbf r_i(t)$ 和方向 $\theta_i(t)$，速度大小为常数 $v_0$，速度方向为  
$$
\mathbf v_i = v_0(\cos\theta_i,\sin\theta_i).
$$
离散时间更新规则为：

$$
\theta_i(t+\Delta t)
=
\Bigl\langle \theta_j(t)\Bigr\rangle_{|\mathbf r_j-\mathbf r_i|<R}
+
\eta_i(t),
$$

$$
\mathbf r_i(t+\Delta t)
=
\mathbf r_i(t)
+
v_0\,\mathbf n_i(t+\Delta t)\,\Delta t .
$$

其中 $\langle\theta_j\rangle$ 表示粒子 $i$ 周围半径 $R$ 内所有邻居方向角的平均，$\eta_i$ 是均匀或高斯噪声。

数值模拟发现：

- 当噪声较小或密度较高时，系统自发打破旋转对称性，出现非零平均极化：
  $$
  \mathbf P=\frac{1}{Nv_0}\sum_i \mathbf v_i
  $$
  即极性有序相。
- 在二维中，这种有序不是准长程序，而是真正长程序。这与平衡态 XY 模型的 Mermin–Wagner 定理不同。
- 相变具有非平衡普适类，不能用平衡 Ising/XY 指数描述。

---

## 2. 粗粒化与守恒律

Toner 和 Tu 的核心思想是：在足够大的尺度上，Vicsek 模型的动力学只由少数慢变量描述，它们是：

### 2.1 密度场

粒子数守恒给出局部密度场
$$
\rho(\mathbf r,t)=\sum_i \delta(\mathbf r-\mathbf r_i(t)).
$$
粒子数守恒意味着密度满足连续性方程：
$$
\partial_t\rho+\nabla\cdot(\rho\mathbf v)=0.
$$
这是精确的守恒律。

### 2.2 速度场或极化场

定义局部速度场
$$
\mathbf v(\mathbf r,t)=\frac{1}{\rho(\mathbf r,t)}\sum_i \mathbf v_i(t)\,\delta(\mathbf r-\mathbf r_i(t)).
$$
在粗粒化后，$\mathbf v(\mathbf r,t)$ 是一个连续场。它的模长不是严格固定的 $v_0$，因为局部平均会减小模长；但在有序相，其平均模长 $v(\rho)$ 可视为密度依赖。

与平衡流体不同，Vicsek 粒子与背景介质存在摩擦，因此**总动量不守恒**。所以速度场的运动方程不必具有 Navier–Stokes 形式的动量守恒结构，而可以包含“源项”和“损耗项”。

---

## 3. Toner–Tu 流体力学方程

根据平移对称性、旋转对称性、粒子数守恒以及非平衡极性条件，Toner 和 Tu 写出了如下最一般的长波方程：

$$
\partial_t\rho+\nabla\cdot(\rho\mathbf v)=0,
$$

$$
\begin{aligned}
&\partial_t\mathbf v
+\lambda_1(\mathbf v\cdot\nabla)\mathbf v
+\lambda_2(\nabla\cdot\mathbf v)\mathbf v
+\lambda_3\nabla|\mathbf v|^2
\\
&=
\alpha\mathbf v-\beta|\mathbf v|^2\mathbf v
-\nabla P(\rho)
\\
&\quad
+\mu_1\nabla^2\mathbf v
+\mu_2\nabla(\nabla\cdot\mathbf v)
+\mu_3(\mathbf v\cdot\nabla)^2\mathbf v
+\mathbf f(\mathbf r,t).
\end{aligned}
$$

其中各项的物理意义如下：

### 3.1 密度方程

$$
\partial_t\rho+\nabla\cdot(\rho\mathbf v)=0
$$
就是粒子数守恒。它表示局部密度变化由粒子流 $\rho\mathbf v$ 的散度引起。

### 3.2 极性序的 Landau 项

$$
\alpha\mathbf v-\beta|\mathbf v|^2\mathbf v
$$
是使系统出现极性有序的“源项”。当 $\alpha>0$ 时，均匀速度的模长为
$$
v_0=\sqrt{\frac{\alpha}{\beta}}.
$$
这相当于平均场自发极化。若 $\alpha<0$，则有序相不稳定。

注意：这并不来自自由能，而是非平衡动力学允许的唯象项。

### 3.3 自推进和对流非线性项

$$
\lambda_1(\mathbf v\cdot\nabla)\mathbf v
$$
类似 Navier–Stokes 中的对流项，但由于无 Galilean 不变性，$\lambda_1\neq 1$。

$$
\lambda_2(\nabla\cdot\mathbf v)\mathbf v
$$
描述密度压缩或膨胀对速度方向的影响。它非常重要，因为它将密度涨落与取向涨落耦合起来。

$$
\lambda_3\nabla|\mathbf v|^2
$$
可理解为局部粒子速度大小变化导致的有效压力或化学势修正。

这些非线性项是 Toner–Tu 理论的核心。尤其是在二维，它们会强烈抑制 Goldstone 模的红外发散。

### 3.4 压力项

$$
-\nabla P(\rho)
$$
描述密度变化对速度场的反馈。通常在平均密度 $\rho_0$ 附近展开：
$$
P(\rho)=P_0+\sum_{n=1}^{\infty}\sigma_n(\rho-\rho_0)^n.
$$
线性项 $-\sigma_1\nabla\delta\rho$ 导致密度波传播。

### 3.5 黏性和各向异性耗散项

$$
\mu_1\nabla^2\mathbf v+\mu_2\nabla(\nabla\cdot\mathbf v)
$$
是一般的二阶耗散。

$$
\mu_3(\mathbf v\cdot\nabla)^2\mathbf v
$$
是极性活性流体特有的各向异性项。在有序相中，若平均速度沿 $\hat x$，则它线性化为
$$
\mu_3 v_0^2\partial_x^2\mathbf v,
$$
即沿平均运动方向的耗散与横向耗散不同。

### 3.6 噪声

$\mathbf f(\mathbf r,t)$ 是唯象噪声，通常取为高斯白噪声：
$$
\langle f_i(\mathbf r,t)\rangle=0,
$$
$$
\langle f_i(\mathbf r,t) f_j(\mathbf r',t')\rangle
=
2\Delta\,\delta_{ij}\,\delta^d(\mathbf r-\mathbf r')\delta(t-t').
$$
它代表微观 Vicsek 噪声在粗粒化后的涨落。

---

## 4. 有序态附近的线性分析

设系统处于极性有序相，平均速度沿 $\hat x$ 方向：
$$
\mathbf v=v_0\hat x+\delta\mathbf v,
$$
$$
\rho=\rho_0+\delta\rho.
$$
将 $\delta\mathbf v$ 分解为纵向速度涨落和横向速度涨落：
$$
\delta\mathbf v=\delta v_\parallel \hat x+\mathbf v_\perp.
$$

### 4.1 横向 Goldstone 模

由于旋转对称性自发破缺，存在 $d-1$ 个无质量 Goldstone 模，即 $\mathbf v_\perp$。在线性近似下：
$$
\partial_t\mathbf v_\perp
+\lambda_1 v_0\partial_x\mathbf v_\perp
=
-\sigma_1\nabla_\perp\delta\rho
+D_\perp\nabla_\perp^2\mathbf v_\perp
+D_\parallel\partial_x^2\mathbf v_\perp
+\mathbf f_\perp.
$$
其中 $D_\perp,D_\parallel$ 是由 $\mu_1,\mu_2,\mu_3$ 组合出的横向、纵向耗散系数。

在傅里叶空间中，若忽略密度耦合，横向模的色散关系为
$$
\omega_T(\mathbf q)
=
\lambda_1 v_0 q_x
-i\left(D_\perp q_\perp^2+D_\parallel q_x^2\right).
$$
这是典型的扩散 Goldstone 模。

### 4.2 密度和纵向模

密度涨落满足
$$
\partial_t\delta\rho
+
v_0\partial_x\delta\rho
+
\rho_0\partial_x\delta v_\parallel
+
\rho_0\nabla_\perp\cdot\mathbf v_\perp
=0.
$$

纵向速度涨落 $\delta v_\parallel$ 因为有 $\beta$ 项而获得有限质量：
$$
\partial_t\delta v_\parallel
\approx
-2\beta v_0^2\,\delta v_\parallel
-\sigma_1\partial_x\delta\rho
+\cdots
$$
因此 $\delta v_\parallel$ 是快模，可以在低频下绝热消除：
$$
\delta v_\parallel
\approx
-\frac{\sigma_1}{2\beta v_0^2}\partial_x\delta\rho.
$$

将其代回密度方程，密度与横向速度的纵波部分耦合，产生两支行波声模。低频色散关系可写为
$$
\omega_\pm(\mathbf q)
=
v_0 q_x
\pm c_\perp q_\perp
-i\Gamma(\hat q)q^2
+\mathcal O(q^3).
$$
因此在共同运动参考系中，系统存在各向异性声波。

---

## 5. 非线性效应与重整化群分析

在线性水平，二维系统横向 Goldstone 模的涨落为
$$
\langle |\theta(\mathbf q)|^2\rangle
\sim
\frac{\Delta}{D_\perp q_\perp^2+D_\parallel q_x^2}.
$$
在二维中，这会导致
$$
\langle \theta^2\rangle
\sim
\int d^2q\,\frac{1}{q^2}
$$
红外对数发散。这正是平衡态 Mermin–Wagner 定理的来源。

Toner 和 Tu 的关键发现是：非线性项
$$
\lambda_2(\nabla\cdot\mathbf v)\mathbf v,\qquad
\lambda_3\nabla|\mathbf v|^2
$$
以及密度-速度耦合会改变 Goldstone 模的低频行为。特别是，密度涨落被横模激发后，会反过来给横模一个非线性的“阻尼”反馈。

在重整化群语言中，定义各向异性标度：

- 横向波矢：
  $$
  q_\perp \to e^{-l}q_\perp
  $$
- 纵向波矢：
  $$
  q_\parallel \to e^{-\zeta l}q_\parallel
  $$
- 频率：
  $$
  \omega \to e^{-z l}\omega
  $$

其中 $\zeta$ 是各向异性指数，$z$ 是动力学临界指数。

### 5.1 上临界维数

Toner–Tu 分析得到上临界维数
$$
d_c=4.
$$
当 $d>4$ 时，非线性项在红外区无关，线性理论有效；当 $d<4$ 时，非线性项相关，系统进入非平衡 Toner–Tu 固定点。

### 5.2 Toner–Tu 固定点指数

令
$$
\varepsilon=4-d.
$$
在 TT 常用约定中，定义横向波矢与纵向波矢的标度关系为
$$
q_\perp \sim q_\parallel^{\xi},
$$
其中 $\xi$ 为各向异性参数。Toner–Tu 重整化群给出到一阶 $\varepsilon$：
$$
\xi = 1-\frac{\varepsilon}{5},
$$
$$
z = 2-\frac{\varepsilon}{5}.
$$

等价地，若写为
$$
q_\parallel\sim q_\perp^{\zeta},
$$
则
$$
\zeta=\frac{1}{\xi}
=
\frac{1}{1-\varepsilon/5}.
$$

在二维 $d=2$，即 $\varepsilon=2$，得到
$$
\xi=\frac{3}{5},
\qquad
z=\frac{8}{5}.
$$
因此
$$
q_\parallel\sim q_\perp^{5/3},\qquad
\omega\sim q_\perp^{8/5}.
$$

这表明：

- 纵向和横向涨落有不同标度；
- 动力学临界指数 $z=8/5<2$，说明非线性项使涨落的时间关联比线性扩散更慢；
- 沿平均运动方向的关联比横向关联更长，因为 $q_\parallel\sim q_\perp^{5/3}$，即 $\xi_\parallel\sim \xi_\perp^{5/3}$。

### 5.3 有效 Goldstone 模行为

在 Toner–Tu 固定点，横向 Goldstone 模的有效逆传播子不再像线性理论那样为 $D_\parallel q_\parallel^2+D_\perp q_\perp^2$，而是获得非平凡标度：
$$
G^{-1}(\mathbf q,\omega)
\sim
-i\omega+\Sigma(q)
$$
其中
$$
\Sigma(q)\sim q_\perp^{z}
$$
并且
$$
q_\parallel\sim q_\perp^{\zeta}.
$$
因此
$$
\langle |\theta(q)|^2\rangle
\sim
\frac{1}{q_\perp^{z}}
$$
低频发散被减弱。于是二维中
$$
\langle \theta^2\rangle
\sim
\int \frac{d^2q}{q_\perp^{z}}
$$
可以有限，因为 $z=8/5<2$，红外积分收敛。

这就是二维 Vicsek 模型可以出现真正长程极性序的原因。

---

## 6. 物理结论

Toner–Tu 理论对 Vicsek 模型的主要结论如下：

1. **二维长程序存在**  
   非平衡非线性项抑制了 Goldstone 模的红外发散，使二维极性有序相具有真正长程序，而不是准长程序。

2. **上临界维数为 4**  
   在 $d<4$，涨落由非平衡 Toner–Tu 固定点描述；在 $d>4$，平均场和线性理论有效。

3. **强各向异性标度**  
   沿平均运动方向与垂直于运动方向的空间关联以不同幂次增长：
   $$
   \xi_\parallel\sim \xi_\perp^{\zeta},
   $$
   在 $d=2$ 时 $\zeta=5/3$。

4. **新的动力学临界指数**  
   在 $d=2$ 时
   $$
   z=\frac{8}{5},
   $$
   与平衡临界动力学不同。

5. **密度涨落被增强**  
   Toner–Tu 理论还预言极性活性流体中存在巨数涨落：
   $$
   \langle \delta N^2\rangle
   \sim N^{\phi},
   $$
   其指数 $\phi>1/2$，说明密度涨落比平衡热涨落强得多。

---

## 7. 与数值模拟和后续工作的关系

数值模拟总体上支持 Vicsek 模型属于 Toner–Tu 普适类。但需要注意：

- 在相变点附近，Vicsek 模型常出现密度条带和微相分离，Toner–Tu 均匀有序相的简单图像不一定完全适用。
- 后来 Bertin、Droz 和 Grégoire 等人从 Boltzmann 动力学方程对 Vicsek 模型做了动理学推导，得到与 Toner–Tu 形式一致的流体力学方程，进一步支持了该理论的合理性。
- Toner–Tu 框架也被推广到高维、不同噪声形式、相分离区以及拓扑缺陷系统。

---

## 总结

Toner–Tu 对 Vicsek 模型的理论分析可以概括为：

$$
\boxed{
\begin{aligned}
&\partial_t\rho+\nabla\cdot(\rho\mathbf v)=0,\\
&\partial_t\mathbf v+\lambda_1(\mathbf v\cdot\nabla)\mathbf v+\lambda_2(\nabla\cdot\mathbf v)\mathbf v+\lambda_3\nabla|\mathbf v|^2\\
&=\alpha\mathbf v-\beta|\mathbf v|^2\mathbf v-\nabla P(\rho)
+\text{耗散项}+\text{噪声}.
\end{aligned}
}
$$

该方程抓住了极性活性流体的两个本质特征：粒子数守恒和自发旋转对称破缺。非线性项使二维 Goldstone 模的红外发散被抑制，从而产生真正长程极性序。重整化群分析给出上临界维数 $d_c=4$，在 $d=2$ 时各向异性指数和动力学指数分别为

$$
\xi=\frac{3}{5},\qquad z=\frac{8}{5}.
$$

这就是 Toner–Tu 理论对 Vicsek 模型核心物理的解释。