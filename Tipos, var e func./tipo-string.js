const estudante = "Filipe";
const docente = 'Ana';
const cumprimento = "Nosso lema é 'estudar bastante!' ";
const citacao = `Ju diz: "nosso lema é 'estudar bastante!'"`

console.log(cumprimento);
console.log(citacao);

console.log(`a estudante se chama ${estudante}`);

// template string

const senha = 'SenhaSegura123' + estudante.toUpperCase();
console.log(senha);

// caracteres especiais 

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const check = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(check)
console.log(hiragana)