/*
Crie um cardápio com 5 bebidas, cada uma delas em uma opção.
Mostre as opções ao usuário e solicite a sua escolha.
Conforme a escolha do usuário mostre a bebida escolhida e o seu valor.
Use switch-case para este exercício
*/

const readline = require("readline-sync");

console.log("1 - Martini");
console.log("2 - Refrigerante");
console.log("3 - Uísqui");
console.log("4 - Suco");
console.log("5 - Vodka");

const opcao = parseInt(readline.question("Digite o numero da bebida: "))

switch (opcao) {
    case 1:
        console.log("Opção Martini valor R$50,00");        
        break;
    case 2:
        console.log("Opção Refrigerante valor R$10,00");        
        break;
    case 3:
        console.log("Opção Uisqui valor R$100,00");        
        break;
    case 4:
        console.log("Opção Suco valor R$5,00");        
        break;
    case 5:
        console.log("Opção Vodka valor R$500,00");        
        break;
    default:
        console.log("Opção inválida"); 
        break;
}