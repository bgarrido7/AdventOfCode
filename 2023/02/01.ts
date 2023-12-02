//const doc = require('fs').readFileSync('example.txt').toString().split('\n');
const doc = require('fs').readFileSync('input.txt').toString().split('\n');

// 12 red cubes, 13 green cubes, and 14 blue cubes
function checkPossibility(num, color) {
    switch (color) {
        case 'red':
            if (num > 12)
                return false;
            break;
        case 'green':
            if (num > 13)
                return false;
            break;
        case 'blue':
            if (num > 14)
                return false;
            break;
    }
    return true;
}

function calibrate() {
    let res = 0;
    doc.forEach((line, i) => {
        let set = i + 1
        line.split(': ')[1].split('; ').forEach(sets => {
            sets.split(', ').forEach(cubes => {
                const possible = checkPossibility(parseInt(cubes.split(' ')[0]), cubes.split(' ')[1])
                if (!possible) set = 0
            })
        })
        res += set
    });
    return res
}

console.log('Answer: ' + calibrate())