---
title: Installing Fabric
description: Install Fabric and Fabric API in SKlauncher, plus tips for downloading mods and troubleshooting issues.
---

# Installing Fabric

:::danger
Always download mods from trusted sources. Anything else can damage your system.
:::

## Through SKlauncher

1. Open **SKlauncher**.
2. Go to the **Installations Manager** tab in the left menu.
3. Click **New installation**.
4. In the **Edit installation** screen:
    - Give the installation a name (e.g. `Fabric 1.21.1`).
    - Under **Version**, click **Fabric**.
    - Pick your Minecraft version in the first list and the Fabric Loader version in the second. A star marks the recommended loader version.
5. *(Optional)* Customise other settings:
    - Pick or upload an icon.
    - Change the game directory.
    - Under **More Options**, adjust memory, Java arguments, or launcher visibility.
6. Click **Save**.

## Manual install

Alternatively, close SKlauncher, then download the [official Fabric installer](https://fabricmc.net/use/installer) and run it. Open SKlauncher again when the installer is done.

:::warning
Don't run the installer while SKlauncher is open. SKlauncher only reads the list of installations when it starts, and it can remove the new installation when it saves its own changes.
:::

## Installing Fabric API

Fabric API is required by many Fabric mods.

1. Download Fabric API from [Modrinth](https://modrinth.com/mod/fabric-api/versions) or [CurseForge](https://www.curseforge.com/minecraft/mc-mods/fabric-api/files).
2. Pick the build matching your Minecraft and Fabric Loader versions.
3. Download the `.jar` file.
4. Open your **mods** folder:
    - Windows: `%appdata%\.minecraft\mods\`
    - macOS: `~/Library/Application Support/minecraft/mods/`
    - Linux: `~/.minecraft/mods/`
    - Create the folder if it doesn't exist.
    - If you set a custom [game directory](/faq/launcher-related#how-does-game-directory-work) or ticked **Use separate instance folder**, use the `mods` folder there instead.
5. Drop the `.jar` into the `mods` folder.

## Launching Fabric

1. Return to the main SKlauncher window.
2. Select your Fabric installation in the sidebar.
3. Click **Play**.

You're ready. Drop additional mod `.jar` files into the `mods` folder to use them.

## Troubleshooting

- Make sure Fabric, Fabric API, and your mods are all compatible with the same Minecraft version.
- Some mods need additional dependencies. Check each mod's documentation.
- If a mod misbehaves, check the game log for errors that point at the cause.
