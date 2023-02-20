import { Link } from 'react-router-dom';

import Top from '../../componentes/Header';
import Footer from '../../componentes/Footer';

import './style.css';

export default function Sobre() {
    return (
        <div>
            <Top />

            <main>
                <section className='secao-banner-sobre'>
                    <div className='titulo-banner-sobre'>
                        <h1>A GELATERIA</h1>
                    </div>
                </section>

                <section className='container-secao-sobre-nos'>
                    <div className='limita-secao'>
                        <h2>Sobre Nós</h2>
                        <span>Nós simplesmente amamos sorvete!</span>
                        <p>
                            Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada
                            sorvete produzido. Fazemos o melhor sorvete para os nossos
                            clientes e gostamos de receber elogios. Estamos operando desde
                            2009 com as melhores matérias-primas para a produção final do
                            sorvete. Vendemos tanto para varejo como para atacado.
                        </p>
                        <p>
                            Nossos clientes podem comprar os nossos sorvetes e degustar na
                            nossa loja ou levar para sua residência e aproveitar junto com a
                            família. Também vendemos para estabelecimentos e criamos eventos
                            como festa de aniversário, formaturas e eventos empresariais. Para
                            contratar os nossos serviços, basta entrar em contato conosco.
                            Iremos proporcionar o melhor atendimento e os melhores produtos
                            para você fazer a sua festa mais saborosa, com o melhor sorvete da
                            cidade.
                        </p>
                    </div>
                </section>

                <section className='container-secao-imagens'>
                    <div>
                        <img src='../../assets/sobre-image.jpg' />
                        <img src='../../assets/sorveteria.jpg' />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}