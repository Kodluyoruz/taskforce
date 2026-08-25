# The Ledger Developer Portal

Every developer path into this ecosystem starts at one address: the **Ledger Developer Portal**, `developers.ledger.com`. It is the documentation hub for the stack you just mapped, and it covers four areas:

- **device app development** (native apps for the signer, written in C or Rust, running behind the boundary)
- **Clear Signing integration** (making your protocol's transactions readable, the contribution the next-but-one lesson walks through)
- **wallet and dApp integration** (the kits the next lesson tours)
- **AI tools**, which the closing module covers

Where should you start? Match the track to what you are building:

| You are building... | Start with... |
|---|---|
| A dApp that should support Ledger users | Wallet and dApp integration |
| Support for a new blockchain | Device app development (C or Rust) |
| A protocol whose transactions users will sign | Clear Signing integration |

Two honest notes before you dive in. There is **no public REST API** for controlling the Ledger Wallet app, so integrations go through the documented kits and libraries — plan your architecture around them rather than around a remote endpoint. And the portal is documentation while the code lives on `github.com/LedgerHQ`, so you will move between the two constantly; keep both open.

**A practical first hour:** open the portal, pick your track from the table, and skim that track's getting-started guide. Whatever you pick, you will meet one library almost immediately. That is the next lesson.

> **Key idea:** `developers.ledger.com` is the single entry point. Pick your track there: device apps in C or Rust, Clear Signing, or wallet and dApp integration.
