---
title: Installing OptiFine
description: Install OptiFine standalone, with Forge, or via OptiFabric
---

# Installing OptiFine

## Download

1. Open the [OptiFine website](https://optifine.net).
2. Find the build for your Minecraft version.
3. Click **(Mirror)** next to the version you want.
4. Click **Download**.

## Install

There are two install paths:

- **Standalone** : run the `.jar` you just downloaded. Use this if you don't need OptiFine alongside other mods.
- **As a Forge mod** : drop the `.jar` into the `mods` folder. Use this to combine OptiFine with other mods. Requires [Minecraft Forge](https://files.minecraftforge.net). **Fabric is not officially supported.**

### Using the installer (standalone)

> Make sure you've launched the matching Minecraft version at least once before running the installer.

1. Run the `.jar` you downloaded.
2. Click **Install**.
3. Restart SKlauncher.
4. Select the **OptiFine** profile.
5. Done.

### As a Forge mod

1. Open the **Installations Manager** and create a new installation.
2. In the version chooser, select **Forge** and pick your Minecraft version.
3. Customise as needed and save.
4. Right-click the new installation and choose **Open Installation Directory**.
5. The file manager opens at the game directory. Create a `mods` folder inside it.
6. Drag your OptiFine `.jar` into that folder.
7. Done.

## Using OptiFine with Fabric

You can install [OptiFabric](https://www.curseforge.com/minecraft/mc-mods/optifabric), but it's <span style="color: var(--vp-c-danger-1)">not recommended</span> due to compatibility issues. Even OptiFabric's author suggests alternatives:

- [Sodium](https://modrinth.com/mod/sodium) replaces OptiFine's performance role and runs natively on Fabric, often with better results.
- Sodium doesn't include shader support directly. Pair it with [Iris Shaders](https://modrinth.com/mod/Iris) for shaders. See the [Sodium + Iris guide](/modding/mods/shaders#installing-shaders-through-iris).

## OptiFine shaders

OptiFine has built-in shader support. Once installed, see the [shaders guide](/modding/mods/shaders#installing-shaders-through-optifine).

## Common questions

### Why isn't OptiFine installed automatically?

Downloading OptiFine routes you through ads. Without those ads, sp614x (OptiFine's creator) would have to fund hosting out of pocket. The OptiFine site is also explicit about distribution:

> Can I include OptiFine in my modpack?
> Generally no, unless you have an explicit permission from us.
>
> [OptiFine FAQ](https://optifine.net/faq)

> It may not be placed on any web site or otherwise distributed publicly without advance written permission.
> Use of this mod on any other website or as a part of any public display is strictly prohibited and a violation of copyright.
>
> [OptiFine Copyright](https://optifine.net/copyright)

The creator doesn't want OptiFine integrated into other launchers, and SKlauncher respects that.
