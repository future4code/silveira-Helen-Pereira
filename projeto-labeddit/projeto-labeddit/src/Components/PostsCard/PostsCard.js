import React from 'react'
import styled from 'styled-components'


const UserContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  width: inherit;
  height: 40px;
  h4 {
    color: blue;
    text-align: left;
    margin-left: 30px;
  }
`
 const TextContainer = styled.div`
  display: flex;
  min-height: 100px;
  p {
    text-align: justify;
    word-break: break-all;
    max-width: 240px;
    text-align: left;
    margin-left: 30px;
    margin-right: 30px;
  }
  background-color: whitesmoke;
  width: inherit;
  cursor: pointer;
`
 const Main = styled.main`
  display: flex;
  justify-content: center;
`

const CardContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  width: 300px;
  section {
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    div {
      margin-bottom: 24px;
      span {
        margin-right: 4px;
        margin-left: 4px;
      }
      width: 100px;
      display: flex;
      justify-content: space-evenly;
    }
  }
`

const Comments = styled.div`
  margin-bottom: 24px;
  cursor: pointer;
  span {
        margin-right: 4px;
        margin-left: 4px;
  }
  :hover {
    color: blue;
  }
  
`
 const ThumbUpIcon = styled.ThumbUpAltOutlinedIcon`
  cursor: pointer;
`
const ThumbDownIcon = styled.ThumbDownOutlinedIcon`
  cursor: pointer;
`
function PostsCard(props) {

  return(
    <Main>
      <CardContainer>
        <UserContainer>
          <h4>{props.user}</h4>
        </UserContainer>
        <TextContainer onClick={props.onClickPost}>
          <p>{props.text}</p>
        </TextContainer>
        <section>
          <div>
            <ThumbUpIcon onClick={props.upVote} color='primary' />
            <span>{props.votesCount}</span>
            <ThumbDownIcon onClick={props.downVote} color='primary' />
          </div>
          <Comments onClick={props.onClickPost}>
            <span>comentários:</span>
            <span>{props.commentsCount}</span>
          </Comments>
        </section>
      </CardContainer>
    </Main>
  )
}

export default PostsCard