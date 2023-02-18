import { Link } from "react-router-dom";

import './style.css';

const Top = () => (
    <header>
        <div className="limita-secao">
            <img src="./assets/logo.png" />

            <nav>
                <Link className="link-top" to="/">Home</Link>
                <Link className="link-top" to="/sabores">Sabores</Link>
                <Link className="link-top" to="/sobre">Sobre</Link>                
            </nav>
        </div>
    </header>
);

export default Top;