//scrivere una funzione inserisciInTesta() che, dati un array A e un elemento E in input, resituisca un nuovo array B, con E in prima posizione e a seguire tutti gli elementi di A

// INPUT
const arrayA = [
  "Giove",
  "Giunone",
  "Marte",
  "Mercurio",
  "Minerva",
  "Nettuno",
  "Venere"
];
const arrayB = [];
console.log("Questi sono i nomi: ", arrayA);
const selectName = prompt("inserisci il nome da mettere in prima posizione: ");

// LOGICA

aggiungiInTesta(selectName);
console.log(arrayB);
