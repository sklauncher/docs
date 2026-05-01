---
title: Downloading
description: Step-by-step guide to downloading SKlauncher for Windows, Linux or macOS
---

# Downloading

Grabbing SKlauncher takes three steps:

1. Open the [SKlauncher downloads page](https://skmedix.pl/downloads).
2. Pick the build for your OS:
    - **Windows**: download the **Setup** (`.exe`) installer. &nbsp;<Badge type="tip" text="Recommended" />
    - **Linux**: download the **`.jar`**.
    - **macOS**: download the **`.dmg`**.
3. Continue with the [Installation guide](/getting-started/install).

:::info
Since **3.2**, the **Windows Setup** is the recommended install method. It bundles **Java (Temurin)**, so you don't have to install Java separately. The installer is open source: [github.com/sklauncher/installer](https://github.com/sklauncher/installer).
:::

## Common questions

Some users have questions before or after downloading. The main ones:

### What's the difference between all the download options?

:::: tabs key:os

== Windows

- **Setup** &nbsp;<Badge type="tip" text="Recommended" />: the main install method since 3.2. Bundles **Java (Temurin)**, so nothing else needs to be installed. The installer itself is [open source](https://github.com/sklauncher/installer).
- **`.jar`**: requires Java to run. It's **portable**, meaning it can be run from any directory.
- **`.exe`** *(included in the `.zip` only)*: the `.jar` converted to `.exe` using Exe4j. The only difference is that the `.exe` shows an error message if Java is missing or outdated (and has a nicer icon). It's a holdover from before Setup existed and will eventually be removed.

== Linux

- **`.jar`**: requires Java to run. It's **portable**, meaning it can be run from any directory.
- **Flatpak**: will be released in the future.

== macOS

- **`.dmg` and `.app`**: both require Java to work. The `.app` inside the `.dmg` must be dragged into the Applications folder.
- **`.jar`**: also requires Java to run. It's **portable**, meaning it can be run from any directory.

::::

### Is it a virus?

Visit the [virus FAQ](/virus) for the long answer (it's a complex topic). Short version: no. SKlauncher never had, doesn't have, and never will have viruses.

## Common issues

### Download buttons aren't showing up

- Disable any ad blockers and refresh the page.
    - Also disable auto-translate and anything else that modifies the page.
- Try Incognito / InPrivate mode.
- Try another browser (Edge, Chrome, etc.).
- Wait up to 10 minutes at the error screen, the download buttons usually finish loading.

### File downloads as a `.html` file

Most likely a download manager is interfering. Disable it and try again.
