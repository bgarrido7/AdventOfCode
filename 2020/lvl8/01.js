const line = require('fs').readFileSync('input.txt').toString().split('\n');
//const line = require('fs').readFileSync('example.txt').toString().split('\n');

function doThing() {
    let acc = 0;
    let visitedInst = [];

    for (let i = 0; i < line.length; i++) {
        if (visitedInst.includes(i))
            break;
        else
            visitedInst.push(i);

        let op = line[i].split(" ")[0];
        let arg = parseInt(line[i].split(" ")[1]);
        switch (op) {
            case ('acc'):
                acc += arg;
                break;
            case ('jmp'):
                i += (arg - 1)
                break;
            default:
                break;
        }
    }
    return acc;
}

console.log(doThing());