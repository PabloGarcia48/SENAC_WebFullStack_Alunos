/*
Crie um algorítmo que solicite ao usuário uma palavra e devolva o número de vogais que ela tem.

palavra.length = dá o tamanho da palavra
vogais.include = verifica se o item está dentro da variável vogais

*/
const rl = require("readline-sync")
const palavra = rl.question("Digite uma palavra: ")
console.log("");

const vogais = "AEIOUaeiou"

let contVogal = 0;

for (let i = 0; i < palavra.length; i++) {
    if (vogais.includes(palavra[i]) === true) {
        contVogal++
    }
}

console.log(`${palavra} tem ${contVogal} vogais`);
console.log("");






