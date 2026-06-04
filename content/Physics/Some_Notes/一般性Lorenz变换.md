这是一个非常深刻的问题！在基础相对论教材中，我们通常只讨论参考系沿着 $x$ 轴平移的情况（即标准洛伦兹变换）。但如果参考系 $S'$ 相对 $S$ 系的速度 $\vec{v}$ 是空间中的**任意方向**，我们需要使用**矢量形式的洛伦兹变换**（Vector Lorentz Transformation），或者叫“任意方向的 Boost（洛伦兹平移）”。

要推导和理解任意方向的洛伦兹变换，核心的物理思想是**空间分解**：
1. **平行于速度 $\vec{v}$ 的空间分量**会发生洛伦兹收缩，并且与时间发生混合。
2. **垂直于速度 $\vec{v}$ 的空间分量**不发生任何改变。

下面是具体的数学表达形式。为了方便书写，我们定义相对速度向量 $\vec{\beta} = \frac{\vec{v}}{c}$，其大小为 $\beta = |\vec{\beta}| = \frac{v}{c}$，洛伦兹因子 $\gamma = \frac{1}{\sqrt{1-\beta^2}}$。

### 1. 矢量形式的洛伦兹变换

假设在 $S$ 系中某事件的坐标为 $(t, \vec{r})$，在 $S'$ 系中的坐标为 $(t', \vec{r}')$，且 $S'$ 相对 $S$ 以速度 $\vec{v}$ 运动。

**时间的变换：**
时间的变换与空间在速度方向上的投影（内积）有关：
$$t' = \gamma \left( t - \frac{\vec{v} \cdot \vec{r}}{c^2} \right)$$
或者写成包含光速 $c$ 的统一量纲形式：
$$ct' = \gamma (ct - \vec{\beta} \cdot \vec{r})$$

**空间的变换：**
空间的变换公式是：
$$\vec{r}' = \vec{r} + \frac{\gamma - 1}{v^2} (\vec{v} \cdot \vec{r})\vec{v} - \gamma \vec{v} t$$
如果用 $\vec{\beta}$ 表示，形式更为对称：
$$\vec{r}' = \vec{r} + \frac{\gamma - 1}{\beta^2} (\vec{\beta} \cdot \vec{r})\vec{\beta} - \gamma c t \vec{\beta}$$

> **公式推导的物理直觉：**
> 我们把空间向量 $\vec{r}$ 拆成两部分：$\vec{r} = \vec{r}_{\parallel} + \vec{r}_{\perp}$。
> 其中 $\vec{r}_{\parallel} = \frac{(\vec{v} \cdot \vec{r})}{v^2}\vec{v}$ 是平行于运动方向的投影。
> - 平行分量参与标准的洛伦兹变换：$\vec{r}'_{\parallel} = \gamma(\vec{r}_{\parallel} - \vec{v}t)$
> - 垂直分量保持不变：$\vec{r}'_{\perp} = \vec{r}_{\perp} = \vec{r} - \vec{r}_{\parallel}$
> 将这两项加起来 $\vec{r}' = \vec{r}'_{\parallel} + \vec{r}'_{\perp}$，稍作代数化简就能得到上面的矢量公式。

---

### 2. 矩阵形式（四维时空张量表示）

在高等物理（如电动力学、广义相对论或粒子物理）中，为了方便计算，我们通常将坐标写成四维逆变矢量 $x^\mu = (ct, x, y, z)^T$。

任意方向的洛伦兹变换可以写成一个 $4 \times 4$ 的对称矩阵 $\Lambda$，即 $x'^{\mu} = \Lambda^\mu_{\,\,\nu} x^\nu$。

设速度分量为 $\vec{\beta} = (\beta_x, \beta_y, \beta_z)$，$\beta^2 = \beta_x^2 + \beta_y^2 + \beta_z^2$。洛伦兹变换矩阵 $\Lambda$ 的完整形式如下：

$$
\begin{pmatrix}
ct' \\ x' \\ y' \\ z'
\end{pmatrix}
=
\begin{pmatrix}
\gamma & -\gamma\beta_x & -\gamma\beta_y & -\gamma\beta_z \\
-\gamma\beta_x & 1 + (\gamma-1)\frac{\beta_x^2}{\beta^2} & (\gamma-1)\frac{\beta_x\beta_y}{\beta^2} & (\gamma-1)\frac{\beta_x\beta_z}{\beta^2} \\
-\gamma\beta_y & (\gamma-1)\frac{\beta_x\beta_y}{\beta^2} & 1 + (\gamma-1)\frac{\beta_y^2}{\beta^2} & (\gamma-1)\frac{\beta_y\beta_z}{\beta^2} \\
-\gamma\beta_z & (\gamma-1)\frac{\beta_x\beta_z}{\beta^2} & (\gamma-1)\frac{\beta_y\beta_z}{\beta^2} & 1 + (\gamma-1)\frac{\beta_z^2}{\beta^2}
\end{pmatrix}
\begin{pmatrix}
ct \\ x \\ y \\ z
\end{pmatrix}
$$

### 3. 退化验证（Sanity Check）
你可以验证一下这个公式的准确性：如果参考系仅仅沿着 $x$ 轴运动，那么 $\beta_y = 0$, $\beta_z = 0$, $\beta_x = \beta$。
此时，矩阵中含有 $\beta_y$ 和 $\beta_z$ 的项全为 $0$。空间部分的对角线上：
*   $x$ 分量的系数变为 $1 + (\gamma-1)\frac{\beta^2}{\beta^2} = \gamma$
*   $y$ 分量和 $z$ 分量的系数变为 $1 + 0 = 1$

代入矩阵你会立刻得到：
$ct' = \gamma(ct - \beta x)$
$x' = -\gamma\beta ct + \gamma x = \gamma(x - vt)$
$y' = y$
$z' = z$
这完美地退化回了课本中最熟悉的标准洛伦兹变换形式。

**总结：**
当你遇到参考系斜向运动的情况（就像上一题中惯性系可能需要沿着任意给定的空间连线运动时），不需要繁琐地去旋转坐标轴，直接将速度向量 $\vec{v}$ 和坐标向量 $\vec{r}$ 代入上述的**矢量形式公式**，或者使用**矩阵乘法**，就能一步求出新参考系中的时间和空间坐标。