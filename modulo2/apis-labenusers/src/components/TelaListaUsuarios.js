import axios from "axios";
import React from "react";
import styled from "styled-components"
import "../styled.css"





const CardUsuario = styled.div`
border: 1px solid black;
padding: 10px;
margin: 30px;
width: 300px ;
display: flex;
justify-content: space-between;
margin-left: 600px;


`

const H2 = styled.div`
padding: 20px;

`
const Botao = styled.div`
margin-top: 100px;
`


export default class TelaListaUsuarios extends React.Component{
    state = {
        usuarios: []
    }


    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
       axios.get(url, {
           headers: {
               Authorization: "Helen-Pereira-Silveira"
           }
       })
       .then((res) => {
           this.setState({usuarios: res.data})
       })

       .catch((err) => {
           alert("Ocorreu um problema, tente novamente!")
       })
    }

    deletarUsuario = (id) => {
        if (window.confirm("Tem certeza que deseja deletar?")){
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
            axios.delete(url, {
                headers: {
                   Authorization: "Helen-Pereira-Silveira"
                }
            })
            
            .then((res) => {
                alert("Usuário(a) deletado com sucesso!")
                this.pegarUsuarios()
            })
            
            .catch((err) => {
                alert("Ocorreu um erro, tente novamente!")
            })
       

        }else{
         alert("Usuário não deletado!")
        }

     

    }



    render() {
        console.log(this.state.usuarios)
        const listaUsuarios = this.state.usuarios.map((user) => {
            return (<CardUsuario 
                        key={user.id}>
                        {user.name}
                        <button onClick={() => this.deletarUsuario(user.id)}>X</button>

                    </CardUsuario>)
        })


        return(
            
            <div>
                
               <Botao/> <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
                <H2/><h1>Lista De Usuários</h1>
                <hr/>
                {listaUsuarios}
                
            </div>
            
        )
    }
}