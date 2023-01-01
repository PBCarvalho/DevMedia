const jogos = [
    { id: 1, nome: 'Galaxian', anoLancamento: 1979 },
    { id: 2, nome: 'Donkey Kong', anoLancamento: 1981 },
    { id: 3, nome: 'Ms. Pac-Man', anoLancamento: 1981 },
    { id: 4, nome: 'Asteroids', anoLancamento: 1979 },
];

function retornaNomeJogos (nome, jogo) {
    return nome + jogo.nome + ', ';
}

const nomesJogos = jogos.reduce(retornaNomeJogos, '');

console.log(nomesJogos.slice(0, -2));