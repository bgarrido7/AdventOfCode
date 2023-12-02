const doc = require('fs').readFileSync('example.txt').toString().split('\n');
//const doc = require('fs').readFileSync('input.txt').toString().split('\n');

const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero']

const mapping = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9
}

function extractNumbers(line) {
    let firstDigit;
    let lastDigit;
    let first = true;

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
    return firstDigit + lastDigit
}

function calibrate() {
    let res = 0;

    doc.forEach(line => {
        if (line.length === 0) return
        const value = extractNumbers(line)
        res += parseInt(value)
    });
    return res
}

console.log('Answer: ' + calibrate())