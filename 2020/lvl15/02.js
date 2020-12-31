const numbers = [2, 20, 0, 4, 1, 17];

function findLastNum(myNums, n) {
    let i = myNums.length - 2;
    while (i >= 0) {
        if (myNums[i] === n)
            return i;
        i--;
    }
    return null
}

function doThing(nums) {
    let numIndex = new Map();

    nums.forEach((n, i) => {
        numIndex.set(n, i + 1);
    });
    let n = nums[nums.length - 1];
    //numIndex.delete(n);
    console.log("map: ", numIndex)
    let prevN = numIndex.get(0);

    for (let i = nums.length + 1; i <= 10; i++) { //30000000
        console.log("\ni:", i, "\tn:", n);
        console.log(prevN, numIndex.has(n), numIndex.get(n), i - 1, numIndex.get(n) !== i - 1)

        if (numIndex.has(n) && numIndex.get(n) !== i - 1) {
            console.log("has", n)
            n = i - numIndex.get(prevN);
        } else {
            console.log(undefined)
            n = 0;
        }
        numIndex.set(n, i);
        console.log("map: ", numIndex)
    }
}

let testArray = [
    [0, 3, 6],
    // [1, 3, 2],
    // [2, 1, 3],
    // [1, 2, 3],
    // [2, 3, 1],
    // [3, 2, 1],
    // [3, 1, 2],
];

testArray.forEach(t => {
    console.log(doThing(t));
    console.log();;
});

//console.log("\n" + doThing(numbers));
//console.log("\n" + doThing(numbers));