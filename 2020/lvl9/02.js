const line = require('fs').readFileSync('input.txt').toString().split('\n');
//const line = require('fs').readFileSync('example.txt').toString().split('\n');

function doThing() {
    let preambleLength = 25;

    for (let i = 0; i < ((line.length) - preambleLength); i++) {
        let preamble = line.slice(i, preambleLength + i);

        //  console.log(preamble, i, parseInt(line[preambleLength + i]));
        let valid = false;

        //next number must be a sum of 2 DIFERENT nr in the (LENGHT nr) preamble
        preamble.forEach(p1 => {
            preamble.forEach(p2 => {
                if ((parseInt(p1) + parseInt(p2) === parseInt(line[preambleLength + i])) && (parseInt(p1) !== parseInt(p2))) {
                    valid = true;
                    //   console.log(p1, p2, line[preambleLength + i]);
                }
            });
        });
        if (!valid) {
            console.log(line[preambleLength + i], 'is invalid');
            return (line[preambleLength + i])
        }
        // (!valid) ? console.log(line[preambleLength + i + 1], "is invalid!"): null;

        //console.log(i, preambleLength, preamble)
    }

}


console.log(doThing())