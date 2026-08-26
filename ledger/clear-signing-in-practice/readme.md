# Clear Signing in practice

**Why this matters:** You cannot verify a transaction you cannot read.

Hardware signers had a long-standing gap, and Bybit made it famous. The device screen was honest but often unreadable: a complex contract call appeared as raw **calldata**, the encoded bytes that tell a contract what to do. Approving data you cannot read is called **blind signing**. The screen told the truth, but the truth looked like `0x095ea7b3…`, so people clicked approve on faith, and attackers built an entire industry on that click. Bybit's signers were shown a hash. They approved the hash. It cost $1.4 billion.

**Clear Signing** closes the gap. Instead of raw bytes, the device shows human-readable details on the one screen you trust: the action, the amounts, the recipient, the fees. Ledger's touchscreen signers support it, as Module 4 covered.

`[[ANIM:blind-clear]]`

How it works, in short: protocol authors write an **ERC-7730** file, open metadata that maps their contract's functions to readable fields, and publish it to an open registry now stewarded by the Ethereum Foundation. At signing time your device uses that metadata to render the transaction in plain language. Think of an API schema for transactions. And one property matters more than the rest: **Clear Signing never modifies the transaction.** It adds a display layer, nothing more; the signed bytes stay exactly the same.

Toggle the difference yourself:

`[[WIDGET:clear-toggle]]`

The feature only protects you if you actually read it, so build the habit: every field, every time, without pattern-matching "this looks like my usual swap." Give extra attention to any **Approve** action, since the approvals lesson explains the standing power it grants. Check the fee and the network too, because a strange fee is a warning.

And one hard rule, the single most important sentence in this course. **If a complex contract call still shows only a raw hash, treat that as a stop signal.** It means no readable description exists for what you are about to authorize, and approving raw data on faith is exactly the blind spot the biggest theft in crypto history walked through. Reject, and find out why before you try again.

> **Key idea:** Clear Signing turns raw calldata into readable fields. Read all of them, and treat a raw hash as a stop signal.
