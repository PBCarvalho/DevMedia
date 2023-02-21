import { useState } from 'react';
import './App.css';

function App() {

  const [novoTexto, setNovoTexto] = useState();

  function alterarTexto() {
    setNovoTexto('Hello, World!')
  }

  return (
    <div className='App'>
      <div className="conteudo-centralizado">
        <div className='area-texto'>
          <h2> {novoTexto} </h2>
        </div>
        <div className='area-botao'>
          <label>
            Click no botão para aparecer um texto:
          </label>
          <button onClick={alterarTexto}>
            Gerar texto
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
