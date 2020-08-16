 const input = require('fs').readFileSync('./example.txt').toString().split('\n');
//const line = require('fs').readFileSync('./input.txt').toString().split('\n');

//thank you stack overflow
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

function checkID(){

    const guards = []
    let id = -1
    let max = 0

    let id_res, min

    input.forEach( line => {//temos de dar 2 voltas para o input grande
       
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
                            guards[index].sleep_min.push(parseInt(i))//.toString().slice(-1))) //=  guards[index].sleep_min.concat()
                        }
                }
                else {
                    guards.push({guard_id: id, sleep_min: [], asleep_count:wake-sleep})
                    for( let i = sleep ; i < wake ; i++)
                        guards[guards.indexOf(guards.find(x=>x.guard_id==id))].sleep_min.push(parseInt(i))//.toString().slice(-1))) 
                }    
        }

 })

 


 //ir buscar o id do guarda que tem o alseep_count maior
   //    console.log("--------\nguard array->",guards, "\n\n")


    guards.forEach(elem => {
        if (max < elem.asleep_count){
            max = elem.asleep_count
            id_res = parseInt(elem.guard_id)
        }
    })

    let arr = guards[guards.indexOf(guards.find(x=>x.guard_id==id_res))].sleep_min

    min = findCommon(arr)

   console.log(id_res + " * " + min + " = " + (id_res)*(min))

}

checkID()