Generally, there are two ways to develop smart contracts on blockchains: Using existing libraries and developing your own code from scratch:

## Using existing libraries

Blockchains create their own libraries, so there is no need to write code from scratch for certain standard operations. With a few easy-to-prepare code pieces, we can quickly and easily create our own smart contracts by calling these libraries from GitHub.

In Ethereum, these libraries are called ‘standards’. The Ethereum community has adopted many standards that help keep projects interoperable across implementations, and ensure smart contracts and dApps remain composable.

Tokens are one of the most fundamental contracts in blockchains and by understanding tokens we can understand the whole structure. That's why startup applications start with developing their own tokens using a standard.

Per Ethereum official website, here are some of the most popular token standards on Ethereum:
- ERC-20: A standard interface for fungible (interchangeable) tokens, like voting tokens, staking tokens or virtual currencies.
- ERC-721: A standard interface for non-fungible tokens, like a deed for artwork or a song.
- ERC-777: Allows people to build extra functionality on top of tokens such as a mixer contract for improved transaction privacy or an emergency recover function to bail you out if you lose your private keys.
- ERC-1155: ERC-1155 allows for more efficient trades and bundling of transactions – thus saving costs. This token standard allows for creating both utility tokens (such as $BNB or $BAT) and Non-Fungible Tokens like CryptoPunks.
- ERC-4626: A tokenized vault standard designed to optimize and unify the technical parameters of yield-bearing vaults.

## Developing your own code from scratch
Once we understand how the overall structure works using libraries in a blockchain, we can start developing our own contracts from scratch or we can make upgrades that may occur to add features, fix bugs, or improve performance. Smart contracts in EVM-compatible blockchains are developed with Solidity programming language.

Resources:
https://ethereum.org/en/developers/docs/standards/](https://ethereum.org/en/developers/docs/standards/
