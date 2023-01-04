const valida_senha = (senha) => {

    if (senha.length >= 10) {
        return true;
    } else {
        return false;
    }
    
}

export default valida_senha;