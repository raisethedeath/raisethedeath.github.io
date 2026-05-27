变形梯度 $\mathbf{F}$ 的极分解是连续介质力学中描述局部变形的核心工具。它将任意变形分解为**纯拉伸**与**纯旋转**，从而让我们看清变形过程中哪部分改变形状，哪部分改变方向。以下从定义、数学推导、几何意义到应用进行系统分析。

---

## 1. 变形梯度的物理图像
设连续体从参考构型 $\Omega_0$ 变形到当前构型 $\Omega$，运动为 $\mathbf{x} = \boldsymbol{\chi}(\mathbf{X}, t)$。  
物质线元 $d\mathbf{X}$ 的变换为：
$$
d\mathbf{x} = \mathbf{F} \, d\mathbf{X}, \qquad \mathbf{F} = \frac{\partial \mathbf{x}}{\partial \mathbf{X}}.
$$
$\mathbf{F}$ 是一个二阶张量，携带了**伸长+旋转**的全部信息。我们想从中抽取出==纯变形（拉伸）和纯旋转==。

---

## 2. 极分解定理
若 $\mathbf{F}$ 可逆（$\det\mathbf{F} > 0$，物理上体积不可能为零或负），则存在唯一的分解：
$$
\boxed{\mathbf{F} = \mathbf{R}\mathbf{U} = \mathbf{V}\mathbf{R}}
$$
其中：
- $\mathbf{R}$ 是**正常正交张量**（旋转张量），$\mathbf{R}^T = \mathbf{R}^{-1},\; \det\mathbf{R}=+1$。
- $\mathbf{U}$ 和 $\mathbf{V}$ 是**对称正定张量**，分别称为**右伸长张量**和**左伸长张量**。

---

