# Example: Thanks


Say "thanks!" to other students of the NCD by calling their instance of this contract.

You can optionally attach tokens to your message, or even leave an anonymous tip.

Of course keep in mind that your signing account will be visible on the blockchain via NEAR Explorer even if you send an anonymous message.

[Github Repo Sample 1](https://github.com/Learn-NEAR/NCD.L1.sample--thanks)

[Github Repo Sample 2](https://github.com/Learn-NEAR/NCD.L1.sample--thanks/tree/main/scripts)

To clone this repo, open your terminal and paste this code:
```
git clone git@github.com:Learn-NEAR/NCD.L1.sample--thanks.git
cd NCD.L1.sample--lottery
```
After you successfully clone this repository, please run this command:

```
yarn
```
These are the contract methods

```
// ------------------------------------
// contract initialization
// ------------------------------------

/**
 * initialize contract with owner ID and other config data
 *
 * (note: this method is called "constructor" in the singleton contract code)
 */
function init(owner: AccountId, allow_anonymous: bool = true): void

// ------------------------------------
// public methods
// ------------------------------------

/**
 * give thanks to the owner of the contract
 * and optionally attach tokens
 */
function say(message: string, anonymous: bool): bool

// ------------------------------------
// owner methods
// ------------------------------------

/**
 * show all messages and users
 */
function list(): Array<Message>

/**
 * generate a summary report
 */
function summarize(): Contract

/**
 * transfer received funds to owner account
 */
function transfer(): void
```
You can find an explanation for each of the methods above.

In this example, we are going to run those methods by using scripts. Scripts are important part of the development.You can put multiple commands in a script and gain time compared to writing them one by one in the terminal. Additionally, you can group some of the related commands so that it is easier and cleaner to work with. Also, you can write some comments to track what’s happening in the script and create variables for your specific commands that need some argument, which makes scripts more readable. 

Let’s start with the first script

To run the script
```
./scripts/1.dev-deploy.sh
```
At very first, this script checks whether $CONTRACT and $OWNER variables are exist in your bash. And If it is missing, you will see a message on your terminal saying

```
Missing $CONTRACT environment variable
Missing $OWNER environment variable
```
The second thing this script does is deleting the old contract and sending all the money left on that contract to a beneficiary account by using this command

```
near delete $CONTRACT $OWNER
```

Because we’are missing those variables, it couldn’t delete anything. And gives an error like this:

```
Not enough non-option arguments: got 0, need at least 2
```
This is fine if you are running this script for the first time. But this will be very useful because we will re-deploy this contract many times and maybe we want to keep our storage clean in every deployment. The script also deletes the ``neardev`` folder which holds the contract id in it. 

After the cleanup, it will build the contract and deploy it by these commands:
```
yarn build:release
near dev-deploy ./build/release/thanks.wasm
```
At the end of this script If we don’t have those variables we talked about above, the script wants us to create them and run the ``init`` method

```
export CONTRACT=<dev-123-456>
export OWNER=<your own account>
near call $CONTRACT init '{"owner":"'$OWNER'"}' --accountId $CONTRACT
```
What we need to do is create those variables ( CONTRACT & OWNER) then run that command so that we can initialize our contract.

Now, try to use the other scripts on your own to understand scripts better. 




