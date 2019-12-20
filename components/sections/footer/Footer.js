import React from 'react';
import FooterNote from './FooterNote';

const Footer = () => {
    return (
        <footer id="contact">
            <div class="contact-container">
                <div class="contact-info contact">
                    <h4>Contato</h4>
                    <p>(84) 3613-2707</p>
                    <p>(84) 99958-4141</p>
                    <p>redefastbox@hotmail.com</p>
                </div>

                <div class="contact-info address">
                    <h4>Endereço</h4>
                    <p>Rua Nossa Senhora da Conceição, 79</p>
                    <p>Bairro: Lagoa Nova</p>
                    <p>CEP: 59054-720</p>
                    <p>Natal/RN, Brasil</p>
                </div>

                <div id="map-location"></div>
                <FooterNote />
            </div>
        </footer>
    );
};

export default Footer;