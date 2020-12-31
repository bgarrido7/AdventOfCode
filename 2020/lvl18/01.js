//const homework = require('fs').readFileSync('input.txt').toString().split('\n');
const homework = require('fs').readFileSync('example.txt').toString().split('\n');

function doThing() {

    for (let expression of homework) {
        expression = expression.replace(/\(/g, "( ")
        expression = expression.replace(/\)/g, " )")
        expression = expression.split(" ");

        while (expression.includes("(")) {
            expression.forEach((exp, index) => {
                if (exp === "(") {
                    let math = expression.slice(index + 1, expression.indexOf(")") + 1);

                    if (math.includes("(")) {
                        let math2 = math.slice(math.indexOf("(") + 1, math.indexOf(")"));
                        math.splice(math.indexOf("(") + 1);
                        math2 = math2.toString().replace(/,/g, '');
                        math[math.indexOf("(")] = eval(math2).toString();
                        math.push(")");
                    } else {
                        expression.splice(index + 1, math.length);
                        math.splice(-1, 1);
                        math = math.toString().replace(/,/g, '');
                        expression[index] = eval(math).toString();
                    }
                }
            });
        }
        console.log(expression.toString().replace(/,/g, ''));
        console.log(eval(expression.toString().replace(/,/g, ''))); //eval respeita a orderm da * mas eu nao quero isso, quero tudo seguido
    }
}

console.log(doThing())