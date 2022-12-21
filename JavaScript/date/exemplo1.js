//Sem parâmetro: Data atual
const hoje = new Date();

//Com parâmetro: String com a data
const exemplo1 = new Date("2022-12-21");
const exemplo2 = new Date("2022-12-21 11:25:00");

// Com parâmetro: Um número para ano, mê, dia, hora, minuto, segundo e milissegundo
const exemplo3 = new Date(2022, 12, 21, 11, 26, 00);

console.log(hoje.toString());
console.log("\n");
console.log(hoje.toUTCString());
console.log("\n");
console.log(exemplo1);
console.log("\n");
console.log(exemplo2);
console.log("\n");
console.log(exemplo3);