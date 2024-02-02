function numeroAleatorio(maximo){
    return Math.floor(Math.random () * maximo);
}

let numero = numeroAleatorio(50);
console.log('O número aleatório gerado é: ' + numero);