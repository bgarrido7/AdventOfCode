const initialization = require('fs').readFileSync('input.txt').toString().split('\n');
//const initialization = require('fs').readFileSync('example2.txt').toString().split('\n');

function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
}

function getValues(mem) {
    let values = [];
    for (let i = 0; i < Math.pow(2, (mem.match(/X/gi).length)); i++) {
        values.push(mem);
    }
    let include = []
    for (let i = 0; i < values.length / 2; i++) { include.push(i); }
    let size = values.length / 2;
    while (values.some(v => v.includes("X"))) {
        size = size / 2;
        let copy = true,
            num = 1;
        for (let i = 0; i < values.length; i++) {
            include.includes(i) ?
                values[i] = values[i].replace("X", 0) :
                values[i] = values[i].replace("X", 1);
        }
        include = [];
        for (let i = 0; i < values.length; i++) {
            copy ? include.push(i) : null;
            if (num === size) {
                copy = !copy;
                num = 1;
            } else { num++; }
        }
    }
    return values;
}

function doThing() {
    let res = new Object;
    let mask;
    let sum = 0;

    initialization.forEach(ini => {
        if (ini.split(" ")[0] === "mask") {
            mask = ini.split("= ")[1];
        } else {
            let mem = parseInt(ini.split("[")[1].split("]")[0]).toString(2).padStart(mask.length, "0");
            let val = parseInt(ini.split("= ")[1]);

            mask.split("").forEach((bit, index) => {
                if (bit !== "0")
                    mem = replaceAt(mem, index, bit);
            });
            let possibleMem = getValues(mem);
            possibleMem.forEach(m => {
                let key = parseInt(m, 2).toString(10);
                res[key] = val;
            });
        }
    });

    Object.entries(res).forEach(([key, value]) => { sum += value; });
    return sum;
}

console.log(doThing())