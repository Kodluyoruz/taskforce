# Public / Private Keys & Signing

These contents have been prepared using online resources. Patika.dev’s own contents are currently under preparation.

"_Public key cryptography uses a pair of a public key and a private key to perform different tasks. Public keys are widely distributed, while private keys are kept secret."_

"_Using a person’s public key, it is possible to encrypt a message so that only the person with the private key can decrypt and read it. Using a private key, a digital signature can be created so that anyone with the corresponding public key can verify that the message was created by the owner of the private key and was not modified since."_

"_Blockchain makes extensive use of public key cryptography."_

![images](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/Web3/publicPrivateKeysSigning/figures/Blockchain.jpeg)

"_When we talk about signatures in cryptography, we talk about some kind of proof of ownership, validity, integrity, etc. For example, they can be used for:"_

 - "_Proving that you have the private key for an address (authentication);"_
 - "_Making sure that a message (e.g., email) has not been tampered with;"_
 - "_Verifying that the version of an app you downloaded is legitimate."_

"_This is based on mathematical formulas. We take an input message, a private key and a (usually) random secret, and we get a number as output, which is the signature. Using another mathematical formula, this process can be reversed in such a way that the private key and random secret are unknown but can be verified. There are many algorithms for this, such as RSA and AES, but Ethereum (and Bitcoin) uses the Elliptic Curve Digital Signature Algorithm, or ECDSA. Note that ECDSA is only a signature algorithm. Unlike RSA and AES, it cannot be used for encryption."_

![images](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/Web3/publicPrivateKeysSigning/figures/images.png)


"_Using elliptic curve point [manipulation](https://en.wikipedia.org/wiki/Elliptic_curve_point_multiplication), we can derive a value from the private key, which is not reversible. This way we can create signatures that are safe and tamperproof. The functions that derive the values are called “[trapdoor functions](https://en.wikipedia.org/wiki/Trapdoor_function)”:
A trapdoor function is a function that is easy to compute in one direction, yet difficult to compute in the opposite direction (finding its inverse) without special information, called the “trapdoor”."_
