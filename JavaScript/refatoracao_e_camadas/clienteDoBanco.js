//Aplicação feita para gerenciar o saldo de clientes de um banco.
//Apenas clientes com mais de 1000 de saldo serão retornados em maiúsculo.

let contas = [
    {cliente: "Marcos", saldo: 1200},
    {cliente: "Gilberto", saldo: 980},
    {cliente: "Marceli", saldo: 1400},
    {cliente: "Julia", saldo: 875},
    {cliente: "Larissa", saldo: 699},
    {cliente: "Alberto", saldo: 1005}
];

function verificaClientesFiltrados(cliente)
{
    return (cliente.saldo > 1000);
}

let clientesFiltrados = contas.filter(verificaClientesFiltrados);

clientesFiltrados.forEach(cliente => {
    console.log(cliente.cliente.toUpperCase());
});