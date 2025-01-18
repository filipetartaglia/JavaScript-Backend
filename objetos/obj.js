const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript'
  }

console.log(`O nome do estudante é: ${estudante.nome}`);
console.log(`Os três primeiros digitos do cpf é: ${estudante.cpf.substring(0, 3)}`); // Usamos a substring(inicioIndes, fimIndex), para ditar até onde vai a string