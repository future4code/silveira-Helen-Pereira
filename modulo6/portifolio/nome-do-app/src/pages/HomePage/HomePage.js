import React from 'react';
import { HomeContainer, Presentation, TitleName, Photo } from './styled';
import Img from "../../images/perfilNovo.png"
import { AboutPage } from './AboutPage';

export const HomePage = () => {
  return (
    <HomeContainer id="profile">
      <Photo src={Img} />
      <Presentation>
        <TitleName>eu sou <br /> Helen Carolini</TitleName>
        <p>Desenvolvedora Web Full Stack</p>
        <span>Me aventurando na tecnologia e programação</span>
        <AboutPage/>
      </Presentation>
    </HomeContainer>
  );
};