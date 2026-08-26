# Why hardware, even when you already know crypto

> **Lesson 0 — Module overview**

**Key Takeaway:** You already know crypto. This module shows why that is not enough, and it introduces the signing boundary, the core idea of the whole course.

**Goal:** You can explain why software-only custody fails against modern attacks, and define the signing boundary in one clear sentence.

## A Short Story

### Incident file · September 8, 2025 — the afternoon chalk turned hostile

On September 5, someone registered the domain `npmjs.help`. Three days later, an email from that domain reached Josh Junon, the maintainer who publishes `chalk`, `debug`, and a couple dozen other utilities that sit near the bottom of the JavaScript dependency tree. The email warned that his npm account would be locked unless he updated his two-factor settings within 48 hours. It looked routine, and he clicked.

Within about sixteen minutes, malicious versions of at least 18 packages were live: packages downloaded a combined 2.6 billion times per week. The payload was not ransomware and never touched npm's servers. It was a crypto-clipper: browser-side code that hooked wallet APIs and quietly replaced destination addresses with attacker addresses at the moment a transaction was being prepared. Junon owned the mistake publicly within hours, the community rolled the packages back, and actual losses stayed small. But for one afternoon, the plumbing of half the internet wanted your wallet address, and the only display it couldn't redraw was the screen of a hardware signer.

*Sources: The Hacker News · StepSecurity · Sygnia*

## Lessons in this module

1. [Knowing crypto doesn't protect your crypto](../knowing-crypto-doesnt-protect-your-crypto)
2. [Why a software wallet can't fully protect you](../why-a-software-wallet-cant-fully-protect-you)
3. [The signing boundary](../the-signing-boundary)
4. [Your personal threat model](../your-personal-threat-model)

---

**Next:** Module 2, *Keys, seeds, and the Secure Element*, opens the hardware side of the boundary: where your keys come from, and how the chip keeps them isolated.
