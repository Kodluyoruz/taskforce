Before moving forward with the function implementation, let's check our the logic of calculating the current state of the contract.

We have three different choices:
- `Approve`
- `Reject`
- `Pass`

For a proposal to succeed, the number of `approve` votes should be higher than the sum of `reject` and half the `pass` votes (you can think like `pass` vote has the half the impact). So, our formula is:
`approve = reject + pass / 2`.

We may have odd number of pass votes which cannot be divided by two. In these cases, we add 1 to the number of pass votes and then divide.

After knowing the logic of the function, the implementation is pretty straight forward:
```solidity
function calculateCurrentState() private view returns(bool) {
    Proposal storage proposal = proposal_history[_counter.current()];

    uint256 approve = proposal.approve;
    uint256 reject = proposal.reject;
    uint256 pass = proposal.pass;
        
    if (proposal.pass %2 == 1) {
        pass += 1;
    }

    pass = pass / 2;

    if (approve > reject + pass) {
        return true;
    } else {
        return false;
    }
}
```
If you check the function definition, we see that we have used `private` and `view`.
- We used `private` because this function is just a helper function for our previous vote function and it is only being used in the contract.
- We used `view` because the function only views data from the blockchain and does not alter it.
