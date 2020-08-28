const { read } = require('fs');

const line = require('fs').readFileSync('input.txt').toString().split('\n');

let res = 0

function fuel(){

    line.forEach( elem => {
        let fuel = Math.floor(parseInt(elem) / 3)-2 
        res += fuel
        // console.log(fuel)
    })

    return res
}

console.log(fuel())
