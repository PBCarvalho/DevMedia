const carros = [
    { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
    { marca: 'GM', modelo: 'Onix', anoFabricacao: 2018 },
    { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018 },
    { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 },
  ];
  const marca = "Ford";
  const modelo = "KA+";
  
  const carrosEncontrados = carros.filter ( (carro) => {
    return ( carro.marca == marca && carro.modelo == modelo );
  });

  console.log(carrosEncontrados);