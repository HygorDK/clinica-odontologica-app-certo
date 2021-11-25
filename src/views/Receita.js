import React, {Component} from 'react';
import Header from '../components/Header';
import backgroundImage from '../image/fundo.jpeg'
import Footer from '../components/Footer';


class Receita extends Component  {
    render() {
        const div = () =>{
        var conteudo = document.getElementById('sua_div').innerHTML,
        tela_impressao = window.open('about:blank');

        tela_impressao.document.write(conteudo);
        tela_impressao.window.print();
        tela_impressao.window.close();
        }
    return (
    <div className="app-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <Header></Header>
        <br>
        </br>
        
        <div class ="row">
            <div class="col-md-5 col-xs-5">
                
            </div>
            <div class="col-md-4 col-xs-4">
                <button id="btn" className="botao" onClick={div} style={{fontWeight: "bold" }} > Clique para imprimir </button>
                <br>
                </br>
                <br>
                </br>
        
            </div>
        </div>
        <div id="sua_div" class="row" >
            <div class="col-md-2 col-xs-2">

            </div>
            <div class="col-md-10 col-xs-10">
                <img src='https://i.pinimg.com/originals/a1/47/92/a147925fa03e45d82f37ef7590f00f4f.jpg'/>
            </div>  

        </div>
        
        
        
        
    
    <Footer></Footer>

    </div>
    );
    }
}
export default Receita