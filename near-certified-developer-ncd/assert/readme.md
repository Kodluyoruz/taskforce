# Assert 

AssemblyScript provides a rich environment including an `assert ` function to improve the quality of your code, among others. This is a specific set of functions that throw an error if something unexpected happens. They’re called “assertion” functions.

```
assert<T>(isTrueish: T, message?: string): T

// usage
let output: i8 = 1;
assert(output == 1, "The value of output is not 1");
```
