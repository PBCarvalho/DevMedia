const itensCarrinho = [
    { id: 1, nome: 'Açucar', qnt: 2, valor: 2.00 },
    { id: 2, nome: 'Álcool 70', qnt: 3, valor: 9.95 },
    { id: 3, nome: 'Luvas descartáveis', qnt: 50, valor: 2.50 },
    { id: 4, nome: 'Papel toalha', qnt: 1, valor: 2.00 },
  ];
  
  const totalAPagar = itensCarrinho.reduce( function(total, itemCarrinho) {
    const valorItem = itemCarrinho.qnt * itemCarrinho.valor;
  
    return total + valorItem;
  }, 0);
  
  
  console.log(totalAPagar);