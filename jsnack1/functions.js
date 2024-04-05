function requestNum() {
    const userNumber;
    userNumber = parseInt(prompt("Inserisci un numero"));
    return userNumber;
}

function generatorArray(nArray) {
    const newArray = [];
    for (let i = 0; i < nArray.length; i++) {
        newArray.push([]);
    }
    return newArray;
}

// function fillArray() {
//     for (let j = 0; j < 10; j++) {
//         const element = array[j];
        
//     }
// }