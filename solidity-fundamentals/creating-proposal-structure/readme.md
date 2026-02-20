Let's start with defining our contract:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;
contract ProposalContract {
    // Our contract code
}
```

Now that we have the basis for our contract, we can create our proposal structure.

To store the proposals, first we need to have a structure that has the necessary fields for our Proposal. 

```solidity
struct Proposal {
        string description; // Description of the proposal
        uint256 approve; // Number of approve votes
        uint256 reject; // Number of reject votes
        uint256 pass; // Number of pass votes
        uint256 total_vote_to_end; // When the total votes in the proposal reaches this limit, proposal ends
        bool current_state; // This shows the current state of the proposal, meaning whether if passes of fails
        bool is_active; // This shows if others can vote to our contract
}
```

Now that we have a necessary structure for our proposal but the question arises, how can we store them? The answer is using mapping.

```solidity
mapping(uint256 => Proposal) proposal_history; // Recordings of previous proposals
```

In this mapping we have uint256 as the key and the proposal as the value. So, we will be able to get the proposal based on its key uint256 value, which will be the id of the proposal.

So far, our contract looks like this:
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract ProposalContract {

    struct Proposal {
        string description; // Description of the proposal
        uint256 approve; // Number of approve votes
        uint256 reject; // Number of reject votes
        uint256 pass; // Number of pass votes
        uint256 total_vote_to_end; // When the total votes in the proposal reaches this limit, proposal ends
        bool current_state; // This shows the current state of the proposal, meaning whether if passes of fails
        bool is_active; // This shows if others can vote to our contract
    }

    mapping(uint256 => Proposal) proposal_history; // Recordings of previous proposals
}
```

We have planned that our proposals will have ids to identify them in the mapping. For that we need some system so that we can track the ids of the proposals.
So, what would that system be like? 

The next part will be answering this question.
