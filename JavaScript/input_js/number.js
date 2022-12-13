import entradaDados from 'readline-sync';

console.log("=== Calculadora entre x e y ===\n");

let x = entradaDados.question("Informe o valor de x: ")
let y = entradaDados.question("Informe o valor de y: ")

console.log("\nSoma");
let soma = Number(x) + Number(y);
console.log(x+" + "+y+" = "+soma);

console.log("\nSubtração");
let subtracao = x - y;
console.log(x+" - "+y+" = "+subtracao);

console.log("\nMultiplicação");
let multiplicacao = x * y;
console.log(x+" * "+y+" = "+multiplicacao);

console.log("\nDivisão");
let divisao = x / y;
console.log(x+" / "+y+" = "+divisao);

console.log("\nResto da divisão");
let resto = x % y;
console.log(x+" % "+y+" = "+resto);