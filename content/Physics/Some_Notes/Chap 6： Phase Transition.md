# 第6章 相变

## 6.1 一级相变的玩具模型

一级相变在热力学中通常通过适当热力学势的最小化来描述。在固定温度和压强下，例如，可能存在多个热力学状态分支，稳定相是吉布斯自由能最低的那一个。这一观点给出了相平衡和共存的有力判据，但并未解释这些分支从何而来，也不说明亚稳态分支为何能够持续存在。

更几何化、更现代的观点强调凸性和大偏差。在这种语言中，热力学势通过勒让德-芬切尔变换相联系，相共存与熵的非凹性、凸化以及自由能的非解析性相关。这一观点本质上是全局性的，概念上很强大，但可能使竞争热力学状态的物理意义变得不那么清晰。

这里我们发展一个更基础、更具物理性的构造。我们从包含一个凸区域的均匀熵函数 $s_{\mathrm{hom}}(e)$ 出发。我们不立即对熵进行凸化，而是先将曲线分解为局部凹和局部凸的分支。每个局部凹分支定义一个可能的均匀热力学状态。在这样的分支内，正则变分问题有一个唯一的局部稳定解，由通常的驻定条件 $s_{\mathrm{hom}}^{\prime}(e) = \beta$ 确定。然后我们比较局部稳定分支的自由能，选取最低的一个，正如一级相变传统热力学描述中的做法。

这一构造赋予了竞争自由能分支具体的含义。它们源于同一均匀熵曲线的不同局部凹片段。亚稳态是对应于那些局部稳定但不是全局最小的分支，而不稳定态则来自熵曲线的局部凸部分。因此，传统热力学中竞争自由能分支的图像得以恢复，但现在这些分支的起源和局部稳定性可以直接从熵的几何性质看出。

最后，这种逐分支的构造给出的平衡态答案与全局凸分析观点相同。在正则系综中，相变表现为能量分布主导峰的切换。在微正则系综中，同一相变表现为非凹熵区域被其凹包络替代。该玩具模型的价值在于，它通过一条更接近经典热力学推理且物理上更直观的路径，得到了这些标准结果。

### 6.1.1 能量分布和最概然能量

考虑一个宏观系统，每个粒子的熵为 $s_{\mathrm{hom}}(e)$，其中 $e = E/N$ 是每个粒子的能量。下标“hom”强调这是均匀态的熵。假设 $s_{\mathrm{hom}}(e)$ 是 $e$ 的光滑函数。均匀态的微正则逆温度为

$$
\beta(e) = \frac{1}{T(e)} = \frac{ds_{\mathrm{hom}}(e)}{de}. \tag{6.1.1}
$$

将系统与温度为 $T = 1/\beta$ 的热库接触。根据正则系综，每个粒子的能量概率密度具有大偏差形式

$$
p_T(e) \asymp \exp \left\{N s_{\mathrm{hom}}(e) + S_{\mathrm{bath}}(E^{\mathrm{tot}} - N e)\right\} \asymp \exp \left\{N\left[s_{\mathrm{hom}}(e) - \beta e + \beta f(T)\right]\right\}, \tag{6.1.2}
$$

其中 $f(T)$ 是每个粒子的平衡自由能。定义每个粒子的可用函数（availability）：

$$
\hat{f}(e;T) \equiv e - T s_{\mathrm{hom}}(e), \tag{6.1.3}
$$

则 (6.1.2) 变为

$$
p_T(e) \asymp \exp \left\{-N\beta \left[\hat{f}(e;T) - f(T)\right]\right\}. \tag{6.1.4}
$$

(6.1.4) 中指数部分的最大值必须为零，否则无法归一化。于是

$$
f(T) = \min_{e} \hat{f}(e;T), \tag{6.1.5}
$$

最大值在最概然能量处达到：

$$
e(T) = \arg \min_{e} \hat{f}(e;T) = \arg \max_{e} \left[s_{\mathrm{hom}}(e) - \beta e\right]. \tag{6.1.6}
$$

因此最概然能量由可用函数的最小值决定，而 $\hat{f}(e;T)$ 的最小值恰好是平衡自由能 $f(T)$。在热力学极限 $N \to +\infty$ 下，概率分布 (6.1.4) 集中在最概然能量 $e(T)$ 上。

我们的任务是对给定的 $T$ 找到 $\hat{f}(e;T)$ 的全局最小值。策略非常简单：首先找出 $\hat{f}(e;T)$ 的所有局部极小值，然后挑选出使 $\hat{f}(e;T)$ 最小的那个。$\hat{f}(e;T)$ 的局部极小值同时满足驻定条件：

$$
\frac{d\hat{f}}{de}(e;T) = 1 - T s_{\mathrm{hom}}^{\prime}(e) = 0, \tag{6.1.7}
$$

和稳定性条件：

$$
\frac{d^2\hat{f}}{de^2}(e;T) = -T s_{\mathrm{hom}}^{\prime \prime}(e) > 0. \tag{6.1.8}
$$

这些条件可重写为

$$
\beta(e) = s_{\mathrm{hom}}^{\prime}(e) = \beta, \tag{6.1.9}
$$
$$
\beta^{\prime}(e) = s_{\mathrm{hom}}^{\prime \prime}(e) < 0. \tag{6.1.10}
$$

注意 (6.1.10) 意味着均匀熵函数 $s_{\mathrm{hom}}$ 在 $e$ 处是凹的。

$\hat{f}(e;T)$ 的全局最小值对应能量分布 (6.1.4) 的最大值，而局部极小值对应 $p_T(e)$ 的一个峰。在相变情况下，$p_T(e)$ 可能有多个不等高的峰。最高峰对应热力学平衡，次高峰对应亚稳态，后者也具有实验意义。

### 6.1.2 凹情形：单峰且无相变

简单情形下，均匀熵处处凹：

$$
s_{\mathrm{hom}}^{\prime \prime}(e) < 0 \quad \text{对所有 } e.
$$

那么 $\beta(e) = s_{\mathrm{hom}}^{\prime}(e)$ 随 $e$ 单调递减，驻定条件 (6.1.9) 有唯一解，且该解保证是自由能 $\hat{f}(e;T)$ 的全局最小值。

图6.1说明了这一简单情况。左图显示凹熵函数 $s_{\mathrm{hom}}(e)$ 及其在 $e$ 点的切线（斜率为 $\beta$）。中图显示 $s_{\mathrm{hom}}^{\prime}(e)$ 与水平线 $\beta$ 的唯一交点。右图显示对应的正则能量分布单峰。

因此，正则能量分布 (6.1.4) 有一个单峰，位于 $e(T)$。当热库温度变化时，该峰沿均匀熵曲线平滑移动。系统因此只有一个热力学分支，不发生一级相变。

<center>图6.1：凹情形。左：若 $s_{\mathrm{hom}}(e)$ 是凹的，斜率为 $\beta$ 的直线有唯一的切点 $e(T)$。中：等价地，$s_{\mathrm{hom}}^{\prime}(e)$ 单调，与水平线 $\beta = 1/T$ 有唯一交点。右：正则能量分布以 $e(T)$ 为中心的单峰。当 $T$ 变化时，峰平滑移动，不发生一级相变。</center>

### 6.1.3 局部稳定状态的分支

有趣的情形出现在 $s_{\mathrm{hom}}(e)$ 包含一个局部凸部分时，如图6.2中深色区域所示。在该区域，

$$
s_{\mathrm{hom}}^{\prime \prime}(e) > 0,
$$

因此所有均匀态都是局部不稳定的——它们会被微观涨落迅速破坏，因为微观涨落必然增加宇宙的总熵。

凸区域由两个拐点界定：$e_{\mathrm{sp}}^{(1)}$ 和 $e_{\mathrm{sp}}^{(2)}$，这里 $s_{\mathrm{hom}}$ 的二阶导数为零：

$$
s_{\mathrm{hom}}^{\prime \prime}(e_{\mathrm{sp}}^{(1)}) = 0, \quad s_{\mathrm{hom}}^{\prime \prime}(e_{\mathrm{sp}}^{(2)}) = 0.
$$

它们也称为旋节点（spinodal points），因为它们是失稳区域的边界。

逆微正则温度

$$
\beta(e) = s_{\mathrm{hom}}^{\prime}(e)
$$

