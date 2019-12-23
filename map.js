// map.js

var count = [1, 2, 3, 4, 5];
var doubled = count.map(function (number, index, array) {
  return number * 2;
});

console.log(doubled);

//

function myMap(array, func) {
  var output = [];

  array.forEach(function (item) {
    output.push(func(item));
  });

  return output;
}

var plusOne = function (n) { return n + 1; };

console.log(myMap([1, 2, 3, 4], plusOne));

//

function getBooksTitle(books) {
  return myMap(books, getTitle);
}

var books = [
  {
    title: 'JavaScript and JQuery: Interactive Front-End Web Development',
    author: 'Jon Ducket',
    edition: '1st',
  },
  {
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Haverbeke',
    edition: '2nd',
  },
  {
    title: "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics",
    author: 'Jennifer Niederst Robbins',
    edition: '4th',
  },
];

var getTitle = function (book) {
  return book['title'];
};

console.log(getBooksTitle(books));
// console output
[
  "JavaScript and JQuery: Interactive Front-End Web Development",
  "Eloquent JavaScript: A Modern Introduction to Programming",
  "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics"
]