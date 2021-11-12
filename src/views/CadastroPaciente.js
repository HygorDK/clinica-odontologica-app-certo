import React from'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'
import SelectMenu from '../components/selectMenu'
import Footer from './Footer'
import Header from './Header'
import InputMask from "react-input-mask";
import backgroundImage from '../image/fundo.jpeg'

const a=()=>{
  
        window.location.href ="./CadastroPaciente";
}


  
class CadastroPaciente extends React.Component{
    
    state ={
        nome:'',
        CPF:'',
        telefone:'',
        celular:'',
        email:'',
        cep:'',
        endereco:'',
        numero:'',
        complemento:'',
        datadenascimento:'',
        convenio:''
    }
    
    render(){
    
            
      const lista = [
          {label:'SELECIONE', value:''},
          {label:'MASCULINO', value:'Masculino'},
          {label:'FEMININO', value:'Feminino'},
          {label:'NÃO-BINÁRIO', value:'Nb'},
          {label:'NÃO ESPECIFICADO', value:'Ne'}
      ]
     
        return (
            
            <div style={{ backgroundImage: `url(${backgroundImage})` }}> 
                <Header></Header>
                
               <main className="container ">
            
              
            <Card title = "Cadastro de Paciente">
        <form>
            <div class="row">
                <div class="col-lg-12">
                <div class="form-group">
                    <div class="bs-component">
                        <label htmlFor ="inputNome"> Nome:  * </label>
                            <input type= "text" 
                            id="inputNome" 
                            className="form-control"
                            name="nome"
                            onChange={e=>this.setState({nome:e.target.value})}/>
                    </div>
                    </div>
                </div>
            </div>
            <div class ="row">
                <div class="col-md-4 col-xs-4">
                          <label  htmlFor="inputCPF">CPF:  *</label>
                              <InputMask
                              mask="999.999.999-99"
                              type= "text" 
                              id="inputCPF" 
                              className="form-control"
                              name="CPF"
                              onChange={e=>this.setState({CPF:e.target.value})}/>
                </div>
                <div class="col-md-4 col-xs-4">
                        <FormGroup label="Data de Nascimento:   *" htmlFor="inputdatanascimento">
                            <input type= "date" 
                            id="inputdatanascimento" 
                            className="form-control"
                            name="datanascimento"
                            onChange={e=>this.setState({datanascimento:e.target.value})}/>
                        </FormGroup>
                </div>
                <div class="col-md-4 col-xs-4">
                        <FormGroup htmlFor="inputSexo" label= "Sexo:  *">
                            <SelectMenu id="inputSexo" className="form-control"lista={lista}/>
                        </FormGroup>
                </div>
            </div>
            <div class= "row">
                <div class="col-md-4 col-xs-4">
                        <label  htmlFor="inputTelefone">Telefone:  </label>
                            <InputMask
                            mask="(99) 99999-9999"
                            type= "text" 
                            id="inputTelefone" 
                            className="form-control"
                            name="telefone"
                            onChange={e=>this.setState({telefone:e.target.value})}/>
                </div>
                <div class="col-md-4 col-xs-4">
                        
                        <label htmlFor="inputCelular">Celular:  </label>
                        <InputMask
                            mask="(99) 9 9999-9999"
                            type= "text" 
                            id="inputCelular" 
                            className="form-control"
                            name="Celular"
                            onChange={e=>this.setState({Celular:e.target.value})}/>
                </div>
                <div class="col-md-4 col-xs-4">
                        
                        <label htmlFor="inputConvenio">Convênio:  </label>
                        <input type= "text" 
                            id="inputConvenio" 
                            className="form-control"
                            name="Convenio"
                            onChange={e=>this.setState({Convenio:e.target.value})}/>
                </div>
            </div>
            <div class= "row">
                <div class="col-md-12 col-xs-12">
                        <FormGroup label="Email:   " htmlFor="inputEmail">
                            <input type= "email" 
                            id="inputEmail" 
                            className="form-control"
                            name="email"
                            onChange={e=>this.setState({email:e.target.value})}/>
                        </FormGroup>
                </div>
            </div>
            <div class ="row">
                <div class="col-md-2 col-xs-2">
                        <FormGroup label="CEP:   *" htmlFor="inputCep">
                        <InputMask
                            mask="9999-999"
                            type= "text" 
                            id="inputCep" 
                            className="form-control"
                            name="Cep"
                            onChange={e=>this.setState({Cep:e.target.value})}/>
                        </FormGroup>
                </div>
                <div class="col-md-6 col-xs-6">
                        <FormGroup label="Endereço:   *" htmlFor="inputEndereco">
                            <input type= "text" 
                            id="inputEndereco" 
                            className="form-control"
                            name="endereco"
                            onChange={e=>this.setState({endereco:e.target.value})}/>
                        </FormGroup>
                </div>
                <div class="col-md-2 col-xs-2">
                        <FormGroup label="Numero:   *" htmlFor="inputNumero">
                            <input type= "text" 
                            id="inputNumero" 
                            className="form-control"
                            name="Numero"
                            onChange={e=>this.setState({Numero:e.target.value})}/>
                        </FormGroup>
                </div>
                <div class="col-md-2 col-xs-2">
                        <FormGroup label="Complemento:   " htmlFor="inputComplemento">
                            <input type= "text" 
                            id="inputComplemento" 
                            className="form-control"
                            name="complemento"
                            onChange={e=>this.setState({complemento:e.target.value})}/>
                        </FormGroup>
                </div> 
            </div>
                        <br>
                        </br>
                        <br>
                        </br>
                        <br>
                        </br>
                      <button className="btn btn-danger">Cadastrar</button>
                      <button className="btn btn-primary">Consultar</button>
                      <button type="reset" className="btn btn-warning" >Apagar</button>
          </form>
        </Card>
        </main>
        
        <Footer></Footer>
    </div>

        )


    }


        }
        
export default CadastroPaciente;

