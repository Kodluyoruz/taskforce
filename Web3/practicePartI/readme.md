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





















