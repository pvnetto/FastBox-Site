import React from 'react';
import style from 'styled-components';
import Fade from 'react-reveal/Fade';

import Content from '../../layout/Content';
import Section from '../../layout/Section';
import ParallaxContainer from '../../layout/ParallaxContainer';
import Button from '../../buttons/Button';
import Colors from '../../helpers/colors';
import { device } from '../../helpers/queries';

const ServicesContent = style.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    margin: -1rem;
`

const ServiceCard = style.div`
    flex: 1 1 100%;
    margin: 3rem 1rem 1rem 1rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    border: 2px solid ${Colors.BLUE};

    padding: 1rem;

    & > * {
        margin-bottom: 1rem;
    }

    p {
        display: flex;
        align-items: center;
    }

    a, button, img {
        width: 100%;
    }

    button {
        padding: 2rem 0;
    }

    @media ${device.tablet} {
        flex: 1 1 40%;
        max-width: 40%;
        min-width: 40%;
    }
    
    @media ${device.laptop} {
        flex: 1;
        max-width: unset;
        min-width: 0;
    }
`

const Services = () => {
    return (
        <ParallaxContainer id="servicos">
            <Content>
                <Section>

                    <Section.Header>Serviços</Section.Header>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor ornare lacinia. Morbi vitae finibus
                        metus. Quisque vestibulum iaculis mi vel rutrum. Curabitur aliquam tellus nec lacus tempus, sed semper
                        nunc tempor. Sed at lacus sed risus sollicitudin pulvinar sit amet at dolor. Nullam congue finibus ante
                        in accumsan. Ut quis feugiat dolor. In posuere congue metus non dapibus. Vestibulum ante ipsum primis
                        in faucibus orci luctus et ultrices posuere cubilia Curae;</p>

                    <Fade left ssrFadeout>
                        <ServicesContent>
                            <ServiceCard>
                                <img src="./images/fastbox_pintura_estufa.jpg" alt="" />
                                <h3>Funilaria</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor ornare lacinia. Morbi vitae finibus
                                metus. Quisque vestibulum iaculis mi vel rutrum. Curabitur aliquam tellus nec lacus tempus, sed semper
                                nunc tempor. Sed at lacus sed risus sollicitudin pulvinar sit amet at dolor.</p>
                                <a href=""><Button primary>Solicite um orçamento!</Button></a>
                            </ServiceCard>

                            <ServiceCard>
                                <img src="./images/fastbox_pintura_estufa.jpg" alt="" />
                                <h3>Pintura</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor ornare lacinia. Morbi vitae finibus
                                metus. Quisque vestibulum iaculis mi vel rutrum. Curabitur aliquam tellus nec lacus tempus, sed semper
                                nunc tempor. Sed at lacus sed risus sollicitudin pulvinar sit amet at dolor.</p>
                                <a href=""><Button primary>Solicite um orçamento!</Button></a>
                            </ServiceCard>

                            <ServiceCard>
                                <img src="./images/fastbox_pintura_estufa.jpg" alt="" />
                                <h3>Polimento</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor ornare lacinia. Morbi vitae finibus
                                metus. Quisque vestibulum iaculis mi vel rutrum. Curabitur aliquam tellus nec lacus tempus, sed semper
                                nunc tempor. Sed at lacus sed risus sollicitudin pulvinar sit amet at dolor.</p>
                                <a href=""><Button primary>Solicite um orçamento!</Button></a>
                            </ServiceCard>
                        </ServicesContent>
                    </Fade>

                </Section>
            </Content>
        </ ParallaxContainer>
    );
};

export default Services;