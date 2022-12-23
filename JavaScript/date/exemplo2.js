const dataAtual = new Date();
const dataPostagem = new Date('2020-11-11T00:00');

console.log("Ano: " + dataAtual.getFullYear());
console.log("Mês: " + dataAtual.getMonth());
console.log("Dia da semana (Domingo = 0 a Sábado = 6): " + dataAtual.getDay());
console.log("Dia: " + dataAtual.getDate());

//Pegando o timestamp das datas
const timeAtual = dataAtual.getTime();
const timePostagem = dataPostagem.getTime();

//Verifica a diferênça em milissegundos
const diferenca = timeAtual - timePostagem;

//Convertendo em horas
const segundos = diferenca / 1000;
const minutos = segundos / 60;
const horas = minutos / 60;

//Exibindo a diferênça
console.log(horas);