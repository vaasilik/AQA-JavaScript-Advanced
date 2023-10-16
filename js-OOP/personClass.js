// TASK 5
// У цьому прикладі реалізовані лише методи addPerson та listPeople
class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  }
  
  class PeopleRegistry {
    constructor() {
      this.people = [];
    }
  
    addPerson(person) {
      this.people.push(person);
    }
  
    listPeople() {
      this.people.forEach(person => {
        console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`);
      });
    }
  }
  
  const person1 = new Person("Max", "Ivanov", 30);
  const person2 = new Person("Maria", "Petrova", 25);
  
  const registry = new PeopleRegistry();
  
  registry.addPerson(person1);
  registry.addPerson(person2);
  
  console.log("People in the registry:");
  registry.listPeople();
  