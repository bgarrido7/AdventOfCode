const { POINT_CONVERSION_UNCOMPRESSED } = require('constants');

//const list = require('fs').readFileSync('input.txt').toString().split('\n');
const list = require('fs').readFileSync('example.txt').toString().split('\n');

function getInvalid(input, preambleLength) {
    for (let i = 0; i < ((input.length) - preambleLength); i++) {
        let preamble = input.slice(i, preambleLength + i);
        let valid = false;
        preamble.forEach(p1 => {
            preamble.forEach(p2 => {
                if ((parseInt(p1) + parseInt(p2) === parseInt(list[preambleLength + i])) &&
                    (parseInt(p1) !== parseInt(p2)))
                    valid = true;
            });
        });
        if (!valid)
            return (input[preambleLength + i]);
    }
}

function getSum(array, times, sumResult) {
    // Algorithm from https://www.geeksforgeeks.org/find-a-triplet-that-sum-to-a-given-value/
    /**
    * Sort the given array.
    * Loop over the array and fix the first element of the possible triplet, arr[i].
    * Then fix two pointers, one at i + 1 and the other at n – 1. And look at the sum, 
        If the sum is smaller than the required sum, increment the first pointer.
        Else, If the sum is bigger, Decrease the end pointer to reduce the sum.
        Else, if the sum of elements at two-pointer is equal to given sum then print the triplet and break.
    */
    array = array.sort(function(a, b) {
        return a - b;
    });
    console.log("\n", sumResult);
    let r = array.length - 1,
        i = 0;
    while ((i + 1) < r) {
        let line = array.slice(i, times + i);
        console.log(line, array[r], line.reduce(((a, b) => parseInt(a) + parseInt(b)), parseInt(array[r])));

        //console.log(line.reduce(((a, b) => a + b), array[r]), sumResult)
        if (line.reduce(((a, b) => parseInt(a) + parseInt(b)), parseInt(array[r])) == sumResult) {
            console.log("\n\nHERE!!!\n\n")
            let res = line.concat(array[r])
            return [true, res];
        } else if (line.reduce(((a, b) => parseInt(a) + parseInt(b)), parseInt(array[r])) < sumResult)
            i++;
        else if (line.reduce(((a, b) => parseInt(a) + parseInt(b)), parseInt(array[r])) > sumResult) {
            r--;
        }
    }

    return [false, 0];
}

function doThing() {
    let preambleLength = 5; //switch to 25 for the input.txt input
    let weakness = [];
    let invalidNr = getInvalid(list, preambleLength);

    for (let i = 2; i < (list.length / 2); i++) {

        console.log(array = list.sort(function(a, b) {
            return a - b;
        }))
        let result = (getSum(list, i, parseInt(invalidNr)));
        if (result[0]) {
            weakness = result[1];
            return (Math.max.apply(null, weakness) + Math.min.apply(null, weakness));
        }
    }
}

console.log(doThing())