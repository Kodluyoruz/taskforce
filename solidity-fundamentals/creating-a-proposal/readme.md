Now that we have our counter in the contract we can move forward with writing a function which will create a proposal for us.

```solidity
function create(string calldata _description, uint256 _total_vote_to_end) external {
        _counter.increment();
        proposal_history[_counter.current()] = Proposal(_description, 0, 0, 0, _total_vote_to_end, false, true);
}
```
We use the calldata keyword in Solidity function parameters to pass large, complex data types like arrays, structs and sometimes strings more efficiently by storing them in immutable call data rather than temporary memory.

Here our function takes two parameters; one to describe the proposal and second is set the total number of votes to end the proposal.

Inside the function, first we increment our counter so that we can update the counter before creating a new proposal entry in our mapping. Then we create and add a new `Proposal` to our `proposal_history` mapping.

At this point, even though our function is doing what e wanted it to do, which is to create a new proposal, we still have a little modification to do.




