import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <div>
                <p>Fale conosco: (84) 3613-2707</p>
            </div>

            <div>
                <a href="index.html">
                    {/* <img id="logo" src="assets/logo-hires.png" alt="" /> */}
                </a>
                <ul>
                    <li>
                        <a href="#start-banner">Início</a>
                    </li>
                    <li>
                        <a href="#about">Sobre</a>
                    </li>
                    <li>
                        <a href="#services">Serviços</a>
                    </li>
                    <li>
                        <a href="#gallery">Galeria</a>
                    </li>
                    <li>
                        <a href="#contact">Contato</a>
                    </li>
                </ul>

                <div>
                    <a href="/">
                        {/* <img src="assets/menu_icon.png" alt="" /> */}
                    </a>
                    <div>
                        {/* <img src="assets/close_btn.png" alt="" /> */}

                        <a href="#start-banner">Início</a>
                        <a href="#about">Sobre</a>
                        <a href="#services">Serviços</a>
                        <a href="#gallery">Galeria</a>
                        <a href="#contact">Contato</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;