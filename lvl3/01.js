//const line = require('fs').readFileSync('./example.txt').toString().split('\n');
const line = require('fs').readFileSync('./input.txt').toString().split('\n');

function checkID(){
    let fabric = [];

    for (var i = 0; i < 1000; i++) {
        fabric[i] = [];
        for (var j = 0; j < 1000; j++) {
            fabric[i][j] = ".";
        }
    }

    for (let i in line){
        let id = (line[i].split('#')[1].split(' ')[0])
        //console.log("id-> ",id)

        let pos = line[i].split('@')[1].split(':')[0]
        let size = line[i].split('@')[1].split(':')[1]

        let x = parseInt(pos.split(',')[0])
        let y = parseInt(pos.split(',')[1])

        let width = parseInt(size.split('x')[0])
        let height = parseInt(size.split('x')[1])

        //console.log(x,y)
        //console.log(width,height)

        for(let i = x; i<(x+width);i++){
            for(let j = y;j<(y+height);j++){
                
                if(fabric[j][i] == '.')
                    fabric[j][i] = id
                else
                    fabric[j][i] = 'X'
            }
        }
    }
    //console.log(fabric)

    let count = 0

    fabric.forEach(row => {
        row.forEach(cell => {
            if(cell=='X')
                count++
        })
    })

    console.log("inches that overlap: " + count)
}

checkID()