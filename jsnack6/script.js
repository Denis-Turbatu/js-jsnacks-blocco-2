// scrivere una funzione rimuoviDallaCoda() che, dato un array A in input, restituisca un nuovo array B, con tutti gli elementi dell'array A, tranne l'ultimo

// dicharare array 
// chiedere il valore da togliere 
// fare ciclo for per nuovo array d'appoggio
// usare continue per saltare il ciclo

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
const selectName = prompt("inserisci il nome da rimuovere: ")

// LOGICA

rimuoviDallaCoda(selectName);
console.log(arrayB);