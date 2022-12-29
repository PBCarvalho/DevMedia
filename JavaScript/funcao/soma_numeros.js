let lista_numeros = [20, 3, 5, 10];

const retorna_soma = (lista_numeros) => {
    let soma = 0;

    for (const numero of lista_numeros) {
        soma = numero + soma;
    }

    return soma;
}

let resultado = retorna_soma(lista_numeros);

console.log("A soma dos resultados é igual a : " + resultado);