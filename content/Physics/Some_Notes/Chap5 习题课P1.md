# Problem 1 (Gibbs free energy of a dilute solution ★★★★).  
Consider a dilute solution consisting of $N$ solute particles $X$ and $N_Y$ solvent particles $Y$. In the dilute limit, the Helmholtz free energy is  
$$F_{XY}(T, V, N, N_Y) = F_Y(T, V, N_Y) + NT[\log(n\lambda^3) - 1] + N\Delta(T, n_Y), \tag{1}$$  
where  
$$n = \frac{N}{V}, \quad n_Y = \frac{N_Y}{V}.$$  
Here $\lambda$ is the thermal wavelength of the solute, and $\Delta(T, n_Y)$ is the solvation free energy of one solute particle in a solvent of density $n_Y$.  
We now work at fixed $T, P, N, N_Y$. The Gibbs free energy is obtained by minimizing $F_{XY} + PV$ with respect to $V$:  
$$G_{XY}(T, P, N, N_Y) = \min_V [F_{XY}(T, V, N, N_Y) + PV]. \tag{2}$$  
(a) Write down the stationarity condition that determines the equilibrium volume $V^*$ of the dilute solution.  
(b) Let $V^0$ be the equilibrium volume of the pure solvent at the same $T, P, N_Y$, satisfying  
$$\left( \frac{\partial F_Y}{\partial V} \right)_{T, N_Y, V^0} + P = 0.$$ 
Assume  
$$V^* = V^0 + \delta V, \quad \delta V = O(N).$$  
Solve the stationarity condition perturbatively to first order in $N$, and find an expression for $\delta V$.  
(c) Show that, although $\delta V = O(N)$, it does not contribute to $G_{XY}$ to first order in $N$. Hence show that  
$$G_{XY}(T, P, N, N_Y) = G_Y(T, P, N_Y) + NT[\log(n\lambda^3) - 1] + N\Delta(T, n_Y) + O(N^2), \tag{3}$$  
where  
$$ G_Y(T, P, N_Y) = F_Y(T, V^0, N_Y) + PV^0. $$  
In the $O(N)$ terms, $V, n = N/V$, and $n_Y = N_Y/V$ may be evaluated at $ V = V^0 $, since replacing $V^0$ by $V^*$ only changes the result by $ O(N^2) $.  
(d) Use Eq. (3) to derive the solute chemical potential  
$$ \mu_X = \left( \frac{\partial G_{XY}}{\partial N} \right)_{T,P,N_Y}. $$  

(e) Use Eq. (3) to derive the solvent chemical potential  
$$ \mu_Y = \left( \frac{\partial G_{XY}}{\partial N_Y} \right)_{T,P,N}. $$  

Show that, to first order in the solute mole fraction $x$,  
$$ \mu_Y = \mu_Y^{\text{pure}}(T, P) - Tx. $$  
(f) Compare these results with the chemical potentials obtained previously from the dilute-solution Helmholtz free energy.

## 习题课解答
这是一道关于稀溶液热力学的经典统计物理习题，主要考察如何在固定温度 $T$ 和压强 $P$ 的条件下，通过勒让德变换（Legendre Transformation）从亥姆霍兹自由能（定容）过渡到吉布斯自由能，并推导相关的化学势。

以下是详细的解答过程：

---

### (a) 确定平衡体积 $V^*$ 的驻值条件

