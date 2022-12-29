let mes = 0;
let nome_mes = ''

const retorna_mes = (codigo) => {

    let nome = '';

    switch (codigo) {
        case 1:
          nome = 'Janeiro';
          break;
        case 2:
          nome = 'Fevereiro';
          break;
        case 3:
          nome = 'Março';
          break;
        case 4:
          nome = 'Abril';
          break;
        case 5:
          nome = 'Maio';
          break;
        case 6:
          nome = 'Junho';
          break;
        case 7:
          nome = 'Julho';
          break;
        case 8:
          nome = 'Agosto';
          break;
        case 9:
          nome = 'Setembro';
          break;
        case 10:
          nome = 'Outubro';
          break;
        case 11:
          nome = 'Novembro';
          break;
        case 12:
          nome = 'Dezembro';
          break;
        default:
          nome = 'Mês inexistente'
          break;
    }

    return nome;
}

nome_mes = retorna_mes(mes);

console.log(nome_mes);