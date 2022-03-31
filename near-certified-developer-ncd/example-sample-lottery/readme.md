# Example: Sample Lottery

Let's examine our third example, Lottery. Please follow the steps in the project on your own computer.

This repository includes a complete project structure for AssemblyScript contracts targeting the NEAR platform. We will see how to call “view” and “change” methods on the terminal. 

To clone this repo, open your terminal and paste this code:
```
git clone git@github.com:Learn-NEAR/NCD.L1.sample--lottery.git
cd NCD.L1.sample--lottery
```

After you successfully clone this repository, please run this command:
```
yarn
```
This will install the dependencies so that we won’t have a problem related to that.

The contract code lies in the ``NCD.L1.sample--lottery/src/lottery/assembly/index.ts``. This code will be compile into WebAssembly (WASM) so that the Virtual Machine (VM) can understand what is all about.  

There are also two other files in the ``NCD.L1.sample--lottery/src/lottery/assembly`` such as ``fee-strategies.ts`` and ``lottery.ts``. Those files only exist to make code cleaner. You can easily take all the code inside them and paste them to “index.ts” and adjust minor things. It will work! However, we developers want to separate things so that we can read and fix bugs easily. That’s the reason sometimes you can see some helper files in the ``NCD.L1.sample--lottery/src/lottery/assembly`` 

Now, let’s build our code.
```
yarn build:release
```
With this command, we’ve just compiled the code into WASM. If you’ve noticed there is a new folder created on the root folder called “build”. Inside this folder, there is “release” folder and inside that folder there is the “lottery.wasm” file that we’ve just compiled. If you want, you can open this file with some extension on the vscode but it’s just a compile code consisting some binary code. This is not for humans to read, this for the machines.

The next thing we need to do is to deploy this contract. To do that, run this command:

```
near dev-deploy ./build/release/lottery.wasm
```
Once you’ve done this, you will see on your terminal something like this:
```
Starting deployment. Account id: dev-1648204299460-54143887175730, node: https://rpc.testnet.near.org, helper: https://helper.testnet.near.org, file: ./build/release/lottery.wasm
Transaction Id Bs4Cpmbyj1WH5AU78SksuSbr6mAZnkTxSJGpGATF3gqN
To see the transaction in the transaction explorer, please open this url in your browser
https://explorer.testnet.near.org/transactions/Bs4Cpmbyj1WH5AU78SksuSbr6mAZnkTxSJGpGATF3gqN
Done deploying to dev-1648204299460-54143887175730
```

A couple of things are happening here. First, ``near dev-deploy`` command creates an account. In this case, it is ``dev-1648204299460-54143887175730``. After, it deploys this contract into this account. This is very useful because developers modify, test and delete contracts a lot and nobody wants to go to the wallet and create an account every time they want to change something. Also, it creates another folder called ``neardev``. You can find your own contract id created by near dev-deploy in this folder. 

NOTE: Do not confuse the account that is created by ``near dev-deploy`` with the account you created in the https://wallet.testnet.near.org/

To make things super easy, we will create a variable on the terminal and assign our contract id to it. You should use your own contract id hereafter. 
```
export CONTRACT=dev-1648204299460-54143887175730
```
You can check if you done it correctly by typing on the terminal:
```
echo $CONTRACT
```

You should see your contract id as an output on the terminal.

If you are using Windows and facing some problem about creating this ``CONTRACT`` variable, don’t fight with it. Whenever you see ``$CONTRACT`` on the next commands, just type the contract id instead of ``$CONTRACT``.

Now, we are ready to call some methods in the ``index.ts``. 
But before that let’s login first.
We need to login our testnet account in order to sign transactions. Run this command

```
near login
```
It will open a new window on your browser and direct you to the wallet. Select your account and complete the steps. When you’ve done, it will say ``You are logged in. Please close this window``. Now you are logged in. You don’t have to do this every time. Just do it once.

In order to call “view” and “change” methods. We have to initialize the contract first.
Run this command:

```
near call $CONTRACT init '{"owner":"<your-account-id.testnet>"}' --accountId $CONTRACT
```
Now, we are ready to play this lottery! Let’s start with the `play()` method.
Run this command:

```
near call $CONTRACT play --account_id <your-account-id.testnet> --amount 1
```

The result should be something like this:

```
Scheduling a call: dev-1648206892544-47938402073916.play() with attached 1 NEAR
Doing account.functionCall()
Receipt: AqDAyDLjKSDtfe4r2vDEwLy5hqyRzAEYUouKewo8LmkS
        Log [dev-1648206892544-47938402073916]: roll: 1122949663
        Log [dev-1648206892544-47938402073916]: patika.testnet did not win.  The pot is currently 1 NEAR
Transaction Id GzkeTymL3C55s2mvoo6PU31RrhJuJmNgwsvXi6sX35s
To see the transaction in the transaction explorer, please open this url in your browser
https://explorer.testnet.near.org/transactions/GzkeTymL3C55s2mvoo6PU31RrhJuJmNgwsvXi6sX35s
''
```

This is a ``change`` method. Meaning, it will change the state of the chain. That’s why we need somebody to sign this transaction. We are specifying this signer by ``--account_id <your-account-id.testnet>``. 
(you should put your own account id instead of ``<your-account-id.testnet>``)
Because you have the public & private key of your account, you can sign this transaction.
Also, there is this ``--amount 1``. This is used when you need to attach some NEAR tokens to a certain method. We’re attaching 1 NEAR in this command. 

There are also “view” methods. Let’s take a look at some of them.
Run this command:

```
near view $CONTRACT get_owner '{}'
```

Output:
```
View call: dev-1648206892544-47938402073916.get_owner({})
'patika.testnet'
```

This command will return the owner of this contract.
If it is a ``view`` method, we say ``near view``. If it’s a ``change`` method, we say ``near call``. That’s one of the differences between ``view`` and ``change`` methods. The other difference is that we don’t need to sign this transaction.
See, we don’t have ``--account_id <your-account-id.testnet>``
It’s because we are not modifying the state. We’re just reading from the state! Anybody can do that.

Let’s take another one.
Run this command:

```
near view $CONTRACT explain_lottery '{}'
```
Output:
```
View call: dev-1648206892544-47938402073916.explain_lottery({})
'Players have a 20.0% chance of winning.'
```
This command will return the terms of the lottery.

Another one.
Run this command:

```
near view $CONTRACT get_last_played '{}'
```
Output:

```
View call: dev-1648206892544-47938402073916.get_last_played({})
'patika.testnet'
```
This command will return the player who played last.

There are many commands in this contract. Try to call them one by one and see what happens. Try to change the code a little and don’t forget to build and deploy it every time you changed something on the code. 







