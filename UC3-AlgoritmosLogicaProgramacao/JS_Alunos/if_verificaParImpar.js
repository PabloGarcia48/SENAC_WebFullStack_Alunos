/*
Crie um programa que você digite um número e ele verifica se é par ou impar.
*/

const readline = require('readline-sync');

const numero = parseInt(readline.question("Digite um numero: "));

if (numero % 2 == 0) {
    console.log(`O numero ${numero} é par`);
} else {
    console.log(`O numero ${numero} é impar`);
}