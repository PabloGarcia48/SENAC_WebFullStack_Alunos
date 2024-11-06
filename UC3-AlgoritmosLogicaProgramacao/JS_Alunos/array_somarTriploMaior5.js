/*
Exercício 12: Somar o triplo dos números maiores que 5
Dado o array valores = [3, 7, 2, 9, 1, 8, 6]:

» Use filter() para obter números maiores que 5.
» Em seguida, use map() para multiplicar esses números por 3.
» Por fim, use reduce() para somar todos os valores resultantes.
» Exiba a soma final no console.

*/

let valores = [3, 7, 2, 9, 1, 8, 6];


let maioresQueCinco = valores.filter(num => num > 5);


let triplo = maioresQueCinco.map(num => num * 3);


let soma = triplo.reduce((acumulador, valor) => acumulador + valor, 0);

console.log(soma);




