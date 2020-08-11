//const line = require('fs').readFileSync('./example2.txt').toString().split('\n');
const line = require('fs').readFileSync('./input.txt').toString().split('\n');

function checkOddLetter(value1, value2) {//returns true if exactly 1 letter is out, false otherwise
    let j=0
    let countOdds = 0
   
    while(j<Object.keys(value1).length){ //tive de fazer esta marosca pq os values eram Objects
        if(value1[j]!=value2[j]){
            countOdds++
        }  
        j++
    }

    if(countOdds==1)
        return true
    else 
        return false
}


function checkID(){
    let i=0
    let compare = []
    let lenght = 0
    let res = []

    line.forEach( word => {
        let letter=[]
        for(let l in word){
            letter.push(word[l])         
        }
        compare.push(letter)
        
        lenght++
    })

    while(i<lenght){
        value = compare[i]
        i++
        
        compare.forEach((elem)=>{

            if(checkOddLetter(elem,value)){//found it!
                for(let l in elem){
                    if(elem[l]== value[l])
                        res.push(elem[l])
                }

                console.log( res.toString().replace(/,/g, '') )
                process.exit()
            }  
        })
    }
}
checkID()