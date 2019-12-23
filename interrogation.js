// interrogation.js

function odd(number) {
  return number % 2 === 1;
}

var count = [1, 2, 3, 4, 5];
count.some(odd);
count.every(odd);

//

function myOwnEvery(array, func) {
  for (var i = 0; i < array.length; i += 1) {
    if (!func(array[i])) {
      return false;
    }
  }

  return true;
}

function myOwnSome(array, func) {
  for (var i = 0; i < array.length; i += 1) {
    if (func(array[i])) {
      return true;
    }
  }

  return false;
}

var isAString = function (value) {
  return typeof value === 'string';
};

console.log(myOwnSome([1, 1, 1, 1, 'd'], isAString));

function areAllNumbers(array) {
  return myOwnEvery(array, isANumber);
}

var isANumber = function (value) {
  return typeof value === 'number' && !Number.isNaN(value);
};

console.log(areAllNumbers([1, 'b', 3, 4, 5]));