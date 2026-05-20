# Serde

Serialization and deserialization of data happens exactly where you would expect, at contract boundaries.  Here is a clear picture of the important pieces that might help ...
Note that the contract can hold some data (eg. primitive and custom types)
- **Se**rialize: convert data from an in-memory representation to a serialized representation
  - data that is returned by contract functions will be **se**rialized to JSON
  - data that is written to storage will be **se**rialized (borsh in Rust and JSON in AssemblyScript)
- **De**serialize: convert data from a serialized representation to in-memory representation
  - data that arrives as a parameter to contract functions will be **de**serialized into memory
  - data that is read from storage will be **de**serialized into memory

`@nearBindgen` is a decorator made for the serialization of custom classes before they are saved to storage onto the blockchain. `@nearBindgen` does not support class inheritance.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/near-certified-developer-ncd/serde/figures/figures.png)
