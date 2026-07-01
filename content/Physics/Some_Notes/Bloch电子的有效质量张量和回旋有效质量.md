Bloch电子在晶体周期势场中的动力学行为通常用**有效质量张量**和**回旋有效质量**两个概念来描述。二者都源于能带结构 $E(\mathbf{k})$，但物理含义和数学定义不同，却又通过半经典运动方程和等能面的几何性质紧密联系在一起。以下从定义出发，详细分析二者之间的关系。

---

## 1. 有效质量张量（Effective Mass Tensor）

在半经典图像中，电子的速度与加速度由能带色散决定：
$$
\mathbf{v} = \frac{1}{\hbar}\nabla_{\mathbf{k}}E,\qquad 
\frac{d\mathbf{v}}{dt} = \frac{1}{\hbar}\frac{d}{dt}(\nabla_{\mathbf{k}}E)
= \frac{1}{\hbar^2}\left(\nabla_{\mathbf{k}}\nabla_{\mathbf{k}}E\right)\cdot \frac{d(\hbar\mathbf{k})}{dt}.
$$
利用运动方程 $\hbar d\mathbf{k}/dt = -e(\mathbf{E} + \mathbf{v}\times\mathbf{B})$，可得
$$
\frac{dv_i}{dt} = \sum_j \left( \frac{1}{\hbar^2}\frac{\partial^2 E}{\partial k_i \partial k_j} \right) \left[ -e(\mathbf{E} + \mathbf{v}\times\mathbf{B}) \right]_j.
$$
这类似于经典牛顿定律 $\mathbf{a} = (1/m^*)(-e\mathbf{E}...)$，因此定义**有效质量倒数张量**：
$$
\left( \frac{1}{m^*} \right)_{ij} \equiv \frac{1}{\hbar^2}\frac{\partial^2 E}{\partial k_i \partial k_j}.
$$
其逆矩阵 $\boldsymbol{m}^*$ 即为有效质量张量。在能带极值附近，若色散为抛物带：
$$
E(\mathbf{k}) = \frac{\hbar^2}{2} \mathbf{k}^T \boldsymbol{\alpha} \mathbf{k},\quad 
\boldsymbol{\alpha} = (\boldsymbol{m}^*)^{-1},
$$
则有效质量张量是常张量，主轴上可对角化为 $\operatorname{diag}(m_x, m_y, m_z)$。

---

## 2. 回旋有效质量（Cyclotron Effective Mass）

当施加磁场 $\mathbf{B}$ 时，电子在 $\mathbf{k}$ 空间中沿等能面与垂直 $\mathbf{B}$ 的平面交线（即闭合轨道）运动。回旋频率 $\omega_c$ 由轨道上的运动周期决定，并可定义一个标量**回旋有效质量** $m_c$ 使得
$$
\omega_c = \frac{eB}{m_c}.
$$

通过 Onsager 的轨道量子化条件：轨道在 $\mathbf{k}$ 空间的面积 $A(E, k_\parallel)$ （$k_\parallel$ 为平行于 $\mathbf{B}$ 的波矢分量）满足
$$
A(E, k_\parallel) = \frac{2\pi e B}{\hbar}(n + \gamma),
$$
相邻朗道能级能量差 $\Delta E$ 与面积变化的关系为 $\Delta A = \frac{2\pi e B}{\hbar}$，又 $\omega_c = \Delta E/\hbar$，故
$$
\frac{\partial A}{\partial E} = \frac{2\pi e B}{\hbar} \frac{1}{\Delta E} = \frac{2\pi}{\hbar^2} m_c.
$$
于是得到与能带色散直接相联的表达式：
$$
m_c = \frac{\hbar^2}{2\pi} \frac{\partial A(E, k_\parallel)}{\partial E}.
$$
这就是**回旋有效质量**的能带定义。它依赖于磁场方向 $\mathbf{B}$ 和轨道所处的 $k_\parallel$（通常取费米面上的轨道）。

---

## 3. 二者的关系

### 3.1 用有效质量张量表示 $m_c$（抛物椭球能带）

