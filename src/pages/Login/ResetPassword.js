import React, { useState } from "react";
import { sendResetPassword } from "../../api/users";
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
  FormMessageError,
} from "../../assets/css/style";

export const ResetPassword = () => {
  const [statusResponse, setStatusResponse] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email } = e.target;
    const { value } = email;
    if (value.length) {
      const response = await sendResetPassword(value);

      response === 200
        ? setStatusResponse(
            "Senha temporária enviada. Verifique o e-mail cadastrado para continuar."
          )
        : setStatusResponse(
            "O endereço de e-mail que você inseriu não está vinculado a uma conta do K-Lote. Entre em contato com o administrador do site."
          );
    }
  };

  return (
    <CenterContainer>
      <LargeTitle>K-Lote</LargeTitle>
      <BoxContainer>
        <FormDefault onSubmit={handleSubmit}>
          <Title1>Recuperar sua senha</Title1>
          <p>Vamos enviar uma senha temporária através do e-mail cadastrado.</p>

          <InputGroup >
            <FormLabel htmlFor="email">
              Digite seu e-mail:{" "}
            </FormLabel>
            <InputDefault
    
              type="email"
              id="email"
              name="email"
              placeholder="seuemail@email.com"
            />
          </InputGroup>
          <FormOptions>
            <Link to="/login" >
              {" "}
              Cancelar{" "}
            </Link>
            <PrimaryButton type="submit"> Enviar </PrimaryButton>
          </FormOptions>

          {statusResponse ? <FormMessageError>{statusResponse}</FormMessageError> : <></>}
        </FormDefault>
      </BoxContainer>
    </CenterContainer>
  );
};
