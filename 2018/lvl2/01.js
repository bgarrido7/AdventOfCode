const line = require('fs').readFileSync('./input.txt').toString().split('\n');

let twice = 0
let three = 0
function checksum(){

    line.forEach( word => {
        let letter=[]
        //console.log(word)

        for(let l in word){
            letter.push(word[l])            
        }
        letter.sort()

        let i=0
        while(i<letter.length){
            if(letter[i]==letter[i+1]){
                if(letter[i]==letter[i+2])
                    i+=3
                else{
                    //console.log('contains a letter which appears exactly twice!')
                    twice++
                    break
                }
            }
            else
                i++
        }

        let j=0
        while(j<letter.length){
            if(letter[j]==letter[j+1] && letter[j]==letter[j+2]){
                //console.log('contains a letter which appears exactly 3 times!')
                three++
                break               
            }
            else
                j++
        }
    })
    console.log(twice+ ' * ' + three +' = '+ twice*three)
}

checksum()