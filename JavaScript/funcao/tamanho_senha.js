function verifica_tamanho_senha(senha) {
    if(senha_cadastro.length >= 10) {
        return true;
    }
}

let senha_cadastro = "minha_senha";

if (verifica_tamanho_senha()){
    console.log("A senha possui o mínimo de 10 caracteres");
} else {
    console.log("A senha não possui o mínimo de 10 caracteres");
}