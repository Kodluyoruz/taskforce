Solana offers fast, cheap, and scalable transactions and supports smart contracts built with the Rust, C++, and C programming languages. Unlike EVM compatible blockchains, Solidity is not used for Solana development. 

Rust is a general-purpose programming language with a syntax close to C++ and emphasizes performance, type safety, and concurrency. It is preferred because it focuses on developing highly secure concurrent systems.

Smart contracts are called “Programs” on Solana. Solana (Solana Labs) has created its own libraries, which are a collection of on-chain programs called the Solana Program Library (SPL) and native programs. Using these programs, you’ll able to do many things such as minting, transferring, burning or querying tokens without developing your own code from scratch.

## Using existing libraries on Solana
Per Solana Lab official website, programs created by Solana Labs:

- Solana Program Library (SPL) is a collection of on-chain programs. Here are some of the most popular token standards on SPL:
  - **Token program:** A standard interface for fungible (interchangeable) and non-fungible tokens. Equivalent of Ethereum ERC-20 and ERC-721 (Ethereum standards for exchangeable tokens). Using Token Program you are able to do many things such as minting, transferring, burning or querying tokens.
  - **Token swap program:** A Uniswap-like exchange for the Token program on the Solana
  - **Token lending program:** A lending protocol for the Token program on the Solana
  - **Associated Token account program:** Provides the mechanism for mapping the user's wallet address to the associated token accounts they hold.
  - **Memo Program:** Validates a string of UTF-8 encoded characters and verifies that any accounts provided are signers of the transaction.
  - **Name Service:** Issuing and managing ownership of: domain names, Solana Pubkeys, URLs, Twitter handles, ipfs cid's etc..
  - **Shared memory Program:** Writes instruction data into the provided account's data
  - **Feature Proposal Program:** Provides a workflow for activation of Solana network features through community vote based on validator stake weight.
  - **Stake Pool:** Pooling together SOL to be staked by an off-chain agent running a Delegation Bot which redistributes the stakes across the network and tries to maximize censorship resistance and rewards.
  
You can find further information about programs in here: [https://spl.solana.com/](https://spl.solana.com/) 

- Native programs are just like SPL programs but they are ready to use in system unlike SPL code repositories. Native programs are required to run validator nodes. Unlike third-party programs, the native programs are part of the validator implementation and can be upgraded as part of cluster upgrades. Upgrades may occur to add features, fix bugs, or improve performance. 

You can find further information about programs in here: [https://docs.solana.com/developing/runtime-facilities/programs](https://docs.solana.com/developing/runtime-facilities/programs) 

## Developing your own code from scratch on Solana
Once we understand how the overall structure works programs on Solana blockchain, we can start developing our own contracts using Rust, C or C++ programming languages. In this course, we will continue with Rust programming language.

In the following sections, we will kickstart our Solana development journey by using the SPL programs (especially Token program). We’ll also develop some smart contracts and dApps from scratch.

## Resources:
[https://docs.solana.com/developing/runtime-facilities/programs](https://docs.solana.com/developing/runtime-facilities/programs) 

[https://blog.chain.link/how-to-build-and-deploy-a-solana-smart-contract/](https://blog.chain.link/how-to-build-and-deploy-a-solana-smart-contract/) 

[https://academy.moralis.io/blog/what-is-the-rust-programming-language-exploring-solana-and-rust](https://academy.moralis.io/blog/what-is-the-rust-programming-language-exploring-solana-and-rust ) 

[https://en.wikipedia.org/wiki/Rust_(programming_language)](https://en.wikipedia.org/wiki/Rust_(programming_language)) 
