Here are some of the most common attacks on a smart contract. For more information on these and other types of attacks you need to protect your smart contract against, please check out the video above.

## Re-entrancy Attacks 
Re-entrancy attacks are some of the most widely used and most damaging types of attacks on a smart contract. This is because they will  drain an account of its entire ETH balance if successful  

These attacks work by using the feature in Solidity that allows a smart contract to call another contract. An attacker will call the function of the victim's smart contract, for example, a withdraw function, repeatedly until the contract has no available funds. 

This is possible when the function transfers funds before setting a balance to zero to start a new transaction. Since smart contracts wait for the previous line of code to execute before moving to the next one, the function call can be looped until there are no available funds remaining. 

## Integer overflows and underflows 

This type of attack is more popular in older versions of the Solidity compiler as newer versions (.8+) have a way to defend against them. It uses the way Solidity stores unsigned integers (uint) to have an account with zero balance attempt to send Ether to the contract. 

Unsigned Integers are stored as 256 bits in Solidity. A wallet can trick a smart contract into believing it has the maximum available fund amount: 4.3 billion because a uint will increment to the highest number available when attempting to decrease by the lowest number available, 0. Contracts are vulnerable to this attack if they decrease the token balance automatically without checking the balance amount first. 

## Front-running
Frontrunning attacks use the time between a transaction being submitted as a pending transaction and when it is confirmed on the blockchain to perform the same transaction. This is important when certain transactions will lead to some sort of financial gain for the sender. 

Attackers will monitor the mempool, the holding place for pending transactions, and see which transactions are valuable to frontrun. They will then submit that transaction with a higher gas fee so that it is at a higher priority and thus will be confirmed before the original one. 
