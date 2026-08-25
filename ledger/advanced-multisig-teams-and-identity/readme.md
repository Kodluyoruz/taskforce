# Advanced: multisig, teams, and identity

> **Lesson 0 — Module overview**

**Key Takeaway:** One key protects a person. A team needs M-of-N control, and a platform that keeps every key behind hardware.

**Goal:** You can explain how M-of-N multisig removes single points of failure and trust. You can evaluate Ledger Multisig as the treasury setup for a team.

## A Short Story

### Incident file · March 2022 — a PDF that emptied a bridge

A senior engineer at Sky Mavis, the studio behind Axie Infinity, was approached on LinkedIn about a job. There were multiple interview rounds and the process felt real, and at the end came an offer letter with a generous package, delivered as a PDF. The PDF carried spyware. It was the fake-recruiter play from Module 1, run by Lazarus Group according to the U.S. Treasury, except this time the target wasn't one developer's wallet. It was the Ronin bridge, the contract holding the game economy's funds.

On paper, Ronin was a multisig: nine validator keys, any five required to move funds. In practice the design had quietly collapsed. Sky Mavis itself operated four of the nine validators, and a fifth, belonging to the Axie DAO, had whitelisted Sky Mavis to sign on its behalf back in November 2021, a gas-relief favor nobody ever revoked. From one engineer's compromised machine, the attackers reached infrastructure that could produce five signatures. They took 173,600 ETH and 25.5 million USDC, more than half a billion dollars at the time, and the theft sat unnoticed for six days until a user complained they couldn't withdraw.

Nine keys on paper. Five reachable through one inbox. Multisig protects a treasury exactly to the degree that the keys are genuinely independent, which is the whole subject of this module.

*Sources: The Block · The Hacker News*

## Lessons in this module

1. [Why one key is not enough for a team](../why-one-key-is-not-enough-for-a-team)
2. [Ledger Multisig](../ledger-multisig)
3. [A team signing workflow](../a-team-signing-workflow)
4. [Keys as identity](../keys-as-identity)

---

**Next:** Module 8 wraps up the course: your certificate, and the steps to claim your $10 BTC voucher.
