---
title: Migrating from 3.2
description: How to move your profiles from SKlauncher 3.2 to instances in the 4.0 beta
---

# Migrating from 3.2

In 3.2 your setups were called **profiles** or **installations**, and they lived in the official `.minecraft` folder. In 4.0 they are called **instances** and live in their own location. To bring your 3.2 setups into 4.0, you import them.

Importing **copies** your files, it does not move or delete them. Your 3.2 profiles stay in `.minecraft` exactly as they were, so if anything goes wrong you can still use 3.2.

## Importing your profiles

1. Open SKlauncher 4.0 and go to your **Library**.
2. Click **Import**, then choose **From launcher** in the dropdown.
3. Select **Official launcher** as the source. This is where 3.2 kept its profiles.
4. Pick the profiles you want to import.
5. Confirm. 4.0 copies each profile in as an instance.

That's it. The imported instances show up in your instance list, ready to play.

## Common questions

### Does importing delete my 3.2 profiles?

No. Import only copies files. Your originals stay in `.minecraft`, and 3.2 keeps working.

### Why is the source called "Official launcher"?

SKlauncher 3.2 stored its profiles in the same `.minecraft` folder the official Minecraft launcher uses. Picking **Official launcher** points 4.0 at that folder.

### Can I keep using 3.2 after importing?

Yes. 3.2 and 4.0 are separate. You can run both, and the Stable channel on the [downloads page](/4.0/getting-started/downloads) still serves 3.2.

### Something went wrong during import

Your 3.2 files are untouched, so nothing is lost. Report the problem on [Discord](https://next.skmedix.pl/discord) so it can be fixed.
