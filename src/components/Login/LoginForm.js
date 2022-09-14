import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../contexts/auth";

export const LoginForm = () => {
  const {login } = useContext(AuthContext);

  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandle = (e) => {
    e.preventDefault();
    login(details.email, details.password); //context integration
  };

  return (
        <Container>
        <Title>K-LOTE</Title>   
        <SubTitle>Fazer Login</SubTitle>
            <Form onSubmit={submitHandle}>
                <InputLabel className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <InputText type="email" name="email" placeholder='Digite seu e-mail' id="email" onChange={e => 
                        setDetails({...details, email: e.target.value})} value={details.email}/>
                </InputLabel>
                <InputLabel className="form-group">
                    <label htmlFor="password">Senha</label>
                    <InputText type="password" name="password" placeholder='Digite sua senha' id="password" onChange={e => 
                        setDetails({...details, password: e.target.value})} value={details.password}/>
                </InputLabel>
                {/* {(error !== "") ? ( <div className="error">{error}</div>) : ""} */}
                <DisplayBetween class="display-space-between">
                    <RadioDiv>
                        <input type="checkbox"></input>
                        <label for="password" class="chekbox-label">Manter conectado</label>
                    </RadioDiv>
                    <div >
                        <Link to="/resetPassword">Esqueceu sua senha?</Link>
                    </div>
                </DisplayBetween>
            <div>
                <SubmitButton type="submit">Entrar</SubmitButton>
            </div>
            
                {/* <input type="submit" value="Entrar" /> */}
                
            </Form>
        </Container>   
        
  )
}

export default LoginForm

const Container = styled.div`
height: 100vh;
margin: 0 auto;
position: relative;
`
const Form = styled.form`

background-color: #ffff;
width: 450px;
height: 300px;
padding: 20px;
position: absolute;
top: 40%;
left: 45%;
margin: -70px 0 0 -170px;
border-radius: 24px;
box-shadow: 10px;
margin-bottom: 10px;
`
const Title = styled.h1`
text-align: center;
margin: 17px 0;

color: #38B885;
font-family: 'Segoe UI', 'Roboto';
`
const SubTitle = styled.h2 `
text-align: center;
margin: 17px 0;
padding: 50px;
`
const InputLabel = styled.div`
/* max-width: 380px;
background-color: #F2F2F7;
margin: 10px 0;
padding: 10px 10px;
width: 100%;
height: 40px;
border-radius: 25px;
display: flex;
grid-template-columns: 15% 85%;
padding: 0 0.4rem;
position: relative;
outline: none; */
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
margin: 10px 0px 20px 0px;
/* margin-top: 10px;
margin-bottom: 20px; */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const InputText = styled.input`
width: 100%;
border: none;
border-radius: 10px;
padding: 10px;
background-color: #F2F2F7;
font-size: 12pt;
/* box-shadow: 0px 10px 4px black; */
outline: none;
box-sizing: border-box;
::placeholder{
    font-size: 13px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    line-height: 15px;
    text-align:left
}
outline: none;
`
const DisplayBetween = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 10px 0 10px 0;
padding: 25px 0px 0px 0px;
`
const RadioDiv = styled.div`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const SubmitButton = styled.button`
width: 100px;
padding: 8px;
border-radius: 30px;
border: none;
background:#38B885;
color: #FFFFFF;
margin: 10px 0 10px 0;
`
// const Body = styled.body`
// background-color: #f2f2f7;
// `
