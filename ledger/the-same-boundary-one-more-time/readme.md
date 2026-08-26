# The same boundary, one more time

**Why this matters:** You do not need a new security model for AI agents. The model you already learned scales cleanly.

Place the agent where it belongs. The signing boundary is the line between the machine that prepares a transaction and the environment that verifies, approves, and signs it, and that line does not move for agents. The agent lives on the **untrusted side** (connected, fast, automated) while you and your signer stay on the **trusted side**: offline keys, a screen you trust, a human decision.

Ledger built tooling for exactly this split. In mid-2026, Ledger launched the **Ledger Agent Stack**, an open-source toolkit for agents that propose rather than control. It works with shell-capable coding agents such as Claude Code, Codex, and Cursor, and you'll find it in the AI tools section of the Ledger Developer Portal.

The stack has five components:

- Device Management Kit Skills
- Ledger Wallet CLI
- Ledger Enterprise CLI
- Ledger Enterprise Multisig CLI
- Hardware Auth Apps (OpenPGP, FIDO2 Security Key)

The split of powers is strict:

| An agent can | An agent cannot |
|---|---|
| Read your balances | Move your funds |
| Prepare transactions | Approve anything |
| Recommend actions | See your keys |

Every fund-moving action requires physical confirmation on a Ledger signer. Keys never leave the hardware: the same guarantee you met in Module 2. The agent researches, the device signs, you decide. Ledger states the model in one line: **agents propose, humans approve, the Ledger signer enforces.**

Ledger describes this as the first delivery of its AI security roadmap, with agent identity, agent intents and policies, and proof of human still to come.

> **Key idea:** Agents get the untrusted side of the boundary: they prepare and propose, while approval stays with a human and hardware.
