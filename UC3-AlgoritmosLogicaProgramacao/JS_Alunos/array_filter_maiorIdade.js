/*
Exercício 8: Filtrando com filter()
Dado o array idades = [12, 18, 22, 25, 10, 16], use o método filter() para criar um novo array que contenha apenas as idades maiores ou iguais a 18.
Exiba o array filtrado no console.

*/

const idades = [12, 18, 22, 25, 10, 16];

let maiores18 = idades.filter(n => n >= 18);

console.log(maiores18);
