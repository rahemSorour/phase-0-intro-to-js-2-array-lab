let cats=["Milo", "Otis", "Garfield"];

// appends a cat to the end of the cats array
function destructivelyAppendCat(name) {
    cats.push(name);
    return cats
  }

// prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats
  }
// removes the last cat from the cats array
function destructivelyRemoveLastCat() {
    cats.pop();
    return cats
  }
// removes the first cat from the cats array
function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats
  }
// appends a cat to the cats array and returns a new array
function appendCat(name) {
    return [...cats, name];
  }
//  prepends a cat to the cats array and returns a new array 
function prependCat(name) {
    return [name, ...cats];
  }
// removes the last cat in the cats array and returns a new array
function removeLastCat() {
    return cats.slice(0, -1);
  }
// removes the first cat from the cats array and returns a new array
function removeFirstCat() {
    return cats.slice(1);
  }
  

// test results:
console.log(destructivelyAppendCat('Ralph'))
cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

console.log(destructivelyPrependCat("Bob"))
cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

console.log(destructivelyRemoveLastCat())
cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

console.log(destructivelyRemoveFirstCat())
cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

console.log(appendCat("Broom"))
cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

console.log(prependCat("Arnold"))
cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

console.log(removeLastCat())
cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

console.log(removeFirstCat()) 
cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

