//const buffer = require('fs').readFileSync('example.txt').toString().split('');
const buffer = require('fs').readFileSync('input.txt').toString().split('');

function getMarkerPosition() {
  let pos = 4

  do {
    var marker = buffer.slice(pos - 4, pos)
    pos++;
  } while (!isUnique(marker))

  return pos - 1;
}

function isUnique(array) {
  return (array.length === new Set(array).size)
}


console.log('Answer: ' + getMarkerPosition())