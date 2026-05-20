# File Structure

Contracts have all of the features of AssemblyScript at their disposal and contract files end with `.ts` since AssemblyScript is a dialect of TypeScript.

```
assembly
  ├── main.ts   # contains code for the contract
  └── model.ts  # contains code for the model(s) accessible to the contract
  ```
  
Contracts are a named collection of (exported) functions that have access (via `near-sdk-as`) to their execution context (sender, receiver, block height, etc) as well as storage services (key-value pair and convenience collections like Map, Vector and Deque), logging services and some utility functions.

To keep things organized, contracts can use one or more data objects which are commonly added to the `model.ts` file.
