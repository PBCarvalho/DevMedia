const carro = [
    { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
    { marca: 'GM', modelo: 'Onix', anoFabricacao: 2018 },
    { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018 },
    { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 }
];

function retornaCarrosFiat (carro) {
    return carro.marca == 'Fiat';
};

const carrosFiat = carro.filter(retornaCarrosFiat);

console.log(carrosFiat);