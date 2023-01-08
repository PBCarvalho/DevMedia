import itensCarrinho from "./dadosCarrinho.js";
import somarValor from "./calculaValorCompra.js";

const valorAPagar = itensCarrinho.reduce(somarValor, 0);

console.log(valorAPagar);