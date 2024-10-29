/*
Faça um algoritmo que peça ao usuário para digitar uma senha, repetindo o pedido até que a senha correta seja inserida.
*/

const readline = require("readline-sync")

const senhaCorreta = "123"
let senhaDigitada = readline.question("Digite uma senha:\n")

while (senhaCorreta != senhaDigitada) {
    console.log("Senha errada");    
    senhaDigitada = readline.question("Digite uma senha:\n")
    
}

console.log("Senha certa - Entrou");


