import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import data from "../mock-data.json";
import ReadOnlyRow from "../components/ReadOnlyRow";
import FormGroup from '../components/form-group'
import EditableRow from "../components/EditableRow";
import Card from '../components/card'
import SelectMenu from '../components/selectMenu'
import InputMask from "react-input-mask";
import Header from './Header';
import Footer from './Footer';
import backgroundImage from '../image/fundo.jpeg'

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    cpf: "",
    data: "",
    sexo: "",
    telefone: "",
    celular: "",
    convenio: "",
    email: "",
    cep: "",
    endereco: "",
    numero: "",
    complemento: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    cpf: "",
    data: "",
    sexo: "",
    telefone: "",
    celular: "",
    convenio: "",
    email: "",
    cep: "",
    endereco: "",
    numero: "",
    complemento: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      cpf: addFormData.cpf,
      data: addFormData.data,
      sexo: addFormData.sexo,
      telefone: addFormData.telefone,
      celular: addFormData.celular,
      convenio: addFormData.convenio,
      email: addFormData.email,
      cep: addFormData.cep,
      endereco: addFormData.endereco,
      numero: addFormData.numero,
      complemento: addFormData.complemento,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      cpf: editFormData.cpf,
      data: editFormData.data,
      sexo: editFormData.sexo,
      telefone: editFormData.telefone,
      celular: editFormData.celular,
      convenio: editFormData.convenio,
      email: editFormData.email,
      cep: editFormData.cep,
      endereco: editFormData.endereco,
      numero: editFormData.numero,
      complemento: editFormData.complemento,
    };


    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      cpf: contact.cpf,
      data: contact.data,
      sexo: contact.sexo,
      telefone: contact.telefone,
      celular: contact.celular,
      convenio: contact.convenio,
      email: contact.email,
      cep: contact.cep,
      endereco: contact.endereco,
      numero: contact.numero,
      complemento: contact.complemento,
    };


    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  const lista = [
    {label:'SELECIONE', value:''},
    {label:'MASCULINO', value:'Masculino'},
    {label:'FEMININO', value:'Feminino'},
    {label:'NÃO-BINÁRIO', value:'Nb'},
    {label:'NÃO ESPECIFICADO', value:'Ne'}
]

  return (
    <div className="app-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Header></Header>

      <h2>Cadastrar um Paciente</h2>
      
      <form onSubmit={handleAddFormSubmit}>
        <input type= "text" 
          name="fullName"
          required="required"
          placeholder="Digite o nome..."
          onChange={handleAddFormChange}/>
                        
        
        <InputMask
          mask="999.999.999-99"
          type="text"
          name="cpf"
          required="required"
          placeholder="Digite o CPF..."
          onChange={handleAddFormChange}
        />

        <FormGroup htmlFor="inputdatanascimento">
        <input
          type="date"
          name="data"
          required="required"
          placeholder="Digite a Data de Nascimento..."
          onChange={handleAddFormChange}
        />
        </FormGroup>
        
        <FormGroup htmlFor="inputSexo">
         <SelectMenu name="sexo" lista={lista}/>
        </FormGroup>
        <InputMask
          mask="(99) 9999-9999"
          type="text"
          name="telefone"
          required="required"
          placeholder="Digite o Telefone..."
          onChange={handleAddFormChange}
        />
       
        <InputMask
        mask="(99) 9 9999-9999"
          type="text"
          name="celular"
          required="required"
          placeholder="Digite o Celular..."
          onChange={handleAddFormChange}
        />
       <input
          type="text"
          name="convenio"
          required="required"
          placeholder="Digite o Convenio..."
          onChange={handleAddFormChange}
        />
        
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Digite o email..."
          onChange={handleAddFormChange}
        />
        
        <InputMask
          mask="99999-999"
          type="text"
          name="cep"
          required="required"
          placeholder="Digite o CEP..."
          onChange={handleAddFormChange}
        />
        
        <input
          type="text"
          name="endereco"
          required="required"
          placeholder="Digite o Endereço..."
          onChange={handleAddFormChange}
        />

        <input
          type="number"
          name="numero"
          required="required"
          placeholder="Digite o Número da Casa.."
          onChange={handleAddFormChange}
        />
        
        
        
        <input
          type="text"
          name="complemento"
          required="required"
          placeholder="Complemento da Casa..."
          onChange={handleAddFormChange}
        />
        
        
        
        
        <button type="submit">Cadastrar</button>
        
      </form>

      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>cpf</th>
              <th>Data de Nascimento</th>
              <th>Sexo</th>
              <th>Telefone</th>
              <th>Celular</th>
              <th>Convenio</th>
              <th>Email</th>
              <th>cep</th>
              <th>endereco</th>
              <th>numero</th>
              <th>complemento</th>           
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      <Footer></Footer>
    </div>
    
  );
};

export default App;
