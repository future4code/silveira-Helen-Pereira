import styled from 'styled-components';

export const EducationContainer = styled.div`
    height: 100vh;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
`;
export const MyKnowledgeContainer = styled.div`
    height: 50%;
    background: #1b818c;
    text-align: center;
    padding: 0 16%;
    display: grid;
    align-items: center;
    justify-content: space-around;
`;
export const Title = styled.p`
    grid-column-start: 1;
    grid-column-end: 3;
    font-size: 25px;
`;
export const KnowledgeItem = styled.div`
    padding: 6% 10%;
    justify-self: center;
    text-align: start;
    font-size: 26px;
    p{
        font-size: 12px;
        margin-top: 8px;
        letter-spacing: -0.22px;
    }
`;
export const CoursesContainer = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-top: 5px solid #FFFFFF;
`;
export const CoursesItem = styled.div`
    height: 100%;
    min-width: 50%;
    padding: 6% 10%;
    background: ${props => props.background};
    p{
        margin-top: 8px;
        font-size: 12px;
        letter-spacing: -0.16px;
    }
`;
