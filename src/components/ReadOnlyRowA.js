import React from "react";

const ReadOnlyRowA = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.nome}</td>
      <td>{contact.cpf}</td>
      <td>{contact.data}</td>
      <td>{contact.hora}</td>
      <td>{contact.dentista}</td>
     
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

export default ReadOnlyRowA;


