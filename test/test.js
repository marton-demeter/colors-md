const colors = require('../colors-md.js');
const ansi8 = require('../lib/ansi8.js');
const ansi256 = require('../lib/ansi256.js');


console.log('\n\n\n\n\n');
Object.keys(ansi8).forEach((key) => {
  process.stdout.write(colors.ansi8.rgb(key)+'▇ ');
});
console.log('\n');

for(var i = 0; i < 5; i++) {
  ansi256.forEach((color) => {
    process.stdout.write(colors.ansi256.rgb(`${color.r} ${color.g} ${color.b}`)+'▇ ');
  });
}
console.log('\n\n\n\n\n');