const input = require('fs').readFileSync('input.txt').toString().split('\n');
//const input = require('fs').readFileSync('example.txt').toString().split('\n');

function seatPassagers(planeState) {
    let plane = planeState.slice(0);
    plane.forEach((line, i) => {
        let tmp = [];
        let adjacents;
        line.split('').forEach((position, index) => {
            switch (position) {
                case "L":
                    adjacents = [];
                    i > 0 ?
                        adjacents.push(planeState[Math.max(0, i - 1)].slice(Math.max(0, (index - 1)), Math.min((line.length), (index + 2)))) : null;
                    //lados
                    index > 0 ? adjacents.push(line[Math.max(0, index - 1)]) : null;
                    index < (line.length - 1) ? adjacents.push(line[Math.min(planeState.length - 1, index + 1)]) : null;
                    //baixo
                    i < (planeState.length - 1) ?
                        adjacents.push(planeState[Math.min(planeState.length - 1, i + 1)].slice(Math.max(0, (index - 1)), Math.min((line.length), (index + 2)))) : null;
                    if (adjacents.join('').toString().match(/#/gi) === null)
                        tmp.push("#");
                    else
                        tmp.push("L")
                    break;
                case "#":
                    adjacents = [];
                    //cima
                    i > 0 ?
                        adjacents.push(planeState[Math.max(0, i - 1)].slice(Math.max(0, (index - 1)), Math.min((line.length), (index + 2)))) : null;
                    //lados
                    index > 0 ? adjacents.push(line[Math.max(0, index - 1)]) : null;
                    index < (line.length - 1) ? adjacents.push(line[Math.min(planeState.length - 1, index + 1)]) : null;
                    //baixo
                    i < (planeState.length - 1) ?
                        adjacents.push(planeState[Math.min(planeState.length - 1, i + 1)].slice(Math.max(0, (index - 1)), Math.min((line.length), (index + 2)))) : null;
                    //console.log(i, index, adjacents);
                    if (adjacents.join('').toString().match(/#/gi) !== null)
                        (adjacents.join('').toString().match(/#/gi).length) >= 4 ? tmp.push("L") :
                        tmp.push("#");
                    else
                        tmp.push("#");

                    break;
                case ".":
                    tmp.push(".");
                    break;
                default:
                    break;
            }
        });
        plane[i] = tmp.join('')
    });
    return plane
}

function doThing() {
    let count = 0,
        prevCount = 0;
    let plane = seatPassagers(input);
    plane.forEach(elem => {
        elem.match(/#/gi) !== null ?
            count += elem.match(/#/gi).length :
            null;
    });
    do {
        plane = seatPassagers(plane);
        //  console.log("")
        //  console.log(plane);
        prevCount = count, count = 0;

        plane.forEach(elem => {
            elem.match(/#/gi) !== null ?
                count += elem.match(/#/gi).length :
                null;
        });
        // console.log(prevCount, count)

    } while (prevCount !== count);
    return count
}

console.log(doThing())