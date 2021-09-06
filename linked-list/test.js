class Person {
  constructor(personObj) {
    this.person = personObj;
  }
}

const person1 = new Person({ name: "Mario", age: 24 });

const person2Obj = person1.person;

person1.person = { name: "Edwin", age: 25 };

console.dir(person2Obj);
console.dir(person1.person);
