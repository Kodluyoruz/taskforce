# What is a "Contract?"

It's the container for all the variables, functions and state of the blockchain portion of your application.

This is a fully functioning smart contract with 1 method called hello that takes no arguments:

```
export function hello(): string {
  return "Hello, World!";
}
```

From within this contract method you can also access the blockchain execution `context` by importing the context object from `near-sdk-as`. This gives you access to blockchain data like the `sender` who signed the original transaction that caused the execution of this contract method. or the contract's name via `contractName`.
