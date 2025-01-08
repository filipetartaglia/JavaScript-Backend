/* ex 1

function juntarSalas() {
    const sala1 = ['Filipe', 'Marcelo', 'David'];
    const sala2 = ['Renata', 'julia', 'Rita'];
    const lista = sala1.concat(sala2);

    return lista;   
}

console.log(juntarSalas());
*/

/* ex 2
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const parteNumeros = numeros.slice(3, 7);

console.log(numeros);
console.log(parteNumeros);
*/

/* ex 3
const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];
frutas.splice(2, 2, 'Kiwi', 'Pêssego');

console.log(frutas);
*/

/* ex 4
const menuPrincipal = ['Arroz', 'Feijão', 'Frango', 'salada'];
const menuSobremesas = ['Fruta', 'pavê', 'pudim'];
const menuCompleto = menuPrincipal.concat(menuSobremesas);

console.log(menuCompleto);
*/

let matriz = [];
let valorInicial = 1;

for (let i = 0; i < 3; i++) {
  let linha = [];
  for (let j = 0; j < 3; j++) {
    linha.push(valorInicial++);
  }
  matriz.push(linha);
}

console.log('Matriz de duas dimensões:');
console.log(matriz);
matriz.forEach(row => console.log(row));

console.log(`Na segunda linha e terceira coluna temos o: ${matriz[1][2]}`);

matriz[2][1] = 15;
console.log(matriz);