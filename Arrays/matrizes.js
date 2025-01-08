const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeNota(aluno) {
    if (lista[0].includes(aluno)) { // verifica se o aluno digitado esta incluido(includes) na lista(array) de alunos(lista[0]).

        const indice = lista[0].indexOf(aluno); // se o aluno exitir, a variavel indice vai pegar o valor de onde esta o aluno na array.

        const mediaAluno = lista[1][indice]; // esta variavel vai pegar o valor da média do aluno com base no valor do indice.

        console.log(`${aluno} tem a média ${mediaAluno}`);
    } else {
        console.log('Estudante não existe na lista');
    }
}

exibeNomeNota('Juliana');
exibeNomeNota('Vini');