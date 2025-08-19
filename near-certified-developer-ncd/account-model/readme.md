# Accounts Model

## Accounts
What is accounts? NEAR uses human-readable account names such as ``alice.near`` or ``bob.near`` instead of a public hash such as ``0x71C7656EC7ab88b098defB751B7401B5f6d8976F``.

These accounts also have the permission to create subaccounts such as ``nft.alice.near`` or ``example2.bob.near``. It's important to know that only the root account can create the subaccount. So only ``alice.near`` can create ``nft.alice.near`` and only ``nft.alice.near`` can create ``example.nft.alice.near``. Note that ``alice.near`` does not have permission to create ``example.nft.alice.near``. Only the direct parent account has permission to create a subaccount.

## Keys
On most blockchains, there is one public/private key pair per account. On NEAR, each account can have many key pairs associated with them which we call "Access Keys". There are two types of "Access Keys":

- Full Access _(Grants full control to the account)_
- Function Call _(Allows for only non-monetary transaction signing)_
These keys can be used by dApp developers to allow users to sign simple transactions that mutate state on the blockchain without having to constantly re-direct to the user's wallet to prompt for authorization. They can be widely or narrowly scoped depending on the use case.

## Contracts
For each account, only one smart contract can be deployed and active at any given moment. All smart contracts on NEAR must be compiled to WebAssemly and currently, AssemblyScript and Rust are the supported languages used. Smart contracts that have been deployed can be updated at any time but not removed. This is where sub-accounts can come in handy. NEAR allows users to organize and create a hierarchy for their accounts.
As an example, benji could have the root account benji.near. He then stores all his NFT contracts as sub-accounts of nft.benji.near. For example, he worked on a cool lazy minting contract deployed to lazy.nft.benji.near. This not only allows for better organization but it allows developers to easily delete and re-create accounts in order to clear state.

## Storage
Any information that is stored on NEAR is accounted for using a mechanism called storage staking. In short, an account must maintain a certain balance that is locked in order to cover the cost of storage. If that storage is released, the funds become available once again. This is why named account IDs on NEAR cost an initial deposit to create. If you attempt to store state on-chain without having the necessary balance in your account to cover the cost, an error will be thrown which will tell you to add more NEAR to your account.
