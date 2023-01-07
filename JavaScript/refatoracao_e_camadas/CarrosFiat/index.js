import carros from "./dadosCarros.js";
import retornarCarroFiat from "./retornaCarros.js";

const carroFiat = carros.filter(retornarCarroFiat);

console.log(carroFiat);