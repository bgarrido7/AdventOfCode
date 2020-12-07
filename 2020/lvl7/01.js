//const rules = require('fs').readFileSync('input.txt').toString().split('\n');
const rules = require('fs').readFileSync('example.txt').toString().split('\n');

function doThing() {
    let bags = 0;
    familyTree = new Map();
    rules.forEach(r => {
        let cleanRules = r.replace(/bags|bag|no other|(\d)/gi, '').replace(" ,", ",").replace("contain", ",").replace(/\s\s+/g, '').slice(0, -2);
        let group = cleanRules.split(","); //group of children bags
        let firstBag = group.shift()
        for (let bag of group) {
            familyTree.has(firstBag) ?
                familyTree.set(firstBag, [familyTree.get(firstBag), bag]) :
                familyTree.set(firstBag, bag);
        }

    });
    console.log(familyTree);
    return bags
}
console.log(doThing());