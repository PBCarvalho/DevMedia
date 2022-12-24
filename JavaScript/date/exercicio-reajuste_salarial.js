//Crie um código que verifica o tipo do usuário e imprima o salário reajustado.
//Defina um valor padrão para os usuários que não são nem Diretor nem Gerente.

const tipoUsuario = 'Supervisor';
let salario = 2500;

switch (tipoUsuario) {
    case 'Diretor':
    salario = salario * 1.2;
    break;
    case 'Gerente':
    salario = salario * 1.15;
    break;
    default:
    salario = salario * 1.1;
    break;
}
console.log("Salário: R$" + salario.toFixed(2));