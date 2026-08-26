# Your personal threat model

**Why this matters:** You cannot choose the right protection until you know exactly what you are protecting.

A **threat model** is a short, honest answer to three questions: what am I protecting, from whom, and how bad is failure? Security teams write them for production systems, and your crypto deserves the same treatment, because keys control money and a theft has no rollback and no support ticket.

Start with the one question this whole module points to: **"If this laptop is fully compromised today, what do I lose?"** Don't ask whether it could happen. Assume it happened. The malware now has your user account, your files, your clipboard, and your logged-in browser; count the damage.

A key is **hot** when it lives on a device that connects to the internet: a laptop, a phone, a cloud backup. Hot keys are the ones inside the blast radius of that question.

## A ten-minute inventory

Open a note and make three columns:

| Wallet or key | What it controls | Hot? |
|---|---|---|
| Browser extension wallet | trading funds and DeFi positions | Yes |
| Mobile wallet | small daily spending balance | Yes |
| Key file in an old backup | forgotten test funds — check! | Yes |

Include the quiet places, because attackers search them and your inventory should too: old exported keys, a key pasted into a notes app, a message to yourself in chat, `.env` files in abandoned projects.

Then read the result calmly. The goal is not fear, and it is not zero risk, which doesn't exist. The goal is a decision made on purpose: which funds are acceptable to keep hot, and which deserve a hardware boundary. For what it's worth, our own split is roughly two weeks of spending money hot and everything else behind the device. That ratio is a judgment call rather than a rule, and yours might reasonably be different. The point is that it should be a number you chose, not a number that accumulated.

One practical note before you move on: learners who finish the course and get a Ledger signer receive a **$10 BTC voucher**. Module 8 has the details.

> **Key idea:** Assume the laptop is compromised, count what you would lose, and decide on purpose what stays hot.
