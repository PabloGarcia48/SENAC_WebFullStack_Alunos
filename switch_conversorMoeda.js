/*
Fazer um conversor de moedas com switch case, perguntando qual é a moeda que quer transformar.
Perguntar qual moeda é para converter:
1 - Dolar (R$ 5,63)
2 - Euro (R$ 6,16)
3 - Ambos
*/


const readline = require('readline-sync');
const process = require('process');

// Solicitar o valor em reais
let valor = parseFloat(readline.question("Digite o valor em reais (R$): "));

// Solicitar a moeda para conversão
console.log("Escolha a moeda para conversão:");
console.log("1 - Dólar (R$ -> US$)");
console.log("2 - Euro (R$ -> €)");
console.log("3 - Ambos");
let moeda = readline.question("Digite o número da moeda para conversão: ");

// Definir as taxas de conversão (valores fictícios)
const dolar = 5.20; // R$ 1 = 5.20 USD
const euro = 5.80;  // R$ 1 = 5.80 EUR

// Usar switch para escolher a conversão
switch (moeda) {
    case '1':
        console.log(`O valor em dólares é: US$ ${(valor / dolar).toFixed(2)}`);
        break;
    case '2':
        console.log(`O valor em euros é: € ${(valor / euro).toFixed(2)}`);
        break;
    case '3':
        console.log(`O valor em dólares é: US$ ${(valor / dolar).toFixed(2)}`);
        console.log(`O valor em euros é: € ${(valor / euro).toFixed(2)}`);
        break;
    default:
        console.log("Opção de moeda inválida.");
}

console.log("");
process.exit();

