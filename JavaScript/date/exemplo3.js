const dataAtual = new Date();

console.log(dataAtual.getTime()); //milissegundos se passaram desde "1970-01-0 00:00:00" até "2022-12-22 18:28:00"
console.log(dataAtual.getTimezoneOffset()); //diferença de fuso horário
console.log(dataAtual.valueOf()); //valor primitivo

console.log(dataAtual.toDateString()) //string com a data
console.log(dataAtual.toTimeString()); //string com o tempo
console.log(dataAtual.toISOString()); //string com formato universal (ISO 8601)
console.log(dataAtual.toLocaleString()); //string com a data e o tempo
console.log(dataAtual.toLocaleDateString()); //string com data apenas
console.log(dataAtual.toLocaleTimeString()); //string com o tempo apenas