import styled from 'styled-components';

export const HomeContainer = styled.div`
    height: 85vh;
    display: flex;
    justify-content: center;
    border-bottom: 5px solid #FFFFFF;
    background-color: #011726;
    img{
        //border-right: 5px solid #FFFFFF;
        height: 490px;
        margin-left: 90px;
        margin-top: 40px;
    }
`;
export const Presentation = styled.div`
    width: 60%;
    background-color: #011726;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15%;
    color: #FFFFFF;
    p{
        margin: 5px 0;
        font-weight: none;
        font-size: 20px;
    }
    span{
        font-size: 19px;
    }
`;
export const TitleName = styled.h1`
    font-size: 50px;
    color: #FFFFFF;
`;
export const Photo = styled.img`
    width: 25%;
    border-radius: 40%;
  
`;