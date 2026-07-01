朗德 $g$ 因子（Lande factor）是原子物理中描述总磁矩与总角动量关系的关键常数，它决定了原子在磁场中的塞曼分裂。其推导核心在于处理 **轨道磁矩与自旋磁矩的 $g$ 值不同** 所导致的磁矩矢量并不与总角动量 $\mathbf{J}$ 共线的问题。

以下是基于矢量模型和量子力学的基本推导过程，假定原子处于 $LS$ 耦合下，$L, S, J$ 为好量子数。

---

### 1. 原子的磁矩算符
电子的轨道磁矩和自旋磁矩分别为：
$$
\boldsymbol{\mu}_L = -\frac{\mu_B}{\hbar}\mathbf{L}, \qquad 
\boldsymbol{\mu}_S = -g_s\frac{\mu_B}{\hbar}\mathbf{S} \approx -2\frac{\mu_B}{\hbar}\mathbf{S}
$$
总磁矩算符为二者之和：
$$
\boldsymbol{\mu} = \boldsymbol{\mu}_L + \boldsymbol{\mu}_S = -\frac{\mu_B}{\hbar}(\mathbf{L} + 2\mathbf{S})
$$
其中 $\mu_B = e\hbar/2m_e$ 是玻尔磁子。

---

### 2. 有效磁矩——沿 $\mathbf{J}$ 方向的投影
由于 $\mathbf{L}$ 和 $\mathbf{S}$ 前面的系数不同（1 和 2），总磁矩 $\boldsymbol{\mu}$ 一般不与总角动量 $\mathbf{J} = \mathbf{L} + \mathbf{S}$ 平行。在弱磁场中，$\mathbf{L}$ 和 $\mathbf{S}$ 绕 $\mathbf{J}$ 快速进动，只有 $\boldsymbol{\mu}$ 在 $\mathbf{J}$ 方向上的分量时间平均不为零。因此，实验上观测到的有效磁矩是 $\boldsymbol{\mu}$ 在 $\mathbf{J}$ 上的投影：
$$
\boldsymbol{\mu}_J = \frac{(\boldsymbol{\mu}\cdot\mathbf{J})}{|\mathbf{J}|^2}\,\mathbf{J}
$$
定义朗德 $g_J$ 因子，使得有效磁矩可写成与总角动量成正比的形式：
$$
\boldsymbol{\mu}_J = -g_J\frac{\mu_B}{\hbar}\mathbf{J}
$$
比较两式，得 $g_J$ 的算符表达式（在 $J \neq 0$ 时）：
$$
g_J = \frac{\hbar\,(\boldsymbol{\mu}\cdot\mathbf{J})}{-\mu_B\,\mathbf{J}^2}
= \frac{(\mathbf{L}+2\mathbf{S})\cdot\mathbf{J}}{\mathbf{J}^2}
$$

---

### 3. 用角动量量子数求期待值
在 $|LSJM\rangle$ 基中，矢量 $\mathbf{L}$、$\mathbf{S}$、$\mathbf{J}$ 的长度固定。利用：
$$
\mathbf{L}\cdot\mathbf{J} = \frac{1}{2}(\mathbf{J}^2 + \mathbf{L}^2 - \mathbf{S}^2)
$$
$$
\mathbf{S}\cdot\mathbf{J} = \frac{1}{2}(\mathbf{J}^2 + \mathbf{S}^2 - \mathbf{L}^2)
$$
代入分子：
$$
(\mathbf{L}+2\mathbf{S})\cdot\mathbf{J} = \mathbf{L}\cdot\mathbf{J} + 2\mathbf{S}\cdot\mathbf{J} 
= \frac{1}{2}(3\mathbf{J}^2 - \mathbf{L}^2 + \mathbf{S}^2)
$$
将所有算符替换为它们的本征值（$\mathbf{J}^2 \to J(J+1)\hbar^2$ 等），取期待值：
$$
\langle (\mathbf{L}+2\mathbf{S})\cdot\mathbf{J} \rangle = \frac{\hbar^2}{2}\big[3J(J+1) - L(L+1) + S(S+1)\big]
$$
$$
\langle \mathbf{J}^2 \rangle = J(J+1)\hbar^2
$$
因此朗德因子为：
$$
g_J = \frac{3J(J+1) - L(L+1) + S(S+1)}{2J(J+1)}
$$

---

### 4. 更常见的形式
将分子拆成 $2J(J+1) + [J(J+1) + S(S+1) - L(L+1)]$，可得物理意义更清晰的表达式：
$$
\boxed{g_J = 1 + \frac{J(J+1) + S(S+1) - L(L+1)}{2J(J+1)}}
$$
这就是 **朗德 $g$ 因子公式**，适用于 $J \neq 0$ 的所有 $LS$ 耦合原子态。

---

### 5. 物理意义与验证
- 若 $S=0$（纯轨道角动量），则 $J=L$，公式给出 $g_J = 1$。
- 若 $L=0$（纯自旋角动量），则 $J=S$，公式给出 $g_J = 2$（忽略辐射修正）。
- 对于一般情况，$g_J$ 介于 1 和 2 之间，反映了轨道与自旋贡献的相对权重。

利用朗德因子，原子在磁场 $B$ 中的塞曼能级分裂可直接写为：
$$
\Delta E = g_J\,\mu_B\,M_J\,B
$$
这正是分析和理解原子光谱反常塞曼效应的基石。