class Person {
 constructor(name) {
   this.name = name;
 }

 get sex() {
   return 'male';
 }
}

Person.count = 1;

class Student extends Person {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}

let person1 = new Person('Mark');

let student1 = new Student('Down', 27);

console.log(person1);

console.log(student1);

console.log(Person.count);

