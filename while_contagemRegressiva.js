/*
Faça um algoritmo que solicite um número inteiro e positivo qualquer ao usuário e faça uma contagem regressiva partindo do número digitado.
*/

const readline = require('readline-sync');

let numero = parseInt(readline.question("Digite um número para iniciar a contagem regressiva: "));

while (numero >= 0) {
    console.log(numero);
    numero--; // Decrementa o número
}

console.log("Contagem regressiva finalizada!");