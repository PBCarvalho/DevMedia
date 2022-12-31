const diasDaSemana = [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sabado"
];

diasDaSemana.shift(); //remove o primeiro elemento do array
diasDaSemana.pop(); //remove o ultimo elemento do array
diasDaSemana.map((dia) => console.log(dia));