const funcao = require('./funcao/funcao.js')

let temperatura_celsius = 12;
const temperatura_fahrenheit = funcao.celsius_fahrenheit(temperatura_celsius);

console.log(temperatura_celsius + "°C equivalem a " + temperatura_fahrenheit + "°F");