import React from 'react';
import style from 'styled-components';

import Colors from '../../../helpers/colors';
import { device } from '../../../helpers/queries';

const ModalContainer = style.div`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 101;

    width: 100%;
    height: 100%;
    overflow: auto;

    display: none;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.4);

    @media ${device.tablet} {
        display: flex;
    }
`

const ModalContent = style.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
    margin: auto;

    background: ${Colors.YELLOW};

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    animation-name: animatetop;
    animation-duration: 0.4s;

    @keyframes animatetop {
        from {
            top: -300px;
            opacity: 0;
        }
        to {
            top: 0;
            opacity: 1;
        }
    }
`

const ModalHeader = style.div`
    flex: 1;
    position: relative;

    width: 100%;
    max-height: 60px;

    padding: 1rem 0;

    background: ${Colors.BLUE};
    color: white;
    text-align: center;
`

const ModalBody = style.div`
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1rem 0;

    img {
        width: 80%;
        max-width: 960px;
        max-height: 600px;
    }
`

const ModalFooter = style.div`
    flex: 1;

    width: 100%;
    min-height: 30px;

    background: ${Colors.BLUE};
    color: white;
`

const CloseBtn = style.span`
    color: #aaa;

    position: absolute;
    top: 5px;
    right: 10px;

    font-size: 28px;
    font-weight: bold;

    &:hover,
    &:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
`

const Modal = ({ data, show, handleClose }) => {

    if (!show) return null;

    return (
        <ModalContainer>
            <ModalContent>
                <ModalHeader>
                    <CloseBtn onClick={handleClose}>&times;</CloseBtn>
                    <p>{data.text}</p>
                </ModalHeader>

                <ModalBody>
                    <img src={data.image} alt="" />
                </ModalBody>

                <ModalFooter></ModalFooter>
            </ModalContent>
        </ ModalContainer>
    );
};

export default Modal;