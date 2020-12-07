const rules = require('fs').readFileSync('input.txt').toString().split('\n');
//const rules = require('fs').readFileSync('example.txt').toString().split('\n');

function findParents(parentsWithGold) {
    let newParents = [];
    parentsWithGold.forEach(c => {
        familyTree.forEach((value, key, map) => {
            if (value.indexOf(c) > -1) {
                !(newParents.includes(key)) ? newParents.push(key): null;
            }
        });
    });
    return newParents;
}

function doThing() {
    familyTree = new Map();
    rules.forEach(r => {
        let cleanRules = r.replace(/bags|bag|no other|(\d)/gi, '').replace(" ,", ",").replace("contain", ",").replace(/\s\s+/g, '').slice(0, -2);
        let group = cleanRules.split(","); //group of bags
        let firstBag = group.shift()
        for (let bag of group) {
            if (familyTree.has(firstBag)) {
                (typeof(familyTree.get(firstBag)) == 'string') ?
                (familyTree.set(firstBag, [familyTree.get(firstBag), bag])) :
                (familyTree.set(firstBag, [...familyTree.get(firstBag), bag]))
            } else {
                familyTree.set(firstBag, bag);
            }
        }
    });
    console.log(familyTree);
    let finalParents = [];
    let findThisColor = ['shiny gold'];
    let nextParent;
    while (true) {
        nextParent = findParents(findThisColor);
        if (nextParent == "")
            break;
        finalParents.push(nextParent);
        findThisColor = nextParent;
    }

    //equivalente a um flatmap mas para objects
    let result = Object.keys(finalParents).reduce(function(r, k) {
        return r.concat(finalParents[k]);
    }, []);
    console.log(result);
    return result.length;
}
console.log(doThing());