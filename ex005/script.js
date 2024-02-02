function verificaNumber(dado) {
    if (typeof dado === 'number') {
        return "O dado é do tipo number!";
    } else {
        return "O dado não é do tipo number!";
    }
}

function verificaBoolean(dado) {
    if (typeof dado === 'boolean') {
        return "O dado é do tipo boolean!";
    } else {
        return "O dado não é do tipo boolean!";
    }
}

function verificaString(dado) {
    if (typeof dado === 'string') {
        return "O dado é do tipo String!";
    } else {
        return "O dado não é do tipo String!";
    }
}

let dado1 = 1;
let dado2 = true;
let dado3 = 'Front-End';

console.log(verificaNumber(dado1));
console.log(verificaBoolean(dado2));
console.log(verificaString(dado3));