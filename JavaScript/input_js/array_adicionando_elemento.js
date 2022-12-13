import entradaDados from "readline-sync";
 
let alunos = [
    'Breno',
    'Daiane',
    'Peterson'
];

console.log(alunos);
//array -> adicionando elemento 
let novos_alunos = [
    'Brenda',
    'Ilana',
    'Priscila'
];

alunos[3] = novos_alunos[0];
alunos[4] = novos_alunos[1];
alunos[5] = novos_alunos[2];

console.log(alunos);
console.log(alunos.length);