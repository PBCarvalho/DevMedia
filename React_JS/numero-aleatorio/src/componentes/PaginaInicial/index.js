import React from 'react';
import './estilo.css';

export default function PaginaInicial() {
    return (
        <div className='conteudo-centralizado'>
            <h3>Número aleatório:</h3>
            <h1>0</h1>

            <div className='area-botao'>
                <label>
                    Click no botão abaixo para gerar um número aleatório:
                </label>

                <button>
                    Gerar número
                </button>
            </div>
        </div>
    );
}