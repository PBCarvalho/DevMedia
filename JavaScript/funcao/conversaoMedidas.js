const converteCentimetroParaMetro = (centimetro) => (centimetro / 100);

const converteMetroParaCentimetro = (metro) => (metro * 100);

const converteMetroParaQuilometro = (metro) => (metro / 1000);

let centimetro = converteCentimetroParaMetro(300);
let metro = converteMetroParaCentimetro(250);
let quilometro = converteMetroParaQuilometro(300);

console.log("Centimetro: "+centimetro);
console.log("Metro: "+metro);
console.log("Quilometro: "+quilometro);