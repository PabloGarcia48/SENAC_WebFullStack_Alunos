/*
Escreve um algoritmo no qual lhe solicite um número e ele retorna a tabuada de 1 a 10 do número digitado
Exemplo:
3 x 0 = 0
3 x 1 = 3
3 x 2 = 6
(...)
3 x 10 = 30
*/
const rl = require("readline-sync")

const numero = rl.question("Digite um numero: ")

console.log("");

console.log(`Tabuada do ${numero}:`);

for (let i = 0; i <= 10; i++) {
    let resultado = numero * i
    console.log(`${numero} x ${i} = ${resultado}`);
}
console.log("");