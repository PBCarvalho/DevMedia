import entradaDados from 'readline-sync';

let nome = entradaDados.question('Digite seu nome: ');
let idade = entradaDados.question('Digite sua idade ');
console.log("Olá, "+nome);
console.log("Você tem "+idade+" anos de idade.");