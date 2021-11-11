import React from 'react'
import Card from '../components/card'
import backgroundImage from '../image/fundo.jpeg'



class Login extends React.Component{
    
        // Aqui estou inicializando o component App. Nesta função estamos inicializando o state e passando os
        // valores do usuário e da senha como vazio. o super(props) é um requisito do próprio react
        constructor(props) {
            super(props);
            this.state = {
                usuario: "",
                senha: ""
            }
        }
            // Está função é executada cada vez que o usuário digitar algo no input. Uma vez que ele digitou algo no input
    // essa função é executada e seta o conteúdo do input no state do component, mais precisamente no campo de usuário
    onChangeUsuario = (e) => {
        this.setState({usuario: e.target.value})
    }
    // Está função é executada cada vez que o usuário digitar algo no input. Uma vez que ele digitou algo no input
    // essa função é executada e seta o conteúdo do input no state do component, mais precisamente no campo de senha
    onChangeSenha = (e) => {
        this.setState({senha: e.target.value})
    }
  onClickMenu = () =>{ 
      //NÃO ESTÁ FUNCIONANDO A VALIDAÇÃO SE ALGUEM SOUBER ARRUMAR (entra normal no menu) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
      /*this.usuario = usuario
      this.senha = senha
    if (usuario == 'admin' && senha == '123'){*/
    window.location.href = '/Menu'}
   /* else{
        alert('Usuario ou Senha invalido')
    }}*/


    render (){
     
        return (
           
            
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
                                                  {/* para cada caracter que o usuário digitar nesse campo ele vai chamar a função onChangeUsuario*/}
                                                    <input type="text" id="usuario" className="form-control" onChange={this.onChangeUsuario} placeholder="Digite o usuario"/><br/>
                                                    {/*para cada caracter que o usuário digitar nesse campo ele vai chamar a função onChangeSenha */}
                                                    <input type="password" id="senha" className="form-control" onChange={this.onChangeSenha} placeholder="Digite a senha"/><br/>
                                                    <button type="button" id="btEntrar" className="btn btn-success" onClick={this.onClickMenu}
                                                    /*Aqui nessa condição, verifico se o conteudo do state usuário e ou senha é igual a zero.
                                                     Caso um dos 2 sejam igual a zero, o botão permanecerá desabilitado */
                                                    disabled={this.state.usuario.length === 0 || this.state.senha.length === 0}>Entrar
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
        )
    }
    
}


export default Login