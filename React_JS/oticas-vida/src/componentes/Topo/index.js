import './estilo.css'

export default function Topo() {
    return (
        <header>
            <div className="limitar-secao">
                <img src="./assets/logo.png" alt="Logo da Loja Óticas Vida" className="logo-topo" />
                <div className="links">
                    <a href='#produtos'>PRODUTOS</a>
                    <a href='#sobre'>SOBRE</a>
                    <a href='#contato'>CONTATO</a>
                </div>
            </div>
        </header>
    );
}