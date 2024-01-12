class Person {
    constructor(name, lastname, age, email){
        this.vardas = name
        this.pavarde = lastname
        this.amzius = age
        this.pastas = email
    }
    getPersonInfo(){
        console.log(`your name is ${this.vardas}, lastname ${this.pavarde}. Your age is ${this.amzius} and email ${this.pastas}`)
    }
}

const jonas = new Person("Jonas", "Jonaitis", 14, "joneliscbb@gmail.com")
const ona = new Person("Ona", "Onaite", 12,  "onutebdsm@gmail.com")

console.log(jonas)
console.log(ona)

jonas.getPersonInfo() 
ona.getPersonInfo()

class Animal{
    static greeting(){
        console.log("i am an animal specie")
    }
    hello(){
        console.log("swx")
    }
}

const kentauras = new Animal()
console.log(kentauras)

kentauras.hello()
Animal.greeting() // kreiptis per klase

class Student extends Person{
    constructor(name, lastname, age, email, course, speciality ){
        super(name, lastname, age, email)
        this.kursas = course
        this.specialybe = speciality
    }
    getStudentInfo(){
        console.log(`your name is ${this.vardas}, lastname ${this.pavarde}. Your age is ${this.amzius} and email ${this.pastas}. Also youre in ${this.kursas} course, studying speciality ${this.specialybe}`)
    }
}

const jonas2 = new Student("Jonas", "Jonaitis", 13, "jonuzas@gmail.com", "pyrmas", "im a mekanic")
jonas2.getStudentInfo()

class Teacher extends Person{
    constructor(name, lastname, age, email, object, salary){
    super(name, lastname, age, email)
    this.dalykas = object
    this.alga = salary
    this.temos = []
    }

    isHappy(){
        if(this.alga > 1200){
            console.log("as ne bomzara!")
        } else if(this.alga > 800){
            console.log("eik geriau gatviu sluot")
        } else{
            console.log("bedarbis")
        }
    }

    setTopic(tema){
        this.temos.push(tema)
    }

    getTopic(){
        this.temos.forEach(el=>console.log(`your name is ${this.vardas}, lastname ${this.pavarde}. Your age is ${this.amzius} and email ${this.pastas}. Also youre in ${this.kursas} course, studying speciality ${this.specialybe}`))
}
}

const jonas3 = new Teacher("Jonas", "Jonaitis", 23, "jonzas@gmail.com")
console.log(jonas3)

jonas3.isHappy()
jonas3.setTopic("OOP")
console.log(jonas3)

const tema = ['oop', 'array', 'xxxx', 'asdada'];
tema.forEach(topic=> jonas3.setTopic(topic))
jonas3.getTopic()
console.log(jonas3)

