//const homework = require('fs').readFileSync('input.txt').toString().split('\n');
const homework = require('fs').readFileSync('example.txt').toString().split('\n');

function doThing() {
    let sum = 0;
    let expression = homework[0]
    for (let expression of homework) {

        expression = expression.replace(/\)/g, " )").replace(/\(/g, "( ").split(" ");
        while (expression.includes("(")) {
            console.log(expression.toString().replace(/,/g, ''));
            let i = 0;
            let window = expression.slice(i, i + 3);

            while (window.includes("(")) {
                i++;
                window = expression.slice(i, i + 3);
                console.log(window, window.includes("("));
            }
            window = eval(window.toString().replace(/,/g, ''));
            console.log(window);

            i !== 0 ?
                expression.splice(i - 1, 5, window.toString()) :
                expression.splice(0, 3, window.toString());
        }

        console.log(eval(expression.toString().replace(/,/g, '')));
        sum += eval(expression.toString().replace(/,/g, ''));
    }

    return sum;
}

console.log(doThing())