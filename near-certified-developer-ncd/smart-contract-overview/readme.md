# Smart Contract Overview

Smart Contracts are the back-end of your application that runs code and stores data on the blockchain. All smart contracts on NEAR must be compiled to WebAssembly or simply WASM. Currently, NEAR supports two languages AssemblyScript and Rust with custom software development kits (SDKs) to assist in their creation.

Whichever language you use to build your Smart Contracts, know that, once compiled to Wasm, they are eventually deployed and executed on the NEAR platform exactly the same way.

If you prefer JavaScript then AssemblyScript is the way to go for writing Smart Contracts on the NEAR platform.

If you're new to blockchain development there are a few key ideas that need your immediate attention. 

Programming on a blockchain is a lot like writing a "normal" web application in most ways. When in doubt, use the same mental models you already understand from other types of programming. There are a few key concepts which are either different or worth highlighting specifically:
- **Deploying your back-end:**
You deploy your application's back-end to the blockchain, where it is called a "smart contract" or just "contract" for short.
- **State/Storage:**
The state of the contract, which you would normally store by writing values into a database, is instead stored on the blockchain. The NEAR Platform supports several types of storage including scalar (strings, Boolean values, numbers, etc) and collection types (key-value pairs, list types)
You can modify state with "change operations" and read state with "view operations." Inside of change operations, you can write to storage in an easier way with persistent collections.
- **Cost of operation:**
Each operation has a certain cost associated with it. More complex operations (including storage on chain) have a higher cost. This cost is generally accounted for using a measure called "gas".
- **Blockchain Environment:**
Similarly to how an HTTP request runs on a web server, each function call to a smart contract gets executed in an entirely new stateless environment on the blockchain. Specifically, each node in the relevant shard (which typically contains around 100 nodes) spins up a virtual machine to execute that code locally. That virtual machine then executes the WebAssembly (Wasm) that your AssemblyScript code has been compiled into. Once it is done, the node quits the VM.

