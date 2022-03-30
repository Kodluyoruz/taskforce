# Example: Guest Book

- there are 2 main folders in the project:
  - assembly contains the smart contract and tests
  - src contains the application’s UX and tests

- there is another folder to be aware of:
  - neardev contains contract account details


**Note:** We will not focus on the “src folder” which is the frontend of this dApp.

![figures]()
![figures]()
![figures]()

**Contract Data Model: assembly/model.ts**

![figures]()

- PostedMessage is a serializable class with three attributes: 
  - premium to flag messages with attached NEAR tokens
  - sender to track the signer of the guest book message
  - text to hold the guest book message
- messages is a collection of guest book messages stored as a PersistentVector of PostedMessage objects

_**note: @nearBindgen marks the class as serializable**_

**Contract Behavior: assembly/main.ts**

![figures]()

- MESSAGE_LIMIT is used to avoid unbounded calls (ie. potentially expensive) to retrieve guest book messages from storage

- two public functions are exposed on the contract: 
  - addMessage()
  - getMessages()
