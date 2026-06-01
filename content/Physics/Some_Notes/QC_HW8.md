# Exercise 1

Consider a charged particle in a one-dimensional harmonic oscillator potential. A weak electric field $E$ is imposed, which shifts the potential energy by $H' = -qEx$.

Prove that the first-order perturbation correction of the energy $E_n^{(1)}$ is zero, and calculate the second-order perturbation correction of the energy $E_n^{(2)}$.

Hint: Defer to DDT I, section 11, pp. 32–47.

---

# Exercise 2

The Hamiltonian of the hydrogen atom is:

$$
\hat{H} = -\frac{\hbar^2}{2m} \nabla^2 - \frac{e^2}{4\pi \epsilon_0 r}
$$

Please estimate the energy of the ground state of the hydrogen atom using the variational trial wave function $\psi = e^{-\lambda r}$ ($\lambda$ is the variable). Then compare it with the exact value of the ground state for the hydrogen atom.

$$
(E_0 = -13.6 \, \text{eV}).
$$

---

# Exercise 3

(a) A particle is in a square box of length $l$. The center of the box is at $x = 0, y = 0$, write down the wave functions and energy levels (Hint: this is a particle in a 2D box problem).

(b) If this system is perturbed by a potential:

$$
\hat{H}' = b \quad \text{for} \quad \frac{1}{4} l \leq x \leq \frac{3}{4} l \quad \text{and} \quad \frac{1}{4} l \leq y \leq \frac{3}{4} l
$$

where $b$ is a constant and $\hat{H}' = 0$ elsewhere, find $E^{(1)}$ for the ground state. For the first excited energy level, find the $E^{(1)}$ values.

## Solution
Here are the detailed solutions to the three quantum mechanics exercises:

---

### **Exercise 1**

**1. Prove that the first-order perturbation correction of the energy $E_n^{(1)}$ is zero:**

For a one-dimensional harmonic oscillator, the unperturbed Hamiltonian is $\hat{H}_0 = \frac{p^2}{2m} + \frac{1}{2}m\omega^2x^2$, and the unperturbed energy eigenstates are denoted as $|n\rangle$. The perturbation is $\hat{H}' = -qEx$.

By the first-order time-independent perturbation theory, the energy correction is the expectation value of the perturbation in the unperturbed state:
$$ E_n^{(1)} = \langle n | \hat{H}' | n \rangle = -qE \langle n | x | n \rangle $$

To evaluate $\langle n | x | n \rangle$, we can use the parity property of the harmonic oscillator wavefunctions $\psi_n(x)$. The operator $x$ is an odd function (anti-symmetric, $f(-x) = -f(x)$). The probability density $|\psi_n(x)|^2$ is always an even function (symmetric) because $\psi_n(x)$ itself is either purely even or purely odd. 
Therefore, the integrand $x|\psi_n(x)|^2$ is an odd function. Integrating an odd function over symmetric limits $(-\infty, \infty)$ yields exactly zero:
$$ \langle n | x | n \rangle = \int_{-\infty}^{\infty} x |\psi_n(x)|^2 dx = 0 $$
Thus, $E_n^{(1)} = 0$.

**2. Calculate the second-order perturbation correction of the energy $E_n^{(2)}$:**

