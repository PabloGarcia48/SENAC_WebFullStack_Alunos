/*
Exercício 1: Criação de um Array
Crie um array chamado frutas com os seguintes valores: "maçã", "banana", "laranja". Exiba o array no console.
*/

let frutas = ["maçã", "banana", "laranja"];
console.log("Exercício 1:");
console.log(frutas);
console.log("---------------x-------------------x-------------");


/*
Exercício 2: Acessando Itens do Array
A partir do array frutas, exiba o segundo item (índice 1) no console.
*/

console.log("Exercício 2:");
console.log(frutas[1]);
console.log("---------------x-------------------x-------------");

/*
Exercício 3: Adicionar e Remover Elementos
Com o array frutas, faça o seguinte:
» Adicione "uva" ao final do array.
» Remova o primeiro elemento do array.
» Exiba o array resultante no console.
*/

console.log("Exercício 3:");
frutas.push('uva')
frutas.shift()
console.log(frutas);
console.log("---------------x-------------------x-------------");