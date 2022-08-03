import { Button } from '@material-ui/core';
import React from 'react';
import { Project } from './styled';

export const ProjectItem = (props) => {
    return (
        <Project background={props.background} row={props.row}>
            <div>
                <img src={props.image} alt="icone"/>
            </div>
            <div>
                <h2>{props.name}</h2>
                <p>{props.type}</p>
                <p>{props.description}</p>
                <Button variant="contained" > {props.button} </Button>
            </div>
        </Project>
    );
};