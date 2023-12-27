const users = [
  {
    name: "Branko",
    email: "branko.kovacevic09@gmail.com",
    age: 25,
    phone: "062-062",
    cash: 2000,
  },
  {
    name: "marko",
    email: "marko.kovacevic09@gmail.com",
    age: 24,
    phone: "062-662",
    cash: 1000,
  },
  {
    name: "ivan",
    email: "ivan.kovacevic09@gmail.com",
    age: 13,
    phone: "062-999",
    cash: 30000,
  },
];

const ages = users.filter((user) => user.age > 30).map((user) => user.age);
// console.log(ages);

const sortedAges = ages.sort((currentAge, prevAge) => currentAge - prevAge);
// console.log(sortedAges);

const a = [1, 2, 3, 4];
const b = [5, 6, 7, 8];
const sum = a.concat(b);
// console.log(sum);

const c = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
];
const d = c.flat();

const isAllOlder = users.every((user) => user.age > 21);
// console.log(isAllOlder);

const totalCash = users.reduce(
  (accumulator, user) => accumulator + user.cash,
  0
);
// console.log(totalCash);

const average =
  users.reduce((accumulator, user) => accumulator + user.cash, 0) /
  users.length;
// console.log(average);

const arr = [1, 2, 3];
// console.log(arr.includes(1));

// console.log(arr.reverse());
