## Building

Let’s say it once again, to build contracts in your workspaces execute yarn build:release. You should see:

```
$ yarn build:release
yarn run v1.22.15
$ asb
Done in 14.25s.
```

Great! You may notice creation of a new folder in our project called ``build`` that contains subfolder ``release``. release has 2 files: ``simple.wasm`` and ``singleton.wasm``. Those Wasm (WebAssembly) files are ready to be deployed to the NEAR network. Let’s do it.

## Deploying

To deploy our contract we will use NEAR CLI. Take a look at commands [here](https://github.com/near/near-cli#overview). After we’re going to deploy our contracts to testnet using two different ways.

**``dev-deploy``**

The very first and quickest way to deploy a smart contract is to run ``near dev-deploy <WASM_file_path>``. We’re going to work with ``singleton.wasm`` which path is ``./build/release/singleton.wasm/``. Our command will look like ``near dev-deploy ./build/release/simple.wasm``.

```
$ near dev-deploy ../build/release/simple.wasm
Starting deployment. Account id: dev-1634461056712-80360389036896, node: https://rpc.testnet.near.org, helper: https://helper.testnet.near.org, file: ../build/release/simple.wasm
Transaction Id AJUDp6HrJhzwRsvnaSDFuuaWKW8kLzCBK4xy26BnzfQv
To see the transaction in the transaction explorer, please open this url in your browser
https://explorer.testnet.near.org/transactions/AJUDp6HrJhzwRsvnaSDFuuaWKW8kLzCBK4xy26BnzfQv
Done deploying to dev-1634461056712-80360389036896
```

**Warning:** the command above will only run from project root folder (``starter--near-sdk-as``).

**Error: ENOENT: no such file or directory**
This error means that your path to WASM file is incorrect.

At this point one thing has happened that may have been unnoticed by you just yet. Now you will have a ``neardev`` subfolder in the project. dev-account file has a name of account to which we deployed a few moments ago.

**Note:** run ``cat ./neardev/dev-account`` to make sure that you have seen this account ID in console when deploying.

**``deploy``**

Now we will deploy the contract to a specific account - to your testnet. Firstly, we have to log into our account. Run ``near login``.

```
$ near login

Please authorize NEAR CLI on at least one of your accounts.

If your browser doesn't automatically open, please visit this URL
https://wallet.testnet.near.org/login/?title=NEAR+CLI&public_key=<public_key>
Please authorize at least one account at the URL above.
```
Check your browser. There should be a new page opened. Follwing steps are common to do, so you will get used to them extremely quickly. Following example logging into d3mage-dev.testnet account.


![images](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/Web3/practicePartI/figures/image8.png)
![images](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/Web3/practicePartI/figures/6wf8Dmr.png)

When you see a blank page in browser - you’re good to return to a terminal. Enter your account name into command line.

```
Which account did you authorize for use with NEAR CLI?
Enter it here:
d3mage-dev.testnet
Logged in as [ d3mage-dev.testnet ] with public key [ ed25519:6aA1xx... ] successfully
```
After you’ve logged in you’re able run the following command:
``near deploy --accountId <account_name> --wasmFile <WASM_file_path>`` For example,
``near deploy --accountId d3mage-dev.testnet --wasmFile ./build/release/singleton.wasm``

```
$ near deploy --accountId d3mage-dev.testnet --wasmFile ./build/release/singleton.wasm
Starting deployment. Account id: d3mage-dev.testnet, node: https://rpc.testnet.near.org, helper: https://helper.testnet.near.org, file: ./build/release/singleton.wasm
Transaction Id 6hv4bsfL4SSp9SGcwiTBCUuZxHucYmzLcAuVWsDdrk3d
To see the transaction in the transaction explorer, please open this url in your browser
https://explorer.testnet.near.org/transactions/6hv4bsfL4SSp9SGcwiTBCUuZxHucYmzLcAuVWsDdrk3d
Done deploying to d3mage-dev.testnet
```
Check the link above to see transaction details.

![images](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/Web3/practicePartI/figures/devdeploy.PNG)

For further information: 

https://hackmd.io/@d3mage/prepare-for-ncd

[More on accounts](https://docs.near.org/docs/concepts/account#accounts-and-contracts)

[More on access keys](https://docs.near.org/docs/concepts/account#access-keys)

[Challenge: Managing keys with NEAR shell](https://github.com/near-examples/workshop--exploring-near-apis/blob/master/challenges/managing-keys-with-near-shell.md)






