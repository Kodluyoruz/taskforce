# DApps

These contents have been prepared using online resources. Patika.dev’s own contents are currently under preparation.

A typical web application is programmed using a client–server structure. The user ("client") is provided services through an off-site server hosted by a third-party.

Applications are usually broken into logical chunks called "tiers", where every tier is assigned a role. Though many variations are possible, the most common structure is the three-tiered representation: presentation (front-end), application (back-end) and storage (database).

Decentralized applications (or dApps) follow the same structure overall. The only difference is that the back-end gets enhanced by connecting it to public Web3 infrastructure. The front-end and the storage can be integrated in dApps just like in any other Apps.

In a dApp, security and access are provided by cryptography (public/private keys) rather than username and password or oAuth. This approach is also called passwordless identification. Users keep their identity through dApps rather than having a different one in each or rely on third-party identity management.

For users, access to the open web is based only on a private key, which is used to unlock all dApps and services on the blockchain.

Users access and interact with dApps with a web browser just like any other App; this makes it easy for them to switch. And dApps offer many improvements to the user experience:

- Identification is done only once for access across dApps
- Ownership of personal data remains in users’ hands at all times
- Interactions are opt-in by default
- Payment and exchanges are handled just like any other action

Behind the scenes, the framework connecting users with digital services is slightly different with a dApp. Consider all the possible aspects of an application that may be decentralized:

- Backend software (application logic)
- Frontend software
- Data storage


**Backend (application logic)**

The backend of a dApp is just the same as any other app, except that it’s connected to the blockchain for at least some of its services, like access control, storage of transactions and balances, or programmatic guarantee of agreements between users.

**Frontend (Web User Interface)**

The client-side interface of a dApp can use standard web technologies (HTML, CSS, JavaScript, etc.). This allows a traditional web developer to use familiar tools, libraries, and frameworks.

Interactions with the blockchain, such as signing messages, sending transactions, and managing keys, are often conducted through the web browser via an extension such as the NEAR Wallet. It is also possible to create native mobile dApps.

**Data Storage**

Data storage can be handled the same in dApps as in other Apps, with the extra ability to store information into the blockchain. That is handy when one wants to verifiably and permanently save actions or transactions.

Storing and distributing significant static assets on a blockchain would be inefficient as the cost would be too high. This is why images, videos, and resources of the application’s frontend web interface (HTML, CSS, JavaScript, etc.) are generally not stored on the blockchain itself.

Besides cloud databases and other centralized solutions, data can be stored on P2P platforms such as the InterPlanetary File System (IPFS); P2P storage is an excellent alternative while maintaining a trustless environment for the dApp.


[For further information: DApps](https://near.academy/near101/chapter-2)
