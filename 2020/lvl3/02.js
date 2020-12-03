const pattern = require('fs').readFileSync('input.txt').toString().split('\n');
//const pattern = require('fs').readFileSync('pattern.txt').toString().split('\n');

function doThing() {
    let trees = 0;

    let count = 0;
    pattern.forEach(function() { count++ });
    let xTimes = (count - 1) * 2;

    let checkX = [1, 3, 5, 7, 1];
    let checkY = [1, 1, 1, 1, 2];

    checkX.forEach((c, index, vector) => {
        let x = -c;
        //console.log("Y number:", checkY[index])
        if (checkY[index] === 1) {
            let t = 0;
            pattern.forEach((elem) => {
                x += c;
                if (x == 0) { return; } //skips the first line
                else {
                    let p = elem.repeat(xTimes);
                    if (p.charAt(x) === "#") {
                        t++;
                    }
                }
            })
            trees === 0 ? trees = t : trees *= t;
        } else if (checkY[index] === 2) {
            let t = 0;
            let y = -2;
            pattern.forEach((elem) => {
                x += c;
                y++;
                if (y % 2 !== 0 || y <= 0) { //skips every 2 lines
                    y === 0 ? null : x--;
                    return;
                } else {
                    let p = elem.repeat(xTimes);
                    if (p.charAt(x) === "#") {
                        t++;
                    }
                }

            })
            trees === 0 ? trees = t : trees *= t;
        }
    });
    return trees;
}

console.log(doThing());