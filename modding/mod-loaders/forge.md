---
title: Installing Forge
description: Install Forge in SKlauncher, plus tips for downloading mods and troubleshooting issues.
---

# Installing Forge

:::danger
Always download mods from trusted sources. Anything else can damage your system.
:::

## Through SKlauncher

1. Open **SKlauncher**.
2. Go to the **Installations Manager** tab in the left menu.
3. Click **New Installation**.
4. In the **Create new installation** window:
    - Give the installation a name (e.g. `Forge 1.21.1`).
    - Select **Forge** from the version-type list.
    - Choose your Minecraft and Forge Loader versions.
5. *(Optional)* Customise other settings:
    - Pick or upload an icon.
    - Change the game directory.
    - Under **More Options**, adjust memory, Java arguments, or launcher visibility.
6. Click **Save**.

## Manual install

Alternatively, download the [official Forge installer](https://files.minecraftforge.net/net/minecraftforge/forge/) and run it. The new installation appears in SKlauncher (restart the launcher if it doesn't show up immediately).

## Launching Forge

1. Return to the main SKlauncher window.
2. Select your Forge installation in the sidebar.
3. Click **Play**.

You're ready. Drop mod `.jar` files into the `mods` folder inside `.minecraft` (create it if missing).

## Troubleshooting

- Make sure Forge and your mods are all compatible with the same Minecraft version.
- Some mods need additional dependencies. Check each mod's documentation.
- If a mod misbehaves, check the game log for errors that point at the cause.
