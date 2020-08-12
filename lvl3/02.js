//const line = require('fs').readFileSync('./example.txt').toString().split('\n');
const line = require('fs').readFileSync('./input.txt').toString().split('\n');


function checkID(){

    let fabric = [];
    let res = 0
    for (var i = 0; i < 1000; i++) {//fill in the multidimention array
        fabric[i] = [];
        for (var j = 0; j < 1000; j++) {
            fabric[i][j] = ".";
        }
    }

    for (let i in line){

        let id = (line[i].split('#')[1].split(' ')[0])

        let pos = line[i].split('@')[1].split(':')[0]
        let size = line[i].split('@')[1].split(':')[1]

        let x = parseInt(pos.split(',')[0])
        let y = parseInt(pos.split(',')[1])

        let width = parseInt(size.split('x')[0])
        let height = parseInt(size.split('x')[1])

        for(let i = x; i<(x+width);i++){ // fill in the array according to the input given
            for(let j = y;j<(y+height);j++){

                if(fabric[j][i] == '.'){
                    fabric[j][i] = id
                }        
                else{
                    fabric[j][i] = 'X'
                }
            }  
        }
    }
//console.log(fabric)
    for (let i in line){

        let id = (line[i].split('#')[1].split(' ')[0])

        let pos = line[i].split('@')[1].split(':')[0]
        let size = line[i].split('@')[1].split(':')[1]

        let x = parseInt(pos.split(',')[0])
        let y = parseInt(pos.split(',')[1])

        let width = parseInt(size.split('x')[0])
        let height = parseInt(size.split('x')[1])

        let unique = true

        for(let i = x; i<(x+width);i++){ // iterate the array again
            for(let j = y;j<(y+height);j++){

                if(fabric[j][i] == 'X')
                    unique = false
                       

            }  
        }
        if(unique){ res = id ; console.log(res)} 
    }
}

checkID()