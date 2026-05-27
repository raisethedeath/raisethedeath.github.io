# 拓朴学基础 13
李友林
## 1. 商空间的形变收缩（续）
设商映射 $f: X \to Y$，$A \subset X$ 是形变收缩核，$B = f(A) \subset Y$。若形变收缩 $H: X \times [0,1] \to X$ 满足“若 $f(x) = f(x')$ 则 $f(H(x,t)) = f(H(x',t))$”，则 $B$ 是 $Y$ 的形变收缩核。
粘合只在形变收缩核上发生。
## 2. 基本群的计算
### 自由群（Free Group）
- 一组生成元 $\{g_1, g_2, \dots, g_n\}$ 生成的自由群，每个元素是生成元及其逆的有限乘积。
- **正规闭包（Normal Closure）**：设 $S \subset G$，则 $S$ 的正规闭包 $\overline{S}$ 是包含 $S$ 的最小的正规子群，即所有形如 $g s^{-1} g^{-1}$ 的元素的乘积生成的子群。
### Seifert–Van Kampen 定理
设 $X$ 是空间，$U, V$ 是 $X$ 的开覆盖，$U, V, U \cap V$ 均非空且道路连通。取基点 $x_0 \in U \cap V$。则
$$
\pi_1(X, x_0) \cong \pi_1(U, x_0) * \pi_1(V, x_0) \;/\; N,
$$
其中 $N$ 是由关系
$$
(i_U)_*(\alpha) \cdot (i_V)_*(\alpha^{-1}) = 1, \quad \forall \alpha \in \pi_1(U \cap V, x_0)
$$
生成的 $(\pi_1(U, x_0) * \pi_1(V, x_0))$ 的正规子群。这里 $i_U: U \cap V \hookrightarrow U$，$i_V: U \cap V \hookrightarrow V$。
**证明思路**：将回路分割成若干段，每段落在 $U$ 或 $V$ 中，通过中间路径调整基点，得到映射 $\Phi: \pi_1(U, x_0) * \pi_1(V, x_0) \to \pi_1(X, x_0)$，证明其核恰为 $N$。
### 应用与例子
1. **球面 $S^n$（$n \ge 2$）**  
   取 $U = S^n \setminus \{N\}$，$V = S^n \setminus \{S\}$，则 $U, V$ 同胚于 $\mathbb{E}^n$（单连通），$U \cap V$ 道路连通（同胚于 $S^{n-1} \times \mathbb{R}$，对 $n\ge 2$ 是道路连通的）。由 SVK 定理得
   $$
   \pi_1(S^n) \cong \{1\}, \quad n \ge 2.
   $$
2. **实射影平面 $\mathbb{R}P^n$（$n \ge 2$）**  
   利用 $\mathbb{R}P^n = S^n / \mathbb{Z}_2$ 或 SVK 可证 $\pi_1(\mathbb{R}P^n) \cong \mathbb{Z}_2$。
3. **楔和（Wedge Sum）**  
   若 $X = \bigvee_{i=1}^n S^1$（$n$ 个圆的楔和），则
   $$
   \pi_1(X) \cong \underbrace{\mathbb{Z} * \mathbb{Z} * \cdots * \mathbb{Z}}_{n \text{ 个}}.
   $$
4. **克莱因瓶（Klein Bottle）**  
   设 $K$ 为克莱因瓶，其基本群可表示为
   $$
   \pi_1(K) \cong \langle a, b \mid a^2 b^2 = 1 \rangle.
   $$
5. **附着一个 $n$-胞腔（$n \ge 3$）**  
   设 $Y$ 是空间，$f: S^{n-1} \to Y$，构造 $X = Y \cup_f D^n$（将 $D^n$ 沿边界 $S^{n-1}$ 粘到 $Y$ 上）。若 $n \ge 3$，则 $S^{n-1}$ 单连通，因此粘合不影响基本群：
   $$
   \pi_1(X) \cong \pi_1(Y).
   $$