# Connecting to dApps

**Why this matters:** You will use dApps constantly as a developer, and the connection path decides how much risk you take on.

A **dApp** (decentralized application) is an app whose core logic runs in smart contracts on a blockchain: exchanges, lending platforms, NFT markets. You probably use several every week, and each one asks your wallet for signatures.

The usual way in is a wallet extension in your browser, and Module 1 covered why the browser is the weak link. Ledger Wallet offers a path that skips the extension entirely: the **Discover** section, a catalog of dApps inside the app itself. You open a dApp there and connect directly; you can open 1inch straight from Discover and trade from there, no extension involved.

The security question is always the same: what happens when the dApp wants something? Inside Discover, **every dApp action becomes a transaction**. A trade is a transaction, a deposit is a transaction, and even a **token approval** — permission for a contract to spend your tokens (an OAuth scope for money) — is a transaction. The dApp prepares it, Ledger Wallet passes it across the boundary, and nothing runs until you approve it on the device. The dApp proposes; your device approves.

Be equally clear about what this does **not** change. Discover removes the browser extension from the path. It does not audit dApps for you, and a dApp with a malicious contract is exactly as dangerous inside Discover as outside it. The guarantee is narrower and stronger: every action must stop at your device and wait for your decision. How to read those device screens and judge each approval is the whole subject of Module 5.

> **Key idea:** Discover connects you to dApps without a browser extension, and every dApp action still becomes a transaction that your device must approve.
