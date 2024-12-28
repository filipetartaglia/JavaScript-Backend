// parâmetros/argumentos
// retorno

/* parâmetros/argumentos - retorno

function exibeInfoEstudante(nome, nota) {
    return `O estudante ${nome} tirou nota ${nota}`;
}

console.log(exibeInfoEstudante('Filipe', 7.5));
*/

/* 

const estudanteReprovou = function (notaFinal, faltas) {
    if (notaFinal < 7 && faltas > 4) {
        return true;
    } else {
        return false;
    }
}

console.log(estudanteReprovou(6, 5));
console.log(estudanteReprovou(10,2));
*/

const estudanteReprovou = (notaFinal, faltas) => {
    if (notaFinal < 7 && faltas > 4) {
        return true;
    } else {
        return false;
    }
}

const exibirNome = (nome) => nome;

console.log(estudanteReprovou(6, 5));
console.log(estudanteReprovou(10, 2));
console.log(exibirNome('Filipe'));