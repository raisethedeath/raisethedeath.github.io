要详细推导等离子体中左旋（L）和右旋（R）圆偏振波的色散关系，我们需要从**冷等离子体模型**出发，并考虑**背景磁场**的存在。磁化冷等离子体的核心是介电张量，平行于磁场传播的波会自然地分解为左旋和右旋圆偏振模式。

下面给出系统性的推导步骤。

---

## 1. 基本模型与线性化方程

考虑等离子体处于均匀背景磁场 $\mathbf{B}_0 = B_0 \hat{\mathbf{z}}$ 中。冷等离子体模型假设：
- 离子为均匀正电背景（或作为不动背景，仅考虑电子运动；若要包含离子效应，需同时写出离子方程），
- 热压强为零（$T_e = T_i = 0$），
- 无碰撞。

为简化，先只考虑电子动力学（高频近似），最后再加入离子修正。电子流体运动方程（线性化）：
$$
m_e \frac{\partial \mathbf{v}}{\partial t} = -e (\mathbf{E} + \mathbf{v} \times \mathbf{B}_0),
$$
其中 $-e$ 为电子电荷，$m_e$ 为电子质量。已假设扰动振幅小，舍去二次项 $\mathbf{v}\times\mathbf{B}_1$。

对时谐场 $\sim e^{-i\omega t}$，上述方程可写为：
$$
-i\omega m_e \mathbf{v} = -e \mathbf{E} - e \mathbf{v} \times \mathbf{B}_0.
$$

定义电子回旋频率（为正值）：
$$
\omega_{ce} = \frac{e B_0}{m_e} \quad (>0),
$$
以及矢量 $\boldsymbol{\omega}_{ce} = -\omega_{ce} \hat{\mathbf{z}}$ （电子回旋矢量方向与 $B_0$ 相反，因电子带负电）。则方程写为：
$$
-i\omega \mathbf{v} = -\frac{e}{m_e}\mathbf{E} - \mathbf{v}\times(\omega_{ce}\hat{\mathbf{z}}).
$$

引入等离子体频率：
$$
\omega_{pe} = \sqrt{\frac{n_0 e^2}{\varepsilon_0 m_e}} \quad (\text{SI}) \quad \text{或} \quad \omega_{pe} = \sqrt{\frac{4\pi n_0 e^2}{m_e}} \quad (\text{Gaussian}).
$$

---

## 2. 求解电子速度与电流密度

将运动方程写成分量形式（使用 $\partial/\partial t \to -i\omega$）：
$$
\begin{aligned}
-i\omega v_x &= -\frac{e}{m_e}E_x - v_y \omega_{ce}, \\
-i\omega v_y &= -\frac{e}{m_e}E_y + v_x \omega_{ce}, \\
-i\omega v_z &= -\frac{e}{m_e}E_z.
\end{aligned}
$$

定义圆偏振基矢下的组合量：
$$
v_\pm = v_x \pm i v_y, \quad E_\pm = E_x \pm i E_y.
$$
物理意义：迎着 $+\hat{\mathbf{z}}$ 方向看，$E_+$ 对应右旋圆偏振（R波），$E_-$ 对应左旋圆偏振（L波）。注意：电子回旋运动本身是右手螺旋（顺着磁场看为右旋），故 $E_+$ 与电子回旋同向。

将 $x, y$ 方程分别相加和相减：
$$
\begin{aligned}
-i\omega(v_x + i v_y) &= -\frac{e}{m_e}(E_x + i E_y) - \omega_{ce}(v_y - i v_x), \\
-i\omega(v_x - i v_y) &= -\frac{e}{m_e}(E_x - i E_y) + \omega_{ce}(v_y + i v_x).
\end{aligned}
$$

注意到：
$$
v_y - i v_x = -i(v_x + i v_y) = -i v_+, \\
v_y + i v_x = i(v_x - i v_y) = i v_-.
$$
代入得到：
$$
\begin{aligned}
-i\omega v_+ &= -\frac{e}{m_e}E_+ + i\omega_{ce} v_+, \\
-i\omega v_- &= -\frac{e}{m_e}E_- - i\omega_{ce} v_-.
\end{aligned}
$$

解得：
$$
v_+ = \frac{-i e}{m_e(\omega - \omega_{ce})} E_+, \quad
v_- = \frac{-i e}{m_e(\omega + \omega_{ce})} E_-.
$$

电子电流密度 $\mathbf{J} = -n_0 e \mathbf{v}$，因此：
$$
J_+ = -n_0 e v_+ = \frac{i n_0 e^2}{m_e(\omega - \omega_{ce})} E_+ \equiv \sigma_+ E_+,
$$
$$
J_- = -n_0 e v_- = \frac{i n_0 e^2}{m_e(\omega + \omega_{ce})} E_- \equiv \sigma_- E_-.
$$
电导率张量在圆偏振基下是对角化的：
$$
\sigma_\pm = \frac{i \varepsilon_0 \omega_{pe}^2}{\omega \mp \omega_{ce}} \quad (\text{SI}).
$$

---

## 3. 从麦克斯韦方程到波动方程

无外源麦克斯韦方程组（时谐形式）：
$$
\nabla \times \mathbf{E} = i\omega \mu_0 \mathbf{H}, \quad
\nabla \times \mathbf{H} = -i\omega \varepsilon_0 \mathbf{E} + \mathbf{J}.
$$

