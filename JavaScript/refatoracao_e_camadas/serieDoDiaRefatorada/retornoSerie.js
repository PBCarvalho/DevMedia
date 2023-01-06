import retornaDiaSemana from "./diaSemana.js";

let listaSeries = ['Smallville', 'WandaVision', 'Loki', 'Gothan', 'Arrow', 'Flash', 'DC Legends'];

function retornaNomeSerie(dia)
{
    return listaSeries[dia];
}

function retornaSerieDia()
{
    let diaSemana = retornaDiaSemana();
    let serie = retornaNomeSerie(diaSemana);

    return serie;
}

export default retornaSerieDia;