//const questions = require('fs').readFileSync('input.txt').toString().split('\n');
const questions = require('fs').readFileSync('example.txt').toString().split('\n');

function doThing() {
    let count = 0;
    let intersection = new Set()
    let group = [];
    questions.forEach((letters, index, vector) => {
        let answers = [];
        if (letters !== "") { //join groups
            for (let l of letters) { answers.push(l); }
            group.push(answers);
        }
        if (letters === "" || vector[index + 1] === undefined) { //end of group
            if (group.length == 1) count += group[0].length;
            else {
                let firstSet = new Set(group.shift());
                group.forEach(g => {
                    let newSet = new Set(g);
                    intersection = new Set([...firstSet].filter(x => newSet.has(x)))
                });
                count += intersection.size;
            }
            answers = [];
            group = [];
        }
    });
    return (count);
}
console.log(doThing());