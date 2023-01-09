function verificaAlunosMaiores(aluno)
{
    return (aluno.idade > 18);
}

function filtraAlunosMaiores(alunos)
{
    let alunosFiltro = alunos.filter(verificaAlunosMaiores)
    
    return alunosFiltro;
}

function retornaNomesAlunos(alunos)
{
    let nomes = alunos.map(aluno => aluno.nome);

    return nomes;
}

function imprimeNomesAlunos(arrayNomes)
{
    arrayNomes.forEach(nome => {
        console.log(nome);
    });
}

export {filtraAlunosMaiores, retornaNomesAlunos, imprimeNomesAlunos};