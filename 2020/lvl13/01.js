const notes = require('fs').readFileSync('input.txt').toString().split('\n');
//const notes = require('fs').readFileSync('example.txt').toString().split('\n');

function doThing() {
    let myBus = 0,
        myTime = 0;
    let buses = [];
    let earliest = parseInt(notes[0]);
    let id = notes[1];

    id.split(",").forEach(t => {
        if (t !== 'x')
            buses.push(parseInt(t));
    });

    let newTime = earliest;
    let stop = true;
    while (stop) {
        buses.forEach(b => {
            if (newTime % b === 0) {
                myTime = newTime;
                myBus = b;
                stop = false;
            }
        });
        newTime++;
    }
    return myBus * (myTime - earliest);
}

console.log(doThing())