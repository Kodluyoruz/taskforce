# View & Change Methods

Methods that **do not update the state** of your application are called view methods.  

Those that do modify state are called change methods.

Calling a ``view`` method can be made without signing a transaction which means there is no account to charge for the work being done.  But if we are not charging anyone and ``view`` methods are “free”, someone is surely paying (everything we do on a blockchain costs money because validators have to be compensated somehow). So who actually pays for executing a ``view`` call?  Someone has to, right?  Well, for now validators absorb the cost of executing view methods.  This may change at some point in the future but for now you can execute methods that only read from the blockchain for free.

It’s worth noting that some operations are **not allowed** in view methods which can be confusing to new developers at first.  The basic rule of thumb is “don’t do anything that requires a signature” (like trying to read ``Context.sender``) because there is no signer (``Context.sender`` is undefined) and “don’t do anything that can become too expensive” like making a cross-contract call (because this could potentially penalize validators).

We agreed that methods that do not update the state of your application are called view methods. 

And those that **do modify state** are called change methods.

**Please do NOT use create-near-app** during this course as the code it generates will include frontend scaffolding which will almost certainly be too complicated for anything you’re trying to do at this point.
