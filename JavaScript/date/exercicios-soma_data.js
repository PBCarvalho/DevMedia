const totalAcertos = 4;
const primeiroAcerto = new Date('2020/10/05');

let index = 0;

do {
    console.log( primeiroAcerto.toDateString() );

    let dia = primeiroAcerto.getDate();
    dia = primeiroAcerto.setDate(primeiroAcerto.getDate() + 1);

    index++;
} while (index < totalAcertos);