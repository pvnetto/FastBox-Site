import React from 'react';
import style from 'styled-components';
import Colors from '../helpers/colors';
import Container from '../Container';
import Content from '../Content';

const NavbarStyle = style.nav`
    position: fixed;
    width: 100%;
    z-index: 100;

    background: white;
    border-bottom: 8px solid ${Colors.YELLOW};
    opacity: 0.97;
`

const NavbarTop = style.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0.5rem 0;
`

const NavList = style.ul`
    padding: 2.3rem 0;
    display: flex;
    justify-content: flex-end;

    li {
        display: inline;
        margin-left: 2rem;
    }
`

const MobileNav = style.div`
    display: none;
`

const Navbar = () => {
    return (
        <NavbarStyle>
            <Container variant={'secondary'}>
                <Content>
                    <NavbarTop>
                        <small>Fale conosco: (84) 3613-2707</small>
                    </NavbarTop>
                </Content>
            </Container>

            <Content>
                <div>
                    <a href="index.html">
                        {/* <img id="logo" src="assets/logo-hires.png" alt="" /> */}
                    </a>
                    <NavList>
                        <li>
                            <a href="#start-banner"><p>Início</p></a>
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
                    </NavList>

                    <MobileNav>
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
                    </MobileNav>
                </div>
            </Content>
        </NavbarStyle>
    );
};

export default Navbar;