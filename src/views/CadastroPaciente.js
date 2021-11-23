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
import './styles.css'


const Atendimento = () => {
 
   
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
      <main className="container ">

      <Card title = "Cadastro de Paciente">
      <form onSubmit={handleAddFormSubmit}>
      
      <div class='row'>
          <div class='col-lg-12'>
          <label  htmlFor="inputNome">Nome:*</label>
            <div class="form-group">
              
                <input type= "text" 
                  name="fullName"
                  required="required"
                  className="form-control"
                  placeholder="Digite o nome..."
                  onChange={handleAddFormChange}/>
              
            </div>
          </div> 
        </div>
        <div class ='row'>
          <div class="col-md-4 col-xs-4">
          <label  htmlFor="inputCPF">CPF:*</label>
            <div class='FormGroup'>
              <InputMask
                mask="999.999.999-99"
                type="text"
                name="cpf"
                required="required"
                className="form-control"
                placeholder="Digite o CPF..."
                onChange={handleAddFormChange}
              />
            </div>
          </div>
          <div class="col-md-4 col-xs-4">
          <label  htmlFor="inputDate">Data Nascimento:*</label>
            <div class='FormGroup'>
              <input
                type="date"
                name="data"
                required="required"
                className="form-control"
                placeholder="Digite a Data de Nascimento..."
                onChange={handleAddFormChange}
              />
            </div>
          </div>
          <div class="col-md-4 col-xs-4">
          <label  htmlFor="inputSexo">Sexo:*</label>
            <div class='FormGroup'>
                <SelectMenu name="sexo" lista={lista} className="form-control" onChange={handleAddFormChange}/>
            </div>
          </div>
        </div>
        <div class ='row'>
        <div class="col-md-4 col-xs-4">
          <div class='FormGroup'>
            <label  htmlFor="inputTelefone">Telefone:*</label>
              <InputMask
                mask="(99) 9999-9999"
                type="text"
                name="telefone"
                required="required"
                className="form-control"
                placeholder="Digite o Telefone..."
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
                placeholder="Digite o Celular..."
                onChange={handleAddFormChange}
                />
            </div>
          </div>
          <div class="col-md-4 col-xs-4">
            <div class='FormGroup'>
            <label  htmlFor="inputConvenio">Convênio:*</label>
              <input
                type="text"
                name="convenio"
                required="required"
                className="form-control"
                placeholder="Digite o Convenio..."
                onChange={handleAddFormChange}
              />
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
                placeholder="Digite o email..."
                onChange={handleAddFormChange}
              />
            </div>
          </div>
        </div>
        <h4>Endereço do Paciente:</h4>
        <div class ='row'>
          <div class="col-md-2 col-xs-2">
            <div class='FormGroup'>
            <label>CEP:*</label>
              <InputMask
              mask="99999-999"
              type="text"
              name="cep"
              required="required"
              className="form-control"
              placeholder="Digite o CEP"
              onChange={handleAddFormChange}
              />
            </div>
          </div>
          <div class="col-md-6 col-xs-6">
            <div class='FormGroup'>
            <label>Rua/Av:*</label>
              <input
                type="text"
                name="endereco"
                required="required"
                className="form-control"
                placeholder="Digite o Endereço..."
                onChange={handleAddFormChange}
              />
            </div>
          </div>
          <div class="col-md-2 col-xs-2">
            <div class='FormGroup'>
            <label >Número:*</label>
              <input
                type="number"
                name="numero"
                required="required"
                className="form-control"
                placeholder=" Digite o número"
                onChange={handleAddFormChange}
              />
            </div>
          </div>
          <div class="col-md-2 col-xs-2">
            <div class='FormGroup'>
            <label>Complemento:*</label>
              <input
                type="text"
                name="complemento"
                required="required"
                className="form-control"
                placeholder="Complemento"
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
      <Card title = "Cadastro de Paciente">
      <form onSubmit={handleEditFormSubmit}>
        <table id="tbPaciente" >
          <thead>
            <tr>

              <th>NOME</th>
              <th>CPF</th>
              <th>DATA DE NASCIMENTO</th>
              <th>SEXO</th>
              <th>TELEFONE</th>
              <th>CELULAR</th>
              <th>CONVÊNIO</th>
              <th>EMAIL</th>
              <th>CEP</th>
              <th>ENDEREÇO</th>
              <th>NUMERO</th>
              <th>COMPLEMENTO</th>           
              <th>AÇÕES</th>
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

        </Card>

      <Footer></Footer>
    </div>
    
  );
}

export default Atendimento;
