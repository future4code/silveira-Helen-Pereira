import React from 'react';
import { MyKnowledgeContainer, Title, KnowledgeItem } from './styled';

export const MyKnowledge = () => {
    return (
        <MyKnowledgeContainer>
            <Title>Meus Conhecimentos</Title>
            <KnowledgeItem>
                <h2>Front-end</h2>
                <p>
                    Desenvolvimento de aplicações
                    web utilizando HTML, CSS e
                    JavaScript.
                    <br />
                    Criação de sites responsivos
                    seguindo princípio de
                    Mobile First.
                    </p>
            </KnowledgeItem>
            <KnowledgeItem>
                <h2>Back-end</h2>
                <p>
                    Aplicações utilizando NodeJS,
                    Typescript e MySQL.
                    <br />
                    Criação de API´s para comunicação com front-end
                    seguindo princípio de Clean Code.
                    </p>
            </KnowledgeItem>
        </MyKnowledgeContainer>
    );
};