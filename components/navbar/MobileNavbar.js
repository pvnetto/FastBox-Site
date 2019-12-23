import React, { useState } from 'react';

import style from 'styled-components';
import Colors from '../helpers/colors';
import { device } from '../helpers/queries';

const MobileNavStyle = style.div`
    position: fixed;
    top: 0;
    right: 0;

    z-index: 100;
    
    width: 100%;
    height: 100vh;

    transition: all 0.3s ease;
    transform: ${props => props.active ? 'translateX(0)' : 'translateX(110%)'};

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background: ${Colors.BLUE};

    @media ${device.laptop} {
        display: none;
    }
`

const MobileNavIcon = style.div`
    position: fixed;
    top: 0;
    right: 0;
    cursor: pointer;
    z-index: 101;

    transform: translateX(-20px) translateY(20px);

    div {
        width: 50px;
        height: 6px;

        margin: 0.5rem 0;

        background: ${Colors.YELLOW};

        transition: all 0.3s ease;
    }

    div:nth-child(1) {
        transform: ${props => props.close ? 'translateY(250%) rotate(45deg)' : 'translateY(0)'};
    }

    div:nth-child(2) {
        opacity: ${props => props.close ? '0' : '1'};
    }

    div:nth-child(3) {
        transform: ${props => props.close ? 'translateY(-200%) rotate(-45deg)' : ''};
    }

    @media ${device.laptop} {
        display: none;
    }
`

const MobileNavButtons = style.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a {
        margin: 1rem 0;
        color: white;
        opacity: 0.8;

        &:hover {
            opacity: 1;
        }
    }
`

const MobileNavbar = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <MobileNavIcon close={isMenuOpen} onClick={() => setMenuOpen(!isMenuOpen)}>
                <div></div>
                <div></div>
                <div></div>
            </MobileNavIcon>
            <MobileNavStyle active={isMenuOpen}>
                <MobileNavButtons>
                    <a onClick={() => setMenuOpen(false)} href="#start-banner">Início</a>
                    <a onClick={() => setMenuOpen(false)} href="#about">Sobre</a>
                    <a onClick={() => setMenuOpen(false)} href="#services">Serviços</a>
                    <a onClick={() => setMenuOpen(false)} href="#gallery">Galeria</a>
                    <a onClick={() => setMenuOpen(false)} href="#contact">Contato</a>
                </MobileNavButtons>
            </MobileNavStyle>
        </>
    );
};

export default MobileNavbar;