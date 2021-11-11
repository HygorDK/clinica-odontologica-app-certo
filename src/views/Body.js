import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Body extends Component {
  render() {
    return  (
      <main className="bd-masthead" id="content" role="main">
        <div className="container">
          <div className="row">
            <div className="col-6 mx-auto col-md-4 order-md-2">
            <p> 
              Aqui estava a imagem
            </p>
            </div>
            <div className="col-md-8 order-md-1 text-center text-md-left pr-md-5">
              <h1 className="mb-3">Agenda do dia</h1>
              <p className="lead mb-4">
               Não sei
              </p>
              <div className="d-flex flex-column flex-md-row">
                
              </div>
              <p className="text-muted mb-0">
                Versão v0.0.1
              </p>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Body;