# Transaction Check: automated screening before you sign

**Why this matters:** Even careful readers miss known scam patterns, so an automated second check earns its place.

Reading the screen is your first layer. **Transaction Check** is the second: an opt-in feature that screens a transaction for known threats before you sign it. It works on EVM transactions (Ethereum and EVM-compatible networks) and stays off until you enable it in Ledger Wallet.

**The flow:** you prepare a transaction as usual, and Ledger Wallet sends the unsigned transaction to independent threat-detection providers (Blockaid, Cyvers, and Tenderly), whose engines compare it against known threat patterns: drainer contracts, flagged addresses, suspicious behavior. Your device then shows the transaction type, a risk indication, and which provider ran the check, plus a QR code you can scan for the detailed report.

Notice what travels: the **unsigned** transaction, which is public information. Nothing is signed, nothing is broadcast, and your keys never leave the device, so you lose nothing by keeping it on.

Now the honest placement, because this is where tools get oversold. Transaction Check works like CI for your transactions: it runs automatically and flags known problems, and a green run never replaces review.

- **A warning means stop:** reject, investigate, and only then consider retrying.
- **"No risk found" is not a guarantee:** it means no known pattern matched, and brand-new scams are in nobody's database yet.
- **It never replaces reading the screen:** Clear Signing tells you *what the transaction does*, while Transaction Check tells you *whether it resembles known attacks*. You want both layers, for the same reason you want both tests and code review.

> **Key idea:** Transaction Check screens EVM transactions against known threats before you sign. It is a second layer that supports reading the screen, never a replacement for it.
