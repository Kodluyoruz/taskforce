# Daily operations: verifying what you sign

> **Lesson 0 — Module overview**

**Key Takeaway:** Verification is a daily habit: confirm the address on the device, read every field, screen every transaction, and never approve blind.

**Goal:** You run a verify-first routine on every transaction: address checks on the device, full Clear Signing reads, and Transaction Check as a second layer. You also keep token approvals limited and clean.

## A Short Story

### Incident file · February 21, 2025 — three signers, three hardware devices, $1.4 billion gone

Bybit, one of the largest exchanges in the world, ran its Ethereum cold wallet the way a careful team should: a Safe multisig requiring three approvals, with signers using hardware devices. The attackers (Lazarus Group, per the FBI) never touched the wallet or the keys. They compromised a Safe{Wallet} developer's machine and slipped malicious JavaScript into the web interface, code that activated only when Bybit's specific signers loaded the page. Every other Safe user on earth saw a normal interface.

When Bybit's team gathered to approve what looked like a routine internal transfer, each signer's laptop showed exactly that. The payload underneath was a `delegatecall` that replaced the wallet's logic contract, handing the attackers control of the vault. Three experienced people looked at three lying screens, confirmed on their hardware, and 401,347 ETH left the wallet: over $1.4 billion, the largest crypto theft in history.

The hardware was present. The multisig worked as configured. What failed was the one step this module exists to teach: the transaction the devices were being asked to sign was never independently verified on a screen the attacker couldn't reach, because the flow surfaced it in a form no human could read. Sit with that for a second before the first lesson, because everything below is designed to make you the person who catches it.

*Sources: NCC Group technical analysis · Blockaid · Huntress*

## Lessons in this module

1. [The device screen is the only screen you trust](../the-device-screen-is-the-only-screen-you-trust)
2. [Clear Signing in practice](../clear-signing-in-practice)
3. [Transaction Check: automated screening before you sign](../transaction-check-automated-screening-before-you-sign)
4. [Approvals, allowances, and drainer patterns](../approvals-allowances-and-drainer-patterns)
5. [The signing checklist](../the-signing-checklist)

---

**Next:** In Module 6, you switch from user to builder: Ledger's open-source ecosystem and the developer tools for building on it.
