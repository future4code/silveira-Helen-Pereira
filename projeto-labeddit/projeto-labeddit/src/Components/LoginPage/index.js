import React, { useState } from "react";
import { LoginForm, ButtonRegister, useStyles} from "./styled";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";


const Container = styled.div`
background-color: aquamarine;
`
const CssBaseline = styled.div `
background-color: blueviolet;
`
const Avatar = styled.div`
background-color: aqua;
`
const LockOutlinedIcon = styled.div`
background-color: blue;
`

const Typography = styled.div`
background-color: azure;
`

const TextField = styled.div`
background-color: beige;
`

const Button = styled.div`
background-color: black;
`

const baseUrl =
  "https://labeddit.herokuapp.com/labEddit/login";

function LoginPage() {
  const classes = useStyles()
  let history = useHistory()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitLogin = (event) => {
    event.preventDefault();

    const body = {
      email: email,
      password: password,
    };
    axios
      .post(baseUrl, body)
      .then((response) => {
        window.localStorage.setItem("token", response.data.token);
        history.push('/timeline')
        setEmail("")
        setPassword("")
        alert("Usuário logado");
      })

      .catch((error) => {
        alert("Email ou senha incorreta");
      });
  };

  return (
    <Container>
      <CssBaseline />
      <div >
        <Avatar >
          <LockOutlinedIcon />
        </Avatar>
      <Typography variant="h4" align={"center"} gutterBottom>
      LabEddit
      </Typography>
      
      <LoginForm onSubmit={onSubmitLogin}>
        <TextField
          onChange={onChangeEmail}
          value={email}
          name={"email"}
          label={"Email"}
          type={"email"}
          variant="outlined"
          margin="normal"
          required
          fullWidth
        />
        <TextField
          onChange={onChangePassword}
          value={password}
          name={"password"}
          label={"Senha"}
          type={"password"}
          variant="outlined"
          margin="normal"
          required
          fullWidth
        />
        <Button  type={"submit"}>
        Entrar
        </Button>
      </LoginForm>
     
      <ButtonRegister>
        <Link to={"/register"} >
          <Button  type={"submit"}>
          Criar conta
          </Button>
        </Link>
      </ButtonRegister>
      </div>
    </Container>
  );
}

export default LoginPage;

