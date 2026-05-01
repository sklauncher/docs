---
title: Game related
description: Questions about Minecraft Java Edition (the game)
---

# Game related

## How to change the GPU used in the game

Your dedicated GPU (dGPU) is more powerful than your integrated GPU (iGPU). Sometimes Windows defaults to the iGPU for Minecraft, which tanks performance. There are three ways to fix this.

:::warning
Use **one** option at a time, not all together.

- Option B assumes you've disabled Option A.
- Option C only applies if Option B isn't configured.

Apply changes with the game closed.
:::

### Option A: Force dGPU from launcher settings

1. Open the launcher and go to **Launcher Settings**.
2. Enable **Use Dedicated GPU**.
3. Start the game.

You'll see the game now uses `MinecraftJava.exe` instead of `javaw.exe`.

### Option B: Force dGPU from Windows settings

1. Follow [this video](https://www.youtube.com/watch?v=b-skXHedB78) or open **Settings > System > Display > Graphics settings**.
2. Under *Graphics performance preference*, click **Browse** and select `javaw.exe`.
3. Click **Add**, choose **Max performance** for your GPU, then **OK**.

> **Don't know which `javaw.exe` to pick?** Start the game, minimise it, open Task Manager, find the Java process, right-click > **Open file location**. The file shown is the one you want.

### Option C: Force dGPU from your GPU control panel

:::info
Intel doesn't expose this option, so use Option B instead. AMD has it but it's not very clear. The steps below are for Nvidia.

> **Don't know which `javaw.exe` to pick?** Start the game, minimise it, open Task Manager, find the Java process, right-click > **Open file location**. The file shown is the one you want.
:::

1. Press <kbd>Windows</kbd> + <kbd>S</kbd>, search for **NVIDIA Control Panel**, and open it.
2. Go to **Manage 3D Settings > Global settings**.
3. Under **Preferred graphics processor**, select **High-performance Nvidia processor**.
4. Switch to the **Program Settings** tab. Click **Add**, then **Browse**, and pick the `javaw.exe` you found above.
5. Set **High-performance Nvidia processor** for it.
6. Click **Apply**.

## Need more help?

If your question isn't here, check the [Web related FAQ](/faq/web-related#need-more-help) for ways to get further help.
