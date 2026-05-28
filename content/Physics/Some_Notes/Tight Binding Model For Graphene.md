石墨烯的能带结构可由紧束缚模型精确求解。这里采用单轨道（$2p_z$）最近邻跃迁近似，详细推导如下。

---

### 1. 晶格结构与基矢
石墨烯是二维蜂巢晶格，可视为两套三角子晶格（A 和 B）交叠而成。取碳-碳键长为 $a \approx 1.42\;\text{Å}$。  
正格子基矢选为
$$
\mathbf{a}_1 = a\left(\frac{3}{2},\ \frac{\sqrt{3}}{2}\right),\qquad
\mathbf{a}_2 = a\left(\frac{3}{2},\ -\frac{\sqrt{3}}{2}\right),
$$
原胞为菱形，含一个 A 原子（取在原点）和一个 B 原子，B 原子位于
$$
\boldsymbol{\delta}_1 = a(1,\,0).
$$
每个 A 原子的三个最近邻 B 原子由以下位移矢量给出：
$$
\boldsymbol{\delta}_1 = a(1,0),\quad
\boldsymbol{\delta}_2 = a\left(-\frac{1}{2},\ \frac{\sqrt{3}}{2}\right),\quad
\boldsymbol{\delta}_3 = a\left(-\frac{1}{2},\ -\frac{\sqrt{3}}{2}\right).
$$
三者长度均为 $a$。对应的倒格子基矢为
$$
\mathbf{b}_1 = \frac{2\pi}{a}\left(\frac{1}{3},\ \frac{1}{\sqrt{3}}\right),\qquad
\mathbf{b}_2 = \frac{2\pi}{a}\left(\frac{1}{3},\ -\frac{1}{\sqrt{3}}\right).
$$
第一布里渊区是正六边形，其六个顶点为 Dirac 点（K 与 K'），例如
$$
\mathbf{K} = \frac{2\pi}{a}\left(\frac{1}{3},\ \frac{1}{3\sqrt{3}}\right),\qquad
\mathbf{K}' = \frac{2\pi}{a}\left(\frac{1}{3},\ -\frac{1}{3\sqrt{3}}\right).
$$

---

### 2. 紧束缚哈密顿量
只考虑每个碳原子的 $2p_z$ 轨道，并设 A、B 子晶格在位能相等（设为能量零点）。最近邻跃迁强度为 $t > 0$（通常 $t \approx 2.8\;\text{eV}$）。二次量子化哈密顿量为
$$
\hat{H} = -t \sum_{\langle i,j\rangle} \left( \hat{a}_i^\dagger \hat{b}_j + \hat{b}_j^\dagger \hat{a}_i \right),
$$
其中 $\hat{a}_i^\dagger$ 在 A 子晶格第 $i$ 个原胞产生电子，$\hat{b}_j^\dagger$ 在 B 子晶格产生电子，$\langle i,j\rangle$ 表示最近邻连接。

将产生/湮灭算符作傅里叶变换：
$$
\hat{a}_i = \frac{1}{\sqrt{N}} \sum_{\mathbf{k}} e^{i\mathbf{k}\cdot\mathbf{R}_i} \hat{a}_{\mathbf{k}},\qquad
\hat{b}_j = \frac{1}{\sqrt{N}} \sum_{\mathbf{k}} e^{i\mathbf{k}\cdot\mathbf{R}_j} \hat{b}_{\mathbf{k}},
$$
其中 $\mathbf{R}_i$ 为原胞位置，$N$ 为原胞数。代入 $\hat{H}$，利用平移对称性，可得 $\mathbf{k}$ 空间的对角化形式：
$$
\hat{H} = \sum_{\mathbf{k}} \begin{pmatrix} \hat{a}_{\mathbf{k}}^\dagger & \hat{b}_{\mathbf{k}}^\dagger \end{pmatrix}
\begin{pmatrix} 0 & -t f(\mathbf{k}) \\ -t f^*(\mathbf{k}) & 0 \end{pmatrix}
\begin{pmatrix} \hat{a}_{\mathbf{k}} \\ \hat{b}_{\mathbf{k}} \end{pmatrix},
$$
其中结构因子
$$
f(\mathbf{k}) = \sum_{j=1}^{3} e^{i\mathbf{k}\cdot\boldsymbol{\delta}_j}.
$$

