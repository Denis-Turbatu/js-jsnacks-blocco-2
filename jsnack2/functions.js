function checkLength() {
    if(word1.length === word2.length){
        console.log(word1, word2);
    }else if (word1.length < word2.length) {
        console.log(word2, "word2");
    }else if (word1.length > word2.length) {
        console.log(word1, "word1");
    }
}

function printElem(printElem) {
    const printToElem = document.getElementById("result");
    // console.log(printToElem);
    printToElem = `<li> ${printElem} </li>`
}