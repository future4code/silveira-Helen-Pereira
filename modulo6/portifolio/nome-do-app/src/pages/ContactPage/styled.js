import styled from 'styled-components';

export const ContactContainer = styled.div`
    height: 70vh;
    background: #1b818c;
    color: #FFFFFF;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    border-top: 5px solid #FFFFFF;
`;
export const InfoPeople = styled.div`
    padding: 4%;
    color: #FFFFFF;
    display: grid;
    width: 54%;
    p{
        font-size: 16px;
    }
`;
export const Image = styled.img`
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-end: 1;
    height: 180px;
    margin-right: 32px;
`;