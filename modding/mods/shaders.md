---
title: Installing Shaders
description: Install Iris or OptiFine shaders, find shaderpacks, and troubleshoot common issues
---

# Installing Shaders

:::info TODO
This document is a work in progress. [Contributions welcome](/contributing/docs)!
:::

:::danger
Always download mods and shaderpacks from trusted sources. Every link on this page is **official**.
:::

:::warning
Shaders are GPU-heavy. Without a capable GPU and decent CPU, expect low framerates and **lag spikes**.
:::

This guide covers the common ways to install shaders. Different shaderpacks target different shader mods, which target different mod loaders, so pick the path that matches what you have.

## Installing shaders through Iris

Iris is a shader mod compatible with all existing [OptiFine](/modding/mods/optifine) shaders. You can install it as a standalone profile or as a [Fabric](/modding/mod-loaders/fabric) / [Quilt](/modding/mod-loaders/quilt) / [NeoForge](/modding/mod-loaders/neoforge) mod.

### Through the Iris installer

> This option installs [Sodium](https://modrinth.com/mod/sodium) alongside Iris.

1. Open the [official Iris site](https://www.irisshaders.dev/download) and download the installer.
2. Run the installer and click **Download**.
3. An Iris profile appears in SKlauncher. Restart the launcher if it doesn't show up.
4. Move on to [installing shaders](#installing-iris-shaders).

### As a mod (Fabric / Quilt / NeoForge)

> This option requires one of [Fabric](/modding/mod-loaders/fabric), [Quilt](/modding/mod-loaders/quilt), or [NeoForge](/modding/mod-loaders/neoforge). It doesn't matter which unless you plan to combine Iris with other mods.

1. Open the Iris page on [Modrinth](https://modrinth.com/mod/iris).
2. Download the build matching your mod loader and Minecraft version (e.g. Fabric 1.21.4 means Minecraft `1.21.4`, platform Fabric).
3. Drop the Iris `.jar` into your `mods` folder inside `.minecraft`. Create the folder if it doesn't exist.

    > If you set a custom [game directory](/faq/launcher-related#how-does-game-directory-work), look for `mods` there instead.

4. Launch your Fabric / Quilt / NeoForge installation in SKlauncher.
5. Move on to [installing shaders](#installing-iris-shaders).

### Installing Iris shaders

You can find Iris shaders on many sites, but stick to trusted sources like [Modrinth](https://modrinth.com/shaders?g=categories:iris) or [CurseForge](https://www.curseforge.com/minecraft/search?class=shaders).

1. Download the shaderpack from a trusted site.

    > Shaderpacks are usually `.zip` archives. **Don't extract them.** On macOS, the download may arrive as a folder. Compress it back into a `.zip` before continuing.

2. Move the shaderpack `.zip` into your `shaderpacks` folder. Create it if it doesn't exist:
    - Windows: `%APPDATA%\.minecraft\shaderpacks`
    - Linux: `~/.minecraft/shaderpacks`
    - macOS: `~/Library/Application Support/minecraft/shaderpacks`

    > If you set a custom [game directory](/faq/launcher-related#how-does-game-directory-work), look for `shaderpacks` there instead.

3. Launch your Iris installation (Iris + Sodium) or your mod-loader installation (Iris mod), whichever you set up.
4. In the main menu, go to **Options > Video Settings > Shader Packs** and pick your shader.
5. Done. Tweak settings to taste for performance.

## Installing shaders through OptiFine

OptiFine includes its own shader system. You can run it as a standalone profile or as a Forge mod.

### Installing OptiFine shaders

You only need OptiFine itself. See the [OptiFine guide](/modding/mods/optifine) to install it.

1. Download the shaderpack from a trusted site like [Modrinth](https://modrinth.com/shaders?g=categories:optifine) or [CurseForge](https://www.curseforge.com/minecraft/search?class=shaders).

    > Shaderpacks are usually `.zip` archives. **Don't extract them.** On macOS, the download may arrive as a folder. Compress it back into a `.zip` before continuing.

2. Move the shaderpack `.zip` into your `shaderpacks` folder. Create it if it doesn't exist:
    - Windows: `%APPDATA%\.minecraft\shaderpacks`
    - Linux: `~/.minecraft/shaderpacks`
    - macOS: `~/Library/Application Support/minecraft/shaderpacks`

    > If you set a custom [game directory](/faq/launcher-related#how-does-game-directory-work), look for `shaderpacks` there instead.

3. Launch your OptiFine installation, or your Forge installation with the OptiFine mod.
4. In the main menu, go to **Options > Video Settings > Shaders...** and pick your shader.
5. Done. Tweak settings to taste for performance.

## Troubleshooting

### Laggy game

A common issue with several causes:

1. **Weak hardware.** Shaders need a capable GPU. If your hardware is fine but the game still lags, Minecraft may be using your iGPU instead of your dGPU. See [How to change the GPU used in the game](/faq/game-related#how-to-change-the-gpu-used-in-the-game).
2. **High shader settings.** Lower them under:
    - OptiFine: **Options > Video Settings > Shaders... > Shader Settings**
    - Iris: **Options > Video Settings > Shader Packs > Shader Pack Settings**

### My game just crashed

Multiple possible causes (mod conflicts, drivers, etc.).

1. If you have other mods, a conflict may be the cause. Check the crash log to identify the culprit. Verify you downloaded the right mod versions.

### Need more help?

1. Check the [Game troubleshooting](/troubleshooting/game-related) guide.
2. Or ask the SKlauncher community on the [Discord server](https://skmedix.pl/discord).
