const users = [
  {
    name: "Branko",
    email: "branko.kovacevic09@gmail.com",
    age: 25,
    phone: "062-062",
  },
  {
    name: "marko",
    email: "marko.kovacevic09@gmail.com",
    age: 24,
    phone: "062-662",
  },
  {
    name: "ivan",
    email: "ivan.kovacevic09@gmail.com",
    age: 13,
    phone: "062-999",
  },
];

const users3 = users.filter((user) => user.age < 30);
// console.log(users3);

const example = [null, undefined, 1, 2, 3, undefined, 0, "1"];
const example2 = users.filter((value) => typeof value === "number");
console.log(example2);
