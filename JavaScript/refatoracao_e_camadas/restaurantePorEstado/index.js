import restaurantes from "./restaurante.js";
import { retornaRestaurantesRJ, retornaRestaurantesSP } from "./retornaRestaurante.js";

let estado = 'RJ';

let retornaRestaurantes;

switch(estado)
{
    case 'RJ':
        retornaRestaurantes = restaurantes.filter(retornaRestaurantesRJ);
        break;

    case 'SP':
        retornaRestaurantes = restaurantes.filter(retornaRestaurantesSP);
        break;
}

retornaRestaurantes.forEach(restaurante => {
    console.log(restaurante.nome);
});