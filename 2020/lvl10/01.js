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


/**
 * 0 jolts -> 1, 2, 3 joltage higher => 1 //1
 * 1 jolts -> 1, 2, 3 joltage higher => 4 //3
 * 4 jolts => 5 (in order to not skip any adapter) //1
 * 5 => 6, 6 => 7 //1 //1
 * 7 => 10 //3
 * 10 => 11, 11 => 12 //1 //1
 * 12 => 15, 15 => 16 //3 //1
 * 16 => 19 //3
 * 19 +3 ==> 22 //3
 * 
 * adapter 1 =>> 7
 * adapter 3 =>> 5
 */