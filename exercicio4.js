/* ex 1
function saudacao(nome) {
    console.log(`Olá, ${nome}!`);
}

saudacao('Filipe');
*/

/* ex 2
function VerificaIdade(idade) {
    return idade >= 18 ? 'É maior de idade!' : 'Não é maior de idade!';
}

console.log(VerificaIdade(19));
*/

/* ex 3
function verificaPalavra(palavra) {
    const palavraInvertida = palavra.split('').reverse().join('');
    return palavra.toLowerCase() === palavraInvertida.toLowerCase();
}

console.log(verificaPalavra('arara'));
console.log(verificaPalavra('Frase'));
*/

/* ex 4
function numMaior(a, b, c) {
    if (a > b && a > c) {
        return `${a} é maior que ${b} e ${c}`;
    } else if (b > a && b > c) {
        return `${b} é maior que ${a} e ${c}`;
    } else {
        return `${c} é maior que ${a} e ${b}`;
    }
}

console.log(numMaior(415, 500, 322));
*/

const calculaPotencia = (base, expo) => {
    return Math.pow(base, expo);
}

const base = 5;
const expo = 2;

const resultado = calculaPotencia(base, expo);
console.log(`O resultado de ${base} elevado a ${expo} é: ${resultado}`);