const list = require('fs').readFileSync('input.txt').toString().split('\n');
//const list = require('fs').readFileSync('example.txt').toString().split('\n');

function getInvalid(input, preambleLength) {
    for (let i = 0; i < ((input.length) - preambleLength); i++) {
        let preamble = input.slice(i, preambleLength + i);
        let valid = false;
        preamble.forEach(p1 => {
            preamble.forEach(p2 => {
                if ((parseInt(p1) + parseInt(p2) === parseInt(list[preambleLength + i])) &&
                    (parseInt(p1) !== parseInt(p2)))
                    valid = true;
            });
        });
        if (!valid)
            return (input[preambleLength + i]);
    }
}

function doThing() {
    let preambleLength = 25; //switch to 5 for the example.txt input
    let windowSize = 2;
    let weakness = [];
    let invalidNr = getInvalid(list, preambleLength);

    do {
        for (let i = 0; i < (list.length / 2); i++) {
            weakness = list.slice(i, windowSize + i);
            if ((weakness.reduce((a, b) => parseInt(a) + parseInt(b)) === parseInt(invalidNr)))
                break;
        }
        windowSize++;

    } while ((weakness.reduce((a, b) => parseInt(a) + parseInt(b)) !== parseInt(invalidNr)));

    return (Math.max.apply(null, weakness) + Math.min.apply(null, weakness));
}

console.log(doThing())