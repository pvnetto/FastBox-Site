import React from 'react';
import style from 'styled-components';
import Colors from '../../../helpers/colors';
import { device } from '../../../helpers/queries';

const GalleryItemStyle = style.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;

    padding: 0.5rem;
    margin: 0 0.3rem;
    min-width: 100%;

    @media ${device.tablet} {
        min-width: 30%;
    }

    @media ${device.laptop} {
        min-width: 0;
    }
`

const GalleryItemImage = style.div`
    display: flex;
    flex-wrap: wrap;
    align-items: column;
    justify-content: center;

    padding: 1rem;
    background: ${Colors.YELLOW};

    cursor: pointer;

    img {
        width: 100%;
    }

    p {
        margin-bottom: 0.3rem;
    }
`


const GalleryItem = ({ onClick }) => {
    return (
        <GalleryItemStyle>
            <GalleryItemImage onClick={() => onClick({ text: "Antes", image: "./images/fastbox_pintura_estufa.jpg" })}>
                <p>Antes</p>
                <img src="./images/fastbox_pintura_estufa.jpg" alt="" />
            </GalleryItemImage>
            <GalleryItemImage onClick={() => onClick({ text: "Depois", image: "./images/fastbox_pintura_estufa.jpg" })}>
                <p>Depois</p>
                <img src="./images/fastbox_pintura_estufa.jpg" alt="" />
            </GalleryItemImage>
        </GalleryItemStyle>
    );
};

export default GalleryItem;