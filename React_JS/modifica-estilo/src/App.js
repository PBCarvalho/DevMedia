import './App.css';
import { useState } from 'react';

function App() {

  const corDeFundoVermelho = 'bg-vermelho'
  const corDeFundoAzul = 'bg-azul'
  
  const [estiloAtualizado, setEstiloAtualizado] = useState(false)
  
  const alterarCor = () => {
    setEstiloAtualizado(!estiloAtualizado)
  };  
  
  return (
    <div className="display">
      <div className='container'>
        <h2>Alterando estilo do elemento</h2>
        <div className={estiloAtualizado ? corDeFundoAzul : corDeFundoVermelho}></div>
        <p>Clique no botão para alterar o estilo do elemento acima.</p>
        <button onClick={alterarCor}>Alterar</button>
      </div>
    </div>
  );
}

export default App;
