import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return  <footer className="bd-footer text-muted">
              <div className="container-fluid p-3 p-md-5">
                <ul className="bd-footer-links">
                 <a 
                  rel="noopener noreferrer" href="https://github.com/HygorDK/clinica-odontologica-app-certo" 
                  target="_blank">GitHub
                 </a>
                </ul>
                <p>APP 
                  versão 12.04
                 <a href="/#"></a>
                </p>
              </div>
            </footer>
  }
}

export default Footer;