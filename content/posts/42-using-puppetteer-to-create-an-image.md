---
title: Using Puppetteer To Create an Image
description: A guide on how to use Puppetteer to create an image.
author:
  emoji: 🌀
  name: Dante Mogrim
  bio: I like people, places and things.
gif:
  src: https://media.giphy.com/media/3o7b9mNeQCCMSZNoFG/giphy.gif
  alt: A dog puppet getting kissed by a kid with a crown.
tags:
  - puppetteer
---

## Snippet
```js
const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('http://localhost:3000/integrations/cloudinary')
  await page.setViewport({ width: 2400, height: 2000, deviceScaleFactor: 2 })
  const hrefElement = await page.$('.hero')

  await hrefElement.screenshot({ path: 'example.jpeg' })

  await browser.close()
})()
```
