const data = {
  random: "17",
  "random float": "25.72",
  bool: "true",
  date: "1990-06-20",
  regEx:
    "hellooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo to you",
  enum: "generator",
  firstname: "Sara-Ann",
  lastname: "Adamsen",
  city: "Kinshasa",
  country: "Virgin Islands, U.S.",
  countryCode: "GL",
  "email uses current data": "Sara-Ann.Adamsen@gmail.com",
  "email from expression": "Sara-Ann.Adamsen@yopmail.com",
  array: ["Annice", "Vanessa", "Abbie", "Nananne", "Ivett"],
  "array of objects": [
    {
      index: "0",
      "index start at 5": "5",
    },
    {
      index: "1",
      "index start at 5": "6",
    },
    {
      index: "2",
      "index start at 5": "7",
    },
  ],
  Carmela: {
    age: "91",
  },

  addUser: function (name) {
    this[name] = {
      age: Math.floor(Math.random() * 100) + 1,
    };
  },
};

const keys = Object.keys(data["array of objects"][0]);
console.log(keys);
