const readline = require('readline-sync');

// Solicitar as 3 notas
const nota1 = parseFloat(readline.question("Digite a primeira nota:"));
const nota2 = parseFloat(readline.question("Digite a segunda nota:"));
const nota3 = parseFloat(readline.question("Digite a terceira nota:"));

// Calcular Média Simples
let media = ((nota1 + nota2 + nota3) / 3).toFixed(2);

console.log(media);


if (media >= 9) {
    console.log(`Média muito satisfatória. Média = ${media}`);
} else if(media >= 7) {
    console.log(`Média satisfatória. Média = ${media}`);
} else if (media >= 6) {
    console.log(`Quase reprovou. Média = ${media}`);
} else {
    console.log(`Reprovou. Média = ${media}`);
}

console.log("");

