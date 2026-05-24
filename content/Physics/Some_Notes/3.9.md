# Problem 3.9 (Interacting systems and the Hamiltonian of mean force ★★★★)

## Recitation #3
Consider two interacting systems X and Y, with microstates x and y, respectively. Their total Hamiltonian is written as
$H_{\text{tot}}(x,y) = H_X(x) + H_Y(y) + H_{\text{int}}(x,y).$
(a) Show that the decomposition of $H_{\text{tot}}$ into $H_X$, $H_Y$, and $H_{\text{int}}$ is not unique. In particular, show that one may ==redefine these three terms without changing the total Hamiltonian==.
(b) Assume that the composite system $X+Y$ is in canonical equilibrium at temperature T, so that
$p(x,y) = \frac{1}{Z_{\text{tot}}} e^{-H_{\text{tot}}(x,y)/T}.$
Compute the marginal distribution of system X,
$p_X(x) = \int dy \, p(x,y),$
and show that it can be written in the form
$p_X(x) = \frac{1}{Z_X^*} e^{-H_X^*(x;T)/T},$
where
$H_X^*(x;T) = -T \log \int dy \exp\left[ -\frac{H_Y(y) + H_{\text{int}}(x,y)}{T} \right] + \text{const}.$
This quantity is called the _Hamiltonian of mean force_. Explain why $H_X^*$ generally depends on temperature.
(c) Motivated by part (b), consider an effective description of system X with a temperature-dependent Hamiltonian $H_X(x;T)$. Define
$Z(T) = \int dx \, e^{-H_X(x;T)/T}, \quad p(x) = \frac{1}{Z(T)} e^{-H_X(x;T)/T}.$
Define the free energy $F = -T \log Z$, the average energy
$U = \langle H_X(x;T) \rangle,$
and the entropy
$S = -\int dx \, p(x) \log p(x).$
Show that
$F = U - TS.$
(d) Show that as long as $\partial_T H_X \neq 0$,
$U \neq -\frac{\partial}{\partial \beta} \log Z, \quad S \neq -\frac{\partial F}{\partial T}, \quad \beta = \frac{1}{T},$
(e) Compute the heat capacity $C = \frac{dU}{dT}$, is no longer given by
$C = \frac{1}{T^2} \text{Var}(H_X).$
Derive the corrected expression.