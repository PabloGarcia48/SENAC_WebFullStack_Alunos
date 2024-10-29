/*
Crie uma calculadora de desconto, conforme a forma de pagamento.
Entrada de um valor de produto, saída valor a pagar.
10% de desconto para pix
5% de desconto para débito
3% de desconto para crédito

valores de desconto:
Digite 1 para pagamento em PIX
Digite 2 para pagamento no débito
Digite 3 para pagamento no crédito
*/
const readline = require('readline-sync');

const valorProduto = readline.question("Qual é o valor do produto? ")

console.log("Escolha a forma de pagamento");
console.log("1 - PIX");
console.log("2 - Débito");
console.log("3 - Crédito");

const formaPagamento = readline.question("Qual é a forma de pagamento? ")

if (formaPagamento >= 1 && formaPagamento <= 3) {
    if (formaPagamento == 1) {
        const valorPagar = (valorProduto * 0.9).toFixed(2);
        console.log("Forma de pagamento escolhida foi PIX");
        console.log(`Total a pagar R$${valorPagar}`);    
    } else if (formaPagamento == 2){
        const valorPagar = (valorProduto * 0.95).toFixed(2);
        console.log("Forma de pagamento escolhida foi Débito");
        console.log(`Total a pagar R$${valorPagar}`);
    } else if (formaPagamento == 3){
        const valorPagar = (valorProduto * 0.97).toFixed(2);
        console.log("Forma de pagamento escolhida foi Crédito");
        console.log(`Total a pagar R$${valorPagar}`);
    }
} else {
    console.log("Opção de pagamento invalida.");
    
}
console.log("");
