# Money

Money in a NEAR contract is just a value, like any other number, but potentially very very big.

We use u128 to store and control money because we need a lot of space to hold all the little pieces of it.  The smallest monetary unit of NEAR is a yoctoNEAR which is 1 NEAR token divided by 10e24 (1 with 24 zeros after it) which is very very small.  Sending or receiving just 1 NEAR means we need 10e24 pieces of yoctoNEAR

Money on NEAR is exposed to developers using the Context object in AssemblyScript and can be sent as an “attachment” to a function call
Money can also be sent directly from inside a function over to another NEAR account using cross-contract calls

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/near-certified-developer-ncd/money/figures/figures.png)
