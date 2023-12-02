//const doc = require('fs').readFileSync('example.txt').toString().split('\n');
const doc = require('fs').readFileSync('input.txt').toString().split('\n');

function checkPossibility(gameSet) {
    let blues = gameSet.filter(cube => cube.includes('blue'))
    blues = blues.map(b => parseInt(b.trim().match(/(\d+)/g))).flat()
    const blue= Math.max(...blues)

    let reds = gameSet.filter(cube => cube.includes('red'))
    reds = reds.map(b => parseInt(b.trim().match(/(\d+)/g))).flat()
    const red= Math.max(...reds)

    let greens = gameSet.filter(cube => cube.includes('green'))
    greens = greens.map(b => parseInt(b.trim().match(/(\d+)/g))).flat()
    const green= Math.max(...greens)

    return red*green*blue
}

function calibrate() {
    let res = 0;
    doc.forEach((line) => {
        const game = line.split(': ')[1]
        res += checkPossibility(game.split(/[,;]+/));
    });
    return res
}

console.log('Answer: ' + calibrate())