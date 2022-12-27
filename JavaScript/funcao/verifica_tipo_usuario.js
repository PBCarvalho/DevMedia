const verifica_tipo_usuario = (tipo) => {
    switch(tipo) {
        case 1:
            return 'Comum';
        case 2:
            return 'Editor';
        case 3:
            return 'Administrador';
        default:
            return 'Tipo desconhecido';
    }
}

let tipo_usuario = verifica_tipo_usuario(3);

console.log(tipo_usuario);