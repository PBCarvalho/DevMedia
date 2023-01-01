const numeros = [10, 1, 2];

console.log("\nArray antes da ordenação:\n");
console.info(numeros);

function ordenaNumeros(a, b) {
    console.log("A: "+a);
    console.log("B: "+b);
    console.log("");
    return a - b;
}


console.log("\nParâmetros A e B");
numeros.sort(ordenaNumeros);

console.info(numeros);
console.log("\n");