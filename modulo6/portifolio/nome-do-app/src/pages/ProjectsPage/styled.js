import styled from 'styled-components';

export const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-top: 5px solid #FFFFFF;
`;
export const ProjectTitle = styled.div`
    width: 100%;
    text-align: center;
    background: ${props => props.background};
    padding: 14px;
    color: ${props => props.color};
    button{
        color: #FFFFFF;
    }
`;
export const Project = styled.div`
    width: 100%;
    display: flex;
    flex-direction: ${props => props.row};
    align-items: center;
    justify-content: center;
    padding: 6% 10%;
    background: ${props => props.background};
    color: #FFFFFF;
    p{
        margin-top: 8px;
        font-size: 14px;
        width: 350px;
    }
    button{
        margin-top: 12px;
        border-radius: 12px;
        
    }
    img{
        margin-right: 22px;
        height: 150px;
    }
`;
