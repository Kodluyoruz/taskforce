# Context
Contracts can import the blockchain `context` from `near-sdk-as`. How to import context from near-sdk-as?

```
import { context } from "near-sdk-as";

// contract code below this line can now make use of the context object
```

This object provides context for contract execution including information about the transaction sender, blockchain height, and attached deposit available for use during contract execution, etc. The snippet below is the complete interface as currently implemented.

```
// REFERENCE ONLY
// interface provided by the context object imported above

class Context {
  // Context API
  get sender(): string; // account ID that signed the original transaction that led to this execution (aka. signer account id)
  get contractName(): string; // account ID of current contract being executed (aka. current account id)
  get blockIndex(): u64; // current block index (aka. height)
  get storageUsage(): u64; // contract account storage usage before the contract execution

  // Economics API
  get attachedDeposit(): u128; // balance that was attached to the call that will be immediately deposited before the contract execution starts.
  get accountBalance(): u128; // balance attached to the given account. Excludes the `attachedDeposit` that was attached to the transaction.
  get prepaidGas(): u64; // gas attached to the call and available to pay for the gas fees
  get usedGas(): u64; // gas that was irreversibly used for contract execution (aka. burnt gas) + gas attached to any promises (cannot exceed prepaidGas)
}
```
