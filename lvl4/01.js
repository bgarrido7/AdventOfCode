 const input = require('fs').readFileSync('./example.txt').toString().split('\n');
//const line = require('fs').readFileSync('./input.txt').toString().split('\n');

function checkID(){

    const guards = []
    let sleepMin = [], wakeMin =[]
    let id = -1

    input.forEach( line => {//temos de dar 2 voltas para o input grande
        
    let sleep, wake

    switch(line.split(' ')[2]){
    
        case 'Guard':
            id = line.split('#')[1].split(' ')[0]    
    
        case 'falls':
            sleep = parseInt( line.split(':')[1].split(']')[0] )
    
    
        case 'wakes':
            wake = parseInt( line.split(':')[1].split(']')[0] )

            let index = guards.indexOf(guards.find(x=>x.guard_id==id)) //get the guards that had this id

            if( index > -1){ //ja existe index
                if(wake!= undefined && sleep != undefined)
                    guards[index].asleep_count +=  wake - sleep
                    if(sleep!=undefined)
                        guards[index].sleep_min.push(sleep) //=  guards[index].sleep_min.concat()
            }
            else {
                guards.push({guard_id: id, sleep_min: [sleep], asleep_count: (wake-sleep)})
            }

    //chama aqui uma funçao para atualizar array guards e manda parametros de id e tempo que capturou nos 2 casos anteriores e neste
    
    }
    console.log(guards)
 
/*
        if( line.search('#') > -1){

            if(firstGuard){

                let index = guards.indexOf(guards.find(x=>x.guard_id==id)) //get the guards that had this id
                        if( index > -1){
                                guards[index].asleep_count +=  wakeMin - sleepMin
                            
                                guards[index].sleep_min = guards[index].sleep_min.concat(sleepMin)
                            
                        }
            }

            firstGuard = true

            if(id != line.split('#')[1].split(' ')[0]){
                sleepMin = []
                wakeMin = []
            }
            id = line.split('#')[1].split(' ')[0]

            if( guards.find(x => x.guard_id == id) == undefined ) //this id hasn't been saved yet
                guards.push({guard_id: id, sleep_min:[], asleep_count:0})

        }
       
        if( line.search('asleep') > -1){
            sleepMin.push( parseInt( line.split(':')[1].split(']')[0] ) )
        }  
        if( line.search('wakes') > -1){
            wakeMin.push( parseInt( line.split(':')[1].split(']')[0] ) )
        }
   // console.log("id->" ,id , "wake-> ", wakeMin, " sleep-> ",sleepMin)
  */  


 })

       console.log("--------\nguard array->",guards, "\n\n")



//   console.log(id + " * " + min + " = " + (parseInt(id)*parseInt(min)))

}

checkID()