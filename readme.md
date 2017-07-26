## Description

A NodeJS module that returns terminal escape codes for styling strings.<br>
Colors-md can convert to ansi8 and ansi256 color codes.

Currently only accepts hex input strings.<br>

## Installation

###### Local

```
[sudo] npm install --save colors-md
```

###### Global

```
[sudo] npm install --global colors-md
```

## Usage

```javascript
const colors = require('colors-md');

console.log(colors.ansi8.hex('#ff0000') + 'text' + colors.reset);
console.log(colors.ansi8.hex('ff0000') + 'text' + colors.reset);

console.log(colors.ansi8.hex('#f00') + 'text' + colors.reset);
console.log(colors.ansi8.hex('f00') + 'text' + colors.reset);

console.log(colors.ansi256.hex('#00ff00') + 'text' + colors.reset);
console.log(colors.ansi256.hex('00ff00') + 'text' + colors.reset);

console.log(colors.ansi256.hex('#0f0') + 'text' + colors.reset);
console.log(colors.ansi256.hex('0f0') + 'text' + colors.reset);
```