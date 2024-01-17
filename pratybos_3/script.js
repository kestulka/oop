// #1 ir #2

const readerArray = []
// Apsirasoma funkcija Reader, kuri apraso nauja klase:
class Reader {
  constructor(vardas, pavarde, korteles_nr){
  // savybes nustatomos pagal perduotus parametrus:
  this.vardas = vardas;
  this.pavarde = pavarde;
  this.korteles_nr = korteles_nr;
  this.paimta_knyga = []; // tuscia knygu saraso savybe:
  }
  // #3

  printInfo() {
    console.log(
      `Vardas: ${this.vardas}, Pavarde: ${this.pavarde}, Korteles_numeris: ${this.korteles_nr}`,
    );
    console.log(`Paimtos knygos: ${this.paimta_knyga.join(", ")}`);
  };

  // #4

  paimtosKnygos(knyga) {
    this.paimta_knyga.push(knyga);
  };
}

// #5

let Reader1 = new Reader("jonas", "jonauskas", "1");
Reader1.paimtosKnygos("pasaulinis karas 2");
Reader1.paimtosKnygos("meile ispanijoje");

let Reader2 = new Reader("Petras", "Petrauskas", "2");
Reader2.paimtosKnygos("american dream");
Reader2.paimtosKnygos("desert island");

Reader1.printInfo();
Reader2.printInfo();

// #6 ir #7

function createReaderTable(Reader) {
  // lenteles konteinerio logika:
  let tableContainer = document.getElementById("tableContainer");
  if (!tableContainer) {
    tableContainer = document.createElement("div");
    tableContainer.setAttribute("id", "tableContainer");
    document.body.appendChild(tableContainer);
  }

  // pacios lenteles logika:

  let table = tableContainer.querySelector("table");

  if (!table) {
    table = document.createElement("table");
    table.style.setProperty("width", "1024px");
    table.classList.add("table", "table-bordered", "table-striped");
    const tableBody = document.createElement("tbody");
    table.appendChild(tableBody);
    tableContainer.appendChild(table);
  }

  // sukuriamas rowData objektas, kuris paima informacija is "Reader" objekto
  const rowData = {
    name: Reader.vardas,
    last_name: Reader.pavarde,
    card_number: Reader.korteles_nr,
    books: Reader.paimta_knyga
  };

  const row = document.createElement("tr");

  Object.entries(rowData).forEach(([key, value])=>{
    const cell = document.createElement("td")
    const cellText = document.createTextNode(`${key}: ${value}`)
    cell.appendChild(cellText);
    row.appendChild(cell);
  })
  
  // for (const key in rowData) {
  //   const cell = document.createElement("td");
  //   const cellText = document.createTextNode(`${key}: ${rowData[key]}`);
  //   cell.appendChild(cellText);
  //   row.appendChild(cell);
  // }

  // delete mygtukas
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("btn", "btn-danger", "btn-sm"); // Bootstrap button classes
  deleteButton.addEventListener("click", () => {
    deleteTableRow(row);
  });

  const deleteCell = document.createElement("td");
  deleteCell.appendChild(deleteButton);

  row.appendChild(deleteCell); // mygtuka prideti prie eilutes

  table.querySelector("tbody").appendChild(row); // eilute pridedi prie lenteles
}

// istrinti visa eilute
function deleteTableRow(row) {
  row.remove();
}

// ivestis
const nameInput = document.getElementById("name");
const lastNameInput = document.getElementById("lastname");
const cardNumberInput = document.getElementById("cardNumber");
const bookNameInput = document.getElementById("bookName");
const submitBtn = document.getElementById("submitBtn");

// valykla
function clearInputFields() {
  nameInput.value = "";
  lastNameInput.value = "";
  cardNumberInput.value = "";
  bookNameInput.value = "";
}

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  // patikra kad nebutu tusciu lauku (required kazkodel neveikia)
  if (
    !nameInput.value ||
    !lastNameInput.value ||
    !cardNumberInput.value ||
    !bookNameInput.value
  ) {
    alert("Užpildykite laukus!");
    return;
  }

  // paspaudus mygtuka sukuriamas skaitytojas su ivesties duomenim
  const newReader = new Reader(
    nameInput.value,
    lastNameInput.value,
    cardNumberInput.value,
  );

  const doesReaderExist = readerArray.find((reader) => reader.korteles_nr === newReader.korteles_nr)
  if (doesReaderExist){
    doesReaderExist.paimtosKnygos(bookNameInput.value)
  } else {
    newReader.paimtosKnygos(bookNameInput.value)
    readerArray.push(newReader)
  }
  console.log(readerArray)

  // readerArray.forEach((el)=>{
  //   if(cardNumber === cardNumberInput){
  //     newReader.paimtosKnygos(bookNameInput.value)
  //   } else{
  //     alert("ko tu neveiki")
  //   }
  // })

  createReaderTable(newReader);
  clearInputFields();
});

console.log(readerArray)