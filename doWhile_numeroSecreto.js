/*
Construa um algorítmo que gere um número randômico de 1 a 10 e depois verifique se o usuário acertou, se errou continue solicitando o valor, se acertou finalize o programa.
*/

const readline = require('readline-sync');

// Gerar um número randômico entre 1 e 10
const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let palpite;



