import React from 'react';
import style from 'styled-components';

import Content from '../../Content';
import Section from '../../Section';
import ParallaxContainer from '../../ParallaxContainer';
import Container from '../../Container';
import Colors, { RGBColors } from '../../helpers/colors';

const PartnersContent = style.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
    margin: 0 -2rem;
`

const PartnerItem = style.div`
    flex: 1;
    margin: 0 2rem;
    
    img {
        width: 100%;
    }
`

const PartnersOverlay = style.div`
    background: rgba(${RGBColors.BLUE[0]}, ${RGBColors.BLUE[1]}, ${RGBColors.BLUE[2]}, 0.87);
`

const Partners = () => {
    return (
        <ParallaxContainer image='./images/partners_handshake_bg.jpg' variant="secondary">
            <PartnersOverlay>
                <Content>
                    <Section>
                        <Section.Header>Nossos Parceiros</Section.Header>
                        <PartnersContent>
                            <PartnerItem>
                                <img src="./images/partners/Mapfre_logo_logotype.png" alt="" />
                            </PartnerItem>
                            <PartnerItem>
                                <img src="./images/partners/sompo.png" alt="" />
                            </PartnerItem>
                            <PartnerItem>
                                <img src="./images/partners/Zurich.png" alt="" />
                            </PartnerItem>
                            <PartnerItem>
                                <img src="./images/partners/hdi-logo.png" alt="" />
                            </PartnerItem>
                        </PartnersContent>
                    </Section>
                </Content>
            </PartnersOverlay>
        </ ParallaxContainer>
    );
};

export default Partners;