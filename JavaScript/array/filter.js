const produtos = [
    { id: 1, nome: 'Açucar', ativo: true, valor: 2.00 },
    { id: 2, nome: 'Álcool 70', ativo: false, valor: 9.95 },
    { id: 3, nome: 'Luvas descartáveis', ativo: false, valor: 2.50 },
    { id: 4, nome: 'Papel toalha', ativo: true, valor: 2.50 },
];

function verificaProdutoAtivo (produto) {
    return produto.ativo == true;
};

const produtosAtivos = produtos.filter(verificaProdutoAtivo);

console.log(produtosAtivos);