/*
Exercício 9: Multiplicação (fatorial) com reduce() 
Crie um array de números [1, 2, 3, 4, 5]. Use o método reduce() para calcular a multiplicação de todos os números no array. Exiba o resultado no console.
*/

const numeros = [1, 2, 3, 4, 5];

let fatorial = numeros.reduce((acumulador, numero) => acumulador * numero, 1)

console.log(fatorial);
