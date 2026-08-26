# Signing without exposing the key

**Why this matters:** This flow is why a hacked computer still cannot steal your keys. It is the centerpiece of the whole security model, so take it slowly.

Here is what happens when you send crypto with a Ledger device. Six steps, and the private key stays inside the Secure Element for all of them.

1. **Prepare.** The Ledger Wallet app (Ledger's companion app on your computer or phone) builds the unsigned transaction: recipient, amount, network fee, chain data. The app does all the internet work; the device itself needs no connection.
2. **Hand over.** The app sends the unsigned transaction to your device. Nothing secret has moved yet, because an unsigned transaction is public information.
3. **Display.** The device shows the transaction details on its own screen, which it drives directly. Malware on your computer cannot redraw it.
4. **Approve.** You read the details and confirm on the device itself, physically. No remote code can press that button.
5. **Sign inside.** The Secure Element computes the digital signature inside the chip: math that proves the key holder approved exactly this data, without revealing the key. Anyone can verify the signature with your public key.
6. **Return.** Only the signature leaves the chip. The app attaches it to the transaction and broadcasts it.

`[[ANIM:signing-loop]]`

Now notice everything that **did not** happen, because the absences are the security model. The private key never touched your internet-connected computer. It was not exported, not copied, not transmitted in encrypted form, not "synced". It was generated on the device and it is used on the device, and the signature is the only thing that ever exits.

This changes what malware on your laptop can achieve. It can prepare and propose any transaction it likes, but it cannot sign one, because signing requires your physical approval on hardware it does not control. What malware *can* still do is show you a lie and hope you approve a bad transaction on the device without reading it. Defending that one moment, the read before the press, is the entire subject of Module 5, and the incident that opens that module shows what it costs when the moment is skipped.

This is the signing boundary from Module 1, made physical: the transaction crosses into the chip, and only the signature crosses out.

> **Key idea:** The unsigned transaction goes in and only the signature comes out. The private key never leaves the chip at any step.
