const line = require('fs').readFileSync('input.txt').toString().split('\n');

function neededFuel(input) {
    return Math.floor(input / 3) - 2
}

function solution() {
    let totalFuel = 0;
    line.forEach(mass => {
        while (neededFuel(mass) > 0) {
            mass = neededFuel(mass);
            totalFuel += mass;
        }
    })
    return totalFuel;
}
console.log(solution());