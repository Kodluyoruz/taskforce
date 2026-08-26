# The signing boundary

**Why this matters:** This one concept explains every design decision in the rest of the course.

Every crypto transaction involves two jobs, and they are different in kind. The first job is **preparing**: building the transaction, fetching balances and fees, talking to the network. Preparing needs the internet, a normal computer does it well, and it requires no special trust. The second job is **deciding**: verifying what the transaction really does, approving it, and signing it with the private key. This job needs trust, because whatever performs it holds the key, and its screen is what convinces the human.

The **signing boundary** is the line between those two jobs. On one side, the machine that prepares. On the other, the environment that verifies, approves, and signs. For any wallet setup you ever evaluate, ask one question: *where is this line, and what does an attacker need to cross it?*

`[[ANIM:signing-boundary]]`

In a software wallet, both jobs run on one machine. A boundary technically exists there, but it's made of software: one process prepares, another signs, and the operating system stands between them. If malware compromises the machine, it sits on both sides of the line at once, and a boundary made of software cannot survive on hardware the attacker controls.

**Strong custody**, a deliberate way of holding your keys, moves the second job behind a physical wall. Separate hardware stores the key, displays the transaction on its own trusted screen, and produces the signature. Your laptop sends in an unsigned transaction and receives back a signature, or a refusal. The key never crosses the line in either direction.

You already trust this exact pattern in production. An **HSM** (hardware security module) is a hardened device that holds an organization's secret keys and signs requests without exposing them; even the servers that call the HSM cannot extract what's inside. A hardware signer applies the same idea to one person and adds the piece an HSM never had: a human who reads a trusted screen and physically approves.

The rest of this course builds on this line. Module 2 opens the hardware and shows the Secure Element, the chip that holds and uses your keys. Modules 3 to 5 cover the app around it, choosing a device, and the daily habit of verifying everything you sign.

> **Key idea:** Prepare transactions on the laptop, but verify, approve, and sign them in a place the laptop cannot touch.
