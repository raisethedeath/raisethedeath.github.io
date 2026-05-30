# Problem 11.2

**Eq. 11.14:**  
$$
V(\mathbf{r}, t) = -\frac{\omega}{4\pi \epsilon_0 c} \frac{\mathbf{p}_0 \cdot \hat{\mathbf{r}}}{r} \sin[\omega(t - r/c)].
$$

**Eq. 11.17:**  
$$
\mathbf{A}(\mathbf{r}, t) = -\frac{\mu_0 \omega}{4\pi} \frac{\mathbf{p}_0}{r} \sin[\omega(t - r/c)].
$$

Now $\mathbf{p}_0 \times \hat{\mathbf{r}} = p_0 \sin \theta \hat{\phi}$ and $\hat{\mathbf{r}} \times (\mathbf{p}_0 \times \hat{\mathbf{r}}) = p_0 \sin \theta (\hat{\mathbf{r}} \times \hat{\phi}) = -p_0 \sin \theta \hat{\theta}$, so  

**Eq. 11.18:**  
$$
\mathbf{E}(\mathbf{r}, t) = \frac{\mu_0 \omega^2}{4\pi} \frac{\hat{\mathbf{r}} \times (\mathbf{p}_0 \times \hat{\mathbf{r}})}{r} \cos[\omega(t - r/c)].
$$

**Eq. 11.19:**  
$$
\mathbf{B}(\mathbf{r}, t) = -\frac{\mu_0 \omega^2}{4\pi c} \frac{(\mathbf{p}_0 \times \hat{\mathbf{r}})}{r} \cos[\omega(t - r/c)].
$$
## Solution
以下是振荡电偶极子辐射场的详细推导，从推迟势出发，在远场近似下得到电磁场，并给出矢量恒等式的球坐标证明。

---

### 1. 基本设定与推迟势
一电偶极子位于原点，偶极矩为  
$$
\mathbf{p}(t) = \mathbf{p}_0 \cos(\omega t),
$$
其推迟势在洛伦兹规范下为（SI 单位制）：
$$
V(\mathbf{r},t) = \frac{1}{4\pi\varepsilon_0} \frac{\hat{\mathbf{r}}\cdot\dot{\mathbf{p}}(t_r)}{c r}, \qquad
\mathbf{A}(\mathbf{r},t) = \frac{\mu_0}{4\pi} \frac{\dot{\mathbf{p}}(t_r)}{r},
$$
其中 $t_r = t - r/c$，且 $\dot{\mathbf{p}}(t) = -\omega\mathbf{p}_0\sin(\omega t)$。代入即得用户所给公式：  

$$
\boxed{V(\mathbf{r},t) = -\frac{\omega}{4\pi\varepsilon_0 c}\frac{\mathbf{p}_0\cdot\hat{\mathbf{r}}}{r}\sin[\omega(t - r/c)]} \tag{11.14}
$$
$$
\boxed{\mathbf{A}(\mathbf{r},t) = -\frac{\mu_0\omega}{4\pi}\frac{\mathbf{p}_0}{r}\sin[\omega(t - r/c)]} \tag{11.17}
$$

---

### 2. 推导电磁场（远场辐射区）
电磁场由  
$$
\mathbf{E} = -\nabla V - \frac{\partial\mathbf{A}}{\partial t}, \qquad \mathbf{B} = \nabla\times\mathbf{A}
$$
给出。我们只关心辐射场（$\propto 1/r$ 的项），忽略一切 $1/r^2$ 及更高阶的近场项。

记相位 $\psi = \omega(t - r/c)$，则 $\nabla\psi = -\frac{\omega}{c}\hat{\mathbf{r}}$，$\partial_t\psi = \omega$。

#### 2.1 电场 $\mathbf{E}$

**a) 计算 $\nabla V$**  
由 (11.14)，$V = C \dfrac{\mathbf{p}_0\cdot\hat{\mathbf{r}}}{r}\sin\psi$，其中 $C = -\dfrac{\omega}{4\pi\varepsilon_0 c}$。  
在远场近似下，只有对 $\sin\psi$ 的梯度贡献 $1/r$ 项：
$$
\nabla V \approx C\,\frac{\mathbf{p}_0\cdot\hat{\mathbf{r}}}{r}\,\cos\psi\,\nabla\psi
= C\,\frac{\mathbf{p}_0\cdot\hat{\mathbf{r}}}{r}\cos\psi\left(-\frac{\omega}{c}\hat{\mathbf{r}}\right).
$$
代入 $C$：
$$
\nabla V \approx \frac{\omega^2}{4\pi\varepsilon_0 c^2}\frac{\mathbf{p}_0\cdot\hat{\mathbf{r}}}{r}\cos\psi\,\hat{\mathbf{r}}.
$$
利用 $\varepsilon_0\mu_0 = 1/c^2$，得：
$$
\nabla V \approx \frac{\mu_0\omega^2}{4\pi}\,\frac{(\mathbf{p}_0\cdot\hat{\mathbf{r}})\hat{\mathbf{r}}}{r}\cos\psi. \tag{2.1}
$$

