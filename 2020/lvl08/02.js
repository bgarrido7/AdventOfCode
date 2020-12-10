const { clear } = require('console');
const { ESTALE } = require('constants');

//const lines = require('fs').readFileSync('input.txt').toString().split('\n');
const lines = require('fs').readFileSync('example.txt').toString().split('\n');

function getAcc(line) {
    let acc = 0;
    for (let i = 0; i < line.length; i++) {
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

function givesLoop(line) {
    // console.log(line)
    let visitedInst = [];

    for (let i = 0; i < line.length; i++) {
        if (visitedInst.includes(i))
            return true;

        visitedInst.push(i);
        let op = line[i].split(" ")[0];
        let arg = parseInt(line[i].split(" ")[1]);
        if (op == 'jmp')
            i += (arg - 1)
    }

    return false
}

function doThing() {
    let newLine = [];
    let tmp = Array.from(lines);

    lines.forEach((l, i) => {
        let testLine = Array.from(tmp); //.slice();

        console.log("\ntest: ", testLine)
        console.log("\ntmp: ", tmp)
        console.log("\nline: ", lines)

        switch (l.split(" ")[0]) {
            case 'jmp':
                if (parseInt(l.split(" ")[1]) == 0)
                    break;
                testLine[i] = lines[i].replace('jmp', 'nop');
                if (!givesLoop(testLine)) {
                    newLine = testLine;
                    return;
                }
                break;
            case 'nop':
                testLine[i] = lines[i].replace('nop', 'jmp');
                if (!givesLoop(testLine)) {
                    newLine = testLine;
                    return;
                }
                break;
        }
    })

    return getAcc(newLine);
}

console.log(doThing());