绘制在图6.3中。旋节点 $e_{\mathrm{sp}}^{(1)}$ 和 $e_{\mathrm{sp}}^{(2)}$ 恰好是该曲线的极值点。定义相应的旋节温度：

$$
\beta_{\mathrm{sp}}^{(1)} \equiv \beta(e_{\mathrm{sp}}^{(1)}) = s_{\mathrm{hom}}^{\prime}(e_{\mathrm{sp}}^{(1)}), \quad \beta_{\mathrm{sp}}^{(2)} \equiv \beta(e_{\mathrm{sp}}^{(2)}) = s_{\mathrm{hom}}^{\prime}(e_{\mathrm{sp}}^{(2)}),
$$
$$
T_{\mathrm{sp}}^{(1)} \equiv \frac{1}{\beta_{\mathrm{sp}}^{(1)}}, \quad T_{\mathrm{sp}}^{(2)} \equiv \frac{1}{\beta_{\mathrm{sp}}^{(2)}}.
$$

如图6.3所示，第一个旋节点给出 $\beta(e)$ 的局部极小值，第二个给出局部极大值。因此

$$
\beta_{\mathrm{sp}}^{(1)} < \beta_{\mathrm{sp}}^{(2)}, \quad T_{\mathrm{sp}}^{(2)} < T_{\mathrm{sp}}^{(1)}.
$$

图6.2的熵曲线以及图6.3的 $\beta(e)$ 曲线可以自然地分为三个分支。

在左侧局部稳定分支 $\mathcal{B}_1$ 中，当 $e$ 增加到 $e_{\mathrm{sp}}^{(1)}$ 时，$\beta(e)$ 单调递减到 $\beta_{\mathrm{sp}}^{(1)}$，这意味着 $T(e)$ 单调递增到 $T_{\mathrm{sp}}^{(1)}$。该分支在左旋节点处终止，此处微正则温度 $T(e)$ 是局部极大值。

右侧局部稳定分支 $\mathcal{B}_2$（也以蓝色显示）从右旋节点 $e_{\mathrm{sp}}^{(2)}$ 开始。当 $e$ 增加至无穷大时，$\beta(e)$ 从 $\beta_{\mathrm{sp}}^{(2)}$ 单调递减到0，这意味着 $T(e)$ 从 $T_{\mathrm{sp}}^{(2)}$ 单调递增到 $+\infty$。

$\mathcal{B}_1$ 和 $\mathcal{B}_2$ 中的所有状态都是局部稳定的。它们可以作为热力学平衡态或亚稳态实现。在这些分支上，$\hat{f}(e;T)$ 的驻态自动满足稳定性条件 $s_{\mathrm{hom}}^{\prime}(e) < 0$，因此总是 $\hat{f}(e;T)$ 的局部极小值。

夹在 $\mathcal{B}_1$ 和 $\mathcal{B}_2$ 之间的是不稳定分支（红色显示），其中 $\beta(e)$ 随 $e$ 单调增加，从左旋节点到右旋节点。

图6.2：带有凸起部分的均匀熵曲线 $s_{\mathrm{hom}}(e)$。曲线在两个蓝色分支上是局部凹的

（$s_{\mathrm{hom}}^{\prime \prime}(e) < 0$），在红色分支上是局部凸的（$s_{\mathrm{hom}}^{\prime \prime}(e) > 0$）。红色分支的端点 $e_{\mathrm{sp}}^{(1)}$ 和 $e_{\mathrm{sp}}^{(2)}$ 是旋节点，此处 $s_{\mathrm{hom}}^{\prime \prime}(e) = 0$。虚线是两个局部凹分支的公切线。其斜率记为 $\beta_c$，两个切点记为 $e_1$ 和 $e_2$。后面将证明 $T_c = 1/\beta_c$ 是相变温度，$e_1$ 和 $e_2$ 是一级相变时的两个共存能量。对于 $e_1 < e < e_2$，均匀熵位于公切线下方；这一几何事实将在下面重新解释为相分离带来的熵增益。浅阴影区域是局部稳定的均匀分支，深阴影区域是局部不稳定的。

图6.3：与图6.2均匀熵曲线对应的逆微正则温度 $\beta(e) = s_{\mathrm{hom}}^{\prime}(e)$。旋节点 $e_{\mathrm{sp}}^{(1)}$ 和 $e_{\mathrm{sp}}^{(2)}$ 分别表现为 $\beta(e)$ 的局部极小值和局部极大值；它们的值定义了 $\beta_{\mathrm{sp}}^{(1)}$ 和 $\beta_{\mathrm{sp}}^{(2)}$。对于区间 $\beta_{\mathrm{sp}}^{(1)} < \beta < \beta_{\mathrm{sp}}^{(2)}$ 内的逆温度，水平线 $\beta = s_{\mathrm{hom}}^{\prime}(e)$ 与曲线相交于三个驻点：$e_1(\beta)$、$e_u(\beta)$ 和 $e_2(\beta)$。外面两点位于 $s_{\mathrm{hom}}(e)$ 的局部凹分支上，因此对应局部稳定的正则态；中间点位于局部凸分支上，是不稳定的。

### 6.1.4 分支的能量、熵和自由能

在每个分支上，将能量和熵定义为微正则温度的函数是有用的。由于 $T(e) = 1/s_{\mathrm{hom}}^{\prime}(e)$ 在三个分支上各自单调，可以分别求逆。记逆函数为 $e_k(T)$，其中 $k = 1,2,u$。于是

$$
T = \frac{1}{s_{\mathrm{hom}}^{\prime}(e_k(T))}, \quad e_k(T) \in \mathcal{B}_k, \quad k = 1,2,u.
$$

然后每个分支上的熵可定义为 $T$ 的函数：

$$
s_k(T) = s_{\mathrm{hom}}(e_k(T)), \quad k = 1,2,u.
$$

在图6.4中，左图画出了所有三个分支的能量，右图画出了所有三个分支的熵。注意，不稳定分支用红色虚线表示，局部稳定分支用实线表示。还要注意，在温度范围

$$
T_{\mathrm{sp}}^{(2)} < T < T_{\mathrm{sp}}^{(1)}
$$

内，所有三个分支的能量和熵都有定义。当 $T < T_{\mathrm{sp}}^{(2)}$ 时，只有第一个局部稳定分支 $\mathcal{B}_1$ 有定义；当 $T > T_{\mathrm{sp}}^{(1)}$ 时，只有第二个局部稳定分支 $\mathcal{B}_2$ 有定义。

另外，分支函数 $e_k(T)$ 和 $s_k(T)$ 的斜率在旋节点处发散。为看清这一点，对驻定条件 $s_{\mathrm{hom}}^{\prime}(e_k(T)) = 1/T$ 求导，得到

$$
s_{\mathrm{hom}}^{\prime \prime}(e_k(T)) \frac{de_k}{dT} = -\frac{1}{T^2},
$$
$$
\frac{de_k}{dT} = -\frac{1}{T^2 s_{\mathrm{hom}}^{\prime \prime}(e_k(T))}. \tag{6.1.13}
$$

类似地，

$$
\frac{ds_k}{dT} = s_{\mathrm{hom}}^{\prime}(e_k(T)) \frac{de_k}{dT} = -\frac{1}{T^3 s_{\mathrm{hom}}^{\prime \prime}(e_k(T))}. \tag{6.1.14}
$$

两个导数在旋节点处发散，因为那里 $s_{\mathrm{hom}}^{\prime \prime}(e_k(T)) = 0$。由于 $de_k/dT$ 是分支 $k$ 的每个粒子的热容，这一发散代表热容的旋节发散。

我们还定义分支自由能

$$
f_k(T) = e_k(T) - T s_k(T), \quad k = 1,2,u. \tag{6.1.15}
$$

这些函数绘制在图6.5中。两个局部稳定分支的交叉将在稍后解释。

对分支自由能求导，例如：

$$
\frac{df_1}{dT} = \frac{de_1}{dT} - T\frac{ds_1}{dT} - s_1(T). \tag{6.1.16}
$$

由于

$$
\frac{ds_1}{dT} = s_{\mathrm{hom}}^{\prime}(e_1(T)) \frac{de_1}{dT} = \frac{1}{T} \frac{de_1}{dT},
$$

(6.1.16) 右边的前两项抵消，因此

$$
\frac{df_1}{dT} = -s_1(T).
$$