---

### 3. 能带色散关系
上述 $2\times2$ 矩阵的本征值立即给出能带：
$$
E(\mathbf{k}) = \pm t\, |f(\mathbf{k})|.
$$
正号对应导带（$\pi^*$ 反键态），负号对应价带（$\pi$ 成键态），两者关于 $E=0$ 对称。

代入三个最近邻矢量：
$$
\begin{aligned}
f(\mathbf{k}) &= e^{i k_x a} + e^{-i k_x a/2} \left( e^{i \sqrt{3}k_y a/2} + e^{-i \sqrt{3}k_y a/2} \right) \\
&= e^{i k_x a} + 2 e^{-i k_x a/2} \cos\!\left( \frac{\sqrt{3}}{2} k_y a \right).
\end{aligned}
$$
由此得
$$
|f(\mathbf{k})|^2 = 1 + 4\cos\!\left(\frac{3}{2}k_x a\right)\cos\!\left(\frac{\sqrt{3}}{2}k_y a\right) + 4\cos^2\!\left(\frac{\sqrt{3}}{2}k_y a\right).
$$
利用三角恒等式，也可写成等价形式：
$$
|f(\mathbf{k})|^2 = 3 + 2\cos\!\left(\sqrt{3} k_y a\right) + 4\cos\!\left(\frac{3}{2}k_x a\right)\cos\!\left(\frac{\sqrt{3}}{2}k_y a\right).
$$
故能带为
$$
E(\mathbf{k}) = \pm t \sqrt{3 + 2\cos\!\left(\sqrt{3} k_y a\right) + 4\cos\!\left(\frac{3}{2}k_x a\right)\cos\!\left(\frac{\sqrt{3}}{2}k_y a\right)}.
$$

---

### 4. 能带特性与 Dirac 锥
- **Γ 点** ($\mathbf{k}=0$)：$f(0)=3$，$E = \pm 3t$，是价带底与导带顶。
- **M 点** (布里渊区边中点)：$f(\mathbf{M})=1$，$E = \pm t$。
- **K 点** ($\mathbf{k} = \mathbf{K}$)：直接计算得 $f(\mathbf{K}) = 0$，因此 $E=0$，导带与价带简并，形成 **Dirac 点**。六个 K 点全部等价，费米面恰好通过 Dirac 点，石墨烯为零带隙半导体（半金属）。

在 K 点附近展开：令 $\mathbf{k} = \mathbf{K} + \mathbf{q}$，$|\mathbf{q}| \ll |\mathbf{K}|$。保留一阶项，
$$
f(\mathbf{K}+\mathbf{q}) \approx -\frac{3a}{2}(q_x - i q_y) \quad (\text{取适当相位}),
$$
因此
$$
E(\mathbf{q}) \approx \pm \frac{3t a}{2} |\mathbf{q}| = \pm \hbar v_F |\mathbf{q}|,
$$
其中费米速度
$$
v_F = \frac{3ta}{2\hbar} \approx \frac{3 \times 2.8\;\text{eV} \times 1.42\;\text{Å}}{2\hbar} \approx 10^6\;\text{m/s}.
$$
低能激发表现为无质量的狄拉克费米子，呈线性色散，形成 **Dirac 锥**。

---

### 5. 小结
通过紧束缚模型，我们得到了石墨烯的全布里渊区能带：
$$
\boxed{E(\mathbf{k}) = \pm t \sqrt{1 + 4\cos\!\left(\frac{3}{2}k_x a\right)\cos\!\left(\frac{\sqrt{3}}{2}k_y a\right) + 4\cos^2\!\left(\frac{\sqrt{3}}{2}k_y a\right)}}.
$$
该结果准确描述了导带与价带在 K 点接触、线性色散以及电子-空穴对称性，是理解石墨烯奇异电子性质的出发点。