//const line = require('fs').readFileSync('example.txt').toString().split('\n');
const line = require('fs').readFileSync('input.txt').toString().split('\n');

function fuel(){
    let answer = 0

    line.forEach( elem => {
        //console.log("\n-----------\n",elem)
        let fuel = Math.floor(parseInt(elem) / 3)-2 

        let needed = fuel, rest = fuel

        while( (Math.floor(rest / 3)-2) > 0 ){
            //console.log(rest)
            rest = Math.floor(rest / 3) - 2
            needed += rest
        }

        //console.log("sobras->",needed)
        answer += needed
    })

    return answer
}

console.log(fuel())
