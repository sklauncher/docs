---
title: Installing Quilt
description: Install Quilt in SKlauncher, plus tips for downloading mods and troubleshooting issues.
---

# Installing Quilt

:::danger
Always download mods from trusted sources. Anything else can damage your system.
:::

## Through SKlauncher

1. Open **SKlauncher**.
2. Go to the **Installations Manager** tab in the left menu.
3. Click **New installation**.
4. In the **Edit installation** screen:
    - Give the installation a name (e.g. `Quilt 1.21.1`).
    - Under **Version**, click **Quilt**.
    - Pick your Minecraft version in the first list and the Quilt Loader version in the second. A star marks the recommended loader version.
5. *(Optional)* Customise other settings:
    - Pick or upload an icon.
    - Change the game directory.
    - Under **More Options**, adjust memory, Java arguments, or launcher visibility.
6. Click **Save**.

## Manual install

Alternatively, close SKlauncher, then download the [official Quilt installer](https://quiltmc.org/en/install/) and run it. Open SKlauncher again when the installer is done.

:::warning
Don't run the installer while SKlauncher is open. SKlauncher only reads the list of installations when it starts, and it can remove the new installation when it saves its own changes.
:::

## Launching Quilt

1. Return to the main SKlauncher window.
2. Select your Quilt installation in the sidebar.
3. Click **Play**.

You're ready. Drop mod `.jar` files into the `mods` folder inside `.minecraft` (create it if missing). If you set a custom [game directory](/faq/launcher-related#how-does-game-directory-work) or ticked **Use separate instance folder**, use the `mods` folder there instead.

## Troubleshooting

- Make sure Quilt and your mods are all compatible with the same Minecraft version.
- Some mods need additional dependencies. Check each mod's documentation.
- If a mod misbehaves, check the game log for errors that point at the cause.
