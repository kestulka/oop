// 2.
import Animal from "./module.js";

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
  
  const suo = new Dog("sargis", 6, "juodos", 8);
  
  suo.getDogInfo();
  suo.incrementAge(); // galima kviesti is tevines
  console.log(suo)

  // 4.





