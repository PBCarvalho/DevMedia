import paises from "./paises.js";
import { retornaPaisesAmericaNorte, retornaPaisesAmericaSul } from "./retornaPaises.js";

let local = 'América do Sul';
let retornaPaises = [];

switch(local) {
    case 'América do Norte':
    retornaPaises = paises.filter(retornaPaisesAmericaNorte);
    break;
    case 'América do Sul':
    retornaPaises = paises.filter(retornaPaisesAmericaSul);
    break;
}

retornaPaises.forEach(pais => {
    console.log(pais.nome);
});