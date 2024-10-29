/*
Crie um algorítmo que solicite um número ao usuário e ele devolva uma contagem até o número usando for.
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

const rl = require("readline-sync")

const numero = rl.question("Digite um numero: ")

console.log("");

for (let index = 0; index <= numero; index++) {
    console.log(`Numero: ${index}`);    
}

console.log("Acabou!");
console.log("");


