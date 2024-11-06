/*
Crie um programa que digitando a sua idade ele identifica de qual geração você é.

Geração Silenciosa: Nascidos entre 1923 e 1946.
Baby Boomers: Nascidos entre 1947 e 1963.
Geração X: Nascidos entre 1964 e 1983.
Millennials: Nascidos entre 1984 e 1995.
Geração Z: Nascidos entre 1995 e 2009.
Geração Alpha: 2010 a atual.
*/

const readline = require('readline-sync');

const idade = readline.question("Qual sua idade? ")

const anoNascimento = 2024 - idade;

console.log("");

if (anoNascimento >= 2010) {
    console.log(`Você nasceu no ano de ${anoNascimento}\n e é da geração Alpha.`);
} else if (anoNascimento >= 1995) {
    console.log(`Você nasceu no ano de ${anoNascimento}\n e é da geração Z.`);
} else if (anoNascimento >= 1984) {
    console.log(`Você nasceu no ano de ${anoNascimento}\n e é Millennials.`);
} else if (anoNascimento >= 1964) {
    console.log(`Você nasceu no ano de ${anoNascimento}\n e é da Geração X.`);
} else if (anoNascimento >= 1947) {
    console.log(`Você nasceu no ano de ${anoNascimento}\n e é Baby Boomers.`);
} else if (anoNascimento >= 1923) {
    console.log(`Você nasceu no ano de ${anoNascimento}\n e é Geração Silenciosa.`);
} else {
    console.log("Geração não encontrada");
}

console.log("");