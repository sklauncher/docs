---
title: Open to LAN worlds
description: Play your singleplayer world with up to 8 friends on LAN
---

# Open to LAN worlds

Since **Release 1.3.1** the game ships with an integrated server in the client, so you can share a singleplayer world with up to 8 friends on LAN.

> Playing on a version older than 1.3.1? You'll need a [dedicated server](/servers/dedicated-server) instead.

## Hosting

1. Start the game, open the world, press <kbd>ESC</kbd> and click **Open to LAN**.
2. Configure the server settings, then click **Start LAN World**.
3. You'll see a chat message like `Local game hosted on port [50000]` (the port may differ).
    - Newer versions also show the IP and port (e.g. `192.168.1.100:50000`).
4. Tell your friends to join.

## Joining

1. Open the game and go to **Multiplayer**.
2. Below *Scanning for games on your local network*, the host's world should appear.
    - The list refreshes every 1.5 seconds, so don't spam *Refresh*.
3. Select the server and click **Join Server** (or double-click it).
    - **Direct Connection** / **Add Server** only works if both you and the host use Microsoft accounts. Otherwise you'll hit [this error](#failed-to-login-invalid-session).

## Common issues

There are many possible problems. [This external guide](https://www.howtogeek.com/242375/how-to-troubleshoot-minecraft-lan-game-problems/) covers the basics. Assuming you've already configured IP, firewall, etc. correctly, two common problems remain.

### Failed to login: Invalid session

Normally [solved on the server side](/troubleshooting/game-related#failed-to-login-invalid-session), but you don't have a `server.properties` file with LAN. Two options below. The first works in any setup.

#### Vanilla (no mods)

Players can only connect via the *Scanning for games on your local network* list. Connecting by IP:Port produces the invalid-session error.

If the world isn't listed, see [The world is not listed in the LAN list](#the-world-is-not-listed-in-the-lan-list).

#### Modding

Several mods expose the server's online-mode toggle, which is what you actually want. If you've never installed mods before, see the [Modding guide](/category/modding).

Mods that expose online-mode:

- [Lan Server Properties](https://www.curseforge.com/minecraft/mc-mods/lan-server-properties)
- [EasyLAN](https://www.curseforge.com/minecraft/mc-mods/easylan)
- [Custom LAN](https://www.curseforge.com/minecraft/mc-mods/custom-lan)
- [Server.Properties for LAN](https://www.curseforge.com/minecraft/mc-mods/server-properties-for-lan)

Pick **one**, not all. You may need to look for an alternative if none target your version or mod loader.

### The world is not listed in the LAN list

Sometimes everyone has everything configured correctly (LAN, firewall, etc.) but the world still doesn't show up for some or all players. In my experience, adjusting the network metric fixes this. The steps below assume Windows; Linux and macOS are similar but vary.

1. Everyone closes the game and the launcher, but keeps Hamachi running (assuming you use Hamachi or another virtual LAN).
2. Open **Windows PowerShell** as administrator and run:

    ```ps
    Get-NetIPInterface
    ```

<details>
<summary>You'll see something like this</summary>

```
ifIndex InterfaceAlias                  AddressFamily NlMtu(Bytes) InterfaceMetric Dhcp     ConnectionState PolicyStore
------- --------------                  ------------- ------------ --------------- ----     --------------- -----------
5       Hamachi                         IPv6                  1500              15 Enabled  Connected       ActiveStore
8       Ethernet                        IPv6                  1500              25 Enabled  Connected       ActiveStore
1       Loopback Pseudo-Interface 1     IPv6                  1500              75 Disabled Connected       ActiveStore
5       Hamachi                         IPv4                  1500              15 Enabled  Connected       ActiveStore
8       Ethernet                        IPv4                  1500              25 Enabled  Connected       ActiveStore
1       Loopback Pseudo-Interface 1     IPv4                  1500              75 Disabled Connected       ActiveStore
```

</details>

3. Pick the interface you want to prioritise and adjust its metric:

    ```ps
    Set-NetIPInterface -InterfaceIndex XX -InterfaceMetric YY
    ```

    - Lower metric means higher priority. (My setup: Hamachi 15, Ethernet 25, Loopback 75.)
    - Example: `Set-NetIPInterface -InterfaceIndex 5 -InterfaceMetric 15` sets Hamachi's metric to 15.
4. Restart the PC. Everyone in the game needs to do this.

:::info
The launcher logs may still show an "invalid session" error, but the join will succeed anyway.

This assumes the best case (everything else configured correctly, just the wrong network adapter being preferred). If it fails again, a reboot has historically been the only fix needed.
:::
