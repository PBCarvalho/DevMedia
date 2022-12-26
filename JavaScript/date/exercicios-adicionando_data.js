const totalAcertos = 4;
const primeiroAcerto = new Date('2020/10/05');

let index = 0;

do {
  console.log(primeiroAcerto.toDateString());

  const dia = primeiroAcerto.getDate();
  primeiroAcerto.setDate(dia + 1);
  
  index++
} while (index < totalAcertos);