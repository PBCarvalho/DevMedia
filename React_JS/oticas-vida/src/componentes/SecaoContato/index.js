import './estilo.css'

export default function SecaoContato() {
    return (
        <section id="contato" className="secao-contato">
            <div className="limitar-secao">
                <h3>Fale conosco</h3>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
                
                <div className="contato-container">
                    <div className="contato-conteudo">
                        <h4>Contato</h4>
                        <div>
                            <img src="./assets/local.png" />
                            <span>Nova Iguaçu, RJ</span>
                        </div>
                        <div>
                            <img src="./assets/telefone.png" />
                            <span>(21) 9999-9999</span>
                        </div>
                        <div>
                            <img src="./assets/email.png" />
                            <span>contato@oticavida.com</span>
                        </div>
                    </div>
                    <div className="contato-conteudo">
                        <h4>Nossas redes sociais</h4>
                        <div>
                            <img src="./assets/fb.png" />
                            <span>/OticaVida</span>
                        </div>                        
                        <div>
                            <img src="./assets/ig.png" />
                            <span>@oticavidarj</span>
                        </div>                        
                        <div>
                            <img src="./assets/tt.png" />
                            <span>@oticavidarj</span>
                        </div>                        
                    </div>
                </div>
            </div>
        </section>
    );
}