再求一次导给出

$$
\frac{d^2 f_1}{dT^2} = -\frac{ds_1}{dT} = -\frac{1}{T} \frac{de_1}{dT},
$$

根据 (6.1.13)，它在局部稳定分支 $\mathcal{B}_1$ 中为负。其他分支也有类似结果。因此 $f_1(T)$ 和 $f_2(T)$ 关于 $T$ 是凹的，而 $f_u(T)$ 关于 $T$ 是凸的。

同样根据 (6.1.13)，当接近旋节温度 $T_{\mathrm{sp}}^{(1)}$ 时，$f_1^{\prime \prime}(T)$ 发散。等价地，分支自由能在该点曲率竖直发散，尽管分支自由能本身保持有限。类似地，$f_2^{\prime \prime}(T)$ 在接近 $T_{\mathrm{sp}}^{(2)}$ 时发散。

图6.4：能量和熵作为 $T$ 的分支函数，通过分别在 $s_{\mathrm{hom}}(e)$ 的两个局部凹分支上求解驻定条件 $s_{\mathrm{hom}}^{\prime}(e) = 1/T$ 得到。左图显示相应的能量 $e_1(T)$ 和 $e_2(T)$，右图显示关联的熵 $s_{\mathrm{hom}}(e_1(T))$ 和 $s_{\mathrm{hom}}(e_2(T))$。每个分支在自己的旋节区间内都是局部稳定的。中间的竖直虚线标出了一个温度，记为 $T_c$，后面将把它识别为相变温度，在此处两个局部稳定分支的自由能相等。

图6.5：三个分支自由能 $f_k(T)$，$k=1,2,u$，通过将 $e - T s_{\mathrm{hom}}(e)$ 在 $s_{\mathrm{hom}}^{\prime}(e) = 1/T$ 的三个驻解处求值得到。分支 $f_1(T)$ 和 $f_2(T)$ 来自 $s_{\mathrm{hom}}(e)$ 的两个局部凹部分，是局部稳定的；而 $f_u(T)$ 来自局部凸部分，是不稳定的。两个局部稳定分支自由能在某个温度 $T_c$ 处交叉，后面将证明 $T_c$ 位于两个旋节温度 $T_{\mathrm{sp}}^{(1)}$ 和 $T_{\mathrm{sp}}^{(2)}$ 之间。较低的分支自由能给出热力学平衡态，较高的局部稳定分支给出亚稳态。

### 6.1.5 相变温度

两个局部稳定分支 $\mathcal{B}_1$ 和 $\mathcal{B}_2$ 各自包含一个连续可跟随温度变化的均匀平衡态族。因此它们构成两个热力学相。相反，不稳定分支 $\mathcal{B}_u$ 不对应任何热力学相，因为它的状态会被任意小的涨落破坏。

我们的任务是确定给定温度下的平衡热力学态，即可用函数 $\hat{f}(e;T)$ 的全局最小值。可用函数的驻点由驻定条件确定：

$$
s_{\mathrm{hom}}^{\prime}(e) = \frac{1}{T} = \beta. \tag{6.1.17}
$$

几何上，这是高度为 $1/T$ 的水平线与图6.3所示的逆微正则温度曲线 $\beta(e) = s_{\mathrm{hom}}^{\prime}(e)$ 的交点。如6.1.3节所述，我们只需要考虑局部稳定分支上的驻点，它们是 $\hat{f}(e;T)$ 的局部极小值。

当 $T < T_{\mathrm{sp}}^{(2)}$ 时，只有一个交点，位于分支 $\mathcal{B}_1$ 上。因此交点的能量 $e_1(T)$ 是可用函数 $\hat{f}(e;T)$ 的唯一局部极小值，从而也是全局最小值。正则能量分布 (6.1.4) 因此有一个单峰位于 $e_1(T)$，如图6.6左图所示。此温度范围内只有一个热力学相，即相1。

类似地，当 $T > T_{\mathrm{sp}}^{(1)}$ 时，只有一个交点，位于分支 $\mathcal{B}_2$ 上。它对应 $\hat{f}(e;T)$ 的全局最小值，描述热力学平衡。能量分布再次为单峰，现在位于 $e_2(T)$，如图6.6右图所示。于是相2是该温度范围内唯一的热力学相。

有趣的是区间 $T_{\mathrm{sp}}^{(2)} < T < T_{\mathrm{sp}}^{(1)}$，此时高度为 $1/T$ 的水平线（如图6.3中橙色水平线所示）与 $\beta(e)$ 有三个交点。中间交点属于不稳定分支 $\mathcal{B}_u$，在比较局部稳定相时可以忽略。而两个外侧交点 $e_1(T), e_2(T)$ 是 $\hat{f}(e;T)$ 的局部极小值，描述局部稳定的热力学相。相应地，正则能量分布出现两个局部稳定的峰，如图6.6中图所示。

根据最小可用原理，平衡相是 $\hat{f}(e;T)$ 的全局最小值。容易看出，在每个分支 $\mathcal{B}_1$ 或 $\mathcal{B}_2$ 内，$\hat{f}(e;T)$ 的最小值恰为该分支的自由能 $f_k(T)$：

$$
\min_{e \in \mathcal{B}_k} \hat{f}(e;T) = \hat{f}(e_k(T);T) = e_k(T) - T s_k(T) = f_k(T). \tag{6.1.18}
$$

因此我们只需要比较两个分支自由能 $f_1(T)$ 和 $f_2(T)$。自由能较低的状态是平衡态，另一个是亚稳态。

或者，从 (6.1.4) 看出，在分支峰 $e_k(T)$ 处的概率密度为

$$
p_T(e_k(T)) \asymp \exp\left\{-\frac{N}{T}\left[f_k(T) - f(T)\right]\right\}, \quad k = 1,2.
$$

因此，较低的分支自由能对应正则分布中较高的峰。热力学稳定相是具有较高峰的相，较低峰对应亚稳态。

在相变温度 $T_c$ 处，两个分支自由能相等，正则能量分布的两个峰等高。

引入简写：

$$
e_1 = e_1(T_c), \quad e_2 = e_2(T_c),
$$

有

$$
f_k(T_c) = e_k - T_c s_{\mathrm{hom}}(e_k), \quad k = 1,2. \tag{6.1.19}
$$

在相变温度处，

$$
f_1(T_c) = f_2(T_c), \tag{6.1.20}
$$

可重写为

$$
s_{\mathrm{hom}}(e_2) - s_{\mathrm{hom}}(e_1) = \beta_c (e_2 - e_1), \quad \beta_c = \frac{1}{T_c}. \tag{6.1.21}
$$

利用 $\beta(e) = s_{\mathrm{hom}}^{\prime}(e)$，这可以进一步写成

$$
\int_{e_1}^{e_2} \left[\beta(e) - \beta_c\right] de = 0. \tag{6.1.22}
$$

因此曲线 $\beta(e)$ 与水平线 $\beta_c$ 之间的带符号面积在区间 $[e_1, e_2]$ 上为零。等价地，线上方面积等于线下方面积。总是存在这样一个介于两个旋节温度之间的温度 $T_{\mathrm{sp}}^{(2)} < T_c < T_{\mathrm{sp}}^{(1)}$。这就是图6.7所示的等面积构造（带符号面积的讨论需要细化，以与下一小节对范德瓦尔斯系统的讨论一致）。

图6.6：正则能量分布示意图。当 $T < T_{\mathrm{sp}}^{(2)}$ 时，只有一个局部稳定峰，位于分支 $\mathcal{B}_1$。当 $T_{\mathrm{sp}}^{(2)} < T < T_{\mathrm{sp}}^{(1)}$ 时，有两个局部稳定峰，分别位于分支 $\mathcal{B}_1$ 和 $\mathcal{B}_2$。较高的峰对应热力学平衡，较低的峰对应亚稳态。当 $T > T_{\mathrm{sp}}^{(1)}$ 时，只剩下分支 $\mathcal{B}_2$ 上的峰。纵轴是示意性的；在宏观系统中，次优峰的积分概率是指数压低的。

