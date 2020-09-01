//const input = require('fs').readFileSync('example.txt').toString().split(',');
const input = require('fs').readFileSync('input.txt').toString().split(',');

const line = input.map( x => parseInt(x))

function fuel(){

line[1]=12
line[2]=2
//console.log(line)
    for (let i=0;  i<line.length; i++){
        //console.log(i, "->", line[i])

        switch(line[i]){
            case 1:
                line[line[i+3]] = line[line[i+1]] + line[line[i+2]]
                i=i+3;
                //console.log(line)
                break;

            case 2:
                line[line[i+3]] = line[line[i+1]] * line[line[i+2]]
                i+=3;
                //console.log(line)
                break;

            case 99:
                //console.log("program is finished")
                //console.log(line)
                console.log(line[0])
                return;
        }
    }
}

fuel()
