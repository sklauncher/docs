---
title: Game related
description: Problems with Minecraft Java Edition (the game)
---

# Game related

## Game doesn't start due to GLFW, OpenGL, `ig7icd64.dll`, or `atio6axx.dll`

Things to try (search the web for any step that's unfamiliar):

- **Update GPU drivers** from the GPU vendor's site. Don't trust automatic update tools that say "you're up to date". Update manually to be sure.
    - No dGPU? Update CPU drivers, which usually bundle iGPU drivers.
- **Reinstall GPU drivers**, ideally with a clean install (factory-reset settings).
    - Even if it doesn't prompt you, restart the PC after.
- Set the game to [prefer high-performance graphics](/faq/game-related#how-to-change-the-gpu-used-in-the-game) in the OS or driver control panel.

:::info
If you've done everything correctly and it still fails, your GPU likely no longer supports the OpenGL version your target Minecraft version requires.

For example: Release 1.17 jumped from OpenGL 2.0 to 3.2. If your GPU only supports OpenGL 3.1, stick to versions before 1.17.

A mod might fix this in some cases. Just be wary of mods that ask you to drop random `.dll` files into system folders.
:::

## "Crash Report: Report was empty"

Since the report itself is empty, please share your [logs in debug mode](/faq/launcher-related#where-are-the-logs-located). That gives the developer something to work with.

The likely cause: forced dGPU usage from launcher settings. Try [disabling Use Dedicated GPU](/faq/game-related#how-to-change-the-gpu-used-in-the-game) (Option A, but **disable**, not enable). Others report it's GPU-driver related, in which case work through the [three points above](#game-doesnt-start-due-to-glfw-opengl-ig7icd64-dll-or-atio6axx-dll).

:::info
If disabling Use Dedicated GPU fixed it, please re-enable it and submit [debug-mode logs](/faq/launcher-related#where-are-the-logs-located) so the bug can be tracked down properly.
:::

## Release 1.13+ doesn't launch on Linux x86 (32-bit)

Minecraft's engine (LWJGL) dropped 32-bit Linux support in LWJGL 3. Either play older versions, or install Linux x64 (64-bit).

## Invalid signature for profile public key

This error can hit both Microsoft and Offline accounts.

:::: tabs key:account-type

== Microsoft accounts

- Confirm [Xbox Live](https://support.xbox.com/en-US/xbox-live-status) isn't down.
- Follow the on-screen advice. Restart the game and the launcher. Try logging out and back in.

== Offline accounts

- The server only allows accounts with a Mojang-signed public key (`enforce-secure-profile=true`).
    - If it's your server, set `enforce-secure-profile=false` in `server.properties` and restart the server.

::::

## Failed to login: Invalid session

This error can hit both Microsoft and Offline accounts.

:::: tabs key:account-type

== Microsoft accounts

- Confirm [Xbox Live](https://support.xbox.com/en-US/xbox-live-status) isn't down.
- Follow the on-screen advice. Restart the game and the launcher. Try logging out and back in.

== Offline accounts

- The server is in online mode (`online-mode=true`), which only accepts Microsoft accounts.
    - If it's your server, set `online-mode=false` in `server.properties` and restart the server.
- Or a Microsoft account with the same name has already joined that server. Pick a different username (check availability on [Xyrios](https://xyrios.com/minecraft/)).

::::

## Need more help?

If your problem isn't here, see the [Web related FAQ](/faq/web-related#need-more-help) for ways to reach the community.
