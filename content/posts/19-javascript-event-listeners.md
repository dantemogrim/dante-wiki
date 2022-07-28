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
<button>Submit</button>
```

JavaScript:
```js
const button = document.querySelector('button');

button.addEventListener('click', () => {
	console.log('Somebody clicked me!');
});
```

### Clipboard

HTML:
```html

```

JavaScript:
```js

```

### Focus

HTML:
```html

```

JavaScript:
```js

```

### Form

HTML:
```html

```

JavaScript:
```js

```

### Keypress

HTML:
```html

```

JavaScript:
```js

```

### Media

HTML:
```html

```

JavaScript:
```js

```

### Scroll

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

#### Links

- [mdn web docs: EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [mdn web docs: Event Index](https://developer.mozilla.org/en-US/docs/Web/Events)
