const input = require('fs').readFileSync('input.txt').toString().split('\n');
//const input = require('fs').readFileSync('example.txt').toString().split('\n');

function getDirection(angle) {
    if (Math.cos(Math.PI / 180 * angle) === 1)
        return "east";
    else if (Math.cos(Math.PI / 180 * angle) === -1)
        return "west";
    else if (Math.sin(Math.PI / 180 * angle) === 1)
        return "north";
    else if (Math.sin(Math.PI / 180 * angle) === -1)
        return "south";
}

function doThing() {
    let angle = 0
    let direction = "east";
    let x = 0,
        y = 0;
    input.forEach(line => {
        let num = parseInt(line.slice(1));
        switch (line[0]) {
            case "N":
                y += num;
                break;
            case "S":
                y -= num;
                break;
            case "E":
                x += num;
                break;
            case "W":
                x -= num;
                break;
            case "L":
                angle += num;
                direction = getDirection(angle);
                break;
            case "R":
                angle -= num;
                direction = getDirection(angle);
                break;
            case "F":
                switch (direction) {
                    case "north":
                        y += num
                        break;
                    case "south":
                        y -= num
                        break;
                    case "west":
                        x -= num
                        break;
                    case "east":
                        x += num
                        break;
                }
                break;
        }
    });
    return (Math.abs(x) + Math.abs(y));
}
console.log(doThing())