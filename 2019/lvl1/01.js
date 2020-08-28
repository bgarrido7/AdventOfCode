//const line = require('fs').readFileSync('example.txt').toString().split('\n');
const line = require('fs').readFileSync('input.txt').toString().split('\n');

function fuel(){
    let res = 0

    line.forEach( elem => {
        let fuel = Math.floor(parseInt(elem) / 3)-2 
        res += fuel
        // console.log(fuel)
    })

    return res
}

console.log(fuel())
