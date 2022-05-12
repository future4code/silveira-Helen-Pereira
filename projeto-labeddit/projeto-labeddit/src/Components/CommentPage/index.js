import React, { useState, useEffect } from "react";
import axios from "axios";
import { StylesProvider } from '@material-ui/core/styles'
import styled from "styled-components";




 const Comments = styled.div`
  background-color: whitesmoke;
  p {
    text-align: justify;
    word-break: break-all;
    max-width: 240px;
    text-align: left;
    margin-left: 30px;
    margin-right: 30px;
  }
  h4 {
    margin-top: 30px;
    margin-left: 20px;
  }
  section {
    margin-left: 20px;
    height: 50px;
    display: flex;
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
 const InputComment = styled.TextField`
  width: 300px;
  margin-top: 8px;
  margin-bottom: 8px;
`
 const MakeComment = styled.Button`
  width: 300px;
`
const Main = styled.main`
  width: 300px;
`
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
 const PostContainer = styled.div`
  width: 50px;
  min-height: 100px;
  p, h4 {
    text-align: left;
    margin-left: 30px;
  }
  background-color: whitesmoke;
  width: inherit;
  section {
    margin-left: 20px;
    height: 50px;
    display: flex;
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
 const TextContainer = styled.div`

`
 const ThumbUpIcon = styled.ThumbUpAltOutlinedIcon`
  cursor: pointer;
`
 const ThumbDownIcon = styled.ThumbDownOutlinedIcon`
  cursor: pointer;
`


function CommentPage({
    match: {
      params: { id },
    },
  }) {

  const [post, setPost] = useState({})
  const [comments, setComments] = useState([0])
  const [comment, setComment] = useState('')
  const [refresh, setRefresh] = useState(0);
  const [vote, setVote] = useState(true)

  useEffect(() => {
    GetComments();
  }, [refresh, vote]);

  const GetComments = () => {
    const userToken = localStorage.getItem("token")
    const headers = {
      Authorization: userToken
    }
    axios.get(`https://labeddit.herokuapp.com/labEddit/posts/${id}`, {headers})
    .then((response) => {
      console.log(response);
      setPost(response.data.post);
      console.log(response.data.post.comments);
      setComments(response.data.post.comments);
    }) 
    .catch((error) => {
      console.log(error)
    })
  }

  const SendComment = () =>{
    const body = {
      text: comment,
    }

    const userToken = localStorage.getItem("token")
    const headers = {
      Authorization: userToken
    }

    axios.post(` https://labeddit.herokuapp.com/labEddit/posts/${id}/comments`, body, {headers})
    .then(response => {
      console.log(response);
      setComment('');
      GetComments();
    })
    .catch(error => {
      console.log(error);
    })
  }

  function postVote(postId, direction) {
    const body = {
      direction: direction
    }
    const headers = {
      Authorization: localStorage.getItem("token")
    }
    axios.put(' https://labeddit.herokuapp.com/labEddit/posts/' + postId + '/votes', body, {headers})
      .then((response) => {
        setVote(!vote)
      })
      .catch((error) => {
        alert(error)
      })
  }

  const PutCommentVote = (direction, commentId) => {
    const body = {
      "direction": direction
    }

    const userToken = localStorage.getItem("token")
    const headers = {
      Authorization: userToken
    }

    axios.put(`https://labeddit.herokuapp.com/labEddit/posts/${id}/comment/${commentId}/votes`, body, {headers})
    .then(response => {
      console.log(response);
      setRefresh(refresh + 1);
    })
    .catch(error => {
      console.log(error);
    })
  }

  function MountPost(){
    return post && 
    <PostContainer>
      <UserContainer>
        <h4>{post.username}</h4>
      </UserContainer>
      <TextContainer>
          <h4>{post.title}</h4>
          <p>{post.text}</p>
      </TextContainer>
      <section>
        <div>
          <ThumbUpIcon onClick={() => postVote(post.id, +1)} color='primary' />
            <span>{post.votesCount}</span>
          <ThumbDownIcon onClick={() => postVote(post.id, -1)} color='primary' />
        </div>
      </section>
    </PostContainer>
  }
  
  function MountComments(){
    return comments.map(comment => {
      return( 
      <Comments>
        <h4>{comment.username}</h4>
        <p>{comment.text}</p>
        <section>
          <div>
            <ThumbUpIcon onClick={() => PutCommentVote(1, comment.id)} color='primary' />
              <span>{comment.votesCount}</span>
            <ThumbDownIcon onClick={() => PutCommentVote(-1, comment.id)} color='primary' />
          </div>
        </section>
      </Comments>)
    })
  }
  
  return (
    <StylesProvider injectFirst>
    <Main>
      {MountPost()}
      <div>
        <InputComment 
          type='text' 
          placeholder='Escreva seu comentario' 
          value={comment} 
          onChange={e => 
          setComment(e.target.value)} 
          variant='outlined'
          multiline
          rows={3}
        />
        <MakeComment 
          onClick={SendComment}
          variant='outlined'
          color='primary'>
          Enviar comentario
        </MakeComment> 
      </div>
      {MountComments()}
    </Main>
    </StylesProvider>
    )
  }
  
  export default CommentPage
  