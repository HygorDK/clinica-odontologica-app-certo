/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, NavDropdown } from 'react';
import { NavLink, Link} from 'react-router-dom'

 

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
              <Link className="navbar-brand mr-0 mr-md-2" to="/"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" className="d-block" viewBox="0 0 612 612" role="img" focusable="false"><title>Bootstrap</title><path fill="currentColor" d="M510 8a94.3 94.3 0 0 1 94 94v408a94.3 94.3 0 0 1-94 94H102a94.3 94.3 0 0 1-94-94V102a94.3 94.3 0 0 1 94-94h408m0-8H102C45.9 0 0 45.9 0 102v408c0 56.1 45.9 102 102 102h408c56.1 0 102-45.9 102-102V102C612 45.9 566.1 0 510 0z"></path><path fill="currentColor" d="M196.77 471.5V154.43h124.15c54.27 0 91 31.64 91 79.1 0 33-24.17 63.72-54.71 69.21v1.76c43.07 5.49 70.75 35.82 70.75 78 0 55.81-40 89-107.45 89zm39.55-180.4h63.28c46.8 0 72.29-18.68 72.29-53 0-31.42-21.53-48.78-60-48.78h-75.57zm78.22 145.46c47.68 0 72.73-19.34 72.73-56s-25.93-55.37-76.46-55.37h-74.49v111.4z"></path></svg></Link>

              <div className="bs-component" ref={this.container}>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="/Menu">
              Home
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              onClick={this.handleButtonClick}
              aria-required aria-labelledby="foo"
            >
              Cadastrar
            </a>
          <div
              className={
                this.state.open ? "dropdown-menu show" : "dropdown-menu"
              }
              x-placement="bottom-start"
            >
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
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              onClick={this.handleButtonClick}
              href="#"
            >
              Buscar
            </a>
            <div
              className={
                this.state.open ? "dropdown-menu show" : "dropdown-menu"
              }
              x-placement="bottom-start"
            >
               <a className="dropdown-item" href="/BuscarAtendimentos">
                Atendimentos
              </a>
              <a className="dropdown-item" href="/BuscarDentista">
                Dentistas
              </a>
              <a className="dropdown-item" href="/BuscarPaciente">
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