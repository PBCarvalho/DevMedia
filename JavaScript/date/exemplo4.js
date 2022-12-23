const dataAtual = new Date();

const MesAno = {
    month: 'numeric',
    year: 'numeric',
}
console.log(dataAtual.toLocaleString('en-US', MesAno));
//Imprime apenas "o mês e ano ex: 12/2022"

const SemanaHora = {
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
}
console.log(dataAtual.toLocaleString('en-US', SemanaHora));
//Imprime apenas "mê e horário ex: Friday 1:25 PM"

console.log(dataAtual.toLocaleString('pt-BR', SemanaHora));
//Imprime apenas "mê e horário ex: sexta-feira, 13:27"