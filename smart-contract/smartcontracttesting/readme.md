We have already discussed how developing smart contracts is unique to any other software development because the code is immutable once a contract is deployed. With that in mind, testing becomes even more important when developing a smart contract as we can't just easily change the code later if something doesn't work. 
## Why Test? 
- Understand and validate the behaviors of your smart contract. Code has a habit of performing not exactly how we intended. Through testing, we can get a better understanding of how our smart contract will function once deployed. 
- Investing in testing saves time later in debugging. Unfortunately, testing won't fix every bug in your smart contract code but it is helpful to you to determine the cause of your bugs. 
- Confidence that any new code added still functions the way the smart contract is intended to and does not introduce any breaking changes. 
## Smart Contract Testing 
There are two main types of tests that are important when working with smart contracts: 

**Unit Tests**  - These tests verify a certain single component in your smart contract is performing correctly. This could be a certain function or event that you have created. 

**Integration Tests** - These tests verify that the interaction between multiple components inside your smart contract is performing correctly. These components can be internal or external for example when calling another smart contract or getting information from an oracle. 
