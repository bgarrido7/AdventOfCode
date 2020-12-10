const plane = require('fs').readFileSync('input.txt').toString().split('\n');
//const plane = require('fs').readFileSync('example.txt').toString().split('\n');

function doThing() {
    let seats = [];

    plane.forEach(elem => {
        let row = elem.slice(0, 7)
        let column = elem.slice(7);

        row = row.replace(/F/gi, 0);
        row = row.replace(/B/gi, 1);
        column = column.replace(/R/gi, 1);
        column = column.replace(/L/gi, 0);

        let id = parseInt(row, 2) * 8 + parseInt(column, 2);
        seats.push(id);
    });

    return Math.max.apply(null, seats);
}

console.log(doThing());
