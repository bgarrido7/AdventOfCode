//const buffer = require('fs').readFileSync('example.txt').toString().split('');
const buffer = require('fs').readFileSync('input.txt').toString().split('');

function getMarkerPosition() {
    const uniqueChars = 14
    let pos = uniqueChars

    do {
        var marker = buffer.slice(pos - uniqueChars, pos)
        pos++;
    } while (!isUnique(marker))

    return pos - 1;
}

function isUnique(array) {
    return (array.length === new Set(array).size)
}


console.log('Answer: ' + getMarkerPosition())