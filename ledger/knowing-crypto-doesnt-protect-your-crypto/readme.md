# Knowing crypto doesn't protect your crypto

**Why this matters:** Understanding crypto and protecting crypto are different skills, and attackers exploit the gap between them.

This course does not treat you like a beginner. You know how transactions work; maybe you've deployed contracts, run nodes, or integrated wallets into production apps. That knowledge is real, and it will make several of these modules faster for you than they would be for a retail audience.

What it will not do is defend your funds, because experienced people lose crypto every year and almost never because they misunderstood a blockchain. They lose it because a machine they trusted got compromised. Your knowledge lives in your head, where no attacker can reach it. A **private key** (the secret number that controls your crypto) lives on a disk, and attackers have known which of the two to go after for a decade.

Developers are unusually good targets, and the reason is right there in your normal week. You install packages from public registries along with hundreds of transitive dependencies you never read. You clone and run code from strangers: sample repos, take-home tasks, quick test projects. You get messages from recruiters, collaborators, and people "reporting a bug", and some of them are fake. The chalk incident needed exactly one habitual click from one tired maintainer, and the fake-recruiter version of the same play is now an industry: researchers at Palo Alto Networks' Unit 42 have tracked North Korea-linked campaigns (they call one *Contagious Interview*) that walk developers through invented hiring processes and hand them take-home projects with a malicious npm dependency inside. You run `npm install` on a coding challenge, and the attacker's code runs as you.

## What does that code actually do once it lands?

Four shapes cover most of it:

- **An infostealer** searches your machine for secrets (wallet files, browser extension data, saved passwords, session cookies) and uploads them.
- **A clipboard swapper** watches your clipboard and replaces a copied wallet address with the attacker's address.
- **Phishing** imitates a real service to make you type secrets or approve something harmful.
- **A malicious dependency** looks useful, or typosquats a popular name, and carries any of the above.

Notice what's missing from that list. Nobody cracked a key. In every one of these attacks the cryptography held perfectly, and the target was the environment around the key: the operating system, the browser, the clipboard, your trust. So the real security question was never "do you understand crypto?" It is: **where do your keys live, and who else can reach that place?**

> **Key idea:** Attackers do not break the cryptography; they compromise the computer where the key lives.
