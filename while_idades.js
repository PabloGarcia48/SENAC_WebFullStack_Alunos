/*
Faça um progama que leia a idade de várias pessoas. A cada laço, você deverá perguntar para o usuário se ele quer ou não continuar a digitar dados. No final, quando o usuário decidir parar, mostre na tela:

a) Quantas idades foram digitadas;
b) Qual é a média entre as idades digitadas;
c) Quantas pessoas tem 21 anos ou mais.

*/

const readline = require("readline-sync")
let opcao = "sim"
let qtIdadesDigitadas = 0
let qtIdadesDigitadasMaior21 = 0
let somaIdades = 0
let mediaIdade = 0

while (opcao == "sim") {
    let idade = parseInt(readline.question("Digite uma idade: "));
    opcao = readline.question("Digite 'sim' para continuar ou\npressione enter para parar\n")
    
    //Contar quantidades de idades digitadas
    qtIdadesDigitadas++

    //Contar idades = ou maiores que 21
    if (idade >= 21) {
      qtIdadesDigitadasMaior21++  
    }

    //Calcular a média
    somaIdades = somaIdades + idade
    mediaIdade = somaIdades / qtIdadesDigitadas
    
}
console.log("");
console.log(`a) Foram digitadas ${qtIdadesDigitadas} idades`);
console.log(`b) A média das idades digitadas é ${mediaIdade} anos`);
console.log(`c) Foram digitadas ${qtIdadesDigitadasMaior21} idades maior ou igual a 21 anos`);
console.log("");
