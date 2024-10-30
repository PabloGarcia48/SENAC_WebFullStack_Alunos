/*
Faça um algoritmo que pergunte ao usuário um número inteiro e positivo qualquer e mostre uma contagem até este valor.
Use while.
Exemplo:
Input: 35
Output:
Numero: 0
Numero: 2
Numero: 3
Numero: 4
Numero: 5
(...)
Numero: 35
Acabou!
*/

const readline = require('readline-sync');

const numero = parseInt(readline.question("Digite um número: "))

let contador = 0

while (contador <= numero) {
    console.log("Numero: " + contador);
    contador = contador + 1
}

console.log("Acabou!");