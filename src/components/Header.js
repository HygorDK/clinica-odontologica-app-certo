import React, { Component } from 'react';
import { NavLink} from 'react-router-dom'

 

class Header extends Component {
  container = React.createRef();
  state = {
    open: false
  };
  handleButtonClick = () => {
    this.setState(state => {
      return {
        open: !state.open
      };
    });
  };
  
  handleClickOutside = event => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        open: false
      });
    }
  };
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  render() {
    return <header className="navbar navbar-expand navbar-dark flex-column flex-md-row navanav">
              <link href="https://getbootstrap.com/docs/4.5/dist/css/bootstrap.min.css" rel="stylesheet" crossOrigin="anonymous"></link>
              <link href="https://getbootstrap.com/docs/4.5/assets/css/docs.min.css" rel="stylesheet"></link>

      <div className="bs-component" ref={this.container}>
          <ul className="nav nav-tabs">
             <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="/Menu">
                🦷
                </a>
             </li>
             <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="/Menu">
                 Home
                </a>
              </li>
              <li className="nav-item">
                 <a className="nav-link" data-toggle="tab" href="/Receita">
                   Receita
                 </a>
              </li>
              <li className="nav-item dropdown">
                 <a
                  className="nav-link dropdown-toggle"
                  onClick={this.handleButtonClick}>
                 Cadastrar
                </a>
            <div
              className={
                this.state.open ? "dropdown-menu show" : "dropdown-menu"
              }>
                 <a className="dropdown-item" href="/CadastroAtendimento">
                   Atendimentos
                 </a>
                 <a className="dropdown-item" href="/CadastroDentista">
                   Dentistas
                 </a>
                 <a className="dropdown-item" href="/CadastroPaciente">
                  Pacientes
                 </a>
            </div>
              </li>
        </ul>
      </div>
              <ul className="navbar-nav ml-md-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" exact to="/">Sair</NavLink>
                </li>
              </ul>
  </header>
  }
}

export default Header;