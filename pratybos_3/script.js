// #1 ir #2
function Reader(vardas, pavarde, korteles_nr) {
  this.vardas = vardas;
  this.pavarde = pavarde;
  this.korteles_nr = korteles_nr;
  this.paimta_knyga = [];

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

// 5

let reader1 = new Reader("jonas", "jonauskas", "1");
reader1.paimtos_knygos("pasaulinis karas 2");
reader1.paimtos_knygos("meile ispanijoje");

let reader2 = new Reader("Petras", "Petrauskas", "2");
reader2.paimtos_knygos("american dream");
reader2.paimtos_knygos("desert island");

// 6

reader1.printInfo();
reader2.printInfo();
