function somarValor(total, itemCarrinho)
{
    const valorTotal = itemCarrinho.qnt * itemCarrinho.valor;

    return total + valorTotal;
}

export default somarValor;