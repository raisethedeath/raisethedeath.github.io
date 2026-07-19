在连续介质力学中，应力与应变有多种定义，它们本质上是同一物理状态在不同构型（参考构型与当前构型）下的投影，或是为了满足功共轭要求而引入的。下面从**变形描述**出发，系统梳理常见的应变与应力张量，并阐明其物理意义、表达形式以及相互之间的转换关系。

---

## 1. 变形描述基础
- **变形梯度** $\mathbf{F}$：$\mathrm{d}\mathbf{x} = \mathbf{F}\mathrm{d}\mathbf{X}$，分量 $F_{iJ} = \partial x_i/\partial X_J$。
- **极分解**：$\mathbf{F} = \mathbf{R}\mathbf{U} = \mathbf{V}\mathbf{R}$，其中 $\mathbf{U}, \mathbf{V}$ 为右/左伸长张量（对称正定），$\mathbf{R}$ 为转动张量。
- **右/左 Cauchy–Green 张量**：
  $$
  \mathbf{C} = \mathbf{F}^T\mathbf{F} = \mathbf{U}^2, \qquad
  \mathbf{B} = \mathbf{F}\mathbf{F}^T = \mathbf{V}^2.
  $$
- **体积比**：$J = \det\mathbf{F} = \det\mathbf{U} = \det\mathbf{V}$。不可压缩时 $J=1$。

---

## 2. 应变张量
### 2.1 小变形应变（Cauchy 应变张量）
适用条件：位移梯度 $\|\nabla\mathbf{u}\| \ll 1$，不区分参考与当前构型。
$$
\varepsilon_{ij} = \frac{1}{2}\left( \frac{\partial u_i}{\partial x_j} + \frac{\partial u_j}{\partial x_i} \right) = \frac{1}{2}(u_{i,j} + u_{j,i}).
$$
它是 Green–Lagrange 应变和 Euler–Almansi 应变的线性化结果。

### 2.2 Green–Lagrange 应变张量 $\mathbf{E}$
- 定义在**参考构型**，对称。
- 度量线段长度平方差：$\mathrm{d}\mathbf{x}\cdot\mathrm{d}\mathbf{x} - \mathrm{d}\mathbf{X}\cdot\mathrm{d}\mathbf{X} = 2\,\mathrm{d}\mathbf{X}\cdot\mathbf{E}\cdot\mathrm{d}\mathbf{X}$。
- 表达式：
  $$
  \mathbf{E} = \frac{1}{2}(\mathbf{C} - \mathbf{I}) = \frac{1}{2}(\mathbf{F}^T\mathbf{F} - \mathbf{I}).
  $$
  用位移梯度 $u_{i,J} = \partial u_i/\partial X_J$ 写：
  $$
  E_{IJ} = \frac{1}{2}\left( u_{I,J} + u_{J,I} + u_{K,I}\,u_{K,J} \right).
  $$
- 小变形下退化为 ε。

### 2.3 Euler–Almansi 应变张量 $\mathbf{e}$
- 定义在**当前构型**，对称。
- 同样度量长度平方差，但通过空间坐标表达：$\mathrm{d}\mathbf{x}\cdot\mathrm{d}\mathbf{x} - \mathrm{d}\mathbf{X}\cdot\mathrm{d}\mathbf{X} = 2\,\mathrm{d}\mathbf{x}\cdot\mathbf{e}\cdot\mathrm{d}\mathbf{x}$。
- 表达式：
  $$
  \mathbf{e} = \frac{1}{2}(\mathbf{I} - \mathbf{B}^{-1}) = \frac{1}{2}(\mathbf{I} - \mathbf{F}^{-T}\mathbf{F}^{-1}).
  $$
  用空间位移梯度 $u_{i,j} = \partial u_i/\partial x_j$ 写：
  $$
  e_{ij} = \frac{1}{2}\left( u_{i,j} + u_{j,i} - u_{k,i}\,u_{k,j} \right).
  $$
- 小变形下同样退化为 ε。

### 2.4 对数应变（Hencky 应变）
- 定义在参考构型（或当前构型）：
  $$
  \mathbf{H} = \ln\mathbf{U} \quad \text{或} \quad \ln\mathbf{V}.
  $$
