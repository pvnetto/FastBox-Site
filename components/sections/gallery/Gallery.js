import React, { useState } from 'react';
import style from 'styled-components';

import GalleryItem from './item';
import Content from '../../layout/Content';
import Section from '../../layout/Section';
import ParallaxContainer from '../../layout/ParallaxContainer';

import Modal from './modal/Modal';
import { device } from '../../helpers/queries';

const GalleryContent = style.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    width: 100%;

    @media ${device.tablet} {
        flex-direction: row;
    }
`

const Gallery = () => {

    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({});

    const openModal = (data) => {
        setShowModal(true);
        setModalData(data);
    }

    return (
        <ParallaxContainer id="galeria" variant="primary">
            <Content>
                <Section>
                    <Section.Header>Galeria</Section.Header>

                    <GalleryContent >
                        <GalleryItem onClick={openModal} />
                        <GalleryItem onClick={openModal} />
                        <GalleryItem onClick={openModal} />
                        <GalleryItem onClick={openModal} />
                    </GalleryContent >

                    <Modal show={showModal} handleClose={() => setShowModal(false)} data={modalData} />
                </Section>
            </Content>
        </ParallaxContainer>
    );
};

export default Gallery;