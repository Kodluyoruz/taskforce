# Imports

All contracts and models must explicitly import features of the NEAR they intend to use. Not all of these features are used all of the time of course.

```
import {
  context, // visibility into account, contract and blockchain details
  logging, // append to the execution environment log (appears in JS Developer Console when using near-api-js)
  storage, // key-value store for the contract (used by PersistentMap, PersistentVector and PersistentDeque)
  PersistentMap, // data structure that wraps storage to appear like a Map
  PersistentVector, // data structure that wraps storage to appear like a Vector
  PersistentDeque, // data structure that wraps storage to appear like a Deque
  PersistentSet, // data structure that wraps storage to appear like a Set
  ContractPromise, // make asynchronous calls to other contracts and receive callbacks
  base58, // utility base58 encoder
  base64, // utility base64 encoder / decoder
  math, // utility math functions for hashing using SHA and Keccak as well as pseudo-random data
  utils, // utility type conversion and read_register
} from "near-sdk-as";
```