- 优点：可加性（共轴变形下可直接叠加），在大变形塑性理论中常用。
- 与主伸长比的关系：主轴下 $H_i = \ln\lambda_i$。

### 2.5 名义应变（Biot 应变）
- 定义：$\mathbf{U} - \mathbf{I}$。有时用于小转动大伸长问题，但应用较少。

---

## 3. 应力张量
### 3.1 Cauchy 应力（真实应力）$\boldsymbol{\sigma}$
- 定义在**当前构型**，对称。
- 物理意义：当前单位面积上的真实力。
- 控制方程（如动量守恒）的天然应力。
- 分量：$\sigma_{ij}$，作用在现时坐标面 $x_i$ 法向上、沿 $x_j$ 方向的应力。

### 3.2 第一 Piola–Kirchhoff 应力（名义应力）$\mathbf{P}$
- 定义在**参考构型**，**非对称**。
- 物理意义：参考构型单位面积上的力，但力的方向仍是当前构型的方向。
- 与 Cauchy 应力的关系（Nanson 公式）：
  $$
  \mathbf{P} = J \boldsymbol{\sigma} \mathbf{F}^{-T}, \quad
  P_{iJ} = J \sigma_{ik} F^{-1}_{Jk}.
  $$
- **功共轭**：与变形梯度 $\mathbf{F}$ 共轭，即应力功率 $\mathbf{P} : \dot{\mathbf{F}}$ 等于参考体积的功率。
- 在超弹性中可以直接由 $\mathbf{P} = \partial W/\partial \mathbf{F}$ 获得。

### 3.3 第二 Piola–Kirchhoff 应力 $\mathbf{S}$
- 定义在**参考构型**，**对称**。
- 它没有直接的物理面积/方向解释，是将当前构型的力完全“拉回”到参考构型的对称应力。
- 与 Cauchy 应力的关系：
  $$
  \mathbf{S} = J \mathbf{F}^{-1} \boldsymbol{\sigma} \mathbf{F}^{-T}, \quad
  \boldsymbol{\sigma} = J^{-1} \mathbf{F} \mathbf{S} \mathbf{F}^T.
  $$
- 与名义应力的关系：$\mathbf{S} = \mathbf{F}^{-1} \mathbf{P}$。
- **功共轭**：与 Green–Lagrange 应变 $\mathbf{E}$ 共轭，即 $\mathbf{S} : \dot{\mathbf{E}}$ 等于参考体积的功率。
- 在超弹性中，$\mathbf{S} = 2\,\partial W/\partial \mathbf{C} = \partial W/\partial \mathbf{E}$，这是推导本构最方便的应力。

### 3.4 Kirchhoff 应力 $\boldsymbol{\tau}$
- 定义：$\boldsymbol{\tau} = J \boldsymbol{\sigma}$。有时称为加权 Cauchy 应力。
- 它可以看作是将现时力除以参考体积（而不是现时面积）得到的应力。
- 在塑性理论和计算力学中常见。

### 3.5 Biot 应力
- 定义：$\mathbf{T}_B = \frac{1}{2}(\mathbf{U}\mathbf{S} + \mathbf{S}\mathbf{U})$ 或对称化处理，与名义应变 $\mathbf{U}-\mathbf{I}$ 功共轭。较少使用。

---

## 4. 功共轭对
在构造超弹性本构时，必须保证应力与应变率（或应变增率）的乘积等于功率。主要共轭对为：

| 应力张量 | 共轭的变形率/应变张量 | 关系 |
|-----------|------------------------|------|
| Cauchy 应力 $\boldsymbol{\sigma}$ | 变形率张量 $\mathbf{d} = \text{sym}(\dot{\mathbf{F}}\mathbf{F}^{-1})$ | 当前构型功率 $\boldsymbol{\sigma}:\mathbf{d}$ |
| 第一 Piola–Kirchhoff $\mathbf{P}$ | 变形梯度率 $\dot{\mathbf{F}}$ | 参考构型功率 $\mathbf{P}:\dot{\mathbf{F}}$ |
| 第二 Piola–Kirchhoff $\mathbf{S}$ | Green–Lagrange 应变率 $\dot{\mathbf{E}}$ | 参考构型功率 $\mathbf{S}:\dot{\mathbf{E}}$ |
| Kirchhoff $\boldsymbol{\tau}$ | 同 $\boldsymbol{\sigma}$ 对应的 $\mathbf{d}$ | $\boldsymbol{\tau}:\mathbf{d} = J\boldsymbol{\sigma}:\mathbf{d}$ |

