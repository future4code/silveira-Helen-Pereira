
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    width: 100%;
    background: #024159;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    padding: 22px 12px;
`;

export const Footer = () => {
    return (
        <FooterContainer>
            <p>© 2022 Helen Carolini Pereira</p>
        </FooterContainer>
    );
};