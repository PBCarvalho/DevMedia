import { Link } from 'react-router-dom';

import Top from '../../componentes/Header';
import Footer from '../../componentes/Footer';

import './style.css';

export default function Sabores() {
    return (
        <div>            
            <Top />

            <main>
                <section className='secao-banner-sabores'>
                    <div className='titulo-banner-sabores'>
                        <h1>NOSSOS SABORES</h1>
                    </div>
                </section>                

                <section className='limita-secao secao-sabores'>
                    <h2>SABORES DE SORVETE</h2>
                    <div className='container-sorvetes'>
                        <div className='box-sorvete'>
                            <img src='./assets/sabor-oreo.png' />
                            <span>Sorvete de Oreo</span>
                            <p>Delicioso sorvete dabor Oreo. Uma explosão de sabor.</p>
                        </div>

                        <div className='box-sorvete'>
                            <img src='./assets/sabor-pistache.png' />
                            <span>Sorvete Pistache</span>
                            <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                        </div>

                        <div className='box-sorvete'>
                            <img src='./assets/sabor-cookies-avela.png' />
                            <span>Sorvete Cookies & Avelã</span>
                            <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                        </div>

                        <div className='box-sorvete'>
                            <img src='./assets/sabor-kiwi.png' />
                            <span>Sorvete de Kiwi</span>
                            <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                        </div>

                        <div className='box-sorvete'>
                            <img src='./assets/sabor-morango.png' />
                            <span>Sorvete de Morango</span>
                            <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                        </div>
                    
                        <div className='box-sorvete'>
                            <img src='./assets/sabor-limao.png' />
                            <span>Sorvete Limão Siciliano</span>
                            <p>O incrível sorvete gourmet de limão siciliano vai te encantar.</p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}