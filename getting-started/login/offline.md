---
title: Offline login
description: Everything you need to know to use offline or SKlauncher accounts
---

# Offline login

:::info
This option lets you use **any username**. That's how the game itself is coded. Nobody can access your Microsoft or SKlauncher account just by typing your username.

You can play multiplayer, but only on servers with [`online-mode=false`](/troubleshooting/game-related#failed-to-login-invalid-session).
:::

## Login

1. Open SKlauncher and click **Switch to offline mode** (currently in the bottom-left corner).
2. Type a username:
    - The same one you registered on the SKlauncher site to use your **SK account**, **or**
    - Any username you want, for a plain offline session.
3. Click **Login offline**.
4. You're now signed in.

## Common questions

### Can I really use any username with no password? Isn't that a security problem?

No. It's how offline accounts work, by Mojang's design.

If you type the username of a Microsoft account (e.g. *Notch*), the game will fetch the matching skin and cape. **You won't be able to change anything, see private data, or impersonate the real owner.** The same applies to SKlauncher accounts.

> Your data is safe regardless of the username someone else types.

### What happens on servers if I can use any username?

- **`online-mode=true` servers**: nothing. Offline accounts can't connect.
- **`online-mode=false` servers**: you can play normally. That's why most of these servers run plugins or mods that ask you to log in with a server-side password.

> If a server you've never joined before asks you to *log in* on first connect, somebody else already registered that username there.

### What data does SKlauncher store about my SKlauncher account?

- **Account data**
    - Email
    - Password (hashed with Argon2id, never plaintext)
    - Discord ID *(optional, only if you signed up via Discord)*
- **Profile data**
    - Username
    - Skin
    - Cape
    - Slim flag
- **Launcher data**
    - Google Analytics

If you didn't register an SKlauncher account, only Google Analytics data is collected.
