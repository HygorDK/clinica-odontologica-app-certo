import React, { useState, Fragment, useMemo } from "react";
import { nanoid } from "nanoid";
import data from "../data/dentista-data.json"
import ReadOnlyRowB from "../components/ReadOnlyRowB";
import EditableRowB from "../components/EditableRowB";
import Card from '../components/card'
import InputMask from "react-input-mask";
import Header from '../components/Header';
import Footer from '../components/Footer';
import backgroundImage from '../image/fundo.jpeg'
import '../styles.css'

const CadastroDentista = () => {
  

  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    email: "",
    cro: "",
    telefone: "",
    celular: "",
  
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    email: "",
    cro: "",
    telefone: "",
    celular: "",

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
      email: addFormData.email,
      cro: addFormData.cro,
      telefone: addFormData.telefone,
      celular: addFormData.celular,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      email: editFormData.email,
      cro: editFormData.cro,
      telefone: editFormData.telefone,
      celular: editFormData.celular,
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
      cro: contact.cro,
      email: contact.email,
      telefone: contact.telefone,
      celular: contact.celular,
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

      <Card title = "Cadastro de Dentista">
      <form onSubmit={handleAddFormSubmit}>
      
      <div class='row'>
          <div class='col-lg-12'>
          <label  htmlFor="inputNome">Nome:*</label>
            <div class="form-group">
              
                <input type= "text" 
                  name="fullName"
                  required="required"
                  className="form-control"
                  placeholder="Digite aqui"
                  onChange={handleAddFormChange}/>
              
            </div>
          </div> 
        </div>
        <div class ='row'>
          <div class='col-lg-12'>
            <div class="form-group">
            <label>Email:*</label>
              <input
                type="email"
                name="email"
                required="required"
                className="form-control"
                placeholder="Digite aqui"
                onChange={handleAddFormChange}
              />
            </div>
          </div>
        </div>
        <div class ='row'>
          <div class="col-md-4 col-xs-4">
          <label  htmlFor="inputCPF">CRO:*</label>
            <div class='FormGroup'>
              <InputMask
                mask="aa 99-999"
                type="text"
                name="cro"
                required="required"
                className="form-control"
                placeholder="Digite aqui"
                onChange={handleAddFormChange}
              />
            </div>
          </div>
        <div class="col-md-4 col-xs-4">
          <div class='FormGroup'>
            <label  htmlFor="inputTelefone">Telefone:*</label>
              <InputMask
                mask="(99) 9999-9999"
                type="text"
                name="telefone"
                required="required"
                className="form-control"
                placeholder="Digite aqui"
                onChange={handleAddFormChange}
              />
            </div>
          </div>
          <div class="col-md-4 col-xs-4">
            <div class='FormGroup'>
            <label  htmlFor="inputCelular">Celular:*</label>
              <InputMask
                mask="(99) 9 9999-9999"
                type="text"
                name="celular"
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
      <Card title = "Dentistas cadastrados">
      <form onSubmit={handleEditFormSubmit}> 
        <table id="tbDentista">
          <thead>
            <tr>

              <th>NOME</th>
              <th>EMAIL</th>
              <th>CRO</th>
              <th>TELEFONE</th>
              <th>CELULAR</th>
              <th>AÇÕES</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRowB
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRowB
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

export default CadastroDentista;
