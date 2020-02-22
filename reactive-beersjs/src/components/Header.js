import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Home from '../home.svg'

class Header extends Component {
    render() {
        return (
            <header> 
                <Link to="/"><img src={Home} alt="home"/></Link>
            </header>
        )
    }
}

export default Header;