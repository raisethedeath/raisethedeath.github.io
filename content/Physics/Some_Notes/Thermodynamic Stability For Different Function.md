从热力学的基本假设出发，孤立系统的热力学平衡态是由**最大熵原理（Maximum Entropy Principle）决定的。热力学系统的**稳定性条件**本质上是要求这个平衡态不仅是一个极值点，而且必须是一个**稳定的极大值点（即面对微小涨落时，系统有恢复平衡的趋势，这在物理上对应于勒夏特列原理 Le Chatelier's Principle）。

通过数学上的勒让德变换（Legendre Transformation），最大熵原理可以等价转化为不同环境约束下各个热力学势的**极值原理**。我们将从最大熵原理出发，一步步推导出内能 $U$、亥姆霍兹自由能 $F$、焓 $H$、化学势 $\mu$（吉布斯自由能 $G$）以及巨热力学势 $\Phi$ 的稳定性条件。

---

### 一、 从最大熵原理到最小内能原理

对于一个孤立系统（固定总内能 $U$、总体积 $V$、总粒子数 $N$），最大熵原理指出，平衡态下的总熵 $S(U, V, N)$ 达到最大。
假设系统内部发生微小的涨落 $\delta U, \delta V, \delta N$，为了使原状态是稳定的平衡态，熵的改变必须满足：
1. **一阶变分为零**：$\delta S = 0$ （平衡条件）
2. **二阶变分为负**：$\delta^2 S < 0$ （稳定性条件）

$\delta^2 S < 0$ 在数学上意味着**熵 $S(U, V, N)$ 是关于其广延自变量 $(U, V, N)$ 的严格凹函数（Concave function）**。

为了更方便地推导其他热力学势，我们将其转化为**最小内能原理**。
物理上可以证明，在固定 $S, V, N$ 的情况下，“系统的熵趋于极大”等价于“**系统的内能 $U(S, V, N)$ 趋于极小**”。
因此，内能 $U$ 的稳定性条件要求 **$U(S, V, N)$ 是关于其广延自变量的严格凸函数（Convex function）**，即对于任何微小涨落，内能的二阶变分必须大于零：
$$ \delta^2 U = \frac{1}{2} \left[ \frac{\partial^2 U}{\partial S^2}(\delta S)^2 + \frac{\partial^2 U}{\partial V^2}(\delta V)^2 + \frac{\partial^2 U}{\partial N^2}(\delta N)^2 + 2\frac{\partial^2 U}{\partial S \partial V}\delta S \delta V + \dots \right] > 0 $$
这就要求内能 $U$ 的海森矩阵（Hessian matrix）是**正定的**。

---

### 二、 内能 $U(S, V, N)$ 的稳定性条件

根据 $dU = TdS - pdV + \mu dN$，一阶偏导数为 $T, -p, \mu$。
二阶变分 $\delta^2 U > 0$ 等价于：
$$ \delta^2 U = \frac{1}{2} (\delta T \delta S - \delta p \delta V + \delta \mu \delta N) > 0 $$

通过分析其对角线元素（即只让一个变量涨落，保持其他不变），我们得到：
1. **热学稳定性**：保持 $V, N$ 不变，$\left( \frac{\partial^2 U}{\partial S^2} \right)_{V,N} = \left( \frac{\partial T}{\partial S} \right)_{V,N} = \frac{T}{C_V} > 0 \implies \mathbf{C_V > 0}$ （等容热容必为正）。
2. **力学稳定性**：保持 $S, N$ 不变，$\left( \frac{\partial^2 U}{\partial V^2} \right)_{S,N} = -\left( \frac{\partial p}{\partial V} \right)_{S,N} = \frac{1}{V \kappa_S} > 0 \implies \mathbf{\kappa_S > 0}$ （等熵压缩率必为正）。
3. **化学稳定性**：保持 $S, V$ 不变，$\left( \frac{\partial^2 U}{\partial N^2} \right)_{S,V} = \left( \frac{\partial \mu}{\partial N} \right)_{S,V} > 0$。

---

### 三、 通过勒让德变换推导其他热力学函数的稳定性

**数学法则**：当我们对热力学函数进行勒让德变换（即把一个广延变量替换为对应的强度变量）时，新的热力学势相对于保留的广延变量仍然是**凸的**（二阶导大于0），但相对于新引入的强度变量变成了**凹的**（二阶导小于0）。

#### 1. 亥姆霍兹自由能 $F(T, V, N) = U - TS$
*   **物理意义**：与温度为 $T$ 的热库接触（恒温）的系统，平衡时 $F$ 达到最小。
*   **数学性质**：对 $S$ 进行了勒让德变换替换为 $T$。因此，$F$ 关于 $V, N$ 是**凸函数**，关于 $T$ 是**凹函数**。
*   **稳定性条件**：
    *   关于 $T$ 为凹：$\left( \frac{\partial^2 F}{\partial T^2} \right)_{V,N} = -\left( \frac{\partial S}{\partial T} \right)_{V,N} = -\frac{C_V}{T} \le 0 \implies \mathbf{C_V \ge 0}$
    *   关于 $V$ 为凸：$\left( \frac{\partial^2 F}{\partial V^2} \right)_{T,N} = -\left( \frac{\partial p}{\partial V} \right)_{T,N} = \frac{1}{V \kappa_T} \ge 0 \implies \mathbf{\kappa_T \ge 0}$ （等温压缩率必为正）。
    *   关于 $N$ 为凸：$\left( \frac{\partial^2 F}{\partial N^2} \right)_{T,V} = \left( \frac{\partial \mu}{\partial N} \right)_{T,V} \ge 0$ （恒温恒容下加入粒子，化学势必升高）。

