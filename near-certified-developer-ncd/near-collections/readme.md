# Collections
There are many features on Assembly Script. In order to specialize in the NEAR ecosystem, you need to dive deep into Assembly Script.

Several collections are provided including `PersistentMap`, `PersistentVector` and `PersistentDeque`.

There are currently four types of collections. These all write and read from storage abstracting away a lot of what you might want to add to the storage object.

These collection wrap the `Storage` class with convenience methods so you must always use a unique storage prefix for different collections to avoid data collision.

```
import {
  PersistentMap, // implementation of a map you would find in most languages
  PersistentVector, // implementation of an array you would find in most languages
  PersistentDeque, // implementation of a deque (bidirectional queue)
} from "near-sdk-as";

// contract code below this line can now make use of these collections
```

PersistentMap: 

Acts like a map you would find in most languages. A map class that implements a persistent unordered map. Note that `PersistentMap` doesn't store keys, so if you need to retrieve them, include keys in the values.

To create a map;
```
let map = new PersistentMap<string, string>("m");
```
To use the map;
```
m.set(key, value);
m.get(key);
```
The complete interface for the `PersistentMap` class is provided by the snippet below with inline comments.

```
// REFERENCE ONLY
// this is the interface provided by the PersistentMap object

class PersistentMap<K, V> {
  constructor(prefix: string); // unique prefix to avoid data collision

  set(key: K, value: V): void; // wraps Storage#set<V>
  get(key: K, defaultValue: V | null = null): V | null; // wraps Storage#get<V>
  getSome(key: K): V; // wraps Storage#getSome<V>, use if key is known to exist

  contains(key: K): bool; // wraps Storage#contains
  delete(key: K): void; // wraps Storage#delete
}
```

PersistentVector:

Acts like an array. A vector class that implements a persistent array.

To create a vector;

```
let vec = new PersistentVector<string>("v");
```
To use the vector;
```
vec.push(value);
vec.pop(value);
vec.length;
```
The complete interface for the `PersistentVector` class is provided by the snippet below with inline comments.
```
// REFERENCE ONLY
// this is the interface provided by the PersistentVector object

class PersistentVector<T> {
  // referred to as "pv" below
  constructor(prefix: string); // unique prefix to avoid data collision

  containsIndex(index: i32): bool; // confirms that index is within range
  get length(): i32; // get length of the pv
  get isEmpty(): bool; // check whether pv is empty

  @operator("[]") // (index: i32): T                  wraps Storage#getSome<T> with checks
  @operator("[]=") // (index: i32, value: T): void     wraps Storage#set<T> with checks
  @operator("{}") // (index: i32): T                  wraps Storage#getSome<T>
  @operator("{}=") // (index: i32, value: T): void     wraps Storage#set<T>
  push(element: T): i32; // wraps Storage#set<T>
  pushBack(element: T): i32; // alias for pv.push

  pop(): T; // wraps Storage#get<T> and Storage#delete
  popBack(): T; // alias for pv.pop

  get front(): T; // get first/front of pv (wraps Storage#getSome with checks)
  get first(): T; // alias for pv.front

  get back(): T; // get last/back of pv (wraps Storage#getSome with checks)
  get last(): T; // alias for pv.back
}
```

PersistentDeque:

Implementation of a deque (bidirectional queue). A deque class that implements a persistent bidirectional queue.

To create a deque;
```
let dq = new PersistentDeque<string>("d");
```
To use a deque;
```
dq.pushFront(value);
dq.popBack();
```
The complete interface for the `PersistentDeque` class is provided by the snippet below with inline comments.

```
// REFERENCE ONLY
// this is the interface provided by the PersistentDeque object
class PersistentDeque<T> {
  // referred to as "pdq" below
  constructor(prefix: string); // unique prefix to avoid data collision

  containsIndex(index: i32): bool; // checks whether pdq contains the given index
  get length(): i32; // get length of the pdq
  get isEmpty(): bool; // check whether pdq is empty

  @operator("[]") // (index: i32): T                  wraps Storage#getSome<T> with checks to get T
  @operator("{}") // (index: i32): T                  wraps Storage#getSome<T> to get T
  @operator("{}=") // (index: i32, value: T): void     wraps Storage#set<T> to set value<T> at index
  pushFront(element: T): i32; // add element to front of pdq (wraps Storage#set<T>)
  popFront(): T; // get and remove first/front element (wraps Storage#getSome<T> and Storage#delete)

  pushBack(element: T): i32; // add element to back of pdq (wraps Storage#set<T>)
  popBack(): T; // get and remove last/back element (wraps Storage#getSome<T> and Storage#delete)

  get front(): T; // get first/front of pdq (wraps Storage#getSome with checks)
  get first(): T; // alias for pdq.front

  get back(): T; // get last/back of pdq (wraps Storage#getSome with checks)
  get last(): T; // alias for pdq.back
}
```

**Note:** If you're coming from JavaScript, you might not be familiar with the type declaration in the two brackets `<>`. In AssemblyScript, need to declare the types that any collection is going to take. This enforces that any data added to the collection must have the same type. If not, an error will be raised by the AssemblyScript compiler insisting that the types must all match. This adds a little up-front effort when programming but means far fewer run time errors happen because of type mismatches.

Note: The letter passed in as an argument (ie. `"m"` in the case of the `PersistentMap`) is the key that gets assigned as a prefix to distinguish the collections from one another (precisely because they're persisted using the same underlying key-value storage that is controlled by the contract account).

It's important when storing data to carefully consider the key in the key-value pair. With collection types, be sure to add a prefix that is unique to the account which will own the data when the contract is deployed.

To understand why, consider that a single representation of "storage" (set of key-value pairs) is used by each account and so each key in the key-value pair must uniquely identify its data.

This should come as no surprise until we consider that a collection type like `PersistentVector` (which behaves like an array) is using exactly the same underlying account storage. This is why we expose a prefix in the constructor of these collection types -- to avoid data collision with other collections.

This means that storage used by a contract must always use a unique storage prefix for each collection to avoid data collision.

