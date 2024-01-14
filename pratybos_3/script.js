function Reader(vardas, pavarde, korteles_nr){
this.vardas = vardas;
this.pavarde = pavarde;
this.korteles_nr = korteles_nr;
this.paimta_knyga = paimta_knyga = [];

this.printInfo = function(){
Console.log(`Vardas: ${this.vardas}, Pavarde: ${this.pavarde}, Korteles_numeris: ${this.korteles_nr}`);
Console.log(`Paimtos knygos: ${this.paimta_knyga.join(', ')}`);};