# Buy, swap, stake, earn

**Why this matters:** Convenience is the main reason developers stay on exchanges, and this lesson shows you can keep that convenience under self-custody.

Here is a familiar moment. You hold ETH and you want some SOL. On an exchange that trade takes a minute, because the exchange holds your keys and signs for you. Ledger Wallet gives you a similar flow with the opposite custody model: the keys stay yours, and nothing moves without your device.

The app offers four main actions:

| Action | What it means |
|---|---|
| **Buy** | Purchase crypto directly inside the app |
| **Swap** | Trade one token for another |
| **Stake** | Lock coins to help run a network and earn rewards |
| **Earn** | Earn yield on assets you already hold |

Who actually runs these services? Not Ledger alone. The app integrates **third-party providers**, independent companies that execute the service, directly into these flows. Swaps route through more than 15 providers, including Uniswap and 1inch, and the app compares rates across them so you can pick the best offer. Staking covers 30 networks, including Ethereum and Solana. If you've built payments, you'll recognize the aggregator pattern: one checkout, many gateways behind it.

The custody point is what separates this from the exchange it resembles. On an exchange, the platform signs with keys it controls. Here, every buy, swap, stake, or earn action produces a transaction, and that transaction must cross the boundary: the app prepares it, the provider quotes it, and **only your device can approve it**. You confirm on the device screen, or nothing happens.

One honest note: different providers quote different rates, the app puts them side by side, and the choice stays yours to make.

**Go deeper:** Ledger Academy's own guide to swapping securely through Ledger Wallet walks the same flow with current screenshots.
