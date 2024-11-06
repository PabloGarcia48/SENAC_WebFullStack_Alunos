/*
Exercício 10: Combinando Métodos
Dado o array precos = [10.5, 20.0, 30.25, 15.75, 40.0]:
» Use filter() para criar um novo array com preços maiores que 20.
» Em seguida, use map() para aplicar um desconto de 10% nesses preços.
» Exiba o array final com os preços com desconto no console.
*/


const precos = [10.5, 20.0, 30.25, 15.75, 40.0];

let maiores20 = precos.filter(n => n > 20)
console.log(maiores20);

let desconto10 = maiores20.map(n => n * 0.9)
console.log(desconto10);


