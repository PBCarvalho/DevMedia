import SecaoCapa from "../SecaoCapa";
import SecaoProdutos from "../SecaoProdutos";
import SecaoSobre from "../SecaoSobre";
import SecaoContato from "../SecaoContato";

export default function Conteudo() {
    return (
        <div>
            <SecaoCapa />
            <SecaoProdutos />
            <SecaoSobre />
            <SecaoContato />
        </div>
    );
}