**b) 计算 $-\partial\mathbf{A}/\partial t$**  
对 (11.17) 求时间偏导：
$$
\frac{\partial\mathbf{A}}{\partial t} = -\frac{\mu_0\omega}{4\pi}\frac{\mathbf{p}_0}{r}\,\omega\cos\psi
= -\frac{\mu_0\omega^2}{4\pi}\frac{\mathbf{p}_0}{r}\cos\psi.
$$
因此
$$
-\frac{\partial\mathbf{A}}{\partial t} = \frac{\mu_0\omega^2}{4\pi}\frac{\mathbf{p}_0}{r}\cos\psi. \tag{2.2}
$$

**c) 合成电场**  
将 (2.1) 与 (2.2) 相加：
$$
\mathbf{E} \approx \frac{\mu_0\omega^2}{4\pi}\left[ \mathbf{p}_0 - (\mathbf{p}_0\cdot\hat{\mathbf{r}})\hat{\mathbf{r}} \right]\frac{\cos\psi}{r}.
$$
利用矢量三重积恒等式：
$$
\hat{\mathbf{r}}\times(\mathbf{p}_0\times\hat{\mathbf{r}}) = \mathbf{p}_0 - (\mathbf{p}_0\cdot\hat{\mathbf{r}})\hat{\mathbf{r}},
$$
得到：
$$
\boxed{\mathbf{E}(\mathbf{r},t) = \frac{\mu_0\omega^2}{4\pi}\,\frac{\hat{\mathbf{r}}\times(\mathbf{p}_0\times\hat{\mathbf{r}})}{r}\cos[\omega(t - r/c)]} \tag{11.18}
$$

---

#### 2.2 磁场 $\mathbf{B}$

$\mathbf{A}$ 可写为 $\mathbf{A} = \dfrac{\mu_0\omega}{4\pi}\,\mathbf{p}_0\,\frac{\sin\psi}{r}$ 的常数倍（注意符号已含）。更直接地，从 (11.17) 计算旋度：
$$
\mathbf{A} = -\frac{\mu_0\omega}{4\pi}\,\mathbf{p}_0\,\frac{\sin\psi}{r}.
$$
由于 $\mathbf{p}_0$ 是常矢量，$\nabla\times(\mathbf{p}_0 f) = \nabla f \times \mathbf{p}_0$，其中 $f = -\frac{\mu_0\omega}{4\pi}\frac{\sin\psi}{r}$。取远场近似，仅保留对 $\sin\psi$ 的梯度：
$$
\nabla f \approx -\frac{\mu_0\omega}{4\pi}\frac{1}{r}\,\cos\psi\,\nabla\psi
= \frac{\mu_0\omega^2}{4\pi c}\frac{\cos\psi}{r}\,\hat{\mathbf{r}}.
$$
因此
$$
\mathbf{B} = \nabla\times\mathbf{A} = \nabla f \times \mathbf{p}_0
= \frac{\mu_0\omega^2}{4\pi c}\frac{\cos\psi}{r}\,(\hat{\mathbf{r}}\times\mathbf{p}_0).
$$
又因 $\hat{\mathbf{r}}\times\mathbf{p}_0 = -\,\mathbf{p}_0\times\hat{\mathbf{r}}$，最终：
$$
\boxed{\mathbf{B}(\mathbf{r},t) = -\frac{\mu_0\omega^2}{4\pi c}\,\frac{\mathbf{p}_0\times\hat{\mathbf{r}}}{r}\cos[\omega(t - r/c)]} \tag{11.19}
$$

---

