---
title: Configuring the Z Shell
description: Ways to personalize your Z Shell.
author:
  emoji: 🌀
  name: Dante Mogrim
  bio: I like people, places and things.
gif:
  src: https://media.giphy.com/media/MTdNrKa1i1iy3lrJWH/giphy.gif
  alt: A really old Mac computers startup interface.
tags:
  - zsh
---

## Custom Prompt (macOS)

If you already have a **.zshrc** file in your Home folder already, open it up in your code editor:
```shell
$ code . .zshrc
```

If you don't, create one by heading over to your home folder and run the following command:
```shell
$ touch .zshrc
```

_Output your device's name:_

**.zshrc**
```shell
PROMPT='%B%F{51}%m:%f%b'
```
_Give your prompt an emoji:_

**.zshrc**
```shell
PROMPT='🧙‍♂️ '
```
