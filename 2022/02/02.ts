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
                score += loss;
                if (opponentPlay === 'A') score += scissors;
                if (opponentPlay === 'B') score += rock;
                if (opponentPlay === 'C') score += paper;
                break;
            case 'Y':
                score += draw;
                if (opponentPlay === 'A') score += rock;
                if (opponentPlay === 'B') score += paper;
                if (opponentPlay === 'C') score += scissors;
                break;
            case 'Z':
                score += win;
                if (opponentPlay === 'A') score += paper;
                if (opponentPlay === 'B') score += scissors;
                if (opponentPlay === 'C') score += rock;
                break;
        }
    })
    return score
}

console.log('Answer: ' + getScore())