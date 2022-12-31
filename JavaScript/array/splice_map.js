const diasDaSemana = [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira"
];

diasDaSemana.push("sábado"); //adiciona o "sábado"
diasDaSemana.map((dia)=> console.log(dia));

console.log("");

diasDaSemana.splice(0, 3); // remove o "domingo", "segunda-feira" e "terça-feira"
diasDaSemana.map((dia) => console.log(dia));