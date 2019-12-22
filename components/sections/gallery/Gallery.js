import React from 'react';
import style from 'styled-components';

import GalleryItem from './item';
import Content from '../../Content';
import Section from '../../Section';
import ParallaxContainer from '../../ParallaxContainer';

const GalleryContent = style.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0 -1rem;

    width: 100%;
`

const Gallery = () => {
    return (
        <ParallaxContainer variant="primary">
            <Content>
                <Section>
                    <Section.Header>Galeria</Section.Header>

                    <GalleryContent >
                        <GalleryItem />
                        <GalleryItem />
                        <GalleryItem />
                        <GalleryItem />
                    </GalleryContent >
                </Section>
            </Content>
        </ParallaxContainer>
    );
};

export default Gallery;