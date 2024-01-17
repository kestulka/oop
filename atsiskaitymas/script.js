class Animal {
    constructor(name, age, family, legs){
        this.name = name;
        this.age = age;
        this.family = family;
        this.legs = legs;
    }
}

class Cat extends Animal{
    constructor(name, age, family, legs, cutenessLevel){
        super(name, age, family, legs);
        this.cutenessLevel = cutenessLevel;
    }

    getCatInfo(){
        console.log(`your cat name is ${this.name}`)
    }
}

class Dog extends Animal{
    constructor(name, age, family, legs, annoyanceLevel){
        super(name, age, family, legs);
        this.annoyanceLevel = annoyanceLevel;
    }
}

class Rabbit extends Animal{
    constructor(name, age, family, legs, poopOnBedChance){
        super(name, age, family, legs);
        this.poopOnBedChance = poopOnBedChance
    }
}

const catBtn = document.createElement('button')
catBtn.innerText = "Cat";
catBtn.setAttribute("id", "catButton")
document.body.append(catBtn)

const dogBtn = document.createElement('button')
dogBtn.innerText = "Dog";
dogBtn.setAttribute("id", "dogButton")
document.body.append(dogBtn)

const rabbitBtn = document.createElement('button')
rabbitBtn.innerText = "Rabbit";
rabbitBtn.setAttribute("id", "rabbitButton")
document.body.append(rabbitBtn)

const formosDivas = document.createElement("div")
document.body.append(formosDivas)
const formContainer = document.querySelector("div")
formContainer.setAttribute("id", "formContainer")




function createForm(animalType) {



    let form = document.createElement('form');

    // inner html
    let formFields = `
      <input type="text" name="name" placeholder="Name">
      <input type="number" name="age" placeholder="Age">
      <input type="number" name="legs" placeholder="Legs">
      <input type="text" name="family" placeholder="Family">
    `;

    // prideti inputus pagal gyvuno rusi
    if (animalType === 'Cat') {
        formFields += `<input type="number" name="cutenessLevel" placeholder="Cuteness Level">`;
    } else if (animalType === 'Dog') {
        formFields += `<input type="number" name="annoyanceLevel" placeholder="Annoyance Level">`;
    } else if (animalType === 'Rabbit') {
        formFields += `<input type="number" name="poopOnBedChance" placeholder="Poop on Bed Chance">`;
    }

    formFields += `<input type="submit" id="submitButton" value="Submit">`;

    form.innerHTML = formFields;

    document.body.appendChild(form);
}

// formos kurimo testavimas

// createForm('Cat');
// createForm('Dog');
// createForm('Rabbit');
  
const catButton = document.getElementById("catButton")
catButton.addEventListener("click", (event)=>{
event.preventDefault()
    if(createForm){
        // createForm.remove()
        console.log(createForm)
    } else{
    createForm('Cat')
    }
})
const dogButton = document.getElementById("dogButton")
dogButton.addEventListener("click", (event)=>{
    event.preventDefault()
    createForm('Dog')
})
const rabbitButton = document.getElementById("rabbitButton")
rabbitButton.addEventListener("click", (event)=>{
    event.preventDefault()
    createForm('Rabbit')
})

const submitButton = document.getElementById("")