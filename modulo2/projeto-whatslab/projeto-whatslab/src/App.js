import React, { useState } from 'react';
import './App.css';

import ChatIntro from './components/ChatIntro';
import usuarioAtivo from './components/usuarioAtivo';

export default () => {

  const [usuarioAtivo, secaoIputUsuario] = useState({});

  return (
    <div className='app-whats'>
    <div className='contentArea'>
        {usuarioAtivo. chatNome !== undefined &&
        
        <usuarioAtivo />
        
        }
      <ChatIntro />

    </div>
   
    <footer>
    <div className='inputUsuario'>
     
      <input placeholder='usuario' ></input>
      </div>
      <div className='inputMensagem'>
      <input placeholder='Mensagem'></input>
      </div>
      <button>Enviar</button>
      
    </footer>
    </div>
  )
}