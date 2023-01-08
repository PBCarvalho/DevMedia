import series from "./series.js";
import { retornaSeriesDisney, retornaSeriesHBO } from "./retornaSeries.js";

let servico = 'Disney';
let retornaSeries = [];

switch(servico)
{
    case 'Disney':
    retornaSeries = series.filter(retornaSeriesDisney);
    break;
    case 'HBO':
    retornaSeries = series.filter(retornaSeriesHBO);
    break;
}

retornaSeries.forEach(serie => {
    console.log(serie.nome);
})