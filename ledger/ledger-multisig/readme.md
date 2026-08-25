# Ledger Multisig

**Why this matters:** You do not need to build team custody yourself. Ledger runs a multisig platform that uses the security features you already know.

Ledger's platform for shared funds is **Ledger Enterprise Multisig**, which Ledger also shortens to **Ledger Multisig**, as this course does. It is a self-serve multisig platform built on the **Safe protocol**, live at `multisig.ledger.com`; self-serve means you can create the account and start on your own.

The Safe protocol is an open smart-contract standard for shared accounts, used widely across EVM networks. Your multisig is a smart contract on-chain, and the co-signer list and threshold are rules inside that contract rather than settings on Ledger's servers. It is built for groups that govern shared funds: teams, DAOs, startups and scale-ups, corporate treasuries.

For you, the important part is familiar, because the platform combines the pieces from earlier modules and applies them to a shared account:

- Each co-signer approves on their **own Ledger device**, so every key stays behind its own boundary — precisely the independence Ronin lacked.
- Each co-signer reads the real transaction details on their own device via **Clear Signing**, so one poisoned browser cannot fool every signer — precisely the check Bybit lacked.
- **Transaction Check** can screen proposals before anyone signs, and the team can swap assets directly from the shared account.

## Where can you use it today?

| Status | Networks |
|---|---|
| **Live now** | Ethereum, Arbitrum, Base, Polygon, Optimism |
| **Coming, per Ledger** | Bitcoin, Solana |

When you evaluate it for your team, check three things:

- **Chains:** the EVM networks above are live, and Bitcoin and Solana are "coming" per Ledger, so don't build plans on them yet.
- **Devices:** every co-signer needs their own Ledger device, because a shared device would rebuild the single point of failure.
- **Pricing:** Ledger publishes it on the site, and it can change, so check the current numbers there.

> **Key idea:** Ledger Multisig is a self-serve, Safe-based platform that brings hardware-backed signing, Clear Signing, and Transaction Check to a team treasury.
