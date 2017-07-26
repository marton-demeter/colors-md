## Description

A NodeJS module that returns terminal escape codes for styling strings.<br>
Colors-md can convert to ansi8 and ansi256 color codes.<br>
Currently accepts hex and rgb color input strings.<br>

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

#### Color Format Specification

###### Hex

  - '#ffffff'
  - 'ffffff'
  - '#fff'
  - 'fff'

###### RGB

  - '255, 255, 255'
  - '255 255 255'

#### Code


```javascript
const colors = require('colors-md');

console.log(colors.ansi8.hex('#ff0000') + 'text' + colors.reset);
console.log(colors.ansi256.hex('0f0') + 'text' + colors.reset);

console.log(colors.ansi8.rgb('0, 0, 255') + 'text' + colors.reset);
console.log(colors.ansi256.rgb('255 255 255') + 'text' + colors.reset);
```