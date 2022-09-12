import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { useStyles } from '../../components/MaterialTheme';

export const NavContainer = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 2.5%;
   
    a{
      color: #FFFFFF;
      :hover{
        color: #f2b33e;
      }
    }
    p{
      color: #FFFFFF;
      font-weight: bolder;
    }
`;
export const NavPage= () => {
  const classes = useStyles();
  
    return (
      <NavContainer>
        <div>
          <p> </p>
        </div>
        <div>
          <Button classes={{ label: classes.label}} href={"#"}>quem sou</Button>
          <Button classes={{ label: classes.label}} href={"#projects"}>projetos</Button>
          <Button classes={{ label: classes.label}} href={"#contact"}>contato</Button>
        </div>
      </NavContainer>
    );
  };