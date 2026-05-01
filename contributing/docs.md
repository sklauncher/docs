---
title: Writing Documentation
description: Learn how to contribute to SKlauncher documentation
---

# Writing Documentation

:::info TODO
This document is itself a work in progress. Contribute to it by following the steps below 😊
:::

Thanks for considering contributing to the docs! Any help is appreciated.

## What <span style="color: var(--vp-c-danger-1)">NOT</span> to do

- **Don't** paste AI-generated text. We notice.
- **Don't** make low-effort changes. By low-effort we mean:
    - paraphrasing that doesn't make the text easier to read
    - reordering sentences without improving readability
    - changing one word and calling it done
    - padding the text with filler
- **Don't** swap the markup language. We use [Markdown](https://www.markdownguide.org/cheat-sheet/), and where Markdown isn't enough, [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements).

> Found a typo? Fix it and open a PR. That's not low-effort, that's exactly the kind of contribution we want.

## How to get started

You need a GitHub account. [Sign up here](https://github.com/signup) if you don't have one. Then [fork the docs repo](https://github.com/sklauncher/docs/fork).

The docs use **Markdown**, a lightweight markup language. If you're new to it, [this cheat sheet](https://www.markdownguide.org/cheat-sheet/) is a good start.

## How to edit a page

1. Open the file you want to edit, e.g. `/contributing/docs.md`.
    - Or [create a new one](#how-to-add-a-new-document).
2. Click the **pencil icon** in the top-right of the GitHub view.
3. Make your changes.
4. Click **Commit changes...** and open a [pull request](#how-to-open-a-pull-request).

## How to add a new document

1. In your forked repo, navigate to the folder where the new file should live.
2. Click the **plus icon** and choose **Create new file**.
3. Name the file to reflect its contents, e.g. `downloading.md`. It must use the `.md` extension.

The first lines of the file should be the frontmatter:

```
---
title: <your title>
---
```

If you contributed meaningfully, add yourself to the `authors` list. Your GitHub avatar will show up at the top of the page:

```
---
title: <your title>
authors:
  - your-github-handle
  - another-contributor
---
```

Then commit and open a [pull request](#how-to-open-a-pull-request).

## How to open a pull request

Once you're done, submit your changes for review.

1. Open the [Pull requests tab](https://github.com/sklauncher/docs/pulls).
2. Click **New pull request** in the top-right.
3. Choose `main` as the base and your branch as the compare branch.
4. Add a title and description. Click **Create pull request**.

You're set. Watch for review comments. We may ask for adjustments before merging.

> Reviews happen in our spare time, so they may take a couple of days.
