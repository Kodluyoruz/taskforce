# Identity
NEAR contract developers use one of two Software Development Kits (SDK), AssemblyScript or Rust, to build their contracts
Both SDKs expose 3 different identities that are either invariant or cryptographically verifiable
Identity on NEAR is exposed to developers using the Context object in AssemblyScript

- **contract account:** the account on which the contract is running right now (invariant)
- **predecessor account:** the account that came just before this moment
- **sender account:** the account that originally signed the transaction that brought us here

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/near-certified-developer-ncd/near-identity/figures/figures.png)
