import React from 'react';
import style from 'styled-components';

import Button from '../../buttons/Button';
import Container from '../../layout/Container';
import Content from '../../layout/Content';
import Colors from '../../helpers/colors';
import { device } from '../../helpers/queries';

const JumbotronStyle = style.header`
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;
    transform: translateX(-2000px);

    animation: enter 0.5s;
    animation-fill-mode: forwards;

    h1 {
        margin-top: 5rem;
        margin-bottom: 0.5rem;
    }

    span {
        color: ${Colors.YELLOW};
    }

    @keyframes enter {
        0% {
            transform: translateX(-2000px);
        }

        100% {
            transform: translateX(0);
        }
    }
`;

const JumbotronButtons = style.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    margin: 2rem 0;

    a {
        display: inline-block;
        width: 100%;

        margin: 0.3rem 0;
    }

    button {
        padding: 1.5rem 0;
        width: 100%;
    }

    @media ${device.tablet} {
        a {
            width: 300px;
            margin: 0 1rem;
        }
    }
`;

// Move to separate component
const BackgroundBG = style.div`
    width: 100%;
    height: 100%;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background-image: url(${'./images/fastbox_dentro.jpg'});
        background-size: cover;
        filter: blur(2px) brightness(0.1);
    }
`

const Jumbotron = () => {
    return (
        <Container id="inicio" variant={'secondary'}>
            <BackgroundBG>
                <Content>
                    <JumbotronStyle>
                        <div>
                            <div>
                                <h1>
                                    Somos uma oficina de
                                    <span> funilaria </span> e
                                    <span> pintura </span> com mais de 15 anos no mercado.
                                </h1>
                                <p>Nosso foco é na <span>qualidade</span> e <span>agilidade</span> do serviço</p>
                            </div>

                            <JumbotronButtons>
                                <a href="#about">
                                    <Button primary >Saiba mais</Button>
                                </a>
                                <a href="#services">
                                    <Button primary >Conheça nossos serviços</Button>
                                </a>
                            </JumbotronButtons>
                        </div>
                    </ JumbotronStyle>
                </Content>
            </BackgroundBG>
        </ Container>
    );
};

export default Jumbotron;