//const line = require('fs').readFileSync('example.txt').toString().split('\n');
const line = require('fs').readFileSync('input.txt').toString().split('\n');


function doThing() {
    let valid = 0;
    line.forEach(l => {
        let policy = l.split(':')[0];
        let pass = l.split(':')[1]; //index 0 is a ' ' so its like if the string starts at index 1

        let letter = policy.split(' ')[1];

        let char1 = pass.charAt(parseInt(policy.split('-')[0]));
        let char2 = pass.charAt(parseInt(policy.split('-')[1].split(' ')[0]));

        if ((char1 === letter && char2 !== letter) || (char2 === letter && char1 !== letter))
            valid++;

    });

    return valid;
}

console.log(doThing());