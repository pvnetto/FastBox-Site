import React from 'react';
import style from 'styled-components';

import Container from '../../Container';
import Content from '../../Content';
import Section from '../../Section';

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

const Partners = () => {
    return (
        <Container variant="secondary">
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
        </Container>
    );
};

export default Partners;