对于不可压缩材料（$J=1$），Cauchy 应力与 Kirchhoff 应力等同，第二 Piola–Kirchhoff 应力和 Kirchhoff 应力有时也通过前推/后拉联系。

---

## 5. 转换关系速查
设已知 $\mathbf{F}, J, \mathbf{C}, \mathbf{B}$，则：
$$
\begin{aligned}
\boldsymbol{\sigma} &= J^{-1} \mathbf{P} \mathbf{F}^T = J^{-1} \mathbf{F} \mathbf{S} \mathbf{F}^T, \\
\mathbf{P} &= J \boldsymbol{\sigma} \mathbf{F}^{-T} = \mathbf{F} \mathbf{S}, \\
\mathbf{S} &= \mathbf{F}^{-1} \mathbf{P} = J \mathbf{F}^{-1} \boldsymbol{\sigma} \mathbf{F}^{-T}, \\
\boldsymbol{\tau} &= J\boldsymbol{\sigma}.
\end{aligned}
$$

应变之间的转换：
$$
\mathbf{E} = \mathbf{F}^T \mathbf{e} \mathbf{F}, \quad
\mathbf{e} = \mathbf{F}^{-T} \mathbf{E} \mathbf{F}^{-1}.
$$

---

## 6. 在变分推导中的应用
结合你之前的问题，正确的变分关系是：
- 若应变能用右 Cauchy–Green 张量表示 $W(\mathbf{C})$，则第二 Piola–Kirchhoff 应力为
  $$
  \mathbf{S} = 2\frac{\partial W}{\partial \mathbf{C}} \quad \text{或} \quad \mathbf{S} = \frac{\partial W}{\partial \mathbf{E}}.
  $$
- 若应变能用变形梯度表示 $W(\mathbf{F})$，则名义应力为
  $$
  \mathbf{P} = \frac{\partial W}{\partial \mathbf{F}}.
  $$
- 要得到 Cauchy 应力，必须经前推操作：$\boldsymbol{\sigma} = J^{-1} \mathbf{F} \mathbf{S} \mathbf{F}^T$ 等。

你之前试图写 $\sigma_{ij} = \partial f / \partial u_{ij}$ 实际上混淆了定义：如果 $u_{i,j}$ 是空间梯度，它不直接与任何大变形应力功共轭；如果写为物质梯度 $u_{i,J}$，那么 $\partial W / \partial u_{i,J} = P_{iJ}$ （因为 $F_{iJ} = \delta_{iJ} + u_{i,J}$），这才是大变形下正确的变分出发点。不可压缩约束需通过拉格朗日乘子引入，最终前推得到 $\boldsymbol{\sigma} = \mu \mathbf{B} - p\mathbf{I}$。

---

## 7. 适用场景总结
| 变形程度 | 推荐使用的应力 | 推荐使用的应变 | 本构关系形式 |
|----------|----------------|----------------|---------------|
| 小变形 | Cauchy 应力 $\boldsymbol{\sigma}$ | 小应变 $\boldsymbol{\varepsilon}$ | 广义胡克定律 $\boldsymbol{\sigma} = \mathbb{C}:\boldsymbol{\varepsilon}$ |
| 大变形（橡胶等） | 第二 P-K 应力 $\mathbf{S}$ 或 Cauchy 应力 $\boldsymbol{\sigma}$ | Green–Lagrange $\mathbf{E}$ 或左 Cauchy–Green $\mathbf{B}$ | 超弹性 $\mathbf{S} = 2\partial W/\partial \mathbf{C}$ 或 $\boldsymbol{\sigma} = J^{-1}\mathbf{F} \mathbf{S} \mathbf{F}^T$ |
| 大变形塑性/粘弹性 | Kirchhoff 应力 $\boldsymbol{\tau}$ | 对数应变 $\ln\mathbf{V}$ | 基于乘法分解的超弹性-塑性框架 |
