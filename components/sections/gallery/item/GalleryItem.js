import React from 'react';
import style from 'styled-components';
import Colors from '../../../helpers/colors';

const GalleryItemStyle = style.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;

    padding: 0.5rem;
    margin: 0 0.3rem;
`

const GalleryItemImage = style.div`
    display: flex;
    flex-wrap: wrap;
    align-items: column;
    justify-content: center;

    padding: 1rem;
    margin-bottom: 0.3rem;
    background: ${Colors.YELLOW};

    img {
        width: 100%;
    }

    p {
        margin-bottom: 0.3rem;
    }
`


const GalleryItem = () => {
    return (
        <GalleryItemStyle>
            <GalleryItemImage>
                <p>Antes</p>
                <img src="./images/fastbox_pintura_estufa.jpg" alt="" />
            </GalleryItemImage>
            <GalleryItemImage>
                <p>Depois</p>
                <img src="./images/fastbox_pintura_estufa.jpg" alt="" />
            </GalleryItemImage>
        </GalleryItemStyle>
    );
};

export default GalleryItem;