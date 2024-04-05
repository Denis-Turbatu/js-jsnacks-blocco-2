function aggiungiInTesta(selectedName) {
    arrayB.push(selectedName);
    for (let i = 0; i < arrayA.length; i++) {
        if(arrayA[i].toLowerCase() !== selectedName.toLowerCase()){
            arrayB.push(arrayA[i]);
        }else{
            continue;
        }
    }
}