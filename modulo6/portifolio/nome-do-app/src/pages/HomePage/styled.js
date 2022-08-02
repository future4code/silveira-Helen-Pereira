import styled from 'styled-components';

export const HomeContainer = styled.div`
    height: 85vh;
    display: flex;
    justify-content: center;
    border-bottom: 5px solid #FFFFFF;
    background-color: #011726;
    img{
        //border-right: 5px solid #FFFFFF;
        height: 450px;
        margin-left: 150px;
        margin-top: 100px;
    }
`;
export const Presentation = styled.div`
    width: 65%;
    background-color: #011726;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10%;
    color: #FFFFFF;
    p{
        margin: 5px 0;
        font-weight: none;
        font-size: 24px;
    }
    span{
        font-size: 16px;
    }
`;
export const TitleName = styled.h1`
    font-size: 50px;
    color: #FFFFFF;
`;
export const Photo = styled.img`
    width: 35%;
    border-radius: 60%;
  
`;