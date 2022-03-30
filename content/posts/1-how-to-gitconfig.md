---
title: How to .gitconfig

description: Find out more!

author:
  emoji: 🌀
  name: Dante Mogrim
  bio: I like people, places and things.

gif:
  src: https://media.giphy.com/media/9fvhbT2qUPYqH9n14j/giphy-downsized.gif
  alt: Miley Cyrus saying 'it's customized'.

tags:
  - git
---

### Basics

```shell
$ git config user.name
# Output: Dante Mogrim

$ git config user.email
# Output: mogrimdante@gmail.com

# Set nano as your default code editor.
$ git config --global core.editor "nano"

# Outputs the whole .gitconfig file.
$ git config --list
```

Change your e-mail in Git:

```shell
$ git config --global user.email <your-new-email-here>
```
