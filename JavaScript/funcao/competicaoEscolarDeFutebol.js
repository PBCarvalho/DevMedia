let tabela = [
    {time: "Azul", pontos: 46},
    {time: "Amarelo", pontos: 39},
    {time: "Verde", pontos: 52},
    {time: "Rosa", pontos: 49},
    {time: "Laranja", pontos: 37},
    {time: "Roxo", pontos: 23}
];

function verificaTimesClassificados(time)
{
    return (time.pontos >= 40);
}

let timesClassificados = tabela.filter(verificaTimesClassificados);

timesClassificados.forEach(time => {
    console.log(time.time.toUpperCase());
})