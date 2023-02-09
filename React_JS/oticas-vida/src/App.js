import './App.css';

import Topo from './componentes/Topo';
import Conteudo from './componentes/Conteudo';
import Rodape from './componentes/Rodape';

function App() {
  return (
    <div className="container">
      <Topo />
      <Conteudo />
      <Rodape />
    </div>
  );
}

export default App;
