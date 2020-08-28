const line = require('fs').readFileSync('input.txt').toString().split('\n');


function sum(){
    var freq = 0;

    for (let key in line){
        if( !isNaN( parseInt(line[key]) ) ){
            //console.log(parseInt(line[key]))
            freq += parseInt(line[key]);
            
        }
    }
    return freq;
}

console.log(sum())
