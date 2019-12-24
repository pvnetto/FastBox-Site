import React from 'react';
import style from 'styled-components';
import Fade from 'react-reveal/Fade';

import Container from '../../layout/Container';
import Content from '../../layout/Content';
import Section from '../../layout/Section';
import { device } from '../../helpers/queries';

const AboutContent = style.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;

    img {
        max-width: 100%;
        margin-bottom: 1rem;
    }

    @media ${device.laptop} {
        flex-direction: row;

        img {
            max-width: 40%;
        }

        p {
            max-width: 50%;
        }
    }

    @media ${device.laptopL} {
        img {
            max-width: 30%;
        }
    }
`

const About = () => {
    return (
        <Container id="sobre" variant="secondary">
            <Content>
                <Section>

                    <Section.Header>Conheça a FastBox</Section.Header>
                    <AboutContent>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor ornare lacinia. Morbi vitae
                            finibus metus. Quisque vestibulum iaculis mi vel rutrum. Curabitur aliquam tellus nec lacus tempus,
                            sed semper nunc tempor. Sed at lacus sed risus sollicitudin pulvinar sit amet at dolor. Nullam congue
                            finibus ante in accumsan. Ut quis feugiat dolor. In posuere congue metus non dapibus. Vestibulum
                                ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
                        <Fade right ssrFadeout>
                            <img src="./images/fastbox_carro_banco.jpg" alt="" />
                        </Fade>
                    </AboutContent>

                </Section>
            </Content>
        </Container>
    );
};

export default About;