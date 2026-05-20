# Models

At the most basic level, a model is a custom data container that defines a new type not currently available (as opposed to primitive types like integers, strings and bool which are always available)
```
@nearBindgen
export class TextMessage {
  sender: string;
  text: string;
  number: u64;
  isRead: bool;
}
// see https://github.com/near/near-sdk-as/blob/master/assembly/__tests__/runtime/model.ts
```

`@nearBindgen` is a decorator made for the serialization of custom classes before they are saved to storage onto the blockchain. `@nearBindgen` does not support class inheritance.

Models can build on top of one another as with the sample below, taken from CryptoCorgis (like Pokemon), which includes 3 models:

- `CorgiMetaData` which wraps an array of strings
- the `Corgi` model which includes strings, an integer and also uses `CorgiMetaData`
- and finally a `CorgiArray` which includes an array of `Corgi`s and maintains the length of that array as well

```
@nearBindgen
export class CorgiMetaData {
  dna: Array<string>;
}

export class Corgi {
  owner: string;
  sender: string;
  message: string;
  dna: string;
  name: string;
  color: string;
  backgroundColor: string;
  rate: string;
  sausage: string;
  quote: string;
  level: i32;
  metadata: CorgiMetaData;
}

export class CorgiArray {
  corgis: Array<Corgi>;
  len: i32;
}
// see https://github.com/nearprotocol/corgis/blob/master/assembly/model.ts
```
Since models are just AssemblyScript classes, they support custom constructors and behavior, not just data, as with the example here:

```
@nearBindgen
export class Greeter {
  text: string;

  constructor(text: string) {
    this.text = text;
  }

  greet(userId: string): string {
    return "Hello, " + userId;
  }
}
// see https://github.com/nearprotocol/blockbuster/blob/master/assembly/model.ts
```

