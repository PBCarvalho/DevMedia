const usuario = 'Fabiana';
const limiteChar = 10;

const validaCampo = (usuario.length <= limiteChar) && true;

if (validaCampo) {
    console.log('Dados válidos');
} else {
  console.log('O limite de caracteres é:' + limiteChar);
}