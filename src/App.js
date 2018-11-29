import React, { Component } from 'react';
import './App.css';
import it from './img/it-a-coisa.jpg';
import ace from './img/ace-ventura.jpg';
import dunkirk from './img/dunkirk.jpg';
import maskara from './img/o-maskara.jpg';
import piratas from './img/piratas-do-caribe.jpg';
import poltergeist from './img/poltergeist.jpg';
import Cabecalho from './cabecalho/cabecalho.js';

class App extends Component {
  render() {
    return <section>
        <Cabecalho />

  <nav className="filtros mobile">
    <p className="btn acao">Ação</p>
    <p className="btn comedia">Comédia</p>
    <p className="btn drama">Drama</p>
    <p className="btn terror">Terror</p>
  </nav>

  <section className="banner"></section>

  <main>
    <div className="cartao acao">
      <img src={piratas} alt="" />
    </div>
    <div className="cartao comedia">
      <img src={maskara} alt="" />
    </div>
    <div className="cartao terror">
      <img src={it} alt="" />
    </div>
    <div className="cartao terror">
      <img src={poltergeist} alt="" />
    </div>
    <div className="cartao drama">
      <img src={dunkirk} alt="" />
    </div>
    <div className="cartao comedia">
      <img src={ace} alt="" /> 
    </div>
  </main>
      </section>
    ;
  }
}

export default App;
