const itensOpcionais = [
  { nome: 'Pré som', valor: 800 },
  { nome: 'Conta-giros', valor: 500 },
  { nome: 'Desembaçador traseiro', valor: 1000 },
  { nome: 'Ar quente', valor: 1800 },
];

const itensBaratos = itensOpcionais.filter( (item) => item.valor < 1000 );

itensBaratos.forEach( ( item ) => {
  console.log( item.nome + ' - ' + item.valor );
});