import React from 'react';
import { CoursesContainer, CoursesItem} from './styled';

export const Courses = (props) => {
    return (
        <CoursesContainer>
            <CoursesItem background={'#024159'}>
                <h2>Atue na área da Saúde/Beleza</h2>
                <p>1 ano - 2021</p>
                <p>
                Atuava como Linfoterapeuta, com pré e pós operatório em cirúrgia plástica.
                </p>
            </CoursesItem>
            <CoursesItem background={'#025e73'}>
                <h2>Curso de Web Full Stack na Labenu</h2>
                <p>6 meses - 2022</p>
                <p>
                    Programa imersivo de 6 meses, tempo integral e remoto,
                    que forma Desenvolvedores Web Full Stack ou seja
                    profissionais completos tanto no Back-End quanto no
                    Front-End. A abordagem é toda baseada em projetos com
                    desafios de construção de soluções.
                </p>
            </CoursesItem>
        </CoursesContainer>
    );
};