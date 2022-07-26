---
title: Built-in Functions
description: 
author:
  emoji: 🌀
  name: Dante Mogrim
  bio: I like people, places and things.
gif:
  src: https://media.giphy.com/media/yR4xZagT71AAM/giphy.gif
  alt: A happy kid typing on an old computer that outputs 'syntax error'.
tags:
  - php
---

`phpinfo();`

### Arrays

- `implode(string $separator, array $array): string` - Joins array elements with a string.
- `array_pop(array $array): mixed` - Removes the last value in an array. For an empty array, the function returns NULL.

### Files
- `include`
- `include_once`
- `require`
- `require_once`
> `include` will ignore errors in your code.
> `require` will stop the script and print the error.

### Input

- `isset()`
- `empty()`
- `sprintf()` - Return a formatted string.
- `strip_tags` - Removes all HTML and PHP tags from a string.
- `trim`

### RegEx

- `preg_match` - Returns a 1 or 0.
- `preg_match_all` - Perform a global regex match.

### Sanitize

- `FILTER_SANITIZE_EMAIL`
- `filter_var()`
- `FILTER_SANITIZE_SPECIAL_CHARS`
- `FILTER_SANITIZE_FULL_SPECIAL_CHARS`
- `htmlspecialchars()`

### Strings

- `str_replace( array|string $search, array|string $replace, string|array $subject, int &$count = null ): string|array`
  Replace all occurences of the search string with the replacement string.
- `substr(string_name, start_position, string_length_to_cut)` - Extract a part
  of a string.
- `mb_substr()`
- `substr_replace()` - Replace text within a portion of a string.
- `substr_compare`
- `substr_count`

### Validate

- `FILTER_VALIDATE_EMAIL`
