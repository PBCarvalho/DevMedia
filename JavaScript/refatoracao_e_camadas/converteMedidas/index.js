import { centimetrosParaMetros, metrosParaCentimetros } from "./converteMedidas.js";

let convertePara = 'c';
let medida = 250;

if(convertePara == 'm')
{
    let metros = centimetrosParaMetros(medida);

    console.log(metros + 'm');
}
else
{
    let centimetros = metrosParaCentimetros(medida);

    console.log(centimetros + 'cm');
}