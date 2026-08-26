So far, we added the `Proposal` struct, a mapping and a function to create `Proposal`. Currently anyone can create a `Proposal` in our contract. What we want is that only the owner of this contract can create new proposals. 

To achieve that, first we need to add a new line to the beginning of our contract.

```solidity
address owner;
```

We created a new variable named `owner` which will be representing the owner of the contract. 

Now that we have the necessary variable for the owner, we need set the owner. 

The best place to set the owner of the contract inside the constructor. 

Constructor runs once when we first deploy our contract. Here we want to set owner of the contrat to the address that has deployed the contract.

We can have the address that made the transaction with: `msg.sender`

```solidity
constructor() {
    owner = msg.sender;
}
```

Now we have the owner but how can we use this owner in the function so that the only owner of the contract can use the function ?




