import React from 'react';
import Playlists from './Components/PlayList';
import styled from 'styled-components';
import AdicionarMusicas from './Components/AdicionarMusica';
import Header from './Components/Header';



const Background = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #e2eafc;
  background-repeat: repeat-y;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center
`


export default class App extends React.Component {
  state = {
    mudarTela: "mostrarPlaylists",
  }


  mudaTela = () => {
     this.setState({ mudarTela: !this.state.mudarTela});
   
  }


  render() {

    const mudancaDeTela = () => {
      if (this.state.mudarTela === "mostrarPlaylists") {
        return <Playlists />
    } else if (this.state.mudarTela === "mostrarAddMusicas") {
        return <AdicionarMusicas />
    }
  }

    return(
      <Background>

        <Header />
        {mudancaDeTela()}

      </Background> 
    );
  }
      
};
