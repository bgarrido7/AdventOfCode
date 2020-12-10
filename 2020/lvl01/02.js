const line = require('fs').readFileSync('example.txt').toString().split('\n');
//const line = require('fs').readFileSync('input.txt').toString().split('\n');


function doThing() {
    let num1, num2, num3 = 0;
    line.forEach((elem, index, vector) => {
        vector.forEach((e, i, v) => {
            v.forEach(el => {
                if ((parseInt(el) + parseInt(e) + parseInt(elem)) == 2020) {
                    num1 = parseInt(e);
                    num2 = parseInt(elem);
                    num3 = parseInt(el);
                }
            })

        });
    });
    return (num1 * num2 * num3);
}

console.log(doThing());