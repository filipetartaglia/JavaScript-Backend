/* ex1

function diversosArrays(arr1, arr2, arr3) {
    
    const todosArrays = [...arr1, ...arr2, ...arr3];

    console.log(todosArrays);
}

diversosArrays(['Filipe', 'Marcelo'], ['Julia', 'Renata'], ['David', 'Rita']);
*/

/* ex2
const valores = [10, 9.5, 5, 2];

const somaValores = valores.reduce((acc, valorAtual) => {
    return acc + valorAtual;
});

console.log(somaValores);
*/

/* ex3
const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];

const todasAsCores = [...new Set(coresLista1.concat(coresLista2))];

console.log(todasAsCores);
*/

/* ex4
function numerosPar(arr) {
    const apenasNumerosPar = arr.filter((num) => num % 2 == 0);

    console.log(apenasNumerosPar);
}

const numeros = [10, 5, 3, 6, 7, 2, 8, 4];

numerosPar(numeros);
*/

/* ex5
function multiploArray(arr) {
    const arrayMultiploDe3 = arr.filter((num) => num % 3 == 0 && num > 5);

    console.log(arrayMultiploDe3);
    
}

const numeros = [12, 5, 67, 90, 3, 1, 9, 24];

multiploArray(numeros);
*/
 
// ex6
function somaArray(arr) {
    const arraySomado = arr.reduce((acc, valorAtual) => acc + valorAtual);

    console.log(arraySomado);
    
}

const numeros = [1, 2, 3, 4];

somaArray(numeros);