对于一般的椭球等能面，有效质量张量 $\boldsymbol{m}^*$ 为常量。设磁场方向的单位矢为 $\mathbf{n}$。在垂直 $\mathbf{n}$ 的平面内，等能线是椭圆，其面积可解析求出。记 $\boldsymbol{\alpha} = (\boldsymbol{m}^*)^{-1}$。将坐标系旋转至使 $\mathbf{n}$ 沿 $z'$ 轴，则约束在 $x'y'$ 平面内的有效质量倒数子矩阵为 $\boldsymbol{\alpha}_\perp$ （$2\times 2$ 矩阵）。轨道面积 $A(E, k_\parallel)$ 满足
$$
E = \frac{\hbar^2}{2} \mathbf{k}_\perp^T \boldsymbol{\alpha}_\perp \mathbf{k}_\perp + \cdots
$$
配方法可得：
$$
A(E, k_\parallel) = \frac{2\pi}{\hbar^2} \frac{ E - E_{\min}(k_\parallel) }{\sqrt{\det \boldsymbol{\alpha}_\perp}},
$$
于是
$$
\frac{\partial A}{\partial E} = \frac{2\pi}{\hbar^2} \frac{1}{\sqrt{\det \boldsymbol{\alpha}_\perp}}
\quad\Longrightarrow\quad
m_c = \frac{1}{\sqrt{\det \boldsymbol{\alpha}_\perp}}.
$$

利用分块行列式恒等式：
$$
\det \boldsymbol{\alpha}_\perp = \det(\boldsymbol{\alpha})\; \left(\mathbf{n}^T \boldsymbol{\alpha}^{-1} \mathbf{n}\right)
= \frac{ \mathbf{n}^T \boldsymbol{m}^* \mathbf{n} }{ \det \boldsymbol{m}^* },
$$
代入即得核心关系式：
$$
\boxed{m_c = \sqrt{ \frac{\det \boldsymbol{m}^*}{\mathbf{n}^T \boldsymbol{m}^* \mathbf{n}} }}.
$$
这就是抛物椭球能带下，**回旋有效质量与有效质量张量的直接解析关系**。它表明：
- $m_c$ 不仅取决于张量 $\boldsymbol{m}^*$ 的本征值，还强烈依赖于磁场方向 $\mathbf{n}$。
- $m_c$ 是张量 $\boldsymbol{m}^*$ 在垂直平面内的某种“平均”，由张量的行列式与磁场方向的二次型比值决定。

### 3.2 典型示例：旋转椭球能带

设主轴有效质量为 $m_x = m_y = m_t$ （横向质量），$m_z = m_l$ （纵向质量），磁场与纵轴夹角为 $\theta$，则 $\boldsymbol{m}^* = \operatorname{diag}(m_t, m_t, m_l)$，$\mathbf{n} = (\sin\theta, 0, \cos\theta)$。由上式：
$$
m_c = \sqrt{ \frac{m_t^2 m_l}{ m_t\sin^2\theta + m_l\cos^2\theta } }
= m_t \sqrt{ \frac{m_l}{ m_t\sin^2\theta + m_l\cos^2\theta } }.
$$
这正是回旋共振实验中经典的角度依赖公式。当 $\mathbf{B} \parallel$ 纵轴（$\theta=0$），$m_c = m_t$；当 $\mathbf{B} \perp$ 纵轴（$\theta=90^\circ$），$m_c = \sqrt{m_t m_l}$。

### 3.3 一般能带情形

对于非抛物、非椭球的真实能带：
- 有效质量张量依然是局域的二阶导数张量 $\frac{1}{\hbar^2}\frac{\partial^2 E}{\partial k_i \partial k_j}$，它随 $\mathbf{k}$ 变化。
- 回旋有效质量仍由面积导数定义：$m_c = \frac{\hbar^2}{2\pi} \frac{\partial A}{\partial E}$，其中的面积 $A$ 需沿实际等能面作积分：
  $$
  \frac{\partial A}{\partial E} = \oint_{\text{等能线}} \frac{dl}{|\nabla_\perp E|}.
  $$
  这里 $dl$ 是等能线弧长，$\nabla_\perp E$ 是垂直于 $\mathbf{B}$ 的梯度分量。
