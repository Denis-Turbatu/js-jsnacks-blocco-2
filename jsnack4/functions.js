function trovaElementi() {
    found = false;

    for (let i = 0; i < arrayNomi.length; i++) {
        if(requestUser.toLowerCase() == arrayNomi[i].toLowerCase()){
            found = true;
        }
    }

    if (found) {
        console.log("esiste");
    } else {
        console.log(-1);
    }
}

