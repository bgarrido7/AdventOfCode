let input = require('fs').readFileSync('./example.txt').toString()
//let input = require('fs').readFileSync('./input.txt').toString()

function checkCase(ch) {
    if (!isNaN(ch * 1)){
       return null;
    }
     else {
       if (ch == ch.toUpperCase()) {
          return 1; //upper case
       }
       if (ch == ch.toLowerCase()){
          return 0; //lower case
       }
    }
 }

function removeLetters(input){

    let line = input

    
console.log(typeof line, line.lenght)

    for(let char=0 ; char<line.lenght; char++){

        console.log(char)

        if(checkCase(line[char])){//is upper case

            if(checkCase(line[char+1])==0 && line[char+1].toUpperCase()===line[char])//next is lower AND the same
                input = line[char].slice(char,2)

    
        }
        if(checkCase(line[char])==0){//is lower case

            if(checkCase(line[char+1]) && line[char+1].toLowerCase()===line[char])//next is upper AND the same
                input = line[char].slice(char,2)


        }
        else
            console.log('error')
    }
   
    return input

}

function checkLetters(){

}

//while(checkLetters(input)){
  //  removeLetters(input)
//}


    // Taking some strings 
    var x = 'geeksforgeeks'; 
    var y = 'gfg'; 
    var z = ''; 
  
    // Returning the length of the string. 
    console.log(x.length + "<br>"); 
    document.write(y.length + "<br>"); 
    document.write(z.length); 
console.log(removeLetters(input))