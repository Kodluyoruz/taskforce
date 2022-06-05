# NEAR Essentials

There are 8 actions you can perform with NEAR. These actions modify chain state and they are categorized into 3
- identity
- money
- code

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/near-certified-developer-ncd/near-intro/figures/figures.png)

- ``CreateAccount`` to make a new account (for a person, contract, refrigerator, etc)
- ``DeleteAccount`` to delete an account (and transfer balance to a beneficiary account)
- ``AddKey`` to add a key to an account (either ``FullAccess`` or ``FunctionCall`` access)
- ``DeleteKey`` to delete an existing key from an account
- ``Transfer`` to move tokens from one account to another
- ``Stake`` to express interest in becoming a validator at the next available opportunity
- ``DeployContract`` to deploy a contract
- ``FunctionCall`` to invoke a method on a contract (including budget for compute and storage)

## FunctionCall Access Keys

FunctionCall is a common access key that lets the holder call a function on only 1 contract and only up to a limited number of times.

Every time you login to a website with your NEAR Wallet, you are adding a new FunctionCall access key to your account.

## FullAccess Keys

A rare and powerful access key that lets the holder do anything they want to do with the account

Having a FullAccess key on the account means you own the account. Keep your FullAccess key safe!

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/near-certified-developer-ncd/near-intro/figures/figures2.png)


![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/near-certified-developer-ncd/near-intro/figures/figures3.png)


Invoking a contract method from your dApp roughly follows these steps:

- Your dApp uses near-api-js to compose and sign the transaction that represents a FunctionCall transaction
- The transaction is sent to the NEAR platform through the RPC interface which validates and verifies the transaction before routing it (based on the contract account) to the correct shard (since each shard is being followed by at least one physical node in the network)
- The runtime layer wakes up a Wasm virtual machine
- The VM loads the contract code to invoke the function identified in the transaction
- reading and writing to state storage as needed
- then returns the result of the function call and spins down the virtual machine
- The blockchain layer routes the result back through the RPC interface to your dApp





