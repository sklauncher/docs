---
title: Installation
description: Step-by-step guide to installing the SKlauncher 4.0 beta on Windows, macOS or Linux
---

# Installation

Installing 4.0 is simpler than 3.x. There is **no Java to install**. Download the build for your system (see [Downloading](/4.0/getting-started/downloads)) and follow the steps below.

:::warning "Windows protected your PC"
Windows builds are **not code-signed yet**, so Windows may show a warning on first launch. The warning is harmless. Code-signing is planned and will be funded by [community support](https://next.skmedix.pl/support-us).
:::

## Installing

:::: tabs key:os

== Windows

1. Run the **Setup** installer you downloaded.
2. If **Windows SmartScreen** appears, click **More info**, then **Run anyway**.
3. Wait for the installer to finish. It installs for your Windows user only, so it doesn't ask for admin rights. SKlauncher opens when it's done.
4. Next time, start it from the **SKlauncher 4.0** shortcut in the Start Menu or on your desktop.

== Linux

We recommend [Gear Lever](https://flathub.org/apps/it.mijorus.gearlever) to manage the AppImage. It works on any distribution and adds SKlauncher to your app menu, so you can launch it like any other installed app. SKlauncher updates itself either way.

1. Install Gear Lever from Flathub:

    ```sh
    flatpak install flathub it.mijorus.gearlever
    ```

    > No `flatpak` command? Follow the [Flatpak setup guide](https://flatpak.org/setup/) for your distro first.

2. Open the downloaded AppImage with Gear Lever: right-click the file, choose **Open With → Gear Lever**, or drag it into the Gear Lever window.
3. Click **Unlock**, then **Move to the app menu**.
4. Launch **SKlauncher** from your app menu.

**Running the AppImage directly**

Prefer not to install anything? You can run the AppImage on its own; it just won't show up in your app menu:

1. Make it executable:

    ```sh
    chmod +x SKlauncher*.AppImage
    ```

2. Run it. Double-click it in your file manager, or start it from the terminal:

    ```sh
    ./SKlauncher*.AppImage
    ```

:::tip
If the AppImage refuses to start, your distro may be missing FUSE (common on fresh Ubuntu 22.04+ installs). Install `libfuse2` with your package manager and try again.
:::

== macOS

1. Open the **`.dmg`** you downloaded.
2. Drag **SKlauncher** into your **Applications** folder.
3. Start it from Launchpad or your Applications folder. The first time, macOS asks if you're sure you want to open an app downloaded from the internet. Click **Open**.

:::tip
Don't run SKlauncher straight from the `.dmg` window. It can only update itself from the Applications folder.
:::

::::

## First launch

The sign-in screen has two options:

- **Microsoft**: use this if you own Minecraft: Java Edition. Click **Continue with Microsoft** and finish signing in in your browser.
- **SKlauncher**: use this to play offline. Type a username and click **Log in**.

You don't need to [register](/getting-started/register) to try SKlauncher. The 3.2 [Log in](/getting-started/login) guide explains both options in more detail, but its button names are from 3.2. You can add several Microsoft and offline accounts and switch between them without restarting.

Found a bug? Report it on [Discord](https://next.skmedix.pl/discord).

## Common questions

### Do I need to install Java?

No. The launcher itself no longer runs on Java, and each instance automatically downloads the Java version the game needs, from **Java 8** for old versions up to the latest releases.

> Want to override it anyway? You can set a custom Java path, RAM, and JVM arguments per instance in the instance settings.

### Is Setup a virus?

No. Everything in the [virus FAQ](/virus) applies, and VirusTotal results for every release are published on the [security page](https://next.skmedix.pl/security). The Windows warning you may see on first launch comes from the missing code signature, not from anything the app does.

### Can I go back to 3.2?

Yes. The Stable channel on the downloads page still serves **3.2**, and the [3.2 documentation](/) still covers it. If something in the beta made you go back, tell us on [Discord](https://next.skmedix.pl/discord) so it can be fixed.
