import {soma_numeros, subtracao_numeros} from './funcao/funcoes.js';

let numero_1 = 8;
let numero_2 = 4;

const soma = soma_numeros(numero_1, numero_2);
const subtracao = subtracao_numeros(numero_1, numero_2);

console.log("A soma entre os números é: " + soma);
console.log("A subtração entre os números é: " + subtracao);