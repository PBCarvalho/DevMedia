let valor_produto = 500;
let total_parcelas = 4;

for(let contador = 1; contador <= total_parcelas; contador++)
{    
    let valor_parcela = valor_produto / contador;
    console.log("Nº de parcelas: " +contador+" - valor da parcela: R$ " +valor_parcela.toFixed(2));
}