吉布斯自由能定义为 $G_{XY} = \min_V [F_{XY}(T, V, N, N_Y) + PV]$。要找到平衡体积 $V^*$，需要满足对 $V$ 的偏导数为零（驻值条件）：
$$ \left( \frac{\partial F_{XY}}{\partial V} \right)_{T, N, N_Y} + P = 0 $$
已知 $F_{XY}(T, V, N, N_Y) = F_Y(T, V, N_Y) + NT[\log(N\lambda^3/V) - 1] + N\Delta(T, N_Y/V)$，其中 $n = N/V$, $n_Y = N_Y/V$。
对 $V$ 求偏导：
$$ 
\begin{aligned}
\frac{\partial F_{XY}}{\partial V} &= \frac{\partial F_Y}{\partial V} + NT \frac{\partial}{\partial V}\left[\log(V^{-1})\right] + N \frac{\partial \Delta}{\partial n_Y} \frac{\partial n_Y}{\partial V} \\
&= \frac{\partial F_Y}{\partial V} - \frac{NT}{V} + N \frac{\partial \Delta}{\partial n_Y} \left( -\frac{N_Y}{V^2} \right) \\
&= \frac{\partial F_Y}{\partial V} - \frac{NT}{V} - n n_Y \frac{\partial \Delta}{\partial n_Y}
\end{aligned}
$$
将此结果代入驻值条件，得到决定平衡体积 $V^*$ 的方程：
$$ \left( \frac{\partial F_Y}{\partial V} \right)_{T, N_Y, V^*} - \frac{NT}{V^*} - n^* n_Y^* \left( \frac{\partial \Delta}{\partial n_Y} \right)_{n_Y^*} + P = 0 \tag{A}$$
其中 $n^* = N/V^*$， $n_Y^* = N_Y/V^*$。

---

### (b) 求解体积微扰 $\delta V$

已知纯溶剂在同等 $T, P, N_Y$ 下的平衡体积 $V^0$ 满足 $\left(\frac{\partial F_Y}{\partial V}\right)_{V^0} + P = 0$。
令 $V^* = V^0 + \delta V$，且 $\delta V = O(N)$。我们将方程 (A) 中的第一项在 $V^0$ 处进行泰勒展开，保留到 $\delta V$ 的一阶：
$$ \left( \frac{\partial F_Y}{\partial V} \right)_{V^*} \approx \left( \frac{\partial F_Y}{\partial V} \right)_{V^0} + \delta V \left( \frac{\partial^2 F_Y}{\partial V^2} \right)_{V^0} = -P + \delta V \left( \frac{\partial^2 F_Y}{\partial V^2} \right)_{V^0} $$
将展开式代入驻值条件 (A) 中。由于方程中的其他项 $\frac{NT}{V}$ 和 $n n_Y \frac{\partial \Delta}{\partial n_Y}$ 已经正比于 $N$（即 $O(N)$），我们可以直接将这些项中的 $V^*$ 替换为 $V^0$，产生的误差是 $O(N \cdot \delta V) = O(N^2)$，可以忽略不计。
$$ -P + \delta V \left( \frac{\partial^2 F_Y}{\partial V^2} \right)_{V^0} - \frac{NT}{V^0} - n^0 n_Y^0 \left( \frac{\partial \Delta}{\partial n_Y} \right)_{n_Y^0} + P = 0 $$
（注：$n^0 = N/V^0$, $n_Y^0 = N_Y/V^0$）
化简后，$P$ 被消去，我们解出 $\delta V$：
$$ \delta V = \frac{\frac{NT}{V^0} + \frac{N N_Y}{(V^0)^2} \frac{\partial \Delta}{\partial n_Y}}{\left( \frac{\partial^2 F_Y}{\partial V^2} \right)_{V^0}} = \frac{N \left( \frac{T}{V^0} + n_Y^0 \frac{\partial \Delta}{\partial n_Y} \right)}{\left( \frac{\partial^2 F_Y}{\partial V^2} \right)_{V^0}} $$
可以看出 $\delta V$ 确实正比于溶质粒子数 $N$，即 $\delta V = O(N)$。

---

### (c) 证明 $\delta V$ 对 $G_{XY}$ 的一阶修正为零，推导 Eq. (3)