图6.7：相变温度的等面积构造。在特殊逆温度 $\beta_c = 1/T_c$ 下，水平线 $\beta = \beta_c$ 与 $\beta(e) = s_{\mathrm{hom}}^{\prime}(e)$ 相交于两个共存能量 $e_1$ 和 $e_2$，以及中间的驻点。条件 $f_1(T_c) = f_2(T_c)$ 等价于 $\beta(e)$ 与水平线在区间 $[e_1, e_2]$ 上的带符号面积为零。等价地，两个阴影面积（无符号）相等，$A_- = A_+$。

方程 (6.1.21) 也可写为

$$
\beta_c = \frac{s_{\mathrm{hom}}(e_2) - s_{\mathrm{hom}}(e_1)}{e_2 - e_1},
$$

即 $\beta_c$ 是连接 $(e_1, s_{\mathrm{hom}}(e_1))$ 和 $(e_2, s_{\mathrm{hom}}(e_2))$ 的直线的斜率。但我们也对 $T_c$ 下的两个相应用了驻定条件 (6.1.17)，得到

$$
s_{\mathrm{hom}}^{\prime}(e_1) = s_{\mathrm{hom}}^{\prime}(e_2) = \beta_c.
$$

因此这条直线在两端都与 $s_{\mathrm{hom}}(e)$ 相切：

$$
s_{\mathrm{hom}}^{\prime}(e_1) = \frac{s_{\mathrm{hom}}(e_2) - s_{\mathrm{hom}}(e_1)}{e_2 - e_1} = s_{\mathrm{hom}}^{\prime}(e_2) = \beta_c. \tag{6.1.23}
$$

换言之，它是均匀熵曲线的双切线，两个切点分别位于 $e_1$ 和 $e_2$，如图6.2所示。

现在计算两个局部稳定分支自由能之差。利用 (6.1.19)，可得

$$
\frac{f_1(T) - f_2(T)}{T} = \int_{e_1(T)}^{e_2(T)} [\beta(e) - \beta] \, de. \tag{6.1.24}
$$

在 $T = T_c$ 时，这个带符号面积为零，给出等面积构造。若 $T < T_c$，则 $\beta > \beta_c$，(6.1.24) 右边的带符号面积为负。因此

$$
f_1(T) < f_2(T),
$$

所以相1是全局稳定的，相2是亚稳态。反之，若 $T > T_c$，则 $\beta < \beta_c$，右边带符号面积为正，于是

$$
f_2(T) < f_1(T),
$$

相2成为全局稳定，相1亚稳态。

### 6.1.6 一级相变的正则特征

（需要强调凹包络的含义，以与下一节一致。对 $s_{\mathrm{conv}}(e)$ 的全局理解涵盖正则和微正则两种观点。）

在通过分支比较确定 $T_c$ 之后，我们现在总结一级相变的正则特征。

分支能量和熵 $e_1(T), s_1(T)$ 以及 $e_2(T), s_2(T)$ 已经构造在图6.4中。分支自由能显示在图6.5中。正则系综选择自由能较低的分支。

当 $T < T_c$ 时，

$$
f_1(T) < f_2(T),
$$

因此占主导的正则峰位于分支 $\mathcal{B}_1$ 上。于是

$$
e_{\mathrm{eq}}(T) = e_1(T), \quad s_{\mathrm{eq}}(T) = s_1(T).
$$

当 $T > T_c$ 时，不等式反转：

$$
f_2(T) < f_1(T),
$$

占主导的正则峰切换到分支 $\mathcal{B}_2$。因此

$$
e_{\mathrm{eq}}(T) = e_2(T), \quad s_{\mathrm{eq}}(T) = s_2(T).
$$

在 $T = T_c$ 处，平衡分支从 $\mathcal{B}_1$ 不连续地切换到 $\mathcal{B}_2$，产生跃变

$$
\Delta e = e_2 - e_1, \quad \Delta s = s_{\mathrm{hom}}(e_2) - s_{\mathrm{hom}}(e_1).
$$

有限能量跃变 $\ell = \Delta e$ 是每个粒子的潜热。

两个跃变通过相变温度处分支自由能相等相联系：

$$
f_1(T_c) = f_2(T_c).
$$

利用

$$
f_k(T_c) = e_k - T_c s_{\mathrm{hom}}(e_k), \quad k = 1,2,
$$

得到潜热为

$$
\ell = \Delta e = T_c \Delta s. \tag{6.1.25}
$$

### 6.1.7 相分离与凹包络

我们现在从微正则观点重新审视同一级相变，其中每个粒子的能量 $e$ 是固定的。我们将看到，在两个双切点之间的能量范围内（如图6.2所示），均匀态不是全局稳定的。系统可以通过分离成两个宏观区域（一个具有能量 $e_1$，另一个具有能量 $e_2$）来增加熵。

暂时假设 $e_1$ 和 $e_2$ 是任意选取的。考虑一个相分离状态，其中一部分 $x$ 的系统处于状态 $e_1$，剩余部分 $1-x$ 处于状态 $e_2$。则每个粒子的总能量为

$$
e = x e_1 + (1-x) e_2.
$$

解出 $x$：

$$
x = \frac{e_2 - e}{e_2 - e_1}.
$$

相分离状态的每个粒子熵为

$$
s_{\mathrm{sep}}(e) = x s_{\mathrm{hom}}(e_1) + (1-x) s_{\mathrm{hom}}(e_2) = \frac{e_2 - e}{e_2 - e_1} s_{\mathrm{hom}}(e_1) + \frac{e - e_1}{e_2 - e_1} s_{\mathrm{hom}}(e_2), \tag{6.1.26}
$$

这正是连接 $(e_1, s_{\mathrm{hom}}(e_1))$ 和 $(e_2, s_{\mathrm{hom}}(e_2))$ 的直线方程。我们感兴趣的是这两点之间的线段，其中 $e_1 < e < e_2$，且 $0 < x < 1$。

如果熵曲线 $s_{\mathrm{hom}}(e)$ 对所有 $e$ 都是凹的，则直线 (6.1.26) 位于熵曲线下方，这意味着具有相同 $e$ 的相分离状态必然比相应的均匀态熵更低。因此均匀态是平衡态——系统没有相共存或相变。

如果熵曲线 $s_{\mathrm{hom}}(e)$ 在某些 $e$ 区间是非凹的，如图6.2所示，那么可以构造一条直线 (6.1.26)，使得两点之间的线段位于均匀熵曲线上方。这意味着具有能量 $e$ 介于 $e_1, e_2$ 之间的均匀态可以通过相分离（一部分在状态 $e_1$，另一部分在状态 $e_2$）来增加熵。

现在的问题是最优的相分离方案是什么。最优方案使得任何其他 $(e_1, e_2)$ 的选择都会得到更低的直线段。观察图6.2可知，最优方案恰好是使 $e_1, e_2$ 为双切线的切点，使得 $s_{\mathrm{hom}}^{\prime}(e_1) = s_{\mathrm{hom}}^{\prime}(e_2) = \beta_c$。

如此选择 $e_1, e_2$ 后，对于任意 $e$ 介于 $e_1, e_2$ 之间，平衡态由上述相分离状态给出，每个粒子的熵由 (6.1.26) 给出。对于区间外的 $e$，系统处于均匀态，熵为 $s_{\mathrm{hom}}(e)$。总结起来，作为每个粒子能量 $e$ 函数的平衡熵是

$$
s_{\mathrm{eq}}(e) =
\begin{cases}
s_{\mathrm{hom}}(e), & e \le e_1,\\
\displaystyle \frac{e_2 - e}{e_2 - e_1} s_{\mathrm{hom}}(e_1) + \frac{e - e_1}{e_2 - e_1} s_{\mathrm{hom}}(e_2), & e_1 \le e \le e_2,\\
s_{\mathrm{hom}}(e), & e \ge e_2.
\end{cases}
$$

这就是均匀熵函数 $s_{\mathrm{hom}}(e)$ 的凹包络（concave hull）。

在共存线段上，逆温度为

$$
\frac{1}{T} = \frac{d s_{\mathrm{eq}}(e)}{de} = \frac{s_{\mathrm{hom}}(e_2) - s_{\mathrm{hom}}(e_1)}{e_2 - e_1} = \beta_c,
$$

与 $e$ 无关。因此整个共存区域温度保持不变。

