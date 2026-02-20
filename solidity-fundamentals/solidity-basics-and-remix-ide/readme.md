Below, you can find the code for the `Counter` contract.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract CounterContract {
    address owner; // This will hold the address of the owner of the contract

    // Struct to define the counter with multiple fields
    struct Counter {
        uint number;
        string description;
    }

    Counter counter; // This is a storage variable that holds the counter in the contract.

    // This modidifer checks if the sender of the transaction is the owner of the contract.
    // If it is, continues to the function, if not it return the error that is defined.
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can increment or decrement the counter");
        _;
    }

    // Constructor runs one when we deploy the contract.
    // We are setting the owner of the contract to the sender of the transaction and also
    // We are creating the counter with the given parameters.
    constructor (uint initial_number, string memory initial_description) {
        owner = msg.sender;
        counter = Counter(initial_number, initial_description);
    }

    // This function increments the number field of the counter
    // It is an external function meaning it can only be called outside of this contract
    // Also it can only be called by the owner, which is declared with the onlyOwner keyword
    // Which corresponds to the onlyOwner modifier
    function increment() external onlyOwner {
        counter.number += 1;
    }

    // This function decrements the number field of the counter
    // It is an external function meaninig it can only be called outside of this contract
    // Also it can only be called by the owner, which is declared with the onlyOwner keyword
    // Which corresponds to the onlyOwner modifier
    function decrement() external onlyOwner {
        counter.number -= 1;
    }

    // This function returns the current number of the counter
    // It return a unsigned integer
    // It is a view function, meaning that it only reads data from the blockchain but does not alter any
    function current() external view returns(uint){
        return counter.number;
    }
}
```
