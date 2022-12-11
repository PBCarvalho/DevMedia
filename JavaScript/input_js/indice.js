import entradaDados from 'readline-sync';

let pessoa = [
    { nome: 'Gabriel', idade: 27},
    { nome: 'Julia', idade: 22 },
    { nome: 'Marcela', idade: 24 }
];

let indice = entradaDados.question("Digite o índice do objeto desejado: ");

console.log("Nome: "+pessoa[indice].nome);
console.log("Idade: "+pessoa[indice].idade);