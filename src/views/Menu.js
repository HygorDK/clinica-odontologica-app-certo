import React, {Component} from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import { link } from 'react-router-dom';

class Menu extends Component {
render() {
    return(
        <div>
            <Header></Header>
            <Body></Body>
            <Footer></Footer>

        </div>
    )


}
}

export default Menu;