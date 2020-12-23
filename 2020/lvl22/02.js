const cards = require('fs').readFileSync('input.txt').toString().split('\n\n');
//const cards = require('fs').readFileSync('example.txt').toString().split('\n\n');

function doThing() {
    let p1 = [],
        p2 = [],
        winner = [];

    let res = 0;
    cards.forEach((c, i) => {
        let deck = c.split("\n").slice(1);
        i == 0 ? p1 = deck : p2 = deck;
    });
    while (p1.length > 0 && p2.length > 0) {
        if (parseInt(p1[0]) > parseInt(p2[0])) {
            p1.push(p1[0]);
            p1.push(p2[0]);

        } else {
            p2.push(p2[0]);
            p2.push(p1[0]);
        }
        p1.shift();
        p2.shift();
    }
    p1.length === 0 ? winner = p2 : winner = p1;

    winner.forEach((f, i) => {
        res += parseInt(f) * (winner.length - i);
    });
    return res;
}

console.log(doThing())