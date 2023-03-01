import React from 'react';
import './estilo.css';

export default function ItemLista(props) {
  return (
    <div className="boxSigno">
      <div className="nomeSigno">
        { props.signo }
      </div>
      
      <img className="imagemSigno" src={ props.imagem } alt={ props.signo}/>
      
      <div className="periodoNascimento">
        { props.dataInicio } - { props.dataFim }
      </div>
    </div>
  )
}
