import React from'react'
import Card from '../components/card'
import Footer from './Footer'
import Header from './Header'
import InputMask from "react-input-mask";
import backgroundImage from '../image/fundo.jpeg'

const a=()=>{
  
        window.location.href ="./UsuarioCadastro";
}


  
class UsuarioCadastro extends React.Component{
    
    state ={
        Nome:'',
        Usuario:'',
        Senha:'',
        Funcao:''
    }
    
    render(){
    
     
        return (
            
            <div style={{ backgroundImage: `url(${backgroundImage})` }}> 
                <Header></Header>
                
               <main className="container ">
            
              
            <Card title = "Novo Usuário">
            <div class="row">
                <div class="col-lg-12">
                <div class="form-group">
                    <div class="bs-component">
                        <label htmlFor ="inputNome"> Nome:* </label>
                            <input type= "text" 
                            id="inputNome" 
                            className="form-control"
                            name="Nome"
                            onChange={e=>this.setState({Nome:e.target.value})}/>
                    </div>
                    </div>
                </div>
            </div>
            <div class ="row">
                <div class="col-md-4 col-xs-4">
                          <label  htmlFor="inputUsuario">Usuario:*</label>
                              <InputMask
                              type= "text" 
                              id="inputUsuario" 
                              className="form-control"
                              name="Usuario"
                              onChange={e=>this.setState({Usuario:e.target.value})}/>
                </div>
                <div class="col-md-4 col-xs-4">
                          <label  htmlFor="inputSenha">Senha:*</label>
                              <InputMask
                              type= "password" 
                              id="inputSenha" 
                              className="form-control"
                              name="Senha"
                              onChange={e=>this.setState({Senha:e.target.value})}/>
                </div>
            </div>
            <div class= "row">
                <div class="col-md-4 col-xs-4">
                        <label  htmlFor="inputFuncao">Função:*  </label>
                            <InputMask
                            type= "text" 
                            id="inputFuncao" 
                            className="form-control"
                            name="Funcao"
                            onChange={e=>this.setState({Funcao:e.target.value})}/>
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
                      <button className="btn btn-warning" onClickCapture={(a)} >Apagar</button>
          
        </Card>
        </main>
        
        <Footer></Footer>
    </div>

        )


    }


        }
    
export default UsuarioCadastro;

