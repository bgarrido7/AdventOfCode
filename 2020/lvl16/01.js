const values = require('fs').readFileSync('input.txt').toString().split('\n\n');
//const values = require('fs').readFileSync('example.txt').toString().split('\n\n');

function doThing() {
    let validNum = new Set();
    let sum = 0;

    values.forEach(v => {
        if (v.split("\n")[0] === "your ticket:") return;

        else if (v.split("\n")[0] === "nearby tickets:") {
            v.split("\n").slice(1).forEach(check => {
                check.split(",").forEach(nums => {
                    validNum.has(parseInt(nums)) ? null : sum += parseInt(nums);
                })
            });
        } else {
            let max, min;
            v.split("\n").forEach(field => {
                field.split(": ")[1].split(" or ").forEach(nums => {
                    min = parseInt(nums.split("-")[0]);
                    max = parseInt(nums.split("-")[1]);
                    for (let i = min; i <= max; i++) { validNum.add(parseInt(i)); }

                });
            });
        }
    })
    return sum
}

console.log(doThing())