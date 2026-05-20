# Example: Guest Book

Let's explore the successful NEAR project Guestbook together! We have explained below which elements the project consists of:

- there are 2 main folders in the project:
  - assembly contains the smart contract and tests
  - src contains the application’s UX and tests

- there is another folder to be aware of:
  - neardev contains contract account details


**Note:** We will not focus on the “src folder” which is the frontend of this dApp.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/near-certified-developer-ncd/example-guest-book/figures/figures1.png)
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/near-certified-developer-ncd/example-guest-book/figures/figures2.png)
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/near-certified-developer-ncd/example-guest-book/figures/figures3.png)

**Contract Data Model: assembly/model.ts**

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/near-certified-developer-ncd/example-guest-book/figures/figures4.png)

- PostedMessage is a serializable class with three attributes: 
  - premium to flag messages with attached NEAR tokens
  - sender to track the signer of the guest book message
  - text to hold the guest book message
- messages is a collection of guest book messages stored as a PersistentVector of PostedMessage objects

_**note: @nearBindgen marks the class as serializable**_

**Contract Behavior: assembly/main.ts**

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/near-certified-developer-ncd/example-guest-book/figures/figures5.png)

- MESSAGE_LIMIT is used to avoid unbounded calls (ie. potentially expensive) to retrieve guest book messages from storage

- two public functions are exposed on the contract: 
  - addMessage()
  - getMessages()
