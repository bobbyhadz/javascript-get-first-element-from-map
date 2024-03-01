// EXAMPLE 1 - Get the First Element of a Map in JavaScript

const map = new Map();

map.set('site', 'bobbyhadz.com');
map.set('id', 1);

const [firstKey] = map.keys();
console.log(firstKey); // 👉️ site

const [firstValue] = map.values();
console.log(firstValue); // 👉️ bobbyhadz.com

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get the First Element of a Map using spread syntax (...)

// const map = new Map();

// map.set('site', 'bobbyhadz.com');
// map.set('id', 1);

// const first = [...map][0];

// console.log(first); // 👉️ [ 'site', 'bobbyhadz.com' ]

// ------------------------------------------------------------------

// // EXAMPLE 3 - Get the First Element of a Map using `Map.entries()`

// const map = new Map();

// map.set('site', 'bobbyhadz.com');
// map.set('id', 1);

// const first = map.entries().next().value;

// // 👇️ [ 'site', 'bobbyhadz.com' ]
// console.log(first);

// console.log(first[0]); // 👉️ site

// console.log(first[1]); // 👉️ bobbyhadz
