/*
Exercício 11: ManipulaNomes.js
Dado o array nomes = ["Ana", "Francisco", "Beatriz", "João", "Eduardo", "Mariana"]:
» Use filter() para criar um array apenas com os nomes que tenham mais de 5 letras.
» Em seguida, use map() para transformar todos esses nomes em letras maiúsculas.
» Exiba o novo array no console.
*/

let nomes = ["Ana", "Francisco", "Beatriz", "João", "Eduardo", "Mariana"];

let nomesLongos = nomes.filter(nome => nome.length > 5);

let nomesMaiusculos = nomesLongos.map(nome => nome.toUpperCase());

console.log(nomesMaiusculos);