### 3. 球坐标下矢量关系的证明
设 $\mathbf{p}_0 = p_0\hat{\mathbf{z}}$，并采用球坐标基矢：
$$
\hat{\mathbf{r}} = \sin\theta\cos\phi\,\hat{\mathbf{x}} + \sin\theta\sin\phi\,\hat{\mathbf{y}} + \cos\theta\,\hat{\mathbf{z}},
$$
$$
\hat{\boldsymbol{\theta}} = \cos\theta\cos\phi\,\hat{\mathbf{x}} + \cos\theta\sin\phi\,\hat{\mathbf{y}} - \sin\theta\,\hat{\mathbf{z}},
$$
$$
\hat{\boldsymbol{\phi}} = -\sin\phi\,\hat{\mathbf{x}} + \cos\phi\,\hat{\mathbf{y}}.
$$

**a) 计算 $\mathbf{p}_0\times\hat{\mathbf{r}}$**  
$$
\mathbf{p}_0\times\hat{\mathbf{r}} = p_0(\hat{\mathbf{z}}\times\hat{\mathbf{r}})
= p_0\big[\sin\theta\cos\phi\,(\hat{\mathbf{z}}\times\hat{\mathbf{x}}) + \sin\theta\sin\phi\,(\hat{\mathbf{z}}\times\hat{\mathbf{y}}) \big]
$$
$$
= p_0\big[\sin\theta\cos\phi\,\hat{\mathbf{y}} - \sin\theta\sin\phi\,\hat{\mathbf{x}}\big]
= p_0\sin\theta\,(-\sin\phi\,\hat{\mathbf{x}} + \cos\phi\,\hat{\mathbf{y}}).
$$
括号中正是 $\hat{\boldsymbol{\phi}}$，因此
$$
\boxed{\mathbf{p}_0\times\hat{\mathbf{r}} = p_0\sin\theta\,\hat{\boldsymbol{\phi}}}. \tag{3.1}
$$

**b) 计算 $\hat{\mathbf{r}}\times(\mathbf{p}_0\times\hat{\mathbf{r}})$**  
利用上式结果：
$$
\hat{\mathbf{r}}\times(\mathbf{p}_0\times\hat{\mathbf{r}}) = \hat{\mathbf{r}}\times(p_0\sin\theta\,\hat{\boldsymbol{\phi}})
= p_0\sin\theta\,(\hat{\mathbf{r}}\times\hat{\boldsymbol{\phi}}).
$$
在球坐标中 $\hat{\mathbf{r}}\times\hat{\boldsymbol{\theta}} = \hat{\boldsymbol{\phi}}$，$\hat{\boldsymbol{\theta}}\times\hat{\boldsymbol{\phi}} = \hat{\mathbf{r}}$，$\hat{\boldsymbol{\phi}}\times\hat{\mathbf{r}} = \hat{\boldsymbol{\theta}}$，因此 $\hat{\mathbf{r}}\times\hat{\boldsymbol{\phi}} = -\hat{\boldsymbol{\theta}}$。代入得：
$$
\boxed{\hat{\mathbf{r}}\times(\mathbf{p}_0\times\hat{\mathbf{r}}) = -p_0\sin\theta\,\hat{\boldsymbol{\theta}}}. \tag{3.2}
$$

---

### 4. 球坐标下的辐射场形式
将 (3.1) 和 (3.2) 代入 (11.18) 和 (11.19)：

$$
\mathbf{E}(\mathbf{r},t) = -\frac{\mu_0\omega^2 p_0}{4\pi}\,\frac{\sin\theta}{r}\,\cos[\omega(t - r/c)]\,\hat{\boldsymbol{\theta}},
$$
$$
\mathbf{B}(\mathbf{r},t) = -\frac{\mu_0\omega^2 p_0}{4\pi c}\,\frac{\sin\theta}{r}\,\cos[\omega(t - r/c)]\,\hat{\boldsymbol{\phi}}.
$$

电场沿经线方向（$-\hat{\boldsymbol{\theta}}$），磁场沿纬线方向（$-\hat{\boldsymbol{\phi}}$），两者相互垂直且同相位，振幅均按 $\sin\theta/r$ 衰减，能流密度 $\mathbf{S} = \frac{1}{\mu_0}\mathbf{E}\times\mathbf{B}$ 沿 $\hat{\mathbf{r}}$ 方向向外辐射。这些正是振荡电偶极子辐射场的全部特征。

---

**总结**  
以上从推迟势 (11.14) 和 (11.17) 出发，利用远场近似严格导出了电磁场 (11.18) 与 (11.19)，并详细验证了其中出现的矢量叉积在球坐标下的方向。整个推导仅依赖于基本的梯度、旋度运算和矢量恒等式，完整证明了用户给出的所有关系。