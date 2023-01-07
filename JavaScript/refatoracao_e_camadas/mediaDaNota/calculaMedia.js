import notasAluno from "./dadosAluno.js";

function somaNotas (total, notaAluno)
{
    const valorTotal = total + notaAluno.nota;

    return valorTotal;
}

function calculaMedia()
{
    let total = notasAluno.reduce(somaNotas, 0);
    let media = total / notasAluno.length;

    return media;
}

export { calculaMedia };