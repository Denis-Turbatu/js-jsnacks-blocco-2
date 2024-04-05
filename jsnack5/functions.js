function stampa(numIter) {
    let i;
    let printString = ""
    for (i = 0; i < numIter; i++) {
        const addElem = prompt("Inserisci");
        newArray.push(addElem);
        printString += newArray[i]  + ", ";
    }
    console.log(printString);
}