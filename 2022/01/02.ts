//const line = require('fs').readFileSync('example.txt').toString().split('\n');
const line = require('fs').readFileSync('input.txt').toString().split('\n');

function getCalories() {
    let foodCount = new Array()
    let elf = 0
    line.forEach((cal, idx, array) => {
        if (cal !== '') elf += parseInt(cal)

        if (cal === '' || idx === array.length - 1) {
            foodCount.push(elf)
            elf = 0
            return;
        }

    });
    foodCount.sort((a, b) => b - a)
    return foodCount[0] + foodCount[1] + foodCount[2]
}

console.log('Answer: ' + getCalories())