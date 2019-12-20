import React from 'react';
import style from 'styled-components';
import Button from '../../../buttons/Button';

const GalleryItemStyle = style.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;

    margin: 0 1rem;

    img {
        width: 100%;
        margin-bottom: 0.2rem;
    }

    button {
        width: 100%;
        padding: 1rem 0;
        margin-top: 0.5rem;
    }
`

const GalleryItem = () => {
    return (
        <GalleryItemStyle>
            <img src="./images/fastbox_pintura_estufa.jpg" alt="" />
            <img src="./images/fastbox_carro_banco.jpg" alt="" />
            <Button>Veja o antes/depois!</Button>
        </GalleryItemStyle>
    );
};

export default GalleryItem;