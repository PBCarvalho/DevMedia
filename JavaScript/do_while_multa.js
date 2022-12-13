let valor_mensalidade = 100;
let taxa_multa = 0.02;
let total_dias = 10;
let contador = 1;

do{
    let dias_atraso = contador;

    let valor_multa = valor_mensalidade * taxa_multa * dias_atraso;

    let nova_mensalidade = valor_mensalidade + valor_multa;

    console.log("Dia(s) de atraso: " + dias_atraso + " - mensalidade atualizada: R$ " + nova_mensalidade + ",00");

    contador++
} while(contador < total_dias);