#### 2. 焓 $H(S, p, N) = U + pV$
*   **物理意义**：在恒压、绝热（等熵）条件下的系统，平衡时 $H$ 达到最小。
*   **数学性质**：对 $V$ 进行了变换替换为 $p$。因此，$H$ 关于 $S, N$ 是**凸函数**，关于 $p$ 是**凹函数**。
*   **稳定性条件**：
    *   关于 $S$ 为凸：$\left( \frac{\partial^2 H}{\partial S^2} \right)_{p,N} = \left( \frac{\partial T}{\partial S} \right)_{p,N} = \frac{T}{C_p} \ge 0 \implies \mathbf{C_p \ge 0}$ （等压热容必为正）。
    *   关于 $p$ 为凹：$\left( \frac{\partial^2 H}{\partial p^2} \right)_{S,N} = \left( \frac{\partial V}{\partial p} \right)_{S,N} = -V \kappa_S \le 0 \implies \mathbf{\kappa_S \ge 0}$。

#### 3. 吉布斯自由能 $G(T, p, N)$ 与 化学势 $\mu(T, p)$
*   **物理意义**：与温度为 $T$ 的热库和压力为 $p$ 的压源接触（恒温恒压）的系统，平衡时 $G$ 达到最小。
*   由于 $G = \mu N$，系统只有 $N$ 一个广延自变量，且 $G$ 是一次齐次函数。
*   **数学性质**：$G$ 关于 $T, p$ 是**凹函数**，关于 $N$ 是**凸函数**（但实际上 $\frac{\partial^2 G}{\partial N^2} = \left(\frac{\partial \mu}{\partial N}\right)_{T,p} = 0$，这是因为恒温恒压下化学势是与大小无关的强度量，即处于边缘稳定状态）。
*   **$\mu$ 相关的实际稳定性（化学稳定性）**：通常化学稳定性是在恒温、恒容条件下考察的（对应 $F$ 或 $\Phi$ 的稳定性）。
    系统的**物质交换稳定性**要求，当局部粒子数增加时，其化学势必须升高，从而阻止进一步的粒子流入。即：
    $$ \mathbf{\left( \frac{\partial \mu}{\partial N} \right)_{T, V} \ge 0} \quad \text{或写为} \quad \mathbf{\left( \frac{\partial \mu}{\partial \rho} \right)_T \ge 0} \quad \text{(其中 $\rho = N/V$)}$$

#### 4. 巨热力学势 (Grand Potential) $\Phi(T, V, \mu) = F - \mu N = -pV$
*   **物理意义**：与温度为 $T$ 和化学势为 $\mu$ 的粒子源热库接触（开放系统，恒温恒 $\mu$）的系统，平衡时 $\Phi$ 达到最小。
*   **数学性质**：对 $S$ 和 $N$ 进行了变换，替换为 $T$ 和 $\mu$。因此，$\Phi$ 关于 $V$ 是**凸函数**，关于 $T, \mu$ 是**凹函数**。
*   **稳定性条件**：
    *   关于 $T$ 为凹：$\left( \frac{\partial^2 \Phi}{\partial T^2} \right)_{V,\mu} = -\left( \frac{\partial S}{\partial T} \right)_{V,\mu} \le 0$。
    *   关于 $V$ 为凸：$\left( \frac{\partial^2 \Phi}{\partial V^2} \right)_{T,\mu} = -\left( \frac{\partial p}{\partial V} \right)_{T,\mu} = 0$ （因为在给定 $T,\mu$ 下压力 $p$ 也是固定的强度量，这里也是边缘稳定）。
    *   **关于 $\mu$ 为凹**（粒子数涨落的稳定性）：
        $$ \left( \frac{\partial^2 \Phi}{\partial \mu^2} \right)_{T,V} = -\left( \frac{\partial N}{\partial \mu} \right)_{T,V} \le 0 \implies \mathbf{\left( \frac{\partial N}{\partial \mu} \right)_{T,V} \ge 0} $$
        这正是前面提到的化学稳定性的等价表述。它意味着巨正则系综中粒子数的涨落方差 $\langle (\Delta N)^2 \rangle = k_B T \left(\frac{\partial N}{\partial \mu}\right)_{T,V} \ge 0$ 必须为非负。

---

### 总结

从**熵最大原理（$S$ 是凹函数）**出发，可以严格导出所有宏观稳定性的充要条件。这些条件表现为不同表象下二阶导数的符号，具有深刻的物理直觉：

1. **热容必为正**：$C_V > 0, C_p > 0$ （加热系统，温度必然升高；$F$ 对 $T$ 为凹，$H$ 对 $S$ 为凸）。
2. **压缩率必为正**：$\kappa_T > 0, \kappa_S > 0$ （压缩体积，压力必然增大；$F$ 对 $V$ 为凸，$H$ 对 $p$ 为凹）。
3. **化学敏感度必为正**：$\left( \frac{\partial \mu}{\partial N} \right)_{T,V} > 0$ 或 $\left( \frac{\partial N}{\partial \mu} \right)_{T,V} > 0$ （加入粒子，该类粒子的排斥趋势必然增加；$\Phi$ 对 $\mu$ 为凹）。

在发生**相变（Phase Transition）**的临界点或共存区域时，上述某些条件会取到等号（例如气液相变中 $\kappa_T \to \infty \implies \frac{\partial p}{\partial V} = 0$），此时系统处于边缘稳定（Marginal Stability）状态。若条件被破坏（如出现负等温压缩率），则系统会变得动力学不稳定（如Spinodal decomposition），并自发分解为新的稳定相。