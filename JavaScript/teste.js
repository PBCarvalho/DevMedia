let chuvas_de_meteoros = [
    { nome: 'Alfa Centaurídeos',            declinacao: -59,  intensidade: 'Média'},
    { nome: 'Gama Normídeos',               declinacao: -50,  intensidade: 'Média'},
    { nome: 'Pi Pupídeos',                  declinacao: -45,  intensidade: 'Irregular'},
    { nome: 'Líridas',                      declinacao:  34,  intensidade: 'Forte com meteoros rápidos e persistentes'},
    { nome: 'Eta Aquáridas',                declinacao:  -1,  intensidade: 'Forte com meteoros muito rápidos e de grande comprimento'},
    { nome: 'Eta Líridas',                  declinacao:  44,  intensidade: 'Fraca'},
    { nome: 'Bootídeos de Junho',           declinacao:  48,  intensidade: 'Irregular'},
    { nome: 'Alfa Capricornídeos',          declinacao: -10,  intensidade: 'Fraca'},
    { nome: 'Delta Aquáridas do Sul',       declinacao: -16,  intensidade: 'Forte com meteoros lentos e rasto comprido'},
    { nome: 'Piscis Austrinídeos',          declinacao: -30,  intensidade: 'Média'},
    { nome: 'Perseidas',                    declinacao:  58,  intensidade: 'Forte e muito rápidas'},
    { nome: 'Capa Cignídeos',               declinacao:  59,  intensidade: 'Fraca com velocidades médias e brilhantes'},
    { nome: 'Alfa Aurigídeos',              declinacao:  39,  intensidade: 'Média com meteoros muito rápidos e persistentes'},
    { nome: 'Perseidas de Setembro',        declinacao:  40,  intensidade: 'Média com meteoros rápidos e persistentes'},
    { nome: 'Táuridas do Sul',              declinacao:   9,  intensidade: 'Fraca'},
    { nome: 'Delta Aurigídeos',             declinacao:  44,  intensidade: 'Fraca'},
    { nome: 'Oriónidas',                    declinacao:  16,  intensidade: 'Forte com meteoros rápidos e persistentes'},
    { nome: 'Dracónidas',                   declinacao:  54,  intensidade: 'Irregular'},
    { nome: 'Épsilon Geminídeos',           declinacao:  27,  intensidade: 'Fraca'},
    { nome: 'Leo Minorídeos',               declinacao:  37,  intensidade: 'Fraca'},
    { nome: 'Táuridas do Norte',            declinacao:  22,  intensidade: 'Média com meteoros muito lentos mas brilhantes'},
    { nome: 'Leónidas',                     declinacao:  22,  intensidade: 'Irregular com meteoros muito rápidos, atingindo um pico de 33 em 33 anos'},
    { nome: 'Alfa Monocerotídeos',          declinacao:   1,  intensidade: 'Irregular'},
    { nome: 'Monocerotídeos',               declinacao:   8,  intensidade: 'Fraca'},
    { nome: 'Fenícidas',                    declinacao: -53,  intensidade: 'Irregular'},
    { nome: 'Quadrântidas',                 declinacao:  49,  intensidade: 'Forte com velocidades médias'},
    { nome: 'Pupidas-Velidas',              declinacao: -45,  intensidade: 'Média'},
    { nome: 'Sigma Hidrídeos',              declinacao:   2,  intensidade: 'Fraca'},
    { nome: 'Leo Minorídeos de Dezembro',   declinacao:  30,  intensidade: 'Média'},
    { nome: 'Gemínidas',                    declinacao:  33,  intensidade: 'Forte com velocidades médias, meteoros brancos e numerosos'},
    { nome: 'Coma Berenicídeos',            declinacao:  18,  intensidade: 'Fraca'},
    { nome: 'Úrsidas',                      declinacao:  76,  intensidade: 'Média'},
];

for (let chuva of chuvas_de_meteoros) {

    console.log(chuva.nome);
    console.log(chuva.declinacao);
    console.log("\n")
}