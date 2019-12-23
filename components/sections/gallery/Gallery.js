import React, { useState } from 'react';
import style from 'styled-components';

import GalleryItem from './item';
import Content from '../../layout/Content';
import Section from '../../layout/Section';
import ParallaxContainer from '../../layout/ParallaxContainer';

import Modal from './modal/Modal';

const GalleryContent = style.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0 -1rem;

    width: 100%;
`

const Gallery = () => {

    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({});

    const openModal = (data) => {
        setShowModal(true);
        setModalData(data);
    }

    return (
        <ParallaxContainer variant="primary">
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