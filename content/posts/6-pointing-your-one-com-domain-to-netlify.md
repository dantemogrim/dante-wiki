---
title: Pointing Your one.com Domain to Netlify
description: A tutorial/guide on how to reroute your one.com domain to Netlify.
author:
  emoji: 🌀
  name: Dante Mogrim
  bio: I like people, places and things.
gif:
  src: https://media.giphy.com/media/g04r76H19hke7pIzEM/giphy-downsized.gif
  alt: An animation of earth with a PC on top and a text saying 'Learn to use the Internet'.
tags:
  - deploying
  - netlify
---

### Intro
> If you buy a domain through (in this example one.com) you don't need to pay for one.com's hosting fees if you're planning on doing a front-end or headless project.
You can simply buy **just** the domain or as one.com interestingly calls it, their "e-mail plan" 🤷‍♂️ and reroute that domain to Netlify so you can add whatever content you like to it.

### On Netlify
After you've logged into your Netlify account, from the menu go to `Domains` and click the `Add or register domain` button.
Enter the name of the domain you bought for example "my-super-cool-website.com" and continue.

You will most likely encounter a text that says that "this domain is already registered" and it will give you the option to add it instead. Do that.

In your menu you'll have the option to "Enable IPv6 on your domain". This is not mandatory but if you want your website to reach areas of the world where it otherwise might not, then this is a good option to enable.

### On one.com
**Now to the important part.**
*Don't close anything.* Open up a new tab and head to your account at one.com.
Go to the Control Panel and head over to DNS Settings.

Here there will be three tabs available: "Redirect", "DNS Records" and "Name Servers".
Go to "Name Servers".

Here you will have two options. Instead of the default setting, click the `Change to custom name servers` option.

**Now! Let's go back to our Netlify tab.**
If you're still at the same place as we were last, you'll see that even here we find a heading with the name `Name Servers`. 
Under the heading you'll see a list of four different values starting with **dns1.** etc.
Copy and paste these into the appropriate slot in your one.com tab.

> **dns1.** goes into "Nameserver1"
> **dns2.** goes into "Nameserver2" and so on.

☝ There should be **four** all together. If you're missing a slot, make sure to click the `Add another server` link for each one missing.
After you've saved your settings in your one.com tab, you'll likely recieve a message similar to this one:

> You have name server changes pending approval. A request has been sent to the registrant of the domain for approval. If not approved within three days, the request will fail.

Let the waiting game begin! You will recieve an e-mail once this has been approved.
This might take anything from 20 minutes up to maybe a work day.

Once you've waited long enough, try to see that it's working properly by connecting it to one of your GitHub projects that's connected to Netlify.

### Connecting your Netlify project to the Domain
🤔 "How you you connect one of your Netlify projects to your custom domain?"

I won't go through adding your first project to Netlify, because it's an article in itself.
Let's say you already have a project on Netlify. In your menu, go to `Sites`, click on the name of your project, then click `Domain Settings`
Here under the `Custom Domains` heading you should find a big green button that says `Add custom domain`. Go there.
Type in the url of the domain you bought at one.com, my-super-cool-website.com, and click the `Verify` button.
Like we did before, it'll likely ask you to "Add" instead of "Register", so add the domain instead.

If all has gone according to plan, you should now successfully be able to try out your purchased domain in your browser and have it open up the project that you connected it to on Netlify. 🥳

### HTTPS
> **Bonus:** Would you like to have a HTTPS connection as well? 🏆 (This requires that you've done the following steps and have waited for everything to be up and running.)
> On Netlify, click on your project and go to `Site Settings` ▶️ `Domain Management` ▶️ and look for the heading `HTTPS`.
Under `SSL/TLS certificate`, click the `Renew Certificate` and Netlify do the rest of the job for you. Neat, huh?