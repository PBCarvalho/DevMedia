function validaCentimetro(centimetros)
{
    let cmValido = false;

    if(centimetros > 0)
    {
        cmValido = true;
    }

    return cmValido;
}

export default validaCentimetro;