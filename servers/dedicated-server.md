---
title: Dedicated servers
description: Create your own dedicated server to play with more than a couple of friends
---

# Dedicated servers

:::info
Since **Release 1.2.5** / **Snapshot 1.3** you can run a **dedicated server** for *Minecraft: Java Edition*.

> Earlier versions worked too, but Mojang no longer hosts direct downloads. You can find archived JARs on [Betacraft](https://files.betacraft.uk/server-archive/), but file integrity isn't guaranteed.
:::

## Setup

1. Download the **Server Jar** for your target version from [Xyrios](https://xyrios.com/minecraft/tools/mc-versions).
    - Check the required Java version. You can't run, for example, a Java 21 server with Java 8.

    > The download URL points back to Mojang's official server.

2. Grab the matching Java runtime from [Adoptium](https://adoptium.net/temurin/releases/). Filter by OS (e.g. Windows), architecture (e.g. x64), and version (e.g. 21). Pick the **JRE** (or JDK) in the `.zip` / `.tar.gz` extractable format so nothing gets installed system-wide.
3. Create a folder for your server. Put `server.jar` inside it, then extract the Java archive into the same folder.
    - Rename the extracted Java folder to something short. This guide uses `java_folder`.
4. Open a terminal in that folder (or `cd` to it) and start the server:

    ```sh
    java_folder/bin/java -Xmx1024M -Xms1024M -jar server.jar nogui
    ```

    > On Linux / macOS you may need to make `server.jar` executable first: `chmod +x server.jar` (or `755`).

5. The first run creates an `eula.txt` file. Open it in any text editor and change `eula=false` to `eula=true` to accept the [Minecraft EULA](https://aka.ms/MinecraftEULA).
6. *(Optional)* Edit [`server.properties`](https://minecraft.wiki/w/Server.properties#Java_Edition) to taste. Pay particular attention to [`enforce-secure-profile`](/troubleshooting/game-related#invalid-signature-for-profile-public-key) and [`online-mode`](/troubleshooting/game-related#failed-to-login-invalid-session).
    - After changes, restart the server (run `stop`, then re-run the command from step 4).
7. Set up port forwarding so external players can connect:
    1. Open your router's admin page (typically `192.168.0.1` or `192.168.1.1`).
    2. Find port forwarding settings (sometimes under *Advanced*, *Security*, or *Gaming*).
    3. Forward TCP port `25565` to your computer's local IP. The port matches `server-port` in `server.properties`.
    4. Share your public IP (search "what is my IP") with people you want to let in.

:::warning
Only share your public IP with trusted friends. For public-facing servers, consider a dedicated hosting provider instead of self-hosting from home.
:::
