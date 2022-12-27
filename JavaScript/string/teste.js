let numeros = [1, 2, 5, 8, 14];

const calcula_media = (numeros) => {
    let total_numeros = numeros.length;
    let soma_numeros = 0;

    for( const numero of numeros) {
        soma_numeros = soma_numeros + numero;
    }

    let media_numeros = soma_numeros / total_numeros;

    return media_numeros;
}

let media = calcula_media(numeros);
console.log("A média dos números é: " + media);