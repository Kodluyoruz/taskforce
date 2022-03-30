# Accounts

What is accounts? NEAR uses human-readable account names such as alice.near or bob.near instead of a public hash such as 0x71C7656EC7ab88b098defB751B7401B5f6d8976F.

These accounts also have the permission to create subaccounts such as nft.alice.near or example2.bob.near. It's important to know that only the root account can create the subaccount. So only alice.near can create nft.alice.near and only nft.alice.near can create example.nft.alice.near. Note that alice.near does not have permission to create example.nft.alice.near. Only the direct parent account has permission to create a subaccount.
