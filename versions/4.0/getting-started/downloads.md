---
title: Downloading
description: Step-by-step guide to downloading the SKlauncher 4.0 beta for Windows, macOS or Linux
---

# Downloading

:::danger Avoid fake download sites
There are fake websites that distribute malware disguised as SKlauncher. The **only** official sites are [skmedix.pl](https://skmedix.pl) and the 4.0 beta site, [next.skmedix.pl](https://next.skmedix.pl). Never download SKlauncher from anywhere else.
:::

While 4.0 is in beta, its downloads live on the beta site. Grabbing it takes a few steps:

1. Open the [SKlauncher 4.0 downloads page](https://next.skmedix.pl/downloads) (next.skmedix.pl).
2. Make sure the **Beta** channel is selected. The **Stable** channel is still **3.2**, covered by the [3.2 documentation](/getting-started/downloads).
3. Pick the build for your OS:
    - **Windows**: download the **Setup** installer (x64).
    - **macOS**: download the **`.dmg`**.
    - **Linux**: download the **AppImage** (x86_64).
4. Continue with the [Installation guide](/4.0/getting-started/install).

:::info No Java needed
The 4.0 launcher does not need Java to run. Each instance also downloads the Java version it needs on its own.
:::

## System requirements

:::: tabs key:os

== Windows

| | |
|---|---|
| **Operating system** | Windows 10 (version 1909) or later |
| **Processor** | 64-bit x86 processor |
| **Memory** | 4 GB minimum, 8 GB recommended |
| **Storage** | ~120 MB for the launcher, plus space for game files |

== Linux

| | |
|---|---|
| **Operating system** | Most modern distributions (Ubuntu 20.04+, Fedora 34+, Arch) |
| **Processor** | 64-bit x86 processor |
| **Memory** | 4 GB minimum, 8 GB recommended |
| **Storage** | ~118 MB for the launcher, plus space for game files |

== macOS

| | |
|---|---|
| **Operating system** | macOS 12 Monterey or later |
| **Processor** | Intel or Apple Silicon (Universal binary) |
| **Memory** | 4 GB minimum, 8 GB recommended |
| **Storage** | ~125 MB for the launcher, plus space for game files |

::::

## Common questions

### Is it a virus?

Visit the [virus FAQ](/virus) for the long answer (it's a complex topic). Short version: no. SKlauncher never had, doesn't have, and never will have viruses. Every release is scanned with VirusTotal and the results are published on the [security page](https://next.skmedix.pl/security).

### Why does my OS warn me about the app?

Beta builds are **not code-signed yet**, so Windows SmartScreen or macOS Gatekeeper may show a warning on first launch. The warning is harmless. See [Installation](/4.0/getting-started/install) for how to get past it. Code-signing is planned and will be funded by [community support](https://next.skmedix.pl/support-us).

### Can I keep using 3.2?

Yes. The Stable channel on the downloads page still serves **3.2**, and the [3.2 documentation](/) still covers it.

## Common issues

### Download buttons aren't showing up

- Disable any ad blockers and refresh the page.
    - Also disable auto-translate and anything else that modifies the page.
- Try Incognito / InPrivate mode.
- Try another browser (Edge, Chrome, etc.).
- Wait up to 10 minutes at the error screen, the download buttons usually finish loading.

> Ads cover the servers behind the launcher and downloads, keeping the project running for everyone.

### File downloads as a `.html` file

Most likely a download manager is interfering. Disable it and try again.
