# Practice I

You need to practice what we learned until now. Practicing is a vital element of becoming a NEAR developer. In this part, we have a smart contract which was created by the NEAR education team. We want to clone this repository and make changes as follows. This is the second time you make changes to a smart contract in our course.

`git clone https://github.com/Learn-NEAR/starter--near-sdk-as`
`yarn`

## Task 1

In `src/simple/assembly/index.ts` 

```
export function helloWorld(): string {
  return 'hello world'
}
```

Change to,

```
export function helloWorld(): string {
  return 'hello <Your Name>'
}
```
`yarn build:release`
`near dev-deploy ./build/release/simple.wasm`
`export CONTRACT=<YOUR_DEV_ACCOUNT_HERE>`
`near view $CONTRACT helloWorld`

output,

```
hello <Your Name>
```

Congrats! You have made changes on a smart contract. 


## Task 2

In `src/simple/assembly/index.ts`

```
export function helloWorld(): string {
  return 'hello <Your Name>'
}
```

Change to,
```
export function helloWorld(name: string): string {
  return 'hello ' + name
}
```

`yarn build:release`
`near dev-deploy ./build/release/simple.wasm`

`near view $CONTRACT helloWorld '{"name": "<Your Name>"}'`

output,

```
hello <Your Name>
```

## Task 3

In `src/simple/assembly/index.ts`

``
export function helloWorld(name: string): string {
  return 'hello ' + name
}

Change to,

```
export function helloWorld(names: Array<string>): string {
  return names.map<string>(name => 'hello ' + name).join(` `)
}
```
`yarn build:release`
`near dev-deploy ./build/release/simple.wasm`
`near view $CONTRACT helloWorld '{"names": ["<Your Name>", "<Friend Name>"]}'`

output,
```
hello <Your Name>
hello <Friend Name>
```














