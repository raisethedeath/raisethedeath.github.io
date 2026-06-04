# Problem 2 (One-dimensional Ising model by transfer matrix).

Consider the one-dimensional Ising model with periodic boundary conditions,

$$
H = -J \sum_{i=1}^{N} \sigma_i \sigma_{i+1} - h \sum_{i=1}^{N} \sigma_i, \quad \sigma_i = \pm 1, \quad \sigma_{N+1} = \sigma_1. \tag{2}
$$

(a) Show that the partition function can be written as

$$
Z = \sum_{\{\sigma_i\}} \prod_{i=1}^{N} T_{\sigma_i, \sigma_{i+1}}, \tag{3}
$$

where

$$
T_{\sigma, \sigma'} = \exp \left[ \beta J \sigma \sigma' + \frac{\beta h}{2} (\sigma + \sigma') \right]. \tag{4}
$$

(b) Define a $2 \times 2$ transfer matrix $T$ such that its elements are given by $T_{\sigma, \sigma'}$ above. Write out $T$ explicitly as a $2 \times 2$ matrix, using the basis $\sigma = \pm 1$. Calculate its eigenvalues $\lambda_+$ (the larger one) and $\lambda_-$ (the smaller one), and show that

$$
\lambda_{\pm} = e^{\beta J} \cosh(\beta h) \pm \left[ e^{2\beta J} \sinh^2(\beta h) + e^{-2\beta J} \right]^{1/2}. \tag{5}
$$

(c) Show that

$$
Z = \text{Tr} \, T^N = \lambda_+^N + \lambda_-^N. \tag{6}
$$

(d) Before taking the thermodynamic limit, examine when the subleading eigenvalue can be neglected. Write

$$
Z = \lambda_+^N \left[ 1 + \left( \frac{\lambda_-}{\lambda_+} \right)^N \right]. \tag{7}
$$

Show that the contribution of $\lambda_-$ is negligible only if

$$
N \log \frac{\lambda_+}{\lambda_-} \gg 1. \tag{8}
$$

Specialize to $h = 0$. Show that

$$
\frac{\lambda_-}{\lambda_+} = \tanh(\beta J), \tag{9}
$$

and hence, at low temperature,

$$
\left( \frac{\lambda_-}{\lambda_+} \right)^N \simeq \exp[-2Ne^{-2\beta J}]. \tag{10}
$$

Conclude that, for a finite chain, the subleading eigenvalue cannot be ignored when

$$
Ne^{-2\beta J} \lesssim 1. \tag{11}
$$

(e) With $h$ and $T$ fixed, take the thermodynamic limit and show that the free energy per spin is

$$
g(T, h) = -T \log \lambda_+. \tag{12}
$$

(f) Using the thermodynamic-limit free energy, compute

$$
m(T, h) = -\left( \frac{\partial g}{\partial h} \right)_T. \tag{13}
$$

Show that

$$
m(T, h) = \frac{\sinh(\beta h)}{\left[ \sinh^2(\beta h) + e^{-4\beta J} \right]^{1/2}}. \tag{14}
$$

(g) Now take $h \to 0$ after the thermodynamic limit. Show that

$$
\lim_{h \to 0^+} m(T, h) = 0 \tag{15}
$$

for every finite $T > 0$.

(h) For comparison, return to the finite-$N$ free energy

$$
g_N(T, h) = -\frac{T}{N} \log \left( \lambda_+^N + \lambda_-^N \right), \tag{16}
$$

and define

$$
m_N(T, h) = -\left( \frac{\partial g_N}{\partial h} \right)_T. \tag{17}
$$

Show that

$$
\lim_{N \to \infty} \lim_{h \to 0^+} m_N(T, h) = 0. \tag{18}
$$

(i) Compare the two orders of limits:

$$
\lim_{h \to 0^+} \lim_{N \to \infty} m_N(T, h), \quad \lim_{N \to \infty} \lim_{h \to 0^+} m_N(T, h). \tag{19}
$$

Conclude that both are zero for every finite $T > 0$. Therefore the one-dimensional Ising model has no spontaneous magnetization at finite temperature.

(j) Finally, compute the susceptibility at $h = 0$,

$$
\chi_T = \left( \frac{\partial m}{\partial h} \right)_{h=0}, \tag{20}
$$

using the thermodynamic-limit expression for $m(T, h)$. Show that

$$
\chi_T = \beta e^{2\beta J}. \tag{21}
$$

Explain why this does not represent a finite-temperature phase transition.

## Solution
以下是关于**问题 2（一维伊辛模型的转移矩阵求解）**的完整、详尽且严密的数学推导与物理分析。

---

### **(a) 证明配分函数可以写为转移矩阵元乘积的形式**

一维具有周期性边界条件（PBC）的伊辛模型哈密顿量为：
$$ H = -J \sum_{i=1}^{N} \sigma_i \sigma_{i+1} - h \sum_{i=1}^{N} \sigma_i, \quad \sigma_{N+1} = \sigma_1 \tag{2.1} $$

系统的配分函数由所有自旋态求和给出：
$$ Z = \sum_{\{\sigma_i\}} e^{-\beta H} = \sum_{\sigma_1, \dots, \sigma_N = \pm 1} \exp \left[ \beta J \sum_{i=1}^{N} \sigma_i \sigma_{i+1} + \beta h \sum_{i=1}^{N} \sigma_i \right] \tag{2.2} $$

由于周期性边界条件，我们可以把外磁场项进行拆分分配到每个相邻对上。具体地：
$$ \sum_{i=1}^{N} \sigma_i = \sum_{i=1}^{N} \frac{1}{2}(\sigma_i + \sigma_{i+1}) \tag{2.3} $$
将此式代入配分函数的指数项中，可以将求和号移到指数外（即化为连乘积形式）：
$$
\begin{aligned}
Z &= \sum_{\{\sigma_i\}} \exp \left[ \sum_{i=1}^{N} \left( \beta J \sigma_i \sigma_{i+1} + \frac{\beta h}{2}(\sigma_i + \sigma_{i+1}) \right) \right] \\
&= \sum_{\{\sigma_i\}} \prod_{i=1}^{N} \exp \left[ \beta J \sigma_i \sigma_{i+1} + \frac{\beta h}{2}(\sigma_i + \sigma_{i+1}) \right]
\end{aligned}\tag{2.4}
$$

定义转移矩阵元（Transfer Matrix Element）为：
$$ T_{\sigma, \sigma'} = \exp \left[ \beta J \sigma \sigma' + \frac{\beta h}{2} (\sigma + \sigma') \right] \tag{4} $$
将其代入式 (2.4)，即得证：
$$ Z = \sum_{\{\sigma_i\}} \prod_{i=1}^{N} T_{\sigma_i, \sigma_{i+1}} \tag{3} $$

---

### **(b) 写出 $2 \times 2$ 转移矩阵 $T$ 并计算其特征值**

使用自旋基底 $\{ \sigma = +1, \sigma = -1 \}$，我们可以显式地写出 $2 \times 2$ 转移矩阵 $T$ 的四个分量：
- $T_{1, 1} = \exp\left[ \beta J (1)(1) + \frac{\beta h}{2}(1 + 1) \right] = e^{\beta (J + h)}$
- $T_{1, -1} = \exp\left[ \beta J (1)(-1) + \frac{\beta h}{2}(1 - 1) \right] = e^{-\beta J}$
- $T_{-1, 1} = \exp\left[ \beta J (-1)(1) + \frac{\beta h}{2}(-1 + 1) \right] = e^{-\beta J}$
- $T_{-1, -1} = \exp\left[ \beta J (-1)(-1) + \frac{\beta h}{2}(-1 - 1) \right] = e^{\beta (J - h)}$

因此，转移矩阵 $T$ 显式写作：
$$ T = \begin{pmatrix} T_{1,1} & T_{1,-1} \\ T_{-1,1} & T_{-1,-1} \end{pmatrix} = \begin{pmatrix} e^{\beta(J+h)} & e^{-\beta J} \\ e^{-\beta J} & e^{\beta(J-h)} \end{pmatrix} \tag{2.5} $$

为了求特征值 $\lambda$，我们需要求解其特征方程 $\det(T - \lambda I) = 0$：
$$ \det \begin{pmatrix} e^{\beta(J+h)} - \lambda & e^{-\beta J} \\ e^{-\beta J} & e^{\beta(J-h)} - \lambda \end{pmatrix} = 0 \tag{2.6} $$
展开行列式得：
$$ \left( e^{\beta(J+h)} - \lambda \right) \left( e^{\beta(J-h)} - \lambda \right) - e^{-2\beta J} = 0 $$
$$ \lambda^2 - \left( e^{\beta(J+h)} + e^{\beta(J-h)} \right) \lambda + e^{2\beta J} - e^{-2\beta J} = 0 \tag{2.7} $$

注意到以下双曲函数恒等式：
$$ e^{\beta(J+h)} + e^{\beta(J-h)} = e^{\beta J} (e^{\beta h} + e^{-\beta h}) = 2 e^{\beta J} \cosh(\beta h) \tag{2.8} $$
将式 (2.8) 代回特征方程 (2.7)：
$$ \lambda^2 - 2 e^{\beta J} \cosh(\beta h) \lambda + (e^{2\beta J} - e^{-2\beta J}) = 0 \tag{2.9} $$

利用一元二次方程求根公式，可得特征值 $\lambda_{\pm}$：
$$
\begin{aligned}
\lambda_{\pm} &= \frac{2 e^{\beta J} \cosh(\beta h) \pm \sqrt{4 e^{2\beta J} \cosh^2(\beta h) - 4(e^{2\beta J} - e^{-2\beta J})}}{2} \\
&= e^{\beta J} \cosh(\beta h) \pm \sqrt{e^{2\beta J} \cosh^2(\beta h) - e^{2\beta J} + e^{-2\beta J}} 
\end{aligned}\tag{2.10}
$$
根据双曲函数恒等式 $\cosh^2(x) - 1 = \sinh^2(x)$，将根号内提取出 $e^{2\beta J}$ 项进行化简：
$$ e^{2\beta J} \cosh^2(\beta h) - e^{2\beta J} = e^{2\beta J} (\cosh^2(\beta h) - 1) = e^{2\beta J} \sinh^2(\beta h) \tag{2.11} $$
将式 (2.11) 代回根号中，即得特征值表达式（式 5）：
$$ \lambda_{\pm} = e^{\beta J} \cosh(\beta h) \pm \left[ e^{2\beta J} \sinh^2(\beta h) + e^{-2\beta J} \right]^{1/2} \tag{5} $$

---

### **(c) 证明 $Z = \text{Tr} \, T^N = \lambda_+^N + \lambda_-^N$**

根据矩阵乘法的定义，两个矩阵相乘并求元素可写为求和形式。配分函数式 (3) 可以依次展开写出：
$$ Z = \sum_{\sigma_1 = \pm 1} \sum_{\sigma_2 = \pm 1} \dots \sum_{\sigma_N = \pm 1} T_{\sigma_1, \sigma_2} T_{\sigma_2, \sigma_3} \dots T_{\sigma_{N-1}, \sigma_N} T_{\sigma_N, \sigma_1} \tag{2.12} $$

> [!question] question
> 矩阵形式如何更清晰的理解?


我们可以从中间的求和项开始收缩：
- 对 $\sigma_2$ 求和：$\sum_{\sigma_2} T_{\sigma_1, \sigma_2} T_{\sigma_2, \sigma_3} = (T^2)_{\sigma_1, \sigma_3}$
- 再对 $\sigma_3$ 求和：$\sum_{\sigma_3} (T^2)_{\sigma_1, \sigma_3} T_{\sigma_3, \sigma_4} = (T^3)_{\sigma_1, \sigma_4}$
- 依次类推，对 $\sigma_2, \sigma_3, \dots, \sigma_N$ 依次求和后得到：
$$ Z = \sum_{\sigma_1 = \pm 1} (T^N)_{\sigma_1, \sigma_1} \tag{2.13} $$

利用迹（Trace）的定义 $\text{Tr} \, A = \sum_i A_{ii}$，上式即为：
$$ Z = \text{Tr} \, T^N \tag{2.14} $$

由于矩阵的迹在相似变换下保持不变（具有表象独立性），我们可以在其本征表象（对角化表象）中计算该迹。因为对角化矩阵 $T_D = \text{diag}(\lambda_+, \lambda_-)$，所以 $(T^N)_D = \text{diag}(\lambda_+^N, \lambda_-^N)$。
由此可得：
$$ Z = \text{Tr} \, T^N = \lambda_+^N + \lambda_-^N \tag{6} $$

---

### **(d) 讨论有限长链中次特征值何情况可被忽略**

我们将配分函数变形为：
$$ Z = \lambda_+^N \left[ 1 + \left( \frac{\lambda_-}{\lambda_+} \right)^N \right] \tag{7} $$
次特征值 $\lambda_-$ 的贡献可以忽略的条件是括号内的第二项远小于 1，即：
$$ \left( \frac{\lambda_-}{\lambda_+} \right)^N \ll 1 \implies \log \left( \frac{\lambda_-}{\lambda_+} \right)^N \ll 0 \implies N \log \frac{\lambda_+}{\lambda_-} \gg 1 \tag{8} $$

#### **特例分析：在无外场情况下 ($h = 0$)**
当 $h = 0$ 时，$\sinh(0) = 0$, $\cosh(0) = 1$。将这些特殊值代入式 (5)：
$$ \lambda_+ = e^{\beta J} + e^{-\beta J}, \quad \lambda_- = e^{\beta J} - e^{-\beta J} \tag{2.15} $$
因此，这两个特征值的比值为：
$$ \frac{\lambda_-}{\lambda_+} = \frac{e^{\beta J} - e^{-\beta J}}{e^{\beta J} + e^{-\beta J}} = \tanh(\beta J) \tag{9} $$

在低温极限下（$T \to 0$ 或 $\beta J \gg 1$），双曲正切函数可以作渐近展开：
$$ \tanh(\beta J) = \frac{1 - e^{-2\beta J}}{1 + e^{-2\beta J}} \approx (1 - e^{-2\beta J})(1 - e^{-2\beta J}) \approx 1 - 2 e^{-2\beta J} \tag{2.16} $$
将其代入式 (7) 中：
$$ \left( \frac{\lambda_-}{\lambda_+} \right)^N \approx \left( 1 - 2 e^{-2\beta J} \right)^N \tag{2.17} $$
利用极限公式 $(1 - x)^N \approx e^{-Nx}$（在 $x \ll 1$ 时适用），我们有：
$$ \left( \frac{\lambda_-}{\lambda_+} \right)^N \simeq \exp \left[ -2N e^{-2\beta J} \right] \tag{10} $$

要让这一项不可忽略（即该项数量级在 $O(1)$ 左右而不趋于零），其指数上的量必须满足：
$$ 2N e^{-2\beta J} \lesssim 1 \implies N e^{-2\beta J} \lesssim 1 \tag{11} $$
物理上，一维伊辛模型在低温下的关联长度为 $\xi \sim e^{2\beta J}$。此不等式意味着：**当系统链长 $N$ 小于或相当于系统的关联长度 $\xi$ 时，由于有限尺寸效应，次要特征值 $\lambda_-$ 决不能被忽略**。

---

### **(e) 取热力学极限求解自旋平均自由能**

固定 $h$ 和 $T$，取热力学极限（即 $N \to \infty$）。由于 $\lambda_+ > \lambda_- \ge 0$，因此比值 $\frac{\lambda_-}{\lambda_+} < 1$，当 $N \to \infty$ 时：
$$ \lim_{N \to \infty} \left( \frac{\lambda_-}{\lambda_+} \right)^N = 0 \tag{2.18} $$
自旋平均自由能为：
$$
\begin{aligned}
g(T, h) &= \lim_{N \to \infty} g_N(T, h) = \lim_{N \to \infty} \left[ -\frac{T}{N} \log Z \right] \\
&= \lim_{N \to \infty} \left[ -\frac{T}{N} \log \left\{ \lambda_+^N \left( 1 + \left( \frac{\lambda_-}{\lambda_+} \right)^N \right) \right\} \right] \\
&= -T \log \lambda_+ - \lim_{N \to \infty} \frac{T}{N} \log \left[ 1 + \left( \frac{\lambda_-}{\lambda_+} \right)^N \right] \\
&= -T \log \lambda_+ 
\end{aligned}\tag{2.19}
$$
得证。

---

### **(f) 计算热力学极限下的自旋平均磁化强度 $m(T, h)$**

根据热力学关系，磁化强度 $m(T, h)$ 为：
$$ m(T, h) = -\left( \frac{\partial g}{\partial h} \right)_T = T \frac{\partial \log \lambda_+}{\partial h} = \frac{T}{\lambda_+} \frac{\partial \lambda_+}{\partial h} = \frac{1}{\beta \lambda_+} \frac{\partial \lambda_+}{\partial h} \tag{2.19} $$

为了求导，我们令根号部分为自变量 $D$：
$$ D = e^{2\beta J} \sinh^2(\beta h) + e^{-2\beta J} \tag{2.20} $$
特征值为 $\lambda_+ = e^{\beta J} \cosh(\beta h) + \sqrt{D}$。
对其关于 $h$ 进行严格求导：
$$ \frac{\partial \lambda_+}{\partial h} = \beta e^{\beta J} \sinh(\beta h) + \frac{1}{2\sqrt{D}} \frac{\partial D}{\partial h} \tag{2.21} $$
其中：
$$ \frac{\partial D}{\partial h} = e^{2\beta J} \cdot \left[ 2 \sinh(\beta h) \cosh(\beta h) \cdot \beta \right] \tag{2.22} $$
代回导数式中：
$$
\begin{aligned}
\frac{\partial \lambda_+}{\partial h} &= \beta e^{\beta J} \sinh(\beta h) + \frac{1}{2\sqrt{D}} \cdot 2\beta e^{2\beta J} \sinh(\beta h) \cosh(\beta h) \\
&= \beta \sinh(\beta h) \left[ e^{\beta J} + \frac{e^{2\beta J} \cosh(\beta h)}{\sqrt{D}} \right] \\
&= \beta \sinh(\beta h) \frac{e^{\beta J}}{\sqrt{D}} \left[ \sqrt{D} + e^{\beta J} \cosh(\beta h) \right] 
\end{aligned}
$$
注意到括号内的项正好等于特征值 $\lambda_+$！因此上式可极其优雅地写为：
$$ \frac{\partial \lambda_+}{\partial h} = \beta \sinh(\beta h) \frac{e^{\beta J}}{\sqrt{D}} \lambda_+ \tag{2.24} $$
将其代入磁化强度公式 (2.19)：
$$ m(T, h) = \frac{1}{\beta \lambda_+} \left( \beta \sinh(\beta h) \frac{e^{\beta J}}{\sqrt{D}} \lambda_+ \right) = \frac{e^{\beta J} \sinh(\beta h)}{\sqrt{D}} \tag{2.25} $$
代回 $D$ 表达式：
$$ m(T, h) = \frac{e^{\beta J} \sinh(\beta h)}{\left[ e^{2\beta J} \sinh^2(\beta h) + e^{-2\beta J} \right]^{1/2}} \tag{2.26} $$
分子和分母同除以 $e^{\beta J}$（注意分母除以 $e^{\beta J}$ 相当于在根号内除以 $e^{2\beta J}$）：
$$ m(T, h) = \frac{\sinh(\beta h)}{\left[ \sinh^2(\beta h) + e^{-4\beta J} \right]^{1/2}} \tag{14} $$
得证。

---

### **(g) 在热力学极限之后，取外磁场趋于零的极限**

先取热力学极限，磁化强度如式 (14) 所示。现在对任意有限温度 $T > 0$（对应有限的 $\beta < \infty$），由于 $\beta > 0$，所以 $e^{-4\beta J} > 0$ 恒成立。
在此前提下，取 $h \to 0^+$ 的极限：
$$ \lim_{h \to 0^+} \sinh(\beta h) = 0 \tag{2.27} $$
因此：
$$ \lim_{h \to 0^+} m(T, h) = \frac{0}{\left[ 0 + e^{-4\beta J} \right]^{1/2}} = 0 \tag{15} $$
（因为分母为非零有限值 $e^{-2\beta J} > 0$）。

---

### **(h) 对有限长链，先取外场趋于零，再取热力学极限**

对于有限长链 $N$，其磁化强度定义为：
$$ m_N(T, h) = -\left( \frac{\partial g_N}{\partial h} \right)_T = \frac{T}{N Z_N} \frac{\partial Z_N}{\partial h} = \frac{T}{Z_N} \left( \lambda_+^{N-1} \frac{\partial \lambda_+}{\partial h} + \lambda_-^{N-1} \frac{\partial \lambda_-}{\partial h} \right) \tag{2.28} $$
由于 $\frac{\partial \lambda_{\pm}}{\partial h} \propto \sinh(\beta h)$，在 $h \to 0$ 时，一阶导数恒为 0：
$$ \lim_{h \to 0^+} \frac{\partial \lambda_{\pm}}{\partial h} = 0 \tag{2.29} $$
因为有限链长 $N$ 时配分函数 $Z_N = \lambda_+^N + \lambda_-^N \ge 2 e^{N\beta J} > 0$ 是分析的且非零，所以在有限尺度下直接代入 $h \to 0^+$ 会得到：
$$ \lim_{h \to 0^+} m_N(T, h) = 0 \tag{2.30} $$
由于该极限对任何有限 $N$ 都是严格的 0，在第二步取 $N \to \infty$ 时，其极限值当然依然为 0：
$$ \lim_{N \to \infty} \lim_{h \to 0^+} m_N(T, h) = \lim_{N \to \infty} 0 = 0 \tag{18} $$

---

### **(i) 比较两种极限顺序并得出结论**

由于：
- 先取热力学极限，后取磁场零极限：$\lim_{h \to 0^+} \lim_{N \to \infty} m_N(T, h) = 0 \tag{2.31}$
- 先取磁场零极限，后取热力学极限：$\lim_{N \to \infty} \lim_{h \to 0^+} m_N(T, h) = 0 \tag{2.32}$

两者的结果对于任何有限温度 $T > 0$ 都是 0。
根据统计物理中自发磁化（Spontaneous Magnetization）的定义：自发磁化强度只有在先取 $N \to \infty$（热力学极限）后取 $h \to 0^+$ 时极限值非零才存在：
$$ M_{\text{spontaneous}} = \lim_{h \to 0^+} \lim_{N \to \infty} m_N(T, h) > 0 \tag{2.33} $$
然而在此处由于该极限为 0，这严格说明了：**一维伊辛模型在任意有限的非零温度下，均不存在自发磁化（即无长程有序相变）**。

---

### **(j) 计算无磁场条件下的磁化率 $\chi_T$**

无外场下的等温磁化率定义为：
$$ \chi_T = \left( \frac{\partial m}{\partial h} \right)_{h=0} \tag{20} $$
在热力学极限下，根据式 (14)：
$$ m(T, h) = \frac{\sinh(\beta h)}{\left[ \sinh^2(\beta h) + e^{-4\beta J} \right]^{1/2}} \tag{2.34} $$
引入简记变量 $x \equiv \beta h$。则磁化强度关于磁场的偏微分可以写为：
$$ \frac{\partial m}{\partial h} = \beta \frac{\partial m}{\partial x} \tag{2.35} $$
其中关于 $x$ 的导数为：
$$ m(x) = \frac{\sinh x}{\sqrt{\sinh^2 x + e^{-4\beta J}}} \tag{2.36} $$
利用求导法则 $\left( \frac{u}{v} \right)' = \frac{u'v - uv'}{v^2}$，我们令 $v = \sqrt{\sinh^2 x + e^{-4\beta J}}$：
$$ \frac{\partial m}{\partial x} = \frac{\cosh x \sqrt{\sinh^2 x + e^{-4\beta J}} - \sinh x \left( \frac{2 \sinh x \cosh x}{2 \sqrt{\sinh^2 x + e^{-4\beta J}}} \right)}{\sinh^2 x + e^{-4\beta J}} \tag{2.37} $$
现在在 $h = 0$（即 $x = 0$）处进行评估。由于 $\sinh(0) = 0$, $\cosh(0) = 1$，导数式分子中带有 $\sinh x$ 的项直接归零：
$$ \frac{\partial m}{\partial x} \bigg|_{x=0} = \frac{1 \cdot \sqrt{e^{-4\beta J}} - 0}{e^{-4\beta J}} = \frac{e^{-2\beta J}}{e^{-4\beta J}} = e^{2\beta J} \tag{2.38} $$
最终，等温磁化率为：
$$ \chi_T = \beta \left( \frac{\partial m}{\partial x} \bigg|_{x=0} \right) = \beta e^{2\beta J} \tag{21} $$
得证。

#### **为什么这个结果不代表有限温度下的相变？**
热力学相变的重要标志是在**有限温度 $T_c > 0$（即有限的 $\beta_c < \infty$）**处，系统的热力学量（如磁化率、比热等）发生非分析性发散。
然而在公式 (21) 中：
- 只要温度 $T > 0$（$\beta < \infty$），磁化率 $\chi_T = \beta e^{2\beta J}$ 永远是一个**有限且处处解析**的值。
- 只有在温度严格降到 $T \to 0$（$\beta \to \infty$）时，磁化率才会发散。
- 因此，这并不代表有限温度下的相变。该模型仅在绝对零度 $T = 0$ 处存在一个退化的相变点。