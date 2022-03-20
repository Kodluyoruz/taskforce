# Practice Part - II

These contents have been prepared using online resources. Patika.dev’s own contents are currently under preparation.

## Your First NEAR Smart Contract Challenge

### Make first changes to your smart contract running on NEAR protocol blockchain

- ``near-cli`` installed
- [Sample smart contract](https://github.com/Learn-NEAR/starter--near-sdk-as) project in your computer
- Being able to build & deploy it ⬆️ on the NEAR blockchain

Now, it is a time to finally make some changes!

### Goals

- Change ``helloWorld`` method’s return message to a different string
- Change ``helloWorld`` method so it accepts parameter name and welcome you
- Change ``helloWorld`` method so it accepts array of names and welcomes each of them
- BONUS: Change ``helloWorld`` method so it reads wallet id from Context and welcomes the one who made the call

### Estimates for Time to Complete

- Fastest time: 4 minutes (if you already know how to do this)
- Most likely time: 12 minutes
- Time to quit: 30 minutes (we can help you with some hints in this case)

### Success criteria

**Task #1**

- input: ``near view $CONTRACT helloWorld``
- output:``hello Your Name``

**Task #2**

- input (correct):
`` near view $CONTRACT helloWorld '{"name": "Your Name"}'``

- input (throws error):
``near view $CONTRACT helloWorld 'Your Name'``

- output: ``hello Your Name``

**Task #3**
- input (correct):
``near view $CONTRACT helloWorld '{"names": ["Your Name", "Friend Name"]}'``

- input (throws error):
``near view $CONTRACT helloWorld "['Your Name', 'Friend Name']"``

- output:
```
hello Your Name\n
hello Friend Name
```

**Bonus**

Try calling method with thousand of names in the array. Check error and see why it has failed.

**Task #4**

input: ``near call $CONTRACT helloWorld --accountId <id>.testnet``
output:``hello <id>.testnet``

### Task #1

In ``src/simple/assembly/index.ts``

```
export function helloWorld(): string {
  return 'hello world'
}
```

Change to
```
export function helloWorld(): string {
  return 'hello Your Name'
}
```

Build, deploy & run
```
Expected output:
hello Your Name
```

### Task #2

In ``src/simple/assembly/index.ts``

```
export function helloWorld(): string {
  return 'hello Your Name'
}
```

Change to
```
export function helloWorld(name: string): string {
  return 'hello ' + name
}
```

Build, deploy & view the contract
```
Expected output:
hello Your Name
```

### Task #3

In ``src/simple/assembly/index.ts``

export function helloWorld(name: string): string {
  return 'hello ' + name
}
Change to
```
export function helloWorld(names: Array<string>): string {
  return names.map<string>(name => 'hello ' + name).join(`\n`)
}
````
Build, deploy & run
```
Expected output:
hello Your Name
```
**Bonus**

If the operation is too complex (like passing thousands of names as the parameter), you will receive GasLimitExceeded error.

#### Task #4
In ``src/simple/assembly/index.ts``
```
export function helloWorld(names: Array<string>): string {
  return names.map<string>(name => 'hello ' + name).join(`\n`)
}
```
Change to
```
export function helloWorld(): string {
  const predecessor = Context.predecessor
  return 'hello ' + predecessor
}
```
Build, deploy & run
```
Expected output:
hello <id>.testnet
```

**Congratulations! Now you are ready to build a real demo to get your NCD I**

For further information: https://hackmd.io/@8CW3mmC9RNiEjxI9m33vqA/near-ncd-i-first-smart-contract#Your-First-NEAR-Smart-Contract-Challenge



