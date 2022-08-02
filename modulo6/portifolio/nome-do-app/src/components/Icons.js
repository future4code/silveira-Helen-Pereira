import React from 'react';
import styled from 'styled-components';
import linkedin from '../images/linked.png';
import whats from '../images/whats.png';
import git from '../images/git.png';
import twiter from '../images/twitter.png';
import insta from '../images/insta.png';
import { Button } from '@material-ui/core';

const Icon = styled.div`
    display: flex;
    flex-direction: ${props => props.direction};
    position: ${props => props.position};
    margin: ${props => props.margin};
`;
const IconItem = styled.img`
    height: ${props => props.size};
    margin: 6px;
    :hover{
        color: #f2b33e;
      }
`;

export const Icons = (props) => {
    return (
        <Icon
            direction={props.direction}
            position={props.position}
            margin={props.margin}
        >
            <Button href={'https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BREIDgcGNQXKRiMOobP6XPw%3D%3D'}>
                <IconItem
                    src={linkedin}
                    size={props.size} />
            </Button>
            <Button href={'https://contate.me/Desenvolvedora-Full-Stack'}>
                <IconItem
                    src={whats}
                    size={props.size} />
            </Button>
            <Button href={'https://github.com/HelenCarolini'}>
                <IconItem
                    src={git}
                    size={props.size} />
            </Button>
            <Button href={''}>
                <IconItem
                    src={twiter}
                    size={props.size} />
            </Button>
            <Button href={'https://www.instagram.com/helen.carolini/'}>
                <IconItem
                    src={insta}
                    size={props.size} />
            </Button>
        </Icon>
    );
};