//const questions = require('fs').readFileSync('example.txt').toString().split('\n');
const questions = require('fs').readFileSync('input.txt').toString().split('\n');

function doThing() {
    let count = 0;
    let group = [];
    questions.forEach((letters, index, vector) => {

        let answers = [];
        if (letters !== "") { //join groups
            for (let l of letters) { answers.push(l); }
            group.push(answers);
        }
        if (letters === "" || vector[index + 1] === undefined) { //end of group
            let firstSet = new Set(group[0]); //cria um set com os 'yes' da primeira pessoa do grupo
            //caso haja só 1 pessoa este set é equivalente à interseçao final
            let intersection = new Set([...firstSet].filter(x => firstSet.has(x)));

            //faz interceçao entre 'yes' da primeira pessoa e restantes do grupo
            group.forEach(g => {
                nextSet = new Set(g);
                intersection = new Set([...intersection].filter(x => nextSet.has(x)));
            });

            count += intersection.size;

            answers = [];
            group = [];
        }
    });
    return count;
}
console.log(doThing());