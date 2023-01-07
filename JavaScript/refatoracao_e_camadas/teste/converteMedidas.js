function centimetrosParaMetros(centimetros)
{
    let metros = centimetros / 100;

    return metros;
}

function metrosParaCentimetros(metros)
{
    let centimetros = metros * 100;

    return centimetros;
}

export {centimetrosParaMetros, metrosParaCentimetros};