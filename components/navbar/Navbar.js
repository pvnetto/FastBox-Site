import React from 'react';
import style from 'styled-components';
import Colors from '../helpers/colors';
import Container from '../layout/Container';
import Content from '../layout/Content';

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

const NavLink = style.a`
    color: ${Colors.BLUE};

    transition: all 0.3s ease;

    padding: 0.3rem 0;

    background-image: linear-gradient(to right, ${Colors.BLUE}, ${Colors.BLUE});
    background-size: 0% 4px;
    background-repeat: no-repeat;
    background-position: 0% 100%;

    &:hover {
        background-size: 100% 4px;
    }
`

const MobileNav = style.div`
    display: none;
`

const NavContent = style.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const NavLogo = style.img`
    max-width: 200px;
    height: auto;
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
                <NavContent>
                    <a href="/">
                        <NavLogo src="./images/logo-hires.png" alt="" />
                    </a>
                    <NavList>
                        <li>
                            <NavLink href="#start-banner">Início</NavLink>
                        </li>
                        <li>
                            <NavLink href="#about">Sobre</NavLink>
                        </li>
                        <li>
                            <NavLink href="#services">Serviços</NavLink>
                        </li>
                        <li>
                            <NavLink href="#gallery">Galeria</NavLink>
                        </li>
                        <li>
                            <NavLink href="#contact">Contato</NavLink>
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
                </NavContent>
            </Content>
        </NavbarStyle>
    );
};

export default Navbar;