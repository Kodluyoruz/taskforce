# What is NEAR CLI?

Command line interface tool to interact with accounts and smart contracts on NEAR.

near-cli is a NodeJS command line interface that utilizes near-api-js to connect to and interact with the NEAR blockchain.

Most commonly used commands:

- near login:	store full access key locally
- near state: show general details of an account
- near send: sends tokens from one account to another
- near deploy: deploy a contract to the blockchain 
- near dev-deploy: create a dev account & deploy a contract (TestNet)
- near call: make a contract call (change or view methods)
- near view: make a contract call (only view methods)
- near repl: launch an interactive connection to the blockchain

You can install near-cli globally with `npm install -g near-cli`. Make sure you have a current version of `npm` and `NodeJS` version 12 or above installed. For Windows users, we recommend using Windows Subsystem for Linux (WSL)


