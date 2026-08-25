# The device screen is the only screen you trust

Here is the rule, stated first: **trust only the device screen. Verify every address and every transaction there before you approve.**

The reason is the Bybit story from this module's incident file, scaled down to one laptop. Your computer screen is not a trustworthy display; malware that controls your browser or OS can draw whatever it wants: a fake wallet window, a fake address, a fake amount. And the more precisely it knows what you expect to see, the better the fake.

Your Ledger device's screen is different in kind, not in degree. The device drives that screen itself, from inside the boundary, and what it shows you is what the Secure Element will actually sign. Ledger's materials call it the **Secure Screen**, and the name is earned: Module 2 explained why nothing outside the device can redraw it.

A developer way to remember it: your computer screen is client-side input, the device screen is the server-side check, and only one of them is authoritative.

`[[ANIM:lying-screen]]`

Practice the rule first on the **receive flow**, the steps for getting an address to receive funds. In Ledger Wallet, open the account and request a receive address, then verify that address **on your device screen**, not only in the app, comparing character by character before you share or use it.

Why that level of paranoia over a receive address? Recall the chalk incident from Module 1: the payload was a clipboard swapper, and modern swappers don't just replace your address with something random. They generate lookalike addresses matching the first and last characters of yours, because they know that's all most people check. **So never check only the ends.** Read a long middle section, or all of it.

Try it yourself, safely, right now:

`[[WIDGET:address-drill]]`

Make the habit automatic, starting with small amounts:

- **Receiving:** confirm the address on the device before sharing it.
- **Sending:** read the destination and amount on the device before approving.
- **Mismatch between app and device:** reject and investigate, because something on your computer is lying.

The habit costs thirty seconds; the attack costs the balance.

> **Key idea:** The computer screen can lie; the device screen shows what will really be signed. Verify there, every time.
