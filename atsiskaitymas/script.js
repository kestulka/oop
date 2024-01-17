// klases ir poklases

class Animal {
  constructor(name, age, family, legs) {
    this.name = name;
    this.age = age;
    this.family = family;
    this.legs = legs;
  }
}

class Cat extends Animal {
  constructor(name, age, family, legs, cutenessLevel) {
    super(name, age, family, legs);
    this.cutenessLevel = cutenessLevel;
  }
}

class Dog extends Animal {
  constructor(name, age, family, legs, annoyanceLevel) {
    super(name, age, family, legs);
    this.annoyanceLevel = annoyanceLevel;
  }
}

class Rabbit extends Animal {
  constructor(name, age, family, legs, poopOnBedChance) {
    super(name, age, family, legs);
    this.poopOnBedChance = poopOnBedChance;
  }
}

const catBtn = createButton("Cat");
const dogBtn = createButton("Dog");
const rabbitBtn = createButton("Rabbit");

// si seka svarbi, del html galutinio issidestymo
const buttonContainer = createButtonContainer();
const formContainer = createFormContainer();
const cardContainer = createCardContainer();

buttonContainer.append(catBtn);
buttonContainer.append(dogBtn);
buttonContainer.append(rabbitBtn);

// funkcija kurti mygtuka pagal gyvuno rusi

function createButton(animalType) {
  const button = document.createElement("button");
  button.innerText = animalType;
  button.setAttribute("id", `${animalType}Button`);
  document.body.append(button);
  return button;
}

// konteineriu kurimo funkcijos

function createButtonContainer() {
  const buttonDivas = document.createElement("div");
  buttonDivas.setAttribute("id", "buttonContainer");
  document.body.append(buttonDivas);
  return buttonDivas;
}

function createFormContainer() {
  const formDivas = document.createElement("div");
  document.body.append(formDivas);
  formDivas.setAttribute("id", "formContainer");
  return formDivas;
}

function createCardContainer() {
  const cardDivas = document.createElement("div");
  document.body.append(cardDivas);
  cardDivas.setAttribute("id", "cardContainer");
  return cardDivas;
}

// let form = document.createElement("form") - kazkodel neveike funkcijos viduje, todel naudojau taip keistai
let form = null;

// funkcija kurti inputa pagal gyvuno rusi
function createInputForm(animalType) {
  if (form) {
    form.remove();
  }

  form = document.createElement("form");

  let formFields = `
      <input type="text" name="name" placeholder="Name" required>
      <input type="number" name="age" placeholder="Age" required>
      <input type="number" name="legs" placeholder="Legs" required>
      <input type="text" name="family" placeholder="Family" required>
    `;

  // inner html appendas pagal gyvuno tipa(cat,dog,rabbit) input laukeliui
  if (animalType === "Cat") {
    formFields += `<input type="number" name="cutenessLevel" placeholder="Cuteness Level">`;
  } else if (animalType === "Dog") {
    formFields += `<input type="number" name="annoyanceLevel" placeholder="Annoyance Level">`;
  } else if (animalType === "Rabbit") {
    formFields += `<input type="number" name="poopOnBedChance" placeholder="Poop on Bed Chance">`;
  }

  // inner html appendas submit mygtukui
  formFields += `<input type="submit" id="submitButton" value="Submit">`;

  // visu appendu kombinacija ir pridejimas i html
  form.innerHTML = formFields;

  formContainer.appendChild(form);

  // STORE THE SELECTED ANIMAL TYPE AS DATA ATTRIBUTE (nenaudotas budas)
  form.dataset.animalType = animalType;

  // SUBMIT EVENT LISTENER (skirtingai nei kiti event listeneriai, sis yra pacioje formoje)
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    createCard(animalType);
  });
}

function createCard(animalType) {
  const form = document.querySelector("form");

  // paimamos ivestis is formos (neiprasta sintakse)
  const nameValue = form.querySelector('[name="name"]').value;
  const ageValue = form.querySelector('[name="age"]').value;
  const legsValue = form.querySelector('[name="legs"]').value;
  const familyValue = form.querySelector('[name="family"]').value;

  let specificInfo = "";

  if (animalType === "Cat") {
    specificInfo = `Cuteness Level: ${
      form.querySelector('[name="cutenessLevel"]').value
    }`;
  } else if (animalType === "Dog") {
    specificInfo = `Annoyance Level: ${
      form.querySelector('[name="annoyanceLevel"]').value
    }`;
  } else if (animalType === "Rabbit") {
    specificInfo = `Poop on Bed Chance: ${
      form.querySelector('[name="poopOnBedChance"]').value
    }`;
  }

  // Kortos sukurimas
  const card = document.createElement("div");
  card.innerHTML = `
    <div id="card">
      <h2>${animalType}</h2>
      <p>Name: ${nameValue}</p>
      <p>Age: ${ageValue}</p>
      <p>Legs: ${legsValue}</p>
      <p>Family: ${familyValue}</p>
      <p>${specificInfo}</p>
    </div>
  `;

  cardContainer.appendChild(card);
}

catBtn.addEventListener("click", () => createInputForm("Cat"));
dogBtn.addEventListener("click", () => createInputForm("Dog"));
rabbitBtn.addEventListener("click", () => createInputForm("Rabbit"));
