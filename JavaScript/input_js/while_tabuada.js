import entradaDados from 'readline-sync';

console.log("== TABUADA ==\n");

let contador = 0;
let numero = entradaDados.question("Informe um número: ");

while(contador <= 10)
{
    let resultado = numero * contador;

    console.log(numero + " x " + contador + " = " + resultado );

    contador++;
}