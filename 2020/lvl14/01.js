const initialization = require('fs').readFileSync('input.txt').toString().split('\n');
//const initialization = require('fs').readFileSync('example.txt').toString().split('\n');

function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
}

function doThing() {
    let res = [];
    let mask;
    initialization.forEach(ini => {
        if (ini.split(" ")[0] === "mask") {
            mask = ini.split("= ")[1];
            //console.log(mask)
        } else {
            let mem = parseInt(ini.split("[")[1].split("]")[0]);
            let val = parseInt(ini.split("= ")[1]).toString(2);
            while (val.length - 1 < mask.length - 1) {
                val = "0" + val;
            }
            //console.log("\nval :", val);

            mask.split("").forEach((bit, index) => {
                if (bit !== "X") {
                    val = replaceAt(val, index, bit);
                    //console.log(index, bit, val.charAt(index))
                }
            });
            //console.log("mask:", mask, "\nnewV:", val);

            res[mem] = parseInt(parseInt(val, 2).toString(10));
        }

    });
    //console.log(res)

    return res.reduce((a, b) => a + b);
}

console.log(doThing())