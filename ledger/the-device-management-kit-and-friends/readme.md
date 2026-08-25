# The Device Management Kit and friends

**Why this matters:** Picking the right kit on day one saves you from rebuilding on a deprecated library later.

Now the toolbox. Four names cover most integration work, and one of them is the base for the others.

The base is the **Device Management Kit (DMK)**: a TypeScript library for communicating with Ledger devices. It handles discovery, connection, and device information, and it orchestrates the signing flow. The repo is `github.com/LedgerHQ/device-sdk-ts`. The DMK replaces the older LedgerJS libraries, so when you find old tutorials built on LedgerJS, treat them as history rather than guidance.

**One honest flag, straight from Ledger's own docs:** the DMK is early-stage and breaking changes are possible. Treat it like any young dependency: pin your versions, read release notes before upgrading, and wrap it behind your own interface.

On top of the DMK sit the **Device Signer Kits**, per-chain signing SDKs for Ethereum, Bitcoin, and Solana. The DMK gets you a connected device; a Signer Kit speaks your chain's transaction format. Two more tools target the app and web side: the **Wallet API** builds Live Apps (apps that run inside Ledger Wallet's Discover section from Module 3) and the **Ledger Wallet Provider** is a web SDK that embeds Ledger's ready-made connect flow in your dApp.

| Tool | What it is | Use it when |
|---|---|---|
| **Device Management Kit (DMK)** | TypeScript library: discovery, connection, signing orchestration | Your own software must talk to Ledger devices |
| **Device Signer Kits** | Per-chain signing SDKs on top of the DMK (Ethereum, Bitcoin, Solana) | You need signing for a specific chain |
| **Wallet API** | Builds Live Apps for Ledger Wallet's Discover section | You want your service inside the Ledger Wallet app |
| **Ledger Wallet Provider** | Web SDK with a ready-made connect flow | Your dApp needs a "Connect Ledger" option |

To make it concrete, the shape of a minimal DMK integration looks like this (a sketch rather than gospel, since the API is young; check the portal for the current signatures):

```ts
import {
  DeviceManagementKitBuilder,
  ConsoleLogger,
} from "@ledgerhq/device-management-kit";
import { webHidTransportFactory } from "@ledgerhq/device-transport-kit-web-hid";

// 1. Build the kit with a transport (WebHID in the browser)
const dmk = new DeviceManagementKitBuilder()
  .addTransport(webHidTransportFactory)
  .addLogger(new ConsoleLogger())
  .build();

// 2. Discover and connect to a device
dmk.startDiscovering({}).subscribe(async (device) => {
  const sessionId = await dmk.connect({ device });
  // 3. From here, hand the session to a Signer Kit
  //    (e.g. @ledgerhq/device-signer-kit-ethereum)
  //    to derive an address or sign a transaction.
  console.log("Connected:", await dmk.getConnectedDevice({ sessionId }));
});
```

A typical dApp stack: the Ledger Wallet Provider for the connect flow, or the DMK plus the Ethereum Signer Kit for full control. Either way, the boundary stays where it belongs, on the device.

> **Key idea:** Use the DMK plus a Signer Kit for device work, and the Wallet API or Wallet Provider for app and web surfaces.
