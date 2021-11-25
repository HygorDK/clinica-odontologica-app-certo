import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Menu from './views/Menu'
import * as serviceWorker from './serviceWorker'
import CadastroPaciente from './views/CadastroPaciente'
import CadastroAtendimento from './views/CadastroAtendimento'
import Receita from './views/Receita'
import CadastroDentista from './views/CadastroDentista';





ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/Menu" component={Menu} />
        <Route path="/CadastroPaciente" component={CadastroPaciente} />
        <Route path="/Receita" component={Receita} />
        <Route path="/CadastroAtendimento" component={CadastroAtendimento} />
        <Route path="/CadastroDentista" component={CadastroDentista} />

        
        
        
    </Switch>
  </ BrowserRouter>,
  document.getElementById('root')
);


serviceWorker.unregister();