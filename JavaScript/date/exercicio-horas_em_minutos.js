const hoje = new Date();
const diferencaHoras = hoje.getTimezoneOffset() / 60;

console.log('Diferença de horário: ' + diferencaHoras + ' horas');