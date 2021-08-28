var person = {
  name: "Max",
  "last-name": "Payne",
  age: 27,
  details: {
    hobbies: ["Sports", "Cooking"],
    location: "Germany",
  },
  greet: function () {
    console.log("Confused");
  }
};

/*console.log(person.name);
console.log(person.age);
console.log(person["name"]) 
console.log(person.details.hobbies);*/
person.greet();

console.log(typeof person);
console.log(typeof person.name);
console.log(typeof person["last-name"])
console.log(person["last-name"])