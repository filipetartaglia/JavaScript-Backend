// método filter()
// É utilizado para filtrar os elementos de uma array, e criando uma nova array para ela retonar todos os valores que forem true, nesta nova array

/*
const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

function filtrarAlunos(_, i) {
    return medias[i] < 7;
}

const reprovados = filtrarAlunos(alunos);

console.log(reprovados);
*/

const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((_, i) => {
    return medias[i] < 7;
}) 

console.log(reprovados);