**小结**：均匀熵函数 $s_{\mathrm{hom}}(e)$ 的一个局部凹分支定义了一个可能的热力学相。当温度介于两个旋节温度之间时，两个局部稳定相作为可能的正则态共存。具有较低分支自由能的相是全局稳定的，而另一个局部稳定相是亚稳态。相变温度可以通过四个等价准则确定：(1) 分支自由能相等；(2) 两个正则能量分布峰等高；(3) $(e, \beta)$ 平面中的等面积构造；(4) $(e, s_{\mathrm{hom}})$ 平面中的双切线构造。在微正则观点中，$s_{\mathrm{hom}}(e)$ 的非凹部分被其凹包络替代，对应两个切点能量 $e_1$ 和 $e_2$ 之间的相分离。

## 6.2 范德瓦尔斯流体的液-汽相变

现在我们用前一节发展的方法来研究一个更物理的例子：单组分范德瓦尔斯流体的液-汽相变。范德瓦尔斯方程历史上是作为对理想气体定律的修正引入的，但其更深层的意义在于它给出了液-汽相变的简单平均场热力学描述。

### 6.2.1 均匀自由能和状态方程

范德瓦尔斯流体的每个粒子的均匀亥姆霍兹自由能为

$$
f_{\mathrm{hom}}(T, v) = -T \left[ \log\left( \frac{v - b}{\lambda_T^3} \right) + 1 \right] - \frac{a}{v}, \tag{6.2.1}
$$

其中 $v = V/N$ 是每个粒子的体积，$\lambda_T = \ell / \sqrt{T}$ 是热波长。唯象参数 $b > 0$ 代表排除体积效应：每个粒子的可用体积不是 $v$ 而是 $v - b$，因此 $v < b$ 的状态是非物理的。参数 $a > 0$ 代表相互作用的吸引部分，它降低自由能，且在较高密度时更重要。当 $a = 0$ 和 $b = 0$ 时，自由能 (6.2.1) 退化为熟悉的理想气体自由能：

$$
f_{\mathrm{IG}}(T, v) = -T \left[ \log\frac{v}{\lambda_T^3} + 1 \right] = T \left[ \log(n \lambda_T^3) - 1 \right]. \tag{6.2.2}
$$

在范德瓦尔斯模型中，$a$ 和 $b$ 被视为与温度无关的常数。更真实的描述可能允许这些参数依赖于温度，反映分子间关联的温度依赖性。但目前的近似足以捕捉液-汽共存和热力学稳定性的定性特征。

所有热力学量都可以通过 (6.2.1) 计算。均匀态的熵为

$$
s_{\mathrm{hom}}(T, v) = -\left( \frac{\partial f_{\mathrm{hom}}}{\partial T} \right)_v = \log\left( \frac{v - b}{\lambda_T^3} \right) + \frac{5}{2}. \tag{6.2.3}
$$

均匀态的压力为

$$
P_{\mathrm{hom}}(T, v) = -\left( \frac{\partial f_{\mathrm{hom}}}{\partial v} \right)_T = \frac{T}{v - b} - \frac{a}{v^2}, \tag{6.2.4}
$$

这就是范德瓦尔斯状态方程。

应将 (6.2.4) 视为三维空间 $(T, v, P)$ 中的一个曲面，即流体的热力学状态面。等温线是固定 $T$ 的切割，等压线是固定 $P$ 的切割，等容线是固定 $v$ 的切割。注意 $P_{\mathrm{hom}}(T, v)$ 对 $T$ 和 $v$ 是单值的。我们也可以用同一个方程将 $T$ 表示为 $v$ 和 $P$ 的单值函数。然而，$v$ 不一定是 $T, P$ 的单值函数。对于足够低的温度，同一对 $(T, P)$ 可能对应几个驻点体积，如下所示，这意味着在给定的温度和压强下可能存在多个热力学相。

**练习 6.2.1** 计算范德瓦尔斯流体的每个粒子的内能和定容热容。证明

$$
u(T, v) = \frac{3}{2} T - \frac{a}{v}, \quad c_V = \frac{3}{2}.
$$

### 6.2.2 局部稳定性、旋节点和临界点

如第4章问题4.12所示，单组分流体的稳定性条件可以用亥姆霍兹自由能表述如下：

$$
\left( \frac{\partial^2 f}{\partial T^2} \right)_v < 0, \quad \left( \frac{\partial^2 f}{\partial v^2} \right)_T > 0, \tag{6.2.5}
$$

即 $f(T, v)$ 对 $T$ 是凹的，对 $v$ 是凸的。

利用 (6.2.1)，易见 (6.2.5) 的第一个稳定性条件始终成立：

$$
\left( \frac{\partial^2 f}{\partial T^2} \right)_v = -\left( \frac{\partial s_{\mathrm{hom}}}{\partial T} \right)_v = -\frac{3}{2T} < 0. \tag{6.2.6}
$$

现在检验第二个稳定性条件，它要求

$$
\left( \frac{\partial^2 f_{\mathrm{hom}}}{\partial v^2} \right)_T = -\left( \frac{\partial P_{\mathrm{hom}}}{\partial v} \right)_T = \frac{1}{v \kappa_T} = \frac{T}{(v - b)^2} - \frac{2a}{v^3} > 0, \tag{6.2.7}
$$

其中 $\kappa_T$ 是等温压缩系数：

$$
\kappa_T = -\frac{1}{v} \left( \frac{\partial v}{\partial P} \right)_T.
$$

因此，沿 $v$ 方向的稳定性要求

$$
T > \frac{2a (v - b)^2}{v^3}, \tag{6.2.8}
$$

也可利用 (6.2.4) 重写为

$$
P > \frac{a (v - 2b)}{v^3}. \tag{6.2.9}
$$

当温度足够低时，这些不等式可能在一定体积范围内不成立。局部稳定性的边界是旋节曲线，此处不等式 (6.2.7) 成为等式，等温压缩系数发散。

旋节曲线可视为热力学状态面 (6.2.4) 上的一条曲线，可用 $v$ 参数化表示为

$$
T_{\mathrm{sp}}(v) = \frac{2a (v - b)^2}{v^3}, \tag{6.2.10}
$$
$$
P_{\mathrm{sp}}(v) = \frac{a (v - 2b)}{v^3}. \tag{6.2.11}
$$

旋节曲线可以投影到 $(T, v)$ 平面或 $(P, v)$ 平面。在 $(T, v)$ 投影中，曲线由 (6.2.10) 给出；在 $(P, v)$ 投影中，由 (6.2.11) 给出。这些曲线绘制在图6.8的两个面板中。阴影区域中的状态是不稳定的。可以看出，旋节温度和旋节压力都在 $v = v_c$ 处达到最大值，这一点我们稍后验证。

两个投影的共同峰值可以直接检验。取 $dT_{\mathrm{sp}} / dv = 0$ 和 $dP_{\mathrm{sp}} / dv = 0$，得到

$$
v_c = 3b, \quad T_c = \frac{8a}{27b}, \quad P_c = \frac{a}{27b^2}. \tag{6.2.12}
$$

这就是范德瓦尔斯流体的临界点。它是旋节曲线上温度最高的点，也是压力最高的点。

习惯上将旋节曲线分为两支。临界点左侧的一支称为液体旋节，右侧的一支称为蒸气旋节。这两支恰好在临界点处汇合，如图6.8的两个面板所示。

考虑液体旋节。在其左侧，均匀态是局部稳定的，因此根据 (6.2.5) 和 (6.2.7)，有 $(\partial P_{\mathrm{hom}} / \partial v)_T < 0$。在其右侧，均匀态是不稳定的，所以 $(\partial P_{\mathrm{hom}} / \partial v)_T > 0$。因此，当沿 $v$ 方向从左向右穿过液体旋节时，$(\partial P_{\mathrm{hom}} / \partial v)_T$ 从负变为正。所以，在液体旋节上，

$$
\left( \frac{\partial P_{\mathrm{hom}}}{\partial v} \right)_T = 0, \quad \left( \frac{\partial^2 P_{\mathrm{hom}}}{\partial v^2} \right)_T > 0.
$$

类似地，当从左向右穿过蒸气旋节时，我们从不稳定区域回到局部稳定区域，因此 $(\partial P_{\mathrm{hom}} / \partial v)_T$ 从正变为负。于是，在蒸气旋节上，

$$
\left( \frac{\partial P_{\mathrm{hom}}}{\partial v} \right)_T = 0, \quad \left( \frac{\partial^2 P_{\mathrm{hom}}}{\partial v^2} \right)_T < 0.
$$

