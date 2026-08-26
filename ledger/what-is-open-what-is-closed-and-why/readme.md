# What is open, what is closed and why

**Why this matters:** You trust this stack with real money, so you should know exactly which parts you can inspect.

Is Ledger open source? The honest answer: most of it is, one part is not, and the closed part exists for a legal reason rather than a marketing one. Here is the map.

## Open: you can read this code today

The **Ledger Wallet app** is open source under the **MIT license**, the permissive one: anyone can read, reuse, and modify the code. The repo is `github.com/LedgerHQ/ledger-live` (it keeps the app's former name). The **device apps** (the small programs on the signer that each handle one chain) and the **Secure SDK** that builds them are open on `github.com/LedgerHQ` as well.

## Partially open: Ledger OS

Ledger OS runs inside the Secure Element, and parts of it, such as the command dispatcher, are published for review in the `ledger-secure-os` repo. The low-level code that talks to the chip's hardware is **not** published, and the reason is a contract, not a choice: an NDA with **STMicroelectronics**, the chip maker, legally prevents Ledger from publishing it. This is normal for secure hardware; you cannot read the internal firmware of an HSM either. You're entitled to find it unsatisfying anyway; we do, a little.

It is still a meaningfully better position than fully closed alternatives, and the gap is covered by three substitutes for "read the code":

1. **Independent certification.** The Secure Element in the touchscreen signers is certified CC EAL6 under Common Criteria, an independent evaluation standard.
2. **Ledger Donjon.** The standing red team you met in Module 2, paid to attack the company's own products before criminals do. Findings drive firmware updates.
3. **A public bug bounty** at `donjon.ledger.com/bounty`, rewarding anyone who finds and reports a flaw.

## What about past incidents?

Ledger states that no Ledger device has ever been hacked, noting that this is the company's own claim. The ecosystem around the devices has had incidents, and you should know them:

- customer-data leaks through e-commerce systems in 2020 (the breach that fed the mailed-fake scam in Module 4) and through the third-party partner Global-e in January 2026
- in December 2023, a supply-chain attack pushed malicious code into the Connect Kit dApp library. Ledger replaced the malicious code within hours and pledged to compensate affected users.

None of these compromised a device or the app. The pattern across all of them is the one this course keeps finding: **the endpoint and the supply chain are the attack surface**, which is why verification happens on the device.

> **Key idea:** Trust the open parts by reading them; trust the closed part through certification, constant attack testing, and a public bounty.
