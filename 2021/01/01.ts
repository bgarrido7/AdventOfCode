// const line = require('fs').readFileSync('example.txt').toString().split('\n');
 const line = require('fs').readFileSync('input.txt').toString().split('\n');

function countIncreases(){
    let count=0;
    line.forEach((elem, i, array) => {
        if(i==0)  return
        else if(elem>array[i-1]){   count++  }
    });
    return count;
}

console.log(countIncreases())