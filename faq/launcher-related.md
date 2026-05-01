---
title: Launcher related
description: Questions about SKlauncher (the launcher itself)
---

# Launcher related

:::tip
Before you dig in here, check these first:

- [Installation common questions](/getting-started/install#common-questions)
- [Log in](/getting-started/login)
:::

## Where is SKlauncher installed?

Depending on which build you grabbed, SKlauncher isn't really *installed*. It's downloaded into the same folder as the game.

:::info
1. Copy the path for your OS into the address bar of your file manager to jump there.
    - On Linux and macOS, dot-folders (e.g. `.minecraft`) are hidden by default.
2. These are the **default** paths. They differ if you [moved SKlauncher to another folder](#can-i-install-sklauncher-in-another-folder).
:::

### Minecraft location

:::: tabs key:os

== Windows

- `%APPDATA%\.minecraft`

== Linux

- `~/.minecraft`

== macOS

- `~/Library/Application Support/minecraft`

::::

### SKlauncher location

:::: tabs key:os

== Windows

- **Setup case**: `%APPDATA%\sklauncher`
- **Other cases**: same as the Minecraft path.

== Linux

- Same as the Minecraft path.

== macOS

- **`.dmg` / `.app` case**: `~/Applications/sklauncher`
- **Other cases**: same as the Minecraft path.

::::

## Can I install SKlauncher in another folder?

Yes, run it with `--workDir`. A few things to know:

1. Use **absolute paths**. Relative paths or `.` (current directory) can break things.
2. Everything that would have gone into [`.minecraft`](#where-is-sklauncher-installed) ends up in your `workDir` instead.
3. If you already have [game directories](#how-does-game-directory-work) defined, update them to the new path.

:::info
This is where SKlauncher (and the game) downloads everything when not using Setup. If you mean the Windows Setup specifically: modify the install or reinstall, and pick the location yourself when prompted.
:::

:::: tabs key:os

== Windows

Create a shortcut (or edit an existing one), or run from CMD / Terminal:

- **Shortcut**: right-click `SKlauncher.exe` / `.jar` > **Create shortcut** > right-click the new shortcut > **Properties** > **General** tab > **Target**: append `--workDir "C:\Games\SKlauncher"` (see [reference image](/img/faq/launcher-related/workDir-Example.png)).
- **CMD**: `SKlauncher.exe --workDir "C:\Games\SKlauncher"` or `java.exe -jar SKlauncher.jar --workDir "C:\Games\SKlauncher"`

== Linux

- Terminal: `java -jar SKlauncher.jar --workDir "$HOME/Games/SKlauncher"`

== macOS

- **`.dmg` / `.app` case**:
    - Terminal: `java -jar ~/Applications/sklauncher/SKlauncher.jar --workDir "$HOME/Games/SKlauncher"`
- **Other cases**:
    - Terminal: `java -jar SKlauncher.jar --workDir "$HOME/Games/SKlauncher"`

::::

## Difference between Microsoft and Offline?

The [Log in](/getting-started/login) guide already explains this; here's a quick summary.

|                              |      Microsoft      |        SKlauncher       |        Offline       |
|:----------------------------:|:-------------------:|:-----------------------:|:--------------------:|
|       Change your skin       |         Yes         |           Yes           |          No          |
|       Change your cape       | Only if you won one |           Yes           |          No          |
| Visibility of your skin/cape |        Global       | SKlauncher players only |          No          |
|     Servers you can join     |         Any         |   Offline servers only  | Offline servers only |

> Even more is covered in the [Log in](/getting-started/login) guide.

Microsoft has the clear advantage. The only real limit is the [Cape](https://minecraft.wiki/w/Cape). You also support the creators, who have been updating the game for over {{ new Date().getFullYear() - 2009 }} years and still let you play every version released so far.

## Can I use SKlauncher if I own Minecraft: Bedrock Edition?

No. SKlauncher is a launcher for **Minecraft: Java Edition** only. That said:

- If you own **Minecraft: Bedrock Edition for PC**, you should be able to claim **Java Edition for free**, which works with the launcher.
- If you only own Bedrock on console (Xbox, PlayStation, etc.) or mobile (iOS, Android), you'll need to [buy Java Edition for PC](#where-can-i-buy-the-game) separately.

## Where can I buy the game?

- **One-time payment**: [Official site](https://www.minecraft.net/store/minecraft-java-bedrock-edition-pc) or [Microsoft Store](https://www.microsoft.com/p/apps/9nxp44l49shj).
- **Subscription**: [Xbox Game Pass for PC](https://www.xbox.com/games/store/game-pass-para-pc/cfq7ttc0kgq8).
- **Temporary**: [Free Trial](https://www.minecraft.net/free-trial).

:::info
Always confirm you're buying **Minecraft: Java Edition**. Currently the listing usually bundles Java + Bedrock together, which is fine.
:::

:::danger
Reseller / key-selling sites can be cheaper, but tread carefully. Stolen keys hurt everyone: the creator loses money chasing fraud, and you can lose access to the game when the key is invalidated.
:::

## Is SKlauncher piracy?

No. All game files come from official Mojang servers (which are publicly accessible and even include the launch parameters to use). Nothing is re-hosted or cracked. The same way a server picks its [`online-mode`](/troubleshooting/game-related#failed-to-login-invalid-session), the client can toggle demo mode.

Third-party launchers exist to make life easier (mod loaders, mods, modpacks, etc.). You could literally start the game with a hand-written `.bat` / `.sh` file.

## Is SKlauncher a virus?

See the [virus FAQ](/virus) for the full answer (it's a complex topic). Short version: no. SKlauncher never had, doesn't have, and never will have viruses.

## Is SKlauncher open source?

Not at the moment. There are plans to open-source it eventually. The current code isn't obfuscated, so you can decompile and inspect it yourself. The Windows installer **is** open source: [github.com/sklauncher/installer](https://github.com/sklauncher/installer).

> We would like to go open-source in 2024, but it's not so simple. Many parts of the launcher is not ready for foss, but I would love to make it foss. When I started this project I never intended it to be open-source as you need some sacrifices for it,
> and back then most of the projects weren't open-source, and a lot still isn't.
> Just look for paid plugins on spigot, it's closed source and even obfuscated. Does sticking a price makes it safe? No. But yes, java is fully decompilable, and you can read the code pretty close to the original (unless it's obfuscated),
> there are some launchers that are open-source, there are launchers that are closed source, and bruh, there are launchers that are open source where the source is obfuscated, so it's not really open source. But here you can read the source, while the licenses doesn't allow you to just clone the launcher for your needs.
> I wouldn't like to see my work where someone just changed it's name and logo, but's thats the price of being open source
>
> [Source: Discord message](https://discord.com/channels/141669825129873409/290149381548670976/1191138312392552448)

> **Open source ≠ secure.** Platforms like GitHub don't warn you about dangerous code, and "open source" can lull you into thinking *somebody else already audited this*. Often, nobody has.

## Can I force Demo mode?

Yes. Run the launcher with `--demo`. Skin and cape should still be visible.

## Can I use clients, mods, resource packs, shaders, etc. in SKlauncher?

Yes. Anything that works for the **Minecraft Launcher** should work in **SKlauncher**. Only the install path may differ:

- **SKlauncher 3.2.x**: install Mod Loaders and Modpacks from the *Installations Manager*. Minecraft Launcher requires you to do this manually.
- **SKlauncher 3.3.x** &nbsp;<Badge type="info" text="Not released yet" />: in addition to the above, install Mods, Resource Packs, Shaders, and Maps directly.

:::info
Some clients (and a few mods) require **Compatibility Mode**, which disables the SKlauncher skin system.

The [Modding guide](/category/modding) walks through mod loaders. For everything else, [Google](https://www.google.com/) and [YouTube](https://www.youtube.com/) are your friends. A few tips:

- Right-click an installation > **Open installation directory** to find your real game folder (matters if you've set a [Game Directory](#how-does-game-directory-work)).
- Just like the launcher pulls from [CurseForge](https://www.curseforge.com/minecraft) and [Modrinth](https://modrinth.com/), you can browse those sites manually.
- Guides for the Minecraft Launcher (manual installs) are fine. Guides for other launchers may not work.
:::

## How does Game Directory work?

[`--workDir`](#can-i-install-sklauncher-in-another-folder) basically says *"my `.minecraft` lives elsewhere"*. **Game Directory** does the same thing per **installation**. It's how you keep options, worlds, and mods separated between, say, Release 1.8 and Release 1.16.5.

- **Game Directory not set**: all installations share one set of worlds, options, and mods.
- **Game Directory set**:
    - Most files still download to `.minecraft` (you'll still install your Mod Loader there).
    - Per-instance assets (individual mods, options, worlds, game / crash logs, etc.) live in the Game Directory.

![Reference image](/img/faq/launcher-related/gamedir.png)

:::tip
In the reference image, *Vanilla 1.17.1* uses `"%APPDATA%\.minecraft\skprofiles\Vanilla 1.17.1"` and *Fabric 1.17.1* uses `"%APPDATA%\.minecraft\skprofiles\Fabric 1.17.1"`.

`skprofiles`, `Vanilla 1.17.1`, and `Fabric 1.17.1` were created manually. You can name them whatever you like (`Game-Instances`, `Custom`, `Example`, etc.). The only rule: **don't put them inside game folders** (e.g. `versions`).
:::

:::info
Right-click an installation > **Open installation directory** opens that installation's Game Directory.
:::

## Can I use a different Java for the game?

Yes. Edit the installation, find **More Options > Java Executable**, click the folder icon, and pick the `javaw.exe` (Windows) or `java` (Linux / macOS) you want. Temurin, Liberica, anything works.

To revert to **Use bundled Java runtime**, just clear the path you set.

:::tip
Don't install one Java for SKlauncher and another for the game. Use a portable Java distribution (`.zip` on Windows, `.tar.gz` on Linux / macOS). You can experiment freely. The Java that won't start SKlauncher might be the one that gives you the best in-game performance.
:::

## How to uninstall SKlauncher?

Depends on which build and how thoroughly you want to clean (just SKlauncher, or all traces of Minecraft too).

:::: tabs key:os

== Windows

- **Setup case**: pick one of:
    - **Control Panel > Programs & Features > Uninstall** > select SKlauncher.
    - **Settings > Apps > Installed Apps** > select SKlauncher.
    - Run `unins000.exe` from [the SKlauncher install folder](#where-is-sklauncher-installed).
- **Other cases**:
    - `%APPDATA%\java` (you might find it, but it's not actionable for you).
    - In [the SKlauncher install folder](#where-is-sklauncher-installed), delete the `sklauncher` folder and the `sklauncher-fx.jar` file.
    - Delete the `SKlauncher.exe` / `.jar` you downloaded.

== Linux

- `~/java` (you might find it, but it's not actionable for you).
- In [the SKlauncher install folder](#where-is-sklauncher-installed), delete the `sklauncher` folder and the `sklauncher-fx.jar` file.
- Delete the `SKlauncher.jar` you downloaded.

== macOS

- **`.dmg` / `.app` case**:
    - Open the Applications folder.
    - Drag SKlauncher to the Trash. You may be asked for a password.
- **Other cases**:
    - `~/java` (you might find it, but it's not actionable for you).
    - In [the SKlauncher install folder](#where-is-sklauncher-installed), delete the `sklauncher` folder and the `sklauncher-fx.jar` file.
    - Delete the `SKlauncher.jar` you downloaded.

::::

To remove **everything**, also delete the `.minecraft` folder, uninstall Java, and restart the PC.

## Where are the logs located?

Launcher logs always live with [`.minecraft`](#where-is-sklauncher-installed). Game logs live in the [game directory](#how-does-game-directory-work).

- **Launcher**: `.minecraft\sklauncher\sklauncher_logs.txt`
- **Game**: `.minecraft\logs\latest.log` and `.minecraft\crash-reports\crash-YYYY-MM-DD_HH.MM.SS-client.txt`

:::tip
Paste log contents into [mclo.gs](https://mclo.gs/) and share the link instead of dumping a wall of text. Or [upload the file directly to Discord](https://support.discord.com/hc/en-us/articles/25444343291031-File-Attachments-FAQ#h_01J4M00QYZTXY5FV9KDWT05H5T).

> Read what the launcher tells you. After a crash, the launcher shows two buttons in the top-right; one of them gives you a link to the report.
:::

### Debug mode

Sometimes you need extra detail in the logs to track down a problem.

:::warning
Only enable debug mode **if asked to**. **Revert the changes afterwards.**
:::

:::danger
**Be careful with what you share.** Debug logs may include sensitive data:

- Access tokens and session IDs
- IP addresses and connection details

[mclo.gs](https://mclo.gs/) is recommended because it auto-censors things like access tokens (especially relevant for Microsoft login). This only matters when you're debugging *the game*; the *launcher won't start* path below has nothing sensitive.
:::

#### Can't even reach the launcher?

1. [Download](/getting-started/downloads#downloading) the `.jar` build of SKlauncher and run it from a terminal: `java -jar SKlauncher.jar`
2. Copy the entire console output (after it stops or stalls) and paste it into Discord.

#### Can't start the game, or the game has issues?

1. Open the launcher, go to **Launcher Settings**, and enable **Show Launcher Console**. A new **Launcher Log** tab appears in the main screen. Click it.
2. Edit the problem installation. Under **More Options**:
    - **Launcher Visibility**: *Keep the launcher open and show game output*
    - **JVM Arguments**: append `-Xdiag -Dsklauncher.debug=true` (mind the leading space when you paste).
3. Start the game. The **Game Output** window will appear. Reproduce the issue, then share everything.

:::info
- **Launcher Log** tab matches the launcher log file.
- **Game Output** window is roughly the same as both game log files combined, with a bit more context up top. Sharing this is usually enough.
:::

## Need more help?

If your question isn't here, see the [Web related FAQ](/faq/web-related#need-more-help) for ways to reach the community.
