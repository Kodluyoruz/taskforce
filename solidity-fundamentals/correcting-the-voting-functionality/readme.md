Last lesson, we said that we had 2 problems in our logic.
- The first problem is that a user can vote for a proposal even it is not active.
- The second problem is that, a user can vote to the same proposal over and over again.

We will be solving this issues with the help of the **modifiers**.

The first modifier we are going to be creating will check whether the current proposal is active or not.

```solidity
modifier active() {
    require(proposal_history[_counter.current()].is_active == true, "The proposal is not active");
    _;
}
```
The modifier checks whether the proposal is active or not. If the proposal is not active, it returns the message `"The proposal is not active"`.

This modifier will check if the voter has voted before. But to check this we need a keep the addresses that has voted for our contract. We can achieve this with an `array`.

Let's create the following variable under the mapping.

```solidity
address[] private voted_addresses;
```
Next, we need to modify our `constructor` so that we can add the owner of the contract to the array since the owner of the contract will be the one who creates the proposals and we do not want him/her to vote on the contracts that himself/herself has created.

We will be adding the following line at the end of our contructor function:

```solidity
voted_addresses.push(msg.sender);
```

Now, our constructor becomes:
```solidity
constructor() {
    owner = msg.sender;
    voted_addresses.push(msg.sender);
}
```

We also need to modify our vote function. At the third part (end) of the function we set `active` field of the `Proposal` struct to `false`. Under that line we will also reset the that are voted:

```solidity
if ((proposal.total_vote_to_end - total_vote == 1) && (choice == 1 || choice == 2 || choice == 0)) {
    proposal.is_active = false;
    voted_addresses = [owner];
}
```

Also before the if-else statements we will add the address to the array:

```solidity
voted_addresses.push(msg.sender);
```

So, our vote function becomes: 

```solidity
function vote(uint8 choice) external active newVoter(msg.sender){
    Proposal storage proposal = proposal_history[_counter.current()];
    uint256 total_vote = proposal.approve + proposal.reject + proposal.pass;

    voted_addresses.push(msg.sender);

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

    if ((proposal.total_vote_to_end - total_vote == 1) && (choice == 1 || choice == 2 || choice == 0)) {
        proposal.is_active = false;
        voted_addresses = [owner];
    }
}
```

Notice that, in the function definition, we also added the modifiers `active` and `newVoter`. We have not created the `newVoter` modifier, so let's create that one too.

```solidity
modifier newVoter(address _address) {
    require(!isVoted(_address), "Address has not voted yet");
    _;
}
```

You may have noticed that we have used the function `isVoted()`. Do not worry if it looks unfamiliar, since we have not implement this function yet, but we will be in the future lessons. For now, just know that this function checks if the given address has voted or not. 

### The Current State Of The contract
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Counters.sol";


contract ProposalContract {
    // ****************** Data ***********************

    //Owner
    address owner;

    using Counters for Counters.Counter;
    Counters.Counter private _counter;

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

    address[] private voted_addresses; 

    //constructor
    constructor() {
        owner = msg.sender;
        voted_addresses.push(msg.sender);
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    modifier active() {
        require(proposal_history[_counter.current()].is_active == true);
        _;
    }

    modifier newVoter(address _address) {
        require(!isVoted(_address), "Address has not voted yet");
        _;
    }


//     // ****************** Execute Functions ***********************


    function setOwner(address new_owner) external onlyOwner {
        owner = new_owner;
    }

    function create(string calldata _description, uint256 _total_vote_to_end) external onlyOwner {
        _counter.increment();
        proposal_history[_counter.current()] = Proposal(_description, 0, 0, 0, _total_vote_to_end, false, true);
    }
    

    function vote(uint8 choice) external active newVoter(msg.sender){
        Proposal storage proposal = proposal_history[_counter.current()];
        uint256 total_vote = proposal.approve + proposal.reject + proposal.pass;

        voted_addresses.push(msg.sender);

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

        if ((proposal.total_vote_to_end - total_vote == 1) && (choice == 1 || choice == 2 || choice == 0)) {
            proposal.is_active = false;
            voted_addresses = [owner];
        }
    }
}
```

In the next section we will be implementing the `calculateCurrentState` function to help us to retrieve the state of the current proposal.
