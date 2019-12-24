import React from 'react';
import style from 'styled-components';

import Content from '../../layout/Content';
import Section from '../../layout/Section';
import ParallaxContainer from '../../layout/ParallaxContainer';
import { RGBColors } from '../../helpers/colors';
import { device } from '../../helpers/queries';

const PartnersContent = style.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 -2rem;
`

const PartnerItem = style.div`
    flex: 1 1 30%;
    margin: 2rem;
    
    img {
        width: 100%;
    }

    @media ${device.tablet} {
        flex: 1;
    }
`

const PartnersOverlay = style.div`
    background: rgba(${RGBColors.BLUE[0]}, ${RGBColors.BLUE[1]}, ${RGBColors.BLUE[2]}, 0.87);
`

const Partners = () => {
    return (
        <ParallaxContainer id="parceiros" image='./images/partners_handshake_bg.jpg' variant="secondary">
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