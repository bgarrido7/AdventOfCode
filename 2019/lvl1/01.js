//const line = require('fs').readFileSync('example.txt').toString().split('\n');
const line = require('fs').readFileSync('input.txt').toString().split('\n');

function fuel() {
    let sum = 0
    line.forEach(mass => {
        sum += Math.floor(mass / 3) - 2
    })
    return sum
}
console.log(fuel())