const line = require('fs').readFileSync('example.txt').toString().split('\n');
//const line = require('fs').readFileSync('input.txt').toString().split('\n');

function fullyContain() {
    let sum = 0;
    line.forEach((pair) => {
       
      let  range1 = new Array()
      let  range2 = new Array()

      for(let i=pair[0];i<parseInt(pair[2])+1; i++){
        range1.push(parseInt(i))
      }
      for(let i=pair[4];i<parseInt(pair[6])+1; i++){
        range2.push(parseInt(i))
      }

      console.log(range1, range2)
        if (sectionContains(pair[0], pair[2], pair[4], pair[6])) {
            // console.log(pair)
            sum++;
        }
        if (sectionContains(pair[4], pair[6], pair[0], pair[2])) {
            sum++;
        }
    })
    return sum
}

function sectionContains(alo, ahi, bhi, blo) {
    return alo <= blo && bhi <= ahi;
}

console.log('Answer: ' + fullyContain())