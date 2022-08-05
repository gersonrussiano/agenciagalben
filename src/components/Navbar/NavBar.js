import React, { Component } from 'react';
//estilo
import './NavBar.css';
//itens
import { MenuItems } from './MenuItems';
//logomarca
import logomarca from './imagens/galben-logomarca.svg';

class NavBar extends Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return(
            <header className='header'>
                <nav className='NavbarItems grid-container'>
                    <a className='navbar-brand' href="#">
                        <img src={logomarca} alt="logomarca da Agência Galben"/>
                    </a>
                    <div className='menu-icon' onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                        {item.title}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </header>
        );
    };
};

export default NavBar;