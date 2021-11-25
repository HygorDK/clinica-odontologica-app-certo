import React, { Component } from 'react';
class Body extends Component {
  
  render() {
    
    const zeroFill = n => {
      return ('0' + n).slice(-2);
    }

   
    const interval = setInterval(() => {
     
      const now = new Date();

     
      const dataHora = zeroFill(now.getUTCDate()  ) + '/' + zeroFill((now.getMonth() + 1)) + '/' + now.getFullYear() + ' ' + zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());
      document.getElementById('data-hora').innerHTML = dataHora;
    }, 1000);

    return  (
      <main className="bd-masthead" id="content" role="main">
        <div className="container">
          <div className="row">
            <div className="col-6 mx-auto col-md-4 order-md-2">
            <p> 
            </p>
            </div>
            <div className="col-md-8 order-md-1 text-center text-md-left pr-md-5">
              <h1 className="mb-3">Bem-Vindo</h1>
              <h2>Agenda do Dia</h2>
              <div id="data-hora"></div>  
        <table>
          <thead>
            <tr>

              <th>NOME</th>
              <th>HORA</th>
              <th>DENTISTA</th>

            </tr>
          </thead>
          <tr>
		      <td>Fabricio de Abreu</td>
				  <td>26-11-2020</td>
				  <td>Breno F.</td>
				  </tr>
        </table>             
            <div className="d-flex flex-column flex-md-row">
                
              </div>
              <p className="text-muted mb-0"> 
              </p>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Body;