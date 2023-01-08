const verificaMaiorIdade = (idade) => {
    let resultado = (idade > 18) ? 'Maior de idade' : 'Menor de idade';

    return resultado;
}

let idade = 19;

console.log(verificaMaiorIdade(idade));