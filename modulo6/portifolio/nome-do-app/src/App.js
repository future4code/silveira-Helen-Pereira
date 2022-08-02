import React from 'react';
import styled from 'styled-components';
import { HomePage } from './pages/HomePage/HomePage';
import { NavPage } from './pages/NavPage/NavPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';
import { EducationPage } from './pages/EducationPage';
import { Footer } from './pages/Footer';
import { Icons } from './components/Icons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const App = () => {
  return (
    <Container>
      <NavPage/>
      <Icons 
        direction={'column'} 
        position={'absolute'}
        size={'32px'}
        margin={'12% 2%'}
      />
      <HomePage />
      <EducationPage />
      <ProjectsPage />
      <ContactPage />
      <Footer/>
    </Container>
  );
};
