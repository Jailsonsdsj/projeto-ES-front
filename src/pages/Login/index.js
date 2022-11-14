import React, { useState, useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../../contexts/auth";
import { Link } from "react-router-dom";
import {
  Title1,
  FormDefault,
  InputDefault,
  FormLabel,
  FormText,
  BoxContainer,
  LargeTitle,
  CenterContainer,
  FormOptions,
  PrimaryButton,
  InputGroup,
  FormMessageError
} from "../../assets/css/style";

export const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const [details, setDetails] = useState({ email: "", password: "", errorMessage: "" });
    

  const handleSubmit = (e) => {
    e.preventDefault();
    (async () => {
        const response = await login(details.email, details.password); //context integration
        if(response) setDetails({...details, errorMessage:"Login ou senha inválidos."})

      })();
  };

  console.log(details);
 
  return (
    <>
      <CenterContainer>
        <LargeTitle>K-Lote</LargeTitle>
        <BoxContainer>
          <FormDefault>
          <Title1>Fazer Login</Title1>
            <InputGroup>
              <FormLabel htmlFor="email">E-mail</FormLabel>
              <InputDefault
                type="email"
                name="email"
                placeholder="Digite seu e-mail"
                id="email"
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
                value={details.email}
              />
            </InputGroup>
            <InputGroup>
              <FormLabel htmlFor="password">Senha</FormLabel>
              <InputDefault
                type="password"
                name="password"
                placeholder="Digite sua senha"
                id="password"
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
                value={details.password} 
              />
            </InputGroup>
           
            {/* {(error !== "") ? ( <div className="error">{error}</div>) : ""} */}
            {details.errorMessage && <FormMessageError>{details.errorMessage}</FormMessageError>}
            <FormOptions>
                
                <div>
                    <input type="checkbox" id="keep-conected"/>
                    <label htmlFor="keep-conected">Manter conectado</label>
                </div>
                <Link to="/resetPassword">
                 <FormText>Esqueceu sua senha?</FormText>
                </Link>
                
            </FormOptions>
            <div>
            <PrimaryButton type="submit" onClick={handleSubmit}>Entrar</PrimaryButton>
            </div>

            {/* <input type="submit" value="Entrar" /> */}
          </FormDefault>
        </BoxContainer>
      </CenterContainer>
    </>
  );
};

