const questions = require('fs').readFileSync('input.txt').toString().split('\n');
//const questions = require('fs').readFileSync('example.txt').toString().split('\n');

function doThing() {
    let count = 0
    let answers = [];

    questions.forEach((letters, index, vector) => {
        for (let l of letters) { answers.includes(l) ? null : answers.push(l); }

        if (letters === "" || vector[index + 1] === undefined) {
            count += answers.length
            answers = [];
        }
    });
    return count;
}
console.log(doThing());