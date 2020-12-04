const line = require('fs').readFileSync('input.txt').toString().split('\n');
//const line = require('fs').readFileSync('example.txt').toString().split('\n');

function doThing() {
    let valid = 0;
    let requirements = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid", "cid"];
    let content = [],
        value = [];

    line.forEach((el, index, vector) => {

        let passp = el.split(' ');
        passp.forEach(c => {
            if (c !== '') {
                content.push(c.split(":")[0]);
                value.push(c.split(":")[1])
            }
        });

        if (el === "" || vector[index + 1] === undefined) { //if detects new line break or EOF
            let isValid = true;

            requirements.forEach(r => {
                if (content.indexOf(r) < 0 && r !== "cid")
                    isValid = false;
            });
            for (let i in content) {
                switch (content[i]) {
                    case ("byr"):
                        if (parseInt(value[i]) < 1920 || parseInt(value[i]) > 2002) {
                            isValid = false;
                        }
                        break;
                    case ("iyr"):
                        if (parseInt(value[i]) < 2010 || parseInt(value[i]) > 2020) {
                            isValid = false;
                        }
                        break;
                    case ("eyr"):
                        if (parseInt(value[i]) < 2020 || parseInt(value[i]) > 2030) {
                            isValid = false;
                        }
                        break;
                    case ("hgt"):
                        if ((value[i].slice(-2) !== "cm" && value[i].slice(-2) !== "in") ||
                            (value[i].slice(-2) === "cm") && (parseInt(value[i].slice(0, -2)) < 150 || parseInt(value[i].slice(0, -2)) > 193) ||
                            value[i].slice(-2) === "in" && (parseInt(value[i].slice(0, -2)) < 59 || parseInt(value[i].slice(0, -2)) > 76)) //missing
                        {
                            isValid = false;
                        }
                        break;
                    case ("hcl"):
                        if (value[i].charAt(0) !== "#" || value[i].slice(1).match(/[0-9a-f]/g).length !== 6) {
                            isValid = false;
                        }
                        break;
                    case ("ecl"):
                        if (value[i] !== "amb" && value[i] !== "blu" && value[i] !== "brn" &&
                            value[i] !== "gry" && value[i] !== "grn" && value[i] !== "hzl" && value[i] !== "oth") {
                            isValid = false;
                        }
                        break;
                    case ("pid"):
                        if (value[i].length !== 9 && parseInt(value[i]).toString().length !== 9) {
                            isValid = false;
                        }
                        break;
                    default:
                        break;
                }
            }
            isValid ? valid++ : null;
            content = [], value = [];
            return;
        }
    });
    return valid;
}

console.log(doThing());