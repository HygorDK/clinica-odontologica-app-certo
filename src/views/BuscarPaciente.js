import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import backgroundImage from '../image/fundo.jpeg'
import Card from '../components/card';

class BuscarPaciente extends Component {

  render() {
    return  (
      <div style={{ backgroundImage: `url(${backgroundImage})` }}> 
        <Header></Header>
        <main className="container ">
             <Card title="Buscar Paciente">
             <div class="row">
                <div class="form-group">
                  <div class="bs-component">
                    <input type="text" className="form-control"  placeholder="Digite o nome"/><br/>
                    <input type="text" className="form-control"  placeholder="Digite o CPF"/><br/>
                  </div>
                  <br>
                </br>
                <button className="btn btn-success">Buscar</button>
                </div>
              </div>   
              </Card>
        </main>
        <Footer></Footer>
      </div>
    )
  }
}

export default BuscarPaciente;