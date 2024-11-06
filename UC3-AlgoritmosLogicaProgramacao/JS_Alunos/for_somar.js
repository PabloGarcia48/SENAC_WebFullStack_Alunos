/*
Escreva um algoritmo que solicite um número e ele devolve a soma de 1 até o número digitado, o incluindo.
*/

const rl = require("readline-sync")

const numero = rl.question("Digite um numero: ")
let  soma = 0;

console.log("");

for (let index = 0; index <= numero; index++) {
    soma = soma + index
}

console.log(`A soma de 0 até ${numero} = ${soma}`);
console.log("");