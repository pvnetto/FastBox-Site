import React from 'react';
import style from 'styled-components';

import Button from '../../buttons/Button';
import Container from '../../Container';
import Content from '../../Content';

const JumbotronStyle = style.header`
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;

    h1 {
        margin-top: 5rem;
        margin-bottom: 0.5rem;
    }
`;

const JumbotronButtons = style.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 2rem 0;

    a {
        display: inline-block;
        width: 25%;

        margin: 0 2rem;
    }

    button {
        padding: 1.5rem 0;
        width: 100%;
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
        <Container variant={'secondary'}>
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
                                <p>Nosso foco é na qualidade e agilidade do serviço</p>
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