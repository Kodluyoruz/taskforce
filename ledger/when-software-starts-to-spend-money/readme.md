# When software starts to spend money

**Why this matters:** The next wave of software will not just read on-chain data. It will try to spend real money.

An **AI agent** is software that uses a language model to plan and take actions on its own, and agents are visibly moving from chatting to acting: trading helpers watch markets and draft swaps, payment agents pay invoices, treasury copilots prepare transfers for teams. Developers like you will build and deploy these systems, and some of you already do.

Here is the danger. To act on-chain, an agent must sign, and the tempting shortcut is to hand it a private key in a **hot environment**: any internet-connected machine, whether a server, a laptop, or a cloud secret store. Now count the ways that can fail:

- **prompt injection** — hidden text in a web page or document that tricks the agent into a harmful action
- **a bug** in one of the agent's tools
- **a plain model mistake** with the wrong amount, address, or chain
- **a malicious package** hidden in the agent's dependencies, which after Module 1 should sound familiar

Any one of these can become a signed transaction. You met this failure in Module 1: a software wallet is weak because its keys live on a connected machine, and an agent holding a raw key is the same problem, only automated, faster, and always online. It signs at machine speed, it never sleeps, and it never gets suspicious. Recall that the chalk attack needed a human to eventually click something; an agent removes even that pause.

So the real question is not whether agents will touch money, because they will, and soon. The real question is: **what can an agent do without you noticing?**

> **Key idea:** An agent with a raw private key is the software-wallet problem from Module 1, running at machine speed, always online.