两支旋节具有相反的 $\partial^2 P_{\mathrm{hom}} / \partial v^2$ 符号。由于它们在临界点处汇合，该二阶导数在临界点既不能为正也不能为负。因此临界点必须满足

$$
\left( \frac{\partial P_{\mathrm{hom}}}{\partial v} \right)_T \Big|_{(T_c, v_c)} = 0, \quad \left( \frac{\partial^2 P_{\mathrm{hom}}}{\partial v^2} \right)_T \Big|_{(T_c, v_c)} = 0. \tag{6.2.13}
$$

这两个条件意味着，在临界等温线 $T = T_c$ 上，点 $v = v_c$ 是 $P_{\mathrm{hom}}(T_c, v)$ 的拐点。结合状态方程 (6.2.4)，这两个条件唯一地确定了临界点。

**练习 6.2.2** 利用 (6.2.13) 和 (6.2.4) 求出临界点，并验证 (6.2.12)。

### 6.2.3 局部稳定状态的分支

现在更系统地研究等温线的形状。与旋节曲线一样，等温线应视为热力学状态面 $P = P_{\mathrm{hom}}(T, v)$ 上的一条曲线（$T$ 固定）。它在 $(P, v)$ 平面上的投影就是通常的 $P$-$v$ 等温线，而在 $(T, v)$ 平面上的投影只是一条水平直线。

当 $T > T_c$ 时，该水平线位于旋节曲线在 $(T, v)$ 投影中最大值之上，如图6.8左图中的虚线水平线示意。它完全停留在局部稳定区域内。等价地，对应的 $P$-$v$ 等温线也完全在局部稳定区域内，其中 $(\partial P_{\mathrm{hom}} / \partial v)_T < 0$。因此 $P_{\mathrm{hom}}(T, v)$ 随 $v$ 单调递减。整个等温线是局部稳定的，没有分离为明显的液状和气状分支。

当 $T < T_c$ 时，$(T, v)$ 投影中高度为 $T$ 的水平线与旋节曲线相交于两个体积：

$$
v_{\mathrm{sp}}^{\ell}(T) < v_{\mathrm{sp}}^{\mathrm{vap}}(T).
$$

对应的 $P$-$v$ 等温线也在相同两个体积处与旋节相交。记相应的旋节压力为

$$
P_{\mathrm{sp}}^{\ell}(T) = P_{\mathrm{hom}}(T, v_{\mathrm{sp}}^{\ell}(T)), \quad P_{\mathrm{sp}}^{\mathrm{vap}}(T) = P_{\mathrm{hom}}(T, v_{\mathrm{sp}}^{\mathrm{vap}}(T)). \tag{6.2.14}
$$

对于亚临界范德瓦尔斯等温线，总有

$$
P_{\mathrm{sp}}^{\ell}(T) < P_{\mathrm{sp}}^{\mathrm{vap}}(T).
$$

这两个旋节点将等温线分为三个分支。在图6.8中，局部稳定分支用蓝色实线显示，局部不稳定分支用红色实线显示。左分支

$$
b < v < v_{\mathrm{sp}}^{\ell}(T)
$$

和右分支

$$
v > v_{\mathrm{sp}}^{\mathrm{vap}}(T)
$$

都是局部稳定的，有 $(\partial P_{\mathrm{hom}} / \partial v)_T < 0$，$\kappa_T > 0$。它们代表两个局部稳定相：小体积分支上的液状相和大体积分支上的气状相。

对于压力处于区间

$$
P_{\mathrm{sp}}^{\ell}(T) < P < P_{\mathrm{sp}}^{\mathrm{vap}}(T) \tag{6.2.15}
$$

时，两个局部稳定相都存在。但在此阶段，我们尚不知道哪个相是全局稳定、哪个是亚稳态。

中间分支（图6.8中红色实曲线）

$$
v_{\mathrm{sp}}^{\ell}(T) < v < v_{\mathrm{sp}}^{\mathrm{vap}}(T)
$$

是局部不稳定的，有 $(\partial P_{\mathrm{hom}} / \partial v)_T > 0$，$\kappa_T < 0$。该分支上的均匀态不能是局部稳定的平衡态。

相同的信息可以用亥姆霍兹自由能 $f_{\mathrm{hom}}(T, v)$ 表示。两种描述之间的关系是

$$
P_{\mathrm{hom}}(T, v) = -\left( \frac{\partial f_{\mathrm{hom}}}{\partial v} \right)_T,
$$
$$
\left( \frac{\partial^2 f_{\mathrm{hom}}}{\partial v^2} \right)_T = -\left( \frac{\partial P_{\mathrm{hom}}}{\partial v} \right)_T.
$$

因此，$P$-$v$ 等温线的局部稳定分支对应于 $f_{\mathrm{hom}}(T, v)$ 的局部凸分支，而局部不稳定分支对应于 $f_{\mathrm{hom}}(T, v)$ 的局部凹部分。

如图6.9所示，当 $T < T_c$ 时，相同的分支结构出现在均匀亥姆霍兹自由能 $f_{\mathrm{hom}}(T, v)$ 中。局部稳定分支用蓝色实线显示，它们是局部凸的，满足 $(\partial^2 f_{\mathrm{hom}} / \partial v^2)_T > 0$。小体积的凸分支是液状相，大体积的凸分支是气状相。它们之间是局部不稳定分支（红色实线），该分支是局部凹的，满足 $(\partial^2 f_{\mathrm{hom}} / \partial v^2)_T < 0$。其端点是两个旋节体积 $v_{\mathrm{sp}}^{\ell}(T)$ 和 $v_{\mathrm{sp}}^{\mathrm{vap}}(T)$。

在每个分支内，固定 $T$ 时 $P_{\mathrm{hom}}(T, v)$ 是 $v$ 的单调函数。因此，当 $T < T_c$ 时，我们可以在三个分支上分别反解状态方程，得到三个分支体积：

$$
v_{\ell}(T, P), \quad P_{\mathrm{sp}}^{\ell}(T) < P < +\infty, \quad \text{液状分支},
$$
$$
v_{\mathrm{u}}(T, P), \quad P_{\mathrm{sp}}^{\ell}(T) < P < P_{\mathrm{sp}}^{\mathrm{vap}}(T), \quad \text{不稳定分支},
$$
$$
v_{\mathrm{vap}}(T, P), \quad 0 < P < P_{\mathrm{sp}}^{\mathrm{vap}}(T), \quad \text{气状分支}.
$$

然后我们可以计算每个分支上的均匀亥姆霍兹自由能，定义分支亥姆霍兹自由能

$$
f_k(T, P) = f_{\mathrm{hom}}(T, v_k(T, P)), \quad k = \ell, \mathrm{u}, \mathrm{vap}.
$$

每个分支也允许定义分支吉布斯自由能（每个粒子的化学势）：

$$
g_k(T, P) = \mu_k(T, P) = f_k(T, P) + P v_k(T, P), \quad k = \ell, \mathrm{u}, \mathrm{vap}. \tag{6.2.16}
$$

注意，当 $T < T_c$ 且 $P$ 在区间 (6.2.15) 内时，所有三个分支的吉布斯自由能都有定义。液状和气状分支代表局部稳定相。不稳定分支对于理解等温线和旋节点的几何性质有用，但它不代表局部稳定的均匀平衡相。下一小节我们将比较 $g_{\ell}(T, P)$ 和 $g_{\mathrm{vap}}(T, P)$，以确定哪个局部稳定相是全局稳定的，以及液-汽共存发生在何处。

<center>图6.8：范德瓦尔斯热力学面在 $(T, v)$ 和 $(P, v)$ 平面上的投影，按临界点约化。虚线是旋节曲线，其中状态是临界稳定的。临界点用圆圈标出。阴影区域是不稳定区域。左右两图展示的是等温线或等压线的分支结构。</center>

图6.9：固定温度 $T < T_c$ 下的均匀亥姆霍兹自由能 $f_{\mathrm{hom}}(T, v)$。蓝色部分是局部稳定分支，满足 $(\partial^2 f_{\mathrm{hom}} / \partial v^2)_T > 0$，分别对应液状相和气状相。红色部分是局部不稳定部分，满足 $(\partial^2 f_{\mathrm{hom}} / \partial v^2)_T < 0$。点 $v_{\mathrm{sp}}^{\ell}$ 和 $v_{\mathrm{sp}}^{\mathrm{vap}}$ 是旋节体积。虚线预告了下一小节将讨论的公切线构造。其切点记为 $v_{\mathrm{liq}}^{\mathrm{coex}}$ 和 $v_{\mathrm{vap}}^{\mathrm{coex}}$；在比较分支吉布斯自由能后，它们将被识别为共存体积。

