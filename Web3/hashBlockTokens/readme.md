# Hash - Block - Tokens

These contents have been prepared using online resources. Patika.dev’s own contents are currently under preparation.

"_1. What is Hashing?"_

"_Hashing is the process of taking the input string of any length and turning it into cryptographic fixed output. Hashing is not an “encryption” we cant retrieve the original data by decrypting the hash, it’s a one-way cryptographic function.Do you know we can keep the whole data which is present on the internet in the fixed string length with the help of Hashing Algorithm. We use a mathematical algorithm called SHA-256 (Secure Hashing Algorithm -256 bits). SHA 256 is the successor of the SHA-1 which is of 160 bits."_


"_2. How Hashing is used in Blockchain?"_

"_In Blockchain, every block has a hash of the previous block, the previous block is called as parent block for the present block and now consider a parent block has a present block and it will have a hash of the previous block i.e parent block. In the blockchain, every block has a hash of the previous block. When we change any data in the present block the hash of the block will be changed, this will affect the previous block because it has the address of the previous block."_

"_For example, If we have only two blocks, one will be the present block and one will be the parent block. The present block will be having the address of the parent block. If we need to change the data in the present block, we also need to change the parent block. It will be easy to change the data for two blocks but now in bitcoin, there are 727722 blocks have been mined by 2022–03–17 12:37:02, with a hash 000000000000000000088488fa1aed066cc0eda0dbeb62dc90f45b85ce99f79a. You can see how many blocks are mined until now at Bitcoin. It is not possible to change the hash of 727722, so this is how blockchain is called immutable and trustworthy of the data."_

For further information: https://andersbrownworth.com/blockchain/ 

https://medium.com/@shivasunny30/what-is-hashing-in-blockchain-explained-ba6f68fd3303
