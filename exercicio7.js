/* 01 
const numeros = [5, 6, 1, 2.5];

numeros.forEach((elemento,indice) => {
    console.log(indice, elemento);
});
*/

/* 02
function executaOperacaoEmArray(array, funcao) {
    console.log(array.map(funcao));
}

function MultiNum(num) {
    return num * 2;
}

const numeros = [5, 2, 10, 6.5];
const NumerosMultiplicados = executaOperacaoEmArray(numeros, MultiNum);

console.log(NumerosMultiplicados);
*/

/* 03
const numeros = [10, 20, 30, 40, 50];
const numeroProcurado = 30;
let posicao = -1;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === numeroProcurado) {
    posicao = i;
    break;
  }
}

console.log(`Posição do número ${numeroProcurado}: ${posicao}`);
*/

/* 04
const nomesTurmaA = ['João Silva', 'Maria Santos', 'Pedro Almeida'];
const nomesTurmaB = ['Carlos Oliveira', 'Ana Souza', 'Lucas Fernandes'];
const todosAlunos = nomesTurmaA.concat(nomesTurmaB);

const procurarAluno = todosAlunos.find(nome => nome === 'Carlos Oliveira');

if (procurarAluno) {
    console.log(`Aluno encontrado: ${procurarAluno}.`);
} else {
    console.log('Aluno não encontrado');
}
*/

// 05
const numeros = [6, 9, 12, 15, 18, 21];

numeros.forEach((numero) => {
    const resultado = numero * 3;
    console.log(resultado);
});

const indiceNumero = numeros.findIndex(numero => numero === 18);

if (indiceNumero !== -1) {
    console.log(`O número 18 está no índice: ${indiceNumero}`);
} else {
    console.log('O número não está no array');
}