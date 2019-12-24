import React from 'react';
import style from 'styled-components';

import Container from '../../layout/Container';
import Content from '../../layout/Content';
import Section from '../../layout/Section';
import Map from './Map';
import { device } from '../../helpers/queries';

const FooterContent = style.div`
    display: flex;

    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`

const ContactContainer = style.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;

    flex-wrap: wrap;
`

const ContactItem = style.div`
    margin-bottom: 1rem;
    width: 100%;

    p {
        margin: 0.7rem 0;
    }

    @media ${device.tablet} {
        max-width: 50%;
    }
`

const Footer = () => {
    return (
        <Container id="contato" variant="tertiary" >
            <Content>
                <Section>
                    <FooterContent>

                        <ContactContainer>
                            <ContactItem>
                                <h3>Contato</h3>
                                <p>(84) 3613-2707</p>
                                <p>(84) 99958-4141</p>
                                <p>redefastbox@hotmail.com</p>
                            </ContactItem>

                            <ContactItem>
                                <h3>Endereço</h3>
                                <p>Rua Nossa Senhora da Conceição, 79</p>
                                <p>Bairro: Lagoa Nova</p>
                                <p>CEP: 59054-720</p>
                                <p>Natal/RN, Brasil</p>
                            </ContactItem>
                        </ContactContainer>

                        <Map />
                    </FooterContent>
                </Section>
            </Content>
        </ Container>
    );
};

export default Footer;