// callback map()
// callback = função dentro de outra função

const notas = [10, 9, 8.5, 7];

// const notasAtualizadas = notas.map(function (nota) { 
//    return nota + 1;
// })

const notasAtualizadas = notas.map((nota) => nota + 1 >= 10 ? 10 : nota + 1);

console.log(notasAtualizadas);