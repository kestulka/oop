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

export default Animal