import React from "react";
import styled from "styled-components";



export default class Etapa3 extends React.Component {
    render() {
        return (
            
                <div className="ensino">
                    <ol>
                        <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                        <p>7. Por que você não terminou um curso de graduação?</p>
                         <input></input>

                         <p>8. Você fez algum curso complementar? </p>
                         <select id="curso">
                        <option>Nenhum</option>
                        <option>Curso técnico</option>
                        <option>Curso de inglês</option>
                        </select>
                        
                    </ol>
                    
                </div>
            
        )
    }
}