function retornaRestaurantesRJ(restaurante)
{
    return (restaurante.estado == 'RJ');
}

function retornaRestaurantesSP(restaurante)
{
    return (restaurante.estado == 'SP');
}

export { retornaRestaurantesRJ, retornaRestaurantesSP };