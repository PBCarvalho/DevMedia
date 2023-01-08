let alunos = [
    {nome: 'Malu', idade: 17},
    {nome: 'Luana',idade: 17},
    {nome: 'Gustavo', idade: 18},
    {nome: 'Julia', idade: 18}
];

function verificaAlunosMaiores(aluno) {
    return (aluno.idade > 17);
}

function filtraAlunosMaiores(alunos) {
    let alunosFiltro = alunos(verificaAlunosMaiores);

    return alunosFiltro;
}

function retornaNomesAlunos(alunos) {
    let nomes = alunos.forEach(aluno);

    return nomes;
}