//const doc = require('fs').readFileSync('example.txt').toString().split('\n');
const doc = require('fs').readFileSync('input.txt').toString().split('\n');

function calibrate() {
  let res = 0;

  doc.forEach(line => {
    if(line.length===0) return

    let firstDigit;
    let lastDigit;
    let first = true;
    let value

    line.split('').forEach(char => {
      if (char === '\r' || char === '\n') return
      if (!isNaN(char)) {
        if (first) {
          first = false;
          firstDigit = char
        }
        lastDigit = char
      }
    })
    value = firstDigit + lastDigit
    res += parseInt(value)
  });

  return res
}

console.log('Answer: ' + calibrate())