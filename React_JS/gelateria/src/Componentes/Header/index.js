import React from "react";
import './style.css';
import { Link } from "react-router-dom";

const Top = () => (
    <header>
        <div className="limita-secao">
            <img src="./assets/logo.png" />

            <nav>
                <Link to="/">Home</Link>
                <Link to="/sabores">Sabores</Link>
                <Link to="/sobre">Sobre</Link>                
            </nav>
        </div>
    </header>
);

export default Top;