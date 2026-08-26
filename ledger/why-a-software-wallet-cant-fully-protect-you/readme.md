# Why a software wallet can't fully protect you

**Why this matters:** Your wallet's real security level is the security level of everything else on the same machine.

A **software wallet** is any wallet app that keeps its private key on a normal computer or phone, and the category includes browser extensions, desktop wallets, and mobile wallets alike. Ask where that key actually lives, and the answer is: inside the same operating system as everything else you run — your browser and every extension in it, the `node_modules` folders of every project you ever installed, every tool and script and download from this year.

Operating systems separate programs only partly. Malware running under your normal user account already has your permissions, which means it can read your files, watch your clipboard, capture your screen, and record your keyboard without ever asking for admin rights. Software wallets do encrypt the key file, and that genuinely helps if someone steals your laptop. It helps much less against live malware, which can record your password as you type it, or read the key from memory while the wallet sits unlocked.

There's a second, quieter problem: **the screen**. When your wallet shows "Send 0.5 ETH to 0xAB12…", the same possibly-compromised machine is drawing that text, so the display is not evidence of anything. Malware can show you one transaction and submit another. You cannot verify a machine by asking that same machine, and this single sentence will come back with a billion-dollar price tag attached in Module 5.

The honest conclusion is short: a software wallet is only as safe as the entire laptop, every package and extension and download included. Put it in review-comment language and the design critique writes itself. You would never keep a production signing key in a browser extension on your dev laptop; code review would reject that in seconds, without debate. A key that controls real money deserves at least the standard you already apply to production secrets.

> **Key idea:** A software wallet is only as safe as the entire computer it runs on.
