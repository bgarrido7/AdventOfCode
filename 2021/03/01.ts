const lines = require('fs').readFileSync('example.txt').toString().split('\n')
//  const line = require('fs').readFileSync('input.txt').toString().split('\n');

function countIncreases(){
    let matrix = new Array(lines[0].length).fill({
        '0':0,
        '1':0
    })
    let gamma="";
    lines.forEach((elem,i)=>{
        console.log(elem,i)
        elem.split('').forEach(bit => {
            console.log( bit)
            matrix[i][bit]++;
        });
    })
  
    return matrix;
}

console.log(countIncreases())