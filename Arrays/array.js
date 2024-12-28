/* Ao invés de declarar: 

const valor1 = 10;
const valor2 = 7.5;
const valor3 = 8;
const valor4 = 4.5;
*/

/* declare tudo em uma array: 

const notas = [10, 7.5, 8, 4.5];
const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);
*/

/* adicione um valor no final da array com push(): 

const notas = [10, 6, 8];
notas.push(7);

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media.toFixed(1));
*/

// elimine um valor no final da array com pop():
const notas = [10, 7, 9, 5, 8];
notas.pop();

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media.toFixed(1));
