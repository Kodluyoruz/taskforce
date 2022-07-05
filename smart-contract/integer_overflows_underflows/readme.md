## Integer overflows and underflows 

This type of attack is more popular in older versions of the Solidity compiler as newer versions (.8+) have a way to defend against them. It uses the way Solidity stores unsigned integers (uint) to have an account with zero balance attempt to send Ether to the contract. 

Unsigned Integers are stored as 256 bits in Solidity. A wallet can trick a smart contract into believing it has the maximum available fund amount: 4.3 billion because a uint will increment to the highest number available when attempting to decrease by the lowest number available, 0. Contracts are vulnerable to this attack if they decrease the token balance automatically without checking the balance amount first. 
