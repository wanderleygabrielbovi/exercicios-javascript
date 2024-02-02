let frase = "O rato roeu a roupa do rei de roma."

function fraseToArray(frase) {
    return frase.split(" ");
}

let array = fraseToArray(frase);
console.log(array.join(" "));