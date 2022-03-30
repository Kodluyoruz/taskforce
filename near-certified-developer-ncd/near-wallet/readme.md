# NEAR Wallet

## What is NEAR Wallet?

NEAR Wallet is an in-browser, web-based wallet for creating and interacting with NEAR accounts. This wallet stores account keys in the browser's `localStorage`


[Source](https://docs.google.com/presentation/d/1jNpzqRAm44HGefgrlOpXV-qwJQQ1X8JOBSpxhkUNchI/edit#slide=id.g86d27c84b2_0_680)

When users are redirected back to your app, they can find in LocalStorage a copy of the private keys giving your app FunctionCall access to their account

In Chrome Developer Tools

1. Open  LocalStorage in the Application tab

2. Storage key  name will be something like near-api-js:keystore:ACCOUNT:default

3. Storage value will be the account private key

4. And using the code snippets presented on #4, keys are accessible at this path
