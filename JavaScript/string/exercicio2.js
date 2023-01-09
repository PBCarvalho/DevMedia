let frase = "Estou aprendendo JavaScript na DevMedia";

let palavra = "";

let posicao_inicio = 16;
let posicao_fim = 27;

for(let i = 0; i < frase.length; i++) {
    if(i >= posicao_inicio && i <= posicao_fim) {
        palavra += frase.charAt(i);
    }
}

console.log(palavra)