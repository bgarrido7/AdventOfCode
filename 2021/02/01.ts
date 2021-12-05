// const line = require('fs').readFileSync('example.txt').toString().split('\n');
const line = require('fs').readFileSync('input.txt').toString().split('\n');

function countIncreases(){
    let x=0, y=0
    line.forEach(elem => {
        switch(elem.split(' ')[0]){
        case 'forward':
            y+=parseInt(elem.split(' ')[1])
            break;
        case 'up':
            x+=parseInt(elem.split(' ')[1])
            break;
        case 'down':
            x-=parseInt(elem.split(' ')[1])
            break;
        }
    });
    return(Math.abs(x) * Math.abs(y))
}

console.log(countIncreases())