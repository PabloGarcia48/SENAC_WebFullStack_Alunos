/*
9. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada km acima da velocidade permitida.
*/

const readline = require("readline-sync")

const velocidade = readline.question("Qual a sua velocidade? ")
const multa = ((velocidade - 80 ) * 5).toFixed(2)

if (velocidade > 80) {
    console.log(`Sua multa é de R$${multa}`);    
} else {
    console.log("Você não foi multado");
}