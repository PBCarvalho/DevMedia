function retornaPaisesAmericaNorte(pais)
{
    return (pais.local == 'América do Norte');
}

function retornaPaisesAmericaSul(pais)
{
    return (pais.local == 'América do Sul');
}

export {retornaPaisesAmericaNorte, retornaPaisesAmericaSul};