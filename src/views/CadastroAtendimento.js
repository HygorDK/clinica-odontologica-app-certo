import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import data from "../atendimento-data.json";
import ReadOnlyRowA from "../components/ReadOnlyRowA"
import FormGroup from '../components/form-group'
import EditableRowA from "../components/EditableRowA";
import Card from '../components/card'
import SelectMenu from '../components/selectMenu'
import InputMask from "react-input-mask";
import Header from './Header';
import Footer from './Footer';
import backgroundImage from '../image/fundo.jpeg'
import './styles.css'

const App = () => {
    
 
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    nome: "",
    cpf: "",
    data: "",
    hora:"",
    dentista:"",
  });

  const [editFormData, setEditFormData] = useState({
    nome: "",
    cpf: "",
    data: "",
    hora:"",
    dentista:"",
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
      nome: addFormData.nome,
      cpf: addFormData.cpf,
      data: addFormData.data,
      hora: addFormData.hora,
      dentista: addFormData.dentista,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      nome: editFormData.nome,
      cpf: editFormData.cpf,
      data: editFormData.data,
      hora: editFormData.hora,
      dentista: editFormData.dentista,
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
      nome: contact.nome,
      cpf: contact.cpf,
      data: contact.data,
      hora: contact.hora,
      dentista: contact.dentista,
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

  return (
    <div className="app-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Header></Header>
      
      <main className="container ">

      <Card title = "Cadastro de Atendimento">
      <form onSubmit={handleAddFormSubmit}>
      
      <div class='row'>
        <div class="col-md-8 col-xs-8"> 
          <label  htmlFor="inputNome">Nome:*</label>
            <div class="form-group">
              
                <input 
                  type= "text" 
                  name="nome"
                  required="required"
                  className="form-control"
                  placeholder="Digite aqui"
                  onChange={handleAddFormChange}/>
              
            </div>
          </div> 
          <div class="col-md-4 col-xs-4">
          <label  htmlFor="inputCPF">CPF:*</label>
            <div class='FormGroup'>
              <InputMask
                mask="999.999.999-99"
                type="text"
                name="cpf"
                required="required"
                className="form-control"
                placeholder="Digite aqui"
                onChange={handleAddFormChange}
              />
            </div>
          </div>
          </div>
          <div class = "row">
          <div class="col-md-4 col-xs-4">
          <label  htmlFor="inputDate">Data:*</label>
            <div class='FormGroup'>
              <input
                type="date"
                name="data"
                required="required"
                className="form-control"
                placeholder="Digite aqui"
                onChange={handleAddFormChange}
              />
            </div>
          </div>
          <div class="col-md-4 col-xs-4">
          <label  htmlFor="inputDate">Hora:*</label>
            <div class='FormGroup'>
              <input
                type="text"
                name="hora"
                required="required"
                className="form-control"
                placeholder="Digite aqui"
                onChange={handleAddFormChange}
              />
            </div>
          </div>
          <div class="col-md-4 col-xs-4">
          <label  htmlFor="inputDentista">Dentista:*</label>
            <div class='FormGroup'>
              <input
                type="text"
                name="dentista"
                required="required"
                className="form-control"
                placeholder="Digite aqui"
                onChange={handleAddFormChange}
              />
            </div>
          </div>
        </div>
        <br>
        </br>
                      
                        
        <button className="btn btn-success" type="submit">Cadastrar</button>
        </form>
      </Card>
      </main>
      <Card title = "Atendimentos cadastrados">
      <form onSubmit={handleEditFormSubmit}> 
        <table>
          <thead>
            <tr>

              <th>NOME</th>
              <th>CPF</th>
              <th>DATA</th>
              <th>HORA</th>
              <th>DENTISTA</th>
              <th>AÇÕES</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRowA
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRowA
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

        </Card>

      <Footer></Footer>
    </div>
    
  );
}

export default App;