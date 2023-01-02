const alunos = [
    { nome: "José", av1: 10, av2: 5, av3: 7 },
    { nome: "Ana", av1: 1, av2: 10, av3: 10 },
    { nome: "Fernando", av1: 0, av2: 5, av3: 7 },
    { nome: "Diego", av1: 10, av2: 2, av3: 8 },
  ];
  
  const aprovados = alunos.filter ( aluno => {
    const media = (aluno.av1 + aluno.av2 + aluno.av3) / 3;
  
    return (media >= 7);
  });
  
  aprovados.forEach( (aluno) => console.log(aluno.nome) );