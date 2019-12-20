import React from 'react';
import style from 'styled-components';

import Container from '../../Container';
import Content from '../../Content';
import Section from '../../Section';

const AboutContent = style.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    p {
        max-width: 60%;
    }

    img {
        max-width: 30%;
    }
`

const About = () => {
    return (
        <Container variant="tertiary">
            <Content>
                <Section>

                    <Section.Header>Conheça a FastBox</Section.Header>
                    <AboutContent>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor ornare lacinia. Morbi vitae
                            finibus metus. Quisque vestibulum iaculis mi vel rutrum. Curabitur aliquam tellus nec lacus tempus,
                            sed semper nunc tempor. Sed at lacus sed risus sollicitudin pulvinar sit amet at dolor. Nullam congue
                            finibus ante in accumsan. Ut quis feugiat dolor. In posuere congue metus non dapibus. Vestibulum
                                ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
                        <img src="./images/fastbox_carro_banco.jpg" alt="" />
                    </AboutContent>

                </Section>
            </Content>
        </Container>
    );
};

export default About;