### 6.2.4 分支吉布斯自由能与相共存

我们已经看到，当 $T < T_c$ 且 $P$ 在区间 (6.2.15) 内时，均匀状态方程有两个局部稳定分支：液体分支和蒸气分支。现在问这两个局部稳定相中哪个是全局稳定的。

考虑系统中有 $N$ 个粒子，与大的热库和压库接触。假设系统每个粒子的能量为 $e$，熵为 $s$，体积为 $v$。宇宙的总熵为

$$
S_{\mathrm{tot}} = N s + S_{\mathrm{bath}}(E_{\mathrm{tot}} - N e, V_{\mathrm{tot}} - N v).
$$

将热库熵展开到一阶，得到

$$
S_{\mathrm{tot}} = -\frac{N}{T} (e - Ts + Pv) + \text{常数}. \tag{6.2.17}
$$

因此最大化 $S_{\mathrm{tot}}$ 等价于最小化可用函数：

$$
\tilde{g}(e, s, v; T, P) = e - T s + P v.
$$

在固定 $T$ 下，对能量方向的最小化已经包含在均匀亥姆霍兹自由能中：

$$
f_{\mathrm{hom}}(T, v) = \min_{e} [e - T s(e, v)].
$$

因此剩下的变分问题在体积方向：

$$
\hat{g}(v; T, P) = f_{\mathrm{hom}}(T, v) + P v. \tag{6.2.18}
$$

驻定条件为

$$
0 = \left( \frac{\partial \hat{g}}{\partial v} \right)_{T, P} = \left( \frac{\partial f_{\mathrm{hom}}}{\partial v} \right)_T + P, \tag{6.2.19}
$$

或等价地

$$
P = -\left( \frac{\partial f_{\mathrm{hom}}}{\partial v} \right)_T = P_{\mathrm{hom}}(T, v). \tag{6.2.20}
$$

因此 $\hat{g}(v; T, P)$ 的驻点正是分支体积 $v_k(T, P)$，其中 $k = \ell, \mathrm{u}, \mathrm{vap}$。我们不需要考虑不稳定分支，因为它给出可用函数 $\hat{g}(v; T, P)$ 的局部极大值而不是极小值。

如果最小化限制在分支 $k$ 内，对应的驻点值为

$$
\hat{g}(v_k(T, P); T, P) = f_{\mathrm{hom}}(T, v_k(T, P)) + P v_k(T, P) = f_k(T, P) + P v_k(T, P) = g_k(T, P), \tag{6.2.21}
$$

这正是分支 $k$ 的吉布斯自由能。因此我们只需比较液体分支和蒸气分支的吉布斯自由能。全局稳定的均匀相由最低的分支吉布斯自由能选择。

两个局部稳定相的分支吉布斯自由能之差为

$$
\Delta g(T, P) \equiv g_{\ell}(T, P) - g_{\mathrm{vap}}(T, P) = f_{\mathrm{hom}}(T, v_{\ell}(T, P)) - f_{\mathrm{hom}}(T, v_{\mathrm{vap}}(T, P)) + P [v_{\ell}(T, P) - v_{\mathrm{vap}}(T, P)]. \tag{6.2.22}
$$

利用驻定条件 (6.2.20)，可将这个差改写为

$$
\Delta g(T, P) = \int_{v_{\ell}(T, P)}^{v_{\mathrm{vap}}(T, P)} [P_{\mathrm{hom}}(T, v) - P] \, dv. \tag{6.2.23}
$$

该式右边在 $P$-$v$ 平面中具有带符号面积的几何意义，下面马上讨论。如图6.10示意，对于固定的 $T < T_c$，画一条高度为 $P$ 的水平线。该线与范德瓦尔斯等温线的两个局部稳定分支相交于 $v_{\ell}(T, P)$ 和 $v_{\mathrm{vap}}(T, P)$（图6.10中的点2和点4）。它也与不稳定分支交于点3。

记 $A_-$ 为从点2到点3之间水平线与等温线之间的无符号面积，记 $A_+$ 为从点3到点4之间等温线与水平线之间的无符号面积。注意，从点2到点3，等温线位于水平线下方；从点3到点4，等温线位于水平线上方。则 (6.2.23) 右边正是面积差 $-A_- + A_+$，其中 $A_-$ 前的负号是由于在此区间 $P_{\mathrm{hom}}(T, v) - P < 0$。方程 (6.2.23) 于是可写成

$$
\Delta g(T, P) = -A_- + A_+. \tag{6.2.24}
$$

我们称 $-A_- + A_+$ 为范德瓦尔斯等温线与高度为 $P$ 的水平线所围成的带符号面积。按照这个约定，方程 (6.2.24) 说明该带符号面积正好是吉布斯自由能差 $\Delta g(T, P)$。

在共存压力 $P = P_{\mathrm{coex}}(T)$ 处，两个相的吉布斯自由能相等。方程 (6.2.24) 于是变为

$$
A_- = A_+. \tag{6.2.25}
$$

这就是麦克斯韦等面积构造，意味着范德瓦尔斯等温线与水平线 $P = P_{\mathrm{coex}}(T)$ 所围成的两个无符号面积恰好平衡。换言之，共存压力由带符号面积 $-A_- + A_+ = 0$ 的条件确定。

对于低于共存压力的水平线，$P < P_{\mathrm{coex}}(T)$，有 $A_+ > A_-$，因此 (6.2.24) 给出

$$
\Delta g(T, P) > 0, \quad g_{\ell}(T, P) > g_{\mathrm{vap}}(T, P).
$$

蒸气分支是全局稳定的，液体分支是亚稳态。

反之，对于高于共存压力的水平线，$P > P_{\mathrm{coex}}(T)$，有 $A_+ < A_-$，因此

$$
\Delta g(T, P) < 0, \quad g_{\ell}(T, P) < g_{\mathrm{vap}}(T, P).
$$

液体分支是全局稳定的，蒸气分支是亚稳态。

在共存时，记两个相体积为

$$
v_{\ell}^{\mathrm{coex}}(T) = v_{\ell}(T, P_{\mathrm{coex}}(T)), \quad v_{\mathrm{vap}}^{\mathrm{coex}}(T) = v_{\mathrm{vap}}(T, P_{\mathrm{coex}}(T)).
$$

利用 (6.2.22)，共存条件也可写为

$$
-P_{\mathrm{coex}}(T) = \frac{f_{\mathrm{hom}}(T, v_{\mathrm{vap}}^{\mathrm{coex}}) - f_{\mathrm{hom}}(T, v_{\ell}^{\mathrm{coex}})}{v_{\mathrm{vap}}^{\mathrm{coex}} - v_{\ell}^{\mathrm{coex}}}. \tag{6.2.26}
$$

方程 (6.2.26) 说明 $-P_{\mathrm{coex}}(T)$ 是连接 $f$-$v$ 曲线上两个共存点的直线的斜率，这两个点的坐标为

$$
(v_{\mathrm{vap}}^{\mathrm{coex}}, f_{\mathrm{hom}}(T, v_{\mathrm{vap}}^{\mathrm{coex}})), \quad (v_{\ell}^{\mathrm{coex}}, f_{\mathrm{hom}}(T, v_{\ell}^{\mathrm{coex}})). \tag{6.2.27}
$$

但两个相的驻定条件 (6.2.20) 也可写为

$$
\left( \frac{\partial f_{\mathrm{hom}}}{\partial v} \right)_T \Big|_{v_{\mathrm{vap}}^{\mathrm{coex}}} = \left( \frac{\partial f_{\mathrm{hom}}}{\partial v} \right)_T \Big|_{v_{\ell}^{\mathrm{coex}}} = -P_{\mathrm{coex}}(T), \tag{6.2.28}
$$

这意味着 $-P_{\mathrm{coex}}(T)$ 也是在两个共存点处 $f$-$v$ 曲线的切线斜率。因此连接两个共存点的直线同时也是曲线在这两点处的切线。这是双切线，见图6.9中的橙色虚线。

