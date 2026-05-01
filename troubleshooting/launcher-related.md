---
title: Launcher related
description: Problems with SKlauncher (the launcher itself)
---

# Launcher related

:::tip
Before you dig in here, check these first:

- [Installation common issues](/getting-started/install#common-issues)
- [Log in](/getting-started/login)
:::

## "Unable to access jarfile" when opening SKlauncher

Two common causes:

- The path [where SKlauncher is installed](/faq/launcher-related#where-is-sklauncher-installed) contains special characters (`?`, `!`, `^`, `&`, `$`) or sits inside OneDrive.
- The `.jar` file isn't actually in the folder you're running the command from.

## Your username contains non-ASCII characters

This only affects Windows. Linux and macOS only allow alphanumeric usernames (no accents or special characters), so they're not affected.

Two options:

- **Option A**: [Install SKlauncher in another folder](/faq/launcher-related#can-i-install-sklauncher-in-another-folder), e.g. `C:\Games\SKlauncher`.
- **Option B**: Rename your user's folder. This is advanced. See the guides for [Windows 10](https://www.tenforums.com/tutorials/89060-change-name-user-profile-folder-windows-10-a.html) or [Windows 11](https://www.elevenforum.com/t/change-name-of-user-profile-folder-in-windows-11.2133/).

## Connection problems

Maybe the website doesn't load, or the launcher says "Offline Mode: You're connected to the Internet", or some other internet-shaped error.

These are tricky because the cause can be:

- Yours or your ISP's
- SKlauncher's
- External (out of anyone's control)

:::tip
1. Close (or restart) whatever shows the error: browser, launcher, or game.
2. Do **one step at a time**, in order.
:::

1. Make sure Java isn't blocked in your firewall (e.g. [Windows Firewall](https://www.howtogeek.com/242375/how-to-troubleshoot-minecraft-lan-game-problems/#i-can-t-see-the-minecraft-game-on-the-lan)). It might be listed as **Java** or **OpenJDK**.
    - You can also delete every Java/OpenJDK firewall entry, so the next launch prompts you with **Allow**.
2. Check [time.is](https://time.is/) to confirm your clock is in sync. Adjust if not.
    - You can also switch NTP server: [Google NTP](https://developers.google.com/time/guides), [Cloudflare NTP](https://developers.cloudflare.com/time-services/ntp/usage/), or [pool.ntp.org](https://www.ntppool.org/en/). Your OS should keep the clock in sync automatically (default on most systems).
3. Restart the router. Then restart the PC.
4. Switch to [Google DNS](https://developers.google.com/speed/public-dns/docs/using) or [Cloudflare DNS](https://one.one.one.one/dns/). Both pages list IPv4/IPv6 addresses and setup instructions.
    - After changing DNS servers, run `ipconfig /flushdns` (or your OS equivalent). On Windows, run it from CMD or PowerShell as administrator.
5. Try a VPN like [Cloudflare WARP](https://one.one.one.one/) or [Proton VPN](https://protonvpn.com/). If you can pick a country, start with the closest one to you (some countries block or are blocked by certain services).

If none of the above worked, it may be an external problem you can only wait out. The [Web related FAQ](/faq/web-related#need-more-help) has extra ways to ask for help.

## Launcher starts but closes or hangs forever

1. Delete other launchers' folders inside `.minecraft`.
2. Delete the `sklauncher` folder inside `.minecraft`.
3. Delete the `java` folder inside `%APPDATA%`.
4. Confirm Java is allowed in your firewall and antivirus.
5. Follow the [Installation guide](/getting-started/install) again, then restart the PC.

## My skin hasn't changed

If there are no problems with the SKlauncher skin server (e.g. the August 2021 overload) or your connection:

- The first time you upload a skin or cape, it should appear instantly. Close the launcher and game first, just in case.
- Subsequent changes can take a couple of hours to propagate. The launcher may still show the old skin while the game already shows the new one.

If you saved the skin/cape [correctly](/faq/web-related#how-do-i-put-on-a-skin-or-cape), there's not much else to do but wait.

## My skin isn't visible on servers or with mods

- **Singleplayer**: if it works in vanilla, the culprit is the mod loader or one of your mods. Disable mods until you find the offender. If it's the mod loader itself, [report it on Discord](https://skmedix.pl/discord).
- **Multiplayer**: some servers offer plugins like `/skin MicrosoftUsername` to set a skin (some accept a URL too, depending on the plugin).

## I can't see any version in SKlauncher

Check your [launcher logs](/faq/launcher-related#where-are-the-logs-located). If they mention "DNS Poisoning", you have a problem:

1. Run a full system scan with your antivirus. The deeper, the better. Wait for it to finish.

    > If you know exactly what you ran (and that it changed your hosts file), you can skip the scan.

2. Disconnect from the internet. Open `%WINDIR%\System32\drivers\etc\hosts` in Notepad. Delete any lines that don't start with `#`, especially anything mentioning Microsoft or Mojang.
3. Run CMD as administrator and execute `ipconfig /flushdns` to clear your [DNS cache](https://www.lifewire.com/what-is-a-dns-cache-817514). Restart the PC, reconnect to the internet, and run SKlauncher.
    - If it still doesn't work, delete the launcher's `.json` files and try again. Still stuck? Head to [Discord](https://skmedix.pl/discord).

## I can't allocate more than 1 GB

You need a **64-bit (x64) Java**. See the [Installation guide](/getting-started/install).

## I can only play in Demo mode

If you didn't [force demo mode](/faq/launcher-related#can-i-force-the-demo-mode), re-read the [Log in](/getting-started/login) guide.

## "X" client doesn't work

Edit the client's installation in the launcher and enable **Compatibility Mode**.

## Going into the Friends tab on Hypixel hangs the game

Edit the installation in the launcher and enable **Compatibility Mode**.

## Need more help?

If your problem isn't here, see the [Web related FAQ](/faq/web-related#need-more-help) for ways to reach the community.
