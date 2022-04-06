import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import foto from "./img/fotoams.png"
import fotoPerfil from "./img/fotoperfil.jpg"
import fotoPost from "./img/foto-post.jpg"
import fotoPost2 from "./img/foto-post2.jpg"

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export default class App extends React.Component {
  state = {
    usuario: [
     {nomeUsuario: "paulinha", fotoUsuario:"https://picsum.photos/50/50", fotoPost: foto},
     {nomeUsuario: "Helen", fotoUsuario: fotoPerfil, fotoPost:fotoPost },
     {nomeUsuario: "Carolini", fotoUsuario: fotoPerfil, fotoPost: fotoPost2 }
    ]
  }

  render() {
    const usuario = this.state.usuario.map((usuario) =>{
      return (
        <Post
        nomeUsuario={usuario.nomeUsuario}
        fotoUsuario={usuario.fotoUsuario}
        fotoPost={usuario.fotoPost}
        />

      )
    }
    )
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={foto}
        />
         <Post
          nomeUsuario={'Helen'}
          fotoUsuario={fotoPerfil}
          fotoPost={fotoPost}
        />
         <Post
          nomeUsuario={'Carolini'}
          fotoUsuario={fotoPerfil}
          fotoPost={fotoPost2}
          
        />
        
      </MainContainer>
    );
  }
}


