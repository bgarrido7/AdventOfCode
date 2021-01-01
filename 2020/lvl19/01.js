//const input = require('fs').readFileSync('input.txt').toString().split('\n\n');
const input = require('fs').readFileSync('example.txt').toString().split('\n\n');

function doThing() {
    let rules = input[0];
    let msg = input[1];

    let valid = [];
    rules.split("\n").forEach(r => {
        console.log(r)
        r.splice(0, 3);
        valid.push(r);
    });
    msg.split("\n").forEach(m => {
        console.log(m)
    });

}

console.log(doThing())