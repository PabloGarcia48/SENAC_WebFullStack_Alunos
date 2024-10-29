/*
Usando switch case crie um programa que digitando um número ele nos devolva o dia da semana.
*/
const readline = require('readline-sync');

const numero = parseInt(readline.question("Digite um número de 1 a 7: "));

console.log("");
switch (numero) {
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terça-feira");
        break;
    case 3:
        console.log("Quarta-feira");
        break;
    case 4:
        console.log("Quinta-feira");
        break;
    case 5:
        console.log("Sexta-feira");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Digite um numero de 1 a 7");        
        break;
}

console.log("");


