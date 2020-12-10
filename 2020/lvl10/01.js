const joltage = require('fs').readFileSync('input.txt').toString().split('\n').map(x => parseInt(x));
//const joltage = require('fs').readFileSync('example.txt').toString().split('\n').map(x => parseInt(x));
//const joltage = require('fs').readFileSync('example2.txt').toString().split('\n').map(x => parseInt(x));

function doThing() {
    let adapter = [0, 0, 0];
    joltage.sort((a, b) => a - b);
    // console.log(joltage)
    for (let i = -1; i < joltage.length; i++) {
        if (i === joltage.length - 1)
            adapter[2]++;
        else if (i === -1) {
            adapter[joltage[0] - 1]++;
        } else {
            adapter[(joltage[i + 1] - joltage[i]) - 1]++;
        }
    }
    console.log(adapter, adapter[0], adapter[2])

    return (adapter[0] * adapter[2]);
}

console.log(doThing())
