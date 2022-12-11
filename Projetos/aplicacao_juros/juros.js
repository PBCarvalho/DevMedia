import entradaDados from 'readline-sync';

console.log("Aplicação de Juros: \n");

let juros;

let divida = entradaDados.question("Informe o valor devido: R$ ");

if(divida > 0){

    let diasAtraso = entradaDados.question("Informe quantos dias se passaram desde o vencimento do boleto: ");
    
    if(diasAtraso > 0){

        if(diasAtraso > 15){
            juros = 10;            
        }
        else{
            juros = 5;
        }

        divida = Number(divida);
        diasAtraso = Number(diasAtraso);

        let valorJuros = (divida / 100) * juros;
        let totalDivida = Number(divida) + Number(valorJuros);

        console.log("\nValor original da dívida: R$ "+divida);
        console.log("Dias atrasados: "+diasAtraso);
        console.log("Taxa de Juros: "+juros+"%");
        console.log("Valor total com juros: R$ "+totalDivida);

    }
    else {
        console.log("Você está em dia!");
    }
}
else {
    console.log("O valor da dívida deve ser maior que zero!");
}