## 3. 数学推导与唯一性
### 3.1 右极分解 $\mathbf{F} = \mathbf{R}\mathbf{U}$
考虑右 Cauchy–Green 变形张量：
$$
\mathbf{C} = \mathbf{F}^T\mathbf{F}.
$$
因 $\mathbf{F}$ 可逆，$\mathbf{C}$ 对称正定，可谱分解得到其平方根：
$$
\mathbf{U} = \sqrt{\mathbf{C}} = \sqrt{\mathbf{F}^T\mathbf{F}}.
$$
$\mathbf{U}$ 对称正定，表示**参考构型中的纯拉伸**。然后定义：
$$
\mathbf{R} := \mathbf{F}\mathbf{U}^{-1}.
$$
验证正交性：
$$
\mathbf{R}^T\mathbf{R} = \mathbf{U}^{-T}\mathbf{F}^T\mathbf{F}\mathbf{U}^{-1} = \mathbf{U}^{-1}\mathbf{U}^2\mathbf{U}^{-1} = \mathbf{I}.
$$
且 $\det\mathbf{R} = \det\mathbf{F}/\det\mathbf{U} > 0$，故 $\mathbf{R}$ 是正常正交张量。唯一性：若另有 $\mathbf{F}=\mathbf{R}'\mathbf{U}'$，则 $\mathbf{F}^T\mathbf{F}=(\mathbf{U}')^2$，由正定算子的平方根唯一得 $\mathbf{U}'=\mathbf{U}$，进而 $\mathbf{R}'=\mathbf{R}$。

### 3.2 左极分解 $\mathbf{F} = \mathbf{V}\mathbf{R}$
利用左 Cauchy–Green 变形张量：
$$
\mathbf{B} = \mathbf{F}\mathbf{F}^T,
$$
定义左伸长张量：
$$
\mathbf{V} = \sqrt{\mathbf{B}} = \sqrt{\mathbf{F}\mathbf{F}^T}.
$$
令 $\mathbf{R}$ 同上，则 $\mathbf{V} = \mathbf{R}\mathbf{U}\mathbf{R}^T$。容易验证：
$$
\mathbf{F} = \mathbf{R}\mathbf{U} = (\mathbf{R}\mathbf{U}\mathbf{R}^T)\mathbf{R} = \mathbf{V}\mathbf{R}.
$$
两种分解公用同一个旋转张量 $\mathbf{R}$，而伸长张量之间由正交变换联系：$\mathbf{V} = \mathbf{R}\mathbf{U}\mathbf{R}^T$，故 $\mathbf{U}$ 和 $\mathbf{V}$ 具有相同的特征值（主伸长），但主方向不同——$\mathbf{U}$ 的主轴在参考构型，$\mathbf{V}$ 的主轴在当前构型，两者相差旋转 $\mathbf{R}$。

---

## 4. 几何与物理解释
### 4.1 顺序意义
- $\mathbf{F} = \mathbf{R}\mathbf{U}$：**先拉伸后旋转**（拉格朗日观点）  
  物质纤维先沿正交主方向伸长（$\mathbf{U}$ 作用），然后整体旋转（$\mathbf{R}$ 作用）。
- $\mathbf{F} = \mathbf{V}\mathbf{R}$：**先旋转后拉伸**（欧拉观点）  
  物质纤维先旋转到当前主方向，再沿这些方向伸长（$\mathbf{V}$ 作用）。

这两种分解等价，只是观察视角不同（参考构型 vs. 当前构型）。

### 4.2 谱分解与主伸长
设 $\mathbf{U}$ 的谱分解为：
$$
\mathbf{U} = \sum_{i=1}^3 \lambda_i \mathbf{N}_i \otimes \mathbf{N}_i,
$$
其中 $\lambda_i > 0$ 为**主伸长**，$\mathbf{N}_i$ 为参考构型中的正交主方向。则：
$$
\mathbf{V} = \mathbf{R}\mathbf{U}\mathbf{R}^T = \sum_{i=1}^3 \lambda_i (\mathbf{R}\mathbf{N}_i) \otimes (\mathbf{R}\mathbf{N}_i) = \sum_{i=1}^3 \lambda_i \mathbf{n}_i \otimes \mathbf{n}_i,
$$
当前主方向 $\mathbf{n}_i = \mathbf{R}\mathbf{N}_i$ 由参考主方向经 $\mathbf{R}$ 旋转得到。  
结论：变形过程中，材料线元沿 $\mathbf{N}_i$ 方向伸长 $\lambda_i$ 倍，并被旋转到 $\mathbf{n}_i$ 方向；**旋转不改变长度**，所有长度变化完全由 $\mathbf{U}$（或 $\mathbf{V}$）刻画。

---

## 5. 计算流程
给定 $\mathbf{F}$，数值求解极分解的稳定方法：
1. 计算 $\mathbf{C} = \mathbf{F}^T\mathbf{F}$。
2. 对 $\mathbf{C}$ 做谱分解得到特征值 $\lambda_i^2$ 和特征向量 $\mathbf{N}_i$。
3. 构造 $\mathbf{U} = \sum \lambda_i \mathbf{N}_i \otimes \mathbf{N}_i$，以及 $\mathbf{U}^{-1} = \sum \lambda_i^{-1} \mathbf{N}_i \otimes \mathbf{N}_i$。
4. 旋转张量：$\mathbf{R} = \mathbf{F}\mathbf{U}^{-1}$。
5. 左伸长张量：$\mathbf{V} = \mathbf{F}\mathbf{R}^T = \sum \lambda_i \mathbf{n}_i \otimes \mathbf{n}_i$，其中 $\mathbf{n}_i = \mathbf{R}\mathbf{N}_i$。

---

## 6. 实例：简单剪切的极分解
简单剪切变形：$x = X + \gamma Y, \; y = Y, \; z = Z$，变形梯度矩阵（二维剖面）：
$$
\mathbf{F} = \begin{pmatrix} 1 & \gamma \\ 0 & 1 \end{pmatrix},\quad \gamma>0.
$$
计算 $\mathbf{C} = \mathbf{F}^T\mathbf{F} = \begin{pmatrix} 1 & \gamma \\ \gamma & 1+\gamma^2 \end{pmatrix}$。特征值：
$$
\lambda_{1,2}^2 = 1 + \frac{\gamma^2}{2} \pm \gamma\sqrt{1+\frac{\gamma^2}{4}}.
$$
主伸长 $\lambda_1 > 1$，$\lambda_2 < 1$，$\lambda_3 = 1$。右伸长张量 $\mathbf{U}$ 不是对角阵，其主轴相对于坐标轴发生了旋转。旋转张量 $\mathbf{R} = \mathbf{F}\mathbf{U}^{-1}$ 表明存在旋转。极分解清楚揭示：**简单剪切并非纯剪切，而是包含着材料旋转**。这与小变形时“切应变=纯剪+转动”完全类似，只是有限变形下这一分解通过乘法实现。

---

## 7. 与常用应变度量的联系
- 右 Cauchy–Green 张量：$\mathbf{C} = \mathbf{F}^T\mathbf{F} = \mathbf{U}^2$
- 左 Cauchy–Green 张量：$\mathbf{B} = \mathbf{F}\mathbf{F}^T = \mathbf{V}^2$
- Green–Lagrange 应变：$\mathbf{E} = \frac{1}{2}(\mathbf{U}^2 - \mathbf{I})$
- 对数（Hencky）应变：$\ln\mathbf{U}$（基于主伸长直接定义）
- Almansi 应变：$\mathbf{e} = \frac{1}{2}(\mathbf{I} - \mathbf{B}^{-1})$

所有这些度量都仅依赖于拉伸部分，**彻底排除了旋转的影响**，这正是本构方程需要满足客观性（旋转无关性）的基础。

---

## 8. 应用与重要性
### 8.1 超弹性本构
应变能函数 $W(\mathbf{F})$ 必须满足标架无差异性：$W(\mathbf{QF}) = W(\mathbf{F})$，$\forall$ 正常正交 $\mathbf{Q}$。利用极分解：
$$
W(\mathbf{F}) = \bar{W}(\mathbf{U}) = \bar{W}(\mathbf{V}),
$$
即可将应变能用不变量表示：$W(\mathbf{C}) = W(\mathbf{B})$。这是建立 Neo–Hookean、Mooney–Rivlin 等材料模型的基础。

### 8.2 多物理场
- **生物力学**：软组织的胶原纤维通常沿主拉伸方向排列，极分解直接给出局部纤维方向变化。
- **结构力学**：壳、梁的有限转动与有限伸长可分离处理。
- **数值算法**：复杂本构积分中，采用极分解可保持旋转累积的精度（如返回映射算法中 “先旋转、再拉伸” 的策略）。

### 8.3 实验力学
数字图像相关（DIC）测量位移场后计算 $\mathbf{F}$，极分解可分离出刚体旋转，从而获得材料的真实变形场，用于损伤识别等。

---

## 9. 总结
极分解 $\mathbf{F} = \mathbf{RU} = \mathbf{VR}$ 将变形梯度的几何信息完整分离：
- $\mathbf{R}$：纯刚体转动，不影响长度和角度（针对主拉伸方向）；
- $\mathbf{U}, \mathbf{V}$：纯拉伸，完全确定变形能、应力和应变。
这一分解是有限变形理论不可动摇的基石，架起了几何非线性与物理本构之间的桥梁。