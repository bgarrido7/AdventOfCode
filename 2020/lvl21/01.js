//const list = require('fs').readFileSync('input.txt').toString().split('\n');
const list = require('fs').readFileSync('example.txt').toString().split('\n');

function doThing() {

    let ingredients = new Array();
    let allergens = new Array();
    let contains = new Map();
    let sum = 0;
    list.forEach(foods => {
        ingredients.push(foods.split(" (")[0].split(" "));
        allergens.push(foods.slice(0, -1).split("contains ")[1].split(", "))
    });

    ingredients.forEach((ingre, index) => {
        ingredients.forEach((ing, i) => {
            if (index !== i) {
                let filterIngre = ingre.filter(v => ing.includes(v));
                let filterAller = allergens[index].filter(v => allergens[i].includes(v));
                if (filterAller.length > 0)
                    filterIngre.forEach(f => { contains.has(f) ? null : contains.set(f, filterAller); });
            }
        });
    });
    console.log(ingredients, allergens)

    ingredients.forEach((ingre, i) => {
        contains.forEach((contain, index) => {
            if (ingre.includes(index)) {
                ingre.splice(ingre.indexOf(index), 1);
            }
        });
    });

    console.log()
    console.log(ingredients, allergens)
    console.log("hey3")
    console.log(contains)

    //isto limpa tudo no input grande :(
    allergens.forEach((allerg, i) => {
        contains.forEach(contain => {
            if (allerg.includes(contain[0])) {
                allerg.splice(allerg.indexOf(contain[0]), 1);
            }
        });
    });

    console.log()
    console.log(ingredients, allergens)
    console.log("hey2")

    allergens.forEach((allerg, i) => {
        if (allerg.length > 0) {
            contains.set(ingredients[i][0], allerg[0]);
        }
    });

    ingredients.forEach((ingre, i) => {
        contains.forEach((contain, index) => {
            if (ingre.includes(index)) {
                ingre.splice(ingre.indexOf(index), 1);
            }
        });
    });

    console.log()
    console.log("hey")
    console.log(ingredients, allergens)

    ingredients.forEach(ingre => {
        sum += ingre.length;
    })

    return sum;
}

console.log(doThing())