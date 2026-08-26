# Approvals, allowances, and drainer patterns

**Why this matters:** Many drained wallets were never hacked. The owner signed the permission that moved the funds.

## A Short Story

### Incident file · September 6, 2023 — $24 million for two signatures

A wallet beginning `0x13e382` held a quiet fortune in staked Ethereum: 9,579 stETH and 4,851 rETH, about $24.2 million. Its owner clicked a link to what looked like a legitimate site (the analysts at Scam Sniffer later tied the operation to a network of phishing domains) and signed what appeared to be routine approvals. They were `increaseAllowance` transactions, granting a scammer's contract the right to spend those two tokens.

Here is the detail to internalize: **at the moment of signing, nothing moved.** No funds left, no alarm fired, the portfolio looked untouched. The theft executed later, off the standing permission, and $24.23 million drained in the follow-through. In a strange coda, the thief returned about $9.3 million in DAI ten months afterward; nobody knows quite why, and the victim had no way to plan on it.

An approval moves nothing today and everything tomorrow. That is the entire lesson below, paid for in advance by someone else.

*Sources: CryptoPotato · crypto.news · BeInCrypto follow-up*

---

To use most dApps, you grant **approvals**. An approval is an on-chain permission that lets a contract spend a token from your address, and the spending limit is called the **allowance**. This is normal and necessary; a DEX cannot swap your tokens unless you first allow it to move them. The developer analogy is an OAuth scope: you grant an app defined power over your account, and you should ask the questions you'd ask there. *How much power? Until when?*

**Trap one is the unlimited allowance.** Many dApps request the maximum possible allowance so you never pay gas for a second approval, which is convenient and dangerous in equal measure, because the permission never expires. It stays active until you revoke it, and if that contract is malicious or gets exploited next year, it can drain your entire balance of that token in one transaction — exactly the mechanism from the incident above.

`[[ANIM:allowance]]`

**Trap two catches experienced users.** `Permit` is a pattern that sets an allowance with a *signature* instead of a transaction: you sign a message, nothing moves, no fee is paid, and it feels harmless. But that signature can be submitted on-chain later, by someone else, to set an allowance and pull your funds. A signature that moves nothing today can authorize moving everything tomorrow, and **drainer sites**, malicious dApps built to harvest approvals and signatures, depend on exactly that false sense of safety. This is why you read what you sign even when it "does nothing".

## Your standing rules

- **Prefer limited allowances**, approving what this action needs rather than the maximum.
- **Review your active approvals regularly** and revoke the ones you no longer use; block explorers and allowance tools list every approval your address has granted, and the review takes ten minutes a month.
- **Know where the risk lives:** connecting your wallet to a site is safe, since it only shares your address. Signing is the moment of danger.
- **The master rule:** if you do not understand what you are signing, do not sign.

**Check yourself, without scrolling up:** what did the `0x13e382` victim actually sign, and why did the portfolio look untouched afterward? If you can answer in one sentence, this lesson is yours.
