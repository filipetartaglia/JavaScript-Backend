const notaFInal = 6;
const faltas = 5;
const advertencias = 0;

if (notaFInal < 7 && faltas > 4) {
    console.log('Reprovado!');
} else {
    console.log('Aprovado!');
}

if (faltas >= 2 && !advertencias) {
    console.log('Recebeu o bônus!');
} else {
    console.log('Não recebeu o bônus');
}