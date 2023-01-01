const instrumentos = [
    { nome: 'Flauta Transversa', tipo: 'Sopro', valor: 900 },
    { nome: 'Guitarra flying v', tipo: 'Corda', valor: 2500 },
    { nome: 'Baixo', tipo: 'Corda', valor: 3000 },
    { nome: 'Bateria', tipo: 'Percursão', valor: 2800 },
    { nome: 'Clarinete', tipo: 'Sopro', valor: 1000},
  ];
  
  const sopro = instrumentos.filter( instrumento => instrumento.tipo == 'Sopro');
  const qntSopro = sopro.length;
  
  let mediaSopro = sopro.reduce( (total, instrumento) => {
    return total + instrumento.valor;
  }, 0 );
  
  mediaSopro = mediaSopro / qntSopro;
  
  console.log(mediaSopro);