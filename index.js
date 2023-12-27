const user = [
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

const users2 = user.forEach((user) => console.log(user.age));

for(let i = 0; i<users2.length; i++){
    
}

for(const user of users2){
    console.log(user.age);
}