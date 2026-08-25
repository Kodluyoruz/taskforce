# One seed, many keys

**Why this matters:** Every security rule in this course exists to protect one small piece of data, and this lesson shows exactly what that data is.

Start at the bottom of the stack. A **private key** is the secret number that controls your crypto, and whoever knows it can move the funds, with no password reset and no support ticket standing in the way. Treat it like a production API key: possession equals full control.

From the private key, your wallet computes a **public key** using one-way math: easy to compute forward, practically impossible to reverse. Your **address** is a short, hashed form of the public key. Addresses you share freely; the private key, with no one.

Now the scaling problem. You will hold assets on several chains, with several accounts on each, and backing up hundreds of separate secret numbers safely is not realistic for anyone. Two standards solve this together, and both are older and better-tested than most of the code you depend on.

First, **BIP-39** encodes one master secret as words. A **seed phrase** is a list of common words, usually 12 or 24, that encodes one very large random number. The standard fixes a list of 2,048 words, each word maps to a number, and a built-in checksum catches copy mistakes. You'll meet other names for the same thing: some documents say "mnemonic", and Ledger's own interfaces say *Secret Recovery Phrase*. This course sticks with **seed phrase** throughout. Whatever the label, the words are not a login and Ledger keeps no copy of them. They are the master secret, written in a form a human can copy onto paper.

Second, **BIP-32** and **BIP-44** derive every key from that secret. This is **hierarchical derivation**: a tree of keys, all computed from one seed, deterministically, like a pure function. Same seed, same path, same key, every time, on any device.

```
seed phrase (12 or 24 words)
│
▼
master key
│
├── m/44'/0'/…   Bitcoin
│   ├── Account 0 → addresses
│   └── Account 1 → addresses
├── m/44'/60'/…  Ethereum
│   └── Account 0 → addresses
└── m/44'/…      other chains
```

A path like `m/44'/60'/0'/0/0` selects one branch of the tree, in this case the first Ethereum address. The numbers pick the chain, the account, and the address; the format comes from BIP-44.

This is why one backup restores everything. Lose the device, keep the words, and a new signer regenerates the exact same tree. It also sets the security goal for the whole course, and it's worth saying plainly: **protect one secret extremely well, instead of many secrets poorly.**

> **Key idea:** Your seed phrase is the one master secret; every key and address is derived from it, so guarding one secret guards everything.
