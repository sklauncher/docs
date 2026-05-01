---
title: Translating SKlauncher
description: Help translate SKlauncher into your language
---

# Translating SKlauncher

Thanks for considering helping with translations! SKlauncher is translated by people kind enough to maintain its localisation files. Help out and you'll be credited in the **About** section of the launcher settings.

## What <span style="color: var(--vp-c-danger-1)">NOT</span> to do

- **Don't** paste output from Google Translate, etc. without checking. Machine translations are often inaccurate.
- **Don't** make changes that aren't necessary. We get the appeal of seeing your name in the launcher, but please don't. New strings appear over time, so wait for the next genuine opportunity.
- **Stick close to the original.** For example, don't shorten `Uhoh! It looks like the game has crashed. Sorry for the inconvenience :(` into the equivalent of `Oh no! Game has crashed!`.
- **Don't** add trailing punctuation that isn't in the [original string](https://github.com/skmedix/SKlauncher/blob/main/assets/launcher/lang/sklmessages_en_US.properties).

## How to get started

First, check whether your language is already translated. Open the [translations folder](https://github.com/skmedix/SKlauncher/tree/main/assets/launcher/lang) and look for a file with your language code. If it exists, you can update it. If not, [create a new translation](#creating-a-new-translation).

You need a GitHub account to contribute. [Sign up here](https://github.com/signup) if you don't have one.

### Creating a new translation

1. In the [translations folder](https://github.com/skmedix/SKlauncher/tree/main/assets/launcher/lang), create a new file named `sklmessages_XX_XX.properties` where `XX_XX` is your language code.

    ![Create new file option in the drop down menu](/img/translations/createnewfile.png)

2. Find your language code on the [Minecraft Wiki languages page](https://minecraft.wiki/w/Language#Languages). Use the **ISO 639-3** column.

    For example, *Silesian* uses `szl_PL`, so the file is `sklmessages_szl_PL.properties`.

    ![Example for Silesian language](/img/translations/languagecodes.png)

3. Copy the contents of [`sklmessages_en_US.properties`](https://raw.githubusercontent.com/skmedix/SKlauncher/main/assets/launcher/lang/sklmessages_en_US.properties) into your new file. Then translate, line by line:

    ```diff
    -lang.name=English
    -lang.code=en_US
    +lang.name=Ślōnskŏ gŏdka
    +lang.code=szl_PL
    ```

### Editing an existing translation

If your language already has a file, just edit it.

1. Open the file in the [translations folder](https://github.com/skmedix/SKlauncher/tree/main/assets/launcher/lang) and click the **Edit** (pencil) icon.
2. Change the text after the `=` sign on each line you want to translate.
3. Scroll to the bottom, add a commit message, and click **Commit changes**.

> Don't worry about being perfect. We review every contribution before merging.

## How to submit your translation

To submit, open a **pull request**.

1. Go to the [pull requests tab](https://github.com/skmedix/SKlauncher/) of the SKlauncher repo.
2. Click **New pull request** in the top-right.
3. Choose `main` as the base and your branch as the compare branch.
4. Add a title and description. Click **Create pull request**.

That's it. Reviews usually take 1 to 2 days, sometimes less. Watch your email or GitHub notifications for follow-up comments.
