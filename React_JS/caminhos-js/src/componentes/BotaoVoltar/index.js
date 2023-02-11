import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const BotaoVoltar = () => (
    <div className="area-botao">
        <Link className="botao-voltar" to='/'>Voltar</Link>
    </div>
);

export default BotaoVoltar;