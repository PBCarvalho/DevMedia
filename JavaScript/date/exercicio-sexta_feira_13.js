const dataAtual = new Date();

const diaSemana = dataAtual.getDay();
const diaMes = dataAtual.getDate();

console.log(diaSemana);
console.log(diaMes);

if (diaSemana === 5 && diaMes === 13) {
    console.log('Cuidado! Hoje é sexta-feira 13');
} else if (diaSemana === 5) {
    console.log('Sextou!!!');
}