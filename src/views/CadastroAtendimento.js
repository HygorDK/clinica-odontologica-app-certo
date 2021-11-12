import React from 'react';
import Card from '../components/card';
import InputMask from "react-input-mask";
import backgroundImage from '../image/fundo.jpeg'
import Footer from './Footer'
import Header from './Header'

 class CadastroAtendimento extends React.Component {

    render() {


        return (
            <div style={{ backgroundImage: `url(${backgroundImage})` }}> 
                <Header></Header>
                
                <main className="container ">
                    <Card title=" Atendimento">
                    <form>
                    <div class="row">
                        <div class="form-group">
                            <div class="bs-component">
                                <label htmlFor="inputNome"> Nome:  * </label>
                                    <input type="text"
                                        id="inputNome"
                                        className="form-control"
                                        name="nome"
                                        onChange={this.onChangeUsuario} />

                            <div class="col-md-12 col-xs-6">
                                <label htmlFor="inputCPF">CPF:  *</label>
                                <InputMask
                                    mask="999.999.999-99"
                                    type="text"
                                    id="inputCPF"
                                    className="form-control"
                                    name="CPF"
                                    onChange={this.onChangeCpf} />
                            </div>
                            <br>
                            </br>
                            <button className="btn btn-success">Pesquisar</button>
                            <button className="btn btn-danger">Cancelar</button>
                            <button type="reset" className="btn btn-warning" >Apagar</button>
                           
                            </div>
                        </div>
                    </div>
                </form>
                        </Card>
                    </main>
        
        <Footer></Footer>   
        </div>
        )

    }
}
export default CadastroAtendimento;