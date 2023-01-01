let alunos = [
    { nome: 'Juliana', matricula: 132 },
    { nome: 'Marina', matricula: 245 },
    { nome: 'Gustavo', matricula: 58 },
    { nome: 'Augusto', matricula: 359 },
];

function ordenaMatricula(a, b) {
    return a.matricula - b.matricula;
}

console.log("\nArray antes da ordenação:\n");
console.info(alunos);

alunos.sort(ordenaMatricula);

console.log("\nArray depois da ordenação:\n");
console.info(alunos);