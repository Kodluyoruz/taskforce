# One app for your whole portfolio

**Why this matters:** Every action on the Ledger platform starts in one app, so knowing that app makes the rest of this course concrete.

In Modules 1 and 2 you saw where your keys live: inside the Secure Element, behind the boundary. This lesson covers the other side: the software you'll actually look at every day.

**Ledger Wallet** is Ledger's companion app and the control center of the platform. Until October 2025 it was called *Ledger Live*, and older tutorials still use that name; it is the same app, renamed. From here on, this course always says **Ledger Wallet**.

Think of it as one admin dashboard in front of many backends. Each blockchain is a separate backend with its own rules, formats, and tools, and the app puts a single interface in front of all of them. From that interface you can:

- manage and track **15,000+ coins and tokens across 50 blockchains**
- see your whole portfolio in one dashboard, with balances and performance per account and per chain
- buy, swap, stake, and earn (next lesson)
- connect to dApps (the lesson after)

The app runs on Windows, macOS, and Linux on desktop, and iOS and Android on mobile.

The single dashboard matters more than it sounds. A portfolio spread across Ethereum, Solana, and Bitcoin normally means three tools and three balance checks; here it is one screen. And the surface keeps growing (Ledger has been adding things like a crypto payment card, fiat top-ups, and perpetuals trading), but this course deliberately stays on the custody core, because that's the part that doesn't change with the product roadmap.

Now the part this course cares about most, stated once and precisely: **the app displays, tracks, and prepares. It never holds your keys, and it cannot sign anything by itself.** Signing stays on the device, exactly as Module 2 showed. Keep this division of labor in mind through the next two lessons, because every feature you're about to see obeys it.

One extra fact for developers: the app's code is fully open source, and Module 6 covers what you can build with it.

> **Key idea:** Ledger Wallet is the control center for your whole portfolio. It shows and prepares everything, but your keys never enter it.
