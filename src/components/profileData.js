import React from "react";

const ProfileData = ({ data }) => {
  const { cpf,email,name,phone} = data;

  return (
    <table>
  <tr>
    <td>Nome</td>
    <td>E-mail</td>
    <td>CPF</td>
    <td>Telefone</td>
  </tr>
  <tr>
    <td>{name}</td>
    <td>{email}</td>
    <td>{cpf}</td>
    <td>{phone}</td>
    
  </tr>
</table>
  );
};

export default ProfileData;
