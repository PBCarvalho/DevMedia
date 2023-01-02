
const filmes = [
    { nome: 'O Poderoso Chefão', anoLancamento: 1972, gênero: 'Policial' },
    { nome: 'A Lista de Schindler', anoLancamento: 2019, gênero: 'Guerra' },
    { nome: 'Um Sonho de Liberdade', anoLancamento: 1995, gênero: 'Drama' },
    { nome: 'O Senhor dos Anéis - O Retorno do Rei', anoLancamento: 2003, gênero: 'Aventura' },
    { nome: 'Vingadores: Ultimato', anoLancamento: 2019, gênero: 'Aventura' },
  ];
  
  const novoFilme = {
    nome: 'IT - CAPÍTULO 2',
    anoLancamento: 2019,
    gênero: 'Terror'
  };

filmes.push(novoFilme);
filmes.shift();

console.log(filmes);