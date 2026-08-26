# What a Secure Element is

**Why this matters:** Your master secret must live on a physical chip somewhere, and the type of chip decides which attacks it can survive.

## A Short Story

### Incident file · 2019 — reading a PIN through a power trace

Ledger runs an internal attack team called the **Donjon**, and in 2019 that team pointed its lab equipment at a competitor's device, the Trezor One. The researchers measured the device's power consumption while it compared PIN digits, trained a model on those traces, and found they could recover a user's PIN in roughly five attempts on average, comfortably inside the sixteen tries the device allows before wiping itself. No screwdriver, no exotic exploit; just the physics of a general-purpose microcontroller leaking information about the secrets it processes. The Donjon disclosed the findings responsibly, and Trezor shipped a firmware mitigation in March 2019.

The episode is the cleanest demonstration you'll find of why *which chip* holds a secret matters as much as *whether* a chip holds it.

*Sources: Ledger Donjon write-up · Technical details*

---

Module 1 drew the boundary: secrets on one side, the internet on the other. That boundary needs a physical home, and in a Ledger device the home is a **Secure Element**: a class of chip built to protect small secrets even when a skilled attacker holds the hardware, alone, with lab equipment and time.

You already carry this chip class every day. Bank cards use a Secure Element to guard the payment key; biometric passports use one to guard identity data. Three attack families define what these chips are engineered against:

- **Physical attacks.** Opening the package and probing memory directly. A Secure Element adds shields and sensors that detect intrusion and lock down.
- **Side-channel attacks.** Exactly what the Donjon did above: measuring power draw or electromagnetic signals while the chip computes, then inferring the secret from those measurements. Ordinary chips leak because their power consumption changes with the bits they process. A Secure Element is engineered so the signals reveal nothing useful.
- **Fault injection.** Glitching the voltage or clock so the chip skips a security check. A Secure Element detects the glitch and refuses to continue.

Ledger's current touchscreen devices use a Secure Element certified **CC EAL6**, which means an independent lab evaluated the chip against attacks like these and rated its resistance. You don't have to take the vendor's word alone, and given that the vendor also employs the team that breaks other vendors' products, the claim comes with unusual receipts.

Compare the processor in your laptop:

| | Laptop or phone CPU | Secure Element |
|---|---|---|
| **Built for** | Speed; thousands of processes | Keeping small secrets |
| **Memory** | Shared across programs | Sealed inside the chip |
| **Physical attack defense** | Not a design goal | Shields, sensors, masked computation |
| **Where you meet it** | Your dev machine | Bank cards, passports, Ledger signers |

A general-purpose CPU is not badly built; it optimizes for the opposite goals, and those goals are perfect for compiling code and wrong for hiding a key. If you have worked with an HSM, the model transfers directly: **a Ledger signer is a small personal HSM.**

> **Key idea:** A Secure Element is a chip built to keep secrets under physical and side-channel attack, a job a laptop CPU was never designed to do.
