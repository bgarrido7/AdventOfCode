 const input = require('fs').readFileSync('./example.txt').toString().split('\n');
//const line = require('fs').readFileSync('./input.txt').toString().split('\n');

function checkID(){

    const guards = []
    let id = -1
    let max = 0

    let id_res, min

    input.forEach( line => {//temos de dar 2 voltas para o input grande
       
        let test_line =  line.split(' ')[2]

        //switch(line.split(' ')[2]){
      //  case 'Guard':
      if(test_line == 'Guard')
            id = line.split('#')[1].split(' ')[0]    
       //     console.log(id)
    
        else if (test_line == 'falls')
      //  case 'falls':
            sleep = parseInt( line.split(':')[1].split(']'))   
//        case 'wakes':
        else if(test_line == 'wakes'){
            wake = parseInt( line.split(':')[1].split(']') )

            let index = guards.indexOf(guards.find(x=>x.guard_id==id)) //get the guards that had this id

            if( index > -1){ //ja existe index
                    guards[index].asleep_count +=  wake - sleep
                    for( let i = sleep ; i < wake ; i++){
                        guards[index].sleep_min.push(parseInt(i.toString().slice(-1))) //=  guards[index].sleep_min.concat()
                    }
            }
            else {
                guards.push({guard_id: id, sleep_min: [], asleep_count:wake-sleep})
                for( let i = sleep ; i < wake ; i++)
                    guards[guards.indexOf(guards.find(x=>x.guard_id==id))].sleep_min.push(parseInt(i.toString().slice(-1))) 
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

let array = guards[guards.indexOf(guards.find(x=>x.guard_id==id_res))].sleep_min
min = findCommon(array)

function findCommon(arr) {
    var max = 1,
        m = [],
        val = arr[0],
        i, x;

    for(i = 0; i < arr.length; i ++) {
        x = arr[i]
        if (m[x]) {
            ++m[x] > max && (max = m[i], val = x);
        } else {
            m[x] = 1;
        }
    } return val;    
}

   console.log(id_res + " * " + min + " = " + (id_res)*(min))

}

checkID()