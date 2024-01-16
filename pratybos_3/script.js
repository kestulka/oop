// #1 ir #2

// Apsirasoma funkcija Reader, kuri apraso nauja klase:
function Reader(vardas, pavarde, korteles_nr) {
  // savybes nustatomos pagal perduotus parametrus:
  this.vardas = vardas;
  this.pavarde = pavarde;
  this.korteles_nr = korteles_nr;
  this.paimta_knyga = []; // tuscia kyngu saraso savybe:

  // #3

  this.printInfo = function () {
    console.log(
      `Vardas: ${this.vardas}, Pavarde: ${this.pavarde}, Korteles_numeris: ${this.korteles_nr}`,
    );
    console.log(`Paimtos knygos: ${this.paimta_knyga.join(", ")}`);
  };

  // #4

  this.paimtos_knygos = function (knyga) {
    this.paimta_knyga.push(knyga);
  };
}

// #5

let reader1 = new Reader("jonas", "jonauskas", "1");
reader1.paimtos_knygos("pasaulinis karas 2");
reader1.paimtos_knygos("meile ispanijoje");

let reader2 = new Reader("Petras", "Petrauskas", "2");
reader2.paimtos_knygos("american dream");
reader2.paimtos_knygos("desert island");

reader1.printInfo();
reader2.printInfo();

// #6 ir #7

function createReaderTable(reader) {
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

  // sukuriamas rowData objektas, kuris paima informacija is "reader" objekto
  const rowData = {
    name: reader.vardas,
    last_name: reader.pavarde,
    card_number: reader.korteles_nr,
    books: reader.paimta_knyga.join(", "),
  };

  const row = document.createElement("tr");
  for (const key in rowData) {
    const cell = document.createElement("td");
    const cellText = document.createTextNode(`${key}: ${rowData[key]}`); // pvz: 66 eilute: {key} yra "name", {rowData[key]} yra reader.vardas
    cell.appendChild(cellText);
    row.appendChild(cell);
  }

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

  newReader.paimtos_knygos(bookNameInput.value); // pridedama knyga prie skaitytojo

  createReaderTable(newReader);
  clearInputFields();
});
