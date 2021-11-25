import React from "react";

const ReadOnlyRowB = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.email}</td>
      <td>{contact.cro}</td>
      <td>{contact.telefone}</td>
      <td>{contact.celular}</td>
      

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

export default ReadOnlyRowB;
