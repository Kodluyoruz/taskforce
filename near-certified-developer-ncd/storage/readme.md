# Storage

The Storage class represents the only data store on the blockchain. All blockchain data uses this one interface. Without storage, your actions can not be saved in the blockchain system. The storage needs two variables, Key and Value. 

Contracts can import a reference to `storage` from `near-sdk-as`.

```
import { storage } from "near-sdk-as";
// contract code below this line can now make use of the storage object
```

The complete interface for the `Storage` class is provided by the snippet below with inline comments.

```
// REFERENCE ONLY
// this is the interface provided by the storage object

class Storage {
  // read and write text to storage
  setString(key: string, value: string): void;
  getString(key: string): string | null;

  // read and write an array of bytes to storage
  setBytes(key: string, value: Uint8Array): void;
  getBytes(key: string): Uint8Array | null;

  // check whether a key exists
  contains(key: string): bool;
  hasKey(key: string): bool; // alias for contains()

  // delete a key from storage
  delete(key: string): void;

  // get string and data objects defined in model.ts
  // return defaultValue if key not found
  // (prefer getPrimitive<T> for bool or integer and getSome<T> if key is known to exist)
  set<T>(key: string, value: T): void;
  get<T>(key: string, defaultValue: T | null = null): T | null;

  // get bool or integer value stored under the key
  // return defaultValue if key not found
  // throw if any other type (use get<T>)
  // (prefer get<T> for string or data objects defined in model.ts and getSome<T> if key is known to exist)
  getPrimitive<T>(key: string, defaultValue: T): T;

  // get bool, integer, string and data objects defined in model.ts
  // throw if key not found
  // (prefer get<T> for string or data objects defined in model.ts and getPrimitive<T> for bool or integer)
  getSome<T>(key: string): T;
}
```

