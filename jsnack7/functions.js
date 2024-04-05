function rimuoviDallaCoda() {
    for (let i = 0; i < arrayA.length; i++) {
        if(i !== arrayA.length - 1){
            arrayB.push(arrayA[i]);
        }else{
            continue;
        }
    }
}