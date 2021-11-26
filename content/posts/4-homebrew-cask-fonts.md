---
title: 🦄 Homebrew Cask Fonts
description: homebrew-cask-fonts gives you the option to choose and download a variety of a thousand and more freely-distributable fonts, straight from your command line.
author:
  emoji: 🌀
  name: Dante Mogrim
  bio: I like people, places and things.
gif:
  src: https://media.giphy.com/media/l1J9NQvtuCQzUbH2g/giphy-downsized-large.gif
  alt: An SNL clip from when Ryan Gosling was upset about the creator of Avatar choosing Papyrus as their main font.
tags:
  - cli
  - fonts
  - homebrew
---
homebrew-cask-fonts is an fantastic open source project available through Homebrew, that lets you download any of the thousand+ freely-distributable fonts that are available there.

📋 **Necessities**
- Having [Homebrew](https://brew.sh/index_sv) installed.
- Having [homebrew/cask]() installed.

---

### Instructions
- To install homebrew-cask-fonts to your computer, open up a terminal window and type:
```shell-session
$ brew tap homebrew/cask-fonts
```
Now it's installed! Now you're all set to go explore any of the fonts available within the so called "tap". "Tap" is just fancy Homebrew slang for saying "a downloadable container that holds a bunch of smaller downloadable things". 

"But how do I know which fonts that are available?" Great question! There are several ways to find out. Under the "Resources" heading I've added a giant list where you can scroll through a giant list. If you like feeling extra hacky you can also do this from your command line.

If you want to browse all of the fonts available in the cask type:
```shell-session
$ brew search font-
```
_If it takes a while be patient - it's a looong list._

If you're looking for a specific font but can't remember the exact name - `grep` is at your disposal.
```shell-session
$ brew search font- | grep luckiest
```

Finally found the one you're looking for? to install your chosen font type it out as it is listed in the homebrew-font-casks listing. For example:
```shell-session
$ brew install font-luckiest-guy
```
Now to the exciting part! Open up your Font Book (or wherever your fonts are stored) and find your freshly baked font!

> Keep in mind that some of these available fonts seem to be deprecated or faulty in one way or another. So if one or two fonts happen to fail upon download, give a third one a try.

### Personal Favorites
- **Chomsky** (font-chomsky) - New York Timesy.
- **Comic Mono** (font-comic) - If Comic Sans had a programmer sibling.
- **Fantasque Mono** (font-fantasque-mono) - Code editing.
- **Fira Mono** (font-fira-mono) - Designed to integrate with the character of the Firefox OS.
- **Hack** (font-hack) - Code editing.
- **JetBrains Mono** (font-jetbrains-mono) - Code editing.
- **Liberation Mono** (font-liberation) - Code editing.


### Resources
- [homebrew-cask-fonts](https://github.com/Homebrew/homebrew-cask-fonts)
- [List of available font casks.](https://github.com/Homebrew/homebrew-cask-fonts/tree/master/Casks)
