class Animal {
  constructor(name, age) {
    this.vardas = name;
    this.amzius = age;
  }

  getAge() {
    return this.amzius;
  }

  setAge(newAge) {
    this.amzius = newAge;
  }

  incrementAge() {
    this.amzius += 1;
  }
}

const myAnimal = new Animal("kate", 2);
console.log(myAnimal.getAge()); // 2

myAnimal.incrementAge();
console.log(myAnimal.getAge()); // 3
