---
title: Installation
description: Step-by-step guide to installing the SKlauncher 4.0 beta on Windows, macOS or Linux
---

# Installation

Installing 4.0 is simpler than 3.x. There is **no Java to install** and only one build per OS. Download the build for your system (see [Downloading](/4.0/getting-started/downloads)) and follow the steps below.

:::warning "Windows protected your PC" / "App can't be opened"
Beta builds are **not code-signed yet**, so your OS may show a warning on first launch. The warning is harmless. Code-signing is planned and will be funded by [community support](https://next.skmedix.pl/support-us).
:::

## Installing

:::: tabs key:os

== Windows

1. Run the **Setup** installer you downloaded.
2. If **Windows SmartScreen** appears, click **More info**, then **Run anyway**.
3. Wait for the installer to finish. The download is small and the installer fetches the rest.
4. Launch **SKlauncher** from the Start Menu or the desktop shortcut.

== Linux

1. Make the AppImage executable:

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
3. Start it from Launchpad. If **Gatekeeper** says the app can't be opened:
    - Right-click (or <kbd>Ctrl</kbd>-click) the app and choose **Open**, then confirm with **Open**, **or**
    - Go to **System Settings → Privacy & Security** and click **Open Anyway** next to the SKlauncher entry.

::::

## First launch

You don't need to [register](/getting-started/register) to try SKlauncher, but we recommend skimming the [Log in](/getting-started/login) guide before you reach the sign-in screen. You can add several Microsoft and offline accounts and switch between them without restarting.

Found a bug? Report it on [Discord](https://next.skmedix.pl/discord).

## Common questions

### Do I need to install Java?

No. The launcher itself no longer runs on Java, and each instance automatically downloads the Java version the game needs, from **Java 8** for old versions up to the latest releases.

> Want to override it anyway? You can set a custom Java path, RAM, and JVM arguments per instance in the instance settings.

### Is Setup a virus?

No. Everything in the [virus FAQ](/virus) applies, and VirusTotal results for every release are published on the [security page](https://next.skmedix.pl/security). The warnings you may see on first launch come from the missing code signature, not from anything the app does.

### Can I go back to 3.2?

Yes. The Stable channel on the downloads page still serves **3.2**, and the [3.2 documentation](/) still covers it. If something in the beta made you go back, tell us on [Discord](https://next.skmedix.pl/discord) so it can be fixed.
