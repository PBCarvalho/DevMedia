const jogos = [
    { id: 1, nome: 'Resident Evil 7', preco: 250 },
    { id: 2, nome: 'God of War', preco: 300 },
    { id: 3, nome: 'Stronghold Warlords', preco: 280 },
  ];
  
  let total = 0;  

  for ( let i = 0; i < jogos.length; i++ ) {
    total += jogos[i].preco;
  }
  
  console.log(total);