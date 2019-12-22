import React from 'react';
import style from 'styled-components';

import Content from '../../Content';
import Section from '../../Section';
import Button from '../../buttons/Button';
import ParallaxContainer from '../../ParallaxContainer';

const ServicesContent = style.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: -1rem;
`

const ServiceItem = style.div`
    flex: 1;
    margin: 3rem 1rem 1rem 1rem;

    img {
        width: 100%;
    }

    button {
        margin-top: 1rem;
        padding: 2rem 0;
        width: 100%;
    }
`

const Services = () => {
    return (
        <ParallaxContainer>
            <Content>
                <Section>

                    <Section.Header>Serviços</Section.Header>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor ornare lacinia. Morbi vitae finibus
                        metus. Quisque vestibulum iaculis mi vel rutrum. Curabitur aliquam tellus nec lacus tempus, sed semper
                        nunc tempor. Sed at lacus sed risus sollicitudin pulvinar sit amet at dolor. Nullam congue finibus ante
                        in accumsan. Ut quis feugiat dolor. In posuere congue metus non dapibus. Vestibulum ante ipsum primis
                        in faucibus orci luctus et ultrices posuere cubilia Curae;</p>

                    <ServicesContent>
                        <ServiceItem>
                            <img src="./images/fastbox_pintura_estufa.jpg" alt="" />
                            <a href=""><Button primary>Funilaria</Button></a>
                        </ServiceItem>

                        <ServiceItem>
                            <img src="./images/fastbox_pintura_estufa.jpg" alt="" />
                            <a href=""><Button primary>Pintura</Button></a>
                        </ServiceItem>

                        <ServiceItem>
                            <img src="./images/fastbox_pintura_estufa.jpg" alt="" />
                            <a href=""><Button primary>Polimento</Button></a>
                        </ServiceItem>
                    </ServicesContent>

                </Section>
            </Content>
        </ ParallaxContainer>
    );
};

export default Services;