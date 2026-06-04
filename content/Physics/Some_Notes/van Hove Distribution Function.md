**Van Hove 函数**是凝聚态物理与统计力学中描述体系时空关联的核心工具，由 Léon Van Hove 于 1954 年提出，其核心思想是将静态的对关联函数推广到含时情形。它直接联系着非弹性中子散射、X 射线散射等实验观测量，是理解液体动力学、玻璃化转变、扩散及集体激发的桥梁。

---

### 1. 定义与基本形式

对于一个由 $N$ 个全同粒子组成的体系，含时微观密度算符为：

$$
\rho(\mathbf{r}, t) = \sum_{i=1}^N \delta(\mathbf{r} - \mathbf{r}_i(t))
$$

Van Hove 函数定义为密度-密度时间关联函数：

$$
G(\mathbf{r}, t) = \frac{1}{N} \left\langle \int \rho(\mathbf{r}' - \mathbf{r}, 0) \, \rho(\mathbf{r}', t) \, d\mathbf{r}' \right\rangle
$$

代入密度算符后得到：

$$
G(\mathbf{r}, t) = \frac{1}{N} \left\langle \sum_{i=1}^N \sum_{j=1}^N \delta(\mathbf{r} - \mathbf{r}_i(0) + \mathbf{r}_j(t)) \right\rangle
$$

物理上，$G(\mathbf{r}, t) d\mathbf{r}$ 表示：若在初始时刻有一个粒子位于原点，则在时间 $t$ 后于 $\mathbf{r}$ 处的体积元 $d\mathbf{r}$ 内找到任意一个粒子的概率。

#### 自部分与独特部分

将 $i=j$ 和 $i\neq j$ 的项分开：

$$
G(\mathbf{r}, t) = G_s(\mathbf{r}, t) + G_d(\mathbf{r}, t)
$$

- **自部分 (self part)**：$G_s(\mathbf{r}, t) = \frac{1}{N} \langle \sum_i \delta(\mathbf{r} - \mathbf{r}_i(0) + \mathbf{r}_i(t)) \rangle$  
  描述**同一个粒子**在不同时刻的位移概率分布，是单粒子动力学的完全描述。

- **独特部分 (distinct part)**：$G_d(\mathbf{r}, t) = \frac{1}{N} \langle \sum_{i \neq j} \delta(\mathbf{r} - \mathbf{r}_i(0) + \mathbf{r}_j(t)) \rangle$  
  描述**不同粒子**之间的时空关联，反映集体动力学。

#### 极限行为

- $t=0$ 时：$G_s(\mathbf{r}, 0) = \delta(\mathbf{r})$，$G_d(\mathbf{r}, 0) = \rho g(\mathbf{r})$，其中 $g(\mathbf{r})$ 是径向分布函数（RDF）。因此  
  $$
  G(\mathbf{r}, 0) = \delta(\mathbf{r}) + \rho g(\mathbf{r})
  $$

- 长时极限：对于平衡液体，$G_s$ 趋于均匀分布（因扩散），$G_d$ 趋于平均密度 $\rho$，总 $G \to \rho$。

---

### 2. 与实验的定量联系：动态结构因子

Van Hove 函数本身难以直接测量，但其时空傅里叶变换正是非弹性散射实验的核心观测量——**动态结构因子** $S(\mathbf{q}, \omega)$：

$$
S(\mathbf{q}, \omega) = \frac{1}{2\pi} \int G(\mathbf{r}, t) \, e^{-i(\mathbf{q} \cdot \mathbf{r} - \omega t)} \, d\mathbf{r} \, dt
$$

同样可分为相干和非相干部分：

- **相干动态结构因子** $S_{\text{coh}}(\mathbf{q}, \omega)$：来自总 $G(\mathbf{r}, t)$ 的变换，反映集体密度涨落。对应中子衍射或 X 射线散射的相干信号。
- **非相干动态结构因子** $S_{\text{inc}}(\mathbf{q}, \omega)$：来自 $G_s(\mathbf{r}, t)$ 的变换，对应非相干中子散射，直接探测单粒子运动。

中间散射函数 $F(\mathbf{q}, t)$ 定义为 $G$ 的空间傅里叶变换：

$$
F(\mathbf{q}, t) = \int G(\mathbf{r}, t) \, e^{-i\mathbf{q} \cdot \mathbf{r}} d\mathbf{r}
$$
同样有自部分 $F_s(\mathbf{q}, t)$，它正是单粒子密度关联函数，可通过非相干散射或分子模拟直接获取。其在长时间的行为按 $\exp(-t/\tau)$ 或 $\exp(-(t/\tau)^\beta)$ 衰减，与结构弛豫直接相关。

---

### 3. 物理内涵与应用举例

#### 3.1 自部分与单粒子动力学

$G_s(\mathbf{r}, t)$ 给出粒子在时间 $t$ 内位移为 $\mathbf{r}$ 的概率密度。在各向同性液体中，$G_s(r, t)$ 仅依赖于距离 $r$。

