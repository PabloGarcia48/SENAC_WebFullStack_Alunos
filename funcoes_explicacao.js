/*
1. Função de Boas-Vindas
Objetivo: Criar uma função básica que exiba uma mensagem.

*/

function boasVindas() {
    console.log("Bem-vindo(a) ao curso de JavaScript!");
}

boasVindas();

/*
2. Função de Saudação Personalizada
Objetivo: Trabalhar com parâmetros e argumentos.

*/

function saudacao(nome) {
    console.log("Olá, " + nome + "!");
}

saudacao("Pablo");

/*
3. Soma de Dois Números
Objetivo: Realizar operações com números dentro de funções.
*/

function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(5, 3))

/*
4. Média de Três Números
Objetivo: Manipular números com uma média aritmética.
*/

function media(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

console.log(media(6, 8, 10));

/*
5. Conversão de Temperatura (Celsius para Fahrenheit)
Objetivo: Aplicar fórmulas dentro de uma função.
*/
function celsiusParaFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}

console.log(celsiusParaFahrenheit(25))

/*
6. Verificação de Número Par
Objetivo: Trabalhar com operadores de comparação e estrutura condicional.
*/
function ehPar(numero) {
    return numero % 2 === 0;
}

console.log(ehPar(4));
console.log(ehPar(5));

/*
7. Fatorial de um Número
Objetivo: Trabalhar com loops e operações matemáticas.
*/

function fatorial(n) {
    let resultado = 1;
    for (let i = n; i > 1; i--) {
        resultado *= i;
    }
    return resultado;
}

console.log(`fatorial`);
console.log(fatorial(5));

/*
8. Conta Quantas Vogais Existem em uma String
Objetivo: Manipular strings e utilizar loops para contar caracteres específicos.
*/
function contaVogais(texto) {
    const vogais = "aeiouAEIOU";
    let contagem = 0;
    
    for (let letra of texto) {
        if (vogais.includes(letra)) {
            contagem++;
        }
    }
    return contagem;
}

console.log(contaVogais("JavaScript"));

/*
9. Verifica Palíndromo
Objetivo: Trabalhar com strings, manipulação de textos e lógica condicional.
*/

function ehPalindromo(palavra) {
    const reverso = palavra.split('').reverse().join('');
    return palavra === reverso;
}

console.log(ehPalindromo("arara"));
console.log(ehPalindromo("javascript"));

/*
10. Função que Retorna Números Primos em um Intervalo
Objetivo: Trabalhar com lógica avançada e loops.
*/

function numerosPrimos(inicio, fim) {
    let primos = [];
    
    for (let i = inicio; i <= fim; i++) {
        if (ehPrimo(i)) {
            primos.push(i);
        }
    }
    return primos;
}

function ehPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(numerosPrimos(10, 30));