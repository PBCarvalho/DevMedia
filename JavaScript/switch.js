let jogo = "Gears of War";
let estudio = "The Coalition";

switch(estudio) {
    case "The Coalition":
    console.log(`O jogo ${jogo} para Xbox foi feito pelo estúdio ${estudio}`);
    break;

    case "Santa Monica":
    console.log(`O jogo ${jogo} para PlayStation foi feito pelo estúdio ${estudio}`);
    break;

    case "Nintendo EAD":
    console.log(`O jogo ${jogo} para Nintendo Switch foi feito pelo estúdio ${estudio}`);
    break;

    default:
    console.log(`Estúdio inválido`);
    break;
}