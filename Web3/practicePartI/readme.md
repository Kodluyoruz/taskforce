# Practice Part - I

These contents have been prepared using online resources. Patika.dev’s own contents are currently under preparation.

## Preparation for NCD I 

This note will walk you through a starter project that you may use in NCD I and will give you basic knowledge of its structure, internal work and problems you may encounter.

### Goals

1. Get familiar with project structure

2. Build the contract

3. Try different ways of deploying it

### Estimates for Time to Complete

- Fastest time: 5 minutes (if you already know how to do this)
- Most likely time: 12 minutes
- Time to quit: 20 minutes (we can help you with some hints in this case)

## Requirements

In order to have little to no troubles and awaitings during this course, you should have installed:

- ``npm`` Node.JS package manager
- ``git`` version control
- yarn (``npm install -g yarn@1.22.15``)
- ``near-cli``

Also, you have to use your testnet account. If you don’t have one - ``create``.

## First things first

To start with, let’s clone [repository](https://github.com/Learn-NEAR/starter--near-sdk-as) we’ll be working with. You can do it through GitHub client or using ``git clone https://github.com/Learn-NEAR/starter--near-sdk-as`` command. Open project folder in terminal and run ``yarn``. ``yarn`` is a package manager that allows to download and solve project’s dependencies - pieces of code that are required for project to work. You will see such output:

```
PS C:\Github\starter--near-sdk-as> yarn 
yarn install v1.22.15
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
Done in 2.16s.
```
Let’s have a closer look at the content of our project.

## Overview

### package.json

```
{
  "name": "starter--near-sdk-as",
  "version": "0.0.1",
  "description": "Start with a basic project",
  "scripts": {
    "dev": "watch -d -n 1 'clear && yarn test'",
    "test": "yarn asp -f unit.spec",
    "clean": "rm -rf ./build && rm -rf ./neardev",
    "build": "asb --target debug",
    "build:release": "asb",
    "asp": "asp --verbose --nologo"
  },
  "keywords": [],
  "author": "hello@near.org",
  "license": "ISC",
  "devDependencies": {
    "near-sdk-as": "^3.1.0"
  }
}
```
What we see here is a configuration file for our project containing the name of project, version etc. What we are interested in are ``scripts``. Those are aliases for shell commands with specific options. For example, ``clean`` is a short name for a command that deletes folders build and neardev, and ``build:release`` executes AssemblyScript ``asb (build)`` command.

### asconfig.json

```
{
  "workspaces": [
    "src/simple",
    "src/singleton"
  ]
}
```
This file is a collection of folders with our contracts in them. When we execute ``build:release`` command, we compile contracts from each workspace into the output folder. More about them next.

### src

Inside ``src`` are simple and ``singleton`` - our workspaces. They have the same structure, including tests and assembly folders. The difference between them is style they’re written in.

### simple

We say that an AssemblyScript contract is written in the “simple style” when the index.ts file (the contract entry point) includes a series of exported functions.

In this case, all exported functions become public contract methods.

```
// return the string 'hello world'
export function helloWorld(): string {}

// read the given key from account (contract) storage
export function read(key: string): string {}

// write the given value at the given key to account (contract) storage
export function write(key: string, value: string): string {}

// private helper method used by read() and write() above
private storageReport(): string {}
```

### singleton

We say that an AssemblyScript contract is written in the “singleton style” when the index.ts file (the contract entry point) has a single exported class (the name of the class doesn’t matter) that is decorated with @nearBindgen.

In this case, all methods on the class become public contract methods unless marked private. Also, all instance variables are stored as a serialized instance of the class under a special storage key named STATE. AssemblyScript uses JSON for storage serialization.

```
@nearBindgen
export class Contract {

  // return the string 'hello world'
  helloWorld(): string {}

  // read the given key from account (contract) storage
  read(key: string): string {}

  // write the given value at the given key to account (contract) storage
  @mutateState()
  write(key: string, value: string): string {}

  // private helper method used by read() and write() above
  private storageReport(): string {}
}
```

Warning: be careful when creating a new workspace

Don’t forget to add it’s location to ``asconfig.json``
Your workspace **must** have ``assembly`` folder and ``index.ts`` file!

### scripts

Those are command line scenarios that recreate some certain behaviour using the contracts in this project. We’re using them in the next section.

**Note:** Use OS of your preference, however, Windows users should take in consideration that you should launch your scripts not via PowerShell or cmd, use **Git Bash** instead.

**Warning:** Mac with M1 chip has compatibility issues with WASM.

## Building

Let’s say it once again, to build contracts in your workspaces execute yarn build:release. You should see:

```
$ yarn build:release
yarn run v1.22.15
$ asb
Done in 14.25s.
```

Great! You may notice creation of a new folder in our project called ``build`` that contains subfolder ``release``. release has 2 files: ``simple.wasm`` and ``singleton.wasm``. Those Wasm (WebAssembly) files are ready to be deployed to the NEAR network. Let’s do it.

## Deploying

To deploy our contract we will use NEAR CLI. Take a look at commands [here](https://github.com/near/near-cli#overview). After we’re going to deploy our contracts to testnet using two different ways.

**``dev-deploy``**

The very first and quickest way to deploy a smart contract is to run ``near dev-deploy <WASM_file_path>``. We’re going to work with ``singleton.wasm`` which path is ``./build/release/singleton.wasm/``. Our command will look like ``near dev-deploy ./build/release/simple.wasm``.

```
$ near dev-deploy ../build/release/simple.wasm
Starting deployment. Account id: dev-1634461056712-80360389036896, node: https://rpc.testnet.near.org, helper: https://helper.testnet.near.org, file: ../build/release/simple.wasm
Transaction Id AJUDp6HrJhzwRsvnaSDFuuaWKW8kLzCBK4xy26BnzfQv
To see the transaction in the transaction explorer, please open this url in your browser
https://explorer.testnet.near.org/transactions/AJUDp6HrJhzwRsvnaSDFuuaWKW8kLzCBK4xy26BnzfQv
Done deploying to dev-1634461056712-80360389036896
```

**Warning:** the command above will only run from project root folder (``starter--near-sdk-as``).

**Error: ENOENT: no such file or directory**
This error means that your path to WASM file is incorrect.

At this point one thing has happened that may have been unnoticed by you just yet. Now you will have a ``neardev`` subfolder in the project. dev-account file has a name of account to which we deployed a few moments ago.

**Note:** run ``cat ./neardev/dev-account`` to make sure that you have seen this account ID in console when deploying.

**``deploy``**

Now we will deploy the contract to a specific account - to your testnet. Firstly, we have to log into our account. Run ``near login``.

```
$ near login

Please authorize NEAR CLI on at least one of your accounts.

If your browser doesn't automatically open, please visit this URL
https://wallet.testnet.near.org/login/?title=NEAR+CLI&public_key=<public_key>
Please authorize at least one account at the URL above.
```
Check your browser. There should be a new page opened. Follwing steps are common to do, so you will get used to them extremely quickly. Following example logging into d3mage-dev.testnet account.


![images](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/Web3/practicePartI/figures/image8.png)
![images](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/Web3/practicePartI/figures/6wf8Dmr.png)

When you see a blank page in browser - you’re good to return to a terminal. Enter your account name into command line.

```
Which account did you authorize for use with NEAR CLI?
Enter it here:
d3mage-dev.testnet
Logged in as [ d3mage-dev.testnet ] with public key [ ed25519:6aA1xx... ] successfully
```
After you’ve logged in you’re able run the following command:
``near deploy --accountId <account_name> --wasmFile <WASM_file_path>`` For example,
``near deploy --accountId d3mage-dev.testnet --wasmFile ./build/release/singleton.wasm``

```
$ near deploy --accountId d3mage-dev.testnet --wasmFile ./build/release/singleton.wasm
Starting deployment. Account id: d3mage-dev.testnet, node: https://rpc.testnet.near.org, helper: https://helper.testnet.near.org, file: ./build/release/singleton.wasm
Transaction Id 6hv4bsfL4SSp9SGcwiTBCUuZxHucYmzLcAuVWsDdrk3d
To see the transaction in the transaction explorer, please open this url in your browser
https://explorer.testnet.near.org/transactions/6hv4bsfL4SSp9SGcwiTBCUuZxHucYmzLcAuVWsDdrk3d
Done deploying to d3mage-dev.testnet
```
Check the link above to see transaction details.

![images](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/Web3/practicePartI/figures/devdeploy.PNG)

For further information: 

https://hackmd.io/@d3mage/prepare-for-ncd

[More on accounts](https://docs.near.org/docs/concepts/account#accounts-and-contracts)

[More on access keys](https://docs.near.org/docs/concepts/account#access-keys)

[Challenge: Managing keys with NEAR shell](https://github.com/near-examples/workshop--exploring-near-apis/blob/master/challenges/managing-keys-with-near-shell.md)


























