import readlineSync from 'readline-sync';

let colecao_materias = [
    {id: 1, nome: "Português"},
    {id: 2, nome: "Matemática"},
    {id: 3, nome: "Física"},
    {id: 4, nome: "Geografia"}
];

console.log("\n1 - Português")
console.log("2 - Matemática")
console.log("3 - Física")
console.log("4 - Geografia")

let escolha_materia = readlineSync.question("\nDigite o id da disciplina que deseja: ");

console.log("\nVocê escolheu a matéria: "+colecao_materias[escolha_materia-1].nome);