function retornaStatusTemperaturaFahrenheit(fahrenheit) {
    let status;
    
    if(fahrenheit >= 99){
        status = 'Temperatura alta';
    } else {
        status = 'Temperatura baixa';
    }

    return status;
}

export default retornaStatusTemperaturaFahrenheit;