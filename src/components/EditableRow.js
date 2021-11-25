import React from "react";

const EditableRow = ({
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
          placeholder="Digite a Data"
          name="data"
          value={editFormData.data}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Digite o Sexo"
          name="sexo"
          value={editFormData.sexo}
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
        <input
          type="text"
          placeholder="Digite o convenio"
          name="convenio"
          value={editFormData.convenio}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="email"
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
          placeholder="Digite o CEP"
          name="cep"
          value={editFormData.cep}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Digite a Rua/Av"
          name="endereco"
          value={editFormData.endereco}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Digite o Numero"
          name="numero"
          value={editFormData.numero}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Digite o Complemento."
          name="complemento"
          value={editFormData.complemento}
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

export default EditableRow;
