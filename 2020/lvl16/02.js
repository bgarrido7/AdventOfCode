const values = require('fs').readFileSync('input.txt').toString().split('\n\n');
//const values = require('fs').readFileSync('example2.txt').toString().split('\n\n');

function discard(value) {
    let validNum = new Set();
    let invalid = [];
    value.forEach(v => {
        if (v.split("\n")[0] === "your ticket:") return;
        else if (v.split("\n")[0] === "nearby tickets:") {
            v.split("\n").slice(1).forEach(check => {
                check.split(",").forEach(nums => {
                    validNum.has(parseInt(nums)) ? null : invalid.push(parseInt(nums));
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
    });
    return invalid;
}

function doThing() {
    let match = new Map();
    let fields = new Map();
    let myTicket = [];
    let ignore = discard(values.slice(0));
    let compare = new Array();

    values.forEach(v => {
        if (v.split("\n")[0] === "your ticket:") {
            v.split("\n")[1].split(",").forEach(nums => {
                myTicket.push(parseInt(nums));
            });

        } else if (v.split("\n")[0] === "nearby tickets:") {
            v.split("\n").slice(1).forEach(check => {
                let checkArray = check.split(",").map(function(item) {
                    return parseInt(item, 10);
                });
                for (let i = 0; i < checkArray.length; i++) {
                    if (!ignore.includes(checkArray[i])) {
                        compare[i] !== undefined ?
                            compare[i] = [...compare[i], (checkArray[i])] :
                            compare.push([checkArray[i]]);
                    }
                }
            });

        } else {
            let max, min;
            v.split("\n").forEach(field => {
                let validNum = new Set();
                field.split(": ")[1].split(" or ").forEach(nums => {
                    min = parseInt(nums.split("-")[0]);
                    max = parseInt(nums.split("-")[1]);
                    for (let i = min; i <= max; i++) { validNum.add(parseInt(i)); }
                });
                fields.set(field.split(": ")[0], validNum);
            });
        }
    });
    let unique = [];

    compare.forEach((c, index) => {
        let u = []
        fields.forEach((f, i) => {
            if (c.every(curr => (f.has(curr)))) {
                u.push([i, index])
            }
        });
        unique.push(u)
    });
    let i = 0;
    while (match.size < fields.size) {
        i++
        console.log(i)
        let remove = [];
        unique.forEach(un => {
            if (un.length === 1) {
                remove = un[0];
                match.set(un[0][0], un[0][1]);
            } else if (remove !== []) {
                let i;
                un.forEach((u, index) => { u[0] === remove[0] ? i = index : null; });
                un.splice(un.indexOf(un[i]), 1);
            }
        });
    }
    return match;
}

console.log(doThing())