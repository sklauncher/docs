---
title: Microsoft login
description: Everything you need to know to use your Microsoft account in SKlauncher
---

# Microsoft login

:::info
This option is **only for users who own [Minecraft: Java Edition](/faq/launcher-related#where-can-i-buy-the-game)** (or have it through Game Pass) *and* have signed in to it at least once via the [Minecraft Launcher](https://www.minecraft.net/en-us/download) ([alternative download](https://www.minecraft.net/en-us/download/alternative)).
:::

## Login

1. Open SKlauncher and click **Login with Microsoft**.
2. Your default browser opens an official Microsoft sign-in page. Sign in with the account that owns Minecraft: Java Edition.
3. Approve the **ReLogin** app when prompted.
4. You'll be redirected to a local page saying you can close the browser tab. Do so.
5. Back in SKlauncher, you should now be signed in with your Microsoft account.

## Common questions

### What is ReLogin? Is it dangerous?

It's a generic Microsoft Azure application that handles the OAuth 2.0 flow to fetch the access token used to play. Exactly what every launcher does, in plain terms.

> On 30th August 2024, for a few hours, we briefly switched from *ReLogin* to *Auth Me for Minecraft*, then switched back. If you see *Auth Me for Minecraft* in [Microsoft → Manage applications](https://account.live.com/consent/Manage), that's why.

It's not dangerous. Don't share your access or refresh tokens publicly. If you think one leaked, you can revoke them manually:

- **Refresh token**: remove ReLogin in [Microsoft → Manage applications](https://account.live.com/consent/Manage).
- **Access token**: change your Microsoft password in [Microsoft → Change your password](https://account.live.com/password/Change).

### What data does SKlauncher store about my Microsoft account?

- **From the launcher**: Google Analytics data.
- **About your Microsoft account**: nothing on our servers. The launcher keeps your Minecraft name, UUID and login token on your own PC, so you stay logged in.

## Common issues

### "Sorry, we couldn't log you in!" / "No Minecraft profile found!"

Read the error message and follow what it says. If that doesn't help:

1. Check that [Xbox Live](https://support.xbox.com/en-US/xbox-live-status) isn't down.
2. Re-read the info at the top of this page. Both conditions must hold. If you have Game Pass, open the official Minecraft Launcher once to set up your username.
3. Restart the launcher and try again.
4. Still stuck? [Ask in Discord](https://skmedix.pl/discord) and attach `sklauncher_logs.txt`. Click <u>Open Log</u> in the launcher to open the folder that has it.