The second-order energy correction is given by:
$$ E_n^{(2)} = \sum_{m \neq n} \frac{|\langle m | \hat{H}' | n \rangle|^2}{E_n^{(0)} - E_m^{(0)}} = q^2E^2 \sum_{m \neq n} \frac{|\langle m | x | n \rangle|^2}{E_n^{(0)} - E_m^{(0)}} $$

To find the non-zero matrix elements $\langle m | x | n \rangle$, it is easiest to express the position operator $x$ in terms of the lowering (annihilation) operator $\hat{a}$ and raising (creation) operator $\hat{a}^\dagger$:
$$ x = \sqrt{\frac{\hbar}{2m\omega}} (\hat{a} + \hat{a}^\dagger) $$
Acting this on the state $|n\rangle$ gives:
$$ x | n \rangle = \sqrt{\frac{\hbar}{2m\omega}} (\sqrt{n} | n-1 \rangle + \sqrt{n+1} | n+1 \rangle) $$
Because the unperturbed states are orthogonal, the only non-zero inner products $\langle m | x | n \rangle$ are for $m = n-1$ and $m = n+1$:
1. For $m = n - 1$: $\langle n-1 | x | n \rangle = \sqrt{\frac{\hbar}{2m\omega}} \sqrt{n}$
2. For $m = n + 1$: $\langle n+1 | x | n \rangle = \sqrt{\frac{\hbar}{2m\omega}} \sqrt{n+1}$

The unperturbed energy levels are $E_n^{(0)} = (n + \frac{1}{2})\hbar\omega$. Therefore, the energy differences in the denominator are:
*   $E_n^{(0)} - E_{n-1}^{(0)} = \hbar\omega$
*   $E_n^{(0)} - E_{n+1}^{(0)} = -\hbar\omega$

Substituting these into the sum:
$$ E_n^{(2)} = q^2E^2 \left( \frac{\frac{\hbar}{2m\omega} n}{\hbar\omega} + \frac{\frac{\hbar}{2m\omega} (n+1)}{-\hbar\omega} \right) $$
$$ E_n^{(2)} = \frac{q^2E^2\hbar}{2m\omega^2\hbar} (n - (n + 1)) = \frac{q^2E^2}{2m\omega^2} (-1) $$
$$ E_n^{(2)} = -\frac{q^2E^2}{2m\omega^2} $$
*(Note: This second-order shift is independent of the quantum number $n$.)*

---

### **Exercise 2**

**1. Set up the Variational Method:**

The trial wavefunction is given as $\psi = e^{-\lambda r}$. We must find the expectation value of the energy $E(\lambda) = \frac{\langle \psi | \hat{H} | \psi \rangle}{\langle \psi | \psi \rangle}$ and minimize it with respect to $\lambda$. Let's calculate the necessary integrals using spherical coordinates $d\tau = 4\pi r^2 dr$.

**Normalization factor:**
$$ \langle \psi | \psi \rangle = \int_0^\infty e^{-2\lambda r} 4\pi r^2 dr = 4\pi \frac{2!}{(2\lambda)^3} = \frac{\pi}{\lambda^3} $$

**Kinetic Energy $\langle \hat{T} \rangle$:**
$$ \hat{T} = -\frac{\hbar^2}{2m} \nabla^2 $$
Operating on $\psi$: $\nabla^2 (e^{-\lambda r}) = \frac{1}{r^2} \frac{\partial}{\partial r} \left( r^2 \frac{\partial (e^{-\lambda r})}{\partial r} \right) = \left( \lambda^2 - \frac{2\lambda}{r} \right) e^{-\lambda r}$
$$ \langle \psi | \hat{T} | \psi \rangle = \int_0^\infty e^{-\lambda r} \left( -\frac{\hbar^2}{2m} \right) \left( \lambda^2 - \frac{2\lambda}{r} \right) e^{-\lambda r} 4\pi r^2 dr $$
$$ = -\frac{4\pi\hbar^2}{2m} \int_0^\infty \left( \lambda^2 r^2 e^{-2\lambda r} - 2\lambda r e^{-2\lambda r} \right) dr = -\frac{2\pi\hbar^2}{m} \left[ \lambda^2 \frac{2}{(2\lambda)^3} - 2\lambda \frac{1}{(2\lambda)^2} \right] $$
$$ = -\frac{2\pi\hbar^2}{m} \left( \frac{1}{4\lambda} - \frac{1}{2\lambda} \right) = \frac{\pi\hbar^2}{2m\lambda} $$

**Potential Energy $\langle \hat{V} \rangle$:**
$$ \langle \psi | \hat{V} | \psi \rangle = \int_0^\infty e^{-\lambda r} \left( -\frac{e^2}{4\pi\epsilon_0 r} \right) e^{-\lambda r} 4\pi r^2 dr = -\frac{e^2}{\epsilon_0} \int_0^\infty r e^{-2\lambda r} dr = -\frac{e^2}{\epsilon_0} \frac{1}{(2\lambda)^2} = -\frac{e^2}{4\epsilon_0 \lambda^2} $$

**Total Expectation Value $E(\lambda)$:**
$$ E(\lambda) = \frac{\langle \hat{T} \rangle + \langle \hat{V} \rangle}{\langle \psi | \psi \rangle} = \frac{\frac{\pi\hbar^2}{2m\lambda} - \frac{e^2}{4\epsilon_0 \lambda^2}}{\frac{\pi}{\lambda^3}} = \frac{\hbar^2 \lambda^2}{2m} - \frac{e^2 \lambda}{4\pi\epsilon_0} $$

**2. Minimize the Energy:**

To find the minimum energy, set $\frac{dE}{d\lambda} = 0$:
$$ \frac{dE}{d\lambda} = \frac{\hbar^2 \lambda}{m} - \frac{e^2}{4\pi\epsilon_0} = 0 \implies \lambda_{min} = \frac{m e^2}{4\pi\epsilon_0 \hbar^2} $$
*(Note: This $\lambda_{min}$ is exactly the inverse of the Bohr radius, $1/a_0$)*.

Substituting $\lambda_{min}$ back into $E(\lambda)$:
$$ E_{min} = \frac{\hbar^2}{2m} \left( \frac{m e^2}{4\pi\epsilon_0 \hbar^2} \right)^2 - \frac{e^2}{4\pi\epsilon_0} \left( \frac{m e^2}{4\pi\epsilon_0 \hbar^2} \right) = \frac{m e^4}{32\pi^2 \epsilon_0^2 \hbar^4} - \frac{m e^4}{16\pi^2 \epsilon_0^2 \hbar^4} = -\frac{m e^4}{32\pi^2 \epsilon_0^2 \hbar^2} $$

**3. Comparison:**

Using the established values of these constants ($e, \hbar, m, \epsilon_0$), the term $-\frac{m e^4}{32\pi^2 \epsilon_0^2 \hbar^2}$ evaluates exactly to **$-13.6 \text{ eV}$**. 
**Conclusion**: Because our initial trial functional form $\psi = e^{-\lambda r}$ perfectly matches the true mathematical shape of the hydrogen ground state wavefunction, the variational method returns the **exact** ground state energy value rather than just an upper-bound estimate.

---

### **Exercise 3**

*(Note on boundaries: The problem states the box is centered at $(0,0)$ with length $l$, meaning boundaries are $x,y \in [-l/2, l/2]$. The perturbation region given is $x,y \in [l/4, 3l/4]$. This conventionally describes the "middle 50%" of a box originating at $0$ (i.e. $0$ to $l$). Adapted properly to our centered coordinates $[-l/2, l/2]$, the middle 50% translates to the symmetric region $-l/4 \leq x, y \leq l/4$. We use this structurally symmetric intended region below. If integrated strictly verbatim, the boundaries $l/4$ to $l/2$ must be used since the particle is $0$ past $l/2$.)*

**Part (a): Wave functions and energy levels**

For a 2D box of length $l$ centered at $(0,0)$, the boundary conditions dictate that the wavefunction must be zero at $\pm l/2$.
The spatial wavefunctions are separable $\psi_{n_x,n_y}(x,y) = \phi_{n_x}(x)\phi_{n_y}(y)$ where $n_x, n_y = 1, 2, 3, \dots$
$$
\phi_n(z) = 
\begin{cases} 
\sqrt{\frac{2}{l}} \cos\left(\frac{n\pi z}{l}\right) & \text{for } n \text{ odd} \\
\sqrt{\frac{2}{l}} \sin\left(\frac{n\pi z}{l}\right) & \text{for } n \text{ even}
\end{cases}
$$
Therefore, the wavefunctions are:
$$ \psi_{n_x,n_y}(x,y) = \phi_{n_x}(x) \phi_{n_y}(y) $$
The corresponding energy levels are:
$$ E_{n_x,n_y} = \frac{\pi^2 \hbar^2}{2ml^2} (n_x^2 + n_y^2) $$

**Part (b): First-order perturbation $E^{(1)}$**

Using the centered perturbation interpretation $H' = b$ for $-l/4 \leq x \leq l/4$ and $-l/4 \leq y \leq l/4$:

**1. Ground State ($n_x=1, n_y=1$):**
The wavefunction is $\psi_{1,1} = \frac{2}{l} \cos\left(\frac{\pi x}{l}\right) \cos\left(\frac{\pi y}{l}\right)$.
$$ E_{1,1}^{(1)} = \langle 1,1 | H' | 1,1 \rangle = b \int_{-l/4}^{l/4} \frac{2}{l} \cos^2\left(\frac{\pi x}{l}\right) dx \int_{-l/4}^{l/4} \frac{2}{l} \cos^2\left(\frac{\pi y}{l}\right) dy $$
Let's evaluate the 1D integral:
$$ I_1 = \frac{1}{l} \int_{-l/4}^{l/4} \left[ 1 + \cos\left(\frac{2\pi x}{l}\right) \right] dx = \frac{1}{l} \left[ x + \frac{l}{2\pi} \sin\left(\frac{2\pi x}{l}\right) \right]_{-l/4}^{l/4} $$
$$ I_1 = \frac{1}{l} \left[ \left(\frac{l}{4} + \frac{l}{2\pi}\right) - \left(-\frac{l}{4} - \frac{l}{2\pi}\right) \right] = \frac{1}{2} + \frac{1}{\pi} $$
Thus, for the 2D ground state:
$$ E_{1,1}^{(1)} = b \left( \frac{1}{2} + \frac{1}{\pi} \right)^2 $$

**2. First Excited State (Degenerate, $n_x=1, n_y=2$ and $n_x=2, n_y=1$):**
We must set up the perturbation matrix $W$. 
Let $|1\rangle = |1,2\rangle$ and $|2\rangle = |2,1\rangle$. The components require evaluating the $n=2$ integral:
$$ I_2 = \int_{-l/4}^{l/4} \frac{2}{l} \sin^2\left(\frac{2\pi x}{l}\right) dx = \frac{1}{l} \int_{-l/4}^{l/4} \left[ 1 - \cos\left(\frac{4\pi x}{l}\right) \right] dx $$
$$ I_2 = \frac{1}{l} \left[ x - \frac{l}{4\pi} \sin\left(\frac{4\pi x}{l}\right) \right]_{-l/4}^{l/4} = \frac{1}{l} \left[ \left(\frac{l}{4} - 0\right) - \left(-\frac{l}{4} - 0\right) \right] = \frac{1}{2} $$
The diagonal matrix elements are:
$$ W_{11} = b \langle 1,2 | H' | 1,2 \rangle = b \cdot I_1 \cdot I_2 = b \left(\frac{1}{2} + \frac{1}{\pi}\right)\left(\frac{1}{2}\right) = b \left(\frac{1}{4} + \frac{1}{2\pi}\right) $$
$$ W_{22} = b \langle 2,1 | H' | 2,1 \rangle = b \cdot I_2 \cdot I_1 = b \left(\frac{1}{4} + \frac{1}{2\pi}\right) $$
The off-diagonal element requires the cross-term:
$$ W_{12} = b \langle 1,2 | H' | 2,1 \rangle = b \left( \int_{-l/4}^{l/4} \frac{2}{l} \cos\left(\frac{\pi x}{l}\right)\sin\left(\frac{2\pi x}{l}\right) dx \right)^2 $$
Because the integration interval $[-l/4, l/4]$ is symmetric around $0$, and the integrand $[\text{even} \times \text{odd}] = \text{odd}$, the integral evaluates exactly to zero.
$$ W_{12} = W_{21} = 0 $$
Because the perturbation matrix is completely diagonal, the degeneracy is not lifted at the first-order level. The energy corrections for both first excited states are simply:
$$ E_{1,2}^{(1)} = E_{2,1}^{(1)} = b \left( \frac{1}{4} + \frac{1}{2\pi} \right) $$

---
*(Addendum: If your professor insists on integrating strictly inside the literal non-symmetric intersection of the specified bounds $[l/4, 3l/4]$ over the box limit ending at $l/2$, the integration limits become $l/4$ to $l/2$. This yields the non-diagonalized ground state correction $E_{1,1}^{(1)} = b \left(\frac{1}{4} - \frac{1}{2\pi}\right)^2$, and the excited state splitting values $E_{1,2/2,1}^{(1)} = b \left( \frac{1}{16} - \frac{1}{8\pi} \pm \frac{2}{9\pi^2} \right)$.)*