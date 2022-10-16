import React from "react";

const ProfileData = ({ data }) => {
  const { cpf, email, name, phone } = data;

  return (
    // <>
    //   <section className="grid grid-template-columns-1">
    //     <div>Nome</div>
    //     <div>E-Mail</div>
    //     <div>CPF</div>
    //     <div>Telefone</div>
    //   </section>

    //   <div className="grid grid-info">
    //       <div>{name}</div>
    //       <div>{email}</div>
    //       <div>{cpf}</div>
    //       <div>{phone}</div>
    //   </div>
    // </>
    
    <table>
      <thead>
        <tr>
          <td className="td-info">Nome</td>
          <td className="td-info">E-mail</td>
          <td className="td-info">CPF</td>
          <td className="td-info">Telefone</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{name}</td>
          <td>{email}</td>
          <td>{cpf}</td>
          <td>{phone}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProfileData;
