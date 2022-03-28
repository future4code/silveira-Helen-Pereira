import React from "react";
import styled from "styled-components";

const Texto = styled.div`
display: flex;
justify-content: center;

`;



 export default class Etapa1 extends React.Component {
 render() {
        return (
            
            <div className="dadosGerais">
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <ol>
                    <div>
                    <p>1. Qual o seu nome?</p>
                    <input></input>
                    </div>
                    <div>
                    <p>2. Qual sua idade?</p>
                    <input type="number"></input>
                    </div>
                    <div>
                    <p>3. Qual seu email?</p>
                    <input type="email"></input>
                    </div>
                    <div>
                    <p>4. Qual sua escolaridade?</p>
                    <select id="escolaridade">
                        <option>Ensino médio incompleto</option>
                        <option>Ensino médio completo</option>
                        <option>Ensino superior incompleto</option>
                        <option>Ensino superior completo</option>
                    </select>
                    </div>
                </ol>
            </div>
           
        )
    }
}
