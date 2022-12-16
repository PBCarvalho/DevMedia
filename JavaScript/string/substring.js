console.log("Exemplo .1")
let frase = "Estou aprendendo JavaScript na DevMedia";

let posicao_inicio = 16;
let posicao_fim = 27;

let palavra = frase.substring(posicao_inicio, posicao_fim);

console.log(palavra.trim()); //o trim remove os espaços em branco

console.log("\nExemplo .2")
let nome = "Peterson";
let tecnologia = "JavaScript";

frase = `O programador ${nome}, domina ${tecnologia}`;

console.log(frase);