---
title: ES6 Event Listeners
description: 
author:
  emoji: 🌀
  name: Dante Mogrim
  bio: I like people, places and things.
gif:
  src: https://media.giphy.com/media/yR4xZagT71AAM/giphy.gif
  alt: A happy kid typing on an old computer that outputs 'syntax error'.
tags:
  - javascript
---

### Click

HTML:
```html
<div style="width: 200px; height: 200px; background-color: cornflowerblue">
	<p style="color: white">Click somewhere in this square.</p>
</div>
```

JavaScript:
```js
const div = document.querySelector('div');

div.addEventListener('click', () => {
	console.log('Somebody clicked me!');
});
```

### Focus

HTML:
```html
<input placeholder="Tab into me." />
```

JavaScript:
```js
const input = document.querySelector('input');

input.addEventListener('focus', () => {
	console.log('The input field has been focused!');
});
```

### Keypress

HTML:
```html
<p>Press any key while focused on this window.</p>
```

JavaScript:
```js
window.addEventListener('keypress', () => {
  console.log('Someone pressed a key!');
});
```

### Media

HTML:
```html
		<video
			width="640"
			height="480"
			src="https://ia903406.us.archive.org/29/items/BannedCartoonsTransLuxFelixTheCatKingOfTheMoonVeryGood/Banned%20Cartoons%20-%20Trans-Lux%20-%20Felix%20The%20Cat%20-%20King%20Of%20The%20Moon%20-%20Very%20Good.mp4"
			controls
		></video>
```

JavaScript:
```js
const video = document.querySelector('video');

video.addEventListener('play', () => {
  console.log('Felix the Cat is now playing!')
});

video.addEventListener('pause', () => {
  console.log('The episode is now paused.')
});
```

### Window

HTML:
```html
<div style="height: 200vh; background-color: pink"></div>
```

JavaScript:
```js
window.addEventListener('scroll', () => {
  console.log("Chocolate starfish! Keep on scrollin' bebbeh!");
});
```

### 🔗 Links

- [BitDegree: Learn About JavaScript AddEventListener](https://www.bitdegree.org/learn/javascript-addeventlistener)
- [mdn web docs: EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [mdn web docs: Event Index](https://developer.mozilla.org/en-US/docs/Web/Events)
