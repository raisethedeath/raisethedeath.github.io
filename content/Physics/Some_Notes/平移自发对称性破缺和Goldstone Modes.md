# 平移对称性的自发对称性破缺与声子

## 1. 什么是平移对称性的自发破缺？

考虑一个由大量原子组成的系统，其哈密顿量通常具有**连续空间平移不变性**。例如

$$
H=\sum_i \frac{\mathbf p_i^2}{2m}+\frac12\sum_{i\neq j} V(\mathbf r_i-\mathbf r_j)
$$

当所有原子整体平移一个任意矢量 $\mathbf a$ 时，$\mathbf r_i\to \mathbf r_i+\mathbf a$，哈密顿量不变。这就是连续的平移对称性，其对称群为

$$
G=\mathbb R^d
$$

其中 $d$ 是空间维度。

但在低温下，系统可能结晶，形成周期性晶格。此时系统的基态密度不再是均匀的，而是具有周期性：

$$
\rho(\mathbf r)=\rho_0+\sum_{\mathbf G\neq 0}\rho_{\mathbf G}e^{i\mathbf G\cdot \mathbf r}
$$

其中 $\mathbf G$ 是倒格矢。这个周期性的晶格态在任意连续平移下不再保持不变。只有当平移矢量 $\mathbf a$ 恰好是一个晶格矢量 $\mathbf R$ 时，晶格才保持不变。因此，系统只保留了**离散平移对称性**：

$$
H_{\text{剩余}}=\mathbb Z^d
$$

于是，连续的平移对称性被“自发”破坏了：

$$
\mathbb R^d \longrightarrow \mathbb Z^d
$$

所谓“自发”，是指哈密顿量本身仍然具有完整的平移对称性，但系统的实际基态——晶格——不再具有这种对称性。高温下的液体或气体是平移对称的，而低温下的晶体则自发选择了某个特定晶格位置，从而破坏了连续平移对称性。

---

## 2. 序参量与基态简并

在平移对称性自发破缺中，一个自然的序参量是==密度波的傅里叶分量== $\rho_{\mathbf G}$。在高温均匀相中，所有 $\rho_{\mathbf G}=0$（$\mathbf G\neq 0$）；在晶相中，至少某些 $\rho_{\mathbf G}\neq 0$。

平移变换会改变密度波分量的相位：

$$
\rho_{\mathbf G}\to \rho_{\mathbf G}e^{-i\mathbf G\cdot \mathbf a}
$$

因此，不同的整体平移 $\mathbf a$ 给出不同的、但能量完全相同的晶格态。这意味着基态是连续简并的。由于晶格矢量 $\mathbf R$ 对应的平移不改变状态，所以不等价的基态由平移矢量模去晶格矢量来描述：

$$
\mathbf a \sim \mathbf a+\mathbf R
$$

因此基态流形是

$$
\mathbb R^d/\mathbb Z^d \cong T^d
$$

即一个 $d$ 维环面。这个 $d$ 维环面正是 Goldstone 模式的内部空间。

---

## 3. Goldstone 定理与声学声子

根据 Goldstone 定理：每一个被自发破坏的连续对称性生成元，都会产生一个无能隙的激发。晶体中连续平移群 $\mathbb R^d$ 有 $d$ 个生成元，因此应当存在 $d$ 个无能隙模式。

这些无能隙模式就是**声学声子**。

在三维晶体中，$d=3$，因此有 3 支声学声子：一支纵波，两支横波。在二维晶体中则有 2 支声学声子，一纵一横。在一维原子链中只有 1 支声学声子。

声学声子的“无能隙”性质体现在其色散关系在长波极限下趋于零：

$$
\omega(\mathbf k)\to 0 \quad \text{当} \quad \mathbf k\to 0
$$

物理图像很清楚：当声子波长非常长时，它对应于晶体中不同区域几乎均匀的整体平移。由于整体平移不消耗能量，所以长波声子的频率趋于零。

---

## 4. 有效理论：弹性理论作为 Goldstone 理论

我们可以从对称性直接构造长波有效理论。引入一个位移场

$$
\mathbf u(\mathbf x,t)
$$

它描述晶格点相对于平衡位置的偏离。由于均匀平移

$$
\mathbf u(\mathbf x,t)\to \mathbf u(\mathbf x,t)+\mathbf u_0
$$

不改变能量，所以有效作用量不能包含 $\mathbf u$ 本身，只能包含它的空间梯度和时间导数。最低阶有效拉格朗日量为

$$
\mathcal L=\frac12 \rho \dot{\mathbf u}^2-\frac12 C_{ijkl}\epsilon_{ij}\epsilon_{kl}
$$

其中

$$
\epsilon_{ij}=\frac12(\partial_i u_j+\partial_j u_i)
$$

是应变张量，$C_{ijkl}$ 是弹性张量。动能项来自原子惯性，势能项来自相邻区域相对位移引起的弹性能。

