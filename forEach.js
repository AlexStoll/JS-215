// forEach.js
function myForEach(array, func) {
  for (var i = 0; i < array.length; i += 1) {
    func(array[i], i, array);
  }
}

var min = Infinity;
var getMin = function (value) {
  min = value <= min ? value : min;
};

myForEach([4, 5, 12, 23, 3], getMin);
// console.log(min);

// Example 2
var min = Infinity;
var max = -Infinity;

var getMinMax = function (value, idx, arr) {
  if (value >= max) {
    max = value;
  } 
  if (value <= min) {
    min = value;
  }
  console.log(value, idx, arr)
};

[4, 5, 12, 23, 3].forEach(getMinMax);
console.log(min, max);