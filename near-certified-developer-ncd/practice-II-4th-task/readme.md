# Practice

This is the second part of the practice that we have done before. In this part, you need to change the smart contract while using a predecessor. After that, please deploy your smart contract and share with us your GitHub link.  

## Task 4

`cd starter--near-sdk-as`

In `src/simple/assembly/index.ts`
```
export function helloWorld(names: Array<string>): string {
  return names.map<string>(name => 'hello ' + name).join(`\n`)
}
```
Change to,
```
export function helloWorld(): string {
  const predecessor = Context.predecessor
  return 'hello ' + predecessor
}
```
`yarn build:release`
`near dev-deploy ./build/release/simple.wasm`
`near call $CONTRACT helloWorld --accountId <YOUR_ACCOUNT>.testnet`

Output,
```
hello <YOUR_ACCOUNT>.testnet
```

Congrats! You have a smart contract on web3! 
