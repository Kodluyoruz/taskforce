In this final part of the tutorial, we will be finalizing our `Proposal Contract`.

Let's start with a function to terminate a proposal.

```solidity
function teminateProposal() external onlyOwner active {
    proposal_history[_counter.current()].is_active = false;
}
```

This function terminates the current proposal. It can only be called by the owner of the contract and the current proposal should be `active` to run this function which is indicated by `active` modifier.

Now, we will implement 3 query functions to retrieve data from the blockchain. Remember, the person/contract that call a query function does not pay gas fees.

- The following function, will retrieve the information whether a given address has voted or not.
- To figure this out, we will iterate through voted_addresses array and look for any matches with the given address parameter.
Here is the implementation:
```solidity
function isVoted(address _address) public view returns (bool) {
    for (uint i = 0; i < voted_addresses.length; i++) {
        if (voted_addresses[i] == _address) {
            return true;
        }
    }
    return false;
}
```

- Next, we will implement a basic getter function to retrieve the current proposal:
```solidity
function getCurrentProposal() external view returns(Proposal memory) {
    return proposal_history[_counter.current()];
}
```

`Memory` refers to a temporary location where data can be stored. It's erased between (external) function calls and is cheaper to use than storage. You may think it as the RAM of the EVM.

- Finally, let's implement our a function to get a specific proposal:
```solidity
function getProposal(uint256 number) external view returns(Proposal memory) {
    return proposal_history[number];
}
```

__Congrulations, now you can look through the window thinking how did you became a smart contract developer!__

On the next page, you can find the full contract ✌️

