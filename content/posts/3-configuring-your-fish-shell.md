---
title: 🦄 How To Configure Your Fish Shell
description: A guide on how to configure and personalize your command line fish shell.
author:
  emoji: 🌀
  name: Dante Mogrim
  bio: I like people, places and things.
gif:
  src: https://media.giphy.com/media/kTZBUjdRlZB3G/giphy-downsized.gif
  alt: A man holding a bass fish and it manages to wiggle away from his grip.
tags:
  - cli
  - fish
---

📋 **Necessities**
- Having [fish shell](https://fishshell.com/) installed.

---

## About

`config.fish` is a file where we're able to configure certain aspects of our fish shell.
This easily gets mixed up with the command `fish_config`.
`fish_config` is a command that has the ability to set certain settings, while the file `config.fish` can handle other settings that the other one can't.

The `fish_config` command will open up your browser and let you choose certain fish settings from a menu such as general colors, prompt etc.

The `config.fish` file however lets you configure a big number of other things.
I'll only be going through some basics but here you can configure aliases, specify colors or characters when working with Git and much more.

## Getting Started
1. Locate your `.config` location of your Fish installation.
So *not* the location of where it's installed (which is usually `usr/local/bin` btw) but from where we can _configure_ our Fish shell.

I recommend (from the Finder menu) to hit <key>Cmd</key> + <key>Shift</key> + <key>G</key> and in the "Go to Folder" menu search for:
`~/.config/`
Here among other folders we should find our friend "fish"! 🐟
Drag and drop the fish folder into VSCode and let's get cooking.

2. In the root of this folder create a new file and name it `config.fish` (skip if you already have an existing one).

3. Now to actually start configuring our shell - the fun part!
I'll explain the things I've chosen to have in my own personal `fish.config` file - and if anything is to your liking simply copy paste it into yours.

**- Aliases**

> You can set these to shorten day to day commands. Or if you have a longer snippet and just want it to be shortened to a single word.
> _Example:_ In my file below where I've written `alias desk="cd Desktop"` means that if I run `desk` in my terminal, Fish will recognize this is my alias and run whatever I've put in after the `=` sign, so in this case `cd Desktop`. 

**- Git Information**

> Half of my settings revolve around Git. You can set special color rules, specific characters etc. Luckily fish-shell has documented this part of my configuration very well in [this link](https://fishshell.com/docs/current/cmds/fish_git_prompt.html).
> Take a look there and come back and you will better understand which line does what.

**- Zoxide**

> Mentioned in the last line of my `config.fish`. It's a CLI application that has nothing to do with fish shell really. But it can be worth mentioning that sometimes when we download certain command line tools, it might require us to add them into our shell configuration somehow for everything to work properly. Always double check the documentation when downloading these types of apps.


**config.fish**
```python
# Fewer key strokes for day to day things.
alias ...="cd ../.."
alias art="php artisan"
alias Brewfile="code ./Brewfile"
alias build="npm run build"
alias config.fish="code .config/fish/"
alias desk="cd Desktop"
alias dev="npm run dev"
alias phpunit="vendor/bin/phpunit"
alias servor="npx servor . index.html 4000 --reload --browse"
alias update="brew upgrade; brew cleanup; composer global update; npm i -g npm-check-updates"
alias week="date +%V"

# Fish Git Prompt
set -g __fish_git_prompt_showdirtystate 'yes'
set -g __fish_git_prompt_showstashstate 'yes'
set -g __fish_git_prompt_showuntrackedfiles 'yes'
set -g __fish_git_prompt_showupstream 'yes'
set -g __fish_git_prompt_show_informative_status 1
set -g __fish_git_prompt_hide_untrackedfiles 1

# Colors
set -g __fish_git_prompt_color_branch green
set -g __fish_git_prompt_color_cleanstate green
set -g __fish_git_prompt_color_dirtystate blue
set -g __fish_git_prompt_color_invalidstate red
set -g __fish_git_prompt_color_stagedstate yellow
set -g __fish_git_prompt_color_untrackedfiles $fish_color_normal
set -g __fish_git_prompt_color_upstream_ahead green
set -g __fish_git_prompt_color_upstream_behind red

# Characters
set -g __fish_git_prompt_char_dirtystate '⚡'
set -g __fish_git_prompt_char_stagedstate '→'
set -g __fish_git_prompt_char_untrackedfiles '☡'
set -g __fish_git_prompt_char_stashstate '↩'
set -g __fish_git_prompt_char_upstream_ahead '+'
set -g __fish_git_prompt_char_upstream_behind '-'
set -g __fish_git_prompt_char_dirtystate "+"

zoxide init fish | source
```


## Lastly
If you're curious and want to learn more on what possibilities are out there - documentation can be a bit tricky to find.
My best advice so far is to go to [GitHub Explore](https://github.com/explore) and search for "fish.config" or "dotfiles" to see what other kind of configurations other developers have made to their shells.

## Links

🗞 **Articles**
- [Emojify Your Git Fish Prompt](https://medium.com/@joshuacrass/git-fish-prompt-faa389fff07c)

📚 **Docs**
- [Git Information](https://fishshell.com/docs/current/cmds/fish_git_prompt.html)
- [The `fish_config` command.](https://fishshell.com/docs/current/cmds/fish_config.html)
- [The `config.fish` file.](https://fishshell.com/docs/current/index.html#configuration-files)
