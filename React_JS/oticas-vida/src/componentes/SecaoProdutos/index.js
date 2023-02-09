import './estilo.css'

export default function SecaoProdutos() {
    return (
        <section id="produtos" className="secao-produtos">
            <div className="limitar-secao">
                <h3 className="subtitulo">Nossos Produtos</h3>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculinoas, femininos e infantil.</p>
                <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
                <div className="container-produtos">
                    <div className="box-produto">
                        <h4>Óculos de grau</h4>
                        <img src="./assets/oculos01.png" alt="Óculos de grau feminino" />
                        <p>R$ 500,00</p>
                    </div>
                    <div className="box-produto">
                        <h4>Óculos transition</h4>
                        <img src="./assets/oculos02.png" alt="Óculos transition" />
                        <p>R$ 750,00</p>
                    </div>
                    <div className="box-produto">
                        <h4>Óculos de sol</h4>
                        <img src="./assets/oculos03.png" alt="Óculos de sol" />
                        <p>R$ 700,00</p>
                    </div>
                    <div className="box-produto">
                        <h4>Óculos infantil</h4>
                        <img src="./assets/oculos04.png" alt="Imagem de óculos feminino" />
                        <p>R$ 500,00</p>
                    </div>
                </div>
                
                <p>Todos os nossos produtos incluem:</p>

                <ul>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção Preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>                
            </div>
        </section>
    );
}