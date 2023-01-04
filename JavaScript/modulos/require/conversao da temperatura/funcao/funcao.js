const celsius_fahrenheit = (temperatura_celsius) => {

    let temperatura_fahrenheit = temperatura_celsius * 1.8 + 32;
    return temperatura_fahrenheit;
}

module.exports = {
    celsius_fahrenheit
}