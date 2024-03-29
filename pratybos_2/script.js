// 2.
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

// 3.

class Dog extends Animal {
  constructor(name, age, coatColor, legCount) {
    super(name, age);
    this.kailioSpalva = coatColor;
    this.kojuKiekis = legCount;
  }
  getDogInfo() {
    console.log(
      `your dog name is ${this.vardas}, his age is ${this.amzius}, jo kailis yra ${this.kailioSpalva} spalvos, jis turi ${this.kojuKiekis} kojas`,
    );
  }
}

const suo = new Dog("sargis", "6", "juodos", "8");

suo.getDogInfo();

// 4.

class Skaiciuokle {
  constructor(number) {
    this.number = number;
  }

  displayNumber() {
    console.log(`the number is: ${this.number}`);
  }

  multiplyByFive() {
    console.log(`multiplying the number ${this.number} by 5...`);
    this.number *= 5;
  }
}

const someObject = new Skaiciuokle(2);

someObject.displayNumber();

someObject.multiplyByFive();

someObject.displayNumber();
