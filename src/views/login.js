import React from 'react'
import Card from '../components/card'
import backgroundImage from '../image/fundo.jpeg'


class Login extends React.Component{

        constructor(props) {
            super(props);
            this.handleSenhaClick = this.handleSenhaClick.bind(this);
            
            this.state = {
                usuario: "",
                senha: ""
            }
        }
           
    onChangeUsuario = (e) => {
        this.setState({usuario: e.target.value})
    }
   
    onChangeSenha = (e) => {
        this.setState({senha: e.target.value})
    }

    handleSenhaClick() {
        this.setState({usuario: target.value});
      }
  
    render (){
        const valida = () =>{
        const usuario = this.state.usuario
        const senha = this.state.senha

            if (usuario === 'admin' && senha === '123'){
                 window.location.href = '/Menu'}
                else{
                    alert('Usuario ou Senha invalido')
                } 
            }
     
        return (
            
               
           <div>
            <div style={{ backgroundImage: `url(${backgroundImage})` }}>
                
            <div className= "container">
                <div className ="row"> 
                <div className ="col-md-6" style= {{position:'relative',left:'300px',paddingTop:'120px',height: '100vh'}}>
                        <div className= "bs-docs-section">
                            <Card title="Login">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="bs-component">
                                            <fieldset>
                                                  
                                                    <input type="text" name="usuario" id="usuario" className="form-control" onChange={this.onChangeUsuario} placeholder="Digite o usuario"/><br/>
                                                    <input type="password" name="senha" id="senha" className="form-control" onChange={this.onChangeSenha} placeholder="Digite a senha"/><br/>
                                                    <button type="button" id="btEntrar" className="btn btn-success" onClick={valida}
                                                    disabled={this.state.usuario.length === 0 || this.state.senha.length === 0 } >Entrar
                                                    </button>    
                                                    
                                               
                                                    <br>
                                                    </br>
                                     

                                                                    
                                            </fieldset>
                                            
                                        </div>
                                    </div>

                                </div>
                            </Card>
                           

                            
                    </div>
                </div>
            </div>
         </div>
         </div>
        </div>
        )
    }
    
}


export default Login