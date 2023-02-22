import React, { useState } from 'react';

export default function ConteudoPostagem() {

  const [ numeroPalmas, setNumeroPalmas ] = useState(0);

  function somarPalmas() {
    setNumeroPalmas(numeroPalmas + 1);
  }

  return (
    <div>
      <p>Palmas recebidas: { numeroPalmas }</p>
      <p className='conteudo-postagem'>
        Ser desenvolvedor é uma viagem onde a próxima parada é a <span>solução</span> de um problema.
      </p>

      <button onClick={somarPalmas}>
        Bater Palmas
      </button>      
    </div>
  );
}