- **正常扩散**：若扩散满足 Fick 定律，$G_s$ 为高斯分布：
  $$
  G_s(r, t) = \frac{1}{(4\pi D t)^{3/2}} \exp\left(-\frac{r^2}{4Dt}\right)
  $$
  对应中间散射函数 $F_s(q, t) = \exp(-D q^2 t)$。

- **非高斯效应**：在超冷液体、玻璃或拥挤环境中，粒子运动会呈现非高斯性。常用**非高斯参数** $\alpha_2(t)$ 衡量偏离：
  $$
  \alpha_2(t) = \frac{3\langle r^4(t) \rangle}{5\langle r^2(t) \rangle^2} - 1
  $$
  当 $G_s$ 为高斯分布时 $\alpha_2 = 0$。非高斯峰的出现标志着动力学异质性：部分粒子位移大，部分粒子几乎被冻结。

- **笼效应与弹道-扩散转变**：在液体中，短时间 $(t < 1\,\text{ps})$ 粒子作弹道运动，$G_s$ 峰以声速展宽；随后因周围粒子形成的“笼”而受限，$G_s$ 出现一个近似固定的宽度；长时间扩散启动后再次展宽。这种转变在 $F_s(q, t)$ 中表现为两步弛豫（快 $\beta$ 弛豫和慢 $\alpha$ 弛豫）。

#### 3.2 独特部分与集体动力学

$G_d(r, t)$ 描述一个粒子运动引起的其他粒子分布的演化。其物理图像：

- **声子传播**：晶体或液体中，初始粒子扰动以声速向外传播，$G_d$ 在主峰外会出现传播的密度波包。
- **结构弛豫**：在过冷液体中，$G_d$ 的弛豫对应着局域结构的重组，其时间尺度远长于单粒子扩散。
- **静态极限**：$G_d(r, 0) = \rho g(r)$，因此 $G_d(r, t)$ 可以视为时间依赖的对分布函数，反映了周围“关联壳层”如何随时间模糊。

#### 3.3 玻璃化转变中的时空分析

通过分子动力学模拟可计算不同温度下的 $G_s(r, t)$ 和 $G_d(r, t)$。在玻璃转变温度附近：

- 自部分出现明显的非高斯平台，且 $\alpha_2(t)$ 峰值随过冷度增加而升高并向长时间移动。
- 独特部分在中等距离（对应第一配位壳层）表现出极慢的弛豫，直接揭示协同重排区域（cooperatively rearranging regions）的时空尺度。

---

### 4. 数值计算与分析方法

在分子动力学模拟中，Van Hove 函数的计算步骤为：

1. 存储粒子轨迹 $\mathbf{r}_i(t_k)$。
2. 对于自部分：计算位移 $\Delta \mathbf{r}_i(t) = \mathbf{r}_i(t) - \mathbf{r}_i(0)$，统计其分布直方图得到 $G_s(r, t)$。
3. 对于独特部分：对固定 $t$，遍历所有粒子对 $i\neq j$，统计 $\mathbf{r}_j(t) - \mathbf{r}_i(0)$ 的距离分布，再除以 $N$ 和壳层体积得到 $G_d(r, t)$。
4. 时间平均提高信噪比，通常以初始时刻为多个时间原点。

分析时常提取：
- 均方位移 $\langle r^2(t) \rangle = \int r^2 G_s(r, t) d\mathbf{r}$
- 非高斯参数
- 跳变特征：部分体系（如胶体凝胶）中 $G_s$ 呈现双峰，直接指示粒子发生了跳跃运动。

---

### 5. 与“Van Hove 奇点”的区分

在固体物理中，**Van Hove 奇点**（van Hove singularity）指的是态密度 $g(E)$ 中的奇点，源于色散关系 $\omega(\mathbf{k})$ 在某点梯度为零（布里渊区高对称点）。它与上述时空关联函数是不同的概念，但均以 Léon Van Hove 命名。

---

### 6. 总结

| 量                                    | 物理含义                      | 实验探测         |
| ------------------------------------ | ------------------------- | ------------ |
| $G_s(\mathbf{r}, t)$                 | 单粒子位移概率分布，描述扩散、笼效应、非高斯动力学 | 非相干中子散射、MD模拟 |
| $G_d(\mathbf{r}, t)$                 | 不同粒子时空关联，描述集体密度涨落和结构弛豫    | 相干中子/X射线散射   |
| $F_s(\mathbf{q}, t)$                 | 单粒子中间散射函数，直接连接振动/弛豫模式     | 非相干散射、介电谱等   |
| $S_{\text{coh}}(\mathbf{q}, \omega)$ | 动态结构因子，密度涨落的频谱            | 三轴中子谱仪、IXS   |

Van Hove 函数将原子尺度的运动与宏观可测量的响应函数统一起来，是当代凝聚态物质动力学研究中不可替代的基础工具。通过分析不同时间和空间尺度的 Van Hove 函数，可以揭示从简单液体到复杂玻璃体系的微观运动机制与动态异质性。