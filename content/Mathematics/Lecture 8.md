# 拓扑学基础 8

李友林

## 1. 商空间（Quotient Spaces）

**定义**：设 $X$ 是拓扑空间，$\sim$ 是等价关系。商空间 $X/\!\sim$ 的拓扑为：$U\subset X/\!\sim$ 开当且仅当 $q^{-1}(U)$ 在 $X$ 中开，其中 $q:X\to X/\!\sim$ 是商映射。

**性质**：
- $q$ 是连续满射，且是商映射（$U$ 开 $\iff q^{-1}(U)$ 开）。
- 商映射是连续满射，且是终拓扑：$f: X/\!\sim \to Z$ 连续 $\iff f\circ q$ 连续。
- 若 $f:X\to Y$ 是连续满射，且是开映射或闭映射，则 $f$ 是商映射。

**例子**：
- 将 $A\subset X$ 缩为一点：$X/A$。
- $D^n / S^{n-1} \cong S^n$。
- 锥 $CX = (X\times [0,1])/(X\times\{1\})$。
- 实射影空间 $\mathbb{R}P^n = (\mathbb{R}^{n+1}\setminus\{0\})/\sim$，其中 $x\sim \lambda x$。
- 透镜空间 $L(p,q)$：$S^3/\mathbb{Z}_p$ 作用。
- 环面 $T^2$：$\mathbb{R}^2/\mathbb{Z}^2$。
- 克莱因瓶、莫比乌斯带可表示为多边形粘合。

## 2. 商映射的性质

- 商映射的复合仍是商映射。
- 两个商映射的乘积不一定是商映射。
- 商映射不一定开或闭。

## 3. 多边形表示（Polygonal Representation）

- 闭曲面可由多边形边对边粘合得到。
- 标准表示：
  - 环面 $T^2$：$aba^{-1}b^{-1}$
  - 射影平面 $\mathbb{R}P^2$：$aa$
  - 克莱因瓶：$abab^{-1}$ 或 $aabb$
- 欧拉示性数 $\chi(S) = V - E + F$，与三角剖分无关。
- 分类定理：任何闭曲面同胚于球面 $S^2$，或 $n$ 个环面的连通和 $nT^2$（$n\ge 1$），或 $m$ 个射影平面的连通和 $m\mathbb{R}P^2$（$m\ge 1$）。且 $nT^2\#\mathbb{R}P^2 \cong (2n+1)\mathbb{R}P^2$。
- 可定向性：$T^2$ 可定向，$\mathbb{R}P^2$ 和克莱因瓶不可定向。