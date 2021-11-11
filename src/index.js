import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Menu from './views/Menu'
import * as serviceWorker from './serviceWorker'
import CadastroPaciente from './views/CadastroPaciente'
import CadastroAtendimento from './views/CadastroAtendimento'
import BuscarPaciente from './views/BuscarPaciente';




ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/Menu" component={Menu} />
        <Route path="/CadastroPaciente" component={CadastroPaciente} />
        <Route path="/BuscarPaciente" component={BuscarPaciente} />
        <Route path="/CadastroAtendimento" component={CadastroAtendimento} />
        
        
        
    </Switch>
  </ BrowserRouter>,
  document.getElementById('root')
);


serviceWorker.unregister();