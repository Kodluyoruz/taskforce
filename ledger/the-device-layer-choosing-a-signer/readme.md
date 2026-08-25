# The device layer: choosing a signer

> **Lesson 0 — Module overview**

**Key Takeaway:** Compare the Nano Gen5, Flex, and Stax: same security core, different comfort. Plus the Recovery Key card and Ledger Sync.

**Goal:** You can compare the three touchscreen signers, explain what Ledger Recovery Key and Ledger Sync add, and pick the signer that fits how you work.

## A Short Story

### Incident file · June 2021 — the "replacement device" in the mail

In December 2020, a breach of Ledger's e-commerce database put the names and mailing addresses of roughly 270,000 customers on a hacking forum. The device security was never touched, but the customer list was out, and the following spring somebody put it to work. Ledger users began receiving packages: a shrink-wrapped Nano X in convincing retail packaging, plus a letter on company letterhead explaining that their data had leaked and this was a secure replacement device.

The device itself had been opened and modified: researchers found a flash-drive implant wired onto the board, carrying a fake Ledger Live app. The enclosed instructions asked users to run the app and enter their 24-word recovery phrase to "migrate" to the new device. Anyone who did handed over the master secret from Module 2, in full, on paper terms.

Two details make this story worth your time. The tell was never the hardware, which looked professional; it was **the ask**, because nothing genuine ever needs your 24 words typed anywhere. And a tampered device fails the genuine check the moment it connects to the real Ledger Wallet app, which is exactly why the letter worked so hard to route victims around the normal setup flow.

*Sources: BleepingComputer · CoinDesk*

## Lessons in this module

1. [The three touchscreen signers](../the-three-touchscreen-signers)
2. [Same security core in all three](../same-security-core-in-all-three)
3. [Ledger Recovery Key: your spare key](../ledger-recovery-key-your-spare-key)
4. [Ledger Sync: keeping accounts in sync](../ledger-sync-keeping-accounts-in-sync)
5. [Same protection, different fit](../same-protection-different-fit)

---

**Next:** In Module 5, you put your signer to work: daily operations, and the incident that shows what skipping the routine costs.