对于冷等离子体，$\mathbf{J} = \boldsymbol{\sigma}\cdot\mathbf{E}$。定义等效介电张量：
$$
\boldsymbol{\varepsilon} = \varepsilon_0 \left( \mathbf{I} + \frac{i}{\varepsilon_0 \omega} \boldsymbol{\sigma} \right),
$$
使得 $\nabla\times\mathbf{H} = -i\omega \boldsymbol{\varepsilon}\cdot\mathbf{E}$。

在圆偏振基下，介电张量对角元：
$$
\varepsilon_\pm = \varepsilon_0\left(1 - \frac{\omega_{pe}^2}{\omega(\omega \mp \omega_{ce})}\right).
$$
定义折射率：$N_\pm^2 = \varepsilon_\pm / \varepsilon_0$（对非磁性等离子体 $\mu = \mu_0$），所以：
$$
N_\pm^2 = 1 - \frac{\omega_{pe}^2}{\omega(\omega \mp \omega_{ce})}.
$$

由麦克斯韦方程导出波动方程：
$$
\nabla\times(\nabla\times\mathbf{E}) = \frac{\omega^2}{c^2} \frac{\boldsymbol{\varepsilon}}{\varepsilon_0}\cdot\mathbf{E}.
$$

对于平面波解 $\sim e^{i(kz - \omega t)}$，且波矢 $\mathbf{k} = k\hat{\mathbf{z}}$（平行传播），有：
$$
\nabla\times\mathbf{E} = i\mathbf{k}\times\mathbf{E}, \quad \nabla\times(\nabla\times\mathbf{E}) = -k^2 [\mathbf{E} - \hat{\mathbf{z}}(\hat{\mathbf{z}}\cdot\mathbf{E})].
$$
对于横波，$\hat{\mathbf{z}}\cdot\mathbf{E}=0$，得到简单形式：
$$
k^2 c^2 \mathbf{E}_\perp = \omega^2 \frac{\boldsymbol{\varepsilon}_\perp}{\varepsilon_0} \cdot \mathbf{E}_\perp.
$$

在圆偏振基下，$\mathbf{E}_\perp = E_+ \hat{\mathbf{e}}_+ + E_- \hat{\mathbf{e}}_-$ 且方程退耦：
$$
k^2 c^2 E_\pm = \omega^2 N_\pm^2 E_\pm.
$$
因此得到**R波（右旋）和 L波（左旋）的色散关系**：
$$
\boxed{\frac{k^2 c^2}{\omega^2} = 1 - \frac{\omega_{pe}^2}{\omega(\omega \mp \omega_{ce})}}
$$
其中上行符号（$-$）对应 $E_+$（R波），下行符号（$+$）对应 $E_-$（L波）。

---

## 4. 包含离子运动的完整表达式（低频修正）

如果需要涵盖低频区域（如离子回旋波、哨声波等），则需同时考虑离子动力学。对每种带电粒子种类 $s$（电荷 $q_s$，质量 $m_s$，数密度 $n_s$），线性化运动方程给出贡献：
$$
\varepsilon_\pm = \varepsilon_0\left[1 - \sum_s \frac{\omega_{ps}^2}{\omega(\omega \mp \omega_{cs})}\right],
$$
其中 $\omega_{ps}^2 = n_s q_s^2 / (\varepsilon_0 m_s)$，$\omega_{cs} = |q_s| B_0 / m_s$（回旋频率取绝对值，正负号由粒子电荷符号在推导中自然处理）。整理后完整色散关系为：
$$
N_\pm^2 = 1 - \sum_s \frac{\omega_{ps}^2}{\omega(\omega \mp \omega_{cs})}.
$$
符号约定同上：$N_+^2$ 为 R 波，$N_-^2$ 为 L 波。

---

## 5. 典型频率范围的行为与截止/共振

- **截止**（$k\to 0$，$N^2 \to 0$）：
  令 $N_\pm^2 = 0$ 解得截止频率。电子分支中：
  $$
  1 - \frac{\omega_{pe}^2}{\omega(\omega \mp \omega_{ce})} = 0 \;\Rightarrow\; \omega^2 \mp \omega_{ce}\omega - \omega_{pe}^2 = 0.
  $$
  R波截止频率：$\omega_R = \frac{\omega_{ce}}{2} + \sqrt{\frac{\omega_{ce}^2}{4} + \omega_{pe}^2}$，  
  L波截止频率：$\omega_L = -\frac{\omega_{ce}}{2} + \sqrt{\frac{\omega_{ce}^2}{4} + \omega_{pe}^2}$（需考虑离子后才完整）。

- **共振**（$k\to\infty$，$N^2 \to \infty$）：
  当分母 $\omega \mp \omega_{cs}=0$，即：
  - R波：$\omega = \omega_{ce}$（电子回旋共振），
  - L波：$\omega = \omega_{ci}$（离子回旋共振，若含离子）。

---

## 总结

- **右旋圆偏振波（R波）**：$N_R^2 = 1 - \sum_s \frac{\omega_{ps}^2}{\omega(\omega - \omega_{cs})}$，电场矢量迎着磁场方向看顺时针旋转。
- **左旋圆偏振波（L波）**：$N_L^2 = 1 - \sum_s \frac{\omega_{ps}^2}{\omega(\omega + \omega_{cs})}$，电场矢量迎着磁场看逆时针旋转。

这两种模式是平行于磁场传播时麦克斯韦方程的本征模，也是理解哨声波、离子回旋波、法拉第旋转等现象的基础。