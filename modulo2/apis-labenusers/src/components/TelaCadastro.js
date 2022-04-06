import React from "react";
import axios from "axios";
import styled from "styled-components";
import "../styled.css"




const Input = styled.div`
padding: 20px;
align-items: center;

`

const Input1 = styled.div`
padding: 20px;
`
const H2 = styled.div`
padding: 20px;

`
const Botao = styled.div`
margin-top: 100px;
`

export default class TelaCadastro extends React.Component{
  state = {
      nome:"",
      email:""
  }

  handleNome = (event) => {
      this.setState({nome: event.target.value})
  }

  handleEmail = (event) => {
    this.setState({email: event.target.value})
}

fazerCadastro = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
        name: this.state.nome,
        email: this.state.email
    }

    axios.post(url, body, {
        headers: {
            Authorization: "Helen-Pereira-Silveira"
        }
    })
    
    .then((res) => {
      alert("Usuário(a) cadastrado com sucesso!")
      this.setState({nome:"", email:""})
    })
    
    .catch((err) => {
        
        alert(err.response.data.message)
    })
}    

    render() {
        return(
            <div >
                
                <Botao/><button onClick={this.props.irParaLista}>Ir para Lista de Usuários</button>
                
               <H2/><h1>Faça seu Cadastro</h1>
                <hr/>
                <Input>
                <input 
                placeholder={"Nome"}
                value={this.state.nome}
                onChange={this.handleNome}
                /> </Input>
              
               <Input1>
                <input 
                 placeholder={"E-mail"}
                 value={this.state.email}
                 onChange={this.handleEmail}
                  /></Input1>
                <button onClick={this.fazerCadastro}>Cadastrar</button>
                
                
            </div>
        )
    }
};