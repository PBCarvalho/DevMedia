function retornaSeriDia()
{
    let data = new Date();
    let diaSemana = data.getDay();
    let serie = ['Smallville', 'WandaVision', 'Loki', 'Gothan', 'Arrow', 'Flash', 'DC Legends'];

    return serie[diaSemana];
}

export default retornaSeriDia;