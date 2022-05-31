import React, {useState} from 'react'
import axios from 'axios'
import { StylesProvider } from '@material-ui/core/styles'
import styled from 'styled-components'
 
 
 const InputNewPost = styled.TextFild`

`
 const ButtonNewPost = styled.Button`
  margin-top: 8px;
`
 const LogOutButton = styled.LogOutButton`
  position: absolute;
  left: 16px;
  color: red;
  text-transform: lowercase;
`

function Form(props) {

  const [newPostInput, setNewPostInput] = useState('')

  function onClickNewPost(event) {
    event.preventDefault()
    const headers = {
      Authorization: localStorage.getItem("token")
    }
    const body = {
      text: newPostInput,
      title: 'um post qualquer'
    }
    console.log(body)
    axios.post('https://labeddit.herokuapp.com/labEddit/posts', body, {headers})
      .then((response) => {
        alert('post criado com sucesso')
        setNewPostInput('')
      })
      .catch((error) => {
        alert(error)
      })
  }
  function onChangeNewPostInput(event) {
    setNewPostInput(event.target.value)
  }

  return(
    <StylesProvider injectFirst>
      <form onSubmit={onClickNewPost}>
      <InputNewPost 
        type='text'
        value={newPostInput}
        placeholder='quais as novidades?' 
        variant='outlined' 
        multiline
        rows={3}
        onChange={onChangeNewPostInput}
      />
      <ButtonNewPost
        type='submit'
        color='primary' 
        variant='outlined'>
        Postar
      </ButtonNewPost>
      </form>
    </StylesProvider>
  )
}

export default Form
