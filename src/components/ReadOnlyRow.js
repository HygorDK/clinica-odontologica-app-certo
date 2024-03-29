import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.cpf}</td>
      <td>{contact.data}</td>
      <td>{contact.sexo}</td>
      <td>{contact.telefone}</td>
      <td>{contact.celular}</td>
      <td>{contact.convenio}</td>
      <td>{contact.email}</td>
      <td>{contact.cep}</td>
      <td>{contact.endereco}</td>
      <td>{contact.numero}</td>
      <td>{contact.complemento}</td>
      <td>
        <button
          type="button" className="btn btn-warning"
          onClick={(event) => handleEditClick(event, contact)}
        >
          ✍🏻
        </button>  
        <button type="button" className="btn btn-danger" onClick={() => handleDeleteClick(contact.id)}>
        🗑️
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
