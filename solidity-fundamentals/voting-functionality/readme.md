In this part, we will be implementing an execute function to vote on a proposal.

Let's start by defining our function:

```solidity
function vote(uint8 choice) external {
    // Function logic
}
```
We will be using `uint8` to represent the three different options we can have:

- Approve -> will be represented by 1.
- Reject -> will be represented by 2.
- Pass -> will be represented by 0.

Let's move on with the function logic.

```solidity
// First part
Proposal storage proposal = proposal_history[_counter.current()];
uint256 total_vote = proposal.approve + proposal.reject + proposal.pass;

// Second part
if (choice == 1) {
    proposal.approve += 1;
    proposal.current_state = calculateCurrentState();
} else if (choice == 2) {
    proposal.reject += 1;
    proposal.current_state = calculateCurrentState();
} else if (choice == 0) {
    proposal.pass += 1;
    proposal.current_state = calculateCurrentState();
}

// Third part
if ((proposal.total_vote_to_end - total_vote == 1) && (choice == 1 || choice == 2 || choice == 0)) {
    proposal.is_active = false;

}
```

Let's break down the three parts of our function logic.

- In the first part, we are creating a storage variable which will be pointing to the current proposal from the `proposal_history` mapping. Any change we make on the `storage` variable `proposal` will be reflect to the current proposal. Then we are calculating the total_vote so that at the end we can check if the total vote to end this tutorial has finished with this final vote or not.
- In the second part, based on the choice from the user, we are incrementing the corresponding field of our proposal struct. For an example if the choice is 1, which means the caller wants to vote for `approve`, we say `proposal.approve += 1` which increases the number of approve votes by one. After incrementing the field we calculate the state of the proposal with the line `proposal.current_state = calculateState();`. The method `calculateState()` may seem new but do not worry, we have not implemented this method yet, we will implement it after finishing the vote function. 
- On the last part of the function we are checking if we needed just one vote to end the tutorial in the beginning of the function where we calculated the total votes. If this is the case and we got a parameter which is either 1, 2 or 0, we can end the proposal by setting its `active` field to `false`.

At this point, even though our syntax is correct, we have **2 big problems** with our logic. Can you see them?
