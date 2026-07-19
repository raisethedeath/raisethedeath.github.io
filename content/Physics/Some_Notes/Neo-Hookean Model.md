Neo‑Hookean 固体是有限弹性力学中最简单、也最常用的超弹性本构模型。它的弹性能密度可以从**高分子网络的统计力学**推导，也可以从**连续介质不变量理论**唯象地给出。两种途径得到的结果本质上一致：应变能仅依赖于右/左 Cauchy–Green 张量的第一不变量（或主伸长比的平方和）。下边给出最经典的统计力学推导，并简要说明唯象推广。

---

## 一、微观模型：高斯链网络与仿射变形假设

### 1.1 单链的自由能
考虑一根由 $n$ 个长度为 $b$ 的 Kuhn 链段组成的柔性链，末端距向量为 $\mathbf{r}$。在自由状态下，其分布是高斯型的：
$$
P(\mathbf{r}) = \left(\frac{3}{2\pi n b^2}\right)^{3/2} \exp\!\left(-\frac{3r^2}{2nb^2}\right).
$$
由 Boltzmann 关系 $s = k_{\text{B}} \ln P + \text{const}$ 可得单链构象熵：
$$
s(\mathbf{r}) = -\frac{3 k_{\text{B}}}{2nb^2}\, r^2 + \text{const}.
$$
链的内能不变（纯熵弹性），故 Helmholtz 自由能为
$$
f(\mathbf{r}) = -T s = \frac{3 k_{\text{B}} T}{2nb^2}\, r^2 + f_0 .
$$

### 1.2 网络变形与仿射假设
设单位体积内有 $N$ 条链（交联密度），参考态中链的末端距向量为 $\mathbf{r}_0$，当前态中为 $\mathbf{r}$。**仿射变形假设**认为交联点随宏观变形一起移动：
$$
\mathbf{r} = \mathbf{F}\,\mathbf{r}_0,
$$
其中 $\mathbf{F}$ 为变形梯度张量。

参考态是各向同性的，所以 $\mathbf{r}_0$ 也服从高斯分布，且
$$
\langle \mathbf{r}_0^2 \rangle_0 = n b^2 .
$$

单链的自由能变化为
$$
\Delta f = \frac{3 k_{\text{B}} T}{2nb^2} \left( r^2 - r_0^2 \right)
      = \frac{3 k_{\text{B}} T}{2nb^2} \left( \mathbf{r}_0\cdot (\mathbf{F}^T\mathbf{F})\cdot\mathbf{r}_0 - r_0^2 \right).
$$

### 1.3 对网络求平均
对整个网络取平均，总弹性能密度为
$$
W = N \langle \Delta f \rangle .
$$
对各向同性分布的 $\mathbf{r}_0$ 取平均值，利用
$$
\langle \mathbf{r}_0 \otimes \mathbf{r}_0 \rangle_0 = \frac{1}{3} \langle r_0^2 \rangle_0 \mathbf{I} = \frac{n b^2}{3} \mathbf{I},
$$
得到
$$
\langle \mathbf{r}_0\cdot (\mathbf{F}^T\mathbf{F})\cdot\mathbf{r}_0 \rangle_0
= \operatorname{tr}\left[ (\mathbf{F}^T\mathbf{F}) \langle \mathbf{r}_0\otimes\mathbf{r}_0 \rangle_0 \right]
= \frac{n b^2}{3} \operatorname{tr}(\mathbf{F}^T\mathbf{F}) .
$$

于是
$$
W = N \cdot \frac{3 k_{\text{B}} T}{2nb^2} \left( \frac{n b^2}{3} \operatorname{tr}(\mathbf{F}^T\mathbf{F}) - n b^2 \right)
  = \frac{N k_{\text{B}} T}{2} \Bigl( \operatorname{tr}(\mathbf{F}^T\mathbf{F}) - 3 \Bigr).
$$
引入初始剪切模量 $\mu = N k_{\text{B}} T$，并注意到右 Cauchy–Green 张量 $\mathbf{C} = \mathbf{F}^T\mathbf{F}$（或左 Cauchy–Green 张量 $\mathbf{B} = \mathbf{F}\mathbf{F}^T$，因 $\operatorname{tr}\mathbf{C} = \operatorname{tr}\mathbf{B} \equiv I_1$），得到经典的**不可压缩 Neo‑Hookean 弹性能密度**：
$$
\boxed{W = \frac{\mu}{2} \bigl( I_1 - 3 \bigr)}
$$
其中 $I_1 = \lambda_1^2 + \lambda_2^2 + \lambda_3^2$ 为主伸长比的平方和。

---

## 二、连续介质唯象表述

从连续介质力学看，各向同性超弹性固体的应变能可写为三个主不变量的函数 $W(I_1, I_2, I_3)$。  
Neo‑Hookean 模型假设：
- 能量仅与第一不变量 $I_1$ 有关；
- 对 $I_1$ 呈线性依赖；
- 通常附加一个纯体积变化项以描述（近）不可压缩性。

### 2.1 不可压缩形式
材料完全不可压缩时，$J = \det\mathbf{F} = 1$，$I_3 = J^2 = 1$ 不再是独立变量。最简形式即为
$$
W = \frac{\mu}{2}(I_1 - 3), \qquad J=1.
$$
这就是从高斯链网络推导出的表达式。

### 2.2 可压缩推广
实际材料总有体积变化，常见的可压缩 Neo‑Hookean 模型有几种等价写法：

**(a) 可压缩形式 I**（常用于数值模拟）
$$
W = \frac{\mu}{2} \bigl( I_1 - 3 - 2\ln J \bigr) + \frac{\kappa}{2} (J-1)^2,
$$
其中 $\kappa$ 为体积模量。对数项保证了零变形时能量与应力为零。

**(b) 可压缩形式 II**（基于体积–畸变分解）
$$
W = \frac{\mu}{2} \bigl( \bar{I}_1 - 3 \bigr) + \frac{\kappa}{2} (J-1)^2,
\qquad \bar{I}_1 = J^{-2/3} I_1,
$$
这里 $\bar{I}_1$ 是偏量部分的第一不变量，使体积变化与形状变化解耦。

无论哪种形式，在小变形极限下它们都退化为线性胡克定律，且 $\mu$ 即为经典剪切模量。

---

## 三、物理意义与适用范围
- **物理参数**：$\mu = N k_{\text{B}} T$，与交联密度和温度成正比，揭示了橡胶弹性的熵本质。
- **几何解释**：$I_1-3$ 度量了网络链的平均平方伸长相对于未变形参考态的增量。
- **适用条件**：中等拉伸（拉伸比通常小于 3~4）。当拉伸很大时，高斯链假设失效，需采用更复杂的模型（如 Arruda–Boyce、Ogden 等）。

Neo‑Hookean 模型虽然简单，但它抓住了类橡胶材料最基本的行为：各向同性、熵弹性、超弹性，并且是许多高级本构模型的基石。