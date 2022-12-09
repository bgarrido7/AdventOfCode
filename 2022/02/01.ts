//const line = require('fs').readFileSync('example.txt').toString().split('\n');
const line = require('fs').readFileSync('input.txt').toString().split('\n');

function getScore() {
    let score = 0;

    const rock = 1
    const paper = 2
    const scissors = 3
    //A-> rock ; B-> paper ; C-> scissors
    //X-> rock ; Y-> paper ; Z-> scissors
    const win = 6
    const loss = 0
    const draw = 3

    line.forEach((game) => {
        const opponentPlay = game[0]
        const yourPlay = game[2]

        switch (yourPlay) {
            case 'X':
                score += rock;
                if (opponentPlay === 'A') score += draw;
                if (opponentPlay === 'B') score += loss;
                if (opponentPlay === 'C') score += win;
                break;
            case 'Y':
                score += paper;
                if (opponentPlay === 'A') score += win;
                if (opponentPlay === 'B') score += draw;
                if (opponentPlay === 'C') score += loss;
                break;
            case 'Z':
                score += scissors;
                if (opponentPlay === 'A') score += loss;
                if (opponentPlay === 'B') score += win;
                if (opponentPlay === 'C') score += draw;
                break;
        }
    })
    return score
}

console.log('Answer: ' + getScore())