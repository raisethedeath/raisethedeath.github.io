验证推迟势满足 Lorenz 规范，是电动力学中确认自洽性的关键一环。下面用 SI 单位制逐步推演，核心思路是将推迟势的散度和时间导数用源点散度表示，再利用电荷守恒消去。

---
### 1. 推迟势与 Lorenz 规范
推迟势的积分形式为：
$$
\varphi(\mathbf{r},t) = \frac{1}{4\pi\varepsilon_0} \int \frac{\rho(\mathbf{r}', t_r)}{R} \,\mathrm{d}^3r'
$$
$$
\mathbf{A}(\mathbf{r},t) = \frac{\mu_0}{4\pi} \int \frac{\mathbf{J}(\mathbf{r}', t_r)}{R} \,\mathrm{d}^3r'
$$
其中 $R = |\mathbf{r} - \mathbf{r}'|$，推迟时间 $t_r = t - R/c$。  
Lorenz 规范条件为：
$$
\nabla \cdot \mathbf{A} + \frac{1}{c^2}\frac{\partial \varphi}{\partial t} = 0
\qquad\left( c^2 = \frac{1}{\mu_0\varepsilon_0} \right)
$$

---

### 2. 计算 $\nabla \cdot \mathbf{A}$
微分算符 $\nabla$ 作用于场点 $\mathbf{r}$，积分变量是 $\mathbf{r}'$。  
$$
\nabla \cdot \mathbf{A} = \frac{\mu_0}{4\pi} \int \nabla \cdot \left[ \frac{\mathbf{J}(\mathbf{r}', t_r)}{R} \right] \mathrm{d}^3r'
$$
将散度展开为两项：
$$
\nabla \cdot \left( \frac{\mathbf{J}}{R} \right) = \mathbf{J} \cdot \nabla \left(\frac{1}{R}\right) + \frac{1}{R} \nabla \cdot \mathbf{J}(\mathbf{r}', t_r)
$$
- $\nabla(1/R) = -\hat{\mathbf{R}}/R^2$，其中 $\hat{\mathbf{R}} = (\mathbf{r} - \mathbf{r}')/R$。
- $\mathbf{J}$ 通过 $t_r$ 依赖于 $\mathbf{r}$：$\nabla \cdot \mathbf{J} = \frac{\partial J_i}{\partial t_r} \frac{\partial t_r}{\partial x_i} = -\frac{1}{c} \frac{\partial \mathbf{J}}{\partial t} \cdot \hat{\mathbf{R}}$（记 $\partial/\partial t$ 为对 $t_r$ 的导数）。

因此：
$$
\nabla \cdot \mathbf{A} = \frac{\mu_0}{4\pi} \int \left[ -\frac{\mathbf{J} \cdot \hat{\mathbf{R}}}{R^2} - \frac{1}{cR} \frac{\partial \mathbf{J}}{\partial t} \cdot \hat{\mathbf{R}} \right] \mathrm{d}^3r'
\tag{1}
$$

---

### 3. 计算 $(1/c^2)\partial\varphi/\partial t$
$\rho$ 仅通过 $t_r$ 依赖 $t$，$\partial t_r/\partial t = 1$：
$$
\frac{\partial \varphi}{\partial t} = \frac{1}{4\pi\varepsilon_0} \int \frac{1}{R} \frac{\partial \rho}{\partial t} \,\mathrm{d}^3r'
$$
$$
\frac{1}{c^2} \frac{\partial \varphi}{\partial t} = \frac{\mu_0}{4\pi} \int \frac{1}{R} \frac{\partial \rho}{\partial t} \,\mathrm{d}^3r'
\tag{2}
$$

---

### 4. 将面积分转换为对源点散度
合并 (1) 与 (2)，规范条件左边的和为：
$$
\nabla \cdot \mathbf{A} + \frac{1}{c^2}\frac{\partial \varphi}{\partial t}
= \frac{\mu_0}{4\pi} \int \left[
-\frac{\mathbf{J} \cdot \hat{\mathbf{R}}}{R^2}
- \frac{1}{cR} \frac{\partial \mathbf{J}}{\partial t} \cdot \hat{\mathbf{R}}
+ \frac{1}{R} \frac{\partial \rho}{\partial t}
\right] \mathrm{d}^3r'
\tag{3}
$$

**处理 $-\mathbf{J}\cdot\hat{\mathbf{R}}/R^2$ 项**  
注意到 $\hat{\mathbf{R}}/R^2 = \nabla'(1/R)$（其中 $\nabla'$ 对 $\mathbf{r}'$ 作用），于是：
$$
-\frac{\mathbf{J} \cdot \hat{\mathbf{R}}}{R^2} = -\mathbf{J} \cdot \nabla'\left(\frac{1}{R}\right)
$$
用分部积分：
$$
\int -\mathbf{J} \cdot \nabla'\left(\frac{1}{R}\right) \mathrm{d}^3r'
= \int \left[ -\nabla' \cdot \left( \frac{\mathbf{J}}{R} \right) + \frac{1}{R} \nabla' \cdot \mathbf{J} \right] \mathrm{d}^3r'
$$
体积分 $\int \nabla' \cdot (\mathbf{J}/R)\,\mathrm{d}^3r'$ 可化为无穷远面积分，因源局域而为零。故此项贡献为 $\int \frac{1}{R} \nabla' \cdot \mathbf{J} \,\mathrm{d}^3r'$，其中 $\nabla' \cdot \mathbf{J}$ 是 $\mathbf{J}(\mathbf{r}', t_r)$ 对 $\mathbf{r}'$ 的全散度。

**处理 $-\frac{1}{cR} \frac{\partial \mathbf{J}}{\partial t} \cdot \hat{\mathbf{R}}$ 项**  
展开全散度 $\nabla' \cdot \mathbf{J}$：
$$
\nabla' \cdot \mathbf{J} = (\nabla' \cdot \mathbf{J})_{t_r} + \frac{\partial \mathbf{J}}{\partial t_r} \cdot \nabla' t_r
$$
由 $\nabla' t_r = -\frac{1}{c} \nabla' R = \frac{1}{c} \hat{\mathbf{R}}$，得：
$$
\nabla' \cdot \mathbf{J} = (\nabla' \cdot \mathbf{J})_{t_r} + \frac{1}{c} \frac{\partial \mathbf{J}}{\partial t} \cdot \hat{\mathbf{R}}
$$
移项：
$$
\frac{1}{c} \frac{\partial \mathbf{J}}{\partial t} \cdot \hat{\mathbf{R}} = \nabla' \cdot \mathbf{J} - (\nabla' \cdot \mathbf{J})_{t_r}
$$
因此：
$$
- \frac{1}{cR} \frac{\partial \mathbf{J}}{\partial t} \cdot \hat{\mathbf{R}}
= -\frac{1}{R} \nabla' \cdot \mathbf{J} + \frac{1}{R} (\nabla' \cdot \mathbf{J})_{t_r}
$$

---

### 5. 合并化简与利用连续性方程
将上述结果代回 (3) 式，积分内变为：
$$
\left[ \frac{1}{R} \nabla' \cdot \mathbf{J} \right] 
+ \left[ -\frac{1}{R} \nabla' \cdot \mathbf{J} + \frac{1}{R} (\nabla' \cdot \mathbf{J})_{t_r} \right]
+ \frac{1}{R} \frac{\partial \rho}{\partial t}
= \frac{1}{R} \left[ (\nabla' \cdot \mathbf{J})_{t_r} + \frac{\partial \rho}{\partial t} \right]
$$
第一项来自 $-\mathbf{J}\cdot\hat{\mathbf{R}}/R^2$ 的变换，第二、三项来自时间导数部分。$\nabla' \cdot \mathbf{J}$ 互相抵消。

现在括号中的 $(\nabla' \cdot \mathbf{J})_{t_r}$ 是固定时间参数下对源点坐标的散度，电荷守恒给出：
$$
(\nabla' \cdot \mathbf{J})_{t_r} + \frac{\partial \rho(\mathbf{r}', t_r)}{\partial t} = 0
$$
所以被积函数恒为零。

---

### 6. 结论
$$
\nabla \cdot \mathbf{A} + \frac{1}{c^2} \frac{\partial \varphi}{\partial t} 
= \frac{\mu_0}{4\pi} \int 0 \cdot \frac{1}{R} \,\mathrm{d}^3r' = 0
$$
推迟势自动满足 Lorenz 规范，推导中只依赖于电流连续性方程，体现了规范不变性与电荷守恒的内在联系。