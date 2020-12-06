//const questions = require('fs').readFileSync('input.txt').toString().split('\n');
const questions = require('fs').readFileSync('example.txt').toString().split('\n');

function doThing() {
    let count = 0
    let group = [];
    questions.forEach((letters, index, vector) => {
        let answers = [];
        if (letters !== "") {
            for (let l of letters) { answers.push(l); }
            group.push(answers);
        }
        if (letters === "" || vector[index + 1] === undefined) {
            console.log(group, count)
            if (group.length == 1) {
                count += group[0].length;
            } else {
                // let yes = group.shift();
                // let add = [];
                // yes.forEach(letter => {
                //     for (let g of group) {
                //         (g.indexOf(letter) >= 0) ? (add.includes(letter) ? null : add.push(letter)) : null;
                //     }
                // });
                // count += add.length;
            }
            answers = [];
            group = []
        }
    });
    return count;
}
console.log(doThing());