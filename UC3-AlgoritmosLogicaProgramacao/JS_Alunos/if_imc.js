/*
Desenvolva um algoritmo que faça o cálculo do índice de massa corporal de uma pessoa. Esse algoritmo deve solicitar ao usuário que digite sua altura, em seguida solicitar que digite seu peso e que lhe exiba o status. O status vai variar da seguinte forma:
a. Se o IMC for menor que 18,5 o status a ser mostrado deve ser “Você está abaixo da faixa de peso ideal”;
b. Se o IMC estiver acima de 24,99 o status a ser mostrado será “Você está acima da faixa de peso ideal”;
c. Se o IMC for igual ou maior que 18,5 e igual ou menor que 24,99, o status a ser mostrado será “Você está dentro da faixa de peso ideal”.
*/

const readline = require("readline-sync")

const peso = parseFloat(readline.question("Digite seu peso: "))
const altura = parseFloat(readline.question("Digite sua altura: "))

const IMC = (peso / altura ** 2).toFixed(2)

console.log(`Seu IMC é ${IMC}`);


if (IMC >= 25) {
    console.log("Você está acima da faixa de peso ideal");    
} else if (IMC > 18.5) {
    console.log("Você está dentro da faixa de peso ideal");
} else {
    console.log("Você está abaixo da faixa de peso ideal");
}