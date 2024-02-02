var calculadora = {
    somar: function (a, b) {
        return a + b;
    },
    subtrair: function (a, b) {
        return a - b;
    },
    multiplicar: function (a, b) {
        return a * b;
    },
    dividir: function (a, b) {
        return a / b;
    }
}

console.log("Resultado soma: " + calculadora.somar(10, 5));
console.log("Resultado subtração: " + calculadora.subtrair(10, 5));
console.log("Resultado multiplicação: " + calculadora.multiplicar(10, 5));
console.log("Resultado divisão: " + calculadora.dividir(10, 5));