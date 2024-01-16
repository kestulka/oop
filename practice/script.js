// Agregacija

class Automobilis {
  constructor(variklis) {
    this.variklis = variklis;
  }
}

class Variklis {
  start() {
    console.log("variklis dirba");
  }
}

const variklisObject = new Variklis();
const automobilisObject = new Automobilis(variklisObject);

automobilisObject.variklis.start(); // output: variklis dirba

// ----------

class Klase {
  // statinis metodas
  static statinisMetodas() {
    console.log("tai yra statinis metodas");
  }

  // paprastas metodas
  paprastasMetodas() {
    console.log("tai yra paprastas metodas");
  }
}

// statinio objekto kvietimas tiesiogiai per klase, be objekto
Klase.statinisMetodas();

// objekto sukurimas pagal klase
const objektas = new Klase();

// paprasto metodo kvietimas per objekta
objektas.paprastasMetodas();
// objektas.statinisMetodas(); // ERROR: objektas.statinisMetodas is not a function!
// instead call: Klase.statinisMetodas()

// ----------

class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  increaseAge() {
    this.age += 1;
  }
  static staticMethod() {
    console.log("I am a static method");
  }
}

const jeff = new User("Jeff", 30, "jeff@gmail.com");

jeff.increaseAge();
console.log(jeff);

// jeff.staticMethod(); //  returns typeError since staticMethod is not a method of jeff

User.staticMethod(); // output: "I am a static method"
