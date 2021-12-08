// const line = require('fs').readFileSync('example.txt').toString().split('\n');
const line = require('fs').readFileSync('input.txt').toString().split('\n');

function countIncreases(){
    let aim=0, pos=0, depth=0
    line.forEach(elem => {
        switch(elem.split(' ')[0]){
        case 'forward':
            pos+=parseInt(elem.split(' ')[1])
            depth+=aim*parseInt(elem.split(' ')[1])
            break;
        case 'up':
            aim-=parseInt(elem.split(' ')[1])
            break;
        case 'down':
            aim+=parseInt(elem.split(' ')[1])
            break;
        }
    });
    return(Math.abs(pos) * Math.abs(depth))
}

console.log(countIncreases())