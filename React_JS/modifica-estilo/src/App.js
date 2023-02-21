import './App.css';
import { useState } from 'react';

function App() {
  const [novaCor, setNovaCor] = useState('bg-vermelho');

  const alterarCor = () => {
    if(novaCor === 'bg-vermelho') {
      setNovaCor('bg-azul');
    } else {
      setNovaCor('bg-vermelho');
    }
  }

  return (
    <div className="display">
      <div className='container'>
        <h2>Alterando estilo do elemento</h2>
        <div className={novaCor}></div>
        <p>Clique no botão para alterar o estilo do elemento acima.</p>
        <button onClick={alterarCor}>Alterar</button>
      </div>
    </div>
  );
}

export default App;
