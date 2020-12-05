const plane = require('fs').readFileSync('input.txt').toString().split('\n');
//const plane = require('fs').readFileSync('example.txt').toString().split('\n');

function binarySort(lower, upper, move) {
    switch (move) {
        case "F":
        case "L":
            return Math.trunc(lower + (upper - lower) / 2)
        case "R":
        case "B":
            return Math.trunc((upper - lower) / 2);
    }
}

function doThing() {
    let highest = 0,
        id;

    plane.forEach(elem => {
        let upper = 128,
            lower = 1,
            left = 1,
            right = 8,
            row = 0,
            column = 0;
        for (let pos in elem) {
            if (pos > 6 && pos < elem.length - 1) {
                switch (elem[pos]) {
                    case "L":
                        right = binarySort(left, right, "L");
                        break;
                    case "R":
                        left += binarySort(left, right, "R");
                        break;
                }
            } else if (pos == 6) {
                (elem[pos] == 'F') ? (row = lower) : (row = upper - 1);
            } else if (pos == elem.length - 1) {
                (elem[pos] == 'L') ? (column = left) : (column = right - 1);
            } else {
                switch (elem[pos]) {
                    case "F":
                        upper = binarySort(lower, upper, "F")
                        break;
                    case "B":
                        lower += binarySort(lower, upper, "B")
                        break;
                }
            }
        }
        id = (row * 8 + column);
        id > highest ? highest = id : null;
        console.log("row:", row, "column:", column, "id:", id)
    });
    return id;
}

console.log(doThing());