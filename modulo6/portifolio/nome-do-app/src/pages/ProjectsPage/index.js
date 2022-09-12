import React from 'react';
import { ProjectsContainer, ProjectTitle } from './styled';
import { ProjectItem } from './ProjectItem';
import laptop from '../../images/macbook_2x-.png';
import tablet from '../../images/ipad@2x.png';
import desktop from '../../images/imac@2x.png';
import { Button } from '@material-ui/core';
import { useStyles } from '../../components/MaterialTheme';



export const ProjectsPage = (props) => {
    const classes = useStyles()
    return (
        <ProjectsContainer id="projects">
            <ProjectTitle background={'#FFFFFF'} color={'black'}>Meus Projetos</ProjectTitle>
            <ProjectItem
                row={'row'}
                image={laptop}
                background={'#011726'}
                name={'LabeFood'}
                type={'Front-end'}
                description={'https://ifuture-4food.surge.sh/'}
                button={'Ver no GitHub'} 
                
            />
            <ProjectItem
                row={'row-reverse'}
                image={tablet}
                background={'#1b818c'}
                name={''}
                type={'Back-end'}
                description={''}
                button={'Ver no GitHub'}
            />
            <ProjectItem 
                row={'row'}
                background={'#025e73'}
                image={desktop}
                name={''}
                type={'Full Stack'}
                description={``}
                button={'Ver no GitHub'}
            />
            <ProjectTitle background={'#024159'} >
                <Button 
                    classes={{ label: classes.label}} href={'https://github.com/HelenCarolini'}
                >   
                    mais projetos em breve
                </Button>
            </ProjectTitle>
        </ProjectsContainer>
    );
};