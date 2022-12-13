let notas_bimestre = [
    7, 6, 8, 5
];

let total_notas = notas_bimestre.length;
//acessando as notas do array
let soma_notas = notas_bimestre[0] + notas_bimestre[1] + notas_bimestre[2] + notas_bimestre[3];

let media_aluno = soma_notas / total_notas;

console.log("Média do aluno: " + media_aluno);