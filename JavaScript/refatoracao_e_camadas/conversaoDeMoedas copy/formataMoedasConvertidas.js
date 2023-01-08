function formataDolar(dolar)
{
    let valor_formatado = '$'+dolar;

    return valor_formatado;
}

function formataReal(real)
{
    let valor_formatado = 'R$'+real;

    return valor_formatado;
}

function formataEuro(euro)
{
    let valor_formatado = '€'+euro;

    return valor_formatado;
}

export {formataDolar, formataReal, formataEuro};