//const rules = require('fs').readFileSync('input.txt').toString().split('\n');
const rules = require('fs').readFileSync('example.txt').toString().split('\n');

function doThing() {
    let count = 0;
    familyTree = new Map();
    rules.forEach(r => {
        let cleanRules = r.replace(/bags|bag|no other|(\d)/gi, '').replace(" ,", ",").replace("contain", ",").replace(/\s\s+/g, '').slice(0, -2);
        let group = cleanRules.split(","); //group of bags
        let firstBag = group.shift()
        for (let bag of group) {
            familyTree.has(firstBag) ?
                familyTree.set(firstBag, [familyTree.get(firstBag), bag]) :
                familyTree.set(firstBag, bag);
        }
    });
    console.log(familyTree)
    let parentsWithGold = [];
    familyTree.forEach((value, key, map) => {
        if (value.indexOf('shiny gold') > -1) {
            parentsWithGold.push(key)
            count++;
        }
    });
    console.log(parentsWithGold);

    return count
}
console.log(doThing());