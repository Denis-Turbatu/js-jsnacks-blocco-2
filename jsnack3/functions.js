
// Aggiunge gli elementi
function addElementi(numIter) {
    let i = 0;

    do {
        const addElem = prompt("Inserisci");
        newArray.push(addElem);
        i++;
    } while (i < numIter);
}

function contaElementi() {
    return newArray.length;
}
