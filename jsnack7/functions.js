function rimuoviDallaTesta() {
    for (let i = 0; i < arrayA.length; i++) {
        if(i !== 0){
            arrayB.push(arrayA[i]);
        }else{
            continue;
        }
    }
}