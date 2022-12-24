const produtos = [
    'Smasung', 'iPhone', 'SSD'
]

console.log("Opção - 1");
for (let i = 0; i < produtos.length; i++) {
    console.log(produtos[i]);
}
console.log("\nOpção - 2");
for (const produto of produtos) {
    console.log(produto);
}
console.log("\nOpção - 3");
for (const index in produtos) {
    console.log(index, produtos[index]);
}