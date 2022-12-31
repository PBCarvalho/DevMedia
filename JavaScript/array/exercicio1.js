const produto = {
    nome: 'New Super Mario Bros', qnt: 1, valor: 250,
};

const carrinho = [
    { nome: 'The Legend of Zelda', qnt: 1, valor: 250 },
    { nome: 'Super Mario Kart 8', qnt: 1, valor: 300 },
];

// Insere o produto no carrinho
console.log("Compras no carrinho 1")

carrinho.push(produto);
carrinho.map((exibir) => console.log(exibir));

// Remove o item "Super Mario Kart 8"
console.log("Compras no carrinho 2")

carrinho.splice(1,1);
carrinho.map((exibir) => console.log(exibir));

//Remove todos os elementos do carrinho
console.log("Compras no carrinho 3")

const totalElementos = carrinho.length;
carrinho.splice(0, totalElementos);
carrinho.map((exibir) => console.log(exibir));