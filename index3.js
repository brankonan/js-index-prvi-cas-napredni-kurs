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

const user = users.find((user) => user.age === 24);
console.log(user);
