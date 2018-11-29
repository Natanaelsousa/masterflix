import React from 'react';
import './cabecalho.css'

class Cabecalho extends React.Component{
    render(){
        return <header>
        <div>
          <h2>MasterFlix</h2>
        </div>
    
        <div className="menu-hamburguer">
          <span className="traco traco-1"></span>
          <span className="traco traco-2"></span>
          <span className="traco traco-3"></span>
        </div>
    
        <div className="filtros">
          <p className="btn acao">Ação</p>
          <p className="btn comedia">Comédia</p>
          <p className="btn drama">Drama</p>
          <p className="btn terror">Terror</p>
        </div>
      </header>
    }
}

export default Cabecalho;