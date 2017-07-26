const ansi8 = require('./lib/ansi8.js');
const ansi256 = require('./lib/ansi256.js');

module.exports = {
  ansi8: {
    hex: function(hex) {
      if(hex.trim().slice(0,1) === '#') hex = hex.slice(1);
      if(hex.length === 6) {
        var r = hex.slice(0,2);
        var g = hex.slice(2,4);
        var b = hex.slice(4,6);
      } else if(hex.length === 3) {
        var r = hex.slice(0,1).repeat(2);
        var g = hex.slice(1,2).repeat(2);
        var b = hex.slice(2,3).repeat(2);
      } else { return }
      parseInt(r, 16) < 128 ? r = 0 : r = 255;
      parseInt(g, 16) < 128 ? g = 0 : g = 255;
      parseInt(b, 16) < 128 ? b = 0 : b = 255;
      return ansi8[`${r} ${g} ${b}`];
    },
  },
  ansi256: {
    hex: function(hex) {
      if(hex.trim().slice(0,1) === '#') hex = hex.slice(1);
      if(hex.length === 6) {
        var r = parseInt(hex.slice(0,2),16);
        var g = parseInt(hex.slice(2,4),16);
        var b = parseInt(hex.slice(4,6),16);
      } else if(hex.length === 3) {
        var r = parseInt(hex.slice(0,1).repeat(2),16);
        var g = parseInt(hex.slice(1,2).repeat(2),16);
        var b = parseInt(hex.slice(2,3).repeat(2),16);
      } else { return }
      var min = undefined;
      var idx = undefined;
      ansi256.forEach((c) => {
        var val = Math.abs(c.r-r)+Math.abs(c.g-g)+Math.abs(c.b-b);
        if(min === undefined || val<min) {
          min = val;
          idx = `\x1b[38;2;${c.r};${c.g};${c.b}m`;
          if(min === 0) return idx;
        }
      });
      return idx;
    },
  },
  reset:'\x1b[39m',
}