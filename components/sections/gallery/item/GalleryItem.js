import React from 'react';
import style from 'styled-components';
import Colors from '../../../helpers/colors';
import { device } from '../../../helpers/queries';

const GalleryItemStyle = style.div`
    flex: 1 1 30%;

    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;

    padding: 0.5rem;
    margin: 0.5rem;

    @media ${device.tablet} {
        flex: 1 1 30%;
    }

    @media ${device.laptopL} {
        flex: 1;
    }
`

const GalleryItemContent = style.div`
    display: flex;
    flex-wrap: wrap;
    align-items: column;
    justify-content: center;
    height: 50%;

    padding: 1rem;
    background: ${Colors.YELLOW};

    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    p {
        margin-bottom: 0.3rem;
    }
`


const GalleryItem = ({ onClick }) => {
    return (
        <GalleryItemStyle>
            <GalleryItemContent onClick={() => onClick({ text: "Antes", image: "./images/fastbox_pintura_estufa.jpg" })}>
                <p>Antes</p>
                <img src="./images/fastbox_pintura_estufa.jpg" alt="" />
            </GalleryItemContent>
            <GalleryItemContent onClick={() => onClick({ text: "Depois", image: "./images/fastbox_pintura_estufa.jpg" })}>
                <p>Depois</p>
                <img src="./images/fastbox_pintura_estufa.jpg" alt="" />
            </GalleryItemContent>
        </GalleryItemStyle>
    );
};

export default GalleryItem;