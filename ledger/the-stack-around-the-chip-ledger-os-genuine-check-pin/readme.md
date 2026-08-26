# The stack around the chip: Ledger OS, genuine check, PIN

**Why this matters:** A strong chip alone is not a secure product; the software and checks around it close the remaining gaps.

A Secure Element is a vault, and a vault still needs trusted software inside it, proof that nobody swapped it in transit, and a lock on the door. Ledger adds four layers around the chip:

| Layer | Job |
|---|---|
| **Ledger OS** | Runs each coin app in isolation |
| **Genuine check** | Proves the device and firmware are authentic |
| **PIN** | Stops anyone who physically takes your signer |
| **Ledger Donjon** | Attacks Ledger's products before criminals do |

**Ledger OS** is Ledger's own operating system, built only for its devices; not Linux, not Android. It manages keys and runs signing operations, nothing more. Each coin app (Bitcoin, Ethereum, and the rest) runs isolated from the others, like containers with no shared memory, so one app cannot read another's data or derive keys on another chain's paths. On source code: the coin apps are open source, while Ledger OS is only partially published under chip-vendor agreements. Module 6 tells that story in full, including the part you're entitled to find unsatisfying.

The **genuine check** is cryptographic attestation: the device proves it is real Ledger hardware running authentic Ledger firmware. When you connect, Ledger Wallet sends a challenge that only a genuine device can answer. The analogy is code signing: an OS verifies a binary's signature before running it, and Ledger Wallet verifies the device before trusting it. A tampered or counterfeit device fails this check the first time it connects, which is precisely why the mailed-fake scam you'll meet in Module 4 had to talk its victims out of connecting normally.

The **PIN** is the local lock: a code you choose at setup and enter on the device itself. Your computer never sees it; the device checks it internally. If someone steals your signer, the PIN stands between them and any approval. And unlike the PIN comparison in this module's incident file, the check runs inside a chip engineered not to leak it.

Finally, **Ledger Donjon** is the attack team you just met, turned inward. Its experts constantly attack Ledger's own devices and software, findings drive firmware updates, and a public bug bounty invites outside researchers to try as well. We find this the most reassuring layer of the four, and not because it implies the products are flawless. It implies the company assumes they aren't.

> **Key idea:** The chip guards the secret; isolated apps, attestation, a PIN, and constant in-house attack testing keep the whole device worth trusting.
