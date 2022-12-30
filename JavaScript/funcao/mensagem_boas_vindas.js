const mensagem_boas_vindas = (nome) => {

    let mensagem = "Seja bem-vindo(a) " + nome + "!";

    return mensagem;
}

let mensagem_usuario = mensagem_boas_vindas("Samantha");

console.log(mensagem_usuario);