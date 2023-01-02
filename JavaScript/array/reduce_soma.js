const itensOpcionais = [
    { nome: 'Pré som', valor: 800 },
    { nome: 'Conta-giros', valor: 500 },
    { nome: 'Desembaçador traseiro', valor: 1000 },
    { nome: 'Ar quente', valor: 1800 },
  ];
  
  const valorTotal = itensOpcionais.reduce( ( total, item ) => {
    return total + item.valor;
  }, 0);
  
  console.log('R$ ' + valorTotal.toFixed(2));