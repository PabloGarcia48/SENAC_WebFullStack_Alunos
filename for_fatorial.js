/*
Faça um programa que solicite um número e calcule o fatorial dele.
*/

const rl = require("readline-sync")

const numero = rl.question("Digite um numero: ")
let  multiplicacao = 1;

console.log("");

for (let index = 1; index <= numero; index++) {
    multiplicacao = multiplicacao * index
}

console.log(`A multiplicacao de 1 até ${numero} = ${multiplicacao}`);
console.log("");
