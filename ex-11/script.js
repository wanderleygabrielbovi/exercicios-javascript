var array1 = ["elemento1", "elemento2", "elemento3", "elemento4", "elemento5", "elemento6"];
var array2 = ["element1", "element2", "element3"];

function verifyElement(array){
    if (array.length > 5){
        array.forEach(valor => {
            console.log(valor);
        });
        console.log(`Array com um total de ${array.length} elementos`);
    } else {
        console.log("Poucos elementos foram recebidos!");
    }
}

verifyElement(array1);
verifyElement(array2);