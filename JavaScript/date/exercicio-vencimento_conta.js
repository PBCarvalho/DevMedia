const hoje = new Date();
const vencimento = new Date('2020-07-02');

let mensagem = "";

if (hoje.getTime() > vencimento.getTime()) {
    mensagem = "Esta conta já venceu.";
} else {
    mensagem = "Ufa, ainda não venceu.";
}

console.log(mensagem);