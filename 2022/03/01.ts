//const line = require('fs').readFileSync('example.txt').toString().split('\n');
const line = require('fs').readFileSync('input.txt').toString().split('\n');

function getRucksack() {
  let sum = 0

  line.forEach((items) => {
    let priority = 0;
    let done = false

    const compart1 = items.slice(0, items.length / 2)
    const compart2 = items.slice(items.length / 2)

    compart1.split('').forEach(char => {
      if (compart2.includes(char) && !done) {

        const charToASCII = char.charCodeAt(0)
        if (charToASCII > 96) priority = charToASCII- 96 //lowercase
        else priority = charToASCII - 64 + 26 //uppercase

        sum += priority
        done = true
        return;
      }
    })
  })
  return sum;
}

console.log('Answer: ' + getRucksack())
