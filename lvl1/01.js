/*
fs = require('fs')
fs.readFile('./input.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data); //imprime o file todo
});
*/



//-------------isto sao cenas do node---------------
var freq = 0
var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('input.txt')
  });
  
//-------------ler linha a linha---------------
  lineReader.on('line', function (line) {
    freq += parseInt(line)
    console.log(freq) //soluçao é o ultimo print desde log
  });


//-------------------------------------------------

console.log(freq) //nao faço ideia pqq esta variabel nao é a mesma que está dentro da funçao >:(
