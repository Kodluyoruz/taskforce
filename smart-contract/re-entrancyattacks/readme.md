A large amount of funds and transactions are managed by smart contracts daily. No one wants to be the developer that has created a smart contract that causes people to lose crypto because it was not secure enough. Unfortunately,  too regularly attackers are successful out draining the funds of smart contracts.  

In this lesson, we will look at some of the security concerns that you should consider when developing a smart contract. To protect your contract from attacks, you need to understand the common ways attackers will find vulnerabilities and exploit them in your contract: 

## Re-entrancy Attacks 
Re-entrancy attacks are some of the most widely used and most damaging types of attacks on a smart contract. This is because they will  drain an account of its entire ETH balance if successful  

These attacks work by using the feature in Solidity that allows a smart contract to call another contract. An attacker will call the function of the victim's smart contract, for example, a withdraw function, repeatedly until the contract has no available funds. 

This is possible when the function transfers funds before setting a balance to zero to start a new transaction. Since smart contracts wait for the previous line of code to execute before moving to the next one, the function call can be looped until there are no available funds remaining. 
