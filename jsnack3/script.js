// scrivere una funzione contaElementi() che, dato un array in input, restituisca il numero di elementi presenti nell'array
// X - Dichiarare array
// X - Chiedere quanti elementi da inserire 
// X - inserire elementi finche l'utente non viene fermato
// X - stampare il numero di elementi contenuti con '.length'

//INPUT
const newArray = [];
const addElemNum = parseInt(prompt("Quanti elementi vuoi inserire?"));
const divElem = document.getElementById("result");
//LOGICA

addElementi(addElemNum);
contaElementi();

divElem.innerHTML = `<p> Array: ${newArray} </p> <p> Numero elementi: ${contaElementi()} </p>`;



