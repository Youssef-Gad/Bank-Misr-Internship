const array = [
  8,
  "55",
  [2, "Hello World", { a: 2, b: 5 }, false],
  {
    arr: [true, 1, NaN, new Array(2, 33)],
    test: null,
    obj: { d: "Moha", last: [2, false, undefined] },
  },
];

// Solution First Problem
const [
  ,
  ,
  ,
  {
    arr: [, , , [, a]],
    test,
    obj: { d: b },
  },
] = array;
console.log(a, b);

///////////////////////////////////////////////////////////////////////////
const array2 = [
  2,
  4,
  [22, "test"],
  false,
  null,
  { a: 2 },
  [22, "test"],
  "null",
];

// Solution Second Problem
let set = new Set();
let duplicates = [];
for (let item of array2) {
  let key = Array.isArray(item) ? JSON.stringify(item) : item;
  if (set.has(key)) duplicates.push(JSON.parse(key));
  else set.add(key);
}
console.log(duplicates);
