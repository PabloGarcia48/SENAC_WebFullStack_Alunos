/*
Exercício 5: Iteração com For Loop
Usando o array de números [5, 10, 15, 20, 25], crie um for loop que exiba cada número multiplicado por 3.
*/

const numeros = [5, 10, 15, 20, 25, 50];

for (let i = 0; i < numeros.length; i++) {
    let resultado = 3 * numeros[i]
    console.log(`${numeros[i]} x 3 = ${resultado}`);
}