function imprimeVotosCandidatos(eleicao)
{
    eleicao.forEach(voto => {
        console.log(voto.nome +' - '+ voto.votos);
    });
}

function imprimeCandidatoEleito(eleicao)
{
    let votosA = eleicao[0].votos;
    let votosB = eleicao[1].votos;

    let eleito = (votosA > votosB) ? 'Candidato A' : 'Candidato B';

    console.log(eleito);
}

export {imprimeVotosCandidatos, imprimeCandidatoEleito};