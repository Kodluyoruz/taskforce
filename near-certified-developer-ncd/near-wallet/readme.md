# What is NEAR Wallet?

NEAR Wallet is an in-browser, web-based wallet for creating and interacting with NEAR accounts. This wallet stores account keys in the browser's `localStorage`

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/near-certified-developer-ncd/near-wallet/figures/figures.png)

When users are redirected back to **your app**, they can find in LocalStorage a copy of the private keys giving your app FunctionCall access to **their account**

In Chrome Developer Tools

- Open  LocalStorage in the Application tab

- Storage key  name will be something like near-api-js:keystore:ACCOUNT:default

- Storage value will be the account private key

- And using the code snippets presented on #4, keys are accessible at this path
