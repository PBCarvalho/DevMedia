import './style.css';

const Footer = () => (
    <footer>
        <div className="limita-secao container-logo-informacoes">
            <img src="./assets/logo.png" />

            <div>
                <h3>ENDEREÇO</h3>
                <p>Av. Bernardino de Campos, 98</p>
                <p>São Paulo, SP 12345-678</p>
            </div>

            <div>
                <h3>CONTATO</h3>
                <p>info@meusite.com</p>
                <p>Tel: (11) 3456-7890</p>
            </div>

            <div>
                <h3>HORÁRIOS</h3>
                <p>ABERTO TODOS OS DIAS</p>
                <p>10:00 - 20:00</p>
            </div>
        </div>

        <div className="limitar-secao direito-autoral">
            <p>Gelateria. Orgulhosamente desenvolvido por "Peterson Carvalho"</p>
        </div>
    </footer>
);

export default Footer;