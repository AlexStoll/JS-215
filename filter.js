// filter.js
var count = [1, 2, 3, 4, 5];
var filtered = count.filter(function (number) { // index and array are optional parameters here
  return number % 2 === 0;
});

console.log(filtered);

function myFilter(array, func) {
  var output = [];

  array.forEach(function (value) {
    if (func(value)) {
      output.push(value);
    }
  });
  return output;
}

var isPythagoreanTriple = function (triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};


console.log(myFilter([{ a: 3, b: 4, c: 5 },
          { a: 5, b: 12, c: 13 },
          { a: 1, b: 2, c: 3 },], isPythagoreanTriple));

//

function multiplesOfThreeOrFive(values) {
  return values.filter(isMultipleOfThreeOrFive);
}

var isMultipleOfThreeOrFive = function (value) {
  return value % 3 === 0 || value % 5 === 0;
}

console.log(multiplesOfThreeOrFive([1, 3, 5, 7, 11, 18, 16, 15]));  // [ 3, 5, 18, 15 ]
