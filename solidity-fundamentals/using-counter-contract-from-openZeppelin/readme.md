
In the last lesson, we have created our Proposal structure and we also defined a mapping for this structure. We also said that we need a system so that we can keep track of the ids. 

In this lesson, we will be using `Counter` smart contract from `OpenZeppelin` to solve this issue.

Using external libraries in Solidity provides some major benefits:

**Saves development time** - External libraries contain pre-built and tested code for common functionality like counters, strings, math operations etc. This saves you time from having to build these utilities from scratch.

**Improves security** - Popular libraries are used by many developers and are generally well audited for vulnerabilities. Using them reduces risk compared to writing custom code.

**Promotes standardization** - Libraries like OpenZeppelin introduce common patterns and interfaces. This makes Solidity code more consistent across projects.

**Easy to integrate** - As we'll see below, importing and using external libraries in Solidity is straightforward with the import keyword.
So in summary, external libraries improve productivity, security, and quality for Solidity smart contracts. For these reasons, it's recommended to use them whenever possible.

We can import the contract using the `import` keyword and the url of the contract like the following:

```solidity
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Counters.sol";
```

Next, we want to be able to use what we important above. Here is how to do this in Solidity:

```solidity
using Counters for Counters.Counter;
Counters.Counter private _counter;
```

By declaring `_counter` as `Counters.Counter`, it will have access to the functions from the `Counters` library that we attached with the using statement.

For example, we can now call `_counter.increment()` or `_counter.current()` directly on our `_counter` variable.

In summary:

`using Counters for Counters.Counter` attaches library functions to a type
`Counters.Counter private _counter` declares a variable of that type
This lets us call those library functions directly on `_counter`
So the using statement sets up the capability, and the variable declaration gives us an instance to use it.
