/* Array com slice(), para separar arrays.

const listaNome = ['Fiipe', 'Tartaglia', 'Renata', 'Marcelo', 'Julia'];
const sala1 = listaNome.slice(0, listaNome.length/2);
const sala2 = listaNome.slice(listaNome.length/2);

console.log(sala1);
console.log(sala2);
*/

/* splice() para manipular array, excluir e adicionar valores na posição.

const listaNome = ['Fiipe', 'Tartaglia', 'Renata', 'Marcelo', 'Julia'];
listaNome.splice(1, 1, 'Meg');

console.log(listaNome);
*/

/* concat() para concatenar uma array a outra array.

const sala1 = ['Filipe', 'Tartaglia', 'Renata'];
const sala2 = ['Meg', 'Julia', 'Marcelo'];

console.log(sala1.concat(sala2));
*/

const nome = ['Fiipe', 'Renata', 'Marcelo', 'Julia'];
const nota = [10, 8, 7.5, 9];

const lista = [nome, nota];

console.log(`O nome do aluno 1 é ${lista[0][0]}. E a sua nota foi de ${lista[1][0]}`);