function rimuoviDallaCoda(foundName) {
    for (let i = 0; i < arrayA.length; i++) {
        console.log(foundName, "nome trovato");
        if(arrayA[i].toLowerCase() !== foundName.toLowerCase()){
            arrayB.push(arrayA[i]);
        }else{
            continue;
        }
    }
}