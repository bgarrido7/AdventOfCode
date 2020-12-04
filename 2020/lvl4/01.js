const line = require('fs').readFileSync('input.txt').toString().split('\n');
//const line = require('fs').readFileSync('example.txt').toString().split('\n');

function doThing() {
    let valid = 0;
    let requirements = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid", "cid"];
    let content = [];

    line.forEach((el, index, vector) => {

        if (el === "" || vector[index + 1] === undefined) { //if detects new line break or EOF
            let isValid = true
            requirements.forEach(r => {
                if (content.indexOf(r) < 0 && r !== "cid")
                    isValid = false;
            });
            isValid ? valid++ : null;
            content = [];
            return;
        }

        let passp = el.split(' ');
        passp.forEach(c => {
            content.push(c.split(":")[0]);
        });

    });

    return valid;
}

console.log(doThing());