- 二者不再有简单的线性代数关系，但可通过平均有效质量倒数的回旋轨道积分表达：
  $$
  m_c = \frac{1}{2\pi} \oint \frac{dl}{ |\mathbf{v}_\perp| } = \frac{\hbar}{2\pi} \oint \frac{dl}{|\nabla_\perp E|} = \frac{\hbar^2}{2\pi} \frac{\partial A}{\partial E}.
  $$
  同时，速度 $\mathbf{v}_\perp$ 的倒数加权积分又与有效质量倒数张量在轨道切线方向的分量有关。因此 $m_c$ 可以理解为沿回旋轨道**有效质量倒数适当平均**的倒数。

### 3.4 与态密度有效质量的比较

电子的**态密度有效质量** $m_d$（用于态密度计算）定义为
$$
m_d = (\det \boldsymbol{m}^*)^{1/3} \quad (\text{单谷，各向同性等价}),
$$
多谷时还需乘上谷简并度的幂次。与之对比，回旋有效质量是**磁场方向选择下的特定平均**，它能反映出有效质量张量在不同空间方向上的投影性质。而输运中的**电导有效质量**则涉及张量分量倒数的平均。三者的关系可总结为：
- $m^*$ 张量：完整的各向异性惯性描述。
- $m_c$：轨道平面的“几何平均”，反映回旋动力学。
- $m_d$：三个主轴的几何平均，反映状态密度。

---

## 4. 物理意义与讨论

1. **回旋共振的直接探测量**：$m_c$ 直接通过回旋共振实验（吸收峰的频率 $\omega = eB/m_c$）获得。改变磁场方向，测出 $m_c(\theta)$，可以反演出有效质量张量的全部主分量及其取向，这是研究半导体能带结构（如硅的6个旋转椭球谷，锗的4个椭球谷）的标准方法。

2. **有效质量张量是局域量，$m_c$ 是轨道量**：前者定义在 $\mathbf{k}$ 点，后者由整个闭合轨道上有效质量倒数的积分决定。对于完美椭球抛物带，两者等价于简洁的代数公式；对于非抛物带（如窄禁带半导体的 InSb），$m_c$ 会随费米能级变化，而有效质量张量也随 $\mathbf{k}$ 变化，此时公式需用积分表示，但仍可通过能带模型进行关联。

3. **各向异性的剥离**：通过施加不同方向的磁场，$m_c$ 的不同角度依赖性能将 $\boldsymbol{m}^*$ 的主轴质量和取向分离出来，例如 Si 中电子回旋质量的角度关系直接给出了纵向与横向质量之比。

4. **限制条件**：上述讨论均为半经典近似，且要求闭合轨道存在（磁场不能太弱，也不能出现磁击穿）。在量子极限下，Landau 能级结构直接给出与 $m_c$ 一致的回旋能量，但有效质量张量的概念依然可用于描述子能带的色散。

---

## 5. 总结

- **有效质量张量**是能带色散的二阶导数，描述电子在任意方向上的惯性。
- **回旋有效质量**是电子在磁场下回旋运动的等效质量，由 $\mathbf{k}$ 空间轨道面积对能量的导数定义。
- 两者的桥梁是**等能面的面积变化率**：$\displaystyle m_c = \frac{\hbar^2}{2\pi}\frac{\partial A}{\partial E}$。
- 在抛物椭球能带下，有 $\displaystyle m_c = \sqrt{\frac{\det \boldsymbol{m}^*}{\mathbf{n}^T \boldsymbol{m}^* \mathbf{n}}}$，为张量在垂直磁场平面内的“几何平均”。
- 这一关系是回旋共振实验测定能带有效质量张量的理论基础，也是对能带各向异性进行定量分析的关键公式。

简言之，回旋有效质量是有效质量张量在磁场约束下的一个**轨道平均标量表征**，它将张量的复杂各向异性投影到单一实验可观测量中。