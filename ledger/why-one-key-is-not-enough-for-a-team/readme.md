# Why one key is not enough for a team

**Why this matters:** A personal security setup does not scale to company funds. The risks change when many people depend on one key.

So far this course was about one person: your seed phrase, your device, your boundary. A team changes the problem.

Picture a startup holding 400,000 USDC as its **treasury**, the shared crypto fund a team controls, with one founder keeping the only key on her Ledger device. Her personal security may be excellent while the company's security is not, because a single key is a single point of failure and a single point of trust at once. For shared funds that creates four serious risks:

- **Phishing** — one tricked person signs one bad transaction and drains everything.
- **Loss** — a gone device plus a gone backup freezes the treasury forever.
- **Departure** — the key holder leaves and the company must keep trusting someone who left.
- **Abuse** — a rogue holder takes the funds and nobody can slow the transfer.

**Multisig** (multi-signature) shares control of one account across several keys. The pattern is called **M-of-N**: N keys exist, and any M of them must sign before funds move. M is the threshold (you may also see "quorum"), and a **co-signer** is a person holding one of the keys, in this course on their own Ledger device. Don't confuse *co-signer* with *Ledger signer*, which is the device itself.

A concrete **2-of-3**: Ana, Ben, and Chioma each hold one key on their own device, and the shared account needs any two signatures. Ana proposes a payment and alone can move nothing. Ben reviews and signs, so two of three is reached and the payment executes. Chioma is offline that week and the team still works. A key is lost or a person leaves? The other two still control the funds and can add a replacement key.

You already use this model in Git: branch protection blocks direct pushes to `main`, and merging needs required approvals. **Multisig is branch protection for money.** The Ronin story shows the corollary, though: the protection is only as real as the independence of the approvers, and five keys behind one organization's infrastructure were never really five keys.

> **Key idea:** With M-of-N control, no single person can lose, freeze, or steal the treasury alone, provided the keys are genuinely independent.
