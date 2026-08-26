# Ledger Sync: keeping accounts in sync

**Why this matters:** You will run Ledger Wallet on a laptop and a phone, and both should show the same state.

**Ledger Sync** keeps your Ledger Wallet instances in sync. Add an account on the desktop and it appears on your phone; your account list and portfolio state stay identical everywhere, refreshing roughly every 10 seconds, with no manual export and no copy-paste of account lists.

The encryption design is the part worth a developer's attention. The **Ledger Key Ring Protocol** derives the encryption keys from your hardware signer, and your data is end-to-end encrypted: encrypted before it leaves the app, decryptable only by your own setup. Ledger states that no one except the owner of the hardware signer can read this data, not even Ledger. Think of a config-sync service where the decryption key lives in your HSM instead of your cloud account.

Two practical notes: turning on Ledger Sync requires a Ledger device, and restoring sync on a new setup requires a device with the same seed phrase. So your signer does more than sign transactions; it is also the root of the keys that protect your synced data.

> **Key idea:** Ledger Sync shares your accounts across apps, end-to-end encrypted with keys derived from your own signer, and unreadable even to Ledger, per Ledger.
