# Ways to contribute

**Why this matters:** The safest ecosystem is one where the builders, meaning you, also patch its weak points.

You now know the map, the portal, and the kits. The last question is how you give something back, and why you would. Start with the contribution that has the biggest impact, because it also has the best story.

## 1. Add Clear Signing support for your own protocol

Module 5 taught the rule: never approve what you cannot read. As a protocol developer, you decide whether your users can follow that rule, because if your contract has no metadata, their signers can only show raw transaction data, and you saw in the Bybit incident what approving raw data can cost.

The fix is an **ERC-7730 descriptor**: a JSON file that maps your contract's functions and parameters to human-readable labels. Think of an OpenAPI spec, but for what the signer's screen displays. You write it once and submit it to the open registry at `github.com/ethereum/clear-signing-erc7730-registry`.

Ledger proposed ERC-7730 in 2023–2024, and since May 2026 the Ethereum Foundation stewards the standard and its registry at `clearsigning.org`. So this is a neutral, ecosystem-wide standard rather than a Ledger-only format. Two properties matter: the descriptor never modifies the transaction, only the display, and the signer itself verifies what it shows. Once your descriptor is merged, every supporting signer can display your contract calls in plain language. One JSON file, and your users stop signing blind.

## 2. Build or review device apps

Device apps are open and written in C or Rust. You can add support for a chain, or review existing apps; reviews work like pull-request approvals, where every extra qualified reader lowers risk.

## 3. Contribute to the open repos

The Ledger Wallet app, the Secure SDK, and the device apps accept issues and code on `github.com/LedgerHQ`.

## 4. Report what you find

Found a flaw? Report it through the bounty at `donjon.ledger.com/bounty` and earn a reward, instead of watching someone exploit it later.

---

None of this is charity. Your users sign on this stack every day, and every descriptor, review, and report makes the ecosystem safer, including for them.

> **Key idea:** One JSON file, an ERC-7730 descriptor, lets supporting signers show your contract calls in plain language. Write it and submit it.
