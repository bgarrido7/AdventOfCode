const tickets = require('fs').readFileSync('input.txt').toString().split('\n');
//const tickets = require('fs').readFileSync('example.txt').toString().split('\n');

function doThing() {
    let plane = [];
    for (let i = 0; i < 128; i++) {
        plane[i] = [];
        for (let j = 0; j < 8; j++) {
            plane[i][j] = 0;
        }
    }
    let mySeat = 0;
    tickets.forEach(elem => {
        let row = elem.slice(0, 7)
        let column = elem.slice(7);

        row = row.replace(/F/gi, 0);
        row = row.replace(/B/gi, 1);
        column = column.replace(/R/gi, 1);
        column = column.replace(/L/gi, 0);

        plane[parseInt(row, 2)][parseInt(column, 2)] = 1;
    });
    plane.forEach((line, r) => {
        line.forEach((seat, c, vector) => {
            if (vector[c - 1] == 1 && vector[c + 1] === vector[c - 1] && seat == 0)
                mySeat = r * 8 + c;
        });
    });
    return mySeat;
}
console.log(doThing());