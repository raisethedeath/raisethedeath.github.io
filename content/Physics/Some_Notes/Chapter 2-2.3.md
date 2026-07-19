# Molecular Motors and Random Walks

## Background

Inside your cells, there are several different molecular motors, which move and pull and copy (Fig. 2.7). There are molecular motors which contract your muscles, there are motors which copy (transcribe) your DNA into RNA and copy (translate) your RNA into protein, there are motors which transport biomolecules around in the cell. All of these motors share some common features:

1. They move along some linear track (microtubule, DNA, ...), hopping forward in discrete jumps between low-energy positions.
2. They consume energy (burning ATP or NTP) as they move, generating an effective force pushing them forward.
3. Their mechanical properties can be studied by seeing how their motion changes as the external force on them is changed.

For transcription of DNA into RNA, the motor moves on average one base pair (A, T, G, or C) per step; $\Delta x$ is about $0.34 \, \text{nm}$. The motor must cross an asymmetric energy barrier as it attaches another nucleotide to the RNA (Fig. 2.8). Wang and co‑authors (Fig. 2.9) showed that the motor stalls at an external force of about $27 \, \text{pN}$ (pico‑Newton).

---

## Problem

**(a)** At that force, what is the energy difference between neighbouring wells due to the external force from the bead? Let us assume that this stall force is what is needed to balance the natural force downhill that the motor develops to propel the transcription process. What does this imply about the ratio of the forward rate to the backward rate, in the absence of the external force from the laser tweezers, at a temperature of $300 \, \text{K}$?

*(The population in a well of free energy $G$ is proportional to $\exp(-G/k_B T)$, where $k_B = 1.381 \times 10^{-23} \, \text{J/K}$; we shall derive this in Chapter 6. Hints: If the population was in thermal equilibrium the net flux would be equal going forward and backward; the net flux out of a well is the population in that well times the rate; a given motor does not know whether it is part of an equilibrium ensemble.)*

The natural force downhill is coming from the chemical reactions which accompany the motor moving one base pair; the motor burns up an NTP molecule into a PP$_i$ molecule, and attaches a nucleotide onto the RNA. The net energy from this reaction depends on details, but varies between about $2$ and $5 \times 10^{-20} \, \text{J}$. This is actually a Gibbs free energy difference, but for this exercise treat it as just an energy difference.

**(b)** The motor is not perfectly efficient; not all the chemical energy is available as motor force. From your answer to part (a), give the efficiency of the motor as the ratio of force‑times‑distance produced to energy consumed, for the range of consumed energies given.

---

## Figures

**Fig. 2.7 Motor protein.** As it carries some cargo along the way (or builds an RNA or protein, ...) the molecular motor moves against an external force $f_\text{ext}$ and consumes ATP molecules, which are hydrolyzed to ADP and phosphate (P).

**Fig. 2.8 Effective potential for moving along DNA.** The energy (or rather the Gibbs free energy) for the molecular motor as a function of distance along the DNA. The motor is in a low‑energy state just after it transcribes one nucleotide into RNA. The energy barrier $V$ needs to be crossed in order to transcribe the next nucleotide. The energy asymmetry $\delta$ is a sum of contributions from the bonding of the RNA nucleotide, the burning of ATP, and the detachment of the apparatus at the completed end. The experiment changes this asymmetry by adding an external force tilting the potential to the left, retarding the transcription.

**Fig. 2.9 Laser tweezer experiment.** The laser beam is focused at a point (the *laser trap*); the polystyrene bead is pulled (from dielectric effects) into the intense part of the light beam. The *track* is a DNA molecule attached to the bead, the motor is an RNA polymerase molecule, and the force is applied by a glass cover slip to which the motor is attached. As the motor copies DNA onto RNA, it pulls the DNA track toward itself, dragging the bead out of the trap, generating a force resisting the motion.

> Many of the models for these motors are based on Feynman’s Ratchet and pawl discussion [61, I.46], where he (presciently) speculates about how gears and ratchets would work on a molecular level.

## Solution
**（a）外力造成的势阱能量差及正反向速率比**

1. **外力导致的相邻势阱能量差**  
   外力 $f_{\text{ext}} = 27\ \text{pN} = 27 \times 10^{-12}\ \text{N}$，每步位移 $\Delta x = 0.34\ \text{nm} = 3.4 \times 10^{-10}\ \text{m}$。外力倾斜势能面所引起的相邻势阱能量差为  
   $$
   \Delta E = f_{\text{ext}} \cdot \Delta x = 27 \times 10^{-12} \times 3.4 \times 10^{-10} = 9.18 \times 10^{-21}\ \text{J}.
   $$

2. **自然下坡力对应的能量不对称性**  
   在失速条件下，外力恰好平衡分子马达自身产生的“自然下坡力”，因此马达由化学能驱动的内在能量不对称性 $\delta$ 等于外力引起的能量差：  
   $$
   \delta = \Delta E = 9.18 \times 10^{-21}\ \text{J}.
   $$

3. **无外力时正向速率与反向速率之比**  
   假设马达在两个相邻势阱间的正向跃迁速率为 $k_+$，反向跃迁速率为 $k_-$。在热平衡系统中，井中布居数正比于 $\exp(-G/k_\text{B}T)$，且净通量为零，此时速率比满足 $k_+/k_- = \exp(\Delta G/k_\text{B}T)$。  
   本题的马达虽非平衡，但其“内在”的化学驱动可等效为一个大小为 $\delta$ 的自由能差。在失速外力下，总有效能量差 $\delta - f_{\text{ext}}\Delta x = 0$，故正、反向速率相等。去掉外力后，正反向速率比由内在能量不对称性 $\delta$ 决定：  
   $$
   \frac{k_+}{k_-} = \exp\!\left(\frac{\delta}{k_\text{B}T}\right).
   $$  
   已知 $k_\text{B} = 1.381 \times 10^{-23}\ \text{J/K}$，$T = 300\ \text{K}$，  
   $$
   k_\text{B}T = 1.381 \times 10^{-23} \times 300 = 4.143 \times 10^{-21}\ \text{J},
   $$  
   $$
   \frac{\delta}{k_\text{B}T} = \frac{9.18 \times 10^{-21}}{4.143 \times 10^{-21}} \approx 2.216,
   $$  
   $$
   \frac{k_+}{k_-} = e^{2.216} \approx 9.2.
   $$  
   **答：** 正向速率约为反向速率的 **9.2 倍**。

---

**（b）分子马达的效率**

马达将化学能转化为机械功的效率定义为  
$$
\eta = \frac{\text{输出的机械功}}{\text{消耗的化学能}}.
$$  
输出的最大机械功对应失速力乘以步长（即马达能对抗的最大机械功）：  
$$
W_{\text{mech}} = f_{\text{stall}} \times \Delta x = 9.18 \times 10^{-21}\ \text{J}.
$$  
消耗的化学能 $\Delta G_{\text{chem}}$ 范围为 $2 \times 10^{-20}\ \text{J}$ 到 $5 \times 10^{-20}\ \text{J}$。效率分别为  
$$
\eta_{\text{max}} = \frac{9.18 \times 10^{-21}}{2 \times 10^{-20}} = 0.459 \approx 46\%,
$$  
$$
\eta_{\text{min}} = \frac{9.18 \times 10^{-21}}{5 \times 10^{-20}} = 0.1836 \approx 18\%.
$$  
**答：** 马达的效率约在 **18% 到 46%** 之间。

