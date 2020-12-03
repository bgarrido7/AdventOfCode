const input = require('fs').readFileSync('input.txt').toString().split('\n');
//const input = require('fs').readFileSync('pattern.txt').toString().split('\n');

function doThing() {
    let trees = 0;

    let count = 0;
    input.forEach(function() { count++ });
    let xTimes = (count - 1) * 2;
    let pattern = input.map(p => p.repeat(xTimes))

    let matrix = new Array();
    pattern.forEach(line => {
        let tempArray = new Array();
        for (let i in line)
            tempArray.push(line[i]);
        matrix.push(tempArray);
    });

    let checkX = [1, 3, 5, 7, 1];
    let checkY = [1, 1, 1, 1, 2];
    for (i in checkY) {
        let t = 0;
        x = checkX[i];
        y = checkY[i];
        for (let times = 1; times < count / checkY[i]; times++) {
            if (matrix[y][x] === "#") {
                t++;
            }
            x += checkX[i];
            y += checkY[i];
        }
        trees === 0 ? trees = t : trees *= t;
    }
    return trees;
}
console.log(doThing());