# A team signing workflow

Meet the team from the previous lesson again. Ana, Ben, and Chioma hold the three keys of a 2-of-3 treasury, and Dana works in operations and holds no key.

First, the roles, because in a multisig, **proposing and signing are separate powers**. A **proposer** prepares transactions for the group; a **co-signer** can approve them with their key. Dana can propose but never move funds. That split fits many teams: finance prepares payments, leadership approves them.

## One payment, end to end

1. **Propose.** Dana creates a payment in Ledger Multisig: 2,000 USDC to a contractor's address. Nothing moves yet; the proposal is a pending transaction waiting for signatures.
2. **First review.** Ana opens the proposal and connects her device. The device screen shows what the transaction really does: recipient, amount, network. She checks and signs.
3. **Second review.** Ben does the same in another office, on his own device. Same proposal, same details, different hardware. He signs.
4. **Execute.** The threshold of two is reached, the transaction goes on-chain, and the contractor is paid.

Why is this strong? Every co-signer keeps their own boundary. Say malware controls Dana's laptop: it can create a fake proposal, and then it stalls, because it cannot sign anything. To steal this treasury an attacker must defeat two separate people and their two separate devices, and each device shows the true details, so one lying screen cannot fool every signer. One compromised laptop no longer means a lost treasury. Run the Bybit incident through this workflow and the difference is exactly one behavior: signers who read their device screens instead of their laptops.

## Two practical rules complete the setup

- **Choose M and N with care.** 2-of-3 fits a small team, a larger treasury deserves 3-of-5; avoid 1-of-N (a single key again) and avoid M equal to N (one lost key freezes everything).
- **Plan for turnover.** People leave companies: when a co-signer leaves, update the set (remove their key, add a replacement, keep the threshold safe) the day they leave. Ronin's fifth signature was a favor nobody revoked; institutional memory is not a revocation mechanism.

> **Key idea:** Every required co-signer verifies the same transaction on their own device, so an attacker must beat several people and devices at once.
