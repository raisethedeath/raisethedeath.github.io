从含时薛定谔方程出发，分别投影到坐标本征态和动量本征态上，即可得到坐标表象和动量表象下的波动方程。以一维单粒子为例，哈密顿量为  
$$
\hat{H} = \frac{\hat{p}^2}{2m} + V(\hat{x}, t)
$$

---

### 1. 坐标表象
取坐标本征态 $|x\rangle$，满足 $\hat{x}|x\rangle = x|x\rangle$，$\langle x|x'\rangle = \delta(x-x')$。波函数定义为 $\psi(x,t) = \langle x|\psi(t)\rangle$。

将薛定谔方程左乘 $\langle x|$：
$$
i\hbar \frac{\partial}{\partial t} \langle x|\psi(t)\rangle = \langle x|\hat{H}|\psi(t)\rangle
$$
左边即为 $i\hbar \partial_t \psi(x,t)$。右边插入坐标完备性 $\int dx' |x'\rangle\langle x'| = \mathbb{I}$：
$$
\langle x|\hat{H}|\psi(t)\rangle = \int dx' \langle x|\hat{H}|x'\rangle \psi(x',t)
$$
算符 $\hat{x}$ 在自身表象中是对角化的：$\hat{x}|x'\rangle = x'|x'\rangle$，故 $\langle x|V(\hat{x},t)|x'\rangle = V(x,t)\delta(x-x')$。动量算符 $\hat{p}$ 在坐标表象中为 $-i\hbar \partial_x$，其矩阵元为 $\langle x|\hat{p}|x'\rangle = -i\hbar \partial_x \delta(x-x')$，动能项的矩阵元：
$$
\langle x|\frac{\hat{p}^2}{2m}|x'\rangle = -\frac{\hbar^2}{2m} \frac{\partial^2}{\partial x^2} \delta(x-x')
$$
代入积分，利用 $\delta$ 函数的导数性质积分，得到：
$$
\langle x|\hat{H}|\psi(t)\rangle = \left[ -\frac{\hbar^2}{2m} \frac{\partial^2}{\partial x^2} + V(x,t) \right] \psi(x,t)
$$
因此，**坐标表象的薛定谔方程**为：
$$
\boxed{i\hbar \frac{\partial \psi(x,t)}{\partial t} = \left[ -\frac{\hbar^2}{2m} \frac{\partial^2}{\partial x^2} + V(x,t) \right] \psi(x,t)}
$$
三维情况推广为 $\nabla^2$ 替换 $\partial_x^2$。

---

### 2. 动量表象
取动量本征态 $|p\rangle$，满足 $\hat{p}|p\rangle = p|p\rangle$，$\langle p|p'\rangle = \delta(p-p')$。波函数定义为 $\phi(p,t) = \langle p|\psi(t)\rangle$。

左乘 $\langle p|$：
$$
i\hbar \frac{\partial \phi(p,t)}{\partial t} = \langle p|\hat{H}|\psi(t)\rangle = \langle p|\frac{\hat{p}^2}{2m}|\psi(t)\rangle + \langle p|V(\hat{x},t)|\psi(t)\rangle
$$
第一项：$\hat{p}^2$ 作用在左矢 $\langle p|$ 上得 $p^2$，故为 $\frac{p^2}{2m}\phi(p,t)$。

第二项：插入坐标完备性：
$$
\langle p|V(\hat{x},t)|\psi(t)\rangle = \int dx \, \langle p|V(\hat{x},t)|x\rangle \langle x|\psi(t)\rangle = \int dx \, V(x,t) \langle p|x\rangle \psi(x,t)
$$
利用平面波内积 $\langle p|x\rangle = \frac{1}{\sqrt{2\pi\hbar}} e^{-ipx/\hbar}$，同时 $\psi(x,t)$ 与 $\phi(p,t)$ 由傅里叶变换联系：
$$
\psi(x,t) = \frac{1}{\sqrt{2\pi\hbar}} \int dp \, e^{ipx/\hbar} \phi(p,t)
$$
代入得：
$$
\langle p|V(\hat{x},t)|\psi(t)\rangle = \frac{1}{2\pi\hbar} \iint dx dp' \, V(x,t) e^{i(p'-p)x/\hbar} \phi(p',t)
$$
令 $\tilde{V}(p-p', t)$ 为 $V(x,t)$ 的傅里叶变换（未乘因子前的积分核），则：
$$
\langle p|V|\psi\rangle = \frac{1}{\sqrt{2\pi\hbar}} \int dp' \, \tilde{V}(p-p', t) \phi(p',t)
$$
更紧凑的方式是直接将 $V(\hat{x},t)$ 中的 $\hat{x}$ 用动量表象的表示 $\hat{x} = i\hbar \partial_p$ 替换。因为 $\hat{x}$ 在动量表象中的矩阵元为 $\langle p|\hat{x}|p'\rangle = i\hbar \partial_p \delta(p-p')$，故对于任意解析函数 $V$，有：
$$
\langle p|V(\hat{x},t)|\psi(t)\rangle = V\left(i\hbar \frac{\partial}{\partial p}, t\right) \phi(p,t)
$$
其中 $V(i\hbar \partial_p, t)$ 理解为将 $x$ 替换为 $i\hbar \partial_p$ 的算符级数。

因此，**动量表象的薛定谔方程**为：
$$
\boxed{i\hbar \frac{\partial \phi(p,t)}{\partial t} = \left[ \frac{p^2}{2m} + V\left(i\hbar \frac{\partial}{\partial p}, t\right) \right] \phi(p,t)}
$$
三维情况：$\hat{\mathbf{p}} \to \mathbf{p}$，$\hat{\mathbf{r}} \to i\hbar \nabla_{\mathbf{p}}$。

---

### 总结
- **坐标表象**：势能局域，动能是非局域的微分算符。
- **动量表象**：动能局域，势能变成关于动量的微分算符（或积分算符），体现非局域性。

两种表象完全等价，通过傅里叶变换互相转换。当势能是坐标的多项式时，动量表象方程成为有限阶微分方程；当势能形式复杂时，常采用积分形式利用卷积处理。