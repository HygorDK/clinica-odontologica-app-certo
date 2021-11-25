import React from "react";

const EditableRowB = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Digite o nome"
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="Digite o e-mail"
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Digite o CRO"
          name="cro"
          value={editFormData.cpf}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Digite o Telefone"
          name="telefone"
          value={editFormData.telefone}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Digite o celular"
          name="celular"
          value={editFormData.celular}
          onChange={handleEditFormChange}
        ></input>
      </td>
    
      <td>
        <button type="submit" className="btn btn-success">Salvar</button>
        <button type="button" className="btn btn-danger" onClick={handleCancelClick}>
          Cancelar
        </button>
      </td>
    </tr>
  );
};

export default EditableRowB;
