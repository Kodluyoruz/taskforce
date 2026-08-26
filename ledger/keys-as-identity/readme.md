# Keys as identity

**Why this matters:** In a team, your device-held key stops being only a security tool. It becomes your work identity for treasury actions.

A signature proves exactly one thing: the signer controls a specific key. Inside a team, that proof turns into identity. When you approve a treasury action, your key signs it, and the chain records the signature forever: *this key approved this transaction, at this time*.

Map keys to people and the team gains an **audit trail**, a permanent record of who approved what that nobody can edit later. When a question surfaces months on, such as who released that payment, the answer sits on-chain. Developers know this pattern already: a signed Git commit proves which developer made a change, and a signed treasury transaction proves which key holder approved a payment.

Hardware makes the identity stronger. A password can be shared, stolen, or used quietly by malware, while a device approval is a deliberate physical act behind the boundary, so "this key signed" comes very close to "this person approved, on their own hardware."

Stay precise about the limit, though: **a signature proves key control, not legal identity.** The chain shows keys; your team keeps the mapping to names.

And keys-as-identity is where the story goes next. Ledger's AI security roadmap points toward identity for AI agents, software that will want to propose treasury actions of its own, and the closing module takes that on directly.