运动方程为

$$
\rho \ddot u_i=\partial_j(C_{ijkl}\partial_k u_l)
$$

考虑平面波解

$$
u_i(\mathbf x,t)=\epsilon_i e^{i(\mathbf k\cdot \mathbf x-\omega t)}
$$

代入后得到

$$
\rho \omega^2 \epsilon_i = C_{ijkl}k_j k_k \epsilon_l
$$

右边是 $k^2$ 量级，因此

$$
\omega^2 \propto k^2
$$

所以长波色散关系为

$$
\omega(\mathbf k)=c_s(\hat{\mathbf k}) k
$$

这正是声学声子的线性色散关系。各向同性固体中，纵波和横波速度分别为

$$
c_L=\sqrt{\frac{\lambda+2\mu}{\rho}},\qquad
c_T=\sqrt{\frac{\mu}{\rho}}
$$

其中 $\lambda,\mu$ 是 Lamé 系数。

---

## 5. 一维原子链的直观例子

一维单原子链的哈密顿量可写为

$$
H=\sum_n \frac{p_n^2}{2m}+\frac{K}{2}\sum_n (u_{n+1}-u_n)^2
$$

其中 $u_n$ 是第 $n$ 个原子相对平衡位置的位移。连续极限下，

$$
H\to \int dx\left[\frac{\rho}{2}\dot u^2+\frac{Y}{2}(\partial_x u)^2\right]
$$

这是标量 Goldstone 理论。运动方程给出波动方程

$$
\rho \ddot u=Y \partial_x^2 u
$$

因此声速

$$
c=\sqrt{\frac{Y}{\rho}}
$$

色散关系为

$$
\omega(k)=c|k|
$$

均匀平移 $u(x)=u_0$ 显然不改变能量，这就是零模。微观模型中的声学支色散关系为

$$
\omega(k)=2\sqrt{\frac{K}{m}}\left|\sin\frac{ka}{2}\right|
$$

在长波极限 $ka\ll 1$ 下，它退化为线性关系 $\omega\approx a\sqrt{K/m}|k|$。

---

## 6. 为什么 Goldstone 模式的数量不是无穷多？

晶体的密度波有无限多个傅里叶分量 $\rho_{\mathbf G}$，每个分量似乎都有一个相位可以变化。但必须注意，这些相位并不是独立的。它们都来源于同一个物理位移场 $\mathbf u(\mathbf x,t)$。

在长波极限下，平移 $\mathbf u$ 导致密度波相位变化为

$$
\delta \phi_{\mathbf G}=-\mathbf G\cdot \mathbf u
$$

因此，虽然倒格矢 $\mathbf G$ 有无穷多个，但独立 Goldstone 自由度只有 $\mathbf u$ 的 $d$ 个分量。所以声学声子只有 $d$ 支，而不是无穷多支。

---

## 7. 与微观简正模式分析的比较

微观简正模式分析从原子间弹簧模型出发，得到 $dN$ 个振动模式，其中 $d$ 支是声学支，$d(N-1)$ 支是光学支。声学支在 $\mathbf k=0$ 处频率为零，对应所有原子同步位移，即整体平移。

对称性分析的好处在于：我们不需要知道具体原子间势的细节，只要系统自发形成了晶格，破坏了连续平移对称性，就必然存在 $d$ 支无能隙的声学声子，且它们在长波极限下是线性色散的。这就是“从平移对称性自发破缺推导声学声子性质”的含义。

---

## 8. 若干进一步说明

### 8.1 显式破缺与声子能隙

如果系统受到外势场、衬底钉扎或边界条件的影响，连续平移对称性会被**显式**破坏，而不仅仅是自发破缺。此时均匀平移不再是无能隙模式，声学声子可能会获得能隙。

### 8.2 二维晶体的热涨落

在二维系统中，连续对称性自发破缺受到热涨落的强烈影响。Mermin-Wagner 定理指出，二维晶体中严格的长程序会被声子涨落破坏。不过，系统仍然可以存在准长程有序，Bragg 峰呈幂律发散，而不是严格的 $\delta$ 峰。

### 8.3 光学支的来源

光学声子并非来自连续平移对称性的破缺，而是来自晶胞内部不同原子的相对运动。因此光学支在 $\mathbf k=0$ 处通常有能隙。

---

## 总结

晶体是连续平移对称性自发破缺的典型例子：

$$
\mathbb R^d \longrightarrow \mathbb Z^d
$$

破缺的 $d$ 个连续平移生成元对应 $d$ 支无能隙的声学声子。长波声子就是局域平移涨落的 Goldstone 模式，其有效理论是弹性理论，色散关系为

$$
\omega(\mathbf k)=c_s(\hat{\mathbf k})k
$$

因此，声学声子的存在、数量、无能隙性以及长波线性色散，都可以从平移对称性的自发破缺这一普遍原理得到深刻理解。