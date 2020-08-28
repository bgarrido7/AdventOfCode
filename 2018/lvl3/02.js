//const line = require('fs').readFileSync('./example.txt').toString().split('\n');
const line = require('fs').readFileSync('./input.txt').toString().split('\n');


function updateFabric(input, fabric, status){
    let res = 0

    for (let i in input){

        let id = (input[i].split('#')[1].split(' ')[0])

        let pos = input[i].split('@')[1].split(':')[0]
        let size = input[i].split('@')[1].split(':')[1]

        let x = parseInt(pos.split(',')[0])
        let y = parseInt(pos.split(',')[1])

        let width = parseInt(size.split('x')[0])
        let height = parseInt(size.split('x')[1])

        let unique = true

        for(let i = x; i<(x+width);i++){
            for(let j = y;j<(y+height);j++){

                switch(status){
                    case 0: // fill in the array according to the input given
                        
                        if(fabric[j][i] == '.'){ fabric[j][i] = id }
                        else { fabric[j][i] = 'X' }
                                    
                    case 1: // iterate the array again, check for overlapping id's

                        if(fabric[j][i] == 'X') { unique = false }
                                   
                            
                }
            }   
        }

        if(unique){ res = id } 
    }
    

    if(status)
        return res 
    else 
        return fabric 
    
}


function checkID(){

    let fabric = [];
    for (var i = 0; i < 1000; i++) {//fill in the multidimention array
        fabric[i] = [];
        for (var j = 0; j < 1000; j++) {
            fabric[i][j] = ".";
        }
    }

    let upadtedFarbic = updateFabric(line, fabric, 0)
    let awnser =  updateFabric(line, upadtedFarbic, 1)

    console.log(awnser)
}

checkID()