共存转变伴随着平衡体积的不连续跳跃。当 $P$ 在固定 $T < T_c$ 下降低通过 $P_{\mathrm{coex}}(T)$ 时，全局稳定分支从液体分支切换到蒸气分支，每个粒子的体积跳变

$$
\Delta v = v_{\mathrm{vap}}^{\mathrm{coex}}(T) - v_{\ell}^{\mathrm{coex}}(T) > 0.
$$

每个粒子的熵也发生跳变

$$
\Delta s = s_{\mathrm{vap}}^{\mathrm{coex}}(T) - s_{\ell}^{\mathrm{coex}}(T),
$$

其中

$$
s_{\ell}^{\mathrm{coex}}(T) = -\left( \frac{\partial f_{\mathrm{hom}}}{\partial T} \right)_{v_{\ell}^{\mathrm{coex}}}, \quad s_{\mathrm{vap}}^{\mathrm{coex}}(T) = -\left( \frac{\partial f_{\mathrm{hom}}}{\partial T} \right)_{v_{\mathrm{vap}}^{\mathrm{coex}}}.
$$

每个粒子的潜热为

$$
\ell(T) = T \Delta s.
$$

最后，我们从 $(T, v)$ 观点重新解释双切线构造。现在固定 $T < T_c$，但每个粒子的平均体积 $v$ 是给定的。如果 $v$ 位于共存区间之外，即

$$
v_{\ell}^{\mathrm{coex}}(T) < v < v_{\mathrm{vap}}^{\mathrm{coex}}(T),
$$

则平衡态是均匀的，且

$$
f_{\mathrm{eq}}(T, v) = f_{\mathrm{hom}}(T, v).
$$

在共存区间内部，均匀态不是全局稳定的。系统反而会分离成一个液体相（体积 $v_{\ell}^{\mathrm{coex}}$）和一个蒸气相（体积 $v_{\mathrm{vap}}^{\mathrm{coex}}$）。如果 $x$ 是蒸气相中的粒子分数，则

$$
v = (1-x) v_{\ell}^{\mathrm{coex}} + x v_{\mathrm{vap}}^{\mathrm{coex}}, \quad x = \frac{v - v_{\ell}^{\mathrm{coex}}}{v_{\mathrm{vap}}^{\mathrm{coex}} - v_{\ell}^{\mathrm{coex}}}.
$$

因此平衡亥姆霍兹自由能为

$$
f_{\mathrm{eq}}(T, v) = (1-x) f_{\mathrm{hom}}(T, v_{\ell}^{\mathrm{coex}}) + x f_{\mathrm{hom}}(T, v_{\mathrm{vap}}^{\mathrm{coex}}).
$$

等价地，

$$
f_{\mathrm{eq}}(T, v) = f_{\mathrm{hom}}(T, v_{\ell}^{\mathrm{coex}}) - P_{\mathrm{coex}}(T) (v - v_{\ell}^{\mathrm{coex}}), \quad v_{\ell}^{\mathrm{coex}} < v < v_{\mathrm{vap}}^{\mathrm{coex}}.
$$

因此双切线具有直接的物理意义：它是相分离状态的亥姆霍兹自由能。平衡自由能 $f_{\mathrm{eq}}(T, v)$ 是均匀自由能曲线 $f_{\mathrm{hom}}(T, v)$ 的凸包络（convex hull）。

对平衡自由能求导给出

$$
P_{\mathrm{eq}}(T, v) = -\left( \frac{\partial f_{\mathrm{eq}}}{\partial v} \right)_T.
$$

因此在共存区间内部，

$$
P_{\mathrm{eq}}(T, v) = P_{\mathrm{coex}}(T).
$$

非单调的范德瓦尔斯等温线被一条水平的共存平台所取代。在这个平台上，压力保持不变，而蒸气分数 $x$ 从0连续变化到1。这是同一级相变的 $(T, v)$ 观点：不是在固定 $T, P$ 下体积的不连续跳跃，而是通过相分离实现中间的平均体积。

图6.10：范德瓦尔斯热力学面 $P = P_{\mathrm{hom}}(T, v)$ 在 $(v, P)$ 平面上的投影，以临界点附近约化变量显示。曲线 $1-2-2'-3-4'-4-5$ 是 $T < T_c$ 的亚临界等温线。虚线是旋节曲线，其上所有状态都是临界稳定的（$(\partial P_{\mathrm{hom}} / \partial v)_T = 0$）；实线是双节线（binodal curve），那里发生相共存，满足 $g_{\ell}(T, P) = g_{\mathrm{vap}}(T, P)$。在旋节线内部均匀态不稳定。在旋节线与双节线之间的阴影区域，均匀态局部稳定但全局亚稳态。根据麦克斯韦等面积构造，由 $2-2'-3$ 围成的面积等于由 $3-4-4'$ 围成的面积。

### 6.2.5 总结：凸化与平衡态状态面

总结一下我们学到的东西。范德瓦尔斯自由能 $f_{\mathrm{hom}}(T, v)$ 描述均匀态。但是当 $T < T_c$ 时，这个均匀自由能在体积方向上包含一个凹的部分，因此对于所有 $v$ 它不能是全局稳定的平衡自由能。缺失的要素是相分离。

一旦允许相分离，系统可以通过混合体积为 $v_{\ell}^{\mathrm{coex}}(T)$ 的液体相和体积为 $v_{\mathrm{vap}}^{\mathrm{coex}}(T)$ 的蒸气相，来实现介于两个共存体积之间的平均体积 $v$。最优的相分离状态将 $f_{\mathrm{hom}}(T, v)$ 的凹部分替换为双切线的直线段。因此平衡亥姆霍兹自由能是均匀亥姆霍兹自由能的凸包络：

$$
f_{\mathrm{eq}}(T, v) = \mathrm{conv}\, f_{\mathrm{hom}}(T, v).
$$

在共存区间

$$
v_{\ell}^{\mathrm{coex}}(T) < v < v_{\mathrm{vap}}^{\mathrm{coex}}(T)
$$

内，这个凸包络正好是

$$
f_{\mathrm{eq}}(T, v) = f_{\mathrm{hom}}(T, v_{\ell}^{\mathrm{coex}}) - P_{\mathrm{coex}}(T) (v - v_{\ell}^{\mathrm{coex}}).
$$

这一构造统一解释了几个看似不同的事实。第一，对凸化自由能关于 $v$ 求导，给出平衡热力学状态面：

$$
P_{\mathrm{eq}}(T, v) = -\left( \frac{\partial f_{\mathrm{eq}}}{\partial v} \right)_T.
$$

在共存区间内，凸包络是一条直线，所以

$$
P_{\mathrm{eq}}(T, v) = P_{\mathrm{coex}}(T).
$$

因此非单调的范德瓦尔斯回线被水平的共存平台替代。这个平台不是额外的假设；它是凸化自由能的导数。具有汽、液、固相的单组分系统的热力学面如图6.11所示。

第二，直线段的端点决定了一级相变时的不连续跳变。在 $(T, P)$ 观点中，当 $P$ 在固定 $T < T_c$ 下穿过 $P_{\mathrm{coex}}(T)$ 时，平衡态在液体和蒸气分支之间切换。每个粒子的体积跳变

$$
\Delta v = v_{\mathrm{vap}}^{\mathrm{coex}}(T) - v_{\ell}^{\mathrm{coex}}(T),
$$

每个粒子的熵跳变

$$
\Delta s = s_{\mathrm{vap}}^{\mathrm{coex}}(T) - s_{\ell}^{\mathrm{coex}}(T), \quad s = -\left( \frac{\partial f_{\mathrm{hom}}}{\partial T} \right)_v.
$$

每个粒子的潜热为

$$
\ell(T) = T \Delta s.
$$

因此，双切线构造、麦克斯韦等面积规则和水平共存平台不是相互独立的规则。它们是同一热力学操作的不同表示：在纳入最优相分离状态后，将均匀自由能替换为其凸包络。所得的平衡自由能处处满足稳定性要求，所有平衡热力学量通过对这个凸化自由能求导得到。

<center>图6.11：考虑相分离后的范德瓦尔斯流体热力学状态面。所有临界温度以下的非单调范德瓦尔斯等温线都被描述相共存的水平直线所替代。</center>