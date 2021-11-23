import React from "react";

const EditableRowA = ({
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
          name="nome"
          value={editFormData.nome}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Digite o CPF"
          name="cpf"
          value={editFormData.cpf}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Digite a data"
          name="data"
          value={editFormData.data}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Digite a Hora"
          name="hora"
          value={editFormData.hora}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Digite o nome do Dentista"
          name="dentista"
          value={editFormData.dentista}
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

export default EditableRowA;
