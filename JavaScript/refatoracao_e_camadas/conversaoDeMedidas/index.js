import validaCentimetro from "./validaMedidas.js";
import converteParaMetros from "./converteMedidas.js";

let cm = 250;

if(validaCentimetro(cm))
{
    let m = converteParaMetros(cm);
    console.log(m);
}
else
{
    console.log("O valor em centímetros deve ser maior que 0");
}