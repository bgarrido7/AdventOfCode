// const input = require('fs').readFileSync('./example.txt').toString().split('\n');
const input = require('fs').readFileSync('./input.txt').toString().split('\n');

//retrieved from stack overflow
function findCommon(array)
{
    if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}


let temp = [], sorted_input

if( input[0].search('#') < 0 ){ //if input doesn't start with the guard id
    let i = 0

    while(true){        
        if(input[0].search('#') > -1)
            break
        temp.push(input[0])        
        input.shift()
    }
    sorted_input = input.concat(temp)
}
//console.log(sorted_input)

function checkID(){

    const guards = []
    let id = -1
    let max = 0

    let id_res, min

    sorted_input.forEach( line => {
       
        switch(line.split(' ')[2]){

            case 'Guard':
                id = line.split('#')[1].split(' ')[0]   

            case 'falls':
                sleep = parseInt( line.split(':')[1].split(']'))  

            case 'wakes':
                wake = parseInt( line.split(':')[1].split(']') )

                let index = guards.indexOf(guards.find(x=>x.guard_id==id)) //get the guards that had this id

                if( index > -1){ //ja existe index
                        guards[index].asleep_count +=  wake - sleep
                        for( let i = sleep ; i < wake ; i++){
                            guards[index].sleep_min.push(parseInt(i))
                        }
                }
                else {
                    guards.push({guard_id: id, sleep_min: [], asleep_count:wake-sleep})
                    for( let i = sleep ; i < wake ; i++)
                        guards[guards.indexOf(guards.find(x=>x.guard_id==id))].sleep_min.push(parseInt(i))
                }    
        }

 })
    guards.forEach(elem => {
        if (max < elem.asleep_count){
            max = elem.asleep_count
            id_res = parseInt(elem.guard_id)
        }
    })

    let arr = guards[guards.indexOf(guards.find(x=>x.guard_id==id_res))].sleep_min

    min = findCommon(arr)
    
    //tem de ser id=3299 min=46
    console.log(id_res + " * " + min + " = " + (id_res)*(min))

}

checkID()