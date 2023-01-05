import {calculaIMC, retornaStatusIMC} from "./calculoIMC.js";
import {validaPeso, validaAltura} from "./validacaoPesoAltura.js";

let peso = 70;
let altura = 1.75;

let verificaPesoValido = validaPeso(peso);
let verificaAlturaValida = validaAltura(altura);

if (verificaPesoValido && verificaAlturaValida) {
    let resultado = calculaIMC(peso, altura);
    let statusIMC = retornaStatusIMC(resultado);

    console.log("Seu IMC é " +resultado+ " e você está " +statusIMC);
} else {
    console.log("Peso e altura devem ser maiores que zero");
}
