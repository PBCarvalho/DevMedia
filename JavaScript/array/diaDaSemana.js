function retornaDiaSemana()
{
    let diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"];
    let data = new Date();
    let dia = data.getDay();

    return diasDaSemana[dia];
}

let semana = retornaDiaSemana();

console.log("Hoje é "+semana);

let teste = typeof(semana);

console.log(teste);