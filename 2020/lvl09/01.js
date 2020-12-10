const line = require('fs').readFileSync('input.txt').toString().split('\n');
//const line = require('fs').readFileSync('example.txt').toString().split('\n');

function doThing() {
    let preambleLength = 25; //switch to 5 for the example.txt input

    for (let i = 0; i < ((line.length) - preambleLength); i++) {
        let preamble = line.slice(i, preambleLength + i);
        let valid = false;

        //next number must be a sum of 2 DIFERENT nr in the (LENGHT nr) preamble
        preamble.forEach(p1 => {
            preamble.forEach(p2 => {
                if ((parseInt(p1) + parseInt(p2) === parseInt(line[preambleLength + i])) &&
                    (parseInt(p1) !== parseInt(p2)))
                    valid = true;

            });
        });
        if (!valid)
            return (line[preambleLength + i]);
    }
}

console.log(doThing())