吉布斯自由能表达式为 $G_{XY} = F_{XY}(V^*) + P V^*$。
首先分离出纯溶剂相关的项 $F_Y(V^*) + P V^*$，在 $V^0$ 处作泰勒展开：
$$ 
\begin{aligned}
F_Y(V^0 + \delta V) + P(V^0 + \delta V) &\approx \left[ F_Y(V^0) + \delta V \left( \frac{\partial F_Y}{\partial V} \right)_{V^0} + O(\delta V^2) \right] + P V^0 + P \delta V \\
&= \left[ F_Y(V^0) + P V^0 \right] + \delta V \underbrace{\left[ \left( \frac{\partial F_Y}{\partial V} \right)_{V^0} + P \right]}_{=0} + O(N^2) \\
&= G_Y(T, P, N_Y) + O(N^2)
\end{aligned}
$$
可见，体积的一阶变化 $\delta V$ 所带来的修正恰好在勒让德变换中被对消了。
接下来处理 $F_{XY}$ 中与溶质相关的剩余项。由于这些项本身带有因子 $N$，已经是 $O(N)$ 阶，如果把其中的 $V^*$ 换成 $V^0 + \delta V$，产生的变化量将是 $O(N \cdot \delta V) = O(N^2)$。因此在计算 $O(N)$ 精度时，可直接使用 $V^0$：
$$ NT[\log(n^*\lambda^3) - 1] + N\Delta(T, n_Y^*) = NT[\log(n^0\lambda^3) - 1] + N\Delta(T, n_Y^0) + O(N^2) $$
合并起来，去掉上标，即证得：
$$ G_{XY}(T, P, N, N_Y) = G_Y(T, P, N_Y) + NT[\log(n\lambda^3) - 1] + N\Delta(T, n_Y) + O(N^2) \tag{3} $$
（约定公式中的 $n$ 和 $n_Y$ 是基于纯溶剂平衡体积 $V^0$ 计算的）。

---

### (d) 推导溶质化学势 $\mu_X$

在定温定压下，溶质的化学势为：
$$ \mu_X = \left( \frac{\partial G_{XY}}{\partial N} \right)_{T,P,N_Y} $$
对公式 (3) 求导时，请注意纯溶剂体积 $V^0(T,P,N_Y)$ **仅依赖于** $T,P,N_Y$，与溶质粒子数 $N$ 完全无关。所以当求偏导 $\partial/\partial N$ 时，$V^0$（以及 $n_Y$）都是常数：
$$ 
\begin{aligned}
\mu_X &= \frac{\partial}{\partial N} \left\{ G_Y + N T \log(N\lambda^3/V^0) - NT + N \Delta(T, n_Y) \right\} \\
&= 0 + T \log\left(\frac{N\lambda^3}{V^0}\right) + N T \left( \frac{1}{N} \right) - T + \Delta(T, n_Y) \\
&= T \log(n\lambda^3) + \Delta(T, n_Y)
\end{aligned}
$$
这就是定压条件下溶质的化学势表达式。

---

### (e) 推导溶剂化学势 $\mu_Y$ 并求出一阶极限下的形式

溶剂化学势为：
$$ \mu_Y = \left( \frac{\partial G_{XY}}{\partial N_Y} \right)_{T,P,N} $$
在此过程中，$V^0 = N_Y v_Y(T,P)$，其中 $v_Y(T,P)$ 是纯溶剂的单粒子体积。
两个关键观察：
1. 溶剂密度 $n_Y = N_Y/V^0 = 1/v_Y(T,P)$。它是一个强度量，**仅是 $T$ 和 $P$ 的函数**，因此在恒温恒压下 $\left( \frac{\partial n_Y}{\partial N_Y} \right)_{T,P} = 0$。
2. 因为体积具有广延性，对纯溶剂有 $\left( \frac{\partial V^0}{\partial N_Y} \right)_{T,P} = \frac{V^0}{N_Y}$。

现在对公式 (3) 的各项求导：
- 第一项：$\frac{\partial G_Y}{\partial N_Y} = \mu_Y^{\text{pure}}(T,P)$
- 第二项：$\frac{\partial}{\partial N_Y} \left\{ NT \left[ \log(N\lambda^3) - \log V^0 - 1 \right] \right\} = -NT \frac{1}{V^0} \frac{\partial V^0}{\partial N_Y} = -NT \frac{1}{V^0} \frac{V^0}{N_Y} = -T \frac{N}{N_Y}$
- 第三项：$N \frac{\partial \Delta}{\partial N_Y} = N \left( \frac{\partial \Delta}{\partial n_Y} \right) \left( \frac{\partial n_Y}{\partial N_Y} \right) = 0$

将三项相加得到：
$$ \mu_Y = \mu_Y^{\text{pure}}(T, P) - T \frac{N}{N_Y} $$
在稀溶液极限下，溶质摩尔分数 $x = \frac{N}{N + N_Y} \approx \frac{N}{N_Y}$，所以我们证得：
$$ \mu_Y = \mu_Y^{\text{pure}}(T, P) - Tx $$
这直接导出了著名的**拉乌尔定律**（Raoult's law）和溶液渗透压的物理基础。

---

### (f) 与由亥姆霍兹自由能 $F_{XY}$ 得到的化学势的比较

如果直接由定容系统中的 $F_{XY}$ 计算，则自变量为 $(T, V, N, N_Y)$。
*对于溶质：*
$$ \mu_X^{(F)} = \left( \frac{\partial F_{XY}}{\partial N} \right)_{T,V,N_Y} = T \log(n\lambda^3) + \Delta(T, n_Y) $$
可以看出，在两种系综下推导出的溶质化学势形式上是**完全相同的**（只是自变量对应的值从 $V$ 变成了 $V^0$）。

*对于溶剂：*
$$ 
\begin{aligned}
\mu_Y^{(F)} &= \left( \frac{\partial F_{XY}}{\partial N_Y} \right)_{T,V,N} = \frac{\partial F_Y}{\partial N_Y} + N \frac{\partial \Delta(T, n_Y)}{\partial N_Y} \\
&= \mu_Y^{\text{pure}}(T, n_Y) + n \frac{\partial \Delta}{\partial n_Y} 
\end{aligned}
$$
**比较与物理意义分析：**
通过吉布斯自由能求得的 $\mu_Y^{(G)} = \mu_Y^{\text{pure}}(T, P) - Tx$，与 $\mu_Y^{(F)}$ 形式上**大不相同**。为什么？
差异的来源在于**固定条件的不同**：
1. **定容 (Helmholtz)** 下，加入溶质后体积不膨胀，直接挤占空间，导致纯溶剂受到的压力变化，以及溶剂化能随密度的相互作用影响（即 $n \frac{\partial \Delta}{\partial n_Y}$ 项）。
2. **定压 (Gibbs)** 下，加入溶质后，系统必须**自动膨胀**（增加了 $\delta V$）以维持压强不变。体积膨胀导致溶剂被稀释，带来了平移熵的增加（这正是 $-Tx$ 项的微观来源）。

**等价性证明（高级扩展）：**
我们可以证明这两个结果在物理上是等价的，它们评价的均是真实体积 $V^* = V^0 + \delta V$ 下的状态。将 $\mu_Y^{\text{pure}}$ 在 $V^0$ 处展开：
$$ \mu_Y^{\text{pure}}(T, V^*) \approx \mu_Y^{\text{pure}}(T, V^0) + \delta V \left( \frac{\partial \mu_Y^{\text{pure}}}{\partial V} \right)_{N_Y} $$
利用麦克斯韦关系（定容下纯溶剂的吉布斯-杜亥姆关系），$\left( \frac{\partial \mu}{\partial V} \right)_{N_Y} = \frac{V^0}{N_Y} \left( \frac{\partial P}{\partial V} \right)_{N_Y} = -\frac{V^0}{N_Y} \left(\frac{\partial^2 F_Y}{\partial V^2}\right)$。
代入我们在 (b) 中求出的 $\delta V$，得：
$$ \delta V \left( \frac{\partial \mu_Y^{\text{pure}}}{\partial V} \right)_{N_Y} = -\frac{V^0}{N_Y} \left[ \frac{N}{V^0} \left( T + n_Y^0 \frac{\partial \Delta}{\partial n_Y} \right) \right] = - Tx - n \frac{\partial \Delta}{\partial n_Y} $$
代回 $\mu_Y^{(F)}$ 表达式：
$$ \mu_Y^{(F)}(V^*) = \left[ \mu_Y^{\text{pure}}(T, P) - Tx - n \frac{\partial \Delta}{\partial n_Y} \right] + n \frac{\partial \Delta}{\partial n_Y} = \mu_Y^{\text{pure}}(T, P) - Tx = \mu_Y^{(G)} $$
两项奇迹般地抵消了！这证明了：看似不同的形式，由于热力学系统在定压条件下发生的自发体积膨胀效应，最终给出了完全等价的物理结果。