/*
Construa um algorítmo que gere um número randômico de 1 a 10 e depois verifique se o usuário acertou, se errou continue solicitando o valor, se acertou finalize o programa.
*/

const readline = require('readline-sync');

// Gerar um número randômico entre 1 e 10
const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let palpite;

do {
    palpite = parseInt(readline.question("Adivinhe o número secreto (entre 1 e 10): "));
    if (palpite !== numeroSecreto) {
        console.log("Palpite incorreto. Tente novamente.");
    }
} while (palpite !== numeroSecreto);

console.log("");
console.log("Parabéns! Você acertou o número secreto.");
console.log("");

