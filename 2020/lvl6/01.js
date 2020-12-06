//const questions = require('fs').readFileSync('input.txt').toString().split('\n');
const questions = require('fs').readFileSync('example.txt').toString().split('\n');

function doThing() {
    let count = 0
    let answers = [];

    questions.forEach((letters, index, vector) => {
        if (letters === "") {
            count += answers.length
            answers = [];
        } else if (vector[index + 1] === undefined) {
            for (let l of letters) {
                answers.includes(l) ? null : answers.push(l);
            }
            count += answers.length
        } else {
            for (let l of letters) {
                answers.includes(l) ? null : answers.push(l);
            }
        }
    });
    return count;
}

console.log(doThing());