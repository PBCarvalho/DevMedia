import React, { useState } from "react";
import "./estilo.css";

export default function LandingPage() {

  const [ ehTemaEscuro, setEhTemaEscuro ] = useState(false);

  const alterarTema = () => {
    setEhTemaEscuro(!ehTemaEscuro);
  }

  return (
    <div className={ ehTemaEscuro ? 'modo-escuro' : 'modo-claro' }>

      <header>
        <div className="limita-secao">
          <img className="logo" src="./assets/barbearia-logo.png" />
          <button onClick={alterarTema} className={ehTemaEscuro ? 'modo-escuro' : 'modo-claro'}>
            <img className="btn-icone" src={ehTemaEscuro ? 'assets/sun.png' : 'assets/moon.png'} />
            {ehTemaEscuro ? `Light` : `Dark`}
          </button>
        </div>
      </header>

      <section className="secao-banner"></section>

      <section className="secao-texto limita-secao">
        <div className="limita-secao">
          <h1>Bem-vindo a Barber Shop</h1>
          <p className="primeiro-paragrafo">
              Nossa barbearia oferece profissionais de qualidade e estamos
              prontos para lidar com suas maiores expectativas.
          </p>
          <p className="segundo-paragrafo">
            Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma
            equipe premiada que demonstrou o talento de mestres barbeiros em
            vários concursos de estilo. Deixe nosso barbeiro ser seu estilista
            pessoal e você nunca ficará desapontado.
          </p>
          <p className="assinatura">S. Kelly</p>
        </div>
      </section>
    </div>
  );
}
