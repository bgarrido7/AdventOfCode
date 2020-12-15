const numbers = [2, 20, 0, 4, 1, 17];
//const numbers = [3, 1, 2];

function doThing() {
    let myNums = numbers.slice(0);
    for (let i = numbers.length + 1; i < 2018 + numbers.length; i++) {

        let n = myNums[myNums.length - 1];

        if (myNums.indexOf(n) == myNums.length - 1)
            myNums.push(0);
        else {
            let tmpNum = myNums.slice(0, -1).lastIndexOf(n) + 1;
            //console.log(myNums.lastIndexOf(n) + 1, tmpNum)
            n = myNums.lastIndexOf(n) + 1 - tmpNum;
            myNums.push(n);
        }
    }
    console.log(myNums.slice(-3))
    return myNums[myNums.length - 1];
}


console.log(doThing())