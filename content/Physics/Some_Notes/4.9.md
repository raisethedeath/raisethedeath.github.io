# Problem 4.9 (Intensive variables and the flat direction★★★)
_recitation#4_
The thermodynamic entropy $S(U,V,N)$ is extensive. Therefore its conjugate variables
$\beta = \frac{\partial S}{\partial U}, \quad \beta P = \frac{\partial S}{\partial V}, \quad -\beta \mu = \frac{\partial S}{\partial N}$
are intensive quantities. ==Intensive quantities are homogeneous functions of order zero.==
(a) Show that the intensivity of $\beta(U,V,N)$, i.e.
$\beta(\lambda U, \lambda V, \lambda N) = \beta(U,V,N),$
implies
$S_{UU} U + S_{UV} V + S_{UN} N = 0.$
(b) By applying the same reasoning to $S_V$ and $S_N$, show that
$S_{UV} U + S_{VV} V + S_{VN} N = 0, \quad S_{UN} U + S_{VN} V + S_{NN} N = 0.$
(c) Combine the above results to show that
$\begin{pmatrix} S_{UU} & S_{UV} & S_{UN} \\ S_{UV} & S_{VV} & S_{VN} \\ S_{UN} & S_{VN} & S_{NN} \end{pmatrix} \begin{pmatrix} U \\ V \\ N \end{pmatrix} = 0.$
Conclude that the Hessian matrix of $S(U,V,N)$ has a zero eigenvalue, with eigenvector proportional to $(U,V,N)$.

## Solition
以下是针对该习题的完整中文解答：
### **前提知识与定理**
热力学熵 $S(U,V,N)$ 是一个**外延量（Extensive quantity）**，这意味着它是其变量 $(U,V,N)$ 的**一次齐次函数**。
根据欧拉齐次函数定理（Euler's theorem for homogeneous functions），如果一个函数 $f(x_1, x_2, ..., x_n)$ 是 $k$ 次齐次函数，即 $f(\lambda x_1, \dots, \lambda x_n) = \lambda^k f(x_1, \dots, x_n)$，那么对其关于 $\lambda$ 在 $\lambda = 1$ 处求导，可以得到：
$$ \sum_{i=1}^n x_i \frac{\partial f}{\partial x_i} = k f(x_1, \dots, x_n) $$
熵 $S$ 的共轭变量 $\beta, \beta P, -\beta \mu$ 是**内涵量（Intensive quantities）**，这意味着它们是自变量的**零次齐次函数**（$k=0$），即系统按比例放大时它们的值保持不变。

---

### **(a) 证明 $\beta$ 的内涵性意味着 $S_{UU} U + S_{UV} V + S_{UN} N = 0$**

**证明：**
已知 $\beta = \frac{\partial S}{\partial U} = S_U(U,V,N)$，并且 $\beta$ 是内涵量，满足零次齐次性：
$$\beta(\lambda U, \lambda V, \lambda N) = \beta(U,V,N)$$

对等式两边关于 $\lambda$ 求导：
$$ \frac{\partial}{\partial \lambda} \beta(\lambda U, \lambda V, \lambda N) = \frac{\partial}{\partial \lambda} \beta(U,V,N) $$

右边不含 $\lambda$，导数为 $0$。左边使用多元函数的链式法则：
$$ U \frac{\partial \beta}{\partial (\lambda U)} + V \frac{\partial \beta}{\partial (\lambda V)} + N \frac{\partial \beta}{\partial (\lambda N)} = 0 $$

令 $\lambda = 1$，则上式化为：
$$ U \frac{\partial \beta}{\partial U} + V \frac{\partial \beta}{\partial V} + N \frac{\partial \beta}{\partial N} = 0 $$

将 $\beta = S_U$ 代入，并将偏导数写为二阶偏导形式（例如 $\frac{\partial \beta}{\partial U} = \frac{\partial^2 S}{\partial U^2} = S_{UU}$）：
$$ U S_{UU} + V S_{UV} + N S_{UN} = 0 $$

调整顺序即得证：
$$ S_{UU} U + S_{UV} V + S_{UN} N = 0 $$

---

### **(b) 运用相同推理证明对于 $S_V$ 和 $S_N$ 的关系式**

**证明：**
1. 对于体积的共轭变量 $\beta P = \frac{\partial S}{\partial V} = S_V(U,V,N)$：
它同样是内涵量（零次齐次函数），由欧拉齐次函数定理（$k=0$）可得：
$$ U \frac{\partial S_V}{\partial U} + V \frac{\partial S_V}{\partial V} + N \frac{\partial S_V}{\partial N} = 0 $$
代入偏导数记号，并根据克莱罗定理（二阶混合偏导数可交换，$S_{VU} = S_{UV}$ 等），我们得到：
$$ U S_{UV} + V S_{VV} + N S_{VN} = 0 $$
整理即得：
$$ S_{UV} U + S_{VV} V + S_{VN} N = 0 $$

2. 对于粒子数的共轭变量 $-\beta \mu = \frac{\partial S}{\partial N} = S_N(U,V,N)$：
它同样是内涵量（零次齐次函数），由欧拉定理（$k=0$）可得：
$$ U \frac{\partial S_N}{\partial U} + V \frac{\partial S_N}{\partial V} + N \frac{\partial S_N}{\partial N} = 0 $$
同样利用混合偏导数可交换的性质（$S_{NU} = S_{UN}$，$S_{NV} = S_{VN}$），得到：
$$ U S_{UN} + V S_{VN} + N S_{NN} = 0 $$
整理即得：
$$ S_{UN} U + S_{VN} V + S_{NN} N = 0 $$

---

### **(c) 组合上述结果得出矩阵方程与 Hessian 矩阵的特征**

**推导与结论：**
将 (a) 和 (b) 中得到的三个线性方程写成一个系统：
1) $S_{UU} U + S_{UV} V + S_{UN} N = 0$
2) $S_{UV} U + S_{VV} V + S_{VN} N = 0$
3) $S_{UN} U + S_{VN} V + S_{NN} N = 0$

将它们用矩阵乘法的形式表达，可以写为：
$$ \begin{pmatrix} S_{UU} & S_{UV} & S_{UN} \\ S_{UV} & S_{VV} & S_{VN} \\ S_{UN} & S_{VN} & S_{NN} \end{pmatrix} \begin{pmatrix} U \\ V \\ N \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix} $$

左侧的 $3 \times 3$ 矩阵正是熵函数 $S(U,V,N)$ 的**黑塞矩阵（Hessian matrix，记作 $\mathbf{H}_S$）**。我们可以将上述矩阵方程写为：
$$ \mathbf{H}_S \mathbf{v} = 0 \cdot \mathbf{v} $$
其中 $\mathbf{v} = (U, V, N)^T$ 且 $\mathbf{v}$ 非零。

**结论：**
由于矩阵 $\mathbf{H}_S$ 乘以非零向量 $(U, V, N)^T$ 得到了零向量，这完全符合特征值方程 $\mathbf{H}_S \mathbf{v} = \lambda \mathbf{v}$ 在 $\lambda = 0$ 时的形式。

因此我们可以得出结论：
**熵函数 $S(U,V,N)$ 的 Hessian 矩阵具有一个等于 $0$ 的特征值（这就意味着该矩阵是奇异的，行列式为零），并且与该零特征值相对应的特征向量正比于系统的状态向量 $(U,V,N)$。** 这在物理上反映了由于系统具有尺度不变形（热力学外延性），顺着系统尺度放大的方向（即向量 $(U,V,N)$ 的方向），熵的变化仅仅是线性的，因此其二阶导数为零。