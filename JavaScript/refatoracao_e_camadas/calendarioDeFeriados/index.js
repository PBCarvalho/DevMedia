import retornaProximosFeriados from "./retornaFeriados.js";
import imprimeFeriados from "./imprimeFeriados.js";

console.log('\nOs próxims feriados serão:\n');

let numeroFeriados = 3;

let proximosFeriados = retornaProximosFeriados(numeroFeriados);
imprimeFeriados(proximosFeriados);