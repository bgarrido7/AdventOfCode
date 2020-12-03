const pattern = require('fs').readFileSync('input.txt').toString().split('\n');
//const pattern = require('fs').readFileSync('pattern.txt').toString().split('\n');

function doThing() {
    let trees = 0;

    let count = 0;
    pattern.forEach(function() { count++ });
    let xTimes = (count - 1) * 2;

    let x = -3;
    pattern.forEach(elem => {
        x += 3;
        if (x == 0) { return; } //skips the first line
        else {
            let p = elem.repeat(xTimes);
            if (p.charAt(x) === "#")
                trees++;
        }
    })

    return trees;
}

console.log(doThing());