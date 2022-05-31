import React, {useState, useEffect} from 'react'
import Form from './Form'
import { StylesProvider } from '@material-ui/core';
import PostsCard from '../PostsCard/PostsCard'
import {useProtectedPage} from '../../Hooks/useProtectedPage'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';



const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  form {
    width: 300px;
    display: flex;
    flex-direction: column;
  }
  section {
    margin-top: 32px;
  }
`
const LogOutButton = styled.LogOutButton`

`

function PostsPage() {
  const [postList, setPostList] = useState([])
  const [vote, setVote] = useState(true)

  const history = useHistory()

  useProtectedPage()

  useEffect(() =>  {
    getPosts()
  }, [postList, vote])

  function onClickLogOut() {
    localStorage.removeItem('token')
    history.push('/')
  }

  function onClickPost(id) {
    history.push('/Post/' + id)
  }

  function getPosts() {
    const userToken = localStorage.getItem("token")
    const headers = {
      Authorization: userToken
    }
    axios.get(' https://labeddit.herokuapp.com/labEddit/posts', {headers})
      .then((response) => {
        setPostList(response.data.posts)
      })
      .catch((error) => {
        userToken && alert(error)
      })
  }

  function postVote(postId, direction) {
    const body = {
      direction: direction
    }
    const headers = {
      Authorization: localStorage.getItem("token")
    }
    axios.put(' https://labeddit.herokuapp.com/labEddit/posts/' + postId + '/vote', body, {headers})
      .then((response) => {
        setVote(!vote)
      })
      .catch((error) => {
        alert(error)
      })
  }

  return (
    <StylesProvider injectFirst>
      <Main>
        <p>Criar publicação</p> 
        <LogOutButton
          size='large'
          onClick={onClickLogOut}>
          Logout
        </LogOutButton>
        <Form />
        {postList.length === 0 ? <p>Carregando Posts...</p> : postList.map((post) => {
          return (
          <section key={post.id}>
            <PostsCard
              onClickPost={() => onClickPost(post.id)} 
              upVote={() => postVote(post.id, +1)}
              downVote={() => postVote(post.id, -1)}
              user={post.username}
              text={post.text}
              commentsCount={post.commentsCount}
              votesCount={post.votesCount}
            />
          </section>)
        })}
      </Main>
    </StylesProvider>
  )
}

export default PostsPage
