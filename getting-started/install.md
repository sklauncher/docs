---
title: Installation
description: Step-by-step guide to installing SKlauncher for Windows, Linux, or macOS, including Java setup.
---

# Installation

There are two install paths. Pick the one that matches your download.

- **[Windows Setup](#windows-setup)** &nbsp;<Badge type="tip" text="Recommended" /> &nbsp;: the `.exe` installer. Bundles Java. Click-and-go.
- **[Portable install](#portable-install)**: the `.jar` (any OS), `.exe` from the `.zip`, `.dmg`, or `.app`. Requires you to install Java yourself.

## Windows Setup

Since **3.2**, the Windows installer is the main way to set up SKlauncher. It bundles **Java (Temurin)**, so you don't have to install Java separately or run Setup as administrator. The installer is [open source](https://github.com/sklauncher/installer).

### Installing

Run the `.exe` you downloaded and follow the wizard:

1. **Select Start Menu Folder**: optional, only changes the shortcut path, not where the launcher itself goes.
2. **Ready To Install**: click **Install** to proceed, or **Back** to change the shortcut path.
3. **Installing SKlauncher**: wait for the progress bar to finish.
4. **Completing the SKlauncher 3.2 Setup Wizard**: click **Finish** and you're done.

### Running

A desktop shortcut named **SKlauncher** was created during install. Just launch it.

> Done with Setup? Skip to the [Common questions](#common-questions). The sections below only apply to portable installs.

## Portable install

Use this if you downloaded a `.jar`, the `.exe` from the `.zip`, the `.dmg`, or the `.app`. You'll need to install Java yourself.

### Java requirements

SKlauncher used to require **Java 8 with JavaFX**. That's no longer the case: you can now use the latest LTS, currently **Java 21**.

:::danger
Support for Java 8 with JavaFX will be removed in the future. **We recommend Java 21.**
:::

### Installing Java 21 &nbsp;<Badge type="tip" text="Recommended" />

:::: tabs key:os

== Windows

1. Open [Adoptium](https://adoptium.net/) and click **Latest LTS Release**.
2. Run the installer and follow the prompts.
3. On the *Custom Setup* screen, make sure these options are selected:
    - Add to PATH
    - Associate `.jar`
    - Set `JAVA_HOME` variable
    - JavaSoft (Oracle) registry key
4. Click **Next**, then **Install**.
5. Wait for the installer to finish, then click **Finish**.

== Linux

Distro coverage varies. When in doubt, follow the [Adoptium guide](https://adoptium.net/installation/) or search the web.

:::info
1. If the installer says it can't find the package, you need to [add the Adoptium repository](https://adoptium.net/installation/linux/) first.
2. To avoid prefixing every command with `sudo`, switch to root via `sudo -i`. Only do this while adding, updating, or installing the package.
:::

1. Update your package list:
    - Debian / Ubuntu: `sudo apt-get update`
    - CentOS / RHEL / Fedora: `sudo yum update`
    - openSUSE / SLES: `sudo zypper refresh`
2. Install Java 21:
    - Debian / Ubuntu: `sudo apt-get install temurin-21-jdk`
    - CentOS / RHEL / Fedora: `sudo yum install temurin-21-jdk`
    - openSUSE / SLES: `sudo zypper install temurin-21-jdk`
3. Verify with `java -version`. You should see Java 21.

== macOS

1. Open [Adoptium](https://adoptium.net/) and click **Latest LTS Release**.
2. Run the installer (or drag the icon into your Applications folder) and follow the prompts.
3. Wait for it to finish, then click **Close**.

::::

### Installing Java 8 with JavaFX

:::warning
Older Java 8 builds may be too out of date to run SKlauncher. Update if you hit issues.
:::

:::: tabs key:os

== Windows

1. Open [Liberica JDK 8](https://bell-sw.com/pages/downloads/#jdk-8-lts), scroll down to **Windows**, click **Package**, choose **Full JDK**, and download the **MSI**.
2. Run the installer and follow the prompts.
3. On the *Custom Setup* screen, confirm these are selected (they usually are by default):
    - Add to PATH
    - Associate `.jar`
    - Set `JAVA_HOME` variable
    - JavaSoft (Oracle) registry key
4. Click **Next**, then **Install**.
5. Wait for it to finish, then click **Finish**.

== Linux

Distro coverage varies. See the [Liberica downloads page](https://bell-sw.com/pages/downloads/#jdk-8-lts) for the *Installation guide* link, or search the web. You can also reference [this guide](https://docs.bell-sw.com/liberica-jdk/8u442b7/general/install-guide/#linux) (note: it pins a specific Java 8 version, not always the latest).

1. Open [Liberica JDK 8](https://bell-sw.com/pages/downloads/#jdk-8-lts), scroll down to **Linux**, click **Package**, choose **Full JDK**, and download the **DEB**, **RPM**, or whichever format suits your distro.
2. Run the installer and follow the prompts.
3. Wait for it to finish, then click **Close**.

== macOS

1. Open [Liberica JDK 8](https://bell-sw.com/pages/downloads/#jdk-8-lts), scroll down to **macOS**, click **Package**, choose **Full JDK**, and download the **PKG**.
2. Run the installer and follow the prompts.
3. Wait for it to finish, then click **Close**.

::::

### Running the portable launcher

You don't need to [register](/getting-started/register) to try it, but we recommend skimming the [Log in](/getting-started/login) guide before you reach the sign-in screen.

:::: tabs key:os

== Windows

If you didn't skip the *Custom Setup* screen while installing Java, double-click the `.exe` or `.jar` file you downloaded.

== Linux

Run from the terminal:

```sh
java -jar SKlauncher.jar
```

Make sure your working directory contains `SKlauncher.jar`, or pass the full path.

:::tip
You may need to make it executable first: `chmod +x SKlauncher.jar` (try `755` if `+x` doesn't stick).
:::

> Downloads are named `SKlauncher-<version>.jar`. Renaming to plain `SKlauncher.jar` makes shortcuts and scripts easier to maintain.

== macOS

- **`.dmg` / `.app`**: SKlauncher should appear in Launchpad; start it from there.
- **Other**:
    - Double-click `SKlauncher.jar`, **or**
    - Run `java -jar SKlauncher.jar` from a terminal (in the right directory, or with the full path).

:::tip
You may need to make it executable first: `chmod +x SKlauncher.jar` (try `755` if `+x` doesn't stick).
:::

> Downloads are named `SKlauncher-<version>.jar`. Renaming to plain `SKlauncher.jar` makes shortcuts and scripts easier to maintain.

::::

## Common questions

### What's the difference between Setup and Portable?

Before Setup existed, you had to:

- Download and install Java
- Download and start SKlauncher (`.exe` or `.jar`)

Setup automates this:

- Java is **downloaded** (not installed system-wide)
- JavaFX is **downloaded** (not installed system-wide)
- A shortcut is created that resolves to something like `%APPDATA%\sklauncher\jre\bin\javaw.exe -Xmx512M -jar %APPDATA%\sklauncher\SKlauncher.jar`

**Is Setup a virus?** No. It's [open source](https://github.com/sklauncher/installer) and built from the same GitHub Actions pipeline. Everything in the [virus FAQ](/virus) applies. A trivial change like [this](https://github.com/sklauncher/installer/commit/9c25564cfcc51aae11965ffc50bab7a52547cae3) dropped VirusTotal detections from 6 to 2; please don't relitigate this every time the `.exe` is updated.

### I have Java X but the game requires Java Y, will it work?

Yes. SKlauncher downloads the game's required Java version itself, so any Java on your machine is fine.

> If you want to use a *different* Java when actually playing (e.g. Java 21 for a 1.16.5 game that ships Java 17), see [Can I use a different Java for the game?](/faq/launcher-related#can-i-use-a-different-java-for-the-game).

### Why do I need Java 8 *with JavaFX*?

SKlauncher is built on JavaFX, which isn't bundled with vanilla Java 8. You need either Java 8 + JavaFX or Java 21.

### Can I avoid installing Java entirely?

Yes, but you'll need to:

1. Use a **portable Java** distribution:
    - Windows: `.zip` format
    - Linux / macOS: `.tar.gz` format
2. Run SKlauncher from the command line: `java -jar SKlauncher.jar`

:::info
This approach assumes you're comfortable with:
- working directories
- relative vs. absolute paths
- quoting paths that contain spaces

Example for Windows, with the working directory set to *Downloads*:

```bat
"jdk-21.0.5+11\bin\java.exe" -jar SKlauncher.jar
```
:::

### Can I install SKlauncher to a different folder?

Yes. See [Can I install SKlauncher in another folder?](/faq/launcher-related#can-i-install-sklauncher-in-another-folder).

## Common issues

:::tip
Did you have Java installed before, then install the one from this guide? Or uninstall every Java and now you're about to install the one from this guide?

**Restart your PC**. It often saves a lot of debugging.
:::

### "Temurin 21 is installed, but it says I don't have Java"

You probably skipped the *Custom Setup* screen. Reinstall Java 21 and follow the [Windows steps above](#installing-java-21-recommended) carefully.

### "Liberica 8 is installed, but it says I don't have Java 8 with JavaFX"

You probably installed **Liberica 8 Standard Edition**. Reinstall and pick **Full JDK** at [the downloads page](https://bell-sw.com/pages/downloads/#jdk-8-lts).
