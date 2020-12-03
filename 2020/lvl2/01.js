//const line = require('fs').readFileSync('example.txt').toString().split('\n');
const line = require('fs').readFileSync('input.txt').toString().split('\n');


function doThing() {
    let valid = 0;
    line.forEach(l => {
        let policy = l.split(':')[0];
        let pass = l.split(':')[1];

        let letter = policy.split(' ')[1];
        let min = policy.split('-')[0];
        let max = policy.split('-')[1].split(' ')[0];

        let count = 0;

        for (let el in pass) {
            if (pass[el] === letter)
                count++;
        }

        if (count >= min && count <= max)
            valid++;
    });

    return valid;
}

console.log(doThing());