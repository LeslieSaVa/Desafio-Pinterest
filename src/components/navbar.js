import React from 'react';
import './navbar.css'

function Navbar (props) {
    
        return (
            <div className="navBar">
                <div id="search-wrapper">
                    <ul>
                        <li clasName="Home">Inicio</li>
                        <li>Siguiendo</li>
                        <li><i className="fas fa-user-circle"></i>Leslie</li>
                        <li><i className="fas fa-comment-dots"></i></li>
                        <li><i className="fas fa-bell"></i></li>
                        <li><i className="fas fa-ellipsis-h"></i></li>
                    </ul>
                    <input type="text" id="search" className="input" placeholder="Buscar"/>
                    <i className="fas fa-search"></i>
                    <i className="fab fa-pinterest logo"></i>
                </div>
            </div>
        )
}

export default Navbar;