---
title: Installing FNM on Your Mac using Fish Shell
description: FNM (Fast Node Manager) explained and how to get started.
author:
  emoji: 🌀
  name: Dante Mogrim
  bio: I like people, places and things.
gif:
  src: https://github.com/Schniz/fnm/raw/master/docs/fnm.svg
  alt: A command line interface running FNM related commands.
tags:
  - cli
  - fish
  - fnm
---

> "What is FNM and why should I install it?" You might have heard of something called [NVM](https://github.com/nvm-sh/nvm) (short for Node Version Manager). [FNM](https://github.com/Schniz/fnm) (short for Fast Node Manager) is, as you might have guessed, said to be an ~40x faster alternative. It is built in Rust and comes with cross-platform support.

Test

For this guide you should have the following installed:
- [Fish Shell](https://fishshell.com/)
- [homebrew](https://brew.sh/index_sv)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Launching VSCode from the command line (aka "path")](https://code.visualstudio.com/docs/setup/mac)

🙇‍♂️ _Heads up! I cleared all my prior Node.js installations to be able to use FNM as my sole Node.js provider. If you want to do this as well, run the following two commands, otherwise skip ahead to "Installation":_

```shell-session
$ brew uninstall --ignore-dependencies node
$ brew uninstall --force node
```

## Installation
Start by opening up your terminal and running the following command:
```shell-session
$ brew install fnm
```

The process from here varies depending on your shell. If your using something other than fish, I recommend looking into [this part of the documentation](https://github.com/Schniz/fnm#shell-setup) for this following step.

If you're like me and your using [fish](https://fishshell.com/), run the following command in your terminal:
```shell-session
$ touch ~/.config/fish/conf.d/fnm.fish
```

Now we've created a configuration file for FNM within our shell. We need to add a specific line inside it for it to work properly with FNM.
I like to handle things visually, so let's open it up and add the line from VSCode. Type the following commands:

```shell-session
$ cd ~/.config/fish/conf.d/
$ code .
```

Now we have our file open in VSCode. Just add and save the following line in the `fnm.fish` file:
```shell-session
$ fnm env | source
```

## Usage
For more in depth examples there's [documentation available](https://github.com/Schniz/fnm/blob/master/docs/commands.md) but here are some for getting started:

Print the Node.js version that's currently in use:
```shell-session
$ fnm current
// Output: * system (In my case, empty.)
```

List all node versions that are available to download:
```shell-session
$ fnm list-remote
```

For me to install the (currently) latest version of Node.js I'll be running the following command:
```shell-session
$ fnm install v17.1.0
```

Other versions of node that might be nice to alternate between:
```shell-session
$ fnm install v11.0.0
$ fnm install v16.9.1
```

To switch to 16.9.1:
```shell-session
$ fnm use v16.9.1
```
👆 _Note! This will only last during the current session!
If you want to use 16.9.1 during a longer period of time, I would recommend switching it to your default and then switching back the latest version, once your finished._

To switch your default to 16.9.1:
```shell-session
$ fnm default v16.9.1
$ fnm current
// Output: v16.9.1
```

See what versions of node that are currently installed on your computer:
```shell-session
$ fnm list
// Output:
// v11.0.0
// v16.9.1 default
// v17.1.0
// * system
```

Other useful commands:

To see which version of FNM that's installed:
```shell-session
$ fnm --version
// Mine is currently 1.28.1
```

Help menu:
```shell-session
$ fnm help
```

Hope this was helpful in getting started.

It can sometimes be a time saver to be able to switch between different Node.js versions when trying to access old projects or newer ones.
If you have any questions or comments, get in touch.

## Links
- 📚 [FNM Docs](https://github.com/Schniz/fnm/blob/master/docs/commands.md)
- 🐈‍⬛ [FNM GitHub](https://github.com/Schniz/fnm)