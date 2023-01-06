import calculaForca from "./calculoFisica.js";

let massa = 20;
let aceleracao = 10;

let forca = calculaForca(massa, aceleracao);